import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { SurveyService } from './Survey.service';

@Resolver()
export class SurveyResolver {
  constructor(private readonly surveyService: SurveyService) {}

  // @Query(() => String)
  // getHello(): string {
  //   return this.surveyService.getHello();
  // }

  @Query()
  fetchSurvey() {
    return this.surveyService.findAll();
  }

  @Mutation()
  createSurvey() {
    return this.surveyService.create();
  }
}
