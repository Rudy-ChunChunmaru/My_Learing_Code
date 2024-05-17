import {
  Controller,
  Get,
  Post,
  Req,
  Query,
  Param,
  Res,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/api/users')
export class UserController {
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
