# Top JavaScript Interview Questions and Answers

## 1. What is JavaScript?

JavaScript is a high-level, dynamically typed programming language used to create interactive web applications.

## 2. Difference between `var`, `let`, and `const`

| Keyword | Scope | Reassignment | Redeclaration |
| --- | --- | --- | --- |
| `var` | Function | Yes | Yes |
| `let` | Block | Yes | No |
| `const` | Block | No | No |

```javascript
let age = 30;
age = 31;

const name = "Akash";
```

## 3. What is hoisting?

JavaScript moves declarations to the top of their scope before execution.

```javascript
console.log(a); // undefined
var a = 10;
```

`let` and `const` are also hoisted but remain in the temporal dead zone until declaration.

## 4. Famous interview question — `var` vs `let` in a loop with `setTimeout`

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output:

```text
3
3
3
```

`var` is function-scoped. All callbacks share the same `i`. When they execute, the loop has finished and `i` is `3`.

Using `let`:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output:

```text
0
1
2
```

`let` is block-scoped and creates a new `i` for every loop iteration.

> **Interview one-liner:** `var` shares one variable across all iterations, while `let` creates a separate block-scoped variable for each iteration.

### How to fix it using `var`

With `var`, create a new function scope for every iteration so each callback gets its own value.

#### Using IIFE

```javascript
for (var i = 0; i < 3; i++) {
  (function (currentValue) {
    setTimeout(() => {
      console.log(currentValue);
    }, 1000);
  })(i);
}
```

Output:

```text
0
1
2
```

Each iteration passes the current value of `i` into `currentValue`. Every function call gets its own separate variable.

#### Using `setTimeout` parameter

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(
    function (currentValue) {
      console.log(currentValue);
    },
    1000,
    i
  );
}
```

Output:

```text
0
1
2
```

#### Using a closure

```javascript
function printValue(value) {
  return function () {
    console.log(value);
  };
}

for (var i = 0; i < 3; i++) {
  setTimeout(printValue(i), 1000);
}
```

Output:

```text
0
1
2
```

`printValue(i)` runs immediately and returns an inner function that closes over that iteration’s `value`.

> **Interview answer:** With `var`, use a closure/IIFE or pass `i` as a function argument to preserve its value for each iteration.

## 5. Difference between `==` and `===`

`==` compares values after type conversion.
`===` compares both value and data type.

```javascript
5 == "5";  // true
5 === "5"; // false
```

## 6. What is a closure?

A closure is a function that remembers variables from its outer scope even after the outer function finishes.

```javascript
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
```

## 7. What is scope?

Scope determines where a variable can be accessed.

JavaScript has:

- Global scope
- Function scope
- Block scope

```javascript
if (true) {
    let value = 10;
}

