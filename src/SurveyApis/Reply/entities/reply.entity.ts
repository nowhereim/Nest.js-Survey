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
import { Choice } from '../../Choice/entities/choice.entity';

@Entity()
@ObjectType()
export class Reply {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  ReplyNumber: number;

  @JoinColumn()
  @ManyToOne(() => Choice)
  @Field(() => Choice)
  ChoiceNum1: Choice;

  @JoinColumn()
  @ManyToOne(() => Choice)
  @Field(() => Choice)
  ChoiceNum2: Choice;

  @JoinColumn()
  @ManyToOne(() => Choice)
  @Field(() => Choice)
  ChoiceNum3: Choice;

  @JoinColumn()
  @ManyToOne(() => Survey)
  @Field(() => Survey)
  Survey: Survey;

  @Column()
  @Field(() => Int)
  TotalScore: number;

  @Column({ nullable: true })
  @Field(() => String)
  customer: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
