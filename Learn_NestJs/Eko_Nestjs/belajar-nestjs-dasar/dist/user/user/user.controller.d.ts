/// <reference types="cookie-parser" />
import { HttpRedirectResponse } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class UserController {
    viewhello(name: string, respones: Response): void;
    setcookie(name: string, response: Response): void;
    getcookie(request: Request): string;
    sempleResponse(): Record<string, string>;
    sempleResResponse(response: Response): void;
    redirect(): HttpRedirectResponse;
    sayhello(name_f: string, name_s: string): Promise<string>;
    getbyid(id: number): string;
    getbyidUseReq(request: Request): string;
    post(): string;
    get(): string;
}
