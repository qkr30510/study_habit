// Math.max.apply() 배열의 최댓값 구하기

var arr = [1, 2, 3, 4, 5, 6, 7];

// 배열을 사용하지 않는 예
Math.max(arr); // NaN  --> .max()의 파라미터로 배열을 직접 넣을 수 없다.
Math.max([1, 2, 3, 4, 5, 6, 7]); // NaN
Math.max(1, 2, 3, 4, 5, 6, 7); // 7
Math.max(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]); // 7  -->  배열의 값을 하나씩 꺼내서 넣음

// 배열 사용 예
Math.max.apply(null, arr); // 7  -->  .apply()를 사용하면 배열을 넣을 수 있다.
Math.max.apply(null, [1, 2, 3, 4, 5, 6, 7]); // 7
Math.max(...arr); // 7  -->  es6 spread 연산자

