import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EditTaskInput {
  @Field()
  peopleId: string;

  @Field()
  message: string;

  @Field()
  id: number;
}
