// 51. merge sort를 만들어보자
/**
 * 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
출처 : 위키피디아

다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.
 */

  function mergeSort(arr){
	if (arr.length <= 1){
	  return arr;
	}
  
	const mid = Math.floor(arr.length / 2); // 배열을 2로 나누고 소수점 버림한다. 중간점 정의.
	const left = arr.slice(0,mid); // 중간점을 기준으로 좌측을 left 배열로 정의
	const right = arr.slice(mid); // 중간점을 기준으로 우측을 right 배열로 정의
  
	return merge(mergeSort(left), mergeSort(right));
	// 나눈 left와 right를 merge한다.
  }
  
  function merge(left, right){
	let result = [];
  
	while (left.length && right.length){
	  if (left[0] < right[0]){ //좌우비교해서 
		result.push(left.shift()); //left가 작으면 left 푸시 
	  } else {
		result.push(right.shift()); //right가 작으면 right 푸시
	  }
	}
	while (left.length) {
	  result.push(left.shift()); // ?
	}
	while (right.length) {
	  result.push(right.shift()); // ?
	}
  
	return result;
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(mergeSort(array));

  