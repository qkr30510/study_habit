# python

## 자료형
### 불대수
논리를 진리값으로 표현한 것

|x | y | x AND Y | x OR y | NOT x|
|--------|---------|--------|-----|-----|
| true   |true     |true        |true|false|
| true   |false         |false        |true|false|
| false   |true         | false       |true|true|
| false   |false         | false       |false|ture|

and 연산자 : x 와 y 모두가 참이여야 참
or 연산자 : x 와 y 중 하나라도 참이여야 참
not 연산자 : true 면 false / false 면 true

### type(값) 
: 값이 무슨 자료형인지 알 수 있음, 함수도 하나의 자료형

```python
    type(True) #bool
    type(print) #builtin_function_or_method

```

## 함수
```python
    def [함수명](): #함수 헤더
        [실행문]

    def hello():
        print('hello')
```
### return 의 역할
1. 값을 반환
2. 함수 종료

return 값이 없는 함수를 print 하면 none 이 나옴

### 매개변수

```python
    def test(a,b,c = 1):
    def test(a,b,c = 1,d): #오류
```

c 와 같이 기본 값이 설정된 변수는 꼭 값을 넘기지않아도 된다.
이런 변수를 옵셔널 파라미터라고 한다.
옵셔널 파라미터 뒤에 값이 지정되지 않은 변수가 있다면 오류가 난다.

### scope

```python
    x = 2

    def test():
        x = 3
        x = 4
        print(x) #4

    test()
    print(x) #2    
```

js 와는 변수 scope가 다른 것 같다. 
지역에서 전역변수를 수정하지 못한다. 같은 scope 에서는 하나의 변수를 여러번 수정할 수 있는 것 같다.

## 스타일 가이드 PET8
https://www.python.org/dev/peps/pep-0008

일반 변수는 소문자, 단어와 단어사이는 _ 로 구분한다.
상수는 대문자로 기입하고 마찬가지로 단어와 단어는 _로 분한다.

들여쓰기는 스페이스바 4개를 사용

함수를 정의한 위,아래에 빈 줄을 2개 만든다.
함수명과 괄호사이를 띄어쓰지 않는다.
```pyhon
    #공백
    #공백
    def test():
        print(test)
    #공백
    #공백
```

괄호와 쉼표사이를 띄어쓰지않는다.
=, 연산자 앞,뒤로 띄어쓰기를 하나만 한다.
주석 앞에 빈 줄을 2개 만든다.
```pyhon

    # bad
    print([ x , y ])
    print({ x: 1 })
    x=1+1
    x = (a + b) * (a - b)
    #공백
    #공백
    # good
    print([x, y])
    print({x: 1})
    x = 1 + 1
    x = (a+b) * (a-b) # 연산자 우선순위 구분을 위해 띄어쓰기를 하지 않은 케이스

```
