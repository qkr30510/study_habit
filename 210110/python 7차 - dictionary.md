# python

## dictionary
js 의 객체와 비슷한 듯.

```python
  dictionary = {
    키 : 값,
    키 : 값
  }
  dictionary[키] = 값
```

## Aliasing ( 가명 )

```python
  x = [1,2,3]
  y = x
  y[2] = 4
```

  js 에서는 x=[1,2,3], y=[1,2,4] 가 될 텐데,
  python 에서는 x 와 y 모두 [1,2,4] 가 된다.

```python
  x = [1,2,3]
  y = list(x)
  y[2] =  4
```

 x를 변경하지 않고 y를 변경하기 위하여,
 새로운 list를 생성한다.

## list 와 문자열
### 공통점
 - indexing
 - for 반복문 이용 가능
 - slicing
 - 덧셈 연산 가능
 - len 함수 이용 가능

### 차이점
 - 리스트는 수정 가능하지만, (Mutable)
   문자열은 수정할 수 없음. (Immutable)