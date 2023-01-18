import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateChoiceInput {
  @Field(() => String)
  Choice1: string;

  @Field(() => String)
  Choice2: string;

  @Field(() => String)
  Choice3: string;
}
