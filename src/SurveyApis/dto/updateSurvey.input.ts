import {
  Field,
  InputType,
  OmitType, //OmitType은 필요없는 필드를 제외하고 사용할 수 있게 해줌
  PartialType,
  PickType, //PickType은 필요한 필드만 선택해서 사용할 수 있게 해줌
} from '@nestjs/graphql';
import { CreateSurveyInput } from './createSurvey.input';

@InputType()
export class UpdateSurveyInput extends PartialType(CreateSurveyInput) {}

//partialtype은 createSurveyInput을 상속받아서 사용할 수 있게 해줌
//partialType은 createSurveyInput의 필드를 모두 옵셔널로 만들어줌
//옵셔널이란 필수가 아닌 것을 의미함
