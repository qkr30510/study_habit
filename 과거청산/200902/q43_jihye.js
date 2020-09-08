// 43. 10진수를 2진수로
/**
 * 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
 * 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
 * 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.
 */

let a = prompt('숫자를 입력하세요.');
//let a = '10';
let b = [];
let result = '';

while (a){
	b.push(a % 2);
	a = parseInt(a / 2, 10);
  //console.log(b); // 0101
}
b.reverse(); // 배열을 거꾸로 정렬 1010

b.forEach((n) => { //배열 b를 하나씩 result에 추가한다.
  var n = result += n;
  //console.log(n);
})

console.log(result); // 1010