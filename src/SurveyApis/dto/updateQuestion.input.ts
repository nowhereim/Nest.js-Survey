import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionInput {
  @Field(() => String)
  Question: string;
}
