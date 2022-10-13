import { Request, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TournamentService } from './tournaments.service';
import { Tournament } from './tournament.entity';
import { Roles } from '../common/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get()
  getAll(): Promise<Tournament[]> {
    return this.tournamentService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  async create(@Request() req): Promise<Tournament[]> {
    return this.tournamentService.save(req.body);
  }
}
