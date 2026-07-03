<h1 style="color:#2563eb;">React QP — React Learning Roadmap</h1>

## Goal

<p style="color:#374151;">
Structured <strong style="color:#16a34a;">React learning sequence</strong> — setup, JSX, components, Virtual DOM, hooks, routing, forms, API integration, Context, Redux, auth, performance, and interview topics. Based on Questpond course notes, reorganized for standard React progression.
</p>

---

## Setup

- **Node.js** + **npm**
- **VS Code**

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> React Intro, SPA & Setup (Babel, Webpack, Parcel, Vite)</a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> JSX, Fragments & StrictMode</a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> Components — Functional vs Class</a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> Virtual DOM, Fiber & Reconciliation</a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> Props, State & Data Binding</a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> useRef & useEffect vs Lifecycle</a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> Parent–Child Communication & UI Styling</a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> Forms — Controlled, Uncontrolled & Immutable State</a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> Formik & Yup Validation</a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> React Router, Lazy Loading & Code Splitting</a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> Context API</a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> Axios, CRUD & Interceptors</a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> Redux & Redux Toolkit</a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> JWT Authentication</a></li>
  <li><a href="#topic-15"><span style="color:#ea580c;font-weight:700;">15.</span> Performance — memo, useMemo, useCallback</a></li>
  <li><a href="#topic-16"><span style="color:#0891b2;font-weight:700;">16.</span> Error Boundaries</a></li>
  <li><a href="#interview-quick-answers"><span style="color:#9333ea;font-weight:700;">Guide:</span> Interview Quick Answers</a></li>
</ul>

---

<a id="topic-1"></a>

## 1. React Intro, SPA & Project Setup

### What is React?

- Library for developing **reusable UI components**
- Known for speed, scalability, simplicity
- Developed by **Meta (Facebook)**
- **Declarative** — describe UI for a given state; React updates the DOM

### Single Page Application (SPA)

One HTML page — JavaScript handles navigation without full page reload.

### React Version History

| Version | Year |
| --- | --- |
| 0.3.0 – 0.8.0 | 2013 |
| v15 | 2016 |
| v16 (Fiber) | 2017 |
| v17 | 2020 |
| v18 (Concurrent) | 2022 |
| v19 | Dec 2024 |

### NPM (Node Package Manager)

- Install and share packages from npm registry
- Resolves dependencies from `package.json`

### Babel vs Parcel vs Webpack vs Vite

| Feature | Babel | Parcel | Webpack | Vite |
| --- | --- | --- | --- | --- |
| **What is it?** | Compiler / Transpiler | Zero-config Bundler | Module Bundler | Build Tool + Bundler |
| **Main purpose** | Convert JS / JSX | Bundle project | Bundle project files | Fast dev & production build |
| **Bundles files** | No | Yes | Yes | Yes |
| **Converts JSX** | Yes | Yes | Yes | Yes |
| **Dev speed** | N/A | Fast | Slower | Very fast |
| **Production build** | No | Yes | Yes | Yes (Rollup) |
| **Configuration** | Minimal | Zero | Complex | Simple |
| **Tree shaking** | No | Yes | Yes | Yes |
| **HMR** | No | Yes | Yes | Very fast |
| **Best for** | JS / JSX compilation | Small apps | Enterprise / large apps | Modern React / Vue apps |

### Babel

**Purpose:** Converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript.

**Input:**

```jsx
const element = <h1>Hello</h1>;
```

**Output:**

```javascript
const element = React.createElement("h1", null, "Hello");
```

| Pros | Cons |
| --- | --- |
| Converts JSX | Does not bundle files |
| Supports latest JavaScript | Needs Webpack, Vite, or Parcel alongside |
| Browser compatibility (polyfills via plugins) | Only transforms code — not a dev server |

**Remember:** Babel **converts** code — it does not serve or bundle your app.

### Webpack

**Purpose:** Bundles JavaScript, CSS, images, and fonts into optimized files (`bundle.js`, `style.css`).

#### Main Concepts

