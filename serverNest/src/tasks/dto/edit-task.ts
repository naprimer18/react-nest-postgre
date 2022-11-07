import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EditTaskInput {
  @Field()
  name: string;

  @Field()
  id: number;
}
