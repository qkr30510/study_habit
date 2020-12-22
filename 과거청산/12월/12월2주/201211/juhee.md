## vue 배운것

## 함수사용..?
함수를 사용하여 css를 적용해야하는 일이 있었는데, 어떻게 적용해야할지 몰랐다. 
맨 처음엔, ```div``` 에 ```v-if``` 를 통해 조건문을 완성 시키고 ```v-bind:style``` 을 통해 스타일을 주었는데, 그 방법 보다는 아래 방법을 좀 더 많이 사용한다고 알려 주셨다. 


```javascript
<div v-bind:style="css"></div>

<script>
  computed: {
    css() {
      if (this.windowWidth > 1100) {
        return {
          width: this.windowWidth + "px",
          "margin-left": -(this.windowWidth - 1100) / 2 + "px",
        };
      } else {
        return {};
      }
    },
  },
</script>

```

### v-slot
부모 템플릿 안에 있는 것들은 부모 컴포넌트의 범위에 컴파일되고 자식 템플릿 안에 있는 것들은 자식 컴포넌트의 범위에 컴파일됩니다.

