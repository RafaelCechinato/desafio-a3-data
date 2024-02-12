"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PrismaService {
    constructor() { }
    getPrisma() {
        return prisma;
    }
}
exports.PrismaService = PrismaService;
//# sourceMappingURL=prisma.service.js.map