import { Procedures, Rooms, Hospital } from "@prisma/client";
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
export interface SurgicalRequestUpdateInput {
    procedures?: {
        connect?: Procedures[];
        disconnect?: Procedures[];
    };
    room?: {
        connect?: Rooms[];
        disconnect?: Rooms[];
    };
    doctor?: string;
    pacient?: string;
    hospital?: {
        connect?: Hospital[];
        disconnect?: Hospital[];
    };
    dateSurgical?: Date;
    dateCreate?: Date;
    observations?: string;
}
export interface SurgicalRequestService {
    getAllSurgicalRequests(): Promise<SurgicalRequest[]>;
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
    updateSurgicalRequest(code: number, data: SurgicalRequestUpdateInput): Promise<SurgicalRequest>;
    deleteSurgicalRequest(code: number): Promise<void>;
}
