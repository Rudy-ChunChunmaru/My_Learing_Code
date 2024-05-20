/// <reference types="cookie-parser" />
import { HttpRedirectResponse } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';
import { UserRepository } from '../user-repository/user-repository';
import { MemberService } from '../member/member.service';
export declare class UserController {
    private service_constructor;
    private connection;
    private mailService;
    private emailService;
    private userRepository;
    private memberService;
    constructor(service_constructor: UserService, connection: Connection, mailService: MailService, emailService: MailService, userRepository: UserRepository, memberService: MemberService);
    memberservice(): void;
    sendEmail(): void;
    userRepo(): void;
    sendmail(): void;
    getConnection(): Promise<string>;
    private_inject: UserService;
    sayHello(name: string): Promise<string>;
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
