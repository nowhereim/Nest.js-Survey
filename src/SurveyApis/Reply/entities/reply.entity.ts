import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Survey } from '../../Survey/entities/survey.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Reply {
  @PrimaryGeneratedColumn('increment')
  ReplyNumber: number;

  @JoinColumn()
  @ManyToOne(() => Survey)
  SurveyNumber: Survey;

  @Column()
  @Field(() => Int)
  ChoiceNum1: number;

  @Column()
  @Field(() => Int)
  ChoiceNum2: number;

  @Column()
  @Field(() => Int)
  ChoiceNum3: number;

  @Column()
  @Field(() => Int)
  TotalScore: number;

  @Column({ nullable: true })
  @Field(() => String)
  costomerName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
