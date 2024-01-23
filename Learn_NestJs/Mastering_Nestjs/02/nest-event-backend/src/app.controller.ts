import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.goodbye();
  }

  @Get('/bye')
  bye(): string {
    return 'bye';
  }
}
