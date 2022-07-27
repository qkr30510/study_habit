저런 상황에서는 if 문보다는 find 를 .. 
그리고 forEach안에서 동일한 아이디 찾기 

다른 탭을 이동할때에 contentStatus를 못찾는 오류가 있었는데, 배열안에 객체가 있고 그 안의 값이 Boolean이면, 감지를 못하는 오류가 있다. 
이랄땐,  this.$forceUpdate() 을 사용하면 좋다.


```javascript
changeContentStatus(faqContent,id){
            
    this.faqContents.forEach(faqContents =>{
        faqContents.contentStatus = false
    })
    if(faqContent.id = id ){
        faqContent.contentStatus = !faqContent.contentStatus
    }
    
},
// 팀장님이 작성해준 1차 코드 
changeContentStatus(faqContent,id){
            
    this.faqContents.forEach(faqContents =>{
        faqContents.contentStatus = false
    })
    
    const faqContent = this.faqContents.find(faqContent => faqContent.id == id)
    faqContent.contentStatus = true
    this.$forceUpdate()
},
// 팀장님이 작성해준 코드 
changeContentStatus(id){
    this.faqContents.forEach(faqContent => {
        faqContent.contentStatus = (faqContent.id == id) 
    })
    this.$forceUpdate()
}    
```