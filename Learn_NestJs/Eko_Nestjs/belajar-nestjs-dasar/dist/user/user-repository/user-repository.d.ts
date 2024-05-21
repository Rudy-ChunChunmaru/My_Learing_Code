import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
export declare class UserRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    save(firstname: string, lastname?: string): Promise<User>;
}
