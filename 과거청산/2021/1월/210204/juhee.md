### promise

비동기식.
난 적으면 한번에 처리되는줄 알았는데, 한번에 처리되는것이 아니고 한박자 쉬고 처리됨.
그렇게 때문에 response부분에 데이터 받아올때 처리해줘야할 함수를 처리해줘야람.

```javascript


axios.get = new Promise((resolve, reject) => {
    ajax.get({
        complete: function(response){
            resolve(response)
        },
        error : function(error){
            reject(error)
        }
    })
    
})


// 결국 이런것. 
axios.get().then(response => {

}).catch(error => {

})
this.clearInterval()

```