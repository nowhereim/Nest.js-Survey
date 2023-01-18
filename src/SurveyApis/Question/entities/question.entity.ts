import { Field, ObjectType } from '@nestjs/graphql';
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
  QuestionNumber: number;

  @Column()
  @Field(() => String)
  Question: string;

  @ManyToOne(() => Survey)
  SurveyNumber: Survey;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
