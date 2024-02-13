"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurgicalRequestServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const axios_1 = require("@nestjs/axios");
let SurgicalRequestServiceImpl = class SurgicalRequestServiceImpl {
    constructor(prisma, httpService) {
        this.prisma = prisma;
        this.httpService = httpService;
    }
    async getAllSurgicalRequests() {
        const surgicalRequestsFromDB = await this.prisma.getPrisma().surgicalRequest.findMany({
            include: {
                room: true,
                procedures: true,
                hospital: true,
            },
        });
        return surgicalRequestsFromDB.map(request => ({
            code: request.code,
            room: request.room,
            procedures: request.procedures,
            doctor: request.doctor,
            pacient: request.pacient,
            hospital: request.hospital,
            dateSurgical: request.dateSurgical,
            dateCreate: request.dateCreate,
            observations: request.observations,
        }));
    }
    async createSurgicalRequest(data) {
        const { room, procedures, doctor, pacient, hospital, dateSurgical, dateCreate, observations } = data;
        const createdSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.create({
            data: {
                room: { connect: room },
                procedures: { connect: procedures },
                doctor,
                pacient,
                hospital: { connect: hospital },
                dateSurgical,
                dateCreate,
                observations,
            },
            include: {
                room: true,
                procedures: true,
                hospital: true,
            },
        });
        return {
            code: createdSurgicalRequest.code,
            room: createdSurgicalRequest.room,
            procedures: createdSurgicalRequest.procedures,
            doctor: createdSurgicalRequest.doctor,
            pacient: createdSurgicalRequest.pacient,
            hospital: createdSurgicalRequest.hospital,
            dateSurgical: createdSurgicalRequest.dateSurgical,
            dateCreate: createdSurgicalRequest.dateCreate,
            observations: createdSurgicalRequest.observations,
        };
    }
    async updateSurgicalRequest(code, data) {
        const existingSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.findUnique({
            where: { code },
        });
        if (!existingSurgicalRequest) {
            throw new common_1.NotFoundException(`SurgicalRequest with ID ${code} not found`);
        }
        const updatedSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.update({
            where: { code },
            data: {
                procedures: {
                    connect: data.procedures?.connect,
                    disconnect: data.procedures?.disconnect,
                },
                room: {
                    connect: data.room?.connect,
                    disconnect: data.room?.disconnect,
                },
                doctor: data.doctor,
                pacient: data.pacient,
                hospital: {
                    connect: data.hospital?.connect,
                    disconnect: data.hospital?.disconnect,
                },
                dateSurgical: data.dateSurgical,
                dateCreate: data.dateCreate,
                observations: data.observations,
            },
            include: {
                room: true,
                procedures: true,
                hospital: true,
            },
        });
        return {
            code: updatedSurgicalRequest.code,
            room: updatedSurgicalRequest.room,
            procedures: updatedSurgicalRequest.procedures,
            doctor: updatedSurgicalRequest.doctor,
            pacient: updatedSurgicalRequest.pacient,
            hospital: updatedSurgicalRequest.hospital,
            dateSurgical: updatedSurgicalRequest.dateSurgical,
            dateCreate: updatedSurgicalRequest.dateCreate,
            observations: updatedSurgicalRequest.observations,
        };
    }
    async deleteSurgicalRequest(code) {
        const existingSurgicalRequest = await this.prisma.getPrisma().surgicalRequest.findUnique({
            where: { code },
        });
        if (existingSurgicalRequest) {
            await this.prisma.getPrisma().surgicalRequest.delete({
                where: { code },
            });
        }
    }
};
exports.SurgicalRequestServiceImpl = SurgicalRequestServiceImpl;
exports.SurgicalRequestServiceImpl = SurgicalRequestServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        axios_1.HttpService])
], SurgicalRequestServiceImpl);
//# sourceMappingURL=surgical-request.service.js.map