import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateReplyInput {
  @Field(() => Int)
  Choice1: number;
  @Field(() => Int)
  Choice2: number;
  @Field(() => Int)
  Choice3: number;
  @Field(() => String)
  customer: string | null;
}
