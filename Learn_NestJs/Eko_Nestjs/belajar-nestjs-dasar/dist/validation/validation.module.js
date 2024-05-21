"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ValidationModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationModule = void 0;
const common_1 = require("@nestjs/common");
const validation_service_1 = require("./validation/validation.service");
let ValidationModule = ValidationModule_1 = class ValidationModule {
    static forRoot(isGlobal) {
        return {
            module: ValidationModule_1,
            global: isGlobal,
            providers: [validation_service_1.ValidationService],
            exports: [validation_service_1.ValidationService],
        };
    }
};
exports.ValidationModule = ValidationModule;
exports.ValidationModule = ValidationModule = ValidationModule_1 = __decorate([
    (0, common_1.Module)({})
], ValidationModule);
//# sourceMappingURL=validation.module.js.map