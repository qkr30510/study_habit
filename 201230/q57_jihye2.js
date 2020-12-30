// 57. 1의 개수

/**
 * 0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 
 * 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 
 * 11은 1이 2번 들어간 셈이죠.
 * 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 
 * 출력해 주세요.
 */

// 고전 풀이식 이해하기
const obj = {};

for (let i = 0; i <= 1000; i++) {
    let tmp = i;
    while (tmp > 0) { // ex) 15라고 하면,
    //몫이 0이 될 때까지 반복
        let num = tmp % 10; // i를 10으로 나눈 나머지 ex) 5, 0이 된다.
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1; // tmp가 0이라면 obj[num]은 1 ex) 5, 1(0이었던 값은 1이 된다.)
        }
        tmp = parseInt(tmp/10, 10); // 10진수의 정수로 변환 ex) 0.5 --> 0
    }
}
console.log(obj[1]); // obj에서 1만 추출
