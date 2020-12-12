// Headfirst JS - 7. Lie Detector Test

function lieDetectorTest() {
    var lies = 0;

    var stolenDiamond = {}; // true
    if (stolenDiamond) {
        console.log("당신은 다이아몬드를 훔쳤습니다.");
        lies++;
    }
    var car = {
        keysInPoket: null
    };
    if (car.keysInPoket) { // false
        console.log("오호! 당신은 자동차를 훔쳤군요!");
        lies++;
    }
    if (car.emptyGasTest) { // false
        console.log("당신은 자동차를 훔친 후에 몰았습니다.");
        lies++;
    }
    var foundYouAtTheCrimeScene = []; // true
    if (foundYouAtTheCrimeScene) {
        console.log("확실히 유죄입니다.");
        lies++;
    }
    if (foundYouAtTheCrimeScene[0]) { // false
        console.log("훔친 물건과 함께 체포되었습니다.");
        lies++;
    }
    var yourName = " "; // true
    if (yourName) {
        console.log("이름을 사실대로 말하지 않았군요.");
        lies++;
    }
    return lies;
}

var numberOfLies = lieDetectorTest();
console.log("당신은 " + numberOfLies + "번 거짓말을 했습니다."); // 3
if (numberOfLies >= 3) {
    console.log("유죄입니다."); // true
}