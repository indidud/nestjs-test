import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity()
export class Tournament extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
