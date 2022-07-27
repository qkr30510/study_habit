// 83. 수학 괄호 파싱2
/**수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
괄호는 소괄호와 중괄호가 있습니다.

데이터를 입력하세요: 5 + 7 * {(3 * 5)}
True

데이터를 입력하세요: 5 + 7){ * (3 * 5)
False
 */

let user_input = '()()(){{{}}}';

function sol(s){
  const m = {
    ')' : '(',
    '}' : '{'
  }
  let stack = [];
  
  for(let i in s){
    // 여는 괄호가 있으면 stack에 추가
    if(s[i] === '(' || s[i] === '{'){
      stack.push(s[i]);
      //console.log(stack);
    } else if (m[s[i]]){
      //console.log(m[s[i]]);
      // 닫는 괄호부터 시작이면 false
      if (stack.length === 0){
        return false;
      } else {
        let t = m[s[i]];
        // pop한 값이 t와 같지 않으면 false
        if (t != stack.pop()){
          return false;
        }
      }
    } 
  }
  //console.log(stack);
  return stack.length === 0;
}

console.log(sol(user_input));