import { IsNotEmpty } from 'class-validator';

export class TournamentDto {
  @IsNotEmpty()
  name: string;

  description: string;
}
