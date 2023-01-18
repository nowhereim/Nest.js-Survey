import { Module } from '@nestjs/common';
import { SurveyService } from './Survey.service';
import { SurveyResolver } from './Survey.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  providers: [SurveyResolver, SurveyService],
})
export class SurveyModule {}
