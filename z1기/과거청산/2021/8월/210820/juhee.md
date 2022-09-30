뷰에서 onChange 이벤트 걸때


```javascript
 <div id="example">
    <input type="text" id="price" v-model="value" @input="e=>value=changeNum(e.target.value)">
    <span id="reWon" >{{value | inputNumberFormat}}</span>
</div> 


const example = new Vue({
	el: '#example',
	data : {
        value: 0,
	},
	created (){
	},
	created :function(){
	},
	mounted:function(){
	},
    methods : {
        changeNum : function(value) {
					return value = this.comma(this.uncomma(value));
        },
			 comma(str) {
					 str = String(str);
					 return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
			 },
			uncomma(str) {
				 str = String(str);
				 return str.replace(/[^\d]+/g, '');
		 }
    },
    filters:{
        inputNumberFormat(val){
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})

```