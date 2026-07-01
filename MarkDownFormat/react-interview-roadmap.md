<h1 style="color:#2563eb;">React Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
This roadmap is focused on <strong style="color:#16a34a;">React interview preparation</strong> — components, hooks, state, routing, performance, and modern React patterns.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> <span style="color:#111827;">React Fundamentals and Virtual DOM</span></a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> <span style="color:#111827;">JSX and Rendering</span></a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> <span style="color:#111827;">Components — Functional vs Class</span></a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> <span style="color:#111827;">Props, State, and Data Flow</span></a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> <span style="color:#111827;">Event Handling and Forms</span></a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> <span style="color:#111827;">Lists, Keys, and Conditional Rendering</span></a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> <span style="color:#111827;">React Hooks — useState and useReducer</span></a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> <span style="color:#111827;">useEffect and Component Lifecycle</span></a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> <span style="color:#111827;">useRef, useMemo, and useCallback</span></a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> <span style="color:#111827;">Context API</span></a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> <span style="color:#111827;">React Router</span></a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> <span style="color:#111827;">Fetching Data and API Integration</span></a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> <span style="color:#111827;">State Management — Redux and Alternatives</span></a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> <span style="color:#111827;">Performance Optimization</span></a></li>
  <li><a href="#topic-15"><span style="color:#ea580c;font-weight:700;">15.</span> <span style="color:#111827;">Error Boundaries and Suspense</span></a></li>
  <li><a href="#topic-16"><span style="color:#0891b2;font-weight:700;">16.</span> <span style="color:#111827;">Testing React Applications</span></a></li>
  <li><a href="#topic-17"><span style="color:#0891b2;font-weight:700;">17.</span> <span style="color:#111827;">React 18+ Features</span></a></li>
  <li><a href="#topic-18"><span style="color:#0891b2;font-weight:700;">18.</span> <span style="color:#111827;">Project Structure and Best Practices</span></a></li>
  <li><a href="#suggested-learning-order"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Suggested Learning Order</span></a></li>
  <li><a href="#weekly-study-plan"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Weekly Study Plan</span></a></li>
  <li><a href="#practical-project-preparation"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Practical Project Preparation</span></a></li>
  <li><a href="#final-preparation-checklist"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Final Preparation Checklist</span></a></li>
  <li><a href="#interview-quick-answers"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Interview Quick Answers</span></a></li>
</ul>

---

<a id="topic-1"></a>

## 1. React Fundamentals and Virtual DOM

### What to Learn

- What is React?
- Single Page Application (SPA)
- Virtual DOM concept
- Reconciliation and diffing
- React vs jQuery / vanilla JS
- React ecosystem (Vite, CRA, Next.js)
- Component-based architecture

### React vs Traditional DOM Manipulation

| Point | Traditional JS | React |
| --- | --- | --- |
| DOM updates | Manual `document.getElementById` | Declarative UI from state |
| State tracking | Developer manages | React manages via state |
| Re-renders | Full or manual partial | Virtual DOM diff → minimal real DOM updates |
| Structure | Scattered event handlers | Component tree |

### Virtual DOM Flow

```text
State changes
  → React builds new Virtual DOM tree
    → Diff with previous Virtual DOM (reconciliation)
      → Apply only changed nodes to real DOM
```

| Question | Answer |
| --- | --- |
| What is React? | JavaScript library for building UI with reusable components |
| What is Virtual DOM? | Lightweight JS representation of UI — React diffs it before touching real DOM |
| What is reconciliation? | Algorithm comparing old and new Virtual DOM to find minimal DOM updates |
| React a framework? | Library for UI — often paired with router, state lib to form full stack |
| SPA meaning? | Single Page App — one HTML page, JS handles navigation without full reload |

**Must-know points:**
- React is **declarative** — describe UI for a given state, React updates the DOM
- Virtual DOM enables efficient updates — not always faster than hand-tuned vanilla JS, but scales better for complex UIs
- React 18+ uses concurrent rendering for smoother updates

