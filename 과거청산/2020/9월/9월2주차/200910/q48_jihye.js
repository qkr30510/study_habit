// 48. 대소문자 바꿔서 출력하기
/**
 * 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
 */

// 입출력
// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

let n = 'AAABBBcccddd';
let result = [];
n = n.split('');
console.log(n.length);


for(var i = 0; i < n.length; i++){
  if(n[i] == n[i].toUpperCase()){
    result += n[i].toLowerCase();
  } else {
    result += n[i].toUpperCase();
  }
}
console.log(result);
