import { PrismaService } from '../../prisma/prisma.service';
import { SurgicalRequest, SurgicalRequestService } from '../model/surgical-request.model';
export declare class SurgicalRequestServiceImpl implements SurgicalRequestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllSurgicalRequests(): Promise<SurgicalRequest[]>;
    getSurgicalRequestByCode(code: number): Promise<SurgicalRequest | null>;
    createSurgicalRequest(data: {
        room: {
            code: number;
        }[];
        procedures: {
            code: number;
        }[];
        doctor: string;
        pacient: string;
        hospital: {
            code: number;
        }[];
        dateSurgical: Date;
        dateCreate: Date;
        observations: string;
    }): Promise<SurgicalRequest>;
    updateSurgicalRequest(code: number, data: {
        room?: {
            code: number;
            number: string;
            floor: string;
            block: string;
        }[];
        procedures?: {
            code: number;
            name: string;
        }[];
        doctor?: string;
        pacient?: string;
        hospital?: {
            code: number;
            name: string;
        }[];
        dateSurgical?: Date;
        dateCreate?: Date;
        observations?: string;
    }): Promise<SurgicalRequest | null>;
    deleteSurgicalRequest(code: number): Promise<void>;
}
