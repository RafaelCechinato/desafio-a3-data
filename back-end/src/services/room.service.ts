import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Rooms, RoomsService } from '../model/rooms.model';

@Injectable()
export class RoomsServiceImpl implements RoomsService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllRooms(): Promise<Rooms[]> {
        return this.prisma.getPrisma().rooms.findMany();
    }

    async createRoom(
        data: { 
            number: string;
            floor: string;
            block: string; 
        }
    ): Promise<Rooms> {
    return this.prisma.getPrisma().rooms.create({ data });
  }
}
