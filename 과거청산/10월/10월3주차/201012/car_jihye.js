// Headfirst JS - 5. car

var taxi = {
    make : "웹타운 모터스",
    model : "택시",
    year : 1955,
    color : "노란색",
    passengers : 4,
    convertible : false,
    mileage : 281341
};

function prequal(car){
    if (car.mileage > 10000){
        return false;
    } else if (car.year > 1960){
        return false;
    }
    return true;
}

var worthALook = prequal(taxi);

if (worthALook){
    console.log(taxi.make + " " + taxi.model + " 모델을 확인해보세요.");
} else {
    console.log(taxi.make + " " + taxi.model + " 모델을 확인할 필요 없습니다.");
}