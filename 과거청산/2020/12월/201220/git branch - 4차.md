# git
## branch
git은 root commit 에서 여러 branch 를 나눈다
branch 는 commit 을 가리키는 포인터이다.

git status 커맨드를 입력했을 때, on branch master 처럼 어떤 branch 를 사용하는 지 알 수 있다

master 는 기본 branch 이고, branch를 바꾸면 head 는 새로운 branch 를 가리킨다.

```
    // 모든 branch 조회
    git branch
    
    // branch 생성
    git branch [branch 이름]
    
    // branch 삭제
    git branch -d [branch 이름]

    // branch 이동
    git checkout [branch 이름]

    //branch 생성과 이동을 동시에 할 때
    git checkout -b [branch 이름]

    
```
## merge
head가 가리키는 커밋에 원하는 branch 가 가리키는 커밋을 합쳐서 새로운 커밋을 만든다.

```
    //branch merge
    //현재 위치한 branch에 [branch 이름] 를 병합한다.
    git merge [branch 이름]
```

커밋 히스토리에서 같은 line 에 있는 branch 를 merge 하는 것을 Fast-forward merge 라고 한다. merge 커밋이 생기지 않는다.

merge 커밋은 분기된 2개의 라인을 merge 할 때 커밋이 생긴다.

## confilt
branch 를 merge 하다가 conflict 가 생길 수 있다.
conflict 를 해결하지 않고 merge 를 취소하고 싶은 경우

```
    git merge --abort
```

## 원격 저장소

### 원격 저장소 추가하기

```
    // git 원격저장소를 origin 이라는 이름으로 등록
    git remote add origin [git url]
```

(origin/master) : 원격저장소의 master branch, upstream branch
(master) : 로컬저장소의 master branch

로컬에서 branch 를 생성하고 push 를 하면,
원격 저장소에는 해당 branch 가 없는 상태이기 때문에 오류가 난다.

--set-upstream 옵션을 사용하여, 원격저장소와 로컬저장소의 branch를 연결한다.
```
    git push --set-upstream origin [branch 이름]
    // 또는
    git push -u origin [branch 이름]
```

## 과거 커밋에서 branch를 분기할 때

```
    git checkout [커밋 ID]
```

위 커맨드를 입력하면, head 가 brach를 통해 간접적으로 커밋을 가리키지 않고, 직접적으로 커밋을 가리킨다. 이것을 Detached HEAD 라고 한다.

이 상태에서 branch 를 만들면 새로 생성된 branch 를 통해 head가 간접적으로 커밋을 가리킨다

## reset 과 checkout 의 차이

| reset | checktout |
|-------|-------|
| branch 가 다른 커밋을 가리킨다. | HEAD가 다른 커밋, branch 를 가리킨다. |
 
