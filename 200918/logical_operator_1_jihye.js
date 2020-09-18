// Headfirst JS - 2. logical_operator_1

var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);
//humid의 값은? ==> true

var guess = 6;
var isValid = (guess >= 0 && guess <= 6);
//isVaild의 값은? ==> true

var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false);
//sendFile의 값은? ==> true

var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" || (points > 100 && points < 200)) {
    level = 2;
} else {
    level = 1;
}
//level의 값은? ==> 2
