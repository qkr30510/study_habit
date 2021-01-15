// 35. Factory 함수 사용하기

/**
 * 각각 2제곱, 3제곱, 4제곱이 되는 함수 만들기
 *  
 */

function one(n){
  function two(value){
      //pass
    const sq = Math.pow(value, n);
    //console.log('value = ' + value);
    //console.log('n = ' + n);
    
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); //Math.pow(10, 2);
console.log(b(10)); //Math.pow(10, 3);
console.log(c(10)); //Math.pow(10, 4);