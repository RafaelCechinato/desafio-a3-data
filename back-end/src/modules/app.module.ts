import { Module } from '@nestjs/common';
import { PrismaModule } from '../modules/prisma.module';
import { ProceduresController } from '../controllers/procedures.controller';
import { HospitalController } from '../controllers/hospital.controller';
import { RoomsController } from '../controllers/rooms.controller';
import { SurgicalRequestController } from '../controllers/surgical-request.controller';
import { ProceduresServiceImpl } from '../services/procedures.service';
import { HospitalServiceImpl } from '../services/hospital.service';
import { RoomsServiceImpl } from '../services/room.service';
import { SurgicalRequestServiceImpl } from '../services/surgical-request.service';


@Module({
  imports: [PrismaModule],
  controllers: [
    ProceduresController,
    HospitalController,
    RoomsController,
    SurgicalRequestController
  ],
  providers: [
    ProceduresServiceImpl,
    HospitalServiceImpl,
    RoomsServiceImpl,
    SurgicalRequestServiceImpl,
  ],
})
export class AppModule {}
