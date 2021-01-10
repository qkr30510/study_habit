// Headfirst JS - 7. validate 3

/**
 * 정규표현식(RegExp) 이용하기
 */

function validate(phoneNumber) {
    //phoneNumber.match(/^\d{3}-?\d{4}$/); // 문자열이 정규식과 매치되는 부분을 검색합니다.
    return RegExp(/^\d{3}-?\d{4}$/).test(phoneNumber); // 주어진 문자열이 정규식과 일치하는지 판별하고 true 또는 false로 반환.
}
console.log(validate("1234567")); // true

/**
 * RegExp() 정규표현식
 * / : 정규표현식의 시작과 끝
 * ^ : 문자열의 시작
 * $ : 문자열의 끝
 * \d : 숫자 하나
 * {3} : 앞의 글자가 세번 반복
 * -? : 대시(-)가 하나 있거나 없음
 */