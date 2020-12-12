#Vue.js - TODO

##vue cli 로 프로젝트 만들기
```
 vue create [프로젝트명]
```
public => static 한 파일
src = > 개발소스

## package.json
```
"scripts": {
    // 개발 화면
    "serve": "vue-cli-service serve",
    
    // 배포 화면 : dist 아래에 배포 파일 확인
    "build": "vue-cli-service build",

    // 룰에 위배되는 것을 알려줌.
    "lint": "vue-cli-service lint"
},
```

## 파일 구조
assets : 이미지/css 등
components : 모든 페이지에서 사용되는 공통된 컴포넌트
views : 각 화면
main.ts : vue 인스턴스 생성, 프로젝트 entry
router.ts : 라우터를 적는 화면

## tsconfig
target : 빌드된 파일 버전
moduleResolution : 모듈 해석 방식
include : 컴파일 대상
exclude : 빌드 예외 대상

## 문법
### @ decorator
```js
    // @ is an alias to /src
    import message from '@/components/message.vue'; 
~~~