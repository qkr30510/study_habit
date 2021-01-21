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
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],

    fire: function(guess) {
        for (var i = 0; i < this.numberShip; i++) {
            var ship = this.ships[i];
            locations = ship.locations;
            console.log(locations);
            var index = locations.indexOf(guess);
            console.log(index);
            if (index >= 0) {
                //명중!!
                ship.hits[index] = "hit";
                return true;
            }
        }
        return false;
    }

};

//guess = "16";
//locations = ["06", "16", "26"];