// console.log(value); // Error
```

## 8. What is the temporal dead zone?

The temporal dead zone is the period between entering a scope and declaring a `let` or `const` variable.

```javascript
console.log(name); // ReferenceError
let name = "Akash";
```

## 9. What is an arrow function?

An arrow function is a shorter syntax for writing functions.

```javascript
const add = (a, b) => a + b;
```

Arrow functions do not have their own `this`, `arguments`, or `prototype`.

## 10. Difference between regular and arrow functions

Regular functions have their own `this`. Arrow functions inherit `this` from the surrounding scope.

```javascript
const user = {
    name: "Akash",

    regularFunction() {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};
```

## 11. What is `this` in JavaScript?

`this` refers to the object that is executing the current function. Its value depends on how the function is called.

```javascript
const user = {
    name: "Akash",
    showName() {
        console.log(this.name);
    }
};

user.showName();
```

## 12. Difference between `null` and `undefined`

`undefined` means a value has not been assigned.
`null` means an intentionally empty value.

```javascript
let value;
console.log(value); // undefined

let selectedUser = null;
```

## 13. What are primitive data types?

JavaScript primitive types are:

- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol

## 14. What are truthy and falsy values?

Falsy values are:

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

All other values are truthy, including empty arrays and empty objects.

```javascript
Boolean([]); // true
Boolean({}); // true
```

## 15. What is `NaN`?

`NaN` means Not-a-Number. It represents an invalid numeric result.

```javascript
Number("hello"); // NaN
```

Use this to check it:

```javascript
Number.isNaN(value);
```

## 16. What is type coercion?

Type coercion is the automatic or manual conversion of one data type into another.

```javascript
"5" + 2; // "52"
"5" - 2; // 3
```

## 17. What is a callback function?

A callback is a function passed to another function to be executed later.

```javascript
function processUser(callback) {
    callback("Akash");
}

processUser(name => console.log(name));
```

## 18. What is a Promise?

A Promise represents the future result of an asynchronous operation.

It can be:

- Pending
- Fulfilled
- Rejected

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then(result => console.log(result));
```

## 19. What is `async`/`await`?

`async`/`await` provides a cleaner way to work with promises.

```javascript
async function getData() {
    try {
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

## 20. Difference between synchronous and asynchronous code

Synchronous code executes one statement at a time.
Asynchronous code allows other operations to continue while waiting.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Async");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Async
```

## 21. What is the event loop?

The event loop checks whether the call stack is empty and moves asynchronous callbacks from queues to the call stack.

## 22. Difference between microtask and macrotask

Promise callbacks are microtasks. `setTimeout` callbacks are macrotasks.

Microtasks execute before macrotasks.

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

```text
Start
End
Promise
Timeout
```

## 23. What are `call`, `apply`, and `bind`?

They are used to control the value of `this`.

```javascript
function introduce(city) {
    console.log(`${this.name} from ${city}`);
}

const user = { name: "Akash" };

introduce.call(user, "Pune");
introduce.apply(user, ["Pune"]);

const boundFunction = introduce.bind(user, "Pune");
boundFunction();
```

- `call` accepts separate arguments.
- `apply` accepts an array.
- `bind` returns a new function.

## 24. What is destructuring?

Destructuring extracts values from arrays or objects.

```javascript
const user = {
    name: "Akash",
    age: 33
};

const { name, age } = user;

const numbers = [10, 20];
const [first, second] = numbers;
```

## 25. What is the spread operator?

The spread operator expands array or object values.

```javascript
const first = [1, 2];
const second = [...first, 3, 4];

const user = { name: "Akash" };
const updatedUser = { ...user, city: "Pune" };
```

## 26. What is the rest operator?

The rest operator collects multiple values into an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
```

## 27. Difference between `map`, `filter`, and `reduce`

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(x => x * 2);
const even = numbers.filter(x => x % 2 === 0);
const total = numbers.reduce((sum, x) => sum + x, 0);
```

- `map`: transforms each item
- `filter`: selects matching items
- `reduce`: produces one final value

## 28. Difference between `forEach` and `map`

`forEach` executes a function but does not return a new array.
`map` returns a new transformed array.

```javascript
const result = [1, 2, 3].map(x => x * 2);
```

## 29. What is shallow copy?

A shallow copy creates a new outer object, but nested objects still share references.

```javascript
const original = {
    name: "Akash",
    address: { city: "Pune" }
};

const copy = { ...original };

copy.address.city = "Mumbai";

console.log(original.address.city); // Mumbai
```

## 30. How do you create a deep copy?

For supported data types:

```javascript
const copy = structuredClone(original);
```

`JSON.parse(JSON.stringify(object))` has limitations with dates, functions, `undefined`, and circular references.

## 31. `JSON.stringify()` vs `JSON.parse()`

| `JSON.stringify()` | `JSON.parse()` |
| --- | --- |
| Converts a JavaScript object to a JSON string. | Converts a JSON string back to a JavaScript object. |
| Used before sending data over a network or storing it. | Used after receiving data or reading it from storage. |
| Input: Object | Input: JSON string |
| Output: JSON string | Output: JavaScript object |

```javascript
const user = { name: "Akash", age: 33 };

const json = JSON.stringify(user); // '{"name":"Akash","age":33}'
const parsed = JSON.parse(json);   // { name: "Akash", age: 33 }
```

## 32. What is optional chaining?

Optional chaining safely accesses nested properties.

```javascript
const city = user?.address?.city;
```

## 33. What is nullish coalescing?

`??` returns the right value only when the left value is `null` or `undefined`.

```javascript
const count = 0;

console.log(count || 10); // 10
console.log(count ?? 10); // 0
```

## 34. What is an IIFE?

An IIFE is a function that runs immediately after creation.

```javascript
(function () {
    console.log("Executed");
})();
```

## 35. What is currying?

Currying converts a function with multiple arguments into a sequence of functions.

```javascript
const add = a => b => a + b;

console.log(add(5)(3)); // 8
```

### Uses of currying

| Use | Why it helps |
| --- | --- |
| **Reusable specialized functions** | Fix one argument and reuse — `const addTax = add(0.18)` |
| **Function composition** | Build pipelines of small single-argument functions |
| **Partial application** | Supply known values early; pass remaining values later |
| **Cleaner APIs** | Configure once, call many times — common in Redux, Ramda, lodash |
| **Event / callback helpers** | Pre-bind IDs or config without creating verbose wrappers |

```javascript
const multiply = a => b => a * b;

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## 36. What is function debouncing?

Debouncing executes a function only after calls have stopped for a specified time.

```javascript
function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}
```

Commonly used for search input.

## 37. What is throttling?

Throttling limits a function to execute at most once during a specified interval.

```javascript
function throttle(callback, delay) {
    let allowed = true;

    return function (...args) {
        if (!allowed) return;

        allowed = false;
        callback.apply(this, args);

        setTimeout(() => {
            allowed = true;
        }, delay);
    };
}
```

Commonly used for scrolling and resizing.

## 38. Difference between debouncing and throttling

| Aspect | Debouncing | Throttling |
| --- | --- | --- |
| **Behaviour** | Runs only after calls have **stopped** for a delay | Runs at most **once per interval** while calls continue |
| **Timing** | Waits for a quiet period, then executes | Executes immediately (or on interval), then blocks until delay ends |
| **Extra calls** | Resets the timer — previous pending call is cancelled | Ignores calls that happen during the wait window |
| **Typical use** | Search input, form validation, autocomplete | Scroll, resize, mouse move, button spam prevention |
| **Example** | User types `"a"`, `"ap"`, `"app"` — API runs once after typing stops | User scrolls continuously — handler runs every 200ms max |

## 39. What is prototypal inheritance?

JavaScript objects can inherit properties and methods from other objects through the prototype chain.

```javascript
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person);
user.greet();
```

## 40. What is a JavaScript class?

A class is syntactic sugar over JavaScript’s prototype-based inheritance.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const person = new Person("Akash");
```

