// 69. 골드바흐의 추측
var prime = [];
var val = 100;
var isPrime = true;
var 골드바흐파티션 = [];

for (var i = 2; i < val; i++){
    for (var j = 2; j < i; j++){
        if (i % j === 0){
            isPrime = false;
        }
    }
    if (isPrime){
        prime.push(i);
    }
    isPrime = true;
}
/* 
이중 for문
만약 i가 4면, j는 2부터 1씩 증가하면서 연산
4 % 2 == 0 --> true

만약 i가 5면, j는 2부터 1씩 증가하면서 연산
5 % 2 == 1 --> false
5 % 3 == 2 --> false
5 % 4 == 1 --> false

false이므로 prime배열에 추가
*/

// 배열 순환하는 for of문
for (let n of prime){ 
    if (prime.includes(val - n) && n <= (val - n)){
        골드바흐파티션.push([n, val - n]);
    }
}
//console.log(골드바흐파티션);

let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);
//console.log(차);
//console.log(Math.min.apply(null, 차));
//console.log(Math.max.apply(null, 차));
let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];
let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];

console.log("작은값: " + 작은값);
console.log("큰값: " + 큰값);