// Headfirst JS - 7. NaN

/**
 * NaN : 수학적으로 정의할 수 없는 숫자
 */

var a = 0/0;
console.log(a);

var b = "food" * 1000;
console.log(b);

var c = Math.sqrt(-9);
console.log(c);

var myNum = NaN;
// 작동안함
// if (myNum === NaN) {
//     myNum = 0;
// }

if (isNaN(myNum)) {
    myNum = 0;
}
// isNaN 함수를 사용하여야 한다. 
// 이 함수는 인자로 받은 값이 숫자가 아니면 true를 반환한다.

var test11 = 0 / 0;
console.log(typeof test11);
// NaN은 숫자형이다.
// NaN은 '숫자가 아닌 것(Not a Number)'이 아니다.
// NaN은 '표현할 수 없는 숫자'라고 이해하는 것이 더 맞다.