# Vue.js - TODO

## vue cli 로 프로젝트 만들기
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