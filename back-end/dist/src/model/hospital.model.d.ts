export interface Hospital {
    code: number;
    name: string;
}
export interface HospitalService {
    getAllHospitals(): Promise<Hospital[]>;
    createHospital(data: {
        name: string;
    }): Promise<Hospital>;
}
