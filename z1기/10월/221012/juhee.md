### CROS 오류가 나는 이유

#### CROS 진행순서
1. 기본적으로 브라우저는 cross-origin 요청을 전송하기 전에 OPTIONS 메소드로 preflight를 전송한다
2. Response로 Access-Control-Allow-Origin과 Access-Control-Wllow-Methods가 넘어오는데 이는 서버에서 어떤 origin과 어떤 method를 허용하는지 브라우저에게 알려주는 역할을 한다. 
3. 브라우저가 결과를 성공적으로 확인하고 나면, cross-origin 요청을 보내서 그 이후 과정을 진행한다.

#### CORS 오류 이유


|URL|Outcome|Reason
|http://store.company.com/dir2/other.html|same origin|path만 다른경우		
|http://store.company.com/dir/inner/another.html|same origin|path만 다른경우
|https://store.company.com/page.html|	cross origin|	프로토콜이 다른 경우
|http://store.company.com:81/dir/page.html|	cross origin|	포트가 다른경우
|http://news.company.com/dir/page.html|	cross origin|	도메인이 다른경우



#### CORS 처리시 options를 부르는 이유

특정 조건이 맞지 않는 경우 cors 처리 시에 예비요청 (pre=flight) 이라는 potions 방식으로 request 이후에 다시 정상 request를 날린다. 

**Cross-origin HTTP(s) 요청은 두가지 방식**이 있는데 **단순요청(simple request)**와 **비 단순 요청 혹은 예비요청(pre-flight)**이 있다. 


#### 단순 요청 (simple request)
- GET, HEAD, POST 요청
- POST 요청인 경우 ORIGIN 헤더를 포함
- 요청 페이로드 유형이 text/plain, multipart/form-data 또는 application/x-www-form-urlencoded 이여야 한다. 
- 요청에 사용자 헤더가 없어야 한다.

#### 비 단순 요청 (예비 요청 / pre-flight)
- PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH 방식을 사용하는 경우 
- 금지된 헤더 이름을 사용하는 경우 - https://fetch.spec.whatwg.org/#forbidden-header-name
- 페이로드 유형이 text/plain, multipart/form-data 또는 application/x-www-form-urlencoded 이 아닌 경우
- 하나 이상의 이벤트 리스너가 XMLHttpRequestUpload에 등록되어 있는 경우 


