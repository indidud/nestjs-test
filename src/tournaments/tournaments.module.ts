import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './tournament.entity';
import { TournamentService } from './tournaments.service';
import { TournamentController } from './tournaments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  providers: [TournamentService],
  controllers: [TournamentController],
  exports: [TournamentService],
})
export class TournamentModule {}
