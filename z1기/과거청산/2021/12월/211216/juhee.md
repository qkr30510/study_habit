### css 꿀팁

아래 코드처럼 하면 손 쉽게 비율이 유지되는 박스를 반응형에서 사용할 수 있다.

```html
 <div class="guide-body">
            <div v-for="categoryList in categoryLists" v-bind:key="categoryList.no" class="category-list-box"  v-bind:style="{'background-image': 'url(' + categoryList.image+ ')'}">
                <img src="https://vaxy.doubleshop.co.kr/res/images/blank_1x1.png" alt="">
            </div>
        </div>
```

```css
 .guide-body{
        min-width:220px;
        width:calc(100% - 120px);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap:10px;
        margin:auto;
        .category-list-box{
            border:1px solid rgba(0, 0, 0, 0.16);
            border-radius: 5px;
            box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16);
            margin-bottom:10px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            position: relative;
            display: block;
            overflow: hidden;
            img{
                width:100%;
            }
        }
    }

```