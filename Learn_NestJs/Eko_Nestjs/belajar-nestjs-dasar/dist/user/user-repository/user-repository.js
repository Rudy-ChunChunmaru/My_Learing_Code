"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRepository = exports.UserRepository = void 0;
class UserRepository {
    save() {
        console.info(`save user with connaction ${this.connection.getName()}`);
    }
}
exports.UserRepository = UserRepository;
function createUserRepository(connection) {
    const repository = new UserRepository();
    repository.connection = connection;
    return repository;
}
exports.createUserRepository = createUserRepository;
//# sourceMappingURL=user-repository.js.map