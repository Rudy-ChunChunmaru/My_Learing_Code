import { ConfigService } from '@nestjs/config';
export declare class Connection {
    getName(): string;
}
export declare class MySQLConnect extends Connection {
    getName(): string;
}
export declare class MongoDBConnect extends Connection {
    getName(): string;
}
export declare function createConnection(configService: ConfigService): Connection;
