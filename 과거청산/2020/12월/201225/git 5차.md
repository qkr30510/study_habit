# git
## fetch
 pull 은 리모트의 branch 의 내용을 로컬의 branch 에 가져와서 merge 하는 커맨드이다.
 fetch 는 내용을 가져오기만 하고 따로 merge 해야 한다. 
 리모트의 내용을 살펴본 후 merge 하고 싶을 때 사용한다.


```
    git fetch

    //git merge origin/master
    git merge [리모트 branch]
```

## blame
 특정 파일의 커밋 히스토리를 알고 싶을 때 사용한다. 
 커밋ID/작성자/커밋메시지 등을 확인 할 수 있다.

```
    git blame [파일명]
```

## revert
커밋하기 이전으로 파일을 되돌릴 수 있다. 
리모트에 push 한 상태에서 파일을 되돌리려면 revert 를 사용한다. revert 를 하면 해당 커밋의 상태로 돌아가고, 신규 커밋이 생긴다.

```
    git revert [커밋 id]
    // 여러 커밋 되돌리기
    git revert [커밋 id]...[커밋 id]
```

여러 커밋을 되돌릴 경우 [1]...[3] 라고 적으면 2,3번 커밋만 revert 된다. 2개의 커밋을 되돌렸기에 2개의 신규 커밋이 생긴다.


## reflog = reference log

10번째 커밋에서 1번째 커밋으로 reset 을 한다면
history 커맨드로는 2~10번째 커밋을 확인할 수 없다.

reflog 하면 그동안 HEAD 가 가리키던 커밋 id을 확인할 수 있다. 

```
    git reflog 
```

## rebase

merge 와 동일하게,
현재 branch 에 다른 branch 내용을 가져온다.

```
    git rebase [가져올 branch 명]
    // 충돌났을 경우
    git add [파일명]
    git rebase --continue //rebase 를 계속 진행하라는 뜻
```

merge 와 다르게
새로운 커밋을 만들지 않고 그래프상의 커밋 히스토리도 깔끔하다