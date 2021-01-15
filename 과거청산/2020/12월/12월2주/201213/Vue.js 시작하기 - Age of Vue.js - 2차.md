#Vue.js 시작하기 - Age of Vue.js (9-38/68)
https://www.inflearn.com/course/Age-of-Vuejs/lecture/
https://kr.vuejs.org/v2/api/index.html

## 인스턴스 생성
```js
var vm = new Vue(
  el : '#app' //#app 에 인스턴스를 붙인다.
  template:,
  data:,
  methods:,
  created:,
  watch:, // 데이터 속성이 변화했을 때 동작 수행
);
```
뷰를 생성자함수 형태로 만든다.
생성자 함수는 함수를 이용하여 어떤 한 정보를 담은 객체를 생성함
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Obsolete_Pages/Core_JavaScript_1.5_Guide/Creating_New_Objects/Using_a_Constructor_Function

인스턴스를 생성하면 vue 개발자도구에서 root 컴포넌트를 인식함. 인스턴스는 여러개 생성할 수 있다.

## 뷰 컴포넌트
: 화면의 영역별로 구분하여 개발, 영역별로 코드를 분리하여 관리한다

장점 : 재사용성이 올라가고, 빠르게 제작

```js
 // 전역 컴포넌트 등록
  Vue.component('컴포넌트 이름', {
    컴포넌트 내용
  });

  new Vue(
    el : '#app' 
    //지역 컴포넌트 등록
    components: {
      '컴포넌트 이름': {
        컴포넌트 내용
      }
    }
  );
```

지역 컴포넌트로 등록하면, 특정 컴포넌트 하단에 어떤 컴포넌트가 등록되는 지 알 수 있다

플러그인, 라이브러리 등을 사용할 때, 전역 컴포넌트로 등록하게 되고, 
일반적으로 지역 컴포넌트로 등록한다.

전역 컴포넌트는 인스턴스를 생성할 때 이미 등록되어 있고,
지역 컴포넌트는 인스턴스를 생성하고 나서 등록해줘야 한다.

부모 컴포넌트는 자식에게 props를 내리고,
자식은 부모에게 이벤트를 올린다.

### 컴포넌트 통신
#### props
```
<template v-bind:[자식 컴포넌트의 props이름]="[부모컴포넌트의 데이터 이름]"></template> 
```
- props이름은 소문자여야 되는 듯. 대문자가 들어가 있으면, 오류가 난다.
- 한 페이지에 있는 여러 template이 있을 때,
각 template의 props이름이 겹쳐도 됨

#### event
```
<template v-on:[자식 컴포넌트의 event이름]="[부모컴포넌트의 메서드 이름]"></template> 
```

### 같은 레벨의 컴포넌트
같은 레벨의 컴포넌트 a와 b가 있다면,
a - evnet로 10을 root에 전달
root - props 로 10을 b에 전달
## Q. 궁금한 점
컴포넌트를 사용할 때, 아래 두 개의 차이점은?
```js
<template /> 
<template></template> 
```

아래와 같이 사용하면,
첫번째 template 만 표시된다.
```js
<template /> 
<template /> 
<template /> 
<template /> 
```