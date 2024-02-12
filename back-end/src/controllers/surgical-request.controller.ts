import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SurgicalRequestServiceImpl } from '../services/surgical-request.service';
import { SurgicalRequest } from '../model/surgical-request.model';

@Controller('surgical-request')
export class SurgicalRequestController {
    constructor(private readonly surgicalRequestService: SurgicalRequestServiceImpl) {}

    @Get()
    async getAllSurgicalRequests(): Promise<SurgicalRequest[]> {
        return this.surgicalRequestService.getAllSurgicalRequests();
    }

    @Get(':code')
    async getSurgicalRequestByCode(@Param('code') code: number): Promise<SurgicalRequest | null> {
        return this.surgicalRequestService.getSurgicalRequestByCode(code);
    }

    @Post()
    async createSurgicalRequest(@Body() data: any): Promise<SurgicalRequest> {
        return this.surgicalRequestService.createSurgicalRequest(data);
    }

    @Put(':code')
    async updateSurgicalRequest(@Param('code') code: number, @Body() data: any): Promise<SurgicalRequest | null> {
        return this.surgicalRequestService.updateSurgicalRequest(code, data);
    }

    @Delete(':code')
    async deleteSurgicalRequest(@Param('code') code: number): Promise<void> {
        return this.surgicalRequestService.deleteSurgicalRequest(code);
    }
}
