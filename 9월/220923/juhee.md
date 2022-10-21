### 타입스크립트 책 읽기 (1장)

1. 타입스크립트 주요 문법
    
- 1-1 비구조화 할당 

```javascript

let person = { name: "jane", age: 22}
let { name, age} = person // name = "jane", age = 22

let array = [1,2,3,4]
let [head, ...rest] = array // head = 1, rest = [2,3,4]

let a = 1, b = 2;
[a,b] = [b,a] // a = 2, b = 1
// 서로 값을 교환하는 예 


```

- 1-2 화살표 함수

function 키워드 방식보다 더 간결하게 작성이 가능하다. 

```javascript
function add (a,b) {return a + b}
const add2 = (a,b) => a + b
```

- 1-3 클래스 

클래스로 객체지향 프로그래밍을 지원함. 

**객체지향 프로그램**
+ 캡슐화
+ 상속
+ 다형성


```javascript

// 객체지향 프로그래밍의 세 가지 요소
abstract class Animal {
    constructor (public name?: string, public age?: number) {}
    abstract say(): string
}

class Cat extends Animal{
    say(){return '야옹'}
}

class Dog extends Animal {
    say(){return '멍멍'}
}

let animals : Animal[] = [new Cat('야옹이', 2), new Dog('멍멍이', 3)]
let sounds = animals.map(a =>a.say()) // ['야옹', '멍멍']

```

- 1-4 모듈

모듈을 사용하면 코드를 여러 개 파일로 분할해서 작성할 수 있습니다. 
변수나 함수, 클래스등에 export키워드를 사용해 모듈로 만들면 다른 파일에서도 사용할 수 있습니다. 
그리고 이걸 사용하고 싶을때에는 ***import*** 키워드를 사용합니다.


- 1-5 생성기 

***yield***문은 반복기를 생성할 떄 사용합니다. 
반복기는 독립적으로 존재하지 않고 반복기 제공자를 통해 얻습니다. 
***yield***문을 이용해 반복기를 만들어 내는 반복기 제공자를 생성기 라고 부릅니다.

***생성기***는 function 키워드에 별표(*)를 결합한 `function*` 와 `yield` 키워드를 이용해 만듭니다. 
타입스크립트 내에서 `yield`는 반드시 `function*`으로 만들어진 함수 내부에서만 사용 가능합니다. 

```javascript

function* gen(){
    yield* [1,2]
}

//..function*  : 생성기 

for(let value of gen()) {console.log(value)} // 1,2 

```




