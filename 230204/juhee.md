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
const a = 1;

//ex1: (function{})()

(function (){
  document.write(a + 1)
})();


//ex2: (function{}())

(function (){
  document.write(a + 1)
}());


```

위처럼 function을 괄호로 한번 감싸주고 뒤에 소괄호룰 붙이면, 즉시실행함수가 된다.