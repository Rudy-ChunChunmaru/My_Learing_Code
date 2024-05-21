/// <reference types="cookie-parser" />
import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from 'winston';
export declare class LogMiddleware implements NestMiddleware<Request, Response> {
    private logger;
    constructor(logger: Logger);
    use(req: Request, res: Response, next: () => void): void;
}
