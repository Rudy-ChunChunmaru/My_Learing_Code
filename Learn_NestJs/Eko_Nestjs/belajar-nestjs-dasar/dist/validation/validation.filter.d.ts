import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ZodError } from 'zod';
export declare class ValidationFilter implements ExceptionFilter<ZodError> {
    catch(exception: ZodError, host: ArgumentsHost): void;
}
