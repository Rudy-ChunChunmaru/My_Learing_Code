import { Injectable } from '@nestjs/common';
import { ZodType } from 'zod';

@Injectable()
export class ValidationService {
  validate<T>(schma: ZodType, data: T) {
    return schma.parse(data);
  }
}
