import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Task } from './task.entity';

@ObjectType()
@Entity('people')
export class People {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Task, (task) => task.peopleId)
  tasks: Task[];
}
