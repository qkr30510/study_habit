// 67. 민규의 악수
/**
 * 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
 * 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.
 * 
 * 이 행사에서 진행된 악수는 총 n번이라고 했을 때,
 * 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
 * 그리고 민규를 포함한 행사 참가자는 몇 명일까요?

- 악수는 모두 1대 1로 진행이 됩니다.
- 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
- 같은 상대와 중복된 악수는 카운트 하지 않습니다.
- 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.
행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.
 */

// 입력
// 59

// 출력
// [4, 12] // [악수 횟수, 행사 참가자 수]


/* 수학적 풀이 */
/**
    만약 총 사람 수가 5라면, 경우의 수는
    [a-b, a-c, a-d, a-e]
    [b-c, b-d, b-e]
    [c-d, c-e]
    [d-e]
    (5 - 1) + (5 - 2) + (5 - 3) + (5 - 4)
    = 4 + 3 + 2 + 1
    = (4 + 1) + (3 + 2)
    = 5 + 5
    = 10  //총 악수

    = 5 * (5 - 1) / 2
 */

function solution(n){
    let person = 0;
    let allshake = 0;
    let temp = 0;

    while(true){
        allshake = parseInt((person*(person-1))/2, 10);
        if(n < allshake){
            break;
        }
        temp = allshake;
        person += 1;
    }
    return [n - temp, person];
}

const shake = 59;
console.log(solution(shake));


