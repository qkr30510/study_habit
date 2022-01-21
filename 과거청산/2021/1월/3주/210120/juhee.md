### vuex

vue 상태관리 하는 vuex에 대해서 정리해보았다. 

1. Dispatch()

Vue컴포넌트는 Dispatch(‘[action메소드명]’)를 통해 Vuex store의 Action 그룹에 속한 메서드를 실행시킬 수 있습니다.

2. Actions
API서버 통신과 같은 역할을 수행하는 메소드 그룹입니다.
주로 state에 반영하기 전 데이터를 조회하고 가공하는 역할을 수행합니다.

3. Commit()
Action메소드 혹은 Vue컴포넌트에서 Commit(‘[mutation메소드명]’)을 통해 Mutation 그룹에 속한 메서드를 실행할 수 있습니다.
컴포넌트에서는 $store.commit(), Actions 메소드에서는 첫번째 인자로 넘겨받는 context.commit()으로 트리거시킵니다.

4. Mutations
Vuex store의 상태(state)를 변경시키기 위한 메서드 집합입니다.
Vuex는 state의 조작은 오로지 Mutation의 메소드를 통해 수행하길 권장합니다.
따로 mutate 메서드는 없고, 첫 번째 인자로 받는 state.[state요소]로 수정합니다.

5. state
사용자가 정의한 상태를 저장합니다
즉각반응형이기 때문에 v-model 의 computed 메서드중 get()이 선언되어 있다면 즉각적으로 반응합니다.
Vue컴포넌트의 watch처럼 $store.watch로 변화를 감지하고 핸들링할 수 있습니다.

6. getters
여러 컴포넌트에서 동일한 computed를 통해 하나의 state를 가져와야 한다면 Vuex store에 getters를 등록하여 computed처럼 활용할 수 있습니다.
첫 번째 인자로 state를 받습니다.

7. modules
하나의 스토어만을 사용해 모든 Dispatch, Commit을 처리한다면 전역 이벤트 버스와 다를 것이 없습니다.
따라서 각 목적에 맞는 항목을 module로 분리할 수 있고 namespaced속성을 true로 설정하여 각 모듈의 이름을 포함한 Dispatch, Commit, state조회 등을 수행할 수 있습니다.
