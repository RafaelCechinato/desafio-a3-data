import { Controller, Get, Post, Body } from '@nestjs/common';
import { RoomsServiceImpl } from '../services/room.service';
import { Rooms } from '../model/rooms.model';

@Controller('room')
export class RoomsController {
    constructor(private readonly roomsService: RoomsServiceImpl) {}

    @Get()
    async getAllRooms(): Promise<Rooms[]> {
        return this.roomsService.getAllRooms();
    }

    @Post()
    async createRoom(@Body() data: { number: string; floor: string; block: string }): Promise<Rooms> {
        return this.roomsService.createRoom(data);
    }

}
