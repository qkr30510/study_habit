// 70. 행렬 곱하기
/*
행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.
*/
let a = [
    [1, 2], 
    [2, 4]
];
let b = [
    [1, 0], 
    [0, 3]
];
  
let result = [
    [
      a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]
    ],
    [
      a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]
    ]
];
console.log(result);
  
function solution(a, b){ // 두 가지의 행렬
    let result = [];
    const len = a.length; // a의 길이
    
    if(a[0].length === b.length){
      let result = [];
      for (let i = 0; i < len; i++){
        let row = [];
        for (let j = 0; j < len; j++){
          let el = 0;
          for (let k =0; k < len; k++){
            el += a[i][k] * b[k][j];
          }
          row.push(el);
        }
        result.push(row);
      }
      return result;
    } else {
      return -1;
    }
}
console.log(solution(a, b));