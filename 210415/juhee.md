### js 책 다시 읽기

### var, const, let

1. var 키워드
    - var키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다. 
    - 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다. 
    - 변수 호이스팅에 의해 var 키워드로 선언한 변수는 변수 선언문 이전에 참조 할 수 있다. 

2. let 키워드
    - let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러가 발생한다. 
    - let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다. 
    - 변수 호이스팅이 발생하지 않는 것처럼 동작한다. 

3. const 키워드 
    - 상수를 선언하기 위해 사용한다.
    - const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다. 
    - const 키워드로 선언한 변수는 재할당이 금지된다. 
    - const 키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고 const 키워드에 의해 재할당이
    금지되므로 할당된 값을 변경할 수 있는 방법은 없다. 
    

> 상수는 재 할당이 금지된 변수를 말한다. 


