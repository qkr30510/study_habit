// 28. 2-gram
/**
 * 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
 * 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
 */

const d = prompt('입력하세요.');
//const d = 'HELLOKIMJI';

for(i = 0; i<d.length-1; i++){
  //console.log(d.length-1);
  console.log(d[i], d[i+1]);
}
// d.length-1 = 10 - 1
// i = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// i+1 = 2, 3, 4, 5, 6, 7, 8, 9, 10