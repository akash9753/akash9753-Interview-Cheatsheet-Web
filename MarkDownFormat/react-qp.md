<h1 style="color:#2563eb;">React QP — Questpond ReactJS Course Notes</h1>

## Goal

<p style="color:#374151;">
Day-wise notes from the <strong style="color:#16a34a;">Questpond ReactJS</strong> course — JavaScript fundamentals, React components, hooks, routing, Formik, Axios, Context API, Redux, JWT auth, and interview topics.
</p>

---

## Lab Requirements

- **Node.js**
- **VS Code**
- **Visual Studio Community Edition 2022**

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#day-1"><span style="color:#2563eb;font-weight:700;">Day 1</span> — JavaScript, Node.js, React Intro, var/let, Hoisting</a></li>
  <li><a href="#day-2"><span style="color:#2563eb;font-weight:700;">Day 2</span> — arguments, reduce, ES Modules, Vite, Webpack, NPM</a></li>
  <li><a href="#day-3"><span style="color:#16a34a;font-weight:700;">Day 3</span> — JSX, Fragments, Data Binding, useState, Virtual DOM, Components</a></li>
  <li><a href="#day-4"><span style="color:#16a34a;font-weight:700;">Day 4</span> — useRef, useEffect</a></li>
  <li><a href="#day-5"><span style="color:#16a34a;font-weight:700;">Day 5</span> — Bootstrap, Props, Parent–Child Data, React Router</a></li>
  <li><a href="#day-6"><span style="color:#7c3aed;font-weight:700;">Day 6</span> — useParams, useNavigate, useLocation, Lazy Loading</a></li>
  <li><a href="#day-7"><span style="color:#7c3aed;font-weight:700;">Day 7</span> — Immutability, Controlled vs Uncontrolled Forms</a></li>
  <li><a href="#day-8"><span style="color:#7c3aed;font-weight:700;">Day 8</span> — Formik & Yup Validation</a></li>
  <li><a href="#day-9"><span style="color:#dc2626;font-weight:700;">Day 9</span> — Axios, CRUD Operations</a></li>
  <li><a href="#day-10"><span style="color:#dc2626;font-weight:700;">Day 10</span> — Context API</a></li>
  <li><a href="#day-11"><span style="color:#dc2626;font-weight:700;">Day 11</span> — Functional vs Class Components</a></li>
  <li><a href="#day-12"><span style="color:#ea580c;font-weight:700;">Day 12</span> — Redux — Action, Reducer, Store, Dispatch</a></li>
  <li><a href="#day-13"><span style="color:#ea580c;font-weight:700;">Day 13</span> — Redux Toolkit Implementation Steps</a></li>
  <li><a href="#day-14"><span style="color:#ea580c;font-weight:700;">Day 14</span> — JWT Authentication with Redux</a></li>
  <li><a href="#day-15"><span style="color:#0891b2;font-weight:700;">Day 15</span> — Axios Interceptor, Memo, Error Boundary, Interview Qs</a></li>
</ul>

---

<a id="day-1"></a>

## Day 1 — JavaScript, Node.js & React Intro

### JavaScript Basics

- JavaScript is a **dynamic scripting language**
- Interpreted at client side by the **V8 engine**
- **JS / ES / ECMAScript** — standard for scripting language
- **HTML** — W3C standard

```javascript
var i = 10;
i = 'pradeep';
i = true;
let i = 1;
```

### var vs let

| Keyword | Scope | Hoisting |
| --- | --- | --- |
| `var` | Global / function scope | Supports hoisting |
| `let` | Block scope | Does not support hoisting |

### Hoisting

Scans the code and moves the declaration to the top:

```javascript
console.log(i);
var i = 10;
```

### Node.js

- JavaScript **runtime environment**
- Cross platform, open source
- Tool: **npm** (Node Package Manager)

### React.js

- Library for developing **reusable UI components**
- Known for speed, scalability, simplicity
- Developed by **Facebook (Meta)**

### Array Operators

| Operator | Purpose |
| --- | --- |
| `map()` | Transform each item in the array; can modify objects |
| Spread `...` | Expanding an array |
| Rest `...` | Collect values into an array |

