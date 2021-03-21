### 동기와 비동기 차이


동기: 일반 자바스크립트의 실행식과 동일 (들어온 순서대로 나감. / 즉, api받는 과정에서 멈추는 과정이 있으면. 그 이후는 실행되지않고 기다림)
비동기: 멈추는 과정이 있어도 기다리지않고 그냥 진행됨.


### promise

데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 데이터를 표시하려고 하면 오류가 발생하거나 
빈 화면이 뜨는 문제점을 해결하기 위한 방법

#### proimse의 세가지 상태

- Pending (대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- fulfilled (이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- rejected (실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
