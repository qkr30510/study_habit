vue 

v-slot 으로 넘겨줄떄 , 
``` javascript
        <slot
          v-if="$slots.default || $scopedSlots.default"
          v-bind:product="product"
          v-bind:index="index"
        ></slot>
```
으로 넘기고 
child에서 
```javascript
      <template v-slot:default="{ product, index }">

```
으로 받으면 됨
