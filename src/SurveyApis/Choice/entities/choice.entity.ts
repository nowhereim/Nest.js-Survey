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

@Entity()
@ObjectType()
export class Choice {
  @PrimaryGeneratedColumn('increment')
  ChoiceNumber: number;

  @ManyToOne(() => Question)
  QuestionNumber: Question;

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
