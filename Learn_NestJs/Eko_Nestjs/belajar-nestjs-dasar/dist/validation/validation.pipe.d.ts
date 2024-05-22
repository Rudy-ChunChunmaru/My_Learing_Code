import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ZodType } from 'zod';
export declare class ValidationPipe implements PipeTransform {
    private zodType;
    constructor(zodType: ZodType);
    transform(value: any, metadata: ArgumentMetadata): any;
}
