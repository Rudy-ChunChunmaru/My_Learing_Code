"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = exports.MongoDBConnect = exports.MySQLConnect = exports.Connection = void 0;
const common_1 = require("@nestjs/common");
class Connection {
    getName() {
        return null;
    }
}
exports.Connection = Connection;
let MySQLConnect = class MySQLConnect extends Connection {
    getName() {
        return 'MySQL';
    }
};
exports.MySQLConnect = MySQLConnect;
exports.MySQLConnect = MySQLConnect = __decorate([
    (0, common_1.Injectable)()
], MySQLConnect);
let MongoDBConnect = class MongoDBConnect extends Connection {
    getName() {
        return 'MongoDB';
    }
};
exports.MongoDBConnect = MongoDBConnect;
exports.MongoDBConnect = MongoDBConnect = __decorate([
    (0, common_1.Injectable)()
], MongoDBConnect);
function createConnection(configService) {
    if (configService.get('DATABASE') == 'mysql') {
        return new MySQLConnect();
    }
    else {
        return new MongoDBConnect();
    }
}
exports.createConnection = createConnection;
//# sourceMappingURL=connection.js.map