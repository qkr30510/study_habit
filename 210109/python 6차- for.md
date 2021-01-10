# python

## for
```python
  # 변수에는 list요소가 들어간다.
  for 변수 in list : 
    print(변수)

  #0부터 stop-1까지 반복
  for index in range(stop):
    print(index)

  #start 부터 stop-1까지 반복
  for index in range(start, stop):
    print(index)

  #start 부터 step만큼 띄고 stop-1까지 반복
  for index in range(start, stop, step):
  #3, 6, 9, 12, 15, 18
  for index in range(3, 20, 3):
    print(index)
```

list활용하는 것보다 range함수를 사용할 때 컴퓨터 메모리를 효율적으로 사용한다.
start에서 stop 까지를 한 번에 저장하지않고,
반복을 할 때마다 저장된 index 를 버린다.


**피타고라스의 삼조 예제는 고민중**