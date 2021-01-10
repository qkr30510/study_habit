// Headfirst JS - 5. eightball

var eightBall = {
    index: 0,
    advice: ["네", "아니오", "아마도", "절대 아니에요"],
    shake: function(){
        this.index = this.index + 1;
        if (this.index >= this.advice.length){ // 4보다 같거나 크면
            this.index = 0; // index를 0으로 한다.
        }
    },
    look: function(){
        return this.advice[this.index]; // 현재 index의 advice를 호출한다.
    }
};

eightBall.shake();
console.log(eightBall.look());