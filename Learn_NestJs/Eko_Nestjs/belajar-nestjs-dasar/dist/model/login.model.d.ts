import { z } from 'zod';
export declare class LoginUserRequest {
    username: string;
    password: string;
}
export declare const loginUserRequestValidation: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username?: string;
    password?: string;
}, {
    username?: string;
    password?: string;
}>;
