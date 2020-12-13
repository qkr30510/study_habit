#Vue.js - TODO

##vue cli 로 프로젝트 만들기
```
 vue create [프로젝트명]
```
public => static 한 파일
src = > 개발소스

## package.json
```
"scripts": {
    // 개발 화면
    "serve": "vue-cli-service serve",
    
    // 배포 화면 : dist 아래에 배포 파일 확인
    "build": "vue-cli-service build",

    // 룰에 위배되는 것을 알려줌.
    "lint": "vue-cli-service lint"
},
```

## 파일 구조
assets : 이미지/css 등
components : 모든 페이지에서 사용되는 공통된 컴포넌트
views : 각 화면
main.ts : vue 인스턴스 생성, 프로젝트 entry
router.ts : 라우터를 적는 화면

## tsconfig
target : 빌드된 파일 버전
moduleResolution : 모듈 해석 방식
include : 컴파일 대상
exclude : 빌드 예외 대상

## 문법
### @ decorator
https://joshua1988.github.io/vue-camp/ts/pdecorator.html#%EB%A7%9B%EB%B3%B4%EA%B8%B0-%EC%BD%94%EB%93%9C

1. @component : 클래스 스타일로 컴포넌트를 만들 수 있다.
```js
  import { Component, Vue } from 'vue-property-decorator';

  export default class Message extends Vue {
    message: string = '메세지를 입력해주세요';
  }
```

2. @prop : 부모 컴포넌트가 자식컴포넌트에게 데이터를 전달

error : Property 'parentMessage' has no initializer and is not definitely assigned in the constructor.
- 컴파일러 옵션에 strict 가 true 이면, undefined 를 포함하지 않는 클래스 속성은 반드시 초기화되어야한다.
- 속성을 옵션으로 표시해야함. " ?: "
```
  @Prop() parentMessage ?: string;    
```

[동적인 데이터를 자식 컴포넌트에 내릴 때]
```
// 속성 앞에 : 을 붙이면 표현식으로 넘어갈 수 있어서 값에 변수를 넣을 수 있다.
<children :parentMessage="message" />
message: string = 'hello world';
```