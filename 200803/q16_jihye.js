// 16. 로꾸거
/*
 * 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
 */

const n = prompt('입력하세요.');
//const n = '거꾸로';
//const reverseString = n.split(''); //[ '거', '꾸', '로' ] 
//const reverseString = n.split('').reverse(); //[ '로', '꾸', '거' ]
const reverseString = n.split('').reverse().join(''); //'로꾸거'

console.log(reverseString);