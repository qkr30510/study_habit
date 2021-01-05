// 56. 객체의 함수 응용

//데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}
//출력 : England 22023

const w = nationWidth['korea'];
//console.log(w);
delete nationWidth['korea']; // 객체에서 korea 삭제
//console.log(nationWidth);
const entry = Object.entries(nationWidth);
//console.log(entry);
/**
 * Object.entries() 객체를 배열로 바꿔준다.
 * 
 * { key : value, key : value, key : value } 형태의 객체를
 * [[ key, value], [ key, value], [ key, value]] 형태의 배열로 변환
 */

const value = Object.values(nationWidth);
//console.log(value);
/**
 * Object.values() 객체 내의 value만 추출하여 배열로 반환한다.
 * 
 * { key : value, key : value, key : value } 형태의 객체에서 value를 추출하여
 * [ value, value, value ] 형태의 배열로 변환
 */

let gap = Math.max.apply(null, value);
console.log(gap);

let item = [];

for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}
/**
 * Math.abs() 주어진 숫자의 절대값을 반환한다.
 * console.log(Math.abs(3 - 5)); // 2 (음수 -2의 절대값 반환)
 * console.log(Math.abs(5 - 3)); // 2 (양수 2의 절대값 반환)
 */

console.log(item[0], item[1]-w); // 'England' 22023