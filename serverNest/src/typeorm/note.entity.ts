import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  // ManyToOne,
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
// import { User } from './user.entity';

@ObjectType()
@Entity('note')
export class Note {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  // @ManyToOne(() => User, (user) => user.notes)
  @Field()
  @Column()
  userId: string;
}
