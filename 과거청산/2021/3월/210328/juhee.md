### css 새로운 문법

1. :is
    > is()쉼표로 구분 된 선택기 부분의 반복 을 줄이는 것 입니다. 즉, 이전엔 공통적인 class를 부여해서 사용했다면
    이제는 is()를 이용해서 한방에 해결 가능.

```css
/* BEFORE */
.embed .save-button:hover,
.attachment .save-button:hover {
  opacity: 1;
}

/* AFTER */
:is(.embed, .attachment) .save-button:hover {
  opacity: 1;
}

```
2. :where

    >동일하지만 내부의 어떤 것도 특이성에 영향을주지 않습니다. :where(:not())이제는 :not()원하지 않는 방식으로 선택기 가중치를 높이 지 않고 사용할 수있는 방법이 있으므로 래핑에는 정말 좋습니다 .
    즉, where을 사용하면, 이전에 important! 를 사용하던것을 사용하지않아도 됨. 