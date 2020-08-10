// 18. 평균점수
const sbj1 = prompt('국어점수');
const sbj2 = prompt('수학점수');
const sbj3 = prompt('영어점수');

//const sbj1 = 60;
//const sbj2 = 70;
//const sbj3 = 90;

const sumArray = [Number(sbj1), Number(sbj2), Number(sbj3)];
const sum = Number(sbj1) + Number(sbj2) + Number(sbj3);
const average1 = sum / sumArray.length;
const average2 = Math.floor(sum / sumArray.length);

console.log(average1);
console.log(average2); //result