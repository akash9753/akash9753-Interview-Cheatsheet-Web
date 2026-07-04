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
  <li><a href="#topic-17"><span style="color:#0891b2;font-weight:700;">17.</span> All React Hooks — Use, Pros & Cons</a></li>
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

### Functional Component

A JavaScript **function** that returns JSX.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Arrow function style (same thing)
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

### Class Component

A JavaScript **class** extending `React.Component` with a `render()` method.

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Real Example — Counter (Both Ways)

**Functional (with hooks):**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Class (with lifecycle):**

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
```

Same UI — different syntax for state, updates, and side effects.

> Full class lifecycle diagram (Mounting → Updating → Unmounting) — see [Topic 6](#topic-6).

### Full Comparison

| Point | Functional Component | Class Component |
| --- | --- | --- |
| **Syntax** | `function App() { return <div /> }` | `class App extends React.Component { render() {} }` |
| **State** | `useState`, `useReducer` | `this.state` + `this.setState()` |
| **Lifecycle** | `useEffect` — see [Topic 6](#topic-6) | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` |
| **Props access** | Function parameters — `props.name` or `{ name }` | `this.props.name` |
| **Refs** | `useRef()` | `React.createRef()` or callback ref |
| **Context** | `useContext()` | `static contextType` or `Context.Consumer` |
| **Hooks** | ✅ All hooks available | ❌ Hooks **not** allowed in classes |
| **`this` keyword** | Not used (except in event handlers if needed) | Required — `this.state`, `this.props`, `this.setState` |
| **Binding** | No binding issues | Must bind methods in constructor or use arrow class fields |
| **Error Boundary** | ❌ Not supported (yet) | ✅ Only way to create Error Boundary |
| **Code size** | Less boilerplate | More verbose (constructor, render, binding) |
| **Modern standard** | React 18+ default — use for all new code | Legacy — still in old codebases |
| **Performance** | Same — React optimizes both equally | Same |

### Hooks — Functional Only

```jsx
// ✅ Works in functional component
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => { fetchUser(); }, []);
  return <div>{user?.name}</div>;
}

// ❌ Invalid — hooks cannot be used in class
class App extends React.Component {
  const [user, setUser] = useState(null); // SyntaxError
}
```

### `this` in Class Components

Class methods need correct `this` binding:

```jsx
class Button extends React.Component {
  handleClick() {
    console.log(this.props.label); // loses `this` if not bound
  }

  // Option 1: bind in constructor
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Option 2: arrow class field (no bind needed)
  handleClickArrow = () => {
    console.log(this.props.label);
  };

  render() {
    return <button onClick={this.handleClickArrow}>Click</button>;
  }
}
```

Functional components avoid this problem entirely.

### When to Use Which?

| Use Functional | Use Class |
| --- | --- |
| All new React projects | Maintaining legacy class code |
| Hooks for state, effects, context | Error Boundary (only class option today) |
| Simpler, less boilerplate | Old tutorials / existing class-based apps |

### Migration Pattern

```text
Class this.state        →  useState / useReducer
Class lifecycle methods →  useEffect
Class this.props        →  function props / destructuring
Class createRef         →  useRef
```

**Interview one-liners:**

- Functional components use hooks; class components use `this.state` and lifecycle methods.
- Hooks work **only** in functional components — never in classes.
- Error Boundaries must still be class components (no hook equivalent yet).
- Modern React = functional + hooks for all new development.

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

### useEffect vs Class Component Lifecycle

`useEffect()` combines multiple class lifecycle methods. Class components follow three phases:

![React Class Component Lifecycle — Mounting, Updating, Unmounting](/assets/react/react-class-component-lifecycle.png)

#### Mounting (component created & inserted into DOM)

| Method | When | Purpose |
| --- | --- | --- |
| `constructor()` | First | Init state, bind methods |
| `static getDerivedStateFromProps()` | Before render | Sync state from props |
| `render()` | Required | Return JSX |
| `componentDidMount()` | After first render | API calls, subscriptions, DOM setup |

