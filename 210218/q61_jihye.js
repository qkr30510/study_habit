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
const user_s = new String(prompt('문자열을 입력하세요'));
let result_s = '';
let store_s = user_s[0];
let count = 0;

for (let i of user_s){
  if (i === store_s){
    count += 1;
  } else{
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
