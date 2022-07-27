//82. 수학 괄호 파싱

/**
 * 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 
 * 괄호는 소괄호밖에 없습니다.
 * 
 * 데이터 입력(1), 프로그램 종료(2) : 1
 * 데이터를 입력하세요: 3 + 5
 * True
 * 
 * 데이터 입력(1), 프로그램 종료(2) : 1
 * 데이터를 입력하세요: 5 + 7) * (3 * 5)
 * False
 */

 let userInput = '((())';

 function solution(s){
     let step = 0;
     for (let i in s){
         if (s[i] ==="("){
             step += 1;
         } else if (s[i] === ")"){
             step -=1;
         }
     }
     console.log(step);
 
     if (step !== 0){
         return false;
     }
     if (step === 0){
         return true;
     } 
 }
  
 solution(userInput);