## 41. Difference between `localStorage` and `sessionStorage`

| Feature | `localStorage` | `sessionStorage` |
| --- | --- | --- |
| Expiry | Until manually cleared | Until tab closes |
| Scope | Same origin | Same tab and origin |
| Storage | Around 5–10 MB | Around 5 MB |

Both store values as strings.

## 42. What is event bubbling?

During bubbling, an event moves from the **target element toward its parent elements** (bottom → top).

```javascript
parent.addEventListener("click", () => {
    console.log("Parent");
});
```

## 43. What is event capturing?

During capturing (trickling), an event moves from the **root toward the target element** (top → bottom).

```javascript
parent.addEventListener(
    "click",
    () => {
        console.log("Parent (capture)");
    },
    true // useCapture = true
);
```

Default `addEventListener` uses bubbling (`useCapture = false`).

## 44. What is event delegation?

Event delegation attaches one event handler to a parent instead of separate handlers to every child.

```javascript
document.querySelector("#list").addEventListener("click", event => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

## 45. Event bubbling vs capturing vs delegation

| Aspect | Bubbling | Capturing | Delegation |
| --- | --- | --- | --- |
| **Direction** | Target → parents (bottom → top) | Root → target (top → bottom) | Uses bubbling on a parent |
| **When it runs** | After the target handler | Before the target handler | One parent handler for many children |
| **How to enable** | Default (`useCapture = false`) | `addEventListener(..., true)` | Listen on parent; check `event.target` |
| **Main benefit** | Parent can react to child events | Intercept early (rare) | Fewer listeners; works for dynamic children |
| **Typical use** | Most UI click handlers | Modals, stop early, analytics | Lists, tables, menus with many items |

**Event flow order:** Capturing phase → Target phase → Bubbling phase

## 46. How do you stop event bubbling?

```javascript
event.stopPropagation();
```

## 47. Difference between `slice` and `splice`

`slice` returns selected elements without modifying the original array.

```javascript
const result = array.slice(1, 3);
```

`splice` adds or removes elements and modifies the original array.

```javascript
array.splice(1, 2);
```

## 48. Difference between `find` and `filter`

`find` returns the first matching element.
`filter` returns all matching elements in an array.

```javascript
const first = users.find(user => user.id === 1);
const active = users.filter(user => user.isActive);
```

## 49. What is strict mode?

Strict mode catches common mistakes and prevents unsafe JavaScript behaviour.

```javascript
"use strict";
```

## 50. What is memoization?

Memoization stores previously calculated results to avoid repeated calculations.

```javascript
function memoize(callback) {
    const cache = new Map();

    return function (value) {
        if (cache.has(value)) {
            return cache.get(value);
        }

        const result = callback(value);
        cache.set(value, result);

        return result;
    };
}
```

## 51. What is `Promise.all()`?

It executes multiple promises concurrently and resolves when all succeed. It rejects when any one promise rejects.

```javascript
const results = await Promise.all([
    fetch("/users"),
    fetch("/products")
]);
```

## 52. Difference between Promise methods

- `Promise.all`: all must succeed
- `Promise.allSettled`: waits for every promise
- `Promise.race`: returns the first settled promise
- `Promise.any`: returns the first fulfilled promise

## 53. What is the output?

```javascript
console.log(typeof null);
```

Output:

```text
object
```

This is a historical JavaScript behaviour.

## 54. What is the output?

```javascript
console.log([] == false);
console.log([] === false);
```

Output:

```text
true
false
```

The first comparison performs type coercion.

## 55. What is the output?

```javascript
let a = 10;

function test() {
    console.log(a);
    let a = 20;
}

test();
```

Output:

```text
ReferenceError
```
