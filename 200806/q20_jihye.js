// 20. 몫과 나머지
const n = prompt('값을 입력하세요.').split(' ');
//const n = '10 2'.split(' ');
console.log(n);

const result = Math.floor(n[0] / n[1]);
typeof(n[0]); //String
//const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0] % n[1]);// % 나머지를 구하는 연산자
//const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
typeof(result); //Number
/**
 * palseInt(a, b) a를 b진수로 변환해주는 메서드
 * 문자열을 숫자로 바꾸어 주고자 할 때 사용
 * 
 * 연산 후 변수를 호출할 때 자동으로 Number로 변환되기 때문에 불필요
 */