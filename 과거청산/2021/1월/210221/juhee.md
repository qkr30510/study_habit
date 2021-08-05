//  뷰 코어 정리 

### v-model
v-model은 양방향 바인딩 가능 
**컴포넌트는 기본값으로 value를 prop으로 사용하고, input 을 이벤트로 사용**

-> 컴포넌트의 `data` 옵션 안에 있는 JavaScript에서 초기값을 선언해야합니다.

- text 와 textarea 태그는 value속성과 input이벤트를 사용합니다.
- 체크박스들과 라디오버튼들은 checked 속성과 change 이벤트를 사용합니다.
- Select 태그는 value를 prop으로, change를 이벤트로 사용합니다.



### v-bind
prop을 전달할때 v-bind을 이용.
**즉, 부모에서 자식으로 전달할때 이용**
뷰도 마찬가지로 **props는 절대 변경 불가능함.** 그러므로 변경을 원하면, 변화가 일어났을때 부모한테 알려 부모의 props을 변화 시켜야함.
>그떄 emit을 이용하면 좋음