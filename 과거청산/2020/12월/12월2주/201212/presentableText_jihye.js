// Headfirst JS - 7. Emot

var emot = "XOxxoo";
var hugs = 0;
var kisses = 0;

emot = emot.trim();//좌우 공백 제거
emot = emot.toUpperCase();

// charAt : index로 주어진 값에 해당하는 문자를 리턴
for(var i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === "X") { //
        hugs++;
    } else if (emot.charAt(i) == "O") {
        kisses++;
    }
}