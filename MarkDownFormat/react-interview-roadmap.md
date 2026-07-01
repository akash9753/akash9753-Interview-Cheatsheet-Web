<h1 style="color:#2563eb;">React Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
This roadmap is focused on <strong style="color:#16a34a;">React interview preparation</strong> — components, hooks, lifecycle, and common patterns.
</p>

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
