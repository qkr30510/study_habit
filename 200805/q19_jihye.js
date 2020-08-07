// 19. 제곱을 구하자
/**
 * 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
 */

 
const n = prompt('수를 입력하세요.').split(' '); //if ('2, 4')일 때,
//n = n.split(' ');
  
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

/**
 * Math.Pow(밑, 지수);
 * 제곱함수를 구할 때 쓴다.
 */