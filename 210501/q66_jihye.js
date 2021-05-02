// 66. 블럭탑쌓기

/**
 * 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
 * 순서에 맞게 쌓지 않으면 무너질 수 있습니다.
 * 
 * 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
 * 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.

입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]
 */

const allBlock = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]; //parts[0], parts[1], parts[2], parts[3], parts[4]
const rull = "ABD";

// 전체블록과 규칙을 대조해야 하므로 두 정보 모두 인자로 넣는다.
function solution(allBlock, rull) {
  let answer = []; // answer은 두가지로 출력한다. (가능/불가능)
  for (let parts of allBlock) {
    answer.push(blockIndexCheck(parts, rull)); //어떤걸 push? parts!
    //블록순서체크하는 함수를 이용하여 순서를 체크하여 parts를 리턴해보기로 하자.
    //블록순서를 체크하려면 parts과 rull이 필요하다. 인자로 넣는다.
  }
  return answer;
}

function blockIndexCheck(parts, rull) {
  let index = rull.indexOf(rull[0]); //초기값 A

  //부분블록의 한 글자씩 순회하며 대조한다.
  for(let str of parts){
    if(rull.includes(str)){//규칙에 부분블록의 글자가 있으면
      if(index > rull.indexOf(str)){// index보다 (규칙과 일치하는)부분블록 글자의 순서가 작으면
        return '불가능';
      }
      index = rull.indexOf(str);
    }
  }
  //console.log(index);
  return '가능'
}

console.log(solution(allBlock, rull));
