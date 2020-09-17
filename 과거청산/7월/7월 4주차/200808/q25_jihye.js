// 25. 원의 넓이를 구하세요
/**
 * 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
 * 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
 * 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
 */


const n = prompt('반지름의 길이');
//const n = 10;
const result = n * n * 3.14;

console.log(result);


//함수선언식 : 함수선언문이 정의되기 전에도 호출 가능
function circle(n) {
    const result = n * n * 3.14;
    
    return result;
}
  
const r = prompt('반지름의 길이');
//const r = 5;

console.log(circle(r));


//함수표현식 : 실행 흐름이 해당 코드에 도달했을 때 함수를 생성
const circle = function(n){
    const result = n * n * 3.14;
    return result;
}
  
const r = prompt('반지름의 길이');
//const r = 5;

console.log(circle(r));

