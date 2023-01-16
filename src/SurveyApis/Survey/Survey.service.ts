/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveyService {
  // getHello(): string {
  //   console.log('겟 헬로우 한번 들어왔다 나감');
  //   return 'Hello World!';
  // }
  // hollahello(): string {
  //   return 'sex boy';
  // }
  findAll() {
    const result = [
      { number: 1, name: '태환' },
      { number: 2, name: '미주' },
    ];
    return result;
  }

  create() {
    return '등록 성공!!';
  }
}
