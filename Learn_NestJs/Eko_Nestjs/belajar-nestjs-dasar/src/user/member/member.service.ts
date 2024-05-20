import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';

@Injectable()
export class MemberService {
  constructor(private moduleRef: ModuleRef) {}

  getConnectionName(): string {
    const connaction = this.moduleRef.get(Connection);
    return connaction.getName();
  }

  sendEmail() {
    const mailService = this.moduleRef.get(MailService);
    return mailService.send();
  }
}
