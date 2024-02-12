import { PrismaService } from '../../prisma/prisma.service';
import { Rooms, RoomsService } from '../model/rooms.model';
export declare class RoomsServiceImpl implements RoomsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllRooms(): Promise<Rooms[]>;
    createRoom(data: {
        number: string;
        floor: string;
        block: string;
    }): Promise<Rooms>;
}
