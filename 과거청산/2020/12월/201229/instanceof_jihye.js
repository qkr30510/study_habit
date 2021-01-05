// Headfirst JS - 7. instanceof

function Duck(sound) {
    this.sound = sound;
    this.quack = function() {
        console.log(this.sound);
    }
}

/** instance 생성
 * instance란, 객체에서 생성된 또 다른 객체를 의미한다.
 */
var toy = new Duck("꽥 꽥"); // 함수에 new를 붙이면 객체가 된다. var toy = {};와 같음.
console.log(toy); 
/*
Duck {
    sound: "꽥 꽥",
    quack: f
}
*/

console.log(typeof toy); // object
console.log(toy instanceof Duck); // true
/** instance 판별
 * instanceof는 생성자의 prototype 속성이 객체의 프로토타입 체인에 존재하는지 판별한다. ( true / false )
 */