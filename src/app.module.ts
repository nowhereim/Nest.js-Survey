import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module, NestModule, Logger } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyModule } from './SurveyApis/Reply/Reply.module';
import { ChoiceModule } from './SurveyApis/Choice/Choice.module';
import { QuestionModule } from './SurveyApis/Question/Question.module';
import { SurveyModule } from './SurveyApis/Survey/Survey.module';
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';
import { LoggerMiddleware } from './commons/middlewares/logger.middleware';
const level = process.env.NODE_ENV === 'production' ? 'error' : 'silly';
const format = winston.format.combine(
  winston.format.timestamp(),
  utilities.format.nestLike('front', { prettyPrint: true }),
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
          dirname: __dirname + '/logs/error',
          filename: `Exception.log`,
          level: 'info',
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
      username: '', //TODO: DB username
      password: '', //TODO: DB password
      database: '', //TODO: DB name
      entities: [__dirname + '/SurveyApis/**/*.entity.ts'],
      synchronize: true,
      logging: true,
    }),
  ],
  providers: [Logger],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
