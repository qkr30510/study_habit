### vue

#### computed

    - computed 속성에도 템플릿에서 데이터 바인딩 할 수 있습니다.
    - computed 대신 method를 사용해도 되지만, computed는 종속 대상을 따라 저장 된다는 차이가 있음. 즉, 종속 대상이 변경될 때만 함수를 실행. (메서드는 렌더링 될때마다 실행됨,)




```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: '안녕하세요'
  },
  computed: {
    // 계산된 getter
    reversedMessage: function () {
      // `this` 는 vm 인스턴스를 가리킵니다.
      return this.message.split('').reverse().join('')
    }
  }
})

```

