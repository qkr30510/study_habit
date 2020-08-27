// 36. 반장 선거
/**
 * 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
 * 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 
 * 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.
 */

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.


// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

const array = prompt('이름을 입력해주세요.').split(' ');
//let array = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';
array = array.split(' ');
let result = {};//객체 선언
/*
객체는 {} 중괄호를 이용해 만들며, 키(key):값(value) 쌍으로 구성된 property를 여러개 넣을 수 있다.
키는 문자형, 값은 모든 자료형이 허용된다. 
*/
let winner = "";

console.log('result : ' + result);

for(let index in array){
  let val = array[index]; 
  console.log('val :' + val);
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
  /*
  result[val] 초기값은 undefined.
  result[val]의 값이 undefined이면 1을 담는다. => result[val]의 값이 1이 됨.
  result[val]의 값이 undefined가 아니면 현재 값에 1을 더한다.
  */
  console.log('result[val] : ' + result[val]);
  //console.log('개표 : ' + array[index], result[val]);
}


console.log('결과 : ' + Object.keys(result));


winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
  /*
  .reduce()는 배열의 각 요소에 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.
  배열을 순회하며 인덱스 데이터를 줄여가면서 기능을 수행함.
  배열 a, b, c가 있을때,
  a와 b를 비교하여 하나의 값을 반환, 반환된 값을 c와 비교하여 다시 하나의 값을 반환.
  */
});
console.log('결과 : ' + winner);


console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);