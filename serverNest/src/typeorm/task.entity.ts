import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { People } from './people.entity';

@ObjectType()
@Entity('task')
export class Task {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => People, (people) => people.tasks)
  peopleId: string;
}
