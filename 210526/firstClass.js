// HeadFirst Chapter10 - 요금 지불한 승객을 확인하는 함수 만들기

var passengers = [ {name: "김함수", paid: true},
                   {name: "닥터 이블", paid: true},
                   {name: "박루프", paid: false},
                   {name: "최호출", paid: true} ];

// function checkPaid(passengers) {
//     for (var i = 0; i < passengers.length; i++){
//         if(!passengers[i].paid){
//             return false;
//         }
//     }
//     return true;
// }

// function checkNoFly(passengers){
//     for (var i = 0; i < passengers.length; i++){
//         if(onNoFlyList(passengers[i].name)){
//             return false;
//         }
//     }
//     return true;
// }

// function printPassengers(passengers){
//     for (var i = 0; i < passengers.length; i++){
//         console.log(passengers[i].name);
//     }
//     return true;
// }


function processPassengers(passengers, testFunction) {
    for(var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])){
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger){
    return (passenger.name === "닥터이블");
    //출국금지 명단에는 '닥터이블'만 있다고 가정.
}

function checkNoPaid(passenger){
    return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly){
    console.log("비행기가 이륙할 수 없습니다. 승객 중 출국 금지자가 있습니다.");
}

var allPaid = processPassengers(passengers, checkNoPaid);
if (!allPaid){
    console.log("비행기가 이륙할 수 없습니다. 요금을 지불하지 않은 승객이 있습니다.");
}


function printPassenger(passenger){
    var message = passenger.name;
    if (passenger.paid === true){
        message = message + "는 요금을 지불했습니다.";
    } else {
        message = message + "는 요금을 지불하지 않았습니다.";
    }
    console.log(message);
    return false;
}
  
processPassengers(passengers, printPassenger);