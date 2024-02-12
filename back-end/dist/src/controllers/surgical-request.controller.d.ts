import { SurgicalRequestServiceImpl } from '../services/surgical-request.service';
import { SurgicalRequest } from '../model/surgical-request.model';
export declare class SurgicalRequestController {
    private readonly surgicalRequestService;
    constructor(surgicalRequestService: SurgicalRequestServiceImpl);
    getAllSurgicalRequests(): Promise<SurgicalRequest[]>;
    getSurgicalRequestByCode(code: number): Promise<SurgicalRequest | null>;
    createSurgicalRequest(data: any): Promise<SurgicalRequest>;
    updateSurgicalRequest(code: number, data: any): Promise<SurgicalRequest | null>;
    deleteSurgicalRequest(code: number): Promise<void>;
}
