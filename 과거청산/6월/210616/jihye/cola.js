// 웹타운 콜라 - 음료 정렬

var products = [
    { name: "자몽", calories: 170, color: "빨간색", sold: 8200 },
    { name: "오렌지", calories: 160, color: "주황색", sold: 12101 },
    { name: "콜라", calories: 210, color: "갈색", sold: 25412 },
    { name: "다이어트 콜라", calories: 0, color: "갈색", sold: 43922 },
    { name: "레몬", calories: 200, color: "무색", sold: 14983 },
    { name: "라즈베리", calories: 180, color: "분홍색", sold: 9427 },
    { name: "루트 비어", calories: 200, color: "갈색", sold: 9909 },
    { name: "생수", calories: 0, color: "무색", sold: 62123 },
]

function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold){
        return 1;
    } else if (colaA.sold === colaB.sold){
        return 0;
    } else {
        return -1;
    }
}

function printProducts(products) {
    for (var i = 0; i < products.length; i++){
        console.log("제품명: " + products[i].name +
                    ", 칼로리: " + products[i].calories +
                    ", 색상: " + products[i].color +
                    ", 판매량: " + products[i].sold)
    }
}

products.sort(compareSold); // 판매량 오름차순 정렬
printProducts(products);