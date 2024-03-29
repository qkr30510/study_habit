// anonymous function

//window.onload = init;
window.onload = function () {
    document.getElementById("bake").onclick = handleButton;
}

// function init() {
//     var button = document.getElementById("bake");
//     button.onclick = handleButton;
// }

// function handleButton() {
//     console.log("쿠키를 구울 시간이에요.");
//     cookies.bake(2500);
// }

window.onload = function () {
    var button = document.getElementById("bake");
    button.onclick = function () {
        console.log("쿠키를 구울 시간이에요.");
        cookies.bake(2500);
    }
}

var cookies = {
    instructions: "오븐을 350도로 예열하세요...",
    bake: function (time) {
        console.log("쿠키를 굽고 있습니다.");
        setTimeout(done, time);
    }
};

function done() {
    alert("쿠키가 다 됐습니다. 식을 때 까지 기다리세요.");
    console.log("쿠키를 식히고 있습니다.");
    var cool = function () {
        alert("쿠키가 식었습니다. 어서 드세요!");
    };

    setTimeout(cool, 1000);
}