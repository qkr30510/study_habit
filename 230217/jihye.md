[react] getBoundigClientRect 응용편 - 리버스 스크롤 구현
- getBoundigClientRect로 위치정보 얻기
- DOMRect의 top값과 window.innerHeight를 이용하여 총 스크롤 범위 계산
- useEffect로 스크롤 이벤트가 생길 때마다 현재 위치 갱신
- 총 스크롤 범위에서 스크롤 한 만큼을 뺀 값을 div태그 스타일의 top값으로 적용

* 링크: https://codesandbox.io/s/reverse-scroll-8wbfg5
