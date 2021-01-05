// Heardfirst JS - 5. attribute

var fido = { }; // 빈 객체 생성
console.log(fido); // {}

fido.dogYears = 35; // 속성 추가
console.log(fido); // 35

fido.dogYears = 11; // 속성 변경
console.log(fido); // 35

delete fido.dogYears; // 속성 제거
console.log(fido); // {}



var lookMaNoProps = { }; // 빈 객체에서 시작
lookMaNoProps.age = 10;
if(lookMaNoProps.age > 5) { // 조건에 따라 동적으로 속성 추가
  lookMaNoProps.school = "초등학교"
}
console.log(lookMaNoProps);