import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hash } from '../common/utils/bcrypt.utils';
import { UserRole } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async save(body: any): Promise<User[]> {
    const password = await hash(body.password);
    return this.usersRepository.save({
      ...body,
      password,
      role: UserRole.USER,
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  findOne(where): Promise<User> {
    return this.usersRepository.findOne({ where });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
