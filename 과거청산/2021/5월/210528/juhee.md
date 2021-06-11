### vue 

vue resize로 만들기

```javascript

created() {
    window.addEventListener("resize", this.handleResize);
},

destroyed() {
    window.removeEventListener("resize", this.handleResize);
},

method(){

    handleResize(event){
        const width = window.innerWidth;
        // console.log('width',width)
        // 윈도우 사이즈에 따른 정보수정 페이지 노출 여부

        if (width < 768) {
        //  console.log('yes')
        document.getElementById('mHeader').setAttribute('style',"display:none !important")
        document.getElementById('serviceMenus').setAttribute('style',"display:none !important")
        
        } else {      
        // console.log('no')  
        document.getElementById('mHeader').setAttribute('style',"display:flex !important")
        document.getElementById('serviceMenus').setAttribute('style',"display:block !important")        
        
        }
    },

}
```
