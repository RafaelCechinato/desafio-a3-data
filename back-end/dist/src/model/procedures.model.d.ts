export interface Procedures {
    code: number;
    name: string;
}
export interface ProceduresService {
    getAllProcedures(): Promise<Procedures[]>;
    createProcedure(data: {
        name: string;
    }): Promise<Procedures>;
}
