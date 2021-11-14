### 책 읽기 

생성자 함수를 사용하여 인스턴스를 생성하는 경우 프로토 타입 메서드를 생성하기 위해서는 다음과 같이 명시해야한다. 

```javascript
function Person(name){
    this.name = name;

}

// 프로토타입 메서드
Person.prototype.sayHi = function(){
    console.log(${this.name})
}
const me = new Person('lee')
me.sayHi(); // lee
```

**클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 에 페서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.**