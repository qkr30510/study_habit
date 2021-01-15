// 타이머를 만들어 보자

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    /* 생소한 변수 선언방식이라고 생각할 수 있으나 단순하다. 
    var timer; var minutes; var seconds; 
    timer = duration;
    와 같다. */
    setInterval(function () {
        minutes = parseInt(timer / 60, 10); 
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        // minutes이 10보다 작은가? true면 앞에다가 0붙이기 : false면 안붙이기;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // seconds이 10보다 작은가? true면 앞에다가 0붙이기 : false면 안붙이기;

        display.text(minutes + "분 " + seconds + "초"); // "00분 00초" 로 나타내기

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000) // 1초마다 실행
}

jQuery(function ($) {
    var tenMinutes = 60 * 10,
        display = $('#time');
    startTimer(tenMinutes, display);
});