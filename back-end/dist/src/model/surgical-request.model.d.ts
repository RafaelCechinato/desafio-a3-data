import { Hospital, Procedures, Rooms } from "@prisma/client";
export interface SurgicalRequest {
    code: number;
    procedures: Procedures[];
    room: Rooms[];
    doctor: string;
    pacient: string;
    hospital: Hospital[];
    dateSurgical: Date;
    dateCreate: Date;
    observations: string;
}
export interface SurgicalRequestService {
    getAllSurgicalRequests(): Promise<SurgicalRequest[]>;
    getSurgicalRequestByCode(code: number): Promise<SurgicalRequest | null>;
    createSurgicalRequest(data: {
        procedures: Procedures[];
        room: Rooms[];
        doctor: string;
        pacient: string;
        hospital: Hospital[];
        dateSurgical: Date;
        dateCreate: Date;
        observations: string;
    }): Promise<SurgicalRequest>;
    updateSurgicalRequest(code: number, data: {
        procedures: Procedures[];
        room: Rooms[];
        doctor: string;
        pacient: string;
        hospital: Hospital[];
        dateSurgical: Date;
        dateCreate: Date;
        observations: string;
    }): Promise<SurgicalRequest>;
    deleteSurgicalRequest(code: number): Promise<void>;
}
