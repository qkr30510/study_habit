// Headfirst JS - 4. cost

/**
 * 의사코드를 자바스크립트로 변환하기
 */
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 44, 18, 41, 53, 55, 61, 51, 44]
var costs = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 10, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 44, 18, 41, 53, 55, 61, 51, 44]

function printAndGetHighScore(scores){
    var highScore = 0;
    var output;
    
    // 비눗방울 용액 #30 점수 : 44
    for (var i = 0; i < scores.length; i++){
        output = "비눗방울 용액 #" + i + " 점수 : " + scores[i];
        console.log(output);
        if (scores[i] > highScore){
          highScore = scores[i];
        }
    }
    return highScore;  
}

function getBestResults(scores, highScore) { 
    var bestSolutions = [];
  
    for (var i = 0; i < scores.length; i++){// 배열을 하나씩 돌면서 highScore인지 확인
        if (scores[i] == highScore){
          bestSolutions.push(i); // push는 배열의 끝에 요소를 추가하는 매서드
        }
    }
    return bestSolutions;
}
  
function getMostCostEffectiveSolution(scores, costs, highScore) {
    //cost 변수를 선언하고 100으로 초기화
    var cost = 100;

    //index 변수 선언
    var index;

    // for : var i=0; i<scores.length; i++
    for(var i = 0; i < scores.length; i++) {
        // if scores[i]에 있는 용액의 점수 == highScore
        if(scores[i] == highScore) {
            // if 현재 최저 비용이 costs[i]보다 높다
            if(costs[i] < cost) {
            // then
                // index값을 i로 설정
                index = i;
                // 최저 비용을 이 용액의 비용으로 설정
                cost = costs[i];
            }
            // end if
        }
        // end if
    }
    // end for
    return index;
    // return index
}

var highScore = printAndGetHighScore(scores);

var bestSolutions = getBestResults(scores, highScore);
console.log("최고 점수 용액 번호 : " + bestSolutions);

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("비눗방울 용액 #" + mostCostEffective + "이 비용 효율이 가장 좋습니다.");