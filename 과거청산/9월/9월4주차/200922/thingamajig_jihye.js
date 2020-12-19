// Headfirst JS - 3. Thingamajig

function clunk(times) {
    var num = times;
    while (num > 0) {
        display("철컥");
        num = num - 1;
    }
}

function Thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("찰칵");
    } else if (size == 1) {
        display("쿵");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output); // 철컥 X 120
    clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
Thingamajig(5);
console.log(clunkCounter); // 120