import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProceduresServiceImpl } from '../services/procedures.service';
import { Procedures } from '../model/procedures.model';

@Controller('procedures')
export class ProceduresController {
    constructor(private readonly proceduresService: ProceduresServiceImpl) {}

    @Get()
    async getAllProcedures(): Promise<Procedures[]> {
        return this.proceduresService.getAllProcedures();
    }

    @Post()
    async createProcedure(@Body() data: { name: string }): Promise<Procedures> {
        return this.proceduresService.createProcedure(data);
    }

}
