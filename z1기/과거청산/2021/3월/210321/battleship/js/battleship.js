var model = {
    boardSize: 7,
    numShips: 3, // 전함의 수
    shipLength: 3, // 전함의 길이
    shipsSunk: 0, // 격침된 전함 수를 저장한다.

    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
    ],

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            //console.log(index);

            if (ship.hits[index] === "hit") {
                view.displayMessage("그 위치는 이미 적중됐습니다.");
                return true;
            } else if (index >= 0) {
                //명중!!
                ship.hits[index] = "hit";
                view.displayHit(guess); // 명중 시, 보드에 배 이미지 나타내기
                view.displayMessage("명중!"); // 명중 메세지
                if (this.isSunk(ship)) {
                    view.displayMessage("전함이 격침되었습니다!");
                    this.shipsSunk++; // 전함이 격침되었다면 ShipsSunk값 1씩 증가.
                    //console.log(this.shipsSunk);
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
    },

    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
		//console.log("전함 배열: ");
		//console.log(this.ships);
    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2); // 0과 1사이의 난수 생성
        var row, col;

        if (direction === 1) { // direction이 1이면,
            // 가로로 놓인 전함의 위치를 생성
            //난수 생성 후 boardSize만큼 곱하고 소수점 이하 버림
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1)); //나머지 두개의 위치가 들어갈 공간을 남김
        } else { // direction이 0이면,
            // 세로로 놓인 전합의 위치를 생성
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                //새로운 가로 방향 전함의 배열에 위치를 추가
                newShipLocations.push(row + "" + (col + i));
            } else {
                //새로운 세로 방향 전함의 배열에 위치를 추가
                newShipLocations.push((row + i) + "" + col);
            }
        }

        return newShipLocations;
    },

    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            // 3개의 전함 중 1번째
            // 3개의 전함 중 2번째
            // 3개의 전함 중 3번째
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                // 1번째 전함의 1번째 위치, 1번째 전함의 2번째 위치, 1번째 전함의 3번째 위치
                // 2번째 전함의 1번째 위치, 2번째 전함의 2번째 위치, 2번째 전함의 3번째 위치
                // 3번째 전함의 1번째 위치, 3번째 전함의 2번째 위치, 3번째 전함의 3번째 위치
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    // 가져 온 문자열(예를 들면 02)와 일치하는 위치값이 있으면 index를 반환, 없으면 -1반환. 그 값이 0 이상이면,
                    return true;
                    // true를 반환한다. return이 false일 때까지 계속...
                }
            }
        }
        return false;
    }

};


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

var controller = {
    guesses: 0,

    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("여러분은 " + this.guesses + "번 추측해 전함을 모두 격침시켰습니다.");
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
        var firstChar = guess.charAt(0); // guess의 0번째 값을 가져옴
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



function handleFireButton() {
    //폼에서 값을 가져오는 코드
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toUpperCase();

    controller.processGuess(guess);

    guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");

    e = e || window.event;

    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}




window.onload = init;

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
}


//guess = "16";

//model.fire("53");

//controller.processGuess("B2");
//console.log(controller.guesses); // guesses값 확인
//controller.processGuess("C3");
//console.log(controller.guesses); // guesses값 확인
//controller.processGuess("D7");
//console.log(controller.guesses); // guesses값 확인
//controller.processGuess("FC");
//console.log(controller.guesses); // guesses값 확인
//controller.processGuess("F1");
//console.log(controller.guesses); // guesses값 확인