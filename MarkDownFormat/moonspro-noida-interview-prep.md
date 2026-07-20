# Moonspro Noida — Full Stack Interview Prep

## Goal

Interview prep for **Moonspro Noida** (full stack). Topics match the panel brief: backend (.NET / Azure) and frontend (React / JavaScript), plus coding output questions. Answers are detailed so you can speak for 1–2 minutes with project examples.

**Evaluation focus:** communication, ability to learn, presentation, cultural fit, team player — plus React/JS, .NET, database, cloud & DevOps, problem solving (min ~3/5).

---

## Topic Index

<ul>
  <li><a href="#panel-1">Panel 1 — Backend</a></li>
  <li><a href="#panel-2">Panel 2 — Frontend</a></li>
  <li><a href="#coding">Coding &amp; Output Questions</a></li>
  <li><a href="#criteria">Interview Evaluation Criteria</a></li>
</ul>

---

<a id="panel-1"></a>

## Panel 1 — Backend

---

### 1. Describe Microservice Architecture

**Definition:** Microservices split a large system into small, independently deployable services. Each service owns a **business capability**, its **own data store**, and communicates over the network (HTTP/gRPC/events).

| Trait | Meaning |
| --- | --- |
| Independent deploy | Ship Order service without redeploying Catalog |
| Bounded context | Clear ownership of domain and DB |
| Tech flexibility | Different stacks per service if needed |
| Scale independently | Scale only the hot service |
| Failure isolation | One service down ≠ whole app down |

**Typical flow:** API Gateway → services → databases / message bus (Service Bus, Event Hub, RabbitMQ).

**Trade-offs:** Network latency, distributed transactions, eventual consistency, ops complexity, observability needs.

**Interview answer structure:**
1. Definition + independence
2. Communication (sync REST vs async events)
3. Data ownership (no shared DB)
4. One real project example (e.g. Order, Payment, Notification as separate services)
5. Challenges you solved (timeouts, retries, idempotency)

> **One-liner:** Microservices = independently deployable services, each owning its data and talking via APIs/events — scale and fail in isolation, at the cost of distributed complexity.

---

### 2. Authentication vs Authorization

| | Authentication | Authorization |
| --- | --- | --- |
| Question | **Who are you?** | **What can you do?** |
| When | Login / token validation | After identity is known |
| Example | JWT validation, cookie login, Azure AD | Roles, claims, policies, RBAC |
| Failure | 401 Unauthorized | 403 Forbidden |

**ASP.NET Core:** `[Authorize]` needs a valid identity; policies/roles decide access. AuthN = middleware/JWT bearer; AuthZ = policies, roles, resource-based checks.

> **One-liner:** Authentication proves identity; authorization decides permissions after you’re identified.

---

### 3. Monolithic vs Event-Driven Architecture

| Monolith | Event-Driven |
| --- | --- |
| One deployable unit | Services react to events |
| In-process calls | Async messages (Event Hub, Service Bus, Kafka) |
| Simple transactions | Eventual consistency |
| Easier to start | Better for decoupling & scale |

**Event-driven idea:** Producer publishes `OrderPlaced`; consumers (email, inventory, analytics) subscribe independently — no direct coupling.

**When to use events:** Cross-service side effects, high throughput, loose coupling. **When monolith is fine:** Small team, simple domain, strong consistency needed everywhere.

> **One-liner:** Monolith = one app, one deploy; event-driven = services collaborate by publishing/consuming events asynchronously.

---

### 4. Event Hub, Azure Functions, Cosmos DB

| Service | Role |
| --- | --- |
| **Azure Event Hubs** | High-throughput event ingestion (telemetry, clickstream). Partitioned stream; consumers read with offsets. |
| **Azure Functions** | Serverless compute. Triggered by HTTP, queue, Event Hub, timer, Blob. Scale to zero / scale out. |
| **Cosmos DB** | Globally distributed multi-model DB. Partition keys, RU/s, eventual/strong consistency levels, SQL API common for .NET. |

