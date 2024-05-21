import { Injectable } from '@nestjs/common';
import { ValidationService } from 'src/validation/validation/validation.service';
import z from 'zod';

@Injectable()
export class UserService {
  constructor(private validationService: ValidationService) {}

  sayhello(name: string): string {
    const schma = z.string().min(3).max(100);
    const result = this.validationService.validate(schma, name);
    return `Hello ${result}`;
  }
}
