"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../modules/prisma.module");
const procedures_controller_1 = require("../controllers/procedures.controller");
const hospital_controller_1 = require("../controllers/hospital.controller");
const rooms_controller_1 = require("../controllers/rooms.controller");
const surgical_request_controller_1 = require("../controllers/surgical-request.controller");
const procedures_service_1 = require("../services/procedures.service");
const hospital_service_1 = require("../services/hospital.service");
const room_service_1 = require("../services/room.service");
const surgical_request_service_1 = require("../services/surgical-request.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [
            procedures_controller_1.ProceduresController,
            hospital_controller_1.HospitalController,
            rooms_controller_1.RoomsController,
            surgical_request_controller_1.SurgicalRequestController
        ],
        providers: [
            procedures_service_1.ProceduresServiceImpl,
            hospital_service_1.HospitalServiceImpl,
            room_service_1.RoomsServiceImpl,
            surgical_request_service_1.SurgicalRequestServiceImpl,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map