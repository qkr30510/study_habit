### ts 비구조화

TS(타입스크립트)에서 비구조화(destructuring)는 배열이나 객체의 속성을 추출하여 변수에 할당하는 기능을 말합니다.

예를 들어, 배열을 비구조화 할 때는 다음과 같이 작성할 수 있습니다.

```javascript
const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

위 코드에서 const [a, b, c] = array; 부분은 array 배열에서 첫 번째, 두 번째, 세 번째 요소를 순서대로 변수 a, b, c에 할당하는 구문입니다.

객체를 비구조화 할 때는 다음과 같이 작성할 수 있습니다.

```javascript
const object = { name: 'John', age: 30 };
const { name, age } = object;
console.log(name); // "John"
console.log(age); // 30
```

위 코드에서 const { name, age } = object; 부분은 object 객체의 name과 age 속성을 변수 name, age에 할당하는 구문입니다.

비구조화는 코드를 간결하게 만들어주며, 코드의 가독성을 높여주는 장점이 있습니다. 또한, 타입스크립트에서는 비구조화를 통해 타입을 추론할 수 있어서 코드 작성 시 타입 정의를 간소화할 수 있습니다.