---

<a id="topic-2"></a>

## 2. JSX and Rendering

### What to Learn

- JSX syntax rules
- JSX vs HTML differences
- Expressions in JSX `{}`
- Fragments `<>...</>`
- `ReactDOM.createRoot()` (React 18)
- Rendering components to DOM
- Babel / transpilation

### JSX vs HTML

| Point | HTML | JSX |
| --- | --- | --- |
| Class attribute | `class` | `className` |
| Inline styles | String | Object — `style={{ color: 'red' }}` |
| Self-closing tags | Optional for some | Required — `<img />`, `<br />` |
| JavaScript expressions | Not allowed | Allowed inside `{}` |

```jsx
const name = "Akash";
const element = (
  <>
    <h1 className="title">Hello, {name}</h1>
    <img src="/logo.png" alt="Logo" />
  </>
);

// React 18
import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(element);
```

| Question | Answer |
| --- | --- |
| Is JSX HTML? | No — syntactic sugar for `React.createElement()` calls |
| Why `className`? | `class` is reserved keyword in JavaScript |
| What are Fragments? | Group elements without extra DOM node — `<>...</>` or `<Fragment>` |
| `render` vs `createRoot`? | React 18 uses `createRoot` — enables concurrent features |
| Can JSX return multiple roots? | Yes in React 18+ — fragments or multiple siblings |

**Must-know points:**
- JSX must return **one parent** (or Fragment) per component
- Use `{}` for any JavaScript expression — variables, ternary, function calls
- `createRoot` is the modern entry point — replaces `ReactDOM.render`

---

<a id="topic-3"></a>

## 3. Components — Functional vs Class

### What to Learn

- Functional components
- Class components
- Component composition
- Props passing
- Default and named exports
- Pure components concept
- When to use each (modern preference)

### Functional vs Class Components

| Point | Functional Component | Class Component |
| --- | --- | --- |
| Syntax | `function MyComp() { return <div />; }` | `class MyComp extends React.Component` |
| State | `useState`, `useReducer` hooks | `this.state` + `this.setState()` |
| Lifecycle | `useEffect` hook | `componentDidMount`, etc. |
| Modern standard | React 18+ default | Legacy — still valid |

```jsx
// Functional (preferred)
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Class (legacy)
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

| Question | Answer |
| --- | --- |
| Which to use today? | Functional components with hooks — industry standard |
| Can hooks work in classes? | No — hooks only in functional components |
| Component composition? | Nest components — `<App><Header /><Main /></App>` |
| Pure component? | Same props → same output — `React.memo` for functions |
| Default export vs named? | `export default App` — one per file; named for utilities |

**Must-know points:**
- All new React code should use **functional components + hooks**
- Class components still appear in legacy codebases — know lifecycle mapping to hooks
- Keep components small and focused — one responsibility per component

---

<a id="topic-4"></a>

## 4. Props, State, and Data Flow

### What to Learn

- Props (read-only)
- State (mutable within component)
- One-way data flow
- Lifting state up
- Prop drilling
- Children prop
- Destructuring props

### Props vs State

| Point | Props | State |
| --- | --- | --- |
| Source | Passed from parent | Managed inside component |
| Mutability | Read-only — never modify | Updated via `setState` / `useState` setter |
| Triggers re-render | When parent re-renders | When state setter is called |
| Use for | Configuration, data from parent | Interactive UI, form input, toggles |

### Lifting State Up

```text
Sibling A and B need shared count
  → Move count state to common parent
    → Pass count + setter as props to both
