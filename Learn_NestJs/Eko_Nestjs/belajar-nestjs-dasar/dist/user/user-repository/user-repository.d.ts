import { Connection } from '../connection/connection';
export declare class UserRepository {
    connection: Connection;
    save(): void;
}
export declare function createUserRepository(connection: Connection): UserRepository;