**Common pattern:** Event Hub receives events → Function processes → writes to Cosmos DB (or SQL). Use partition key carefully (e.g. `userId`), design for hot partitions, and keep Function handlers **idempotent**.

> **One-liner:** Event Hub = ingest stream; Functions = serverless processors; Cosmos = partitioned, globally scalable store.

---

### 5. How did you reduce latency? (use technical keywords)

Prepare **your** story with measurable impact. Sample structure:

| Lever | Keywords to use |
| --- | --- |
| Database | Indexes, query plan, `Include` / projection, avoid N+1, pagination, read replicas |
| Caching | Redis, HybridCache, cache-aside, TTL, stampede protection |
| API | Async I/O, connection pooling, compression, pagination, field selection |
| Network | CDN, region affinity, gRPC, keep-alive, timeouts |
| Architecture | Async messaging for heavy work, CQRS read models |
| Observability | App Insights, p95/p99, distributed tracing |

**Example answer:**  
“We cut p95 from ~1.2s to ~280ms. Root cause was N+1 EF queries and missing index on `Order.CustomerId`. We added covering index, used `Include`/projection, cached product prices in Redis with HybridCache, and moved email to a queue so the API returned after DB commit only.”

> **One-liner:** Measure p95 → find hot path (SQL/N+1/network) → index + cache + async offload — quantify before/after.

---

### 6. HTTP Context

**`HttpContext`** represents the current HTTP request/response in ASP.NET Core: user, headers, cookies, items, connection, features.

| Piece | Use |
| --- | --- |
| `HttpContext.User` | Claims principal after auth |
| `Request` / `Response` | Path, query, body, status, headers |
| `Items` | Per-request scratch bag |
| `RequestServices` | Scoped DI for this request |
| `Features` | Connection, session, etc. |

**Access:** Inject `IHttpContextAccessor` (register it). Prefer passing needed data into services instead of reaching for `HttpContext` everywhere — keeps code testable.

**Caution:** Don’t capture `HttpContext` across threads after the request ends; don’t use it in singleton without care.

> **One-liner:** `HttpContext` is the per-request bag for user, request, response, and services — prefer DI of what you need over scattering accessors.

---

### 7. Describe current project (+ follow-ups)

Use **STAR** + architecture:

1. **Product** — what users get  
2. **Your role** — ownership  
3. **Stack** — ASP.NET Core, EF/SQL/Cosmos, React, Azure  
4. **Architecture** — monolith/microservices, APIs, auth  
5. **One hard problem** — latency, outbox, scale, bug  
6. **Impact** — numbers  

Expect follow-ups: “How is auth done?”, “How do services talk?”, “Biggest production incident?”, “How do you deploy?”

> **One-liner:** Problem → your role → architecture → one deep technical win with metrics.

---

### 8. What is RBAC and how it works?

**RBAC (Role-Based Access Control):** Users get **roles**; roles get **permissions**. Access is granted by role membership, not ad-hoc per user.

**Flow:** User logs in → token/cookie contains roles/claims → `[Authorize(Roles = "Admin")]` or policy checks role → allow/deny.

**Azure / app:** App roles in Azure AD, ASP.NET Identity roles, or custom claim mapping.

| Concept | Example |
| --- | --- |
| User | Akash |
| Role | `FinanceAdmin` |
| Permission | Approve payments |
| Check | Policy `RequireFinanceAdmin` |

> **One-liner:** RBAC assigns permissions to roles and roles to users — simpler than managing every user permission individually.

---

### 9. IEnumerable vs IQueryable

| | `IEnumerable<T>` | `IQueryable<T>` |
| --- | --- | --- |
| Execution | In-memory (LINQ to Objects) | Provider (EF → SQL) |
| Where filters run | After data loaded to memory | In the database |
| Deferred? | Yes (iterator) | Yes (expression tree) |
| Risk | Pulling whole table then filtering | Complex expressions that don’t translate |

