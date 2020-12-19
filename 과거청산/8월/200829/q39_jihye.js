// 39. 오타 수정하기
/**
 * 혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 
 * 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 
 * 그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
 * 혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.
 * 
 * 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

 */

// 입출력

// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// 본인 풀이 -----------------------
const s = prompt('문장을 입력하세요.');
//const s = 'qwertyqqqq';
const result = s.replaceAll('q', 'e');
console.log(result);


// 답안풀이 (3개의 인자값 대입하는 방식)
const s = prompt('문장을 입력하세요.');
//let s = 'qwertyqqqq';
function replace(str, a, b){
  let result = str.replaceAll(a, b);
  //console.log(str);
  //console.log(a);
  //console.log(b);
  return result;
} 
console.log(replace(s, 'q', 'e'));


// 답안풀이 (3개의 인자값, replaceAll을 쓰지 않는 방식)
const s = prompt('문장을 입력하세요.');
//let s = 'qwertyqqqq';
function replace(str, a, b){
  let result = str.split(a).join(b);
  //console.log(str);
  //console.log(a);
  //console.log(b);
  return result;
} 
console.log(replace(s, 'q', 'e'));


// 정규표현식 -----------------------
const s = prompt('문장을 입력하세요.');
//let s = 'qwertyqqqq';
console.log(s.replace(/q/gi, 'e'));
// g = global, 하나의 문자열이 아닌 문자열의 모든 패턴 인스턴스와 일치
// i = 대소 문자를 구분하지 않습니다 (예 : /a/i는 "a" 또는 "A")


