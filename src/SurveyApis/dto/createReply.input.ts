import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateReplyInput {
  @Field(() => Int)
  Choice1: number;
  @Field(() => Int)
  Choice2: number;
  @Field(() => Int)
  Choice3: number;
  @Field(() => String) //여기에 nullable을 넣는 방법은 아래와 같음
  costomerName: string | null;
  //   @Field(() => Int)
  //   Choice4: number;
  //   @Field(() => Int)
  //   Choice5: number;
  //   @Field(() => Int)
  //   Choice6: number;
  //   @Field(() => Int)
  //   Choice7: number;
  //   @Field(() => Int)
  //   Choice8: number;
  //   @Field(() => Int)
  //   Choice9: number;
  //   @Field(() => Int)
  //   Choice10: number;
  //   @Field(() => Int)
  //   Choice11: number;
  //   @Field(() => Int)
  //   Choice12: number;
}
