import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class CreateReplyOutput {
  @Field(() => Int)
  ChoiceNum1: number;
  @Field(() => Int)
  ChoiceNum2: number;
  @Field(() => Int)
  ChoiceNum3: number;
  @Field(() => String)
  customer: string | null;
  @Field(() => Int)
  Survey: number;
  @Field(() => Int)
  TotalScore: number;
  @Field(() => Int)
  ReplyNumber: number;
}