```

| Question | Answer |
| --- | --- |
| Can child modify props? | No — props are immutable; child requests change via callback |
| Lifting state up? | Move shared state to closest common ancestor |
| Prop drilling? | Passing props through many layers — solve with Context or state lib |
| `children` prop? | Special prop — content between opening/closing tags |
| Unidirectional data flow? | Data flows parent → child; events flow child → parent via callbacks |

**Must-know points:**
- **Props down, events up** — core React pattern
- Don't duplicate state that can be computed from props
- Lifting state fixes sibling communication without global state

---

<a id="topic-5"></a>

## 5. Event Handling and Forms

### What to Learn

- Synthetic events
- Passing arguments to handlers
- Controlled vs uncontrolled components
- Form submission
- Preventing default behavior
- Two-way binding pattern in React

### Controlled vs Uncontrolled

| Point | Controlled | Uncontrolled |
| --- | --- | --- |
| Value source | React state | DOM itself |
| Access value | `state` variable | `ref.current.value` |
| Validation | Easy — validate on change | Harder — read on submit |
| Preferred | Yes — React way | File inputs, simple forms |

```jsx
// Controlled input
function LoginForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
```

| Question | Answer |
| --- | --- |
| Synthetic event? | React's cross-browser wrapper around native events |
| `e.preventDefault()`? | Stops form submit page reload — call in submit handler |
| Controlled component? | Input value tied to state — single source of truth |
| Arrow function in onClick? | `onClick={() => handleClick(id)}` — pass arguments |
| Two-way binding in React? | Value from state + `onChange` updates state — not automatic like Angular |

**Must-know points:**
- Prefer **controlled components** for forms — predictable state
- Never `bind` in render if it creates new function each time — use arrow or `useCallback`
- `name` attribute + single state object pattern for multi-field forms

---

<a id="topic-6"></a>

## 6. Lists, Keys, and Conditional Rendering

### What to Learn

- Rendering lists with `map()`
- `key` prop importance
- Conditional rendering (`&&`, ternary)
- Avoiding index as key
- Fragment in lists

```jsx
{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}

{isLoggedIn ? <Dashboard /> : <Login />}
{error && <p className="error">{error}</p>}
```

| Question | Answer |
| --- | --- |
| Why `key` prop? | Helps React identify which items changed, added, or removed |
| Index as key — when OK? | Static list that never reorders — otherwise use unique ID |
| `map` must return? | Single element per item — wrap in Fragment if multiple |
| `&&` pitfall? | `{count && <p>}` renders `0` if count is 0 — use ternary or `count > 0 &&` |
| Conditional rendering ways? | Ternary, `&&`, early return, store component in variable |

**Must-know points:**
- **Never use random key** — causes unnecessary re-mounts
- Stable unique `key` (database ID) is best
- `key` is not passed as prop to child — use `id` prop if child needs it

---

<a id="topic-7"></a>

## 7. React Hooks — useState and useReducer

### What to Learn

- Rules of Hooks
- `useState` basics
- State updates are asynchronous
- Functional updates `setCount(c => c + 1)`
- `useReducer` for complex state
- Custom hooks introduction

### Rules of Hooks

| Rule | Meaning |
| --- | --- |
| Top level only | Don't call hooks inside loops, conditions, or nested functions |
| React functions only | Call from functional components or custom hooks |
| Order matters | Hooks called in same order every render |

### useState vs useReducer

| Point | useState | useReducer |
| --- | --- | --- |
| Best for | Simple independent values | Complex state with multiple sub-values |
| Update style | Direct setter | Dispatch action object |
| Logic location | Inline in component | Reducer function (testable) |
| Example | Toggle, counter | Form wizard, shopping cart |

```jsx
const [count, setCount] = useState(0);
setCount(prev => prev + 1);  // functional update

