// 43. 10진수를 2진수로
/**
 * 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
 * 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
 * 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.
 */

let a = prompt('숫자를 입력하세요.');
//let a = '10';
let arr = [];
let result = '';

while(a){ //5 -> 2 -> 1
  //console.log(a == true);
  arr.push(a % 2); // [0, 1, 0, 1]
  a = parseInt(a / 2, 10); // a를 5 -> 2 -> 1로 바꿔줌
  //console.log(a);
  //a = a / 2; // 숫자가 무한대로 나눠짐...10진수의 정수로 바꿔주기 위해 parseInt 사용
}
console.log(arr);// [0, 1, 0, 1]

arr.reverse(); // [1, 0, 1, 0]

arr.forEach((n) => {
  var n = result += n; //1010
})
console.log(result); //1010