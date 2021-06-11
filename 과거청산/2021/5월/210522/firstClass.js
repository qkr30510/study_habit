// HeadFirst Chapter10 - 요금 지불한 승객을 확인하는 함수 만들기

var passengers = [ {name: "김함수", paid: true},
                   {name: "닥터 이블", paid: true},
                   {name: "박루프", paid: false},
                   {name: "최호출", paid: true} ];

function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++){
        if(!passengers[i].paid){
            return false;
        }
    }
    return true;
}

function checkNoFly(passengers){
    for (var i = 0; i < passengers.length; i++){
        if(onNoFlyList(passengers[i].name)){
            return false;
        }
    }
    return true;
}

function printPassengers(passengers){
    for (var i = 0; i < passengers.length; i++){
        console.log(passengers[i].name);
    }
    return true;
}

// 위와같이 for문이 반복되는 코드 리팩토링 해보자.
