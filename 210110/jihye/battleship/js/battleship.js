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

view.displayHit("34");
view.displayMessage("이 메세지가 보이나요?");