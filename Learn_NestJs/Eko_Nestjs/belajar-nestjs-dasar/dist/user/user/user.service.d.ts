import { ValidationService } from 'src/validation/validation/validation.service';
export declare class UserService {
    private validationService;
    constructor(validationService: ValidationService);
    sayhello(name: string): string;
}
