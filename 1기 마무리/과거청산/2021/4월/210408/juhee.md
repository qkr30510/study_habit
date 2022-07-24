javascript에 이런 함수들이 존재한다는 사실을 처음 알게 되었다.

그래서 바로 찾아서 정리해 두려고 한다.



filter(callback)

 - arr.filter(callback[thisArg]) 의 형태 입니다.

 - 배열에 조건을 주어 조건에 만족하지 못하는 원소들을 걸러낸다.



ex)

function isTenUp(value){

 return value >10;

}

var filtered = [11, 3, 9, 130, 44].filter(isTenUp);



결과  : filtered = [11, 130, 44]







map(callback)

 - arr.map(callback[thisArg]) 의 형태 입니다.

 - 어떠한 배열에 특정 규칙을 적용시켜 새로운 배열을 만든다.



ex)

var array = [1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1];

var array10 = array.map(function (elements){

return elements * 10;

});

var arrayMath = array.map(Math.ceil);



결과 :

array10 --> 11,21,31,41,51,61,71,81,91,101

arrayMath --> 2,3,4,5,6,7,8,9,10,11







reduce(callback, value)

 - arr.reduce(callback[, initialValue])



ex)

var number = [0,1,2,3,4,5];

function add(acc, value) {

return acc + value;

}

var sum = number.reduce(add, 0);

var total = number.reduce(function(a, b) {return a + b;});



결과 :

sum --> 15

total --> 15



reduce의 개념은 아직도 약간 어렵다고 느껴집니다.

0 + 1을 먼저 하면 1 이 나오고 

이 1과 다음 원소인 1을 더하여 2



그러므로



0 + 1 = 1

1 + 2 = 3

3 + 3 = 6

6 + 4 = 10

10 + 5 = 15



이와 같은 계산식이 이루어 진 것을 확인 할 수 있습니다.



잘 이해가 되지 않아 라이브러리를 찾아봤더니

 [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {

  return previousValue + currentValue;

});



이와 같은 식을 찾을 수 있었습니다.

이전 값(왼쪽 값)부터 차례대로 함수를 수행하고 결과로 나온 값과,

오른쪽 즉, 다음 값이 함수로 들어가서 로직을 수행하여 return 값을 도출해 냅니다.



