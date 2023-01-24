import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choice } from '../Choice/entities/choice.entity';
import { Question } from '../Question/entities/question.entity';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Choice)
    private readonly choiceRepository: Repository<Choice>,
  ) {}

  async fetchSurveyOne({ SurveyNumber }) {
    return await this.surveyRepository.findOne({
      where: { SurveyNumber: SurveyNumber },
    });
  }

  async fetchSurveyAll() {
    return await this.surveyRepository.find();
  }

  async create(SurveyName, SurveyContents) {
    const result = await this.surveyRepository.save({
      SurveyName: SurveyName,
      SurveyContents: SurveyContents,
    });
    return result;
  }

  async createSurveyAll(CreateSurveyAllInput) {
    const survey = await this.surveyRepository.save({
      SurveyName: CreateSurveyAllInput.SurveyName,
      SurveyContents: CreateSurveyAllInput.SurveyContents,
    });
    const question = await this.questionRepository.save([
      { Question: CreateSurveyAllInput.Question1, SurveyNumber: survey },
      { Question: CreateSurveyAllInput.Question2, SurveyNumber: survey },
      { Question: CreateSurveyAllInput.Question3, SurveyNumber: survey },
    ]);
    console.log(CreateSurveyAllInput);
    const choice = await this.choiceRepository.save([
      {
        QuestionNumber: question[0],
        Choice: CreateSurveyAllInput.Choice1Qnum1,
        Score: CreateSurveyAllInput.Choice1Qnum1Score,
      },
      {
        QuestionNumber: question[0],
        Choice: CreateSurveyAllInput.Choice2Qnum1,
        Score: CreateSurveyAllInput.Choice2Qnum1Score,
      },
      {
        QuestionNumber: question[0],
        Choice: CreateSurveyAllInput.Choice3Qnum1,
        Score: CreateSurveyAllInput.Choice3Qnum1Score,
      },
      {
        QuestionNumber: question[1],
        Choice: CreateSurveyAllInput.Choice1Qnum2,
        Score: CreateSurveyAllInput.Choice1Qnum2Score,
      },
      {
        QuestionNumber: question[1],
        Choice: CreateSurveyAllInput.Choice2Qnum2,
        Score: CreateSurveyAllInput.Choice2Qnum2Score,
      },
      {
        QuestionNumber: question[1],
        Choice: CreateSurveyAllInput.Choice3Qnum2,
        Score: CreateSurveyAllInput.Choice3Qnum2Score,
      },
      {
        QuestionNumber: question[2],
        Choice: CreateSurveyAllInput.Choice1Qnum3,
        Score: CreateSurveyAllInput.Choice1Qnum3Score,
      },
      {
        QuestionNumber: question[2],
        Choice: CreateSurveyAllInput.Choice2Qnum3,
        Score: CreateSurveyAllInput.Choice2Qnum3Score,
      },
      {
        QuestionNumber: question[2],
        Choice: CreateSurveyAllInput.Choice3Qnum3,
        Score: CreateSurveyAllInput.Choice3Qnum3Score,
      },
    ]);
    return { survey: survey, question: question, choice: choice };
  }

  async updateSurvey(SurveyNumber, updateSurveyInput) {
    const Suervey = await this.surveyRepository.findOne({
      where: { SurveyNumber: SurveyNumber },
    });
    const result = await this.surveyRepository.save({
      ...Suervey,
      SurveyNumber: SurveyNumber,
      ...updateSurveyInput,
    });
    return result;
  }

  async deleteSurvey({ SurveyNumber }) {
    const result = await this.surveyRepository.delete({
      SurveyNumber: SurveyNumber,
    });
    return result.affected ? true : false;
  }

  async checkExistSurvey(SurveyNumber) {
    const result = await this.surveyRepository.findOne({
      where: { SurveyNumber: SurveyNumber },
    });
    if (!result) {
      throw new UnprocessableEntityException('설문지가 존재하지 않습니다.');
    }
  }
}