**Rule:** Keep filtering/sorting/paging on `IQueryable` until the last moment (`ToListAsync`). Switching to `IEnumerable` too early causes client evaluation / big payloads.

> **One-liner:** `IQueryable` builds SQL; `IEnumerable` filters in memory — filter on `IQueryable` before materializing.

---

### 10. Transient vs Scoped vs Singleton lifecycle

| Lifetime | Instance | Typical use |
| --- | --- | --- |
| **Transient** | New every resolve | Lightweight, stateless helpers |
| **Scoped** | One per HTTP request (scope) | `DbContext`, unit of work |
| **Singleton** | One for app lifetime | Cache clients, config, factories |

**Classic bug:** Injecting **scoped** `DbContext` into a **singleton** → captive dependency / disposed context / thread issues.

**Rule:**

- ✅ A service can depend on another service with the **same or longer** lifetime.
- ❌ A service should **not** directly depend on a service with a **shorter** lifetime.

> **Interview one-liner:** Scoped can access Singleton because Singleton lives longer than Scoped. Singleton cannot directly access Scoped because Scoped may be disposed while the Singleton is still alive.

---

### 11. Have you created any custom Middleware?

**Middleware** sits in the pipeline: `Request → M1 → M2 → … → Endpoint → … → Response`.

**Custom middleware examples:** correlation ID, request logging, exception shaping, tenant resolution, API key checks.

```csharp
public class CorrelationIdMiddleware
{
    private readonly RequestDelegate _next;

    public CorrelationIdMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        var id = context.Request.Headers["X-Correlation-Id"].FirstOrDefault()
                 ?? Guid.NewGuid().ToString();
        context.Response.Headers["X-Correlation-Id"] = id;
        context.Items["CorrelationId"] = id;
        await _next(context);
    }
}
```

Register with `app.UseMiddleware<CorrelationIdMiddleware>()` — order matters (exception handling early, auth before endpoints).

> **One-liner:** Custom middleware = reusable pipeline step for cross-cutting concerns before/after the endpoint.

---

### 12. Task / Thread vs async / await

| Concept | Meaning |
| --- | --- |
| **Thread** | OS/thread-pool worker executing code |
| **Task** | Representation of async work (may or may not use a dedicated thread) |
| **async/await** | Compiler transforms to state machine; await yields while I/O completes |

**I/O-bound:** `await` HTTP/SQL — frees thread pool while waiting.  
**CPU-bound:** `Task.Run` / parallel — uses threads.

Don’t block with `.Result` / `.Wait()` on ASP.NET — classic deadlock / thread-pool starvation.

> **One-liner:** Threads run code; Tasks represent work; async/await frees threads during I/O instead of blocking them.

---

### 13. What causes a deadlock in async programming?

**Common ASP.NET classic:** Sync-over-async — calling `.Result` / `.Wait()` on an async method that later needs the same context/thread.

**Other causes:**
- Two locks acquired in opposite order
- `lock` + async (don’t await inside `lock`)
- Fire-and-forget that never completes while holding a resource
- Circular wait on semaphores

**Fix:** Async all the way (`await`), `ConfigureAwait(false)` in libraries, never block on tasks in request paths.

> **One-liner:** Deadlocks often come from blocking on async (`.Result`/`.Wait`) or reverse lock order — keep async end-to-end.

---

### 14. What is a CancellationToken?

**`CancellationToken`** cooperatively cancels long-running work. Controllers get `CancellationToken` from the request; pass it to EF (`ToListAsync(ct)`), `HttpClient`, loops.

When the client disconnects or timeout fires, work can stop early — saves resources.

```csharp
public async Task<IActionResult> Get(CancellationToken ct)
{
    var data = await _db.Orders.ToListAsync(ct);
    return Ok(data);
}
```

