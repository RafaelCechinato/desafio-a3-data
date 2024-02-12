import { ProceduresServiceImpl } from '../services/procedures.service';
import { Procedures } from '../model/procedures.model';
export declare class ProceduresController {
    private readonly proceduresService;
    constructor(proceduresService: ProceduresServiceImpl);
    getAllProcedures(): Promise<Procedures[]>;
    createProcedure(data: {
        name: string;
    }): Promise<Procedures>;
}
