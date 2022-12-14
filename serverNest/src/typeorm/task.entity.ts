import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Task {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 30 })
  name: string;
}
