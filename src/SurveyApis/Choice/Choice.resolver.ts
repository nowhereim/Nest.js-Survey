import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateChoiceInput } from '../dto/createChoice.input';
import { CreateScoreInput } from '../dto/createScore.input';
import { UpdateChoiceInput } from '../dto/updateChoice.input';
import { ChoiceService } from './Choice.service';
import { Choice } from './entities/choice.entity';

@Resolver()
export class ChoiceResolver {
  constructor(public readonly choiceService: ChoiceService) {}
  @Query(() => [Choice])
  fetchChoiceAll() {
    return this.choiceService.fetchChoiceAll();
  }

  @Mutation(() => [Choice])
  createChoice(
    @Args('QuestionNumber') QuestionNumber: number,
    @Args('ChoiceInput') ChoiceInput: CreateChoiceInput,
    @Args('Score') Score: CreateScoreInput,
  ) {
    const result = this.choiceService.createChoice(
      QuestionNumber,
      ChoiceInput,
      Score,
    );
    return result;
  }

  @Mutation(() => Choice)
  async updateChoice(
    @Args('ChoiceNumber') ChoiceNumber: number,
    @Args('updateChoiceInput') updateChoiceInput: UpdateChoiceInput,
  ) {
    await this.choiceService.checkExistChoice(ChoiceNumber);
    const result = await this.choiceService.updateChoice(
      ChoiceNumber,
      updateChoiceInput,
    );
    console.log(result);
    return result;
  }

  @Mutation(() => Boolean)
  async deleteChoice(@Args('ChoiceNumber') ChoiceNumber: number) {
    await this.choiceService.checkExistChoice(ChoiceNumber);
    const result = await this.choiceService.deleteChoice(ChoiceNumber);
    return result;
  }
}
