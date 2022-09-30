// 61. 문자열 압축하기
/**
 * 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
 * 
 * 입력
 * aaabbbbcdddd
 * 
 * 출력
 * a3b4c1d4
 */


// 나의 풀이
var str = prompt('영문 소문자만 입력');

var str_a = str.match(/a/g);
var str_b = str.match(/b/g);
var str_c = str.match(/c/g);
var str_d = str.match(/d/g);

console.log("a" + str_a.length + "b" + str_b.length + "c" + str_c.length + "d" + str_d.length);


// 답안
const user_s = new String(prompt('문자열을 입력하세요')); // aaabbbbcdddd
let result_s = '';
let store_s = user_s[0]; // a
let count = 0;

for (let i of user_s){ // for of문 반복가능한 객체 : Array, Map, Set, String, TypedArray, arguments
  if (i === store_s){ // i === a
    count += 1; // 1
  } else{
    result_s += store_s + String(count); // a3
    store_s = i; // a = b
    count = 1; // 
  }
}

result_s += store_s + String(count); //a3b4c1 + d4
console.log(result_s); // a3b4c1d4
