import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateChoiceInput {
  @Field(() => String, { nullable: true })
  Choice: string;
  @Field(() => Number, { nullable: true })
  Score: number;
}