const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'INCREMENT' });
```

| Question | Answer |
| --- | --- |
| Why functional update? | When new state depends on previous — avoids stale closure |
| State update async? | Batched — reading state immediately after set may show old value |
| Custom hook? | Function starting with `use` — reuses stateful logic |
| `useReducer` vs Redux? | `useReducer` is local; Redux is global with middleware and devtools |
| Hooks in class components? | Not supported — use HOC or migrate to functional |

**Must-know points:**
- Batch state updates in React 18 — multiple `setState` in one event = one re-render
- Extract repeated hook logic into **custom hooks** (`useFetch`, `useAuth`)
- `useReducer` shines when next state depends on previous in complex ways

---

<a id="topic-8"></a>

## 8. useEffect and Component Lifecycle

### What to Learn

- `useEffect` syntax and dependency array
- Cleanup functions
- Class lifecycle equivalents
- Fetching data in useEffect
- Common pitfalls (missing deps, infinite loops)
- `useLayoutEffect` overview

### Lifecycle Mapping

| Class Lifecycle | Hooks Equivalent |
| --- | --- |
| `componentDidMount` | `useEffect(() => {}, [])` |
| `componentDidUpdate` | `useEffect(() => {}, [dep])` |
| `componentWillUnmount` | `useEffect` cleanup return |
| `componentDidCatch` | Error Boundary (class only) or library |

### Dependency Array

| Deps | Behavior |
| --- | --- |
| None (omitted) | Runs after **every** render |
| `[]` empty | Runs once on mount |
| `[a, b]` | Runs when `a` or `b` changes |

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch(`/api/users/${userId}`, { signal: controller.signal })
    .then(res => res.json())
    .then(setUser);
  return () => controller.abort();  // cleanup on unmount or userId change
}, [userId]);
```

| Question | Answer |
| --- | --- |
| What is useEffect? | Runs side effects after render — fetch, subscriptions, DOM sync |
| Cleanup function? | Return function from effect — runs before next effect and on unmount |
| Infinite loop cause? | Setting state in effect without proper deps — effect re-runs forever |
| Fetch in useEffect? | Standard pattern — handle loading/error state; abort on cleanup |
| useEffect vs useLayoutEffect? | `useLayoutEffect` runs synchronously after DOM mutations, before paint |

**Must-know points:**
- Include all values from component scope that change in **dependency array** (eslint-plugin-react-hooks)
- Don't call async function directly as effect — define async inside and call it
- Cleanup prevents memory leaks — unsubscribe, clear timers, abort fetch

---

<a id="topic-9"></a>

## 9. useRef, useMemo, and useCallback

### What to Learn

- `useRef` for DOM access and mutable values
- `useMemo` for expensive calculations
- `useCallback` for stable function references
- When NOT to over-optimize
- Ref forwarding with `forwardRef`

### Hook Comparison

| Hook | Purpose | Re-render on change? |
| --- | --- | --- |
| `useRef` | DOM ref or mutable box | No |
| `useMemo` | Cache computed value | Only if deps change |
| `useCallback` | Cache function reference | Only if deps change |

```jsx
const inputRef = useRef(null);
inputRef.current.focus();

const sorted = useMemo(() => expensiveSort(items), [items]);
const handleClick = useCallback(() => doSomething(id), [id]);
```

| Question | Answer |
| --- | --- |
| useRef vs useState? | `useRef` changes don't trigger re-render; `useState` does |
| When use useMemo? | Expensive calculation — don't memoize cheap operations |
| useCallback purpose? | Stable function ref for child `React.memo` optimization |
| ref on class component? | Access instance methods — rare in modern code |
| forwardRef? | Pass ref through wrapper component to child DOM element |

**Must-know points:**
- **Don't premature optimize** — profile first, then add `useMemo`/`useCallback`
- `useRef` stores timer IDs, previous values, DOM nodes
- `useCallback(fn, deps)` is `useMemo(() => fn, deps)` equivalent

---

<a id="topic-10"></a>

## 10. Context API

### What to Learn

- `createContext`, `Provider`, `useContext`
- When to use Context vs props
- Context performance concerns
- Splitting contexts
- Context with useReducer pattern
- Alternatives (Zustand, Redux)

### Context Use Cases

| Good For | Avoid For |
| --- | --- |
| Theme, locale, auth user | Frequent fine-grained updates |
| App-wide settings | Every piece of shared state |
| Avoiding deep prop drilling | High-frequency changing data |

