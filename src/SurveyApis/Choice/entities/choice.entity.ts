import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Question } from '../../Question/entities/question.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Min, Max } from 'class-validator';

@Entity()
@ObjectType()
export class Choice {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  ChoiceNumber: number;

  @ManyToOne(() => Question)
  @Field(() => Question)
  QuestionNumber: Question;
  @Min(0)
  @Max(3)
  @Column()
  @Field(() => Int)
  Score: number;

  @Column()
  @Field(() => String)
  Choice: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