#### Updating (props or state change → re-render)

**Triggers:** new props · `setState()` · `forceUpdate()`

| Method | When | Purpose |
| --- | --- | --- |
| `static getDerivedStateFromProps()` | Before render | Update state from new props |
| `shouldComponentUpdate()` | Before render | Return `false` to skip re-render (performance) |
| `render()` | — | Return updated JSX |
| `getSnapshotBeforeUpdate()` | Before DOM update | Capture DOM info (e.g. scroll position) |
| `componentDidUpdate()` | After DOM update | React to prop/state changes, more API calls |

#### Unmounting (component removed from DOM)

| Method | When | Purpose |
| --- | --- | --- |
| `componentWillUnmount()` | Before destroy | Cleanup timers, subscriptions, cancel requests |

#### shouldComponentUpdate vs componentDidUpdate

Both run during the **Updating** phase, but at **different times** with **different jobs**.

| Point | `shouldComponentUpdate` | `componentDidUpdate` |
| --- | --- | --- |
| **When** | **Before** `render()` | **After** DOM is updated |
| **Purpose** | Decide **whether** to re-render | React **after** re-render happened |
| **Return value** | `true` = re-render · `false` = skip render | Nothing (void) |
| **Can stop update?** | ✅ Yes — return `false` | ❌ No — render already done |
| **Use case** | Performance — avoid unnecessary renders | Side effects — API call, sync with DOM |
| **Receives** | `nextProps`, `nextState` | `prevProps`, `prevState` |
| **Functional equivalent** | `React.memo()` | `useEffect(() => {}, [deps])` |

**Flow when state/props change:**

```text
setState() / new props
        ↓
shouldComponentUpdate()  →  return false? → STOP (no render)
        ↓ return true
render()
        ↓
DOM updated
        ↓
componentDidUpdate()     →  run side effects here
```

**shouldComponentUpdate — skip re-render example:**

```jsx
class ProductList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Re-render only if selected category changed
    return nextProps.category !== this.props.category;
  }

  render() {
    return <div>{this.props.products.length} products</div>;
  }
}
```

Return `false` → React **skips** `render()` and **`componentDidUpdate` does NOT run** (because no update occurred).

**componentDidUpdate — react after update example:**

```jsx
class UserProfile extends React.Component {
  componentDidUpdate(prevProps) {
    // Run only when userId prop actually changed
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser(this.props.userId);
    }
  }

  fetchUser(id) {
    // API call after DOM reflects new user
  }

  render() {
    return <div>{this.props.user.name}</div>;
  }
}
```

**Important rules for `componentDidUpdate`:**

- Always compare `prevProps` / `prevState` before calling `setState` — otherwise infinite loop
- Does **not** run on initial mount (use `componentDidMount` for that)

**Functional equivalents:**

```jsx
// shouldComponentUpdate → React.memo
const ProductList = React.memo(function ProductList({ category, products }) {
  return <div>{products.length} products</div>;
}, (prevProps, nextProps) => {
  return prevProps.category === nextProps.category; // true = skip re-render
});

// componentDidUpdate → useEffect with deps
useEffect(() => {
  fetchUser(userId);
}, [userId]); // runs when userId changes, not on first mount if you skip with ref
```

**Interview one-liners:**

- `shouldComponentUpdate` runs **before** render and can **prevent** re-render; `componentDidUpdate` runs **after** render when update already happened.
- `shouldComponentUpdate` = performance gate · `componentDidUpdate` = post-update side effects.
- Functional alternative to `shouldComponentUpdate` is **`React.memo`**, not `useEffect`.

#### Functional Alternative to shouldComponentUpdate

Similar to `shouldComponentUpdate` in functional components:

**1. React.memo** — prevents component re-render if props are the same.

```jsx
const User = React.memo(function User({ name }) {
  return <h1>{name}</h1>;
});
```

**2. useMemo** — prevents expensive calculation on every render.

```jsx
const total = useMemo(() => {
  return price * quantity;
}, [price, quantity]);
```

