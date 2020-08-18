// 33. 거꾸로 출력하기
/**
 * 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
 */

const n = prompt('둘 이상의 숫자를 입력하세요.')
//const n = '12345';
const result = n.split('').reverse().join('');

console.log(result);


// 답안에 오류가 있는 것 같다. 답안 고쳐서 풀이해 봄.

const data = prompt('숫자를 입력하세요.');
//const data = '1 2 3 4 5';
const dataReverse = data.split(' ').reverse();
let result = ''; //const -> let 으로 변환해주어야 애러안남

for (let i=0; i<dataReverse.length; i++){
  result += dataReverse[i]; // const로 할 경우 재할당 에러
  result += ' '; //숫자 사이 공백 추가
}

console.log(result); 