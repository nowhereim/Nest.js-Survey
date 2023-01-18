import { ReplyService } from './Reply.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reply } from './entities/reply.entity';
import { ReplyResolver } from './Reply.resolver';
import { Choice } from '../Choice/entities/choice.entity';
import { Question } from '../Question/entities/question.entity';
import { Survey } from '../Survey/entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reply, Choice, Question, Survey])],
  providers: [ReplyResolver, ReplyService],
})
export class ReplyModule {}
