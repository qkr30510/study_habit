### 리액트 상태관리

리액트의 상태관리를 위해 여러 방법이 있지만, 알고보면 용도가 다 다르다.

#### 상황 별 상태관리

1. 단순 prop-drilling 을 피하는 것이 목적이라면 Context 를 사용해라
2. 적당히 복잡한 컴포넌트가 있거나 외부 라이브러리를 사용하고 싶지 않다면 Context + useReducer 를 사용해라
3. 특정 구성 요소만 re-render 시키거나, 사이드이펙트를 줄이기 위해 더 강력한 기능이 필요하다면 Redux + React-Redux 를 사용해라

참고할것.

https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b8
