import { PrismaService } from '../../prisma/prisma.service';
import { Procedures, ProceduresService } from '../model/procedures.model';
export declare class ProceduresServiceImpl implements ProceduresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllProcedures(): Promise<Procedures[]>;
    createProcedure(data: {
        name: string;
    }): Promise<Procedures>;
}
