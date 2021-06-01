// 함수를 다른 함수로 전달하는 코드 작성하기

function sayIt (translator) {
    var pharse = translator("안녕");
    alert(pharse); //hawaiianTranslator 함수의 word로 전달 
}

function hawaiianTranslator (word) {
    if (word === "안녕") return "알로하";
    if (word === "잘가") return "알로하";
}

sayIt (hawaiianTranslator);