var view = {

    // 문자열 메세지를 인자로 받아서 메세지 영역에 출력한다.
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

//view.displayHit("34");
//view.displayMessage("이 메세지가 보이나요?");

var model = {
    boardSize: 7,
    numShips: 3, // 전함의 수
    shipLength: 3, // 전함 한 척의 길이
    shipsSunk: 0,
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") { // 전함의 길이를 순회하고 hit이 없으면 false.
                return false;
            }
        }
    },

    fire: function(guess) { //만약 guess = "06" 이라면,
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            locations = ship.locations; // ["06", "16", "26"]
            var index = locations.indexOf(guess); // location 안에 있는 guess의 인덱스를 알아낸다.
            console.log("guess의 index 값 : " + index); // 0
            if (index >= 0) {
                //명중!!
                ship.hits[index] = "hit"; // guess와 같은 위치의 hits 배열에 "hit"추가.
                return true;
            }
        }
        return false;
    }

};

model.fire("06");