---

<a id="day-2"></a>

## Day 2 — arguments, reduce, Modules, Vite, Webpack & NPM

### arguments Object

```javascript
function callFn() {
  console.log(arguments[0]);
}
```

`arguments` — built-in object containing array of args passed to a function.

### reduce()

Iterates through the array and returns a **single value**:

```javascript
let numbers = [2, 4, 5, 6, 7, 7];
const sum = numbers.reduce((result, current) => {
  return result + current;
});
```

### ES Modules

Modules allow you to break up code into separate files.

```javascript
// person.js
import { Person, add } from "./person.js";

class Employee {
  constructor(eid) {
    this.EmployeeId = eid;
  }

  showEmployeeInfo() {
    let person = new Person(101, 'test person');
    person.personId = 102;
    person.showInfo();
    alert('Hello');
    add(1, 2);
  }
}
export default Employee;
```

### Evolution of React.js

| Version | Year |
| --- | --- |
| 0.3.0 – 0.8.0 | 2013 |
| v15 | 2016 |
| v16 | 2017 |
| v17 | 2020 |
| v18 | 2022 |
| v19 | 5 Dec 2024 |

### Vite

- Build tool for **faster development**
- Creates scaffolded project
- Spins up dev server faster with **HMR** (Hot Module Replacement)
- Bundles code into ES standard

```bash
npm create vite@latest myapp -- --template react
cd myapp
npm install
npm run dev
```

### Webpack

Webpack is a **JavaScript module bundler**.

It takes many project files like:

- JavaScript
- CSS
- Images
- Fonts

And bundles them into optimized files like:

- `bundle.js`
- `style.css`

#### Why Webpack is used?

- Combines many files into one/few files
- Improves app loading speed
- Reduces HTTP requests
- Supports ES6/TypeScript using Babel/loader
- Minifies code for production
- Handles CSS, images, fonts also

#### Main Concepts

| Concept | Description | Example |
| --- | --- | --- |
| **Entry** | Starting file of app | `index.js` |
| **Output** | Final generated bundled file | `bundle.js` |
| **Loaders** | Convert/process files | CSS, TypeScript, images |
| **Plugins** | Extra tasks — HTML generation, minification | — |
| **Mode** | Build environment | `development` or `production` |

#### Simple Flow

```text
Source Files (JS + CSS + Images)
              ↓
           Webpack
              ↓
    Optimized Bundle (bundle.js)
```

#### Similar Tools

Vite, Parcel, Rollup, esbuild, SWC, Turbopack

**Interview one-liner:** Webpack is a JavaScript module bundler that combines JavaScript, CSS, images, and other assets into optimized bundles for faster web application loading.

### NPM (Node Package Manager)

- Download or share JS/CSS packages from public repository
- Resolves inter-dependencies
- Reads `package.json`

---

<a id="day-3"></a>

## Day 3 — JSX, Data Binding, useState & Components

### npm run dev

Starts a live development server — dynamically transforms JSX into ES modules.

### JSX

- Mix of HTML and JavaScript
- Type safe
- Follows **camelCasing** convention
- Helps create Virtual DOM and render HTML

### React Fragment

React needs to render only **one root element**:

```jsx
<div></div>
<></>
<React.Fragment></React.Fragment>
```

### StrictMode

`<StrictMode>` — helper component that warns about deprecated code and identifies risks. Works in **development** only.

### Data Binding

Mechanism to bind data values into HTML elements. React supports **one-way binding** by default.

| Type | Example |
| --- | --- |
| One-way binding | `{value}` |
| Event binding | `<input type="button" onClick={(e) => handleClick(e, 'Hello')} />` |
| Two-way binding | `const [fullName, setFullName] = useState('pradeep shet');` |

### useState()

Used to maintain state of an object.

### Virtual DOM

- Lightweight memory representation of the **real DOM tree**
- Maintains 2 DOM trees; based on comparison, syncs changes to Real DOM

### Component

Reusable code with HTML and JavaScript defining a specific part of the UI.

