<h1 style="color:#2563eb;">JavaScript Learning Roadmap</h1>

## Goal

<p style="color:#374151;">
Standard <strong style="color:#16a34a;">JavaScript learning sequence</strong> — from basics to modern ES6+, async, DOM, and APIs. Each topic explained concisely for interviews and daily development.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> JavaScript Basics & Runtime</a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> Variables — var, let, const & Hoisting</a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> Data Types & Type Coercion</a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> Operators</a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> Control Flow</a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> Functions</a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> Scope & Closures</a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> The <code>this</code> Keyword</a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> Objects & Prototypes</a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> Arrays & Array Methods</a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> Strings & Template Literals</a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> Destructuring, Spread & Rest</a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> ES Modules</a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> Classes (ES6)</a></li>
  <li><a href="#topic-15"><span style="color:#ea580c;font-weight:700;">15.</span> Error Handling</a></li>
  <li><a href="#topic-16"><span style="color:#0891b2;font-weight:700;">16.</span> Asynchronous JavaScript</a></li>
  <li><a href="#topic-17"><span style="color:#0891b2;font-weight:700;">17.</span> DOM Manipulation</a></li>
  <li><a href="#topic-18"><span style="color:#0891b2;font-weight:700;">18.</span> JSON, Fetch & Web Storage</a></li>
  <li><a href="#topic-19"><span style="color:#9333ea;font-weight:700;">19.</span> Modern ES6+ Features</a></li>
  <li><a href="#interview-quick-answers"><span style="color:#9333ea;font-weight:700;">Guide:</span> Interview Quick Answers</a></li>
</ul>

---

<a id="topic-1"></a>

## 1. JavaScript Basics & Runtime

### What is JavaScript?

- **Dynamic** scripting language — variables can hold any type
- **Interpreted** at runtime by engines like **V8** (Chrome, Node.js)
- Runs in **browser** (client-side) and **Node.js** (server-side)

### ECMAScript (ES)

**ECMAScript** is the official **standard/specification** for JavaScript. New features ship as ES versions (ES6 = ES2015, ES2020, etc.).

| Term | Meaning |
| --- | --- |
| JavaScript | Language implementation |
| ECMAScript | Language standard (ES6, ES2022…) |
| HTML | W3C markup standard |

### Where JavaScript Runs

| Environment | Use |
| --- | --- |
| **Browser** | DOM, events, UI, fetch API |
| **Node.js** | Files, APIs, CLI tools, backend |
| **Deno / Bun** | Modern alternative runtimes |

### Node.js

JavaScript **runtime** built on V8 — not a language itself.

- Cross-platform, open source
- **npm** — package manager for installing libraries

**Interview one-liner:** JavaScript is the language; ECMAScript is its standard; Node.js runs JS outside the browser.

---

<a id="topic-2"></a>

## 2. Variables — var, let, const & Hoisting

### Declarations

```javascript
var name = "Akash";   // legacy — avoid in new code
let age = 25;         // block-scoped, reassignable
const PI = 3.14;      // block-scoped, cannot reassign
```

| Keyword | Scope | Reassign | Hoisting |
| --- | --- | --- | --- |
| `var` | Function / global | Yes | Hoisted, initialized `undefined` |
| `let` | Block | Yes | Hoisted, not initialized (TDZ) |
| `const` | Block | No | Hoisted, not initialized (TDZ) |

### Hoisting

Engine scans code and moves declarations to the top of their scope **before** execution.

```javascript
console.log(x); // undefined (var)
var x = 10;

console.log(y); // ReferenceError (let — Temporal Dead Zone)
let y = 20;
```

**TDZ (Temporal Dead Zone):** Period between scope entry and `let`/`const` declaration where variable cannot be accessed.

**Interview one-liner:** Use `const` by default, `let` when reassignment needed, avoid `var`.

---

<a id="topic-3"></a>

## 3. Data Types & Type Coercion

### Primitive Types (7)

| Type | Example | Notes |
| --- | --- | --- |
| `string` | `"hello"` | Text |
| `number` | `42`, `3.14` | All numbers are floating-point |
| `bigint` | `9007199254740991n` | Large integers |
| `boolean` | `true` / `false` | Logical values |
| `undefined` | `undefined` | Declared but not assigned |
| `null` | `null` | Intentional empty value |
| `symbol` | `Symbol('id')` | Unique identifier |

### Reference Type

| Type | Example |
| --- | --- |
| `object` | `{}`, `[]`, `function`, `Date` |

### typeof

```javascript
typeof "hi"      // "string"
typeof 42        // "number"
typeof null      // "object" (historical bug)
typeof undefined // "undefined"
```

