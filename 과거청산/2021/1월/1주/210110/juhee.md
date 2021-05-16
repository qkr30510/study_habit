
```javascript
        new Vue({
            el : '#app',
            data:{
                uuid: 'abc1234',
                name: 'text-blue',
                loading: true,
                message: ''
            },
           methods:{
                logText: function(){
                    console.log('clicked');
                }
           }
       });

```
우선 이처럼 여러 개의 데이터를 갖는 Vue를 생성했다고 합시다.

​

1. v-bind

<p v-bind:id="uuid" v-bind:class="text-blue">{{ num }}</p>
​

(1) v-bind:id="uuid"란, <p> 태그의 id값을 data 속성의 uuid와 연결해줍니다.

(2) v-bind:class="name"이란, <p> 태그의 class 값을 data 속성의 name과 연결해줍니다.

​

이제 id와 class가 data binding 되었으므로, Vue 인스턴스의 name과 uuid 값에 따라 즉시 반영됩니다.


 

2. v-if / v-else

<div v-if="loading">
   Loading...
</div>
<div v-else>
   test user has been logged in
</div>
(1) v-if는 해당 조건이 True이면, 실행되고, 해당 조건이 False라면 v-else가 실행됩니다.

(2) v-if의 조건으로 주어진 "loading"은 위에 생성한 Vue 인스턴스의 data 속성에 존재하는 값입니다. 현재 true로 설정되어 있기 때문에 Loading... 이라는 문구가 웹 페이지에 보여집니다.

​

3. v-show

<div v-show="loading">Loading...</div>
v-if와 마찬가지로 v-show도 해당 조건이 true이면 보여집니다. 하지만 v-if와의 차이점은, DOM에서 아예 삭제되는 것이 아니라, display=None;으로 설정되어 보여지지 않을 뿐입니다.

​

4. v-model

<input type="text" v-model="message">
   <p>MSG : {{ message }}</p>
v-model은 Vue data 속성과 input을 데이터 바인딩할 때 사용합니다. 쉽게 말하면, 텍스트 입력을 즉시 반영하고 싶을 때 사용할 수 있습니다.

사용자가 입력한 문구를 즉시 <p> 태그로 보여주는 코드입니다.

​

5. v-on

<button v-on:click="logText">Click me</button>
<input tpye="text" v-on:keyup.enter="logText"> <!-- event modifier 라고 부름-->
v-on은 이벤트가 발생했을 때 실행시킬 methods를 지정할 수 있습니다. 위의 버튼 태그에서는 click이라는 이벤트가 발생했을 때, Vue 인스턴스의 methods 중 logText가 실행됩니다. keyup이라는 이벤트 중에서 'enter' 키가 눌렸을 때만 실행하고 싶을 때에는 event modifier를 이용해 손쉽게 구현할 수 있습니다.