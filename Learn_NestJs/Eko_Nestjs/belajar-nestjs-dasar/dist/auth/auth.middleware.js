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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
let AuthMiddleware = class AuthMiddleware {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async use(req, res, next) {
        const username = Number(req.headers['x-username']);
        if (!username) {
            throw new common_1.HttpException('Unauhorized(1)', 401);
        }
        const user = await this.prismaService.user.findUnique({
            where: {
                id: username,
            },
        });
        if (user) {
            req.user = user;
            next();
        }
        else
            throw new common_1.HttpException('Unauhorized(2)', 401);
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map