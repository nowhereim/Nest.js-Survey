import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async fetchQuestionAll() {
    return await this.questionRepository.find();
  }

  async fetchQuestion(QuestionNumber) {
    return await this.questionRepository.findOne({
      where: { QuestionNumber: QuestionNumber },
    });
  }

  async createQuestion(Question, SurveyNumber) {
    const result = await this.questionRepository.save([
      { Question: Question.Question1, SurveyNumber: SurveyNumber },
      { Question: Question.Question2, SurveyNumber: SurveyNumber },
      { Question: Question.Question3, SurveyNumber: SurveyNumber },
    ]);
    return result;
  }

  async updateQuestion(QuestionNumber, Question) {
    const Ques = await this.questionRepository.findOne({
      where: { QuestionNumber: QuestionNumber },
    });
    const result = await this.questionRepository.save({
      ...Ques,
      Question: Question.Question,
    });
    return result;
  }
  async deleteQuestion(QuestionNumber) {
    try {
      const result = await this.questionRepository.delete({
        QuestionNumber: QuestionNumber,
      });
      return result.affected ? true : false;
    } catch (err) {
      throw new UnprocessableEntityException(
        '관계된 컬럼이 존재하여 삭제할 수 없습니다.',
      );
    }
  }

  async checkExistQuestion(QuestionNumber) {
    const result = await this.questionRepository.findOne({
      where: { QuestionNumber: QuestionNumber },
    });
    if (!result) {
      throw new UnprocessableEntityException('해당 질문이 존재하지 않습니다.');
    }
  }
}
