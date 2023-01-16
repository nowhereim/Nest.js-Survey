import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './SurveyApis/entities/survey.entity';
import { SurveyModule } from './SurveyApis/Survey/Survey.module';

@Module({
  imports: [
    SurveyModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rich1104',
      database: 'surveydb',
      entities: [Survey],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
