import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async register(@Body() body: CreateUserDto): Promise<any> {
//     return this.authService.login(body);
//   }
}