> **One-liner:** CancellationToken is a cooperative signal to stop work when the request is aborted or a timeout hits.

---

### 15. How do you handle distributed transactions?

Avoid 2PC when possible. Prefer:

| Pattern | Idea |
| --- | --- |
| **Saga** | Sequence of local transactions + compensating actions |
| **Outbox** | Save entity + outbox message in one DB transaction; publisher sends to queue |
| **Idempotency** | Consumers safely handle retries |
| **Eventual consistency** | Accept short inconsistency windows |

Rare: DTC / `TransactionScope` across resources — heavy, fragile in cloud.

> **One-liner:** Don’t span DBs with classic 2PC — use saga + outbox + idempotent consumers for eventual consistency.

---

### 16. Login across multiple services

**SSO / shared identity:**
- Central IdP (Azure AD, IdentityServer, Auth0)
- Issue **JWT** / access token
- Each API validates token (issuer, audience, signature) — no shared session store required for APIs
- Refresh tokens / cookie for BFF if needed
- Optional: API gateway validates once; propagate user claims

**Anti-pattern:** Separate username/password DB per service without shared identity.

> **One-liner:** One identity provider issues tokens; every service validates the same token — single login across APIs.

---

### 17. Which design patterns do you use?

Be ready with **2–3 you actually used**:

| Pattern | When |
| --- | --- |
| Repository / Unit of Work | Data access abstraction |
| Factory | Create payment providers, handlers |
| Strategy | Swap algorithms (pricing, pay methods) |
| Mediator (MediatR) | Decouple controllers from handlers |
| CQRS | Separate read/write models |
| Decorator | Logging/caching around services |
| Outbox | Reliable messaging |

Tie each to a project story.

> **One-liner:** Name patterns you used in production and the problem each solved — not a laundry list.

---

### 18. CQRS

**Command Query Responsibility Segregation:** Separate **write** (commands) from **read** (queries). Writes update the domain; reads use optimized projections/DB views/cache.

**Benefits:** Scale reads independently, simpler models, clearer intent.  
**Cost:** More moving parts, eventual consistency if read model is async.

Often paired with MediatR: `IRequest` commands vs queries.

> **One-liner:** CQRS splits write and read models so each can be optimized and scaled differently.

---

### 19. Benefit of Unit of Work

**Unit of Work** tracks changes across repositories and commits **once** (`SaveChanges`).

| Benefit | Detail |
| --- | --- |
| Single transaction | Multiple aggregates/repos commit together |
| Consistency | All succeed or all fail |
| Fewer round-trips | One `SaveChanges` |
| Testability | Interface over commit boundary |

In EF Core, `DbContext` **is** a Unit of Work.

> **One-liner:** Unit of Work batches related changes into one transactional commit — EF `DbContext` already does this.

---

### 20. Factory Design Pattern and benefits

**Factory** encapsulates object creation. Caller depends on interface; factory picks concrete type.

```csharp
IPayment Create(string type) => type switch
{
    "Card" => new CardPayment(),
    "Upi" => new UpiPayment(),
    _ => throw new NotSupportedException()
};
```

**Benefits:** Hides construction, OCP-friendly (add types without changing callers), centralizes creation rules, easier testing with fakes.

> **One-liner:** Factory creates the right implementation behind an interface so callers don’t `new` concrete types.

---

### 21. More scenario-based questions (backend) — be ready

| Scenario | Direction of answer |
| --- | --- |
| API slow only sometimes | Check p99, locks, GC, downstream timeouts |
| Duplicate messages from queue | Idempotency key / dedupe table |
| Order saved, email never sent | Transactional outbox |
| N+1 queries | `Include` / projection |
| Cache stampede | HybridCache / lock around refill |
| One client floods API | Rate limiting |
| CSRF with cookies | Antiforgery tokens |

---

<a id="panel-2"></a>

