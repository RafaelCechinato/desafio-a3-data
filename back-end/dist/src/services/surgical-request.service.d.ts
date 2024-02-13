import { PrismaService } from '../../prisma/prisma.service';
import { SurgicalRequest, SurgicalRequestService, SurgicalRequestUpdateInput } from '../model/surgical-request.model';
import { HttpService } from '@nestjs/axios';
export declare class SurgicalRequestServiceImpl implements SurgicalRequestService {
    private readonly prisma;
    private readonly httpService;
    constructor(prisma: PrismaService, httpService: HttpService);
    getAllSurgicalRequests(): Promise<SurgicalRequest[]>;
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
    updateSurgicalRequest(code: number, data: SurgicalRequestUpdateInput): Promise<SurgicalRequest>;
    deleteSurgicalRequest(code: number): Promise<void>;
}
