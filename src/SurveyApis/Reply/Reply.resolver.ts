import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Choice } from '../Choice/entities/choice.entity';
import { CreateReplyInput } from '../dto/createReply.input';
import { CreateReplyOutput } from '../dto/createReply.output';
import { Reply } from './entities/reply.entity';
import { ReplyService } from './Reply.service';

@Resolver()
export class ReplyResolver {
  constructor(private readonly replyService: ReplyService) {}

  @Query(() => [Reply])
  fetchReplyAll() {
    return this.replyService.fetchReplyAll();
  }

  @Query(() => Reply)
  async fetchRsultSurvey(@Args('ReplyNumber') ReplyNumber: number) {
    await this.replyService.checkExistSurvey(ReplyNumber);
    return this.replyService.fetchResultSurvey(ReplyNumber);
  }

  @Mutation(() => CreateReplyOutput)
  createReply(
    @Args('SurveyNumber') SurveyNumber: number,
    @Args('ChoiceInput') ChoiceInput: CreateReplyInput,
  ) {
    const result = this.replyService.createReply(SurveyNumber, ChoiceInput);
    return result;
  }

  @Mutation(() => Reply)
  async updateReply(
    @Args('ReplyNumber') ReplyNumber: number,
    @Args('ChoiceInput') ChoiceInput: CreateReplyInput,
  ) {
    await this.replyService.checkExistSurvey(ReplyNumber);
    const result = await this.replyService.updateReply(
      ReplyNumber,
      ChoiceInput,
    );
    return result;
  }

  @Mutation(() => Boolean)
  async deleteReply(@Args('ReplyNumber') ReplyNumber: number) {
    await this.replyService.checkExistSurvey(ReplyNumber);
    const result = await this.replyService.deleteReply({ ReplyNumber });
    return result;
  }
}
