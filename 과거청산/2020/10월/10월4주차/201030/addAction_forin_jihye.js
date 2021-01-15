// Headfirst JS - 5. addAction - for in

var chevy = {
    make: "쉐보레",
    model : "벨 에어",
    year : 1957,
    color : "빨간색",
    passengers : 2,
    convertible : false,
    mileage : 1021
}

// forin문으로 객체 속성 나열
for (var prop in chevy) {
    console.log(prop + " : " + chevy[prop]);
}

// 동일한 결과값
console.log("color1 : " + chevy.color); // 빨간색
console.log("color2 : " + chevy["color"]); // 빨간색
console.log("color3 : " + chevy["co" + "lor"]); // 빨간색