```jsx
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Button() {
  const { theme } = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

| Question | Answer |
| --- | --- |
| What problem does Context solve? | Prop drilling — share data across tree without passing every level |
| Context performance issue? | All consumers re-render when value changes — split contexts |
| Context vs Redux? | Context = built-in, simple; Redux = devtools, middleware, large apps |
| Default context value? | Used when no Provider above — useful for testing |
| Multiple contexts? | Prefer separate contexts for theme, auth, cart — isolated re-renders |

**Must-know points:**
- Context is **not** a full state management solution for complex apps
- Memoize Provider `value` object — `value={{ theme }}` creates new object every render
- Combine Context + `useReducer` for medium-complexity global state

---

<a id="topic-11"></a>

## 11. React Router

### What to Learn

- `react-router-dom` v6+
- `BrowserRouter`, `Routes`, `Route`
- `Link` vs `NavLink`
- URL parameters and `useParams`
- Nested routes and layouts
- Programmatic navigation `useNavigate`
- Protected routes

```jsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav><Link to="/">Home</Link></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <button onClick={() => navigate('/')}>Back</button>;
}
```

| Question | Answer |
| --- | --- |
| SPA routing how? | `history.pushState` — no full page reload |
| `Link` vs `<a>`? | `Link` prevents full reload — client-side navigation |
| Protected route? | Wrapper checks auth — redirect to login if not authenticated |
| Nested routes? | Parent `<Route>` with child routes — shared layout via `<Outlet />` |
| `useSearchParams`? | Read/write query string — `?page=2` |

**Must-know points:**
- React Router v6 uses `element` prop, not `component`
- `*` catch-all route for 404 pages
- Lazy load route components with `React.lazy` + `Suspense`

---

<a id="topic-12"></a>

## 12. Fetching Data and API Integration

### What to Learn

- `fetch` API in useEffect
- Loading, error, and data states
- Axios vs fetch
- Custom `useFetch` hook
- React Query / TanStack Query basics
- CORS awareness
- AbortController for cancellation

### Data Fetching Pattern

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => { if (!res.ok) throw new Error('Failed'); return res.json(); })
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

| Question | Answer |
| --- | --- |
| Where to fetch in React? | `useEffect` or event handler — not during render |
| React Query benefit? | Caching, refetch, loading/error states, deduplication built-in |
| CORS? | Browser security — API must allow origin or use proxy |
| Why AbortController? | Cancel in-flight request when component unmounts or deps change |
| Fetch vs Axios? | Fetch is built-in; Axios has interceptors, auto JSON, wider browser support |

**Must-know points:**
- Always handle **loading, error, and empty** states in UI
- Don't fetch in render — causes infinite loop
- TanStack Query is industry standard for server state in React apps

---

<a id="topic-13"></a>

## 13. State Management — Redux and Alternatives

### What to Learn

- Local vs global state
- Redux Toolkit (RTK)
- Actions, reducers, store
- `useSelector`, `useDispatch`
- Zustand, Jotai overview
- When you need global state

### State Management Options

| Solution | Best For |
| --- | --- |
| `useState` / `useReducer` | Component-local state |
| Context + useReducer | Medium app-wide state (theme, auth) |
| Redux Toolkit | Large apps, complex shared state, time-travel debugging |
| Zustand | Simple global state without boilerplate |
| TanStack Query | Server/async state — not UI state |

### Redux Flow

```text
UI dispatches action → Reducer updates store → Components re-render via useSelector
```

```jsx
// Redux Toolkit slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
  },
});
```

| Question | Answer |
| --- | --- |
| When use Redux? | Many components need same data, complex update logic, middleware needs |
| Redux Toolkit vs classic Redux? | RTK reduces boilerplate — `createSlice`, `configureStore` |
| Server state vs client state? | Server = API data (React Query); client = UI toggles, form drafts |
| Zustand vs Redux? | Zustand = minimal API, no Provider; Redux = ecosystem, devtools |
| Prop drilling vs global state? | Try lifting state / Context first — Redux when complexity grows |

**Must-know points:**
- **Don't put everything in Redux** — colocate state where it's used
- Redux Toolkit is the official recommended approach
- Separate server state (React Query) from UI state (useState/Redux)

---

<a id="topic-14"></a>

## 14. Performance Optimization

### What to Learn

- `React.memo`
- `useMemo` and `useCallback`
- Code splitting with `React.lazy`
- `Suspense` for lazy loading
- Virtualization for long lists
- Avoiding unnecessary re-renders
- React DevTools Profiler

### Optimization Techniques

| Technique | What It Does |
| --- | --- |
| `React.memo` | Skip re-render if props unchanged |
| `useMemo` | Cache expensive computation |
| `useCallback` | Stable callback for memoized children |
| `React.lazy` | Load component JS on demand |
| Virtual list | Render only visible rows (react-window) |

```jsx
const HeavyChart = React.lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyChart />
    </Suspense>
  );
}
```

| Question | Answer |
| --- | --- |
| When to use React.memo? | Child re-renders often with same props — profile first |
| Code splitting benefit? | Smaller initial bundle — faster first load |
| What triggers re-render? | State change, parent re-render, context change |
| Virtualization? | Render 20 visible items instead of 10,000 DOM nodes |
| Profiler? | React DevTools tab — find slow components |

**Must-know points:**
- **Measure before optimizing** — React DevTools Profiler
- Keys, state colocation, and component splitting often beat memo
- Lazy load routes and heavy modals — not every component

---

<a id="topic-15"></a>

## 15. Error Boundaries and Suspense

### What to Learn

- Error Boundaries (class component)
- `componentDidCatch` and `getDerivedStateFromError`
- What Error Boundaries cannot catch
- `Suspense` for lazy loading and data (React 18)
- Fallback UI patterns

### Error Boundary Limits

| Caught | Not Caught |
| --- | --- |
| Render errors in children | Event handler errors |
| Lifecycle errors | Async code (setTimeout, fetch) |
| Constructor errors | Errors in boundary itself |

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToService(error, info);
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}
```

