대분류 소분류 만들기


```html
 <li>
    <select v-model="mainCategory">
            <option v-for="_mainCategory in this.navi" v-bind:key="_mainCategory.id" :value="_mainCategory.parentsTitle">{{_mainCategory.parentsTitle}}</option>
    </select>
</li>
<li>
    <select v-model="subCategory">
        <option v-for="_subCategory in subCategoryList" v-bind:key="_subCategory.id" :value="_subCategory.name">{{_subCategory.name}}</option>
    </select>
</li>

```

```javascript
subCategoryList(){
            //대분류에 따른 소분류 변경
            let selectMainCategory = []

            const selectMain = this.navi.filter((_mainCategoryList) =>{
                return _mainCategoryList.parentsTitle == this.mainCategory
            })

            selectMain.forEach(_selectMain =>{
                selectMainCategory = _selectMain.children
            })
            return selectMainCategory
        },
        subCategory(){
            let selectMainCategory = []

            const selectMain = this.navi.filter((_mainCategoryList) =>{
                return _mainCategoryList.parentsTitle == this.mainCategory
            })

            selectMain.forEach(_selectMain =>{
                selectMainCategory = _selectMain.children
            })
            return selectMainCategory[0].name
        }
```