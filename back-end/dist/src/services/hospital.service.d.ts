import { PrismaService } from '../../prisma/prisma.service';
import { Hospital, HospitalService } from '../model/hospital.model';
export declare class HospitalServiceImpl implements HospitalService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllHospitals(): Promise<Hospital[]>;
    createHospital(data: {
        name: string;
    }): Promise<Hospital>;
}
