### vue

slot
: 데이터를 다양한 컴포넌트에서 재 사용하기 위해 사용함. 
: 디자인만 변경할수도 있음.

```javascript
컴포넌트 a를 만듦.

컴포넌트 b에서 a를 아래와 같이 호출.
<a>
      <template v-slot:default>
        <div>
            수정하고 싶은 내용 / 변경을 원하지 않으면 그대로 두기
          </div>
       
      </template>
    </a>

    /// template 안에 div 를 사용하지 않으면 css 수정이 안되니 꼭!! div를 넣을것.

```