**3. useCallback** — prevents function recreation on every render.

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

| API | Similar to shouldComponentUpdate? | What it prevents |
| --- | --- | --- |
| `React.memo` | ✅ Yes — skips re-render when props unchanged | Unnecessary **component** re-renders |
| `useMemo` | ❌ No — optimizes values, not render decision | Recomputing **expensive values** |
| `useCallback` | ❌ No — stable function reference | Re-creating **functions** passed to memoized children |
| `useEffect` | ❌ No — runs **after** render | Cannot stop render |

**Important — `useEffect` is NOT similar to `shouldComponentUpdate`:**

| | `shouldComponentUpdate` | `useEffect` |
| --- | --- | --- |
| **Timing** | **Before** render | **After** render |
| **Can stop render?** | ✅ Yes — return `false` | ❌ No — render already happened |
| **Purpose** | Performance gate | Side effects after update |

```text
shouldComponentUpdate  →  BEFORE render  →  can BLOCK re-render
useEffect              →  AFTER render   →  cannot prevent re-render
```

**Interview one-liner:** The functional alternative of `shouldComponentUpdate` is `React.memo`, not `useEffect`. `useEffect` runs after render and cannot prevent re-render.

#### React.memo vs useMemo — They Are NOT the Same

| Feature | `React.memo` | `useMemo` |
| --- | --- | --- |
| **What is it?** | Higher Order Component (HOC) | React Hook |
| **Used for** | Memoize **component** | Memoize **calculated value** |
| **Prevents** | Component re-render | Re-calculation |
| **Works on** | Functional component | Value / result |
| **Similar to** | `shouldComponentUpdate` | Cached computed value |

```jsx
// React.memo — skip re-render if props unchanged
const User = React.memo(function User({ name }) {
  return <h1>{name}</h1>;
});

// useMemo — skip recalculation if deps unchanged
const total = useMemo(() => price * quantity, [price, quantity]);
```

**Interview one-liner:** `React.memo` memoizes a **component** to avoid re-renders; `useMemo` memoizes a **value** to avoid recalculation.

