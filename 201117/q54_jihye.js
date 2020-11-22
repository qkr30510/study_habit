// 54. 연속되는 수
/**
 * 은주는 놀이공원 아르바이트를 하고 있다. 
 * 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 
 * 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
 * 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.
 
 * 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오
 */

function solution(l){
  l.sort((a, b) => {
    return a-b;
  });
  //return l;
  
  for (let i = 0; i < l.length-1; i++){
    if(l[i]+1 !== l[i+1]){
      console.log(l);
      console.log(l[i+1]); // 1번 인덱스 + 1 = 4(2번 인덱스 숫자)
      console.log(l[i]+1); // 1번 인덱스 숫자 = 2, 2 + 1 = 3(number) 
      return 'no';
    }
  }
  return 'yes';
}

let n = '2 4 1 8 6'.split(' ').map(n => parseInt(n, 10));
//let n = '2 4 1 3 5'.split(' ').map(n => parseInt(n, 10));

console.log('solution = ' + solution(n));
