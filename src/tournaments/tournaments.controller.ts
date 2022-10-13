import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseGuards,
  Param,
  Body,
} from '@nestjs/common';
import { TournamentService } from './tournaments.service';
import { Tournament } from './tournament.entity';
import { Roles } from '../common/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TournamentDto } from './dto/tournament.dto';

@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll(): Promise<Tournament[]> {
    return this.tournamentService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  async create(@Body() body: TournamentDto): Promise<Tournament[]> {
    return this.tournamentService.save(body);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  async update(
    @Param('id') id: string,
    @Body() body: TournamentDto,
  ): Promise<any> {
    return this.tournamentService.update(+id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  async delete(@Param('id') id: string): Promise<void> {
    return this.tournamentService.remove(+id);
  }
}
