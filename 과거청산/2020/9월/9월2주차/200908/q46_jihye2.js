// 46. 각 자리수의 합 2
/**
 * 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 
 * 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
 * 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
 */
 
//let n = '1234567891011121314151617181920';
let a = [];
var result;
var sum = 0;

// 1에서 20까지의 수를 for문을 이용해 배열로 추출.
for(var i = 0; i < 20; i++){
  a[i] = i + 1; // i는 0이므로 i + 1 = 1, 1부터 시작.
  //console.log(a);
}
  console.log(a);

a.forEach((n) => { //n은 배열a 각각의 수. 1 ~ 20.
while(n !== 0){
  sum += Math.floor(n % 10);
  console.log('sum : ' + sum);
  n = Math.floor(n / 10);
  console.log(n);
}
});
  console.log('sum : ' + sum);// 102