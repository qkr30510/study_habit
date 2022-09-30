
객체를 복사할때, 
JSON.parse(JSON.stringify(원본)) 형태로 복사함.

```javascript
    const copy =  JSON.parse(JSON.stringify(this.original))
```


나는 깊은 복사에, 제일 하위 계층에 있는 선택값에 의해 새로운 객체를 만드는거여서 
filter 메서드도 이용함.

```javascript
 const newBrands =  JSON.parse(JSON.stringify(this.brands))
      newBrands.forEach(brand => {        
        brand.products.forEach(product => {
          product.items.forEach(item => {      
            product.items = product.items.filter(item => item.checked)
          })
        })              
      }) 
      return newBrands    

```

