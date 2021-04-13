// 64. 이상한 엘레베이터
/**
 * 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
 * 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
 * 
 * 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
 * 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.
 * 
 * 입력
 * 정량 N이 입력됩니다.
 * 
 * 출력
 * 가장 적게 옮길 수 있는 횟수를 출력합니다.
 * 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다
 */

let n = 24;
let result = 0;

// 만약 n이 24일때
// result = weight1 * weight2
// 1 weight1은 3번, weight2는 1번
// 2 weight1은 2번, weight2는 3번 ... 나머지 1
// 3 weight1은 1번, weight2는 5번 ... 나머지 2
// 4 weight1은 0번, weight2는 8번
// 1, 4번만 해당. 1은 총 4번, 4는 총 8번

// false일 때까지 무한반복 while문, 
while (true) {
    if( n % 7 == 0 ) { // 7로 나눠서 0인 수라면,
        result = parseInt(n / 7, 10); // n을 7로 나눈 뒤 10진수 변환
        console.log(result);
        break;
    }
    n -= 3 // 3을 빼고,
    result += 1; // result에 1을 추가
    if(n < 0) { // n이 0보다 작으면 -1을 출력
        console.log(-1);
        break;
    }
}

