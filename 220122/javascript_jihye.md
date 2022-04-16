## [Javascript] 클로저
### 자주 발생하는 실수

- 실수의 예
예상한 결과 : 0, 1, 2
```
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = function() {return i;}; // [f, f, f]
}

for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]()); // 실행 결과 : 3
}
```

- 올바른 클로저 예
예상한 결과 : 0, 1, 2
```
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (id){
        return function () {
            return id;
        };
    }(i)); // [f, f, f]
}

for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]()); // 실행 결과 : 0, 1, 2
}
```
