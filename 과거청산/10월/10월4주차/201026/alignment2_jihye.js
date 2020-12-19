// Programmers - Alignment : Level 2

/**
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 * 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 * 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 */

// condition
var num1 = [6, 10, 2]; // return : 6210
var num2 = [3, 30, 34, 5, 9]; // return : 9534330


// solution1 - es6
function solution1(numbers) {
    var answer = '';
    
    var str = numbers.map(x => x + ''); // 문자로 변환
    //console.log(str); 
    
    var sort = str.sort((a, b) => (b+a) - (a+b)); // 오름차순 정렬
    // a에서 b를 뺀 결과가 음수면 a가 b보다 작고, 0이면 같다.
    // sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.
    console.log(sort); 
    
    answer = sort.join('');
    
    return answer;
}

console.log(solution1(num1));
console.log(solution1(num2));



// solution2 - es5
function solution2(numbers) {
    var answer = '';
    
    var str = String(numbers).split(','); // 문자로 변환 후 나누기
    //console.log(str); 
    
    var sort = str.sort(function(a, b){// 오름차순 정렬 
      if ((b+a)<(a+b)){ // (106)<(610)
        return -1;
      } else if ((b+a)>(a+b)){ // (210)>(102)
        return 1;
      }
      return 0;
      // 문자열을 더한 수를 a, b에 대입하여 비교한 후 a가 더 크면 1, b가 더 크면 -1 반환
      // a, b가 같으면 0 반환
      // sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.
    });
    console.log(sort);
    
    answer = sort.join('');
    
    return answer;
}

console.log(solution2(num1));
console.log(solution2(num2));