| Approach | Description |
| --- | --- |
| Function Component | Function returning JSX |
| Class Component | Class extending `React.Component` with `render()` |

---

<a id="day-4"></a>

## Day 4 — useRef & useEffect

### useRef

React Hook that lets you reference a value or DOM element.

```jsx
<input type="text" ref={addressRef} />
// addressRef.current.value = "Mumbai";
```

Refs are used for getting reference to a DOM node or component instance.

### useEffect

Runs code at a specific time based on dependencies. Automatically triggers when state changes.

```jsx
useEffect(() => {
  // effect logic
}, [dependencies]);
```

---

<a id="day-5"></a>

## Day 5 — Bootstrap, Props & React Router

### Bootstrap

```bash
npm install bootstrap@5.4 --save
```

Framework for designing responsive UI — `container`, `row`, `col`, `table`, `form-select`, `form-group`, `form-control`, `btn`.

### Parent → Child Data Flow

1. Add parent component `<Search />`
2. Add child `<ProductList />` inside parent
3. Pass data via child attributes:

```jsx
<ProductList selectedCat={selectedCategory} myname="pradeep" />
```

4. Read in child via `props`:

```jsx
function ProductList(props) {
  const cat = props.selectedCat;
}
```

### Child → Parent Data Flow

1. Add method in parent:

```jsx
const onUpdateCount = (message) => {
  setTotalRecords('Total Count:' + message);
};
```

2. Pass callback to child:

```jsx
<ProductList onNotify={(event) => onUpdateCount(event)} />
```

3. Call from child:

```jsx
onNotify(filtered.length);
```

### Routing

Serving a web page/component based on request URL (matching).

```bash
npm install react-router-dom --save
```

### Steps to Implement Routing

1. Create `<Layout />` with `<BrowserRouter>` — tracks history and location, enables navigation
2. Define routes inside `BrowserRouter`:

```jsx
<Routes>
  <Route path="/databinding/:id" element={<Databinding />} />
</Routes>
```

`Routes` — container holding all `Route` elements; only one route rendered at a time.

3. Create Navbar with `<NavLink />`:

```jsx
<NavLink to="/databinding">Databinding</NavLink>
```

---

<a id="day-6"></a>

## Day 6 — Route Hooks & Lazy Loading

### useParams()

Read route parameters:

```jsx
const { id } = useParams();
```

### useNavigate()

Navigate from one route to another:

```jsx
const navigate = useNavigate();
```

### useLocation()

Read query string parameters:

```jsx
const loc = useLocation();
const queryParam = new URLSearchParams(loc.search);
const city = queryParam.get('city');
const country = queryParam.get('country');
```

### Lazy Loading

Download component on demand based on requested URL.

```jsx
const Databinding = lazy(() => import('./Databinding'));

<Suspense fallback={<div>Loading......</div>}>
  <Routes>
    <Route path="/databinding" element={<Databinding />} />
  </Routes>
</Suspense>
```

`<Suspense>` shows fallback until component is downloaded.

---

<a id="day-7"></a>

## Day 7 — Immutability & Forms

### Immutability in JavaScript

JavaScript objects/arrays are **mutable** by default. To update immutably, make copies and modify the copy.

```javascript
// Copy object & overwrite/extend property
const obj1Copy = {
  ...obj1, personId: 2, address: 'mumbai'
};

const arr1 = ['a', 'b'];
const arr1Copy = [...arr1, 'c'];
const arr2Copy = arr1.concat('d');
```

### Uncontrolled Form

Form elements (`<input>`, `<textarea>`, `<select>`) do **not** store state in React — rely on the DOM. Use **refs** to access values directly.

### Controlled Form

Form elements **do** store their state in React (via `useState` or similar).

| Type | State stored in | Access values via |
| --- | --- | --- |
| Uncontrolled | DOM | `ref.current.value` |
| Controlled | React state | `value` + `onChange` |

---

<a id="day-8"></a>

## Day 8 — Formik & Yup

### Formik

Lightweight React form library — simplifies form state management, validation, and submission.

