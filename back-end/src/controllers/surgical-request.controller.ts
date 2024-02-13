import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SurgicalRequestServiceImpl } from '../services/surgical-request.service';
import { SurgicalRequest, SurgicalRequestUpdateInput } from '../model/surgical-request.model';
import { Prisma } from '@prisma/client';

@Controller('surgical-request')
export class SurgicalRequestController {
    constructor(private readonly surgicalRequestService: SurgicalRequestServiceImpl) {}

    @Get()
    async getAllSurgicalRequests(): Promise<SurgicalRequest[]> {
        return this.surgicalRequestService.getAllSurgicalRequests();
    }

    @Post()
    async createSurgicalRequest(@Body() data: any): Promise<SurgicalRequest> {
        return this.surgicalRequestService.createSurgicalRequest(data);
    }

    @Put(':id')
    async updateSurgicalRequest( @Param('id') id: string, @Body() updateData: SurgicalRequestUpdateInput, ): Promise<SurgicalRequest> {
     return this.surgicalRequestService.updateSurgicalRequest(parseInt(id), updateData);
    }

    @Delete(':code')
    async deleteSurgicalRequest(@Param('code') code: string): Promise<void> {
        return this.surgicalRequestService.deleteSurgicalRequest(parseInt(code));
    }
}