| Concept | Description | Example |
| --- | --- | --- |
| **Entry** | Starting file of app | `index.js` |
| **Output** | Final bundled file | `bundle.js` |
| **Loaders** | Convert/process files | CSS, TypeScript, images |
| **Plugins** | HTML generation, minification | — |
| **Mode** | Build environment | `development` / `production` |

| Pros | Cons |
| --- | --- |
| Powerful and highly configurable | Complex `webpack.config.js` |
| Large plugin ecosystem | Slower dev server than Vite |
| Tree shaking, code splitting | Steeper learning curve |

```text
Source Files (JS + CSS + Images) → Webpack → Optimized Bundle
```

**Remember:** Webpack **bundles** files — often used **with Babel** for JSX/ES6 conversion.

### Parcel

**Purpose:** Zero-configuration bundler — works out of the box with minimal setup.

| Pros | Cons |
| --- | --- |
| No configuration required | Less flexible than Webpack |
| Easy setup for small projects | Smaller plugin ecosystem |
| Automatic optimization | Less common in large enterprise codebases |

**Remember:** Parcel **bundles with zero config** — good for quick prototypes.

### Vite — Create React Project

**Purpose:** Modern build tool optimized for fast development and lean production builds.

| Environment | Engine |
| --- | --- |
| **Development** | Native ES Modules + **esbuild** (or SWC) — instant server start |
| **Production** | **Rollup** — optimized, tree-shaken bundle |

```bash
npm create vite@latest myapp -- --template react
cd myapp
npm install
npm run dev
```

`npm run dev` starts a live dev server with **very fast HMR**.

| Pros | Cons |
| --- | --- |
| Extremely fast dev experience | Smaller plugin ecosystem than Webpack |
| Instant HMR | Some legacy packages need extra config |
| Simple configuration | — |

**Remember:** Vite = **fast dev** (esbuild) + **production bundling** (Rollup).

### Build Tool Workflows

**Create React App (CRA) — classic stack:**

```text
JSX
 ↓
Babel (transpile JSX + ES6)
 ↓
Webpack (bundle everything)
 ↓
bundle.js
 ↓
Browser
```

**Vite React App — modern stack:**

```text
Development:
JSX → esbuild / SWC → Vite Dev Server → Browser (native ESM)

Production:
Source → Rollup → Optimized build
```

### Easy Way to Remember

| Tool | One line |
| --- | --- |
| **Babel** | Converts code (JSX / ES6 → browser JS) |
| **Webpack** | Bundles files (configurable, enterprise-grade) |
| **Parcel** | Bundles files with zero configuration |
| **Vite** | Fast development + production bundling |

### Create Your First React App

Use Vite for new projects (recommended by React docs):

```bash
npm create vite@latest myapp -- --template react
npm install && npm run dev
```

| Question | Answer |
| --- | --- |
| React library or framework? | Library for UI — paired with router/state for full apps |
| Babel vs Webpack? | Babel transpiles; Webpack bundles — they work together |
| Vite vs Webpack? | Vite = faster dev (ESM + esbuild); Webpack = mature, highly configurable |
| What is HMR? | Hot Module Replacement — updates modules without full page reload |
| What is tree shaking? | Removes unused code from production bundle |

**Interview one-liners:**

- Babel converts modern JavaScript and JSX into browser-compatible JavaScript.
- Webpack bundles all project assets into optimized files.
- Parcel is a zero-configuration bundler.
- Vite is a modern build tool that uses esbuild for development and Rollup for production.

---

<a id="topic-2"></a>

## 2. JSX, Fragments & StrictMode

### JSX

- Mix of HTML-like syntax and JavaScript
- Follows **camelCase** for attributes (`className`, `onClick`)
- Compiles to `React.createElement()` calls
- Helps build the Virtual DOM tree

### JSX vs HTML

| Point | HTML | JSX |
| --- | --- | --- |
| Class | `class` | `className` |
| Inline styles | String | Object — `style={{ color: 'red' }}` |
| Self-closing | Optional for some | Required — `<img />` |
| Expressions | Not allowed | Allowed inside `{}` |

### Behind the Scenes

