// Headfirst JS - 5. addAction
var fiat = {
    make: "피아트",
    model : "500",
    year : 1957,
    color : "암청색",
    passengers : 2,
    convertible : false,
    mileage : 88000,
    started : false,
    // started가 변수가 아닌 이 객체의 속성이라는 것을 
    // 자바스크립트 인터프리터가 알 수 있도록 this와 점 표기법을 사용한다.
    start : function(){
        this.started = true; 
    },
    stop : function(){
        this.started = false;
    },
    drive : function(){ // 속성명이 함수이름이 된다.
        if(this.started) {
            alert("붕붕!");
        } else {
            alert("먼저 시동을 거세요.");
        }
    }
};


fiat.drive();
