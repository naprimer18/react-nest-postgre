import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddTaskInput {
  @Field()
  peopleId: string;

  @Field()
  message: string;
}