```jsx
<h1>Hello</h1>
```

becomes:

```javascript
React.createElement("h1", null, "Hello");
```

Virtual DOM object (conceptual):

```javascript
{ type: "h1", props: { children: "Hello" } }
```

### Why Can't a Component Return Two Elements?

JSX must be **one expression** representing one UI tree.

**Invalid:**

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

**Valid (wrapper div):**

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

### React Fragment

Fragment (`<>...</>`) acts as a single root **without** an extra DOM node.

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

**DOM output:**

```html
<h1>Hello</h1>
<p>Welcome</p>
```

Also: `<React.Fragment key={id}>...</React.Fragment>` when a `key` is needed.

**Interview one-liners:**

- JSX must return a single root element (one JavaScript expression).
- Fragment wraps multiple elements as one root without adding HTML to the DOM.

### StrictMode

`<StrictMode>` — dev-only helper that warns about deprecated APIs and unsafe patterns. Does not render visible UI.

---

<a id="topic-3"></a>

## 3. Components — Functional vs Class

### What is a Component?

Reusable UI unit — HTML + logic defining a specific part of the interface.

| Type | Structure |
| --- | --- |
| **Functional** | Function returning JSX |
| **Class** | Class extending `React.Component` with `render()` |
| **Functional + TypeScript** | Typed props and return type |

### Comparison

