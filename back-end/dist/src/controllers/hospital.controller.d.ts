import { HospitalServiceImpl } from '../services/hospital.service';
import { Hospital } from '../model/hospital.model';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalServiceImpl);
    getAllHospitals(): Promise<Hospital[]>;
    createHospital(data: {
        name: string;
    }): Promise<Hospital>;
}
