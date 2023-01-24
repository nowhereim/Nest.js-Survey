import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choice } from './entities/choice.entity';
import { UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectRepository(Choice)
    private readonly choiceRepository: Repository<Choice>,
  ) {}

  async fetchChoiceAll() {
    return await this.choiceRepository.find();
  }

  async fetchChoiceOne(ChoiceNumber) {
    const result = await this.choiceRepository.findOne({
      where: { ChoiceNumber: ChoiceNumber },
    });
    return result;
  }

  async createChoice(QuestionNumber, ChoiceInput, Score) {
    const result = await this.choiceRepository.save([
      {
        QuestionNumber: QuestionNumber,
        Choice: ChoiceInput.Choice1,
        Score: Score.Choice1Score,
      },
      {
        QuestionNumber: QuestionNumber,
        Choice: ChoiceInput.Choice2,
        Score: Score.Choice2Score,
      },
      {
        QuestionNumber: QuestionNumber,
        Choice: ChoiceInput.Choice3,
        Score: Score.Choice3Score,
      },
    ]);
    return result;
  }

  async updateChoice(ChoiceNumber, updateChoiceInput) {
    const Choices = await this.choiceRepository.findOne({
      where: { ChoiceNumber: ChoiceNumber },
    });
    const result = await this.choiceRepository.save({
      ...Choices,
      ...updateChoiceInput,
    });
    return result;
  }

  async deleteChoice(ChoiceNumber) {
    try {
      const result = await this.choiceRepository.delete(ChoiceNumber);
      return result.affected ? true : false;
    } catch (err) {
      throw new UnprocessableEntityException('입력값을 확인해주세요');
    }
  }

  async checkExistChoice(ChoiceNumber) {
    const result = await this.choiceRepository.findOne({
      where: { ChoiceNumber: ChoiceNumber },
    });
    if (!result) {
      throw new UnprocessableEntityException(
        '해당 선택지가 존재하지 않습니다.',
      );
    }
  }
}
