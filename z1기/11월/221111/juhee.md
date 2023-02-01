### react

#### useSelector를 이용해서 받은 데이터 (redux)를 a라는 배열안에 boolean 체크를 해야하는 상황 해결법

a라는 배열을 useState속에 넣고 렌더링 이전에 함수 test를 만들어서 useSelector의 데이터로 boolean을 체크 해주고 새로운 배열을 반환하여, useState속 변경 가능한 값으로 바꿔주기
