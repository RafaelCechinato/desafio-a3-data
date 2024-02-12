import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Procedures, ProceduresService } from '../model/procedures.model';

@Injectable()
export class ProceduresServiceImpl implements ProceduresService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProcedures(): Promise<Procedures[]> {
    return this.prisma.getPrisma().procedures.findMany();
  }

  async createProcedure(data: { name: string }): Promise<Procedures> {
    return this.prisma.getPrisma().procedures.create({ data });
  }
}
