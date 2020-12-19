// Headfirst JS - 7. substring

var data = "name|phone|address";
var val = data.substring(5, 10);
console.log(val + "이 하위 문자열입니다."); // phone이 하위 문자열입니다.

val = data.substring(5);
console.log(val + "가 부분 문자열입니다.") // phone|address가 부분 문자열입니다.