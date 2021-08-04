# vue

부모는 자식한테 props로 전달하고 자식은 부모한데 event로 전달 

예)

```javascript
<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>

결과 : 부모로부터 전달받은 메세지가 child에서 뜸.

```

### 객체의 모든 속성을 props로 전달하려면, 인자없이 v-bind 를 쓸 수 있다. (v-bind:prop-name 대신 v-bind). 예를 들어 todo 객체가 있다면, 

```javascript

todo:{
    text : '주희',
    isComplete: false
}


//a 예시와 b예시는 같다. 

//a 예시
<todo-item v-bind="todo"></todo-item>


// b예시 
<todo-item
    v-bind:text="todo.text"
    v-bind:is-complete="todo.isComplete"
>
</todo-item>


```