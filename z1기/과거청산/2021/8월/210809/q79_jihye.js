// 79. 순회하는 리스트
/**
 * 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
 * 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
 * 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]
 * 
 * 다음의 값이 주어졌을 때 n번 순회를 결정합니다.
 * 여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.
 * 
 * 입력
 * 순회횟수는 : 2
 * 
 * 출력
 * index : 6
 * value : 39, 34
 */

const l = [10, 20, 25, 27, 34, 35, 39];
const turn = 2;

function rotate(a, t){
  let b = a.slice();
  let c = [];
  
  for (let i = 0; i < t; i++){
    b.unshift(b.pop());
  }
  //console.log(b);
  
  for (let i in b){
    //console.log(i);
    c.push(Math.abs(a[i]-b[i]));
  }
  console.log(a);
  console.log(b);
  console.log(c);
  
  const m = Math.min.apply(null, c);
  let index = c.indexOf(m); // c배열안에서 m의 인덱스 값을 구한다.
  
  console.log(index);
  console.log(a[index], b[index]); // a배열과 b배열에서 c와 똑같은 인덱스에 있는 값을 구한다. 
}

console.log(rotate(l, turn));