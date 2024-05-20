import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MongoDBConnect,
  MySQLConnect,
} from './connection/connection';
import { mailService, MailService } from './mail/mail.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass: process.env.DATABASE == 'mysql' ? MySQLConnect : MongoDBConnect,
    },
    {
      provide: MailService,
      useValue: mailService,
    },
  ],
})
export class UserModule {}
