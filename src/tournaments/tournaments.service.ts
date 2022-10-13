import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './tournament.entity';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournament)
    private repository: Repository<Tournament>,
  ) {}

  async save(body): Promise<Tournament[]> {
    return this.repository.save(body);
  }

  async update(id: number, body: Partial<Tournament>) {
    return this.repository.update(id, body);
  }

  findAll(): Promise<Tournament[]> {
    return this.repository.find();
  }

  findOneById(id: number): Promise<Tournament> {
    return this.repository.findOneBy({ id });
  }

  findOne(where): Promise<Tournament> {
    return this.repository.findOne({ where });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
