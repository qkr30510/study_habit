// HEAD FIRST 10 - Echo Maker

function fun(ehco) {
    console.log(ehco);
};

fun("안녕~"); // 안녕~

function boo(aFunction){
  aFunction("메롱");
}

boo(fun); // 메롱

console.log(fun); // fun()

fun(boo); // boo()

var moreFun = fun; 
moreFun("또 안녕"); // 또 안녕 

function echoMaker(){
  return fun;
}
var bigFun = echoMaker();
bigFun("메아리가 울릴까?"); // 메아리가 울릴까?
