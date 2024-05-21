import { ZodType } from 'zod';
export declare class ValidationService {
    validate<T>(schma: ZodType, data: T): any;
}