| Feature | Functional | Class |
| --- | --- | --- |
| State | `useState()` | `this.state` & `this.setState()` |
| Lifecycle | `useEffect` — see [Topic 6](#topic-6) | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` |
| Refs | `useRef()` | `React.createRef()` |

**Interview one-liner:** Modern React favors functional components with hooks; class components are legacy but still appear in Error Boundaries.

---

<a id="topic-4"></a>

## 4. Virtual DOM, Fiber & Reconciliation

### Virtual DOM

- Lightweight **JavaScript copy** of the Real DOM
- React updates Virtual DOM first, then commits minimal changes to Real DOM

### Real DOM

- Actual browser DOM — slower to update (re-render + repaint)

### React Update Flow

```jsx
function App() {
  const [name, setName] = useState("Hello");
  return <h1>{name}</h1>;
}

setName("Hello Akash");
```

**What happens:**

1. Component re-renders
2. New Virtual DOM created
3. **Diffing** compares old vs new Virtual DOM
4. **Reconciliation** finds changes
5. **Commit Phase** updates only changed Real DOM nodes
6. Browser repaints

### React Fiber

- Reconciliation engine (React 16+)
- Breaks rendering into small units
- Prioritizes urgent updates (e.g. user input)
- Can pause, resume, or cancel work

### Reconciliation & Diffing

| Term | Meaning |
| --- | --- |
| **Reconciliation** | Compare old vs new Virtual DOM after state/prop change |
| **Diffing** | Algorithm finding minimum DOM changes |
| **Commit Phase** | Apply only identified changes to Real DOM |

### Complete Workflow

```text
State/Props Change
        ↓
Component Re-renders
        ↓
New Virtual DOM Created
        ↓
React Fiber (Schedules & Prioritizes)
        ↓
Diffing (Old vs New Virtual DOM)
        ↓
Reconciliation
        ↓
Commit Phase → Real DOM
        ↓
Browser Repaint
```

### React vs Direct DOM Updates

| Approach | Flow |
| --- | --- |
| **Direct DOM** | Change data → update Real DOM → repaint |
| **React** | Change state → Virtual DOM → diff → commit → repaint |

**Interview one-liners:**

- Virtual DOM is a lightweight JS copy of the Real DOM.
- React Fiber schedules and prioritizes rendering work.
- Reconciliation compares old and new Virtual DOM trees.
- Diffing finds the minimum changes efficiently.
- Commit Phase applies only required Real DOM updates.

---

<a id="topic-5"></a>

## 5. Props, State & Data Binding

### Props

Data passed **from parent to child** — read-only in the child.

```jsx
<ProductList selectedCat={selectedCategory} title="Products" />

function ProductList(props) {
  const cat = props.selectedCat;
}
```

### State — useState()

Internal data a component owns and can change over time.

```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
```

Calling the setter triggers a re-render.

#### Direct update vs `prev =>` (functional update)

**Direct update** — pass the new value directly:

```jsx
setCount(count + 1);
setUser({ ...user, name: 'Akash' });
```

**Functional update** — pass a function; React calls it with the **latest previous state**:

```jsx
setCount(prev => prev + 1);
setUser(prev => ({ ...prev, name: 'Akash' }));
```

Here `prev` is the most recent state value React has — not necessarily the `count` variable from the current render closure.

#### Why use `prev =>`?

| Situation | Problem with direct update | Fix with `prev =>` |
| --- | --- | --- |
| Multiple updates in one event | `setCount(count + 1)` twice may only add 1 (same stale `count`) | `setCount(prev => prev + 1)` twice adds 2 |
| Async / delayed update | Closure may hold old state | `prev` is always latest when React applies the update |
| Object/array updates | Easy to overwrite with stale copy | `prev => ({ ...prev, field: value })` merges safely |

**Example — stale closure:**

```jsx
// Click once — count may become 1, not 2
setCount(count + 1);
setCount(count + 1);

// Click once — count becomes 2
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

**Example — toggle:**

```jsx
setIsOpen(prev => !prev);
```

**Interview one-liner:** `setState(prev => newValue)` uses the latest state from React; use it when the new state depends on the previous state, especially for multiple or async updates.

### Props vs State

| | Props | State |
| --- | --- | --- |
| Source | Parent | Component itself |
| Mutable by child? | No | Yes (via setter) |
| Use case | Configuration, callbacks | UI data, form values |

### One-way Binding

Data flows **State → UI** only.

```jsx
const [name, setName] = useState("Akash");
return <input value={name} readOnly />;
```

UI shows `name` but typing does **not** update state.

### Two-way Binding

Data flows **State ↔ UI**.

```jsx
const [name, setName] = useState("");
return (
  <input
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
);
```

- `value={name}` → state to UI
- `onChange` → UI to state

| Binding | Data flow |
| --- | --- |
| **One-way** | State changes update UI only |
| **Two-way** | State and UI stay in sync via `value` + `onChange` |

**Event binding:**

```jsx
<button onClick={(e) => handleClick(e, 'Hello')}>Click Me</button>
```

**Interview one-liner:** One-way = state → UI; two-way = state ↔ UI via controlled inputs.

---

<a id="topic-6"></a>

## 6. useRef & useEffect vs Lifecycle

### useRef

Reference a DOM node or persist a value across renders **without** causing re-render.

```jsx
const addressRef = useRef(null);

<input type="text" ref={addressRef} />
// addressRef.current.value = "Mumbai";
```

Use cases: focus input, read uncontrolled form values, store previous value.

### useEffect vs Class Lifecycle

`useEffect()` combines multiple class lifecycle methods.

#### 1. Component Did Mount — runs once after first render

```jsx
// Class
componentDidMount() { console.log("Mounted"); }

// Hook
useEffect(() => { console.log("Mounted"); }, []);
```

#### 2. Component Did Update — runs when deps change

```jsx
// Class
componentDidUpdate() { console.log("Updated"); }

// Hook
useEffect(() => { console.log("Updated"); }, [count]);
```

#### 3. Component Will Unmount — cleanup

```jsx
// Class
componentWillUnmount() { console.log("Cleanup"); }

// Hook
useEffect(() => {
  return () => { console.log("Cleanup"); };
}, []);
```

#### 4. Every Render

```jsx
useEffect(() => { console.log("Every render"); });
// No dependency array
```

#### Comparison

| Lifecycle Method | useEffect |
| --- | --- |
| `componentDidMount()` | `useEffect(() => {}, [])` |
| `componentDidUpdate()` | `useEffect(() => {}, [dependency])` |
| `componentWillUnmount()` | `return () => {}` inside `useEffect` |
| Mount + every update | `useEffect(() => {})` |

#### Dependency Array

| Array | When it runs |
| --- | --- |
| `[]` | Once on mount |
| `[count]` | When `count` changes |
| Omitted | After every render |

**Interview one-liner:** `useEffect` replaces mount, update, and unmount lifecycle methods using a dependency array and optional cleanup function.

---

<a id="topic-7"></a>

## 7. Parent–Child Communication & UI Styling

### Parent → Child

Pass data via props on the child component:

```jsx
<Search />
  <ProductList selectedCat={selectedCategory} />
</Search>
```

### Child → Parent

Pass a **callback** from parent; child invokes it with data:

```jsx
// Parent
const onUpdateCount = (message) => {
  setTotalRecords('Total Count: ' + message);
};
<ProductList onNotify={(count) => onUpdateCount(count)} />

// Child
onNotify(filtered.length);
```

| Direction | Mechanism |
| --- | --- |
| Parent → Child | Props |
| Child → Parent | Callback prop (`onNotify`, `onChange`) |

### Bootstrap (Optional UI)

```bash
npm install bootstrap@5.3 --save
```

Responsive layout classes: `container`, `row`, `col`, `table`, `form-control`, `btn`.

---

<a id="topic-8"></a>

## 8. Forms — Controlled, Uncontrolled & Immutable State

### Immutable State Updates

Never mutate state directly — always create a **new copy**:

```jsx
// Object
setUser({ ...user, address: 'Mumbai' });

// Array
setItems([...items, newItem]);
setItems(items.filter(i => i.id !== id));
```

React compares by reference — mutation skips re-render detection.

### Controlled Form

Form state lives in React (`useState`).

```jsx
const [email, setEmail] = useState("");
<input value={email} onChange={(e) => setEmail(e.target.value)} />
```

### Uncontrolled Form

DOM holds the value — read via **ref**:

```jsx
const inputRef = useRef();
<input ref={inputRef} defaultValue="" />
// inputRef.current.value
```

| Type | State stored in | Access |
| --- | --- | --- |
| **Controlled** | React state | `value` + `onChange` |
| **Uncontrolled** | DOM | `ref.current.value` |

**Interview one-liner:** Controlled forms sync with React state; uncontrolled forms use refs and the DOM.

---

<a id="topic-9"></a>

## 9. Formik & Yup Validation

### Formik

React form library — state management, validation, and submission in one place.

```bash
npm install formik yup --save
```

### Implementation Steps

1. **Define model and submit handler:**

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
  onSubmit={(values) => handleSaveProduct(values)}
  validationSchema={productValidationSchema}
  enableReinitialize={true}
>
  {/* form fields */}
</Formik>
```

2. **Fields** — use `<Field name="productCode" />`; `name` must match model property.

3. **Yup validation schema:**

```jsx
const productValidationSchema = Yup.object({
  productId: Yup.number().min(0, 'Product Id is mandatory'),
  productCode: Yup.string().required('Product code is mandatory'),
  price: Yup.string()
    .required('Product Price is mandatory')
    .matches(/^\d+(\.\d{1,2})?$/, "Invalid price")
});
```

4. **Show errors:**

```jsx
<ErrorMessage component="label" className="text-danger" name="productCode" />
```

**Interview one-liner:** Formik manages form state; Yup defines declarative validation schemas.

---

<a id="topic-10"></a>

## 10. React Router, Lazy Loading & Code Splitting

### Install

```bash
npm install react-router-dom --save
```

Routing serves the matching component based on URL.

### Setup Steps

1. Wrap app with `<BrowserRouter>` — tracks history and location
2. Define routes:

```jsx
<Routes>
  <Route path="/products/:id" element={<ProductDetail />} />
  <Route path="/products" element={<ProductList />} />
</Routes>
```

3. Navigation with `<NavLink to="/products">Products</NavLink>`

### Route Hooks

```jsx
const { id } = useParams();           // /products/:id
const navigate = useNavigate();       // navigate('/login')
navigate('/home');

const loc = useLocation();
const params = new URLSearchParams(loc.search);
const city = params.get('city');      // ?city=Mumbai
```

### Lazy Loading & Suspense

Load components on demand — reduces initial bundle size.

```jsx
const ProductDetail = lazy(() => import('./ProductDetail'));

<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/products/:id" element={<ProductDetail />} />
  </Routes>
</Suspense>
```

**Interview one-liner:** `lazy()` + `Suspense` = code splitting; route loads component only when needed.

---

<a id="topic-11"></a>

## 11. Context API

Pass data through the tree **without prop drilling** — ideal for auth, theme, locale.

### Steps

1. **Create context:**

```jsx
export const UserContext = createContext(null);
```

2. **Provider component:**

```jsx
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

3. **Wrap app:**

```jsx
<UserProvider>
  <BrowserRouter>
    <Routes>...</Routes>
  </BrowserRouter>
</UserProvider>
```

4. **Consume:**

```jsx
const { currentUser, setCurrentUser } = useContext(UserContext);
```

**Interview one-liner:** Context eliminates prop drilling for global data like login state or theme.

---

<a id="topic-12"></a>

## 12. Axios, CRUD & Interceptors

### Axios

```bash
npm install axios --save
```

HTTP client for browser — JSON handling, interceptors, request cancellation.

### CRUD Pattern

| Operation | HTTP | Example |
| --- | --- | --- |
| Create | POST | `axios.post('/api/products', data)` |
| Read | GET | `axios.get('/api/products')` |
| Update | PUT/PATCH | `axios.put('/api/products/1', data)` |
| Delete | DELETE | `axios.delete('/api/products/1')` |

### Axios Interceptor

Runs logic **before** request hits server or **after** response — attach Bearer token, log errors, handle 401.

```jsx
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

| Axios | fetch |
| --- | --- |
| Interceptors built-in | Manual wrapper needed |
| Auto JSON | Manual `.json()` |
| Cancel tokens | AbortController |

**Interview one-liner:** Interceptors attach auth headers or transform every request/response globally.

---

<a id="topic-13"></a>

## 13. Redux & Redux Toolkit

### Redux Concepts

Centralized **global state** with a predictable update pattern.

```text
UI → dispatch(action) → reducer → new state → UI re-renders
```

| Term | Role |
| --- | --- |
| **Action** | Plain object `{ type, payload }` describing what happened |
| **Reducer** | Pure function `(state, action) => newState` |
| **Store** | Holds current state; single source of truth |
| **Dispatch** | Only way to send actions to the store |

### Redux Toolkit Setup

```bash
npm install @reduxjs/toolkit react-redux
```

1. **Actions:**

```javascript
export const ProductAction = {
  FilterProduct: createAction("product/FILTERPRODUCT"),
  SetSearchText: createAction("product/setSearchText"),
  Reset: createAction("product/RESET"),
};
```

2. **Reducer:**

```javascript
const initialState = {
  products: [],
  filteredProducts: [],
  searchText: "",
  selectCategory: ""
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ProductAction.FilterProduct, (state, action) => {
      state.filteredProducts = action.payload.cat
        ? state.products.filter(p => p.category === action.payload.cat)
        : state.products;
    })
    .addCase(ProductAction.Reset, (state) => {
      state.searchText = "";
      state.filteredProducts = state.products;
      state.selectCategory = "";
    });
});
```

3. **Store:**

```javascript
const store = configureStore({
  reducer: { productReducer, categoryReducer }
});
```

4. **Provider (main.jsx):**

```jsx
<Provider store={store}>
  <App />
</Provider>
```

5. **Use in components:**

```jsx
const dispatch = useDispatch();
const filteredProducts = useSelector(s => s.productReducer.filteredProducts);

dispatch(ProductAction.SetSearchText(e.target.value));
```

**Interview one-liner:** Redux flow = Action → Dispatch → Reducer → Store → useSelector.

---

<a id="topic-14"></a>

## 14. JWT Authentication

Integrate JWT with Redux + Axios for secure API access.

### Flow

```text
Login API → receive JWT → store token (Redux / localStorage)
       ↓
Axios interceptor attaches Bearer token on every request
       ↓
Protected routes check auth state → redirect if unauthenticated
       ↓
Logout clears token + Redux state
```

### Key Points

- Store token in Redux state or `localStorage` (consider httpOnly cookies for production)
- Request interceptor adds `Authorization: Bearer <token>`
- Response interceptor handles 401 → redirect to login
- Combine with Context for user profile; Redux for app-wide auth flag

**Interview one-liner:** JWT auth = login → store token → interceptor sends Bearer header → protect routes by auth state.

---

<a id="topic-15"></a>

## 15. Performance — memo, useMemo, useCallback

**Memoization** caches expensive results and reuses them when inputs unchanged.

| API | Used For | Prevents |
| --- | --- | --- |
| `React.memo(Component)` | Memoizing components | Unnecessary child re-renders |
| `useMemo(() => value, [deps])` | Expensive computed values | Recomputing on every render |
| `useCallback(() => fn, [deps])` | Stable function references | Re-creating functions passed to memoized children |

```jsx
const MemoizedList = React.memo(ProductList);

const filtered = useMemo(
  () => products.filter(p => p.category === cat),
  [products, cat]
);

const handleClick = useCallback(() => {
  dispatch(ProductAction.Reset());
}, [dispatch]);
```

**When to use:** Large lists, heavy calculations, props passed to `React.memo` children — not everywhere by default.

---

<a id="topic-16"></a>

## 16. Error Boundaries

Catch runtime errors in child components — prevents white screen of death.

Must be a **class component** (no hook equivalent yet).

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log to monitoring service / API
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

Wrap `<App />` in `main.jsx`:

```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

**Interview one-liner:** Error Boundaries catch render errors in children and show fallback UI — class component only.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

| Topic | Key Points |
| --- | --- |
| What is React? | UI library — reusable components, declarative, Virtual DOM |
| Virtual DOM vs Real DOM | React updates Virtual DOM first → diff → commit minimal Real DOM changes |
| React Fiber | Reconciliation engine — schedules, prioritizes, pauses rendering |
| Reconciliation / Diffing / Commit | Compare trees → find changes → apply to Real DOM |
| JSX / Fragments | Single root required; Fragment avoids extra DOM node |
| StrictMode | Dev-only warnings for deprecated/unsafe code |
| Props vs State | Props from parent (read-only); state owned by component |
| useState `prev =>` | Functional update — `setCount(prev => prev + 1)` uses latest state; avoids stale closure |
| One-way vs Two-way binding | One-way: state → UI; two-way: `value` + `onChange` |
| Controlled vs Uncontrolled | React state vs DOM refs |
| useEffect vs lifecycle | `[]` = mount; `[deps]` = update; cleanup = unmount; no array = every render |
| useRef | DOM access or persist value without re-render |
| Context API | Global state without prop drilling — auth, theme |
| React Router | `BrowserRouter`, `Routes`, `Route`, `NavLink`, `useParams`, `useNavigate` |
| Lazy loading | `lazy()` + `Suspense` — code splitting on demand |
| Formik & Yup | Form state + schema validation |
| Axios / Interceptors | HTTP client; interceptors for Bearer token, error handling |
| Redux flow | Action → Dispatch → Reducer → Store → useSelector |
| JWT auth | Login → store token → interceptor → protected routes |
| memo / useMemo / useCallback | Skip re-renders, cache values, stable functions |
| Error Boundary | Class component catching child render errors |
| Babel | Transpiler — JSX/ES6+ to browser JS; does not bundle |
| Webpack | Configurable bundler — JS, CSS, images → optimized bundle |
| Parcel | Zero-config bundler — easy setup, less flexible |
| Vite | Fast dev (esbuild + ESM); production build via Rollup |
| Webpack vs Vite | Webpack = enterprise/configurable; Vite = modern, very fast HMR |

**Suggested learning order:** Setup → JSX → Components → Virtual DOM → Props/State → Hooks → Forms → Router → Context → API → Redux → Auth → Performance → Error Boundaries.

**One-liner:** React QP follows the standard React path — fundamentals, hooks, routing, forms, API, global state, auth, performance, and production patterns.
