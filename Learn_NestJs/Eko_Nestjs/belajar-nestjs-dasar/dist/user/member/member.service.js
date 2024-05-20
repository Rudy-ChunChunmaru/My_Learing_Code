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
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const connection_1 = require("../connection/connection");
const mail_service_1 = require("../mail/mail.service");
let MemberService = class MemberService {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    getConnectionName() {
        const connaction = this.moduleRef.get(connection_1.Connection);
        return connaction.getName();
    }
    sendEmail() {
        const mailService = this.moduleRef.get(mail_service_1.MailService);
        return mailService.send();
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ModuleRef])
], MemberService);
//# sourceMappingURL=member.service.js.map