> Full comparison — see [Topic 15 — React.memo vs useMemo](#react-memo-vs-usememo).

> See also [Topic 15 — Performance](#topic-15) for full `useMemo` / `useCallback` usage.

#### useEffect Mapping (Functional Equivalent)

`useEffect()` replaces the main lifecycle methods below:

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

### Controlled vs Uncontrolled Forms

| Point | Controlled | Uncontrolled |
| --- | --- | --- |
| **State location** | React state (`useState`) | DOM (browser) |
| **Value source** | `value={state}` | `defaultValue` or no value prop |
| **Updates** | `onChange` → `setState` | User types directly in DOM |
| **Read value** | From state variable | `ref.current.value` |
| **Re-render** | Every keystroke re-renders | No re-render on typing |
| **Validation** | Easy — validate state on change | Read ref on submit |
| **Reset form** | `setState("")` | `ref.current.value = ""` or remount |
| **React recommendation** | Preferred for most forms | OK for simple / one-time read |
| **Examples** | Text inputs, selects, checkboxes with state | File inputs, quick forms, integrating non-React libs |

#### Controlled — Real Example (Login Form)

React owns the value. UI always reflects state.

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember }); // state already has latest values
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        Remember me
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
```

**Flow:** User types → `onChange` fires → `setEmail` updates state → React re-renders → input shows new value.

#### Uncontrolled — Real Example (Quick Submit Form)

DOM owns the value until you read it (usually on submit).

```jsx
function QuickContactForm() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      file: fileRef.current.files[0],   // file inputs are always uncontrolled
    };
    console.log(data);
  };

  const handleReset = () => {
    nameRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" defaultValue="" placeholder="Name" />
      <input ref={phoneRef} type="tel" defaultValue="" placeholder="Phone" />
      <input ref={fileRef} type="file" />
      <button type="submit">Send</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
```

**Flow:** User types → DOM updates directly → on submit, read `ref.current.value`.

#### Side-by-Side — Same Text Input

```jsx
// Controlled
const [name, setName] = useState("Akash");
<input value={name} onChange={(e) => setName(e.target.value)} />

// Uncontrolled
const nameRef = useRef();
<input ref={nameRef} defaultValue="Akash" />
// read: nameRef.current.value
```

#### When to Use Which?

| Use Controlled | Use Uncontrolled |
| --- | --- |
| Form validation as user types | Simple form — read once on submit |
| Disable/enable inputs from state | File upload (`<input type="file">`) |
| Reset form from code | Integrating jQuery / non-React widget |
| Conditional fields based on input | Performance — avoid re-render per keystroke (rare) |

**Interview one-liner:** Controlled = React state drives input (`value` + `onChange`); uncontrolled = DOM holds value, read with `ref` — React prefers controlled for predictable data flow.

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

### fetch vs Axios

| Aspect | `fetch` (native) | Axios |
| --- | --- | --- |
| **Source** | Built into browser & modern Node | Third-party — `npm install axios` |
| **Bundle size** | Zero extra bytes | ~13 KB gzipped |
| **JSON handling** | Manual — `response.json()` | Auto — `response.data` is parsed JSON |
| **Request body** | Manual — `JSON.stringify(data)` | Auto serializes objects to JSON |
| **Error handling** | Resolves on **4xx/5xx** — check `response.ok` | **Rejects** on HTTP error status (4xx, 5xx) |
| **Interceptors** | Not built-in — wrap in custom helper | Built-in request & response interceptors |
| **Timeout** | `AbortController` + `setTimeout` | `timeout` in config |
| **Cancel request** | `AbortController` | `AbortController` (v0.22+) |
| **Upload/download progress** | Limited / manual | `onUploadProgress`, `onDownloadProgress` |
| **CSRF / XSRF** | Manual headers | `xsrfCookieName`, `xsrfHeaderName` built-in |
| **Base URL** | Manual concat per call | `axios.create({ baseURL })` |
| **Best for** | Simple GET, zero deps, native APIs | CRUD apps, JWT interceptors, global error handling |

#### Same GET request — side by side

```jsx
// fetch (native)
useEffect(() => {
  fetch('/api/products')
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(setProducts)
    .catch(console.error);
}, []);

// Axios
useEffect(() => {
  axios.get('/api/products')
    .then((res) => setProducts(res.data))
    .catch(console.error);
}, []);
```

| Question | Answer |
| --- | --- |
| When use fetch? | Simple calls, no extra dependency, full control |
| When use Axios? | Interceptors (JWT), consistent error handling, CRUD-heavy apps |
| Does fetch throw on 404? | **No** — must check `response.ok` or `response.status` |
| Does Axios throw on 404? | **Yes** — lands in `.catch()` |

**Interview one-liner:** `fetch` is native but needs manual JSON and error checks; Axios adds interceptors, auto JSON, and rejects on HTTP errors — standard choice for React apps with auth.

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

<a id="react-memo-vs-usememo"></a>

### React.memo vs useMemo — They Are NOT the Same

| Feature | `React.memo` | `useMemo` |
| --- | --- | --- |
| **What is it?** | Higher Order Component (HOC) | React Hook |
| **Used for** | Memoize **component** | Memoize **calculated value** |
| **Prevents** | Component re-render | Re-calculation |
| **Works on** | Functional component | Value / result |
| **Similar to** | `shouldComponentUpdate` | Cached computed value |

#### React.memo Example

```jsx
const User = React.memo(function User({ name }) {
  return <h1>{name}</h1>;
});
```

**Use:** If props are the same, the component will **not re-render**.

#### useMemo Example

```jsx
const total = useMemo(() => {
  return price * quantity;
}, [price, quantity]);
```

**Use:** If `price` and `quantity` are the same, `total` will **not recalculate**.

```text
React.memo   →  wraps COMPONENT  →  skips re-render when props equal
useMemo      →  wraps VALUE      →  skips recalculation when deps equal
```

**Interview one-liner:** `React.memo` memoizes a component to avoid unnecessary re-renders, while `useMemo` memoizes a calculated value to avoid unnecessary recalculation.

### All Three — Quick Reference

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

<a id="topic-17"></a>

## 17. All React Hooks — Use, Pros & Cons

Hooks let functional components use state, lifecycle, context, and more. **Rules:** only call hooks at top level · only in functional components or custom hooks.

### Hooks Overview

| Hook | Primary use |
| --- | --- |
| `useState` | Local component state |
| `useEffect` | Side effects after render |
| `useContext` | Read Context value |
| `useReducer` | Complex state logic |
| `useRef` | DOM ref or mutable value |
| `useMemo` | Cache computed value |
| `useCallback` | Cache function reference |
| `useLayoutEffect` | Sync DOM effect before paint |
| `useId` | Stable unique IDs (a11y) |
| `useImperativeHandle` | Customize ref exposed to parent |
| `useTransition` | Non-urgent state updates (React 18) |
| `useDeferredValue` | Defer updating a value (React 18) |
| `useSyncExternalStore` | Subscribe to external store |
| Custom hook | Reuse stateful logic |

---

### useState

**Use:** Store and update local state (strings, numbers, objects, arrays).

```jsx
const [count, setCount] = useState(0);
setCount(prev => prev + 1);
```

| Pros | Cons |
| --- | --- |
| Simple API | Many related states → messy |
| Triggers re-render on update | Async batching — read state right after set may be stale |
| Functional update `prev =>` avoids stale closure | Object/array updates need spread (immutable) |

---

### useEffect

**Use:** Side effects — API calls, subscriptions, timers, sync with external systems. Maps to mount / update / unmount. See [Topic 6](#topic-6).

```jsx
useEffect(() => {
  fetchData();
  return () => cleanup();
}, [id]);
```

| Pros | Cons |
| --- | --- |
| Replaces class lifecycle in one API | Easy to misuse deps → infinite loops |
| Cleanup function for unmount | Runs **after** render — cannot prevent render |
| Flexible dependency array | Over-fetching if deps wrong |

---

### useContext

**Use:** Read shared/global data without prop drilling — auth user, theme, locale. See [Topic 11](#topic-11).

```jsx
const { user, setUser } = useContext(UserContext);
```

| Pros | Cons |
| --- | --- |
| Avoids prop drilling | Re-renders all consumers when context value changes |
| Simple for global UI state | Not ideal for high-frequency updates |
| Pairs well with Provider | Overuse makes components hard to test/reuse |

---

### useReducer

**Use:** Complex state with multiple actions — forms, wizards, state machines. Similar to Redux reducer pattern locally.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'increment' });
```

| Pros | Cons |
| --- | --- |
| Predictable state transitions | More boilerplate than `useState` |
| Good for complex nested state | Overkill for simple toggle/counter |
| Easier to test reducer pure function | Learning curve vs plain state |

---

### useRef

**Use:** Access DOM nodes, store mutable values that persist without re-render. See [Topic 6](#topic-6).

```jsx
const inputRef = useRef(null);
inputRef.current.focus();
```

| Pros | Cons |
| --- | --- |
| No re-render when `.current` changes | Changing ref does not trigger UI update |
| Perfect for uncontrolled inputs | Not a substitute for state when UI must update |
| Holds previous value / timer IDs | Must not read/write during render for DOM sync |

---

### useMemo

**Use:** Cache expensive calculation between renders when dependencies unchanged. See [Topic 15](#react-memo-vs-usememo).

```jsx
const filtered = useMemo(
  () => products.filter(p => p.category === cat),
  [products, cat]
);
```

| Pros | Cons |
| --- | --- |
| Skips heavy recalculation | Memory overhead storing cached value |
| Stable reference for derived data | Wrong deps → stale/wrong results |
| Not the same as `React.memo` | Premature optimization if calc is cheap |

---

### useCallback

**Use:** Return same function reference when deps unchanged — helps `React.memo` children avoid re-render.

```jsx
const handleSave = useCallback((id) => {
  saveProduct(id);
}, [saveProduct]);
```

| Pros | Cons |
| --- | --- |
| Stable fn reference for memoized children | Adds complexity |
| Prevents child re-render from new fn prop | Useless without `React.memo` on child |
| Good for event handlers in lists | Overuse everywhere hurts readability |

---

### useLayoutEffect

**Use:** Same as `useEffect` but runs **synchronously after DOM update, before browser paint** — measure DOM, prevent flicker.

```jsx
useLayoutEffect(() => {
  const height = ref.current.getBoundingClientRect().height;
  setTooltipHeight(height);
}, []);
```

| Pros | Cons |
| --- | --- |
| Runs before user sees screen | **Blocks** browser paint — can hurt performance |
| Good for layout measurements | Prefer `useEffect` by default |
| Fixes visual flicker | SSR warnings — runs only on client |

---

### useId

**Use:** Generate unique stable IDs for accessibility — link `label` to `input`, ARIA attributes.

```jsx
const id = useId();
<label htmlFor={id}>Email</label>
<input id={id} type="email" />
```

| Pros | Cons |
| --- | --- |
| SSR-safe unique IDs | IDs differ server vs client prefix — don't use in CSS selectors |
| Avoids ID collisions | Not for list keys |
| Built-in a11y helper | — |

---

### useImperativeHandle

**Use:** Customize instance value exposed to parent via `ref` — focus input, play video, scroll container.

```jsx
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus(),
}), []);
```

| Pros | Cons |
| --- | --- |
| Imperative API when needed | Breaks declarative React pattern |
| Encapsulates child DOM logic | Harder to maintain — use sparingly |
| Works with `forwardRef` | Parent coupled to child implementation |

---

### useDebugValue

**Use:** Display custom label for custom hooks in React DevTools.

```jsx
function useOnlineStatus() {
  const [online, setOnline] = useState(true);
  useDebugValue(online ? 'Online' : 'Offline');
  return online;
}
```

| Pros | Cons |
| --- | --- |
| Better DevTools debugging | Dev-only — no production effect |
| Documents custom hook state | Only useful inside custom hooks |

---

### useTransition (React 18+)

**Use:** Mark state updates as **non-urgent** — keep UI responsive during heavy re-renders (tab switch, filter large list).

```jsx
const [isPending, startTransition] = useTransition();
startTransition(() => setFilter(heavyValue));
```

| Pros | Cons |
| --- | --- |
| Smoother UX for slow updates | `isPending` needs loading UI |
| Keeps input responsive | Not for every state change |
| Concurrent rendering feature | Mental model is advanced |

---

### useDeferredValue (React 18+)

**Use:** Defer updating a value — lag behind urgent updates (e.g. defer filtered list while typing stays instant).

```jsx
const deferredQuery = useDeferredValue(query);
const results = useMemo(() => search(deferredQuery), [deferredQuery]);
```

| Pros | Cons |
| --- | --- |
| Simple deferral without transition API | UI may show stale data briefly |
| Good for search-as-you-type | Needs fallback/skeleton for deferred state |
| Works with memoized derived data | React 18+ only |

---

### useSyncExternalStore

**Use:** Subscribe to external stores (Redux-like, browser APIs) with SSR support.

```jsx
const width = useSyncExternalStore(subscribe, () => window.innerWidth);
```

| Pros | Cons |
| --- | --- |
| Official pattern for external stores | Low-level — rarely written by hand |
| SSR-safe snapshot | Redux Toolkit uses internally via `useSelector` |
| Tearing-safe in concurrent mode | Overkill for simple apps |

---

### Custom Hooks

**Use:** Extract reusable stateful logic — prefix with `use`.

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(r => r.json()).then(setData);
  }, [url]);
  return data;
}
```

| Pros | Cons |
| --- | --- |
| DRY — share logic across components | Must follow Rules of Hooks |
| Composable (`useAuth`, `useCart`) | Can hide complexity if over-abstracted |
| Testable in isolation | Naming convention required (`use` prefix) |

---

### Related Hooks (Other Libraries)

| Hook | Source | Use |
| --- | --- | --- |
| `useParams`, `useNavigate`, `useLocation` | React Router — [Topic 10](#topic-10) | Route params, navigation, query string |
| `useDispatch`, `useSelector` | Redux Toolkit — [Topic 13](#topic-13) | Dispatch actions, read store state |
| `useFormikContext`, `useField` | Formik — [Topic 9](#topic-9) | Form state inside Formik forms |

### React 19 Hooks (Brief)

| Hook | Use |
| --- | --- |
| `useActionState` | Form actions with pending/error state |
| `useFormStatus` | Read parent form submission status |
| `useOptimistic` | Optimistic UI while async action pending |

### Hooks Rules — Quick Reminder

1. Only call hooks at the **top level** — not inside loops, conditions, or nested functions
2. Only call hooks from **functional components** or **custom hooks**
3. ESLint plugin `eslint-plugin-react-hooks` enforces these rules

**Interview one-liner:** Core hooks — `useState` (state), `useEffect` (side effects), `useContext` (global data), `useRef` (DOM/mutable), `useMemo`/`useCallback` (performance), `useReducer` (complex state).

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
| Functional vs Class | Functional: hooks, no `this`; Class: `this.state`, lifecycle; Error Boundary = class only |
| Props vs State | Props from parent (read-only); state owned by component |
| useState `prev =>` | Functional update — `setCount(prev => prev + 1)` uses latest state; avoids stale closure |
| One-way vs Two-way binding | One-way: state → UI; two-way: `value` + `onChange` |
| Controlled vs Uncontrolled | Controlled: `value` + `onChange` + state; Uncontrolled: `ref` + `defaultValue`, read on submit |
| useEffect vs lifecycle | `[]` = mount; `[deps]` = update; cleanup = unmount; no array = every render |
| shouldComponentUpdate vs componentDidUpdate | Before render, can skip update (`React.memo`) vs after DOM update (`useEffect`) |
| shouldComponentUpdate vs useEffect | `React.memo` = functional equivalent; `useEffect` runs after render, cannot block it |
| React.memo vs useMemo | memo = skip component re-render; useMemo = skip value recalculation — not the same |
| React.memo / useMemo / useCallback | memo = component; useMemo = value; useCallback = stable function |
| useRef | DOM access or persist value without re-render |
| Context API | Global state without prop drilling — auth, theme |
| React Router | `BrowserRouter`, `Routes`, `Route`, `NavLink`, `useParams`, `useNavigate` |
| Lazy loading | `lazy()` + `Suspense` — code splitting on demand |
| Formik & Yup | Form state + schema validation |
| Axios / Interceptors | HTTP client; interceptors for Bearer token, error handling |
| fetch vs Axios | fetch = native, manual JSON/errors; Axios = interceptors, auto JSON, rejects on 4xx/5xx |
| Redux flow | Action → Dispatch → Reducer → Store → useSelector |
| JWT auth | Login → store token → interceptor → protected routes |
| memo / useMemo / useCallback | Skip re-renders, cache values, stable functions |
| Error Boundary | Class component catching child render errors |
| All React hooks | useState/effect/context/ref = core; useMemo/Callback = perf; useReducer = complex state |
| Babel | Transpiler — JSX/ES6+ to browser JS; does not bundle |
| Webpack | Configurable bundler — JS, CSS, images → optimized bundle |
| Parcel | Zero-config bundler — easy setup, less flexible |
| Vite | Fast dev (esbuild + ESM); production build via Rollup |
| Webpack vs Vite | Webpack = enterprise/configurable; Vite = modern, very fast HMR |

**Suggested learning order:** Setup → JSX → Components → Virtual DOM → Props/State → Hooks (Topic 6 & 17) → Forms → Router → Context → API → Redux → Auth → Performance → Error Boundaries.

**One-liner:** React QP follows the standard React path — fundamentals, hooks, routing, forms, API, global state, auth, performance, and production patterns.
