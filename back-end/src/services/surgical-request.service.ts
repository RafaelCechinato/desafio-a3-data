import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SurgicalRequest, SurgicalRequestService } from '../model/surgical-request.model';

@Injectable()
export class SurgicalRequestServiceImpl implements SurgicalRequestService {
    constructor(private readonly prisma: PrismaService) {}

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

    async getSurgicalRequestByCode(code: number): Promise<SurgicalRequest | null> {
        const surgicalRequestFromDB = await this.prisma.getPrisma().surgicalRequest.findUnique({
            where: { code },
            include: {
                room: true,
                procedures: true,
                hospital: true,
            },
        });

        if (!surgicalRequestFromDB) {
            return null;
        }

        return {
            code: surgicalRequestFromDB.code,
            room: surgicalRequestFromDB.room,
            procedures: surgicalRequestFromDB.procedures,
            doctor: surgicalRequestFromDB.doctor,
            pacient: surgicalRequestFromDB.pacient,
            hospital: surgicalRequestFromDB.hospital,
            dateSurgical: surgicalRequestFromDB.dateSurgical,
            dateCreate: surgicalRequestFromDB.dateCreate,
            observations: surgicalRequestFromDB.observations,
        };
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
                room: { connect: room }, // Use connect to reference existing rooms
                procedures: { connect: procedures }, // Use connect to reference existing procedures
                doctor,
                pacient,
                hospital: { connect: hospital }, // Use connect to reference existing hospitals
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
        data: {
            room?: { code: number; number: string; floor: string; block: string }[];
            procedures?: { code: number; name: string }[];
            doctor?: string;
            pacient?: string;
            hospital?: { code: number; name: string }[];
            dateSurgical?: Date;
            dateCreate?: Date;
            observations?: string;
        }
    ): Promise<SurgicalRequest | null> {
        const existingSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.findUnique({
            where: { code },
        });

        if (!existingSurgicalRequest) {
            return null; 
        }

        const updatedSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.update({
            where: { code },
            data: {
                room: data.room ? { create: data.room } : undefined,
                procedures: data.procedures ? { create: data.procedures } : undefined,
                doctor: data.doctor,
                pacient: data.pacient,
                hospital: data.hospital ? { create: data.hospital } : undefined,
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
            room: updatedSurgicalRequest.room as { code: number; number: string; floor: string; block: string }[],
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
