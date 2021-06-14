// 골드바흐의 추측 (에라토스테네스의 체)
var prime = prime_list(val);
var val = 100;
//var isPrime = true;
var 골드바흐파티션 = [];


function prime_list(n) {
    // 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    let sieve = []
    for (let i = 2; i < n; i++){
      sieve.push(true);
    }

    // n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    let m = parseInt(n * 0.5, 10);
    for (let i = 2; i < m + 1; i++){
        if (sieve[i] == true){           // i가 소수인 경우
            for (let j = i+i; j < n; j += i){ // i이후 i의 배수들을 False 판정
                sieve[j] = false;
            }
        }
    }
    // 소수 목록 산출
    let 소수목록 = [];
    for (let i = 2; i < n; i++){
      if (sieve[i] == true){
        소수목록.push(i)
      }
    }
    return 소수목록;
}
//console.log(prime_list(100));

// for (var i = 2; i < val; i++){
//     for (var j = 2; j < i; j++){
//         if (i % j === 0){
//             isPrime = false;
//         }
//     }
//     if (isPrime){
//         prime.push(i);
//     }
//     isPrime = true;
// }
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