### 일하다가 이상한거 정리 


1. 데이터가 누적되는 경우 
    - 초기에 검색된 데이터가 지워지지않아 생기는 문제이다. 그러므로 반드시 함수 실행시, 누적되는 데이터를 지워주는 코드가 필요하다. 
    ```this.aaa = null```와 같이 지워주는게 좋다.

2. 데이터 값에 따라 나타나는 문구가 다를때
    - v-if로 해결하면 되는데, 잠시 헷갈렸었다. 데이터에 담겨져 있는 호출해야하는 변수명을 반드시 적어야 한다! (변수명을 잘못써서 고생했다. ㅜㅜ)
