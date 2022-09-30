// HEAD FIRST 10 - 음료수 주문받기

var passengers = [ { name: "김함수", paid: true, ticket: "일반석" },
                   { name: "닥터 이블", paid: true, ticket: "일등석" },
                   { name: "박루프", paid: false, ticket: "일등석"},
                   { name: "최호출", paid: true, ticket: "일반석"} ];

function createDrinkOrder(passenger) {
    if (passenger.ticket === "일등석") {
        alert("칵테일이나 와인을 드시겠습니까?");
    } else {
        alert("물이나 콜라를 드시겠습니까?")
    }
}

function serveCustomer(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }

    // 음료수 제공
    createDrinkOrder(passenger);

    // 식사 제공
    // 쓰레기 수거
}