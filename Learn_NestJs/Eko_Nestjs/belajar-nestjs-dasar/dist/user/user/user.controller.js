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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const connection_1 = require("../connection/connection");
let UserController = class UserController {
    constructor(service_constructor, connection) {
        this.service_constructor = service_constructor;
        this.connection = connection;
    }
    async getConnection() {
        const test = this.connection;
        return test.getName();
    }
    async sayHello(name) {
        const test = this.private_inject;
        return test.sayhello(name);
    }
    viewhello(name, respones) {
        respones.render('index.html', {
            title: 'Tamplate Engine',
            name: name,
        });
    }
    setcookie(name, response) {
        response.cookie('name', name);
        response.status(200).send('success set cookie');
    }
    getcookie(request) {
        return request.cookies['name'];
    }
    sempleResponse() {
        return {
            data: 'hello json',
        };
    }
    sempleResResponse(response) {
        response.status(200).json({
            data: 'hello json by res',
        });
    }
    redirect() {
        return {
            url: '/api/users/semple-response',
            statusCode: 301,
        };
    }
    async sayhello(name_f, name_s) {
        return `hello ${name_f} ${name_s}`;
    }
    getbyid(id) {
        return `GET ${id}`;
    }
    getbyidUseReq(request) {
        return `GET ${request.params.id}`;
    }
    post() {
        return 'POST';
    }
    get() {
        return 'GET';
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('/getconnection'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getConnection", null);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", user_service_1.UserService)
], UserController.prototype, "private_inject", void 0);
__decorate([
    (0, common_1.Get)('/helloo'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sayHello", null);
__decorate([
    (0, common_1.Get)('/view/hello'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "viewhello", null);
__decorate([
    (0, common_1.Get)('/set-cookie'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "setcookie", null);
__decorate([
    (0, common_1.Get)('/get-cookie'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UserController.prototype, "getcookie", null);
__decorate([
    (0, common_1.Get)('/semple-response'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserController.prototype, "sempleResponse", null);
__decorate([
    (0, common_1.Get)('/semple-res-response'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "sempleResResponse", null);
__decorate([
    (0, common_1.Get)('/redirect'),
    (0, common_1.Redirect)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserController.prototype, "redirect", null);
__decorate([
    (0, common_1.Get)('/hello'),
    __param(0, (0, common_1.Query)('name_f')),
    __param(1, (0, common_1.Query)('name_s')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sayhello", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], UserController.prototype, "getbyid", null);
__decorate([
    (0, common_1.Get)('/req/:id'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UserController.prototype, "getbyidUseReq", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "post", null);
__decorate([
    (0, common_1.Get)('/sample'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "get", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/api/users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        connection_1.Connection])
], UserController);
//# sourceMappingURL=user.controller.js.map