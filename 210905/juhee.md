### NUXT 해보기 

https://github.com/qkr30510/changeRem/tree/master

css정리 및 node - loader 다운 그레이드 


```
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):

TypeError: this.getOptions is not a function
```

nuxt에서 위의 에러가 나온다면, nuxt의 버전과 노드로더의 버전이 안맞는것이니. 노드로더의 버전을 다운그레이드 해야함.


```
// 기존 모듈 삭제
$ npm uninstall sass-loader

// 10번대 버전 설치
$ npm install --save sass-loader@10
```