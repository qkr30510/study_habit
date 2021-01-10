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
// view.displayMessage("이 메세지가 보이나요?");

var ships = [
    {locations: ["10", "20", "30"], hits: ["hit", "", ""]},
    {locations: ["32", "33", "34"], hits: ["", "hit", ""]},
    {locations: ["63", "64", "65"], hits: ["", "", "hit"]}
]
var ship1 = ships[0];
var hits = ship1.hits;
hits[0] = "hit";

var ship2 = ships[1];
var locations = ship2.locations;
console.log("위치 : " + locations[1]);

var ship3 = ships[2];
var hits = ship3.hits;
if (hits[2] === "hit") {
    console.log("앗! 세번째 전함의 첫번째 위치가 명중되었습니다.");
}