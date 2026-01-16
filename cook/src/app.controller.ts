import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './auth/auth.service';
import { User as UserModel, UserRole } from './../prisma/generated/client.js';
import { LoginDto } from './auth/dto/login.dto'
import { validate } from 'class-validator';

@Controller()
export class AppController {
  constructor(
    private readonly UserService: UserService,
  ) {}

  @Post('user')
  async signupUser(
    @Body() userData: {email: string; password: string; displayName: string; picture?: string;},
  ): Promise<any> {
    const dto = new LoginDto();
    dto.email = userData.email
    dto.password = userData.password
    validate(dto).then(errors => {
      if (errors.length > 0) {
          console.log('validation failed. errors: ', errors);
      } else {
          console.log('validation succeed');
          return this.UserService.createUser(userData);
      }
    });
    
  }

}