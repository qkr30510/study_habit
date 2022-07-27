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

// view.displayHit("34");
// view.displayMiss("33");
// view.displayMessage("이 메세지가 보이나요?");

var model = {
    boardSize: 7,
    numShips: 3, // 전함의 수
    shipLength: 3, // 전함의 길이
    shipsSunk: 0, // 격침된 전함 수를 저장한다.
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            locations = ship.locations;// ["06", "16", "26"];
            //console.log(locations);
            var index = locations.indexOf(guess);
            //console.log(index);
            if (index >= 0) {
                //명중!!
                ship.hits[index] = "hit";
                view.displayHit(guess); // 명중 시, 보드에 배 이미지 나타내기
                view.displayMessage("명중!"); // 명중 메세지
                if (this.isSunk(ship)) {
                    view.displayMessage("전함이 격침되었습니다!");
                    this.shipsSunk++; // 전함이 격침되었다면 ShipsSunk값 1씩 증가.
                    console.log(this.shipsSunk);
                }
                return true;
            }
        }
        view.displayMiss(guess); // 실패 시, 보드에 실패 이미지 나타내기
        view.displayMessage("실패했습니다."); // 실패 메세지
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
                console.log(ship);
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,

    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk --- model.numShips) {
                view.displayMessage(this.guesses);
            }
        }
    }
}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("입력이 올바르지 않습니다. 게임판의 문자와 숫자를 이용해 입력하세요!");
    } else {
        // 게임판 위치 검사
        firstChar = guess.charAt(0); // guess의 0번째 값을 가져옴
        var row = alphabet.indexOf(firstChar); // firstChar과 같은 값을 alphabet에서 찾음(number로 반환)
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("위치값이 올바르지 않습니다.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("앗, 보드 바깥으로 벗어났어요!");
        } else {
            return row + column;
        }
    }
    return null;
}

//guess = "16";

//model.fire("53");

//console.log(parseGuess("H0"));
//console.log(parseGuess("A0"));

controller.processGuess("B2");
console.log(controller.guesses); // guesses값 확인
controller.processGuess("C3");
console.log(controller.guesses); // guesses값 확인
controller.processGuess("D7");
console.log(controller.guesses); // guesses값 확인
controller.processGuess("FC");
console.log(controller.guesses); // guesses값 확인
controller.processGuess("F1");
console.log(controller.guesses); // guesses값 확인