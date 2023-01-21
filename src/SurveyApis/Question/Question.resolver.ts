import { Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { createQuestionInput } from '../dto/createQuestion.input';
import { UpdateQuestionInput } from '../dto/updateQuestion.input';
import { Question } from './entities/question.entity';
import { QuestionService } from './Question.service';

@Resolver()
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Mutation(() => [Question])
  createQuestion(
    @Args('QuestionInput') QuestionInput: createQuestionInput,
    @Args('SurveyNumber') SurveyNumber: number,
  ) {
    const result = this.questionService.createQuestion(
      QuestionInput,
      SurveyNumber,
    );
    return result;
  }

  @Mutation(() => Question)
  async updateQuestion(
    @Args('QuestionNumber') QuestionNumber: number,
    @Args('QuestionInput') QuestionInput: UpdateQuestionInput,
  ) {
    await this.questionService.checkExistQuestion(QuestionNumber);
    const result = await this.questionService.updateQuestion(
      QuestionNumber,
      QuestionInput,
    );
    return result;
  }

  @Mutation(() => Boolean)
  async deleteQuestion(@Args('QuestionNumber') QuestionNumber: number) {
    await this.questionService.checkExistQuestion(QuestionNumber);
    const result = await this.questionService.deleteQuestion(QuestionNumber);
    return result;
  }
}