### Type Coercion

Automatic conversion when types mix in operations.

```javascript
"5" + 1    // "51" (string concatenation)
"5" - 1    // 4 (string converted to number)
!!"hello"  // true (truthy)
```

| Conversion | Result |
| --- | --- |
| **Truthy** | Non-empty string, non-zero number, objects, arrays |
| **Falsy** | `0`, `""`, `null`, `undefined`, `NaN`, `false` |

**Interview one-liner:** JS has 7 primitives + object; `typeof null === "object"` is a known quirk.

---

<a id="topic-4"></a>

## 4. Operators

| Category | Operators |
| --- | --- |
| **Arithmetic** | `+`, `-`, `*`, `/`, `%`, `**` |
| **Assignment** | `=`, `+=`, `-=`, `*=` |
| **Comparison** | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| **Logical** | `&&`, `\|\|`, `!` |
| **Ternary** | `condition ? a : b` |
| **Nullish** | `??` (null/undefined only), `?.` (optional chaining) |

### `==` vs `===`

```javascript
5 == "5"   // true  (coercion)
5 === "5"  // false (strict — type + value)
```

**Always prefer `===`** unless you explicitly need coercion.

```javascript
const user = { profile: { name: "Akash" } };
user?.profile?.name  // "Akash"
user?.address?.city  // undefined (no error)
```

---

<a id="topic-5"></a>

## 5. Control Flow

### Conditionals

```javascript
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

switch (day) {
  case "Mon": console.log("Start"); break;
  default: console.log("Other");
}
```

### Loops

```javascript
for (let i = 0; i < 5; i++) { /* ... */ }

for (const item of array) { /* values */ }
for (const key in object) { /* keys — use with care on arrays */ }

while (condition) { /* ... */ }
do { /* ... */ } while (condition);
```

| Loop | Best for |
| --- | --- |
| `for` | Index-based iteration |
| `for...of` | Array/string values |
| `for...in` | Object keys (not array indices) |
| `while` / `do...while` | Unknown iteration count |

---

<a id="topic-6"></a>

## 6. Functions

### Function Declaration

```javascript
function add(a, b) {
  return a + b;
}
```

Hoisted — can be called before definition in same scope.

### Function Expression

```javascript
const multiply = function (a, b) {
  return a * b;
};
```

Not hoisted.

### Arrow Function

```javascript
const divide = (a, b) => a / b;
const square = x => x * x;
const greet = () => console.log("Hi");
```

- Shorter syntax
- No own `this` — inherits from enclosing scope
- No `arguments` object

### Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

### Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

Replaces legacy `arguments` object.

### Callback

Function passed as argument to another function.

```javascript
[1, 2, 3].forEach(n => console.log(n));
```

**Interview one-liner:** Arrow functions don't bind their own `this`; use regular functions when `this` matters.

---

<a id="topic-7"></a>

## 7. Scope & Closures

### Scope Types

| Scope | Where variables live |
| --- | --- |
| **Global** | Entire program |
| **Function** | Inside function body (`var`) |
| **Block** | Inside `{ }` (`let`, `const`) |

### Closure

A function that **remembers variables** from its outer scope even after the outer function has finished.

```javascript
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const inc = counter();
inc(); // 1
inc(); // 2
```

**Use cases:** data privacy, factory functions, event handlers, React hooks pattern.

**Interview one-liner:** A closure is a function plus its remembered lexical environment.

---

<a id="topic-8"></a>

## 8. The `this` Keyword

`this` refers to the **execution context** — who called the function.

| Context | `this` value |
| --- | --- |
| Global (non-strict) | `window` / `global` |
| Object method | The object |
| Arrow function | Lexical `this` from parent scope |
| `call` / `apply` / `bind` | Explicitly set |

```javascript
const user = {
  name: "Akash",
  greet() { console.log(this.name); }
};
user.greet(); // "Akash"

const greet = user.greet;
greet(); // undefined (lost context)

const bound = user.greet.bind(user);
bound(); // "Akash"
```

**Interview one-liner:** `this` depends on **how** a function is called, not where it is defined (except arrow functions).

---

<a id="topic-9"></a>

## 9. Objects & Prototypes

### Object Literals

```javascript
const person = {
  name: "Akash",
  age: 25,
  greet() {
    return `Hi, ${this.name}`;
  }
};

person.name;       // dot notation
person["age"];     // bracket notation
```

### Prototype Chain

Every object has an internal `[[Prototype]]`. Property lookup walks up the chain.

```javascript
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
dog.eats; // true (from prototype)
```

### Object Methods

