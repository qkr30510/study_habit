// 41.소수판별
/**
 * 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
 * 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
 * (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
 */

// 본인풀이 ------------------------------------
const n = prompt('숫자를 입력하세요.');

var result = n == parseInt(n, 10) ? 'Yes' : 'No';

console.log(result);
// 위는 정수구하는 코드를 작성한 것 같다. 소수에 대한 잘못된 이해. 다시 풀어볼 것.


// 답안풀이 ------------------------------------
const num = prompt('숫자를 입력하세요.');
//const num = 2;

function check_prime(num) {
  for (let i=2; i<num; i++) { //num이 최소공배수가 될 때까지 순회.
    const result = num % i; //num을 2로 나누었을 때의 나머지.
    if (result === 0) { //나머지가 0이면,
      console.log('NO'); //No출력.
      return false;
    }
  }
  if (num === 1) { //num이 1이면,
    console.log('NO'); //No 출력.
    return;
  }
  console.log('YES'); 
  // num을 2로 계속 나누었을 때, 마지막 수의 나머지가 0이 아니면서 num의 값이 1이 아닌 수 = 소수. YES 출력.
}

check_prime(num);