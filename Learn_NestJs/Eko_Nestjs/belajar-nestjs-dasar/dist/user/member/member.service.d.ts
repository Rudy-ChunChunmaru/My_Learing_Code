import { ModuleRef } from '@nestjs/core';
export declare class MemberService {
    private moduleRef;
    constructor(moduleRef: ModuleRef);
    getConnectionName(): string;
    sendEmail(): void;
}
