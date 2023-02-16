[react] getBoundigClientRect로 스크롤 애니메이션 구현
- getBoundigClientRect로 위치정보 얻기
- DOMRect의 top값과 window.innerHeight를 이용하여 현재 위치 %값 구하기
- useEffect로 스크롤 이벤트가 생길 때마다 현재 위치 갱신
- 현재 위치 값을 styled-component의 prop으로 넘겨 스타일 변화주기

* 링크: https://codesandbox.io/s/getboundingclientrect-e9zp0t
