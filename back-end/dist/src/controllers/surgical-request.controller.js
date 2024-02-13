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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurgicalRequestController = void 0;
const common_1 = require("@nestjs/common");
const surgical_request_service_1 = require("../services/surgical-request.service");
let SurgicalRequestController = class SurgicalRequestController {
    constructor(surgicalRequestService) {
        this.surgicalRequestService = surgicalRequestService;
    }
    async getAllSurgicalRequests() {
        return this.surgicalRequestService.getAllSurgicalRequests();
    }
    async createSurgicalRequest(data) {
        return this.surgicalRequestService.createSurgicalRequest(data);
    }
    async updateSurgicalRequest(id, updateData) {
        return this.surgicalRequestService.updateSurgicalRequest(parseInt(id), updateData);
    }
    async deleteSurgicalRequest(code) {
        return this.surgicalRequestService.deleteSurgicalRequest(parseInt(code));
    }
};
exports.SurgicalRequestController = SurgicalRequestController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SurgicalRequestController.prototype, "getAllSurgicalRequests", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SurgicalRequestController.prototype, "createSurgicalRequest", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SurgicalRequestController.prototype, "updateSurgicalRequest", null);
__decorate([
    (0, common_1.Delete)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SurgicalRequestController.prototype, "deleteSurgicalRequest", null);
exports.SurgicalRequestController = SurgicalRequestController = __decorate([
    (0, common_1.Controller)('surgical-request'),
    __metadata("design:paramtypes", [surgical_request_service_1.SurgicalRequestServiceImpl])
], SurgicalRequestController);
//# sourceMappingURL=surgical-request.controller.js.map