import { InputType, PartialType } from '@nestjs/graphql';
import { CreateSurveyInput } from './createSurvey.input';

@InputType()
export class UpdateSurveyInput extends PartialType(CreateSurveyInput) {}
