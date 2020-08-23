// 35. Factory 함수 사용하기

/**
 * 각각 2제곱, 3제곱, 4제곱이 되는 함수 만들기
 *  
 */

//const n = 2;

function one(n){
  function two(value){
    //pass
    const sq = Math.pow(value, n);
    return sq;
  }
  return two;
}
//console.log(two);

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));