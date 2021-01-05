// Headfirst JS - 3. parameter_argument

/**
 * 어떠한 자바스크립트 값도 인자로 전달할 수 있다.
 * 각 인자는 함수정의에 있는 각 파라미터에 1:1로 대응되어 전달된다.
 */
saveProfile("크리스", 1991, 3.81, false);

function saveProfile(name, birthday, GPA, newuser) {
    if (birthday >= 2004) {
        // 어린이인 경우
    }
    //나머지 코드...
}

/**
 * 변수도 인자로 전달할 수 있다. 함수를 호출할 때 변수에 저장된 값이 인자로 전달된다.
 * 위의 코드를 변수를 사용하도록 바꾸면,
 */
var student = "크리스";
var year = 1991;
var GPA = 381/100;
var status = "기존사용자";
var isNewUser = (status == "신규사용자");
saveMyProfile(student, year, GPA, isNewUser);

/**
 * 표현식도 인자로 사용할 수 있다. 
 * 표현식을 사용하면 먼저 표현식을 계산하여 값을 구하고 이 값을 인자로 사용해 함수에 전달한다.
 */
var student = "크리스";
var status = "기존사용자";
var year = 1991;
saveMyProfile(student, year, 381/100, status == "신규사용자"); //숫자로 구성된 표현식도 O, 불린형 표현식도 O.
