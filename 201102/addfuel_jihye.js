// Headfirst JS - 5. add fuel

var fiat = {
    make: "피아트",
    model : "500",
    started : false,
    fuel : 0,
    // started가 변수가 아닌 이 객체의 속성이라는 것을 
    // 자바스크립트 인터프리터가 알 수 있도록 this와 점 표기법을 사용한다.
    start : function(){
        if(this.fuel == 0) {
            alert("연료통이 비었습니다. 시동을 걸기 전에 연료를 채우세요.");
        } else {
            this.started = true;
        }
    },
    stop : function(){
        this.started = false;
    },
    drive : function(){ // 속성명이 함수이름이 된다.
        if(this.started) {
            if(this.fuel > 0) {
                alert(this.make + this.model + "이 붕붕하고 갑니다.");
                this.fuel = this.fuel - 1;
            } else {
                alert("저런, 연료가 떨어졌어요.");
                this.stop();
            }
        } else {
            alert("먼저 시동을 거세요.");
        }
    },
    addFuel : function(amount) {
        this.fuel = this.fuel + amount; 
        // amount는 함수 파라미터라서 this를 사용할 필요가 없다.
    }
};


fiat.addFuel(200);