| Question | Answer |
| --- | --- |
| Error Boundary in hooks? | No hook equivalent yet — use class or `react-error-boundary` library |
| Where to place boundaries? | Route level, around risky widgets — not every component |
| Suspense purpose? | Show fallback while child is loading (lazy or data) |
| Async errors in useEffect? | Use try/catch + error state — boundary won't catch |
| `react-error-boundary`? | npm package — functional API wrapper |

**Must-know points:**
- Wrap route-level components in Error Boundaries
- Handle async errors with local `error` state
- `Suspense` + `lazy` is standard for code splitting

---

<a id="topic-16"></a>

## 16. Testing React Applications

### What to Learn

- Jest test runner
- React Testing Library (RTL)
- Testing user behavior vs implementation
- `render`, `screen`, `fireEvent`, `userEvent`
- Mocking API calls
- Snapshot testing (limited use)

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments count on click', async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

| Question | Answer |
| --- | --- |
| RTL philosophy? | Test like a user — queries by role, label, text |
| `getBy` vs `queryBy`? | `getBy` throws if missing; `queryBy` returns null |
| Mock fetch? | `jest.spyOn(global, 'fetch')` or MSW (Mock Service Worker) |
| Enzyme vs RTL? | RTL is current standard — Enzyme less maintained |
| What to avoid testing? | Implementation details — internal state, private methods |

**Must-know points:**
- Prefer **`getByRole`** — accessible and resilient
- Use **MSW** for realistic API mocking
- Test behavior, not how state is stored internally

---

<a id="topic-17"></a>

## 17. React 18+ Features

### What to Learn

- Concurrent rendering
- Automatic batching
- `useTransition` and `useDeferredValue`
- Strict Mode double-invoke (dev)
- Server Components overview (Next.js)
- `createRoot` API

### React 18 Highlights

