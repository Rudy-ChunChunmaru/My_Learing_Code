import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Logger } from 'winston';
export declare class UserRepository {
    private prismaService;
    private logger;
    constructor(prismaService: PrismaService, logger: Logger);
    save(firstname: string, lastname?: string): Promise<User>;
}
