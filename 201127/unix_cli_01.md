#UNIX CLI

## 인자와 옵션의 차이

1. 인자 : 작동할 대상 지정
2. 옵션 : 구체적인 동작 지시

```
cal 2020 // 2020 은 인자
cal -y // -y 는 옵션, - 이 있으면 옵션
```

옵션을 여러 개 쓸 때는 - 뒤에 연달아 쓸수 있다. 값을 줘야하는 옵션이 있다면 해당 옵션을 가장 뒤에 써야한다

```
cal -j -B 2 
cal -jB 2 // 줄여쓸 수 있음
cal -Bj 2 // B는 인자가 필요한 옵션이라, 오류가 남
```

## 공식 매뉴얼 확인법

```
man [커맨드 or 인자]
```

매뉴얼에서 나가려면 q 를 누룬다

참고 : https://www.codeit.kr/learn/courses/unix-command-line/2682

## 커멘드

### 디렉토리 

* ~ [틸드] : 홈디렉토리
* pwd : 현재 작업 중인 디렉토리 출력

* cd : 디렉토리 변경
```
cd /          // 루트 디렉토리로 이동
cd ~          // 홈 디렉토리로 이동 
cd -          // 직전 디렉토리로 이동
cd ..         // 상위 디렉토리로 이동
cd [디렉토리] // 해당 디렉토리 경로로 이동
```

* ls : 경로 안의 자식디렉토리, 파일 목록 출력 
```
ls -l            // 자세한 디렉토리, 파일 정보 확인
ls -a            // 숨김 파일 확인 가능
ls -l [파일명]   // 파일의 자세한 정보 확인
ls -l [디렉토리] // 디렉토리 내부의 파일 정보 확인
ls -ld [디렉토리] // 디렉토리의 정보 확인
```
출력된 정보 목록에서
 "-" 이 붙어있으면 파일이고
 "d" 가 붙어있으면 디렉토리를 나타난다.

 * mkdir : 디렉토리 생성
 ```
  mkdir dir       // dir 폴더 생성
  mkdir dir/dir02 // dir 폴더 안에 dir02 폴더 생성
  ```

 * touch : 파일 생성
```
  touch [파일명] 
 ```

 * mv : 디렉토리, 파일 이동, 이름 변경

 B디렉토리가 존재하면, 파일과 디렉토리를 이동시킴.
 디렉토리안에 동일한 명칭의 파일이 있으면, 덮어써지기 떄문에 -i 인자를 꼭 써야함.
 ```
 mv -i [파일명] [B디렉토리]  // 파일 이동 
 mv [파일명] [바꿀파일명]    // 디렉토리명칭과 겹치지 않으면 이름 변경됨         
```

B디렉토리가 존재하면 그 안으로 디렉토리를 이동시킴.
존재 하지 않다면, 이름을 변경함,
```
 mv [A디렉토리] [B디렉토리]       //A디렉토리를 B디렉토리로 이동
```

* cp : 디렉토리, 파일 복사하기

B파일명과 같은 이름의 파일이 이미 있다면, 덮어써짐.
mv 와 마찬가지로 -i 커맨드가 필요함.

디렉토리는 내부의 디렉토리와 파일이 있을 수 있기 때문에 -r 인자를 준다.

```
 cp -i [A파일명] [복사할 명칭]    
 cp -r [디렉토리명] [복사할 명칭]
```

* rm : 디렉토리, 파일 삭제

디렉토리를 지울 때 -i 인자를 주면,
파일, 디렉토리를 지울 때마다 확인하면서 삭제할 수 있다.

```
rm [파일명]
rm -ri [디렉토리명]
```