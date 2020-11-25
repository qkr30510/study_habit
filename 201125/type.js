// Headfirst JS - 7. Type

// 자동 형 변환 (다른 두 값을 비교할 때 일치연산자가 피연산자를 같은 형으로 자동 변환한다.)
if (99 == "99"){
    console.log("숫자가 문자열과 같음");
  } else {
    console.log("같지않음");
  }

  // 규칙 #1 : 숫자형과 문자열의 비교
  if (99 == "바닐라"){ // 문자열은 NaN으로 변환됨(NaN은 어떤 값과도 일치하지 않음)
    console.log("같음");
  } else {
    console.log("같지않음");
  }

  // 규칙 #2 : 불린형과 다른 형의 비교
  if (1 == true){ // true는 1로 변환됨
    console.log("같음");
  } else {
    console.log("같지않음");
  }