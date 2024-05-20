import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  sayhello(name: string): string {
    return `Hello ${name}`;
  }
}
