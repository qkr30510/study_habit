// 63. 친해지고 싶어

/**
 * 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
 * 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
 * 
 * 입력
 * 복잡한 세상 편하게 살자
 * 
 * 출력
 * 복세편살
 */


 //  나의 풀이
 let fullString = '복잡한 세상 편하게 살자';
 let arr = fullString.split(' ');
 let result = '';
 // console.log(arr[0][0] + arr[1][0] + arr[2][0] + arr[3][0]);
 //arr.length
 for (let i = 0; i < arr.length; i++) {
   result = result + arr[i][0];
 }


 // for of문 사용 1
 let fullString = '복잡한 세상 편하게 살자';
 let arr = fullString.split(' ');
 for (let i of arr) {
   console.log(i[0]);
 }

 // for of문 사용 2
 let fullString = '복잡한 세상 편하게 살자';
 let arr = fullString.split(' ');
 let result = '';
 for (let i of arr) {
   result += i.slice(0, 1); // 0번째부터 1글자까지 잘라오기
   // result = result + i.slice(0, 1);
   // result = result + i[0];
 }


