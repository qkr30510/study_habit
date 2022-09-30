// 75. 이상한 369

function sol(){
    let answer = 0;
    let count = 1;
    const d = {3 : 1, 6 : 2, 9 : 3};

    while (n.length !== 0){
        answer += d[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }

    return answer;
}

const user_input = new String(prompt('입력해주세요')).split('');

console.log(sol(user_input));
