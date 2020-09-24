// Headfirst JS - 4. cost

/**
 * 의사코드를 자바스크립트로 변환하기
 */

function getMostCostEffectiveSolution(scores, costs, highScore) {
    //cost 변수를 선언하고 100으로 초기화

    //index 변수 선언

    // for : var i=0; i<scores.length; i++
        // if score[i]에 있는 용액의 점수 == highScore
            // if 현재 최저 비용이 costs[i]보다 높다
            // then
                // index값을 i로 설정
                // 최저 비용을 이 용액의 비용으로 설정
            // end if
        // end if
    // end for

    // return index
}

var getMostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("비눗방울 용액 #" + mostCostEffective + "이 비용 효율이 가장 좋습니다.");