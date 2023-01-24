import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSurveyAllInput } from '../dto/createSurveyAll.input';
import { CreateSurveyAllOutput } from '../dto/createSurveyAll.Output';
import { UpdateSurveyInput } from '../dto/updateSurvey.input';
import { Survey } from './entities/survey.entity';
import { SurveyService } from './Survey.service';

@Resolver()
export class SurveyResolver {
  constructor(private readonly surveyService: SurveyService) {}

  @Query(() => [Survey])
  fetchSurveyAll() {
    return this.surveyService.fetchSurveyAll();
  }

  @Query(() => Survey)
  async fetchSurveyOne(@Args('SurveyNumber') SurveyNumber: number) {
    await this.surveyService.checkExistSurvey(SurveyNumber);
    return this.surveyService.fetchSurveyOne({ SurveyNumber });
  }
  @Mutation(() => Survey)
  createSurvey(
    @Args('SurveyName') SurveyName: string,
    @Args('SurveyContents') SurveyContents: string,
  ) {
    const result = this.surveyService.create(SurveyName, SurveyContents);
    console.log(SurveyName, SurveyContents);
    return result;
  }

  @Mutation(() => Survey)
  async updateSurvey(
    @Args('SurveyNumber') SurveyNumber: number,
    @Args('updateSurveyInput') updateSurveyInput: UpdateSurveyInput,
  ) {
    await this.surveyService.checkExistSurvey(SurveyNumber);
    const result = await this.surveyService.updateSurvey(
      SurveyNumber,
      updateSurveyInput,
    );
    console.log(result);
    return result;
  }

  @Mutation(() => Boolean)
  async deleteSurvey(@Args('SurveyNumber') SurveyNumber: number) {
    await this.surveyService.checkExistSurvey(SurveyNumber);
    const result = await this.surveyService.deleteSurvey({ SurveyNumber });
    return result;
  }

  @Mutation(() => CreateSurveyAllOutput)
  async createSurveyAll(
    @Args('CreateSurveyAllInput') CreateSurveyAllInput: CreateSurveyAllInput,
  ) {
    const result = await this.surveyService.createSurveyAll(
      CreateSurveyAllInput,
    );
    console.log(result);
    return result;
  }
}
