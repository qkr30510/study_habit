// Headfirst JS - 7. charAt

var input = "jenny@wickedlysmart.com";
for(var i = 0; i < input.length; i++) {
    if (input.charAt(i) === "0") {
        console.log(i + "번 인덱스에 @ 기호가 있어요.");
    }
}
// 5번 인덱스에 @ 기호가 있어요.