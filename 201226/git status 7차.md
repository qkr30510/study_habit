# git
## status

1. Untracked 
  git이 변경사항을 알아채지 못하는 상태. 
  한번도 add 하지 않은 파일.

2. tracked 
  git이 변경사항을 추적하는 상태
    1. Staged : staging area에 추가된 상태
    2. Unmodified : 커밋 후 변경 사항이 없는 상태
    3. Modified : 커밋 후 변경 사항이 있는 상태

### staging area에 파일을 추가

```
  git add [파일명]
```

### staging area에서 파일 삭제

```
  git reset [파일명]
```

## 커맨드 사용법 아는 법

```
  git help [커맨드]
  man git-[커맨드]
```