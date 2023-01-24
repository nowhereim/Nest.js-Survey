import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
@ObjectType()
export class CreateSurveyAllInput {
  @Field(() => String)
  SurveyName: string;

  @Field(() => String)
  SurveyContents: string;

  @Field(() => String)
  Question1: string;

  @Field(() => String)
  Question2: string;

  @Field(() => String)
  Question3: string;

  @Field(() => String)
  Choice1Qnum1: string;

  @Field(() => String)
  Choice2Qnum1: string;

  @Field(() => String)
  Choice3Qnum1: string;

  @Field(() => String)
  Choice1Qnum2: string;

  @Field(() => String)
  Choice2Qnum2: string;

  @Field(() => String)
  Choice3Qnum2: string;

  @Field(() => String)
  Choice1Qnum3: string;

  @Field(() => String)
  Choice2Qnum3: string;

  @Field(() => String)
  Choice3Qnum3: string;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice1Qnum1Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice2Qnum1Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice3Qnum1Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice1Qnum2Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice2Qnum2Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice3Qnum2Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice1Qnum3Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice2Qnum3Score: number;
  @Min(0)
  @Max(3)
  @Field(() => Int)
  Choice3Qnum3Score: number;
}
