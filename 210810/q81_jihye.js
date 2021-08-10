// 81. 지뢰찾기
/**
 * 지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. 
 * 깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램을 만드세요.
 */

const value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
const sp = value.split('\n');
//console.log(n[0].split(' '));
let count = 0;

for (let i of sp){
  sp[count] = i.replace('1', 'f').split(' ');
  console.log(i);
  count += 1;
}
console.log(sp);
count = 0;
let search = 0;

for (let s of sp){
      //console.log(s);
  for(let i of s){
      //console.log(count, search);
    if(i === 'f'){
      if(search > 0){
        s[search - 1] = '*';
      }
      if(search < 4){
        s[search + 1] = '*';
      }
      if(count > 0){
        sp[count - 1][search] = '*';
      }
      if(count > 0){
        sp[count + 1][search] = '*';
      }
    }
    search += 1;
  }
  count += 1;
  search = 0;
}

for (let i of sp){
  console.log(i);
}