import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { IsUserAlreadyExistConstraint } from './dto/user.custom-validator';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, IsUserAlreadyExistConstraint],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
