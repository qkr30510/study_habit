// 자바스크립트 책 다시 읽기.

### 변수중 새롭게 알게 된 내용.

***new string 과 string의 차이 ***

문자열 객체를 선언하는 방식이라는 점에서는 동일하지만,
new 연산자를 통해 String 객체를 생성하는것은 **생성자 정보로 문자열 데이터를 넘기는 방식**이고,
선언한 참조 변수에 문자열 데이터를 입력하여 **객체를 생성하는 방식**이다.

```javascript
var objStr = new String("unikys"); // #1 
var toStr = String("unikys"); // #2 
var prmStr = "unikys"; // #3: String literal

/* #1 */ 
typeof new String("unikys") === "object"; 
new String("unikys") instanceof String === true; 

/* #2 */ 
typeof String("unikys") === "string"; 
String("unikys") instanceof String === false; 

/* #3 */ 
typeof "unikys" === "string"; "unikys" 
instanceof String === false;


```

#### 즉, new String('')으로 만든건 object이며, 그 외에는 string이다. 

>**instanceof 연산**자는 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.
