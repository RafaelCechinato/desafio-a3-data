import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaService {
  constructor() {}

  getPrisma(): PrismaClient {
    return prisma;
  }
}