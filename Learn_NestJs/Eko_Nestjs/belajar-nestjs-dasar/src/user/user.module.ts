import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MongoDBConnect,
  MySQLConnect,
  createConnection,
} from './connection/connection';
import { mailService, MailService } from './mail/mail.service';
import {
  // createUserRepository,
  UserRepository,
} from './user-repository/user-repository';
import { MemberService } from './member/member.service';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    // {
    //   provide: Connection,
    //   useClass: process.env.DATABASE == 'mysql' ? MySQLConnect : MongoDBConnect,
    // },
    {
      provide: Connection,
      useFactory: createConnection,
      inject: [ConfigService],
    },
    {
      provide: MailService,
      useValue: mailService,
    },
    {
      provide: 'EmailService',
      useExisting: MailService,
    },
    // {
    //   provide: UserRepository,
    //   useFactory: createUserRepository,
    //   inject: [Connection],
    // },
    UserRepository,
    MemberService,
  ],
  exports: [UserService],
})
export class UserModule {}
