### Vue 하면서 배운거

1. Vue.filter : **Vue는 텍스트 형식화를 적용**할 수 있는 필터이 필터들은 중괄호 보간법 혹은 v-bind표현법 을 이용할 때 사용가능합니다. 

```javascript
<!-- 중괄호 보간법 -->
{{ message | capitalize }}

<!-- v-bind 표현 -->
<div v-bind:id="rawId | formatId"></div>
```

2. api 호출은  mounted() 안에서 해야함.

```javascript
mounted() {
    
    axios
      .get(
        "api 주소"
      )
      .then((response) => {
        console.log(response);
        this.authorized = response.headers.authorized;

        return response.data.data.forEach((randomProduct) => {
          this.randomProduct.push(randomProduct);
        });
      });
  },

```