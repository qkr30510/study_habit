# git

## commit
staging area를 하나의 버전으로 남기는 것

아래 내용이 기록에 남는다.
- 커밋한 사용자 아이디
- 커밋 날짜, 시간
- 커밋 메시지

### commit history

```
    // 커밋 로그 보기
    git log 
    // 커밋 로그를 한 줄로 보기,  커밋 id와 메시지 확인 가능
    git log --pretty=oneline
    // 위 커맨드 alias
    git history
    // 커밋의 수정 내역 확인 가능.
    git show [커밋id]

```
* **prettey 옵션의 값** 
    https://git-scm.com/docs/pretty-formats
* **alias, aliasing**
    : 길이가 긴 커맨드에 별명을 붙이는 것.

### 커밋 메시지 작성법
```
    git commit -m [message]
    // m 옵션 없이 vim 에서 commit 메시지를 적을 수 있다
    git commit 
```

### 최신 커밋 수정
```
    // vim 에서 commit 수정 가능
    // 최신 커밋을 수정해서 새로운 커밋 작성
    git commit --amend
```

## 특정 커밋의 변경 사항 확인
```
    git show
```

### 커밋 비교
```
    git diff [커밋id] [커밋id]
```

### aliasing
길이가 긴 커맨드에 별명을 붙이는 행위
```
    git config alias.[새로운 별명] [길이가 긴 커맨드] 
    git config alias.history 'log --pretty=oneline'
```