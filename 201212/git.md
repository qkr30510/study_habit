# cli 로 git 사용하기 


**깃 작업 영역**
- working directory : 프로젝트 디렉토리
- staging area
- repository : .git 

## 계정 설정

```
git config use.name "[이름]"
git config use.email "[이메일]"
```

## 스테이징 올리기
```
git add [파일명]
```

## 커밋 메시지 작성
```
git commit -m "[메시지]"
```

## push
```#리모드 레포지토리를 만드는 이유
- 안정성 : 로컬 내용이 망가졌을 때 대응
- 협업 가능
// 처음 푸쉬할 때
git push --set-upstream origin master
// 그 외
git push
```

## clone
```
git clone [git 주소]
```

#리모트 레포지토리를 만드는 이유
- 안정성 : 로컬 내용이 망가졌을 때 대응
- 협업 가능