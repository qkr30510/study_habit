var midi = true;
var type = "피아노";
var midiInterface;

function play(sequence) {
    // 코드 생략
}
var pause = function () {
    stop();
}
function stop() {
    // 코드 생략
}
function creatMidi() {
    // 코드 생략
}

if (midi) {
    midiInterface = function(type) {
        // 코드 생략
    };
}

// 코드가 이와 같을 때 함수를 생성되는 순서대로 적기

// play - stop - creatMidi - pause - midiInterface

// 함수가 생성되는 순서는 함수선언문 - 함수표현식 - 조건문
// midiInterface는 조건문 안에서 생성된 함수이므로...