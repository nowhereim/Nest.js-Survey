import { Module } from '@nestjs/common';
import { SurveyService } from './Survey.service';
import { SurveyResolver } from './Survey.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { Choice } from '../Choice/entities/choice.entity';
import { Question } from '../Question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey,Choice,Question])],
  providers: [SurveyResolver, SurveyService],
})
export class SurveyModule {}
