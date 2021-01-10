# git

## commit

### head
head 는 간접적으로 커밋을 가리킨다
head 는 branch를 가리키고, (branch 포인터) 
branch 는 보통 가장 최근에 한 커밋을 가리킨다.
그 커밋의 내용으로 working directory 의 내용이 변경된다.

### reset
HEAD, staging area, working directory 가 다른 커밋을 가리키게 한다.

4번째 커밋에서 3번째 커밋으로 reset 을 해도 4번째 커밋은 사라지지 않는다. 다시 4번째 커밋으로 reset 하여 다시 이동할 수 있다.

```
    git reset [옵션] [커밋 id]
```

HEAD가 가리키고 있는 커밋의 돌아갈 때는 커밋 id 대신에 HEAD를 써도 된다.
HEAD가 가리키고 있는 커밋의 이전 커밋은 HEAD^
HEAD가 가리키고 있는 커밋의 두번째 전 커밋은 HEAD~2

#### reset 의 옵션
|                   | --soft | --mixed | --hard |
|-------------------|--------|---------|--------|
| HEAD              | 변경 |     |     |
| staging area      | 변경 | 변경 |     |
| working directory | 변경 | 변경 | 변경 |



### tag
주요 버전의 시작점이 되는 커밋처럼 중요한 커밋은 태그를 단다. 

```
    git tag [태그 이름] [커밋 아이디]
```

태그와 연결된 커밋을 볼 때,
```
    git show [태그 이름]
```
