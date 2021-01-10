// Headfirst JS - 7. validate 1

/**
 * 다음과 같은 형태의 전화번호를 입력 받습니다.
 * "123-4567"
 * 허용된 번호는 0에서 9까지의 숫자 중 7개.
 * 중간에 "-"가 선택적으로 들어갑니다.
 */

function validate(phoneNumber) {
    if (phoneNumber.length > 8 && phoneNumber.length < 7){
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
                return false;
            } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    } 
    return true;
}
console.log(validate("123-4567")); // true