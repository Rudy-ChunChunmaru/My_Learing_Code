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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const prisma_service_1 = require("../../prisma/prisma/prisma.service");
const winston_1 = require("winston");
let UserRepository = class UserRepository {
    constructor(prismaService, logger) {
        this.prismaService = prismaService;
        this.logger = logger;
        this.logger.info('create user repository');
    }
    async save(firstname, lastname) {
        this.logger.info(`create user with firstName ${firstname} and lastname ${lastname}`);
        return await this.prismaService.user.create({
            data: {
                first_name: firstname,
                last_name: lastname,
            },
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        winston_1.Logger])
], UserRepository);
//# sourceMappingURL=user-repository.js.map