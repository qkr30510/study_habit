### 생성자 함수를 사용해서 객체를 생성하는 방법

 > 생성자 함수란? new연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수이다. 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.

- object 생성자 함수 new 연산자와 함께 object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
```javascript
// 빈 객체의 생성
const person = new Object()

// 프로퍼티 추가
person.name = 'Lee'
person.sayHello = function() {
  console.log('Hi ' + this.name)
}

console.log(person) // {name:'Lee', sayHello:f}
person.sayHello() // Hi! Lee
인스턴스 생성 과정 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿으로서 동작하여 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것이다.
// 생성자 함수
function Circle(radius) {
  // 인스턴스 초기화
  this.radius = radius
  this.getDiameter = function() {
    return 2 * this.radius
  }
}
// 인스턴스 생성
const circle1 = new Circle(5)
// 자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
```


### 인스턴스 생성과 this 바인딩

> 암묵적으로 빈 객체(생성자 함수가 생성한 인스턴스) 생성
- 인스턴스는 this에 바인딩됨.
- 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행

바인딩? 식별자(변수이름)와 값을 연결하는 과정

인스턴스 초기화 생성자 함수에 기술되어 있는 코드가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.

```javascript
function Circle(radius) {
// 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

// 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
this.radius = radius
this.getDiameter = function() {
  return 2 * this.radius
}
// 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
// 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
return {}
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.

const circle = new Circle(1)
console.log(circle) // {}


```