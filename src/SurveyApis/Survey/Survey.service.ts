import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
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
