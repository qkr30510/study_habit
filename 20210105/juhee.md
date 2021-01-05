### vue

swiper 사용중 loop 시 첫번째 이미지가 로드되지 않는 문제점이 있었다. 
api 통신과 swiper와 동시에 이루어져 순서가 꼬여 그런 문제가 발생한거였다. 
이런 문제가 있어 v-for도 덩달아 먹지 않았다 ㅜㅜ

그래서 method에 swiper 함수를 넣고 
mounted부분에 있는 axios로 api를 가져온 곳에 then 부분에 swiper 함수를 넣어 주고 setTimeOut을 넣어줬다. 
그랬더니 해결되었다. 

```javascript
        axios
            .get(
              "api-url"
            )
            .then((response) => {

              this.introImg = response.data.data
              setTimeout (()=>
              this.intro()
              ,500)
              
            });

```