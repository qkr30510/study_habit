// 80. 순열과 조합
/**
 * 조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
 * 순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.
 * 한글의 자모 24자 중 자음은 총 14개입니다.
 * 이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.
 * 
 * <--요구 조건-->
1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
2. 두 번째 입력으로 조합의 수가 주어집니다.
3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.
 */


const arr = 'ㄱ ㄴ ㄷ ㄹ'.split(" ");
const n = 3;

function combination(chars){
  let combi = [];
  
  const f = (prefix, chars) => {
    //console.log("123");
    for(let i = 0; i < chars.length; i++){
      console.log('---------------')
      console.log(combi);
      console.log('pre : '+ prefix);
      console.log('char : '+ chars[i]);
      combi.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  const result = combi.filter(x => x.length === n);
  //console.log(result);
  return result;
}
console.log(combination(arr));
