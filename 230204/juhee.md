### 즉시 실행함수


```javascript
const a = 1
function ong(x){
  document.write(x + 1)
}

ong(a)
```

위의 상황처럼 만들자 마자 바로 호출하는것이 즉시실행함수이다.



```javascript
// 즉시 실행 함수의 표현법

(function () {
    console.log("IIFE");
})();

// 화살표 함수로도 사용 가능하다
(() => {
    console.log("IIFE");
})();

```

즉시실행함수에도 이름을 붙여 기명 즉시실행함수로 사용 할 수 있다. 하지만 즉시실행함수는 선언과 동시에 호출되어 반환되어 재사용 할 수 없기 때문에 이름을 지어주는 것이 의미가 없다.

### 즉시실행함수를 왜 사용할까?

1. 필요없는 전역 변수의 생성을 줄일 수 있다.
함수를 생성하면 그 함수는 전역 변수로써 남아있게 되고, 많은 변수의 생성은 전역 스코프를 오염시킬 수 있다.

즉시실행함수를 선언하면 내부 변수가 전역으로 저장되지 않기 때문에 전역 스코프의 오염을 줄일 수 있다.


2. private한 변수를 만들 수 있다.
즉시실행함수는 외부에서 접근 할 수 없는 자체적인 스코프를 가지게된다. 이는 클로저의 사용 목적과도 비슷하며 내부 변수를 외부로부터 private하게 보호 할 수 있다는 장점이 있다.


### 즉시실행함수를 어떻게 활용할까?

1. 단 한 번의 사용이 필요한 함수
즉시실행함수는 한 번의 실행 이후 없어지기 때문에 단 한번의 사용한 필요한 함수에 사용된다. 대표적인 예시로는 변수를 초기화 하는 함수가 있다.
2. 자바스크립트 모듈
자바스크립트 모듈을 만들때에도 즉시실행함수가 많이 활용된다. 숫자를 세기 위한 Counter 싱글톤 객체를 구현해보며 알아본다.



참고: https://jongminfire.dev/java-script-%EC%A6%89%EC%8B%9C%EC%8B%A4%ED%96%89%ED%95%A8%EC%88%98-iife