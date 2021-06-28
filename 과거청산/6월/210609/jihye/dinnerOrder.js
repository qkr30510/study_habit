// HEAD FIRST 10 - 음료수 주문받기 + 식사 주문받기

var passengers = [ { name: "김함수", paid: true, ticket: "일반석" },
                   { name: "닥터 이블", paid: true, ticket: "일등석" },
                   { name: "박루프", paid: false, ticket: "일등석"},
                   { name: "최호출", paid: true, ticket: "우등석"} ];

function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "일등석") {
        orderFunction = function () {
            alert("칵테일이나 와인을 드시겠습니까?");
        } 
    } else {
        orderFunction = function () {
            alert("물이나 콜라를 드시겠습니까?");
        }
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;

    if(passenger.ticket === "일등석"){
        orderFunction = function () {
            alert("닭이나 파스타를 드시겠습니까?");
        }
    } else if(passenger.ticket === "우등석"){
            orderFunction = function () {
                alert("과자나 치즈를 드시겠습니까?");
            }
    } else {
        orderFunction = function () {
            alert("땅콩이나 프레첼을 드시겠습니까?");
        }
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);

    // 음료수 제공
    getDrinkOrderFunction();

    // 식사 제공
    getDinnerOrderFunction();
    getDrinkOrderFunction();

    // 영화 상영
    getDrinkOrderFunction();

    // 쓰레기 수거
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++){
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);