## Panel 2 — Frontend

---

### 1. React Hooks / React “objects” (core ideas)

**Hooks** let function components use state and lifecycle: `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, `useContext`, custom hooks.

**Rules:** Only call hooks at top level; only in React functions; same order every render.

**Common objects/APIs:** props, state, context, refs, Virtual DOM reconciliation.

> **One-liner:** Hooks add state and side effects to function components without classes — follow the Rules of Hooks.

---

### 2. Polyfill in JavaScript

A **polyfill** implements a newer API on older browsers (e.g. `Promise`, `Array.from`, `fetch`). Often via Babel + `core-js`.

Difference: **transpile** rewrites syntax (`=>`); **polyfill** adds missing runtime APIs.

> **One-liner:** Polyfill = JS code that adds modern APIs to old environments.

---

### 3. Controlled vs Uncontrolled components

| Controlled | Uncontrolled |
| --- | --- |
| Value in React state | Value in DOM / ref |
| `value` + `onChange` | `defaultValue` + `ref` |
| Single source of truth in React | Useful for simple forms / file inputs |

> **One-liner:** Controlled = React owns the value; uncontrolled = DOM owns it, you read via ref.

---

### 4. createAsyncThunk (Redux Toolkit)

**`createAsyncThunk`** handles async Redux flows: pending / fulfilled / rejected actions automatically.

```js
export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await api.get('/users');
  return res.data;
});
```

In `extraReducers`, handle loading/error/data. Avoids writing boilerplate action types by hand.

> **One-liner:** `createAsyncThunk` standardizes async Redux with pending/fulfilled/rejected lifecycle.

---

### 5. `Array.from()`

Creates a new array from an **array-like** or **iterable**.

```js
Array.from('hi');           // ['h','i']
Array.from({ length: 3 }, (_, i) => i); // [0,1,2]
Array.from(new Set([1,1,2])); // [1,2]
```

> **One-liner:** `Array.from` turns array-likes/iterables into real arrays (optionally mapped).

---

### 6. Private routing & protected routes

Wrap routes so only authenticated users enter:

```jsx
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" replace />;
  return children;
}
```

Also check roles/claims for admin routes; prefer httpOnly cookies when possible for tokens.

> **One-liner:** Protected routes redirect unauthenticated users before rendering private UI.

---

### 7. Session storage vs Local storage

| | `localStorage` | `sessionStorage` |
| --- | --- | --- |
| Lifetime | Until cleared | Until tab closes |
| Scope | Origin | Origin + tab |
| Size | ~5MB typical | ~5MB typical |
| Use | Preferences, long-lived client data | Wizard draft, tab-only state |

Neither is secure for secrets — XSS can read them. Prefer httpOnly cookies for auth tokens when possible.

> **One-liner:** Local survives browser restarts; session dies with the tab — neither is safe for secrets.

---

### 8. Server vs Client components (React / Next.js)

| Server Components | Client Components |
| --- | --- |
| Run on server | Run in browser (`"use client"`) |
| No browser APIs / hooks | Can use hooks, events |
| Smaller client JS | Interactive UI |
| Fetch close to data | Hydration needed |

> **One-liner:** Server components render on server with less JS; client components handle interactivity and hooks.

---

### 9. Relative, Absolute, Fixed, Sticky positioning

| Position | Behavior |
| --- | --- |
| **static** | Default flow |
| **relative** | Offset from normal position; creates containing block for absolute children |
| **absolute** | Positioned vs nearest positioned ancestor |
| **fixed** | Positioned vs viewport; stays on scroll |
| **sticky** | Acts relative until threshold, then sticks |

> **One-liner:** Relative offsets in flow; absolute vs ancestor; fixed vs viewport; sticky toggles between relative and fixed-like.

---

### 10. `let` vs `const`

| | `let` | `const` |
| --- | --- | --- |
| Reassign | Yes | No |
| Scope | Block | Block |
| Temporal dead zone | Yes | Yes |

`const` object can still mutate properties (`obj.x = 1`). Prefer `const` by default; `let` when reassignment needed. Avoid `var` (function scope, hoisting quirks).

> **One-liner:** `const` = no rebinding; `let` = rebinding allowed — both are block-scoped.

---

<a id="coding"></a>

## Coding & Output Questions

---

### 1. Reverse a string

```js
function reverse(str) {
  return str.split('').reverse().join('');
}
// or two-pointer for interview depth
```

**C#:** `new string(input.Reverse().ToArray())` or two pointers.

---

### 2. Find a missing number

Array of `1..n` with one missing:

```js
function missing(arr, n) {
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((a, b) => a + b, 0);
  return expected - actual;
}
```

---

### 3. Finding duplicates

```js
function duplicates(arr) {
  const seen = new Set();
  const dups = new Set();
  for (const x of arr) {
    if (seen.has(x)) dups.add(x);
    else seen.add(x);
  }
  return [...dups];
}
```

---

### 4. Broken `useEffect` (infinite loop risk)

```js
useEffect(() => {
  setData(fetchData());
}, [data]);
```

**Problem:** Effect depends on `data`, and sets `data` → re-run forever (or until fetch stabilizes badly). Also `fetchData()` likely returns a Promise — shouldn’t set state to a Promise directly.

**Fix:** Depend on stable inputs (`[]` or `[id]`), `async` inside effect, set resolved value:

```js
useEffect(() => {
  let cancelled = false;
  (async () => {
    const result = await fetchData();
    if (!cancelled) setData(result);
  })();
  return () => { cancelled = true; };
}, []); // or [userId]
```

---

### 5. `var` + `setTimeout` in a loop

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

**Output:** `4` `4` `4` (after ~1s) — `var` is function-scoped; all callbacks see final `i === 4`.

**Fix:** `let i` (block scope per iteration) or IIFE / `bind`.

---

### 6. `useState` line

```js
const [state, setState] = useState(initialValue);
```

Returns current state and setter. Updating state triggers re-render. Setter can take value or updater function `setState(prev => prev + 1)`.

---

### 7. Event loop output

```js
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve()
  .then(() => {
    console.log("Promise1");
    queueMicrotask(() => {
      console.log("Microtask");
    });
  })
  .then(() => {
    console.log("Promise2");
  });
