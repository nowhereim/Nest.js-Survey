
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## 🌟🌟 사용방법 🌟🌟
## 설문지당 문항수는 3개 각 문항별 선택지또한 3개로 구현하였습니다.<br>
1.postgresql은 로컬로 작동합니다.<br>
<br> 2.로컬에 깔려있다는 전제하에 제작되었습니다.<br>
<br> 3.받으신 후 Nest.js-Survey => src => app.module.ts 에서 username , password, database를 설정해주세요.<br>
<br>
4. 터미널에 cd Nest.js-Survey 를 입력하여 폴더내부로 진입한 이후 npm install => npm start로 실행합니다.<br>
<br>
5.http://localhost:4000/graphql 로 접속 후 DOCS를 참고하여 사용합니다.<br>
<br>

Survey 작성 -> Question 작성 -> Choice 작성 -> 답변 작성 순서입니다.

설문완료 후 답변조회시 총점을 확인할 수 있습니다.

## 🌟 프로젝트 주요 기능

[설문 , 문항 , 선택지 , 답변] CRUD , logging

## 🌟Quick Start🌟

1. 각각의 API마다 CRUD가 모두 구현되어있지만, 빠르게 테스트해보기위한 안내서 입니다.
2. 서버실행후 http://localhost:4000/graphql 로 접속합니다.
3. 아래의 코드를 통해 설문 , 문항 , 선택지를 한번에 작성합니다.
``` javascript
mutation{
  createSurveyAll(CreateSurveyAllInput:{
    SurveyName:"올 여름 휴가철 여행지 설문조사",
    SurveyContents:"올 여름 휴가철 국내,국외 또는 지구밖 여행을 계획중이신 여러분의 다양한 의견이 궁금합니다.",
    Question1:"당신은 어디로 여행을 떠날 예정인가요?",
    Question2:"당신의 여행 예산은 얼마인가요?",
    Question3:"당신은 누구와 여행을 갈 예정인가요?",
    Choice1Qnum1:"국내",
    Choice2Qnum1:"국외",
    Choice3Qnum1:"우주",
    Choice1Qnum2:"100000~200000",
    Choice2Qnum2:"200000~300000",
    Choice3Qnum2:"100000000000이상",
    Choice1Qnum3:"혼자",
    Choice2Qnum3:"친구",
    Choice3Qnum3:"가족",
    Choice1Qnum1Score:1,
    Choice2Qnum1Score:2,
    Choice3Qnum1Score:3,
    Choice1Qnum2Score:0,
    Choice2Qnum2Score:1,
    Choice3Qnum2Score:2,
    Choice1Qnum3Score:1,
    Choice2Qnum3Score:2,
    Choice3Qnum3Score:3,
  }){
survey{
  SurveyName
  SurveyContents
  SurveyNumber
}
    question{
      Question
      QuestionNumber
      SurveyNumber{
        SurveyName
        SurveyNumber
        SurveyContents
      }
    }
    choice{
      Choice
      ChoiceNumber
      Score
      QuestionNumber{
        Question
        QuestionNumber
      }
    }
  }
}
```
4. 아래의코드를 복사하여 붙여넣어 설문완료값을 제출합니다.
```javascript
mutation{
  createReply(SurveyNumber:1,ChoiceInput:{
    Choice1:2,
    Choice2:4,
    Choice3:7,
    customer:"홍길동"
  	}
  ){
    Survey
    customer
    ChoiceNum1
    ChoiceNum2
    ChoiceNum3
    TotalScore
}
}
```
5. 아래의코드를 복사하여 붙여넣어 설문결과값들을 모두 불러 조회합니다.
``` javascript
query{
  fetchReplyAll{
    customer
    TotalScore
    Survey{
      SurveyName
      SurveyNumber
      SurveyContents
    }
    ChoiceNum1{
      Choice
      ChoiceNumber
      Score
    }
    ChoiceNum2{
      Choice
      ChoiceNumber
      Score
    }
    ChoiceNum3{
      Choice
      ChoiceNumber
      Score
    }
  }
}
```
## 🌟error log🌟
<img width="441" alt="image" src="https://user-images.githubusercontent.com/113084907/214292430-f149e7b5-672e-4985-a14b-f4d7129bcb20.png">
<img width="1489" alt="image" src="https://user-images.githubusercontent.com/113084907/214319781-13b88b46-3599-44e5-93b0-7dc720caabab.png">

Error는 src/logs/error/error.log 와 Exception.log 안에 시간순으로 저장되게 하였습니다.


## 🍀 API

<img width="212" alt="image" src="https://user-images.githubusercontent.com/113084907/214338728-b25392dc-009f-41d3-b4c3-ed6f14cbe432.png">

상세내역은 DOCS를 참고해주세요.


## 🍀 ERD
<img width="595" alt="image" src="https://user-images.githubusercontent.com/113084907/214326213-8ddd4821-f13f-457e-87b2-09caec545bcb.png">



## 🌟사용 기술🌟

> **typescript**<br/>
> **nest.js**<br/>
> **graphql**<br/>
> **typeorm**<br/>
> **postgresql**<br/>
> **winston**<br/>
<br/>
</div>
