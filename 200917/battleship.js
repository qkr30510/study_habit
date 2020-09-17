// Headfirst JS - 2. Battleship

var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// 전함이 가라않지 않은 동안 게이머가 추측한 값 입력
while (isSunk === false){
    //준비, 조준, 발사! (0 ~ 6사이 숫자입력)
    guess = prompt('준비, 조준, 발사! (0 ~ 6사이 숫자입력)');

    //0보다 작거나 6보다 크면,(guess값이 0 ~ 6 사이에 있는지 확인)
    if (0 > guess || 6 < guess) {

        //올바른 방 번호를 입력하세요!
        alert('올바른 방 번호를 입력하세요!');
    }

    //추측한 횟수에 1을 더한다.
    guesses = guesses + 1;        

    //1 또는 2, 3번과 일치하면 
    if (guess == location1 || guess == location2 || guess == location3){

        //명중!
        alert('명중!');

        //hit 증가.
        hits = hits + 1;

        if (hits === 3){

            //전함 침몰!
            isSunk = true;
        }
    } else {

        //실패
        alert('실패');
    }
}

//n번 발사! 명중률 : n%
//명중률 소수점이하 버림
console.log(guesses + '번 발사! ' + ' 명중률 : ' + Math.floor(hits / guesses * 100) + '%');
