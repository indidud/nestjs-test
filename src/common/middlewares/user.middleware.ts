import { Injectable, NestMiddleware } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const [, token] = req.headers.authorization.split(' ');
    const obj = this.jwtService.decode(token);

    if (typeof obj === 'string') {
      return next();
    }

    req.user = await this.usersService.findOneById(obj.sub);
    next();
  }
}
