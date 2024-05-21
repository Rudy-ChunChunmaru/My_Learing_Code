"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const connection_1 = require("./connection/connection");
const mail_service_1 = require("./mail/mail.service");
const user_repository_1 = require("./user-repository/user-repository");
const member_service_1 = require("./member/member.service");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("../prisma/prisma.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            {
                provide: connection_1.Connection,
                useFactory: connection_1.createConnection,
                inject: [config_1.ConfigService],
            },
            {
                provide: mail_service_1.MailService,
                useValue: mail_service_1.mailService,
            },
            {
                provide: 'EmailService',
                useExisting: mail_service_1.MailService,
            },
            user_repository_1.UserRepository,
            member_service_1.MemberService,
        ],
        exports: [user_service_1.UserService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map