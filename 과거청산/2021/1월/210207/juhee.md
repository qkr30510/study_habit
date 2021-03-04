## 아이폰에서 background-attachment 안먹히는 문제 해결


```html
<div class="first">
  <div class="bg-wrap">
    <div class="bg"></div>
  </div>
</div>
<div class="second">
  <div class="bg-wrap">
    <div class="bg"></div>
  </div>
</div>
```

```css
.first, .second {
  width: 100%;
  height: 100vh;
  position: relative
}

.bg-wrap {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bg {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.first .bg {
  background-image: url(이미지 경로)
}

.second .bg {
  background-image: url(이미지 경로)
}
```