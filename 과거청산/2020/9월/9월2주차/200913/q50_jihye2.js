// 50. 버블정렬 구현하기
function bubble(arr) { 
    let result = arr.slice(); //items.slice(); [4, 2, 3]

    for (let i = 0; i < result.length - 1; i++) {
        console.log('----------outer-roop---------');
        for (let j = 0; j < result.length - i - 1; j++) {
            console.log('<--- ' + j + '/' + result.length); // 이너루프 - 1씩 감소 4  3  2
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                console.log(result[j]);//4  4
                result[j] = result[j+1]; //0+1  1+1
                console.log(j, j+1); //0 1  0 1
                console.log(result); //[4, 2, 3]  [4, 2, 3]
                console.log(result[j]);//2  2
                result[j+i] = temp; //0+0 0+1
                console.log(j+i); //0  1
                console.log(result + ' --->'); //4,2,3  2,4,3
            }
        }
    }
    return result;
}

// const items = prompt('입력해주세요.').split(' ').map((n) => {
//     return parseInt(n, 10);
// });
let items = '4 2 3 8 5';
items = items.split(' ').map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));
