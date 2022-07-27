### 제일 하단에 있는 객체의 값에 의해 변수값을 변경하기.

예를 들면, 

```javascript
const brands = [{
    products = [{
        items = []
    }]
}]
```

이의 코드가 있을때, items의 checked 의 값에 의해 brands의 배열을 새로 변경해야하는 문제에 직면했다. 
어떻게 해야할지 감도 안잡혔는데, 이전에 todo를 만들면서 수정했던 기억이 나서 해당 소스에 적용해보았다. 

```javascript
 const newBrands = Object.assign([],this.brands)
//      console.log('newBrands',newBrands,'brands', this.brands)
      newBrands.forEach(brand => {        
        brand.products.forEach(product => {
          product.items.forEach(item => {      
            product.items = product.items.filter(item => {
              product.items.pop(item);
                return item.checked
              });
          })
        })      
      }) 

      console.log('newBrands',this.newBrands)    
```

다만, 변수에 참조 복사가 되는 오류가 생겨서 ..(어제 알게된 정보를 기입해봤는데도 안됨)
그래서 조금 더 고민해봐야할꺼같다. 