import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateScoreInput {
  @Field(() => Int)
  Choice1Score: number;

  @Field(() => Int)
  Choice2Score: number;

  @Field(() => Int)
  Choice3Score: number;
}