```bash
npm install formik --save
npm install yup --save
```

### Steps to Implement Formik

1. Define initial model and handle submit:

```jsx
const initialProductForm = {
  productId: 0,
  productCode: "",
  productName: "",
  price: "",
  category: ""
};

<Formik
  initialValues={initialProductForm}
  onSubmit={(frm) => handleSaveProduct(frm)}
  enableReinitialize={true}>
</Formik>
```

2. Add input elements with `<Field />` — `frm` tracks all control states. `name` attribute must match model property.

3. Add Yup validation schema:

```jsx
const productValidationSchema = Yup.object({
  productId: Yup.number().min(0, 'Product Id is mandatory'),
  productCode: Yup.string().required('Product code is mandatory'),
  price: Yup.string()
    .required('Product Price is mandatory')
    .matches(/^\d+(\.\d{1,2})?$/, "Product Price is Invalid")
});
```

Add to Formik: `validationSchema={productValidationSchema}`

4. Show errors with `<ErrorMessage />`:

```jsx
<ErrorMessage component="label" className="text-danger" name="productCode" />
```

---

<a id="day-9"></a>

## Day 9 — Axios & CRUD

### Axios

```bash
npm install axios --save
```

- JS library for HTTP requests from browser
- **Interceptor** feature — intercept req/resp for custom logic (e.g. passing headers)
- Ability to **cancel** requests

### CRUD Operations

Create, Read, Update, Delete — standard API operations with Axios.

---

<a id="day-10"></a>

## Day 10 — Context API

### Context API

- Pass data through component tree **without prop drilling**
- Useful for global state — user authentication, session management

### Steps to Implement

1. **Create context:**

```jsx
export const UserContext = createContext(null);
```

2. **Create Provider component:**

```jsx
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

3. **Wrap app in Layout.jsx or App.jsx:**

```jsx
<UserProvider>
  <Navbar />
  <Suspense fallback={<div>Loading......</div>}>
    <Routes>
      <Route path="/databinding" element={<Databind />} />
    </Routes>
  </Suspense>
</UserProvider>
```

4. **Consume in child with useContext:**

```jsx
const { currentUser } = useContext(UserContext);
```

---

<a id="day-11"></a>

## Day 11 — Functional vs Class Components

### Component Types

| Type | Structure |
| --- | --- |
| Functional Component | Function returning JSX |
| Class Component | Class extending `React.Component` with `render()` returning JSX |
| Functional TypeScript Component | Typed functional component |

### Comparison

| Feature | Functional | Class |
| --- | --- | --- |
| State | `useState()` | `this.state` & `this.setState()` |
| Lifecycle | `useEffect` variants | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` |
| Refs | `useRef()` | `React.createRef()` |

### useEffect Variants

```jsx
useEffect(() => {}, []);           // mount only
useEffect(() => {}, [deps]);       // run when deps change
useEffect(() => { return () => {} }, [deps]);  // cleanup on unmount/deps change
```

---

<a id="day-12"></a>

## Day 12 — Redux Concepts

### Redux

Single centralized way for maintaining **global state**. Follows a specific pattern to update state.

### Action

JavaScript object with a **type** and **payload**:

```javascript
// FILTERPRODUCT, payload: { searchText: "sdas", category: "1" }

export const ProductAction = {
  FilterProduct: createAction("product/FILTERPRODUCT"),
  SetCategory: createAction("product/setCategory"),
};
```

### Reducer

Function receiving current state and action — updates state and returns new state. Acts like an event listener.

```javascript
const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FILTERPRODUCT, (state, action) => {
      state.filteredProducts = action.payload.cat
        ? state.products.filter(f => f.category == action.payload.cat)
        : state.products;
    })
    .addCase(ADDPRODUCT, (state, action) => {
      // add product logic
    });
});
```

### Store

Maintains current state:

```javascript
const store = configureStore({
  reducer: {
    productReducer,
    categoryReducer
  }
});
```

### Dispatch

Only way to pass action to store:

```javascript
store.dispatch(FILTERPRODUCT({ category: e.target.value }));
```

---

