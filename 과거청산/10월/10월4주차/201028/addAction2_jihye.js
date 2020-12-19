// Headfirst JS - 5. addAction
var cadi = {
    make: "GM",
    model : "캐딜락",
    year : 1955,
    color : "갈색",
    passengers : 5,
    convertible : false,
    mileage : 12892,

    started: false,
    start : function(){
        this.started = true; 
    },
    stop : function(){
        this.started = false;
    },
    drive : function(){ // 속성명이 함수이름이 된다.
        if(this.started) {
            alert(this.make + " " + this.model + "가 붕붕 달립니다!");
        } else {
            alert("먼저 시동을 거세요.");
        }
    }
}

var chevy = {
    make: "쉐보레",
    model : "벨 에어",
    year : 1957,
    color : "빨간색",
    passengers : 2,
    convertible : false,
    mileage : 1021,

    started: false,
    start : function(){
        this.started = true; 
    },
    stop : function(){
        this.started = false;
    },
    drive : function(){ // 속성명이 함수이름이 된다.
        if(this.started) {
            alert(this.make + " " + this.model + "가 붕붕 달립니다!");
        } else {
            alert("먼저 시동을 거세요.");
        }
    }

}

var taxi = {
    make: "웹타운 모터스",
    model : "택시",
    year : 1955,
    color : "노란색",
    passengers : 4,
    convertible : false,
    mileage : 281341,

    started: false,
    start : function(){
        this.started = true; 
    },
    stop : function(){
        this.started = false;
    },
    drive : function(){ // 속성명이 함수이름이 된다.
        if(this.started) {
            alert(this.make + " " + this.model + "가 붕붕 달립니다!");
        } else {
            alert("먼저 시동을 거세요.");
        }
    }

};


cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();