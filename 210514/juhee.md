컴포넌트를 땡겨와서 썼는데, 바깥에서 이벤트를 주고 싶을땐

@click.native



###vue checkbox

v-model = notice 를 풀어쓰면,

v-bind:value="notice"
v-on:input="notice = $event.target.value" 

ㅇㅣ고, checkbox의 경우에는 name 아래에 
  
  model: {
    prop: 'value',
    event: 'input'
  },
을 넣어 처리해준다. 

prop는 상위에서 하위 알려주는것이고 
event는 하위가 상위로 변경되었다고 알려주는 것이다.



###slot

      <label v-bind:for="id">
        <slot></slot>
      </label>

      slot을 넘겨주면         <custom-checkbox v-model="notice" value="1" class="notice">쇼핑 SMS 수신 [선택]</custom-checkbox> 안에 데이터로 담김 
      
