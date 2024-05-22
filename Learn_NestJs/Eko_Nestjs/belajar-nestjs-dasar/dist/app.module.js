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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const nest_winston_1 = require("nest-winston");
const validation_module_1 = require("./validation/validation.module");
const winston = require("winston");
const log_middleware_1 = require("./log/log.middleware");
const auth_middleware_1 = require("./auth/auth.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(log_middleware_1.LogMiddleware).forRoutes({
            path: '/api/*',
            method: common_1.RequestMethod.ALL,
        });
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({
            path: '/api/users/current',
            method: common_1.RequestMethod.GET,
        });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            validation_module_1.ValidationModule.forRoot(true),
            nest_winston_1.WinstonModule.forRoot({
                format: winston.format.json(),
                level: 'debug',
                transports: [new winston.transports.Console()],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map