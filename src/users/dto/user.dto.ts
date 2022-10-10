import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUserAlreadyExist } from './user.custom-validator';

export class CreateUserDto {
  @IsEmail()
  @IsUserAlreadyExist({
    message: 'User $value is already exist',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsUserAlreadyExist({
    message: 'User $value is already exist',
  })
  username: string;
}
