import { NestMiddleware } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
export declare class AuthMiddleware implements NestMiddleware {
    private prismaService;
    constructor(prismaService: PrismaService);
    use(req: any, res: any, next: () => void): Promise<void>;
}
