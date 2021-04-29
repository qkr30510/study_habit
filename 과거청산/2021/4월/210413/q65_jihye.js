// 65. 변형된 리스트
/**
 * a = [1, 2, 3, 4]
 * b = [a, b, c, d]
 * 이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
 */

// a[0] - b[0] - b[1] - a[1] - a[2] - b[2] - b[3] - a[3] 순서로 출력될 예정

let a = [1, 2, 3, 4];
let b = ['a', 'b', 'c', 'd'];
let result = [];

//console.log(a.length + b.length);
// for ( var i = 0; i < 4; i++ ) {
//   result[0] = [a[0], b[0]];
//   result[1] = [b[1], a[1]];
//   result[2] = [a[2], b[2]];
//   result[3] = [b[3], a[3]];
//   result;
//   // if( ){
    
//   // }
// }

while(true){
  let i = 0;
  result = [[a[i], b[i]]];
  if( result[i].length ){
    console.log('cxv');
    break;
  }
  console.log(result);
  console.log(result[i].length);
  i++;
  break;
}

