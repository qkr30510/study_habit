// 10. 별찍기
const n = prompt('숫자를 입력하세요');
//const n = 5;
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
    //공백이 n보다 1씩 감소
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
    //홀수로 2씩 증가
  }
  tree += star + '\n';
}
console.log(tree);

//1씩 증하하는 수를 이용한
//홀수 구하는 공식
/*---------------
1 * 2 - 1 = 1
2 * 2 - 1 = 3
3 * 2 - 1 = 5
4 * 2 - 1 = 7
5 * 2 - 1 = 9
----------------*/