| Method | Purpose |
| --- | --- |
| `Object.keys(obj)` | Own enumerable keys |
| `Object.values(obj)` | Own enumerable values |
| `Object.assign(target, source)` | Shallow merge |
| `Object.freeze(obj)` | Prevent changes |

**Interview one-liner:** JS uses **prototypal inheritance** — objects inherit from other objects via the prototype chain.

---

<a id="topic-10"></a>

## 10. Arrays & Array Methods

### Creating Arrays

```javascript
const nums = [1, 2, 3];
const empty = [];
```

### Essential Methods

| Method | Returns | Purpose |
| --- | --- | --- |
| `push` / `pop` | Length / removed item | Add/remove end |
| `shift` / `unshift` | Removed / length | Add/remove start |
| `map` | New array | Transform each item |
| `filter` | New array | Keep items matching condition |
| `reduce` | Single value | Accumulate to one result |
| `find` | Item or `undefined` | First match |
| `findIndex` | Index or `-1` | Index of first match |
| `some` / `every` | Boolean | Any / all match |
| `includes` | Boolean | Contains value |
| `slice` | New array | Copy portion (non-mutating) |
| `splice` | Removed items | Add/remove in place (mutating) |

### Examples

```javascript
const doubled = [1, 2, 3].map(n => n * 2);        // [2, 4, 6]
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

const sum = [2, 4, 5, 6].reduce((acc, n) => acc + n, 0); // 17
```

**Interview one-liner:** `map` transforms, `filter` selects, `reduce` accumulates — all return new data without mutating (when used correctly).

---

<a id="topic-11"></a>

## 11. Strings & Template Literals

### String Basics

```javascript
const s = "Hello";
s.length;           // 5
s.toUpperCase();    // "HELLO"
s.includes("ell");  // true
s.split(" ");       // ["Hello"]
```

### Template Literals

```javascript
const name = "Akash";
const msg = `Hello, ${name}!`;
const multi = `Line 1
Line 2`;
```

### Common Methods

| Method | Purpose |
| --- | --- |
| `trim()` | Remove whitespace |
| `replace()` / `replaceAll()` | Replace text |
| `startsWith()` / `endsWith()` | Prefix/suffix check |
| `slice(start, end)` | Extract substring |

---

<a id="topic-12"></a>

## 12. Destructuring, Spread & Rest

### Destructuring

```javascript
const [a, b] = [1, 2];
const { name, age } = person;
const { name: userName } = person; // rename
```

### Spread `...`

Expands array/object into individual elements.

```javascript
const arr2 = [...arr1, 4, 5];
const user2 = { ...user, city: "Mumbai" };
```

### Rest `...`

Collects remaining items into array/object.

```javascript
function log(first, ...rest) { console.log(rest); }
const { name, ...otherProps } = user;
```

### Immutable Updates

Never mutate — always copy then modify (critical for React state).

```javascript
const updated = { ...obj, address: "Mumbai" };
const newArr = [...arr, "c"];
```

**Interview one-liner:** Spread expands; rest collects — both use `...` syntax in different positions.

---

<a id="topic-13"></a>

## 13. ES Modules

Split code into separate files with `import` / `export`.

```javascript
// math.js
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add } from "./math.js";
```

| Export | Import |
| --- | --- |
| `export const x` | `import { x } from './file'` |
| `export default fn` | `import fn from './file'` |

**Note:** In HTML use `<script type="module">`. Node.js uses `"type": "module"` in `package.json`.

---

<a id="topic-14"></a>

## 14. Classes (ES6)

