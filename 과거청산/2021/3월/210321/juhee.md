### 프로젝트 진행하며, 배운것


### map과 fitter 차이 

map은 합칠때, fitter는 조건에 따라 배열을 재 배치할 때 사용. 

### vue에서 mixin의 존재 

sass 처럼, 묶어놓고 쓸 수 있음.
vue 컴포넌트 안에서 쓸 수 있는 모든것을 다 사용 가능함. 

### for Each에서 "push"를 할 수 없습니다.
배열 초기화를 진행. 

return this.search().then((response) => {
        this.products = []
        response.data.data.forEach(product => {
          if(product.expiredAt){
              product.expiresIn = this.calcExpiresInReward(product.expiredAt)
            
              setInterval(() => {
                product.expiresIn = this.calcExpiresInReward(product.expiredAt)
            
              }, 1000);
            
          }
          else{
            product.expiresIn = ""
          }
          this.products.push(product);
          //console.log('3',product.expiredAt)
        })
        


### qs

sdfsdfsdf?상품명=가나다&a=1 => {'상품명': '가나다', 'a': 1}
    // Qs.parse("상품명=가나다&a=1")
    // Qs.stringify({'상품명': '가나다', 'a': 1}) = ".json?상품명=가나다&a=1"
    // <product-gallery v-bind:eq="{상품명: [가나다, 마바사]}" v-bind:sort="{상품명: 'DESC'}"></product-gallery>
    // <product-gallery v-bind:query="{eq[상품명][]: 가나다, eq[상품명][]: 마바사}"></product-gallery>