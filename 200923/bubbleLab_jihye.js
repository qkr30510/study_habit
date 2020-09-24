// Headfirst JS - 4. bubblelab 다시 풀어보기

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 44, 18, 41, 53, 55, 61, 51, 44]
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
// 비눗방울 실험 횟수 : 31
console.log("비눗방울 실험 횟수 : " + scores.length);
// 최고 비눗방울 점수 : 69
console.log("최고 비눗방울 점수 : " + highScore);

// 최고 점수 용액 번호 : 11,18
var bestSolution = [];
for (var i = 0; i < scores.length; i++){// 배열을 하나씩 돌면서 highScore인지 확인
    if (scores[i] == highScore){
      bestSolution.push(i); // push는 배열의 끝에 요소를 추가하는 매서드
    }
}
console.log("최고 점수 용액 번호 : " + bestSolution);