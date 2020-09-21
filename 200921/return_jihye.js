// Headfirst JS - 3. return
function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "저는 원자로가 아닙니다.";
    } else if (degrees < 100) {
        message = "저는 냉장고가 아닙니다.";
    } else {
        message = "저에게 딱 맞는 온도네요.";
        //setMode("굽기");
        //setTemp(degrees);
    }
    return message;
}

var status = bake(350);
/**
 * 함수가 호출되고 반환되면, 반환한 문자열이 status변수에 할당된다.
 */

console.log(status); // 저에게 딱 맞는 온도네요.
