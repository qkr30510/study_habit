// Headfirst JS - 4. cost 다시풀기

/**
 * 의사코드를 자바스크립트로 변환하기
 */
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 44, 18, 41, 53, 55, 61, 51, 44]
var costs = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 10, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 44, 18, 41, 53, 55, 61, 51, 44]

// scores배열에서 가장 큰 점수 구하기
function printAndGetHighScore(){    
    // 비눗방울 용액 #30 점수 : 44
}
// 최고 비눗방울 점수 : 69
console.log("최고 비눗방울 점수 : " + highScore);


// 최고 점수의 용액번호 구하기
function getBestResults(인자1, 인자2) { 
    // 최고 점수 용액 번호 : 11,18
}
var bestSolutions = getBestResults(인자1, 인자2);
console.log("최고 점수 용액 번호 : " + bestSolutions);

// 최고효율 용액 번호 구하기
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