function sol(l){
    l.sort((a,b) => {
      return a-b;
    }); // 오름차순으로 정렬
  
    for (let i=0; i<l.length-1; i++){
      if(l[i]+1 !== l[i+1]){
        console.log(l); // [1, 2, 4, 5, 6]
        console.log(l[i]+1); // 3 => l.length-1 = 3
        console.log(l[i+1]); // 4 => (l.length-1)+1 = 4
        return 'NO';
        // 입력받은 숫자를 오름차순으로 정렬했을 때 앞뒤의 수가 연속되지 않으면 NO 출력.
      }
    }
    return 'YES';
  }
  
  const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(sol(n));