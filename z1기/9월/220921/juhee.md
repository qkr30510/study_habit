### 면접질문 대응


q. https://xiubindev.tistory.com/119

1. 브라우저 주소창에 www.google.com을 입력하면 나타나는 일.
>   1.  html 파일과 css 파일을 파싱해서 tree를 만듦. (parsing)
>   2.  두 tree가 결합되어 render tree가 만들어짐. (style)
>   3.  rendering tree에서 각 노드의 위치와 크기를 계산함 (layout)
>   4.  계산된 값을 이용해 각 노드를 화면상의 실제 픽셀로 변환하고, 레이어를 만듦 (paint)
>   5.  레이어를 합성하여 실제 화면에 나타냄. (composite)