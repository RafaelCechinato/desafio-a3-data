import { Controller, Get, Post, Body } from '@nestjs/common';
import { HospitalServiceImpl } from '../services/hospital.service';
import { Hospital } from '../model/hospital.model';

@Controller('hospital')
export class HospitalController {
    constructor(private readonly hospitalService: HospitalServiceImpl) {}

    @Get()
    async getAllHospitals(): Promise<Hospital[]> {
        return this.hospitalService.getAllHospitals();
    }

    @Post()
    async createHospital(@Body() data: { name: string }): Promise<Hospital> {
        return this.hospitalService.createHospital(data);
    }

}
