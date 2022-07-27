### 자바스크립트 async와 await

1. 기본 문법
```javascript
    async function 함수명(){
        await 비동기_처리_메서드_명();
    }
```
2. 예외처리
```javascript
    async function logTodoTitle() {
    try {
        var user = await fetchUser();
        if (user.id === 1) {
        var todo = await fetchTodo();
        console.log(todo.title); // delectus aut autem
        }
    } catch (error) {
        console.log(error);
    }
    }
```



> https://joshua1988.github.io/web-development/javascript/js-async-await/