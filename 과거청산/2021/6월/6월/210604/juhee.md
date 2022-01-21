### promise 를 쓸때

비동기 처리를 위해 promise를 쓸 때가 있다 
쓰고 나서 그걸 어떻게 호출해야하는지 몰랐는데, 아래 코드 처럼 api 호출하듯이 호출해야한다.

```javascript
//getAppFirstLaunchedAt() 프로미스 쓴 함수
 this.getAppFirstLaunchedAt().then(firstLaunchedAt => {
          console.log('firstLaunchedAt', firstLaunchedAt)
          if(!firstLaunchedAt){
            this.$refs.appFirst.open();
          }
        }).catch(error => {
          console.log('앱 첫번쨰 체크 error', error)
        })    
```