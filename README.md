
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## ๐๐ ์ฌ์ฉ๋ฐฉ๋ฒ ๐๐
## ์ค๋ฌธ์ง๋น ๋ฌธํญ์๋ 3๊ฐ ๊ฐ ๋ฌธํญ๋ณ ์ ํ์ง๋ํ 3๊ฐ๋ก ๊ตฌํํ์์ต๋๋ค.<br>
1.postgresql์ ๋ก์ปฌ๋ก ์๋ํฉ๋๋ค.<br>
<br> 2.๋ก์ปฌ์ ๊น๋ ค์๋ค๋ ์ ์ ํ์ ์ ์๋์์ต๋๋ค.<br>
<br> 3.๋ฐ์ผ์  ํ Nest.js-Survey => src => app.module.ts ์์ username , password, database๋ฅผ ์ค์ ํด์ฃผ์ธ์.<br>
<br>
4. ํฐ๋ฏธ๋์ cd Nest.js-Survey ๋ฅผ ์๋ ฅํ์ฌ ํด๋๋ด๋ถ๋ก ์ง์ํ ์ดํ npm install => npm start๋ก ์คํํฉ๋๋ค.<br>
<br>
5.http://localhost:4000/graphql ๋ก ์ ์ ํ DOCS๋ฅผ ์ฐธ๊ณ ํ์ฌ ์ฌ์ฉํฉ๋๋ค.<br>
<br>

Survey ์์ฑ -> Question ์์ฑ -> Choice ์์ฑ -> ๋ต๋ณ ์์ฑ ์์์๋๋ค.

์ค๋ฌธ์๋ฃ ํ ๋ต๋ณ์กฐํ์ ์ด์ ์ ํ์ธํ  ์ ์์ต๋๋ค. 

## ๐ ํ๋ก์ ํธ ์ฃผ์ ๊ธฐ๋ฅ

[์ค๋ฌธ , ๋ฌธํญ , ์ ํ์ง , ๋ต๋ณ] CRUD , logging

## ๐Quick Start๐

1. ๊ฐ๊ฐ์ API๋ง๋ค CRUD๊ฐ ๋ชจ๋ ๊ตฌํ๋์ด์์ง๋ง, ๋น ๋ฅด๊ฒ ํ์คํธํด๋ณด๊ธฐ์ํ ์๋ด์ ์๋๋ค.
2. ์๋ฒ์คํํ http://localhost:4000/graphql ๋ก ์ ์ํฉ๋๋ค. 
3. ์๋์ ์ฝ๋๋ฅผ ํตํด ์ค๋ฌธ , ๋ฌธํญ , ์ ํ์ง๋ฅผ ํ๋ฒ์ ์์ฑํฉ๋๋ค.
``` javascript
mutation{
  createSurveyAll(CreateSurveyAllInput:{
    SurveyName:"์ฌ ์ฌ๋ฆ ํด๊ฐ์ฒ  ์ฌํ์ง ์ค๋ฌธ์กฐ์ฌ",
    SurveyContents:"์ฌ ์ฌ๋ฆ ํด๊ฐ์ฒ  ๊ตญ๋ด,๊ตญ์ธ ๋๋ ์ง๊ตฌ๋ฐ ์ฌํ์ ๊ณํ์ค์ด์  ์ฌ๋ฌ๋ถ์ ๋ค์ํ ์๊ฒฌ์ด ๊ถ๊ธํฉ๋๋ค.",
    Question1:"๋น์ ์ ์ด๋๋ก ์ฌํ์ ๋ ๋  ์์ ์ธ๊ฐ์?",
    Question2:"๋น์ ์ ์ฌํ ์์ฐ์ ์ผ๋ง์ธ๊ฐ์?",
    Question3:"๋น์ ์ ๋๊ตฌ์ ์ฌํ์ ๊ฐ ์์ ์ธ๊ฐ์?",
    Choice1Qnum1:"๊ตญ๋ด",
    Choice2Qnum1:"๊ตญ์ธ",
    Choice3Qnum1:"์ฐ์ฃผ",
    Choice1Qnum2:"100000~200000",
    Choice2Qnum2:"200000~300000",
    Choice3Qnum2:"100000000000์ด์",
    Choice1Qnum3:"ํผ์",
    Choice2Qnum3:"์น๊ตฌ",
    Choice3Qnum3:"๊ฐ์กฑ",
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
4. ์๋์์ฝ๋๋ฅผ ๋ณต์ฌํ์ฌ ๋ถ์ฌ๋ฃ์ด ์ค๋ฌธ์๋ฃ๊ฐ์ ์ ์ถํฉ๋๋ค.
```javascript
mutation{
  createReply(SurveyNumber:1,ChoiceInput:{
    Choice1:2,
    Choice2:4,
    Choice3:7,
    customer:"ํ๊ธธ๋"
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
5. ์๋์์ฝ๋๋ฅผ ๋ณต์ฌํ์ฌ ๋ถ์ฌ๋ฃ์ด ์ค๋ฌธ๊ฒฐ๊ณผ๊ฐ๋ค์ ๋ชจ๋ ๋ถ๋ฌ ์กฐํํฉ๋๋ค.
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
## ๐error log๐
<img width="441" alt="image" src="https://user-images.githubusercontent.com/113084907/214292430-f149e7b5-672e-4985-a14b-f4d7129bcb20.png">
<img width="1489" alt="image" src="https://user-images.githubusercontent.com/113084907/214319781-13b88b46-3599-44e5-93b0-7dc720caabab.png">



## ๐ API

<img width="212" alt="image" src="https://user-images.githubusercontent.com/113084907/214338728-b25392dc-009f-41d3-b4c3-ed6f14cbe432.png">

์์ธ๋ด์ญ์ DOCS๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์.




## ๐์ฌ์ฉ ๊ธฐ์ ๐

> **typescript**<br/>
> **nest.js**<br/>
> **graphql**<br/>
> **typeorm**<br/>
> **postgresql**<br/>
> **winston**<br/>
<br/>
</div>
