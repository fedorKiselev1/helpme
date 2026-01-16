
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
    Validate
} from 'class-validator';

export class LoginDto {
    @IsString({ message: 'почта должна быть строкой'})
    @IsEmail({}, {message: 'это не почта'})
    @IsNotEmpty({ message: 'пустой ввод'})
    email: string;

    @IsString({ message: 'пароль должнен быть строкой'})
    @IsNotEmpty({ message: 'пустой ввод'})
    @MinLength(6, { message: 'минимум 6 символов'})
    password: string;
}
