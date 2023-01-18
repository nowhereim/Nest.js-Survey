import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createQuestionInput {
  @Field(() => String)
  Question1: string;
  @Field(() => String)
  Question2: string;
  @Field(() => String)
  Question3: string;
}
