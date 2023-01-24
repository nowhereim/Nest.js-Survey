import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { Choice } from '../Choice/entities/choice.entity';
import { Question } from '../Question/entities/question.entity';
import { Survey } from '../Survey/entities/survey.entity';

@Entity()
@ObjectType()
export class CreateSurveyAllOutput {
  @Field(() => Survey)
  survey: Survey;

  @Field(() => [Question])
  question: Question;

  @Field(() => [Choice])
  choice: Choice;
}