<a id="day-13"></a>

## Day 13 — Redux Toolkit Implementation

### Steps

1. **Install packages:**

```bash
npm install @reduxjs/toolkit react-redux
```

2. **Create action file:**

```javascript
export const ProductAction = {
  FilterProduct: createAction("product/FILTERPRODUCT"),
  SetCategory: createAction("product/setCategory"),
  SetSearchText: createAction("product/setSearchText"),
};
```

3. **Create reducer file:**

```javascript
const initialState = {
  products: [...productList],
  filteredProducts: [],
  message: "",
  selectCategory: "",
  searchText: ""
};

const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(ProductAction.Reset, (state, action) => {
    state.searchText = "";
    state.filteredProducts = state.products;
    state.selectCategory = "";
  });
});
```

4. **Create store:**

```javascript
const store = configureStore({
  reducer: {
    productReducer,
    categoryReducer
  }
});
```

5. **Wrap app in Provider (main.jsx):**

```jsx
<Provider store={store}>
  <App />
</Provider>
```

6. **Dispatch actions:**

```javascript
store.dispatch(ProductAction.SetSearchText(e.target.value));
```

7. **Read state with useSelector:**

```jsx
const filteredProducts = useSelector(state => state.productReducer.filteredProducts);
```

---

<a id="day-14"></a>

## Day 14 — JWT Authentication with Redux

Enable **JWT-based authentication** and integrate with Redux store.

- Store token in Redux state or secure storage
- Attach Bearer token via Axios interceptor on every API call
- Protect routes based on auth state
- Login/logout flows update Redux + Context as needed

---

<a id="day-15"></a>

## Day 15 — Interceptors, Memo, Error Boundary & Interview Qs

### Axios Interceptor

Intercepts request and response **before** hitting the server. Major use case: pass **Bearer Token** in every header.

### Memoization

Performance optimization — stores result of expensive function calls and returns cached result when same inputs occur again.

| API | Used For | Prevents |
| --- | --- | --- |
| `React.memo(Component)` | Memoizing components | Re-rendering child components |
| `useMemo(() => value, [deps])` | Memoizing computed values | Recomputing expensive values |
| `useCallback(() => fn, [deps])` | Memoizing functions | Re-creating function instances |

### Error Boundary

React components can throw runtime errors that break the UI (white screen). Error boundaries handle errors gracefully and display a fallback view.

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log error to DB via API
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

Wrap `<App />` in `main.jsx` with `<ErrorBoundary>`.

---

## Interview Quick Answers

| Topic | Key Points |
| --- | --- |
| Virtual DOM | Lightweight JS representation of UI; diffed before updating real DOM |
| Hooks | `useState`, `useContext`, `useEffect`, `useMemo`, `useCallback`, `useRef` |
| useEffect deps | No deps = every render; `[]` = mount only; `[deps]` = when deps change |
| useContext | Login, theme — eliminates prop drilling |
| Fragments | `<>...</>` — single parent without extra DOM node |
| StrictMode | Dev-only warnings for deprecated/unsafe patterns |
| Formik & Yup | Form state + schema validation |
| Controlled vs Uncontrolled | React state vs DOM refs |
| Webpack | JS module bundler — entry, output, loaders, plugins; bundles JS/CSS/images into optimized files |
| Lazy loading | `lazy()` + `Suspense` — code splitting on demand |
| Routing | `BrowserRouter`, `Routes`, `Route`, `NavLink` |
| Props vs State | Props from parent (read-only); state internal to component |
| Redux lifecycle | Action → Dispatch → Reducer → Store → useSelector |
| Mutable vs Immutable | Copy with spread/concat before modifying |
| Functional vs Class | Hooks vs lifecycle methods |
| Interceptor | Attach token / log requests before API call |
| Axios vs fetch | Axios has interceptors, cancel, auto JSON |
| Error Boundary | Class component catching child render errors |

**One-liner:** React QP covers the full stack from JS basics → Vite → hooks → routing → Formik → Axios → Context → Redux → JWT → memoization and error boundaries — everything Questpond Day 1–15 in one place.
