// Headfirst JS - 7. Find Car

function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if(car === lot[i]){
            return i;
        }
    }
    return -1;
}
var chevy = {
    make: "쉐보레",
    model: "벨 에어"
};
var taxi = {
    make: "웹타운 모터스",
    model: "택시"
};
var fiat1 = {
    make: "피아트",
    model: "500"
};
var fiat2 = {
    make: "피아트",
    model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2); // 3
var loc2 = findCarInLot(taxi); // 1
var loc3 = findCarInLot(chevy); // 0
var loc4 = findCarInLot(fiat1); // 2