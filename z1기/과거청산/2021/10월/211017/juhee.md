### 책 읽기

정적메서드

정적(static)메서드는 인스턴스를 생성하지 않아도 호출할 수 있는 메서드를 말한다.
생성자 함수에서 정적 메서드를 호출할때는 아래 스크립트 처럼 행해야한다.

```javascript
// 생성자 함수
function Person(name){
    this.name = name;
}

Person.sayHi = function (){
    console.log('Hi!')
};

//정적 메서드 호출
Person.sayHi(); // Hi


//** 클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드가 된다.
// 클래스
class Person {
    //생성자
    constructor(name){
        //인스턴스 생성 및 초기화
        this.name = name;
    }
    // 정적 메서드
    static sayHi(){
        console.log('Hi')
    }
}
```

