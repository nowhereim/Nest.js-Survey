import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyModule } from './SurveyApis/Reply/Reply.module';
import { ChoiceModule } from './SurveyApis/Choice/Choice.module';
import { QuestionModule } from './SurveyApis/Question/Question.module';
import { SurveyModule } from './SurveyApis/Survey/Survey.module';
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';
const level = process.env.NODE_ENV === 'production' ? 'error' : 'silly';
const format = winston.format.combine(
  winston.format.timestamp(),
  utilities.format.nestLike('앞에붙는명칭', { prettyPrint: true }),
);
@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: level,
          format: format,
        }),
        new winston.transports.File({
          dirname: `./${(Date.now() / 1000).toFixed(0)}`,
          filename: 'history.log',
          level: level,
          format: format,
        }),
      ],
    }),
    ReplyModule,
    SurveyModule,
    QuestionModule,
    ChoiceModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',//TODO: 패스워드 입력해주세요.
      database: '',//TODO: DB명 입력해주세요.
      entities: [__dirname + '/SurveyApis/**/*.entity.ts'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
