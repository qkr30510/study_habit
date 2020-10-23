// 52. quick sort
/**
 * 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
 */

function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(arr[i] < pivot){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  var arr1 = '5 6 2 3 4 9 7 1';
  var array = arr1.split(' ').map(n => parseInt(n, 10));
 
  console.log(quickSort(array)); // [ 1, 2, 3, 4, 5, 6, 7, 9 ]