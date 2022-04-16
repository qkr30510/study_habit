// adder (N 더하기)
function addN(n) {
    var adder = function(x) {
        return n + x;
    };
    return adder;
}
var add2 = addN(2); // 2는 n에 대입
console.log(add2(1)); // 1은 x에 대입
console.log(add2(100));


// minor (N 빼기)
function minN(n) {
    var minor = function(x) {
        return n - x;
    };
    return minor;
}
var min2 = minN(2); // 2는 n에 대입
console.log(min2(1)); // 1은 x에 대입
console.log(min2(100));