| Feature | Purpose |
| --- | --- |
| Concurrent rendering | Interruptible rendering — keep UI responsive |
| `useTransition` | Mark updates as non-urgent — keep input responsive |
| `useDeferredValue` | Defer expensive re-render of derived value |
| Strict Mode | Double-invokes effects in dev — finds side-effect bugs |
| Server Components | Render on server — zero bundle for static parts (Next.js) |

```jsx
const [isPending, startTransition] = useTransition();

const handleChange = (e) => {
  setInput(e.target.value);                    // urgent
  startTransition(() => setFilter(e.target.value));  // non-urgent
};
```

| Question | Answer |
| --- | --- |
| Automatic batching? | All state updates batch in React 18 — even in timeouts and promises |
| useTransition use case? | Heavy list filter while typing — input stays smooth |
| Strict Mode in production? | No double invoke — dev-only behavior |
| Server Components? | React components that run only on server — no JS sent to client |
| React 19 highlights? | Actions, `use` hook, document metadata — check current docs |

**Must-know points:**
- Migrate to `createRoot` for React 18 features
- `useTransition` for expensive UI updates triggered by user input
- Know Next.js App Router basics if interviewing for full-stack React roles

---

<a id="topic-18"></a>

## 18. Project Structure and Best Practices

### What to Learn

- Folder structure (feature-based vs type-based)
- Component naming conventions
- Separating container and presentational components
- Environment variables `import.meta.env` (Vite)
- ESLint and Prettier
- TypeScript with React
- Accessibility (a11y) basics

### Folder Structure (Feature-Based)

```text
src/
├── components/       # Shared UI (Button, Modal)
├── features/
│   ├── auth/         # Login, hooks, API
│   └── products/     # ProductList, ProductCard
├── hooks/            # Shared custom hooks
├── services/         # API clients
├── utils/
└── App.jsx
```

| Question | Answer |
| --- | --- |
| Container vs presentational? | Container fetches/state; presentational renders props — optional pattern |
| Env variables in Vite? | `VITE_API_URL` — prefix required, accessed via `import.meta.env` |
| TypeScript benefit? | Type-safe props, catch errors at compile time |
| a11y basics? | Semantic HTML, `aria-label`, keyboard navigation, color contrast |
| ESLint react-hooks plugin? | Enforces rules of hooks and exhaustive deps |

**Must-know points:**
- Colocate files by **feature** as app grows — easier to navigate than giant `components/` folder
- Use TypeScript for new projects — industry expectation
- Semantic HTML + `eslint-plugin-jsx-a11y` for accessibility

---

<a id="suggested-learning-order"></a>

## Suggested Learning Order

1. React fundamentals and Virtual DOM
2. JSX and rendering
3. Components — functional vs class
4. Props, state, and data flow
5. Event handling and forms
6. Lists, keys, conditional rendering
7. useState and useReducer
8. useEffect and lifecycle
9. useRef, useMemo, useCallback
10. Context API
11. React Router
12. Fetching data and API integration
13. State management (Redux / alternatives)
14. Performance optimization
15. Error boundaries and Suspense
16. Testing
17. React 18+ features
18. Project structure and best practices

---

<a id="weekly-study-plan"></a>

## Weekly Study Plan

### Week 1: React Basics

- What is React, Virtual DOM, JSX
- Functional components
- Props and state
- Event handling and controlled forms
- Lists, keys, conditional rendering

### Week 2: Hooks Deep Dive

- useState, useReducer
- useEffect and lifecycle mapping
- useRef, useMemo, useCallback
- Custom hooks
- Context API

### Week 3: Routing and Data

- React Router v6
- Fetching data — loading/error states
- Custom useFetch hook
- TanStack Query introduction
- API integration patterns

### Week 4: Advanced Topics

- Redux Toolkit or Zustand
- Performance — memo, lazy, Suspense
- Error boundaries
- Testing with RTL
- React 18 features

### Week 5: Projects and Interview Prep

