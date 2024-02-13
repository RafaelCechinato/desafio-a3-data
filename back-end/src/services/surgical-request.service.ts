import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SurgicalRequest, SurgicalRequestService, SurgicalRequestUpdateInput } from '../model/surgical-request.model';
import { Prisma } from '@prisma/client';
import { HttpService } from '@nestjs/axios';


@Injectable()
export class SurgicalRequestServiceImpl implements SurgicalRequestService {
    constructor(
      private readonly prisma: PrismaService,
      private readonly httpService: HttpService
    ) {}

    async getAllSurgicalRequests(): Promise<SurgicalRequest[]> {
        const surgicalRequestsFromDB = await this.prisma.getPrisma().surgicalRequest.findMany({
            include: {
                room: true,
                procedures: true,
                hospital: true,
            },
        });

        return surgicalRequestsFromDB.map(request => ({
            code: request.code,
            room: request.room,
            procedures: request.procedures,
            doctor: request.doctor,
            pacient: request.pacient,
            hospital: request.hospital,
            dateSurgical: request.dateSurgical,
            dateCreate: request.dateCreate,
            observations: request.observations,
        }));
    }

    async createSurgicalRequest(
        data: {
            room: { code: number }[];
            procedures: { code: number }[];
            doctor: string;
            pacient: string;
            hospital: { code: number }[];
            dateSurgical: Date;
            dateCreate: Date;
            observations: string;
        }
    ): Promise<SurgicalRequest> {
        const { room, procedures, doctor, pacient, hospital, dateSurgical, dateCreate, observations } = data;
    
        const createdSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.create({
            data: {
                room: { connect: room },
                procedures: { connect: procedures },
                doctor,
                pacient,
                hospital: { connect: hospital },
                dateSurgical,
                dateCreate,
                observations,
            },
            include: {
                room: true,
                procedures: true,
                hospital: true,
            },
        });
    
        return {
            code: createdSurgicalRequest.code,
            room: createdSurgicalRequest.room as { code: number; number: string; floor: string; block: string }[],
            procedures: createdSurgicalRequest.procedures,
            doctor: createdSurgicalRequest.doctor,
            pacient: createdSurgicalRequest.pacient,
            hospital: createdSurgicalRequest.hospital,
            dateSurgical: createdSurgicalRequest.dateSurgical,
            dateCreate: createdSurgicalRequest.dateCreate,
            observations: createdSurgicalRequest.observations,
        };
    }

    async updateSurgicalRequest(
      code: number,
      data: SurgicalRequestUpdateInput,
    ): Promise<SurgicalRequest> {
      const existingSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.findUnique({
        where: { code },
      });
  
      if (!existingSurgicalRequest) {
        throw new NotFoundException(`SurgicalRequest with ID ${code} not found`);
      }
  
      const updatedSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.update({
        where: { code },
        data: {
          procedures: {
            connect: data.procedures?.connect,
            disconnect: data.procedures?.disconnect,
          },
          room: {
            connect: data.room?.connect,
            disconnect: data.room?.disconnect,
          },
          doctor: data.doctor,
          pacient: data.pacient,
          hospital: {
            connect: data.hospital?.connect,
            disconnect: data.hospital?.disconnect,
          },
          dateSurgical: data.dateSurgical,
          dateCreate: data.dateCreate,
          observations: data.observations,
        },
        include: {
          room: true,
          procedures: true,
          hospital: true,
        },
      });
  
      return {
        code: updatedSurgicalRequest.code,
        room: updatedSurgicalRequest.room as any,
        procedures: updatedSurgicalRequest.procedures,
        doctor: updatedSurgicalRequest.doctor,
        pacient: updatedSurgicalRequest.pacient,
        hospital: updatedSurgicalRequest.hospital,
        dateSurgical: updatedSurgicalRequest.dateSurgical,
        dateCreate: updatedSurgicalRequest.dateCreate,
        observations: updatedSurgicalRequest.observations,
      };
    }


    async deleteSurgicalRequest(code: number): Promise<void> {
        const existingSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.findUnique({
            where: { code },
        });

        if (existingSurgicalRequest) {
            await this.prisma.getPrisma().surgicalRequest.delete({
                where: { code },
            });
        }
    }
}

