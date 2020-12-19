### vue 

v-slot 에서 child으로 props 넘겨줄떄 , 
``` javascript
        <slot
          v-bind:product="product"
          v-bind:index="index"
        ></slot>
        // bind 로 넘김 
```
으로 넘기고 
child에서 
```javascript
      <template v-slot:default="{ product, index }"/>
    // 구조 분해 할당(비 구조화 할당)으로 받음 

```
으로 받으면 됨
