import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Survey } from '../../Survey/entities/survey.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Question {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  QuestionNumber: number;

  @Column()
  @Field(() => String)
  Question: string;

  @ManyToOne(() => Survey)
  @Field(() => Survey)
  SurveyNumber: Survey;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
