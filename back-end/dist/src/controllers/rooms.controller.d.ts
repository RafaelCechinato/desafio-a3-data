import { RoomsServiceImpl } from '../services/room.service';
import { Rooms } from '../model/rooms.model';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsServiceImpl);
    getAllRooms(): Promise<Rooms[]>;
    createRoom(data: {
        number: string;
        floor: string;
        block: string;
    }): Promise<Rooms>;
}
