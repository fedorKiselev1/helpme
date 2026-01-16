import { UserService } from './auth/auth.service';
import { User as UserModel } from './../prisma/generated/client.js';
export declare class AppController {
    private readonly UserService;
    constructor(UserService: UserService);
    signupUser(userData: {
        email: string;
        password: string;
        displayName: string;
        picture?: string;
    }): Promise<UserModel>;
}