- Build full SPA project
- Code splitting and optimization
- TypeScript migration basics
- Review Interview Quick Answers
- Mock interview practice

---

<a id="practical-project-preparation"></a>

## Practical Project Preparation

### What to Build

- Todo app with local state and filters
- Weather app consuming public API with loading/error UI
- E-commerce product listing with React Router and cart (Context or Zustand)
- Authentication flow — login, protected routes, JWT storage
- Admin dashboard with Redux Toolkit and RTK Query
- Form-heavy app with validation (React Hook Form)
- Deploy React app to Vercel or Netlify

---

<a id="final-preparation-checklist"></a>

## Final Preparation Checklist

- Can explain Virtual DOM and reconciliation.
- Can write functional components with props and state.
- Can explain controlled vs uncontrolled components.
- Can use useState, useEffect, useRef, and useContext correctly.
- Can map class lifecycle methods to hooks.
- Can explain rules of hooks.
- Can implement React Router with params and protected routes.
- Can fetch data with proper loading and error handling.
- Can explain when to use Context vs Redux vs React Query.
- Can describe React.memo, useMemo, and useCallback use cases.
- Can explain Error Boundaries and Suspense.
- Can write a basic test with React Testing Library.
- Can describe React 18 concurrent features.
- Can discuss project structure and best practices.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### Functional Components vs Class Components

| Point | Functional Component | Class Component |
| --- | --- | --- |
| Syntax | JavaScript function + hooks | `class extends React.Component` |
| State | `useState`, `useReducer` | `this.state` + `this.setState` |
| Lifecycle | `useEffect` and other hooks | `componentDidMount`, etc. |
| Modern usage | Default in React 18+ | Legacy — still valid but less common |

> **One-liner:** Use functional components with hooks — they are simpler and the modern React standard.

### What Are React Hooks? Different Hooks

| Hook | Purpose |
| --- | --- |
| `useState` | Local component state |
| `useEffect` | Side effects after render |
| `useContext` | Read shared context value |
| `useRef` | Mutable ref / DOM access without re-render |
| `useMemo` | Memoize expensive calculations |
| `useCallback` | Memoize function references |
| `useReducer` | Complex state logic like Redux-lite |

> **One-liner:** Hooks let functional components use state, effects, and context without classes.

### What is useEffect()?

| Aspect | Detail |
| --- | --- |
| Purpose | Run side effects after render (fetch, subscriptions, DOM) |
| Signature | `useEffect(() => { ... }, [dependencies])` |
| Cleanup | Return function runs before next effect or unmount |
| Empty deps `[]` | Runs once on mount (like `componentDidMount`) |

```jsx
useEffect(() => {
  fetch('/api/users').then(setUsers);
  return () => { /* cleanup */ };
}, [userId]);
```

> **One-liner:** `useEffect` handles side effects — dependency array controls when it re-runs.

### componentDidMount vs componentDidUpdate vs componentWillUnmount

| Lifecycle | When | Hooks Equivalent |
| --- | --- | --- |
| `componentDidMount` | After first render | `useEffect(() => {}, [])` |
| `componentDidUpdate` | After props/state change | `useEffect(() => {}, [dep])` |
| `componentWillUnmount` | Before component removed | `useEffect` cleanup return function |

> **One-liner:** Mount = run once; update = run when deps change; unmount = cleanup function in `useEffect`.

### What is useRef()?

| Aspect | Detail |
| --- | --- |
| Purpose | Hold mutable value that persists across renders |
| DOM access | `const ref = useRef(null)` → `ref.current` on element |
| Re-render | Changing `ref.current` does **not** trigger re-render |
| Use cases | Focus input, store timer ID, previous value |

```jsx
const inputRef = useRef(null);
const focusInput = () => inputRef.current.focus();
return <input ref={inputRef} />;
```

> **One-liner:** `useRef` stores a mutable box — ideal for DOM refs and values that shouldn't cause re-renders.
