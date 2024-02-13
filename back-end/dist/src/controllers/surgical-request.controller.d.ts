import { SurgicalRequestServiceImpl } from '../services/surgical-request.service';
import { SurgicalRequest, SurgicalRequestUpdateInput } from '../model/surgical-request.model';
export declare class SurgicalRequestController {
    private readonly surgicalRequestService;
    constructor(surgicalRequestService: SurgicalRequestServiceImpl);
    getAllSurgicalRequests(): Promise<SurgicalRequest[]>;
    createSurgicalRequest(data: any): Promise<SurgicalRequest>;
    updateSurgicalRequest(id: string, updateData: SurgicalRequestUpdateInput): Promise<SurgicalRequest>;
    deleteSurgicalRequest(code: string): Promise<void>;
}
