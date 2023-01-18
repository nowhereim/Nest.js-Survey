import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSurveyInput {
  @Field(() => String)
  SurveyName: string;

  @Field(() => String)
  SurveyContents: string;
}
