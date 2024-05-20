import { Injectable } from '@nestjs/common';

export class MailService {
  send() {
    console.log('send email');
  }
}

export const mailService = new MailService();
