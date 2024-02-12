import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Hospital, HospitalService } from '../model/hospital.model';

@Injectable()
export class HospitalServiceImpl implements HospitalService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllHospitals(): Promise<Hospital[]> {
    return this.prisma.getPrisma().hospital.findMany();
  }

  async createHospital(data: { name: string }): Promise<Hospital> {
    return this.prisma.getPrisma().hospital.create({ data });
  }
}
