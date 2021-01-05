// Headfirst JS - 3. parameter

// 파라미터보다 인자가 적을 경우
function makeTea(cups, tea) {
    console.log(cups + "잔의" + tea + "차를 끓입니다.");
}
makeTea(3); // 3잔의undefined차를 끓입니다.


// 파라미터보다 인자가 많을 경우
function makeTea(cups, tea) {
    console.log(cups + "잔의" + tea + "차를 끓입니다.");
}
makeTea(3, "얼그레이", "아이스티!", 42); // 3잔의얼그레이차를 끓입니다.


// 파라미터가 없을 경우
function barkAtTheMoon() {
    console.log("어우~~~~");
}
barkAtTheMoon(); // 어우~~~~