Syntactic sugar over prototypes.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, age, eid) {
    super(name, age);
    this.eid = eid;
  }
}
```

| Feature | Syntax |
| --- | --- |
| Constructor | `constructor()` |
| Methods | Inside class body |
| Inheritance | `extends` + `super()` |
| Static | `static method() {}` |

**Interview one-liner:** ES6 classes are prototype-based inheritance with cleaner syntax — not like Java/C# classes internally.

---

<a id="topic-15"></a>

## 15. Error Handling

```javascript
try {
  const data = JSON.parse(invalidJson);
} catch (error) {
  console.error("Parse failed:", error.message);
} finally {
  console.log("Always runs");
}
```

### Throw Custom Errors

```javascript
if (!email) throw new Error("Email is required");
```

| Block | Purpose |
| --- | --- |
| `try` | Code that may fail |
| `catch` | Handle the error |
| `finally` | Cleanup — runs always |

---

<a id="topic-16"></a>

## 16. Asynchronous JavaScript

JavaScript is **single-threaded** — async code avoids blocking the main thread.

### Callback (legacy)

```javascript
setTimeout(() => console.log("Done"), 1000);
```

Callback hell when nested deeply.

### Promise

Represents future value — `pending` → `fulfilled` or `rejected`.

```javascript
fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));
```

### async / await

Syntactic sugar over Promises — cleaner async code.

```javascript
async function loadUsers() {
  try {
    const res = await fetch("/api/users");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```

| Concept | Meaning |
| --- | --- |
| **Callback** | Function passed to run later |
| **Promise** | Object representing async result |
| **async/await** | Write async code like synchronous |

**Interview one-liner:** Promises fix callback hell; `async/await` makes Promise chains readable.

---

<a id="topic-17"></a>

## 17. DOM Manipulation

The **DOM** is the browser's tree representation of HTML.

### Selecting Elements

```javascript
document.getElementById("root");
document.querySelector(".title");
document.querySelectorAll("li");
```

### Changing Content & Attributes

```javascript
el.textContent = "Hello Akash";
el.innerHTML = "<strong>Hi</strong>";
el.classList.add("active");
el.setAttribute("data-id", "1");
```

### Events

```javascript
button.addEventListener("click", (e) => {
  console.log("Clicked", e.target);
});
```

| Method | Purpose |
| --- | --- |
| `createElement` | Create new node |
| `appendChild` | Add child node |
| `remove` | Remove node |
| `addEventListener` | Handle user events |

**Interview one-liner:** DOM APIs let JS read and modify the page structure, content, and respond to user events.

---

<a id="topic-18"></a>

## 18. JSON, Fetch & Web Storage

### JSON

JavaScript Object Notation — text format for data exchange.

```javascript
const obj = { name: "Akash", age: 25 };
const json = JSON.stringify(obj);
const parsed = JSON.parse(json);
```

### Fetch API

Modern way to make HTTP requests in the browser.

```javascript
const res = await fetch("https://api.example.com/users");
const users = await res.json();
```

### Web Storage

| API | Scope | Lifetime |
| --- | --- | --- |
| `localStorage` | Same origin | Until cleared |
| `sessionStorage` | Same tab | Until tab closed |

```javascript
localStorage.setItem("token", "abc123");
localStorage.getItem("token");
localStorage.removeItem("token");
```

---

<a id="topic-19"></a>

## 19. Modern ES6+ Features

Quick reference for features you'll use daily.

| Feature | Example |
| --- | --- |
| **Arrow functions** | `(x) => x * 2` |
| **Template literals** | `` `Hello ${name}` `` |
| **Default params** | `fn(x = 1)` |
| **Rest/spread** | `[...arr]`, `{ ...obj }` |
| **Destructuring** | `const { a } = obj` |
| **Modules** | `import` / `export` |
| **Classes** | `class Foo extends Bar` |
| **Promises** | `new Promise((res, rej) => {})` |
| **async/await** | `await fetch()` |
| **Optional chaining** | `obj?.prop?.nested` |
| **Nullish coalescing** | `value ?? "default"` |
| **Map / Set** | Key-value / unique values collections |

### Map vs Object

| | Object | Map |
| --- | --- | --- |
| Keys | String/Symbol | Any type |
| Size | Manual | `.size` property |
| Iteration | Requires `Object.keys` | Directly iterable |

**Interview one-liner:** ES6+ added modules, classes, arrow functions, promises, and destructuring — modern JS baseline for React/Node.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

| Topic | Key Points |
| --- | --- |
| JS vs ECMAScript | JS = language; ES = standard spec |
| var vs let vs const | Block scope, hoisting, TDZ — prefer const |
| `==` vs `===` | Strict equality avoids type coercion |
| Hoisting | Declarations lifted; let/const in TDZ until initialized |
| Closure | Inner function remembers outer scope variables |
| `this` | Depends on call site; arrow functions use lexical `this` |
| Prototype | Objects inherit via prototype chain |
| map / filter / reduce | Transform / select / accumulate arrays |
| Spread vs rest | Spread expands; rest collects — same `...` syntax |
| Event loop | Call stack + task queue — async callbacks run after sync code |
| Promise states | pending → fulfilled or rejected |
| async/await | Syntactic sugar over Promises |
| DOM | Tree of HTML nodes; JS can read/update via APIs |
| JSON | `stringify` / `parse` for data exchange |
| ES Modules | `import` / `export` for file-based modules |

**Suggested learning order:** Basics → variables/types → operators → control flow → functions → scope/closures → objects/arrays → ES6+ → async → DOM/APIs.

**One-liner:** Master JavaScript fundamentals first — types, functions, closures, and async — before frameworks like React or Node.
