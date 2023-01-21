import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choice } from '../Choice/entities/choice.entity';
import { Reply } from './entities/reply.entity';

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(Reply)
    private readonly replyRepository: Repository<Reply>,
    @InjectRepository(Choice)
    private readonly choiceRepository: Repository<Choice>,
  ) {}

  async fetchResultSurvey(ReplyNumber) {
    const result = await this.replyRepository.findOne({
      where: { ReplyNumber: ReplyNumber },
      relations: [
        'Survey',
        'ChoiceNum1',
        'ChoiceNum2',
        'ChoiceNum3',
        'ChoiceNum1.QuestionNumber',
        'ChoiceNum2.QuestionNumber',
        'ChoiceNum3.QuestionNumber',
      ],
    });
    return result;
  }

  async fetchReplyAll() {
    const result = await this.replyRepository.find({
      relations: [
        'Survey',
        'ChoiceNum1',
        'ChoiceNum2',
        'ChoiceNum3',
        'ChoiceNum1.QuestionNumber',
        'ChoiceNum2.QuestionNumber',
        'ChoiceNum3.QuestionNumber',
      ],
    });

    return result;
  }

  async createReply(SurveyNumber, ChoiceNum) {
    const result = await this.choiceRepository.find({
      select: ['Score'],
      where: [
        { ChoiceNumber: ChoiceNum.Choice1 },
        { ChoiceNumber: ChoiceNum.Choice2 },
        { ChoiceNumber: ChoiceNum.Choice3 },
      ],
    });
    if (result.length !== 3) {
      throw new UnprocessableEntityException('Choice 값을 확인해주세요');
    }
    const sum = result.reduce((acc, cur) => {
      return acc + cur.Score;
    }, 0);
    const saveresult = {
      ChoiceNum1: ChoiceNum.Choice1,
      ChoiceNum2: ChoiceNum.Choice2,
      ChoiceNum3: ChoiceNum.Choice3,
      SurveyNumber: SurveyNumber,
      TotalScore: sum,
      costomerName: ChoiceNum.costomerName,
    };

    return await this.replyRepository.save(saveresult);
  }

  async updateReply(ReplyNumber, ChoiceNum) {
    const Reply = await this.replyRepository.findOne({
      where: { ReplyNumber: ReplyNumber },
    });
    const result = await this.choiceRepository.find({
      select: ['Score'],
      where: [
        { ChoiceNumber: ChoiceNum.Choice1 },
        { ChoiceNumber: ChoiceNum.Choice2 },
        { ChoiceNumber: ChoiceNum.Choice3 },
      ],
    });
    if (result.length !== 3) {
      throw new UnprocessableEntityException('Choice 값을 확인해주세요');
    }
    const sum = result.reduce((acc, cur) => {
      return acc + cur.Score;
    }, 0);
    const saveResult = {
      ChoiceNum1: ChoiceNum.Choice1,
      ChoiceNum2: ChoiceNum.Choice2,
      ChoiceNum3: ChoiceNum.Choice3,
      TotalScore: sum,
      costomerName: ChoiceNum.costomerName,
    };
    return await this.replyRepository.save({ ...Reply, ...saveResult });
  }

  async deleteReply(ReplyNumber) {
    const result = await this.replyRepository.delete(ReplyNumber);
    return result ? true : false;
  }

  async checkExistSurvey(ReplyNumber) {
    const result = await this.replyRepository.findOne({
      where: { ReplyNumber: ReplyNumber },
    });
    if (!result) {
      throw new UnprocessableEntityException(
        '해당 설문지가 존재하지 않습니다.',
      );
    }
  }
}