console.log("End");
```

**Order:**

1. `Start`  
2. `End`  
3. `Promise1`  
4. `Microtask`  
5. `Promise2`  
6. `Timeout`  

**Why:** Sync first → microtasks (promise / `queueMicrotask`) before macrotasks (`setTimeout`).

---

<a id="criteria"></a>

## Interview Evaluation Criteria

| Area | What they look for |
| --- | --- |
| **Screening** | Communication, ability to learn, presentation, cultural fit, team player |
| **Frontend** | React hooks, JS fundamentals, routing, storage, CSS positioning |
| **Backend** | .NET, async, DI lifetimes, middleware, auth, patterns, Azure |
| **Database** | SQL/EF, indexing, IQueryable, transactions |
| **Cloud & DevOps** | Event Hub, Functions, Cosmos, deploy/observe basics |
| **Problem solving** | Clear structure, trade-offs, real examples |

**Target:** Score at least **3 out of 5** on criteria — clear communication + solid fundamentals + one strong project story per panel.

---

## 60-second prep checklist

1. Project pitch (2 min) with architecture diagram in your head  
2. AuthN vs AuthZ + RBAC example  
3. Transient/Scoped/Singleton trap  
4. IEnumerable vs IQueryable  
5. One latency reduction story with numbers  
6. Outbox / saga for distributed work  
7. Controlled inputs + protected routes  
8. Event-loop order (sync → micro → macro)  
9. `var` vs `let` in `setTimeout` loop  
10. One Factory + one CQRS sentence
