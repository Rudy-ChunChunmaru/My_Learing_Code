"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserRequestValidation = exports.LoginUserRequest = void 0;
const zod_1 = require("zod");
class LoginUserRequest {
}
exports.LoginUserRequest = LoginUserRequest;
exports.loginUserRequestValidation = zod_1.z.object({
    username: zod_1.z.string().max(50).min(1),
    password: zod_1.z.string().max(50).min(1),
});
//# sourceMappingURL=login.model.js.map