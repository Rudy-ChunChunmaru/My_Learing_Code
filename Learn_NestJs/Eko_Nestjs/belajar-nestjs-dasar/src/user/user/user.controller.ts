import {
  // nest
  Controller,
  Get,
  Post,
  Query,
  Param,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Redirect,
  Res,
  Req,
  Inject,
} from '@nestjs/common';
import {
  // expressjs
  Request,
  Response,
} from 'express';
import { UserService } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';
import { UserRepository } from '../user-repository/user-repository';
import { MemberService } from '../member/member.service';

@Controller('/api/users')
export class UserController {
  constructor(
    private service_constructor: UserService,
    private connection: Connection,
    private mailService: MailService,
    @Inject('EmailService')
    private emailService: MailService,
    private userRepository: UserRepository,
    private memberService: MemberService,
  ) {}

  // --------------------------------------------- module ref member
  // constructor(
  //     @Inject('EmailService')
  //       private emailService: MailService,
  // ) {}
  @Get('/memberservice')
  memberservice(): void {
    console.info(this.memberService.getConnectionName());
    this.memberService.sendEmail();
  }
  // ---------------------------------------------

  // --------------------------------------------- send mail
  // constructor(
  //     @Inject('EmailService')
  //       private emailService: MailService,
  // ) {}
  @Get('/sendemail')
  sendEmail(): void {
    this.emailService.send();
  }
  // ---------------------------------------------

  // --------------------------------------------- user repo
  // constructor(
  //   private mailService: MailService,
  // ) {}
  @Get('/userReposave')
  userRepo(): void {
    this.userRepository.save();
  }
  // ---------------------------------------------

  // --------------------------------------------- send mail
  // constructor(
  //   private mailService: MailService,
  // ) {}
  @Get('/sendmail')
  sendmail(): void {
    this.mailService.send();
  }
  // ---------------------------------------------

  // --------------------------------------------- constructor connection server
  // constructor(
  //   private connection: Connection,
  // ) {}

  @Get('/getconnection')
  async getConnection(): Promise<string> {
    const test = this.connection;
    return test.getName();
  }

  // ---------------------------------------------

  // --------------------------------------------- Inject or constructor service
  // constructor(
  //   private service_constructor: UserService,
  // ) {}

  @Inject()
  private_inject: UserService;

  @Get('/helloo')
  async sayHello(@Query('name') name: string): Promise<string> {
    const test = this.private_inject;
    return test.sayhello(name);
  }
  //  -----------------------------------------------------------

  // --------------------------------------------- mustache
  @Get('/view/hello')
  viewhello(@Query('name') name: string, @Res() respones: Response) {
    respones.render('index.html', {
      title: 'Tamplate Engine',
      name: name,
    });
  }
  // ---------------------------------------------------------

  // --------------------------------------------- cookie-parse
  @Get('/set-cookie')
  setcookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('success set cookie');
  }
  @Get('/get-cookie')
  getcookie(@Req() request: Request): string {
    return request.cookies['name'];
  }
  // ---------------------------------------------------------

  @Get('/semple-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sempleResponse(): Record<string, string> {
    // response.status(200).send('Sample Respones');
    return {
      data: 'hello json',
    };
  }
  @Get('/semple-res-response')
  sempleResResponse(@Res() response: Response) {
    // response.status(200).send('Sample Respones');
    response.status(200).json({
      data: 'hello json by res',
    });
  }
  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/semple-response',
      statusCode: 301,
    };
  }

  @Get('/hello')
  async sayhello(
    @Query('name_f') name_f: string,
    @Query('name_s') name_s: string,
  ): Promise<string> {
    return `hello ${name_f} ${name_s}`;
  }

  @Get('/:id')
  getbyid(@Param('id') id: number): string {
    return `GET ${id}`;
  }
  @Get('/req/:id')
  getbyidUseReq(@Req() request: Request): string {
    return `GET ${request.params.id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'GET';
  }
}
