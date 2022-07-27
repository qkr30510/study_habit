// HeadFirst Chapter10 - 야바위 게임

var winner = function() {
    alert("승!");
}
var loser = function() {
    alert("패!");
}
// winner();

//카드 뒤섞기를 위해 변수할당
var a = winner; //l-l-w
var b = loser; //w-l
var c = loser; //w-l

// 카드 뒤섞기
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();