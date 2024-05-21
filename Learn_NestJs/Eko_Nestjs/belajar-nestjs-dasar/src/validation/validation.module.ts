import { DynamicModule, Module } from '@nestjs/common';
import { ValidationService } from './validation/validation.service';

@Module({})
export class ValidationModule {
  static forRoot(isGlobal: boolean): DynamicModule {
    return {
      module: ValidationModule,
      global: isGlobal,
      providers: [ValidationService],
      exports: [ValidationService],
    };
  }
}
