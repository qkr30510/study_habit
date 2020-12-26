# git
## stash

a branch 에서 작업 중에 작업 내용을 커밋하지 않고 branch 를 바꾸면 작업 내용이 없어질 수도 있기 때문에 경고가 뜬다.

1. git stash 커맨드를 사용하여, 작업 내용을 스택에 저장하고, working directory를 최근 커밋 상태로 초기화할 수 있다.

2. 잘못된 branch 에서 작업하고 있을 때 스택에 저장하고, branch 를 옮긴 후 스택 내용을 가져온다.

```
  git stash

  // stash 목록 확인
  git stash list

  // stash 내용을 복구
  git stash apply
  git stash apply [stash id]

  // stash 삭제
  git stash drop
  git stash drop [stash id]

  // stash 적용과 삭제를 동시해 해줌.
  git stash pop
```

## cherry-pick
branch 를 merge 하면 여러 커밋이 추가된다.
원하는 커밋만 추가할 수 있는 커밋만 추가할 수 있는 커맨드이다.

```
 git cherry-pick [커밋id]
```

## 여러 커밋을 하나의 커밋으로 만들기
```
  git reset --soft [커밋 id]
  git add
  git commit -m [커밋 메세지]
```

## .gitignore
working directory 내 존재하지만 git이 추적하지 않는 파일의 목록이다.

저장소를 만들 때 옵션을 설정하면 자동으로 파일 목록을 구성해준다.