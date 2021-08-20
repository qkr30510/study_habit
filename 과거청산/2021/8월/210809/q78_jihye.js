const user_input = '6 3'.split(" ");
const n = parseInt(user_input[0], 10);
const k = parseInt(user_input[1], 10);
console.log(n, k);

function sol(n, k){
    let index = 0;
    let q = [];

    // 0 - 5 를 1 - 6 으로 만들어주기 위한 for문?
    for (let i = 0; i < n; i++){
        q.push(i + 1);
    }
    while (q.length > 2){

        // index가 전체 갯수보다 커지면, 다시 앞으로 보내준다.
        if (index > q.length - 1){
            index -= q.length;
        }

        // q를 index만큼 건너뛰어서 하나씩 뺀다.
        q.splice(index, 1);
        index += k;
        index -= 1;
    }
    return q;
}
console.log(sol(n, k));