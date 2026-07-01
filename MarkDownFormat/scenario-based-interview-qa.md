<h1 style="color:#2563eb;">Scenario-Based Interview Q&amp;A</h1>

## Goal

<p style="color:#374151;">
Real-world <strong style="color:#16a34a;">scenario-based interview questions</strong> for senior .NET and Angular roles — concise answers with one-liners for quick revision.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#bucket-1"><span style="color:#2563eb;font-weight:700;">Bucket 1:</span> API Performance &amp; Troubleshooting</a> <span style="color:#6b7280;">(Q1–Q3, Q6, Q12, Q14, Q35, Q37, Q39)</span></li>
  <li><a href="#bucket-2"><span style="color:#16a34a;font-weight:700;">Bucket 2:</span> Data Processing &amp; Database</a> <span style="color:#6b7280;">(Q2, Q9, Q17, Q33, Q41, Q43, Q50)</span></li>
  <li><a href="#bucket-3"><span style="color:#7c3aed;font-weight:700;">Bucket 3:</span> Security &amp; Authentication</a> <span style="color:#6b7280;">(Q4, Q11, Q20, Q26, Q34, Q44)</span></li>
  <li><a href="#bucket-4"><span style="color:#dc2626;font-weight:700;">Bucket 4:</span> Microservices &amp; Distributed Systems</a> <span style="color:#6b7280;">(Q5, Q15, Q40, Q45, Q47, Q48, Q49)</span></li>
  <li><a href="#bucket-5"><span style="color:#ea580c;font-weight:700;">Bucket 5:</span> ASP.NET Core Patterns</a> <span style="color:#6b7280;">(Q7, Q8, Q13, Q38, Q46)</span></li>
  <li><a href="#bucket-6"><span style="color:#0891b2;font-weight:700;">Bucket 6:</span> Angular Scenarios</a> <span style="color:#6b7280;">(Q16–Q32, Q36)</span></li>
  <li><a href="#bucket-7"><span style="color:#9333ea;font-weight:700;">Bucket 7:</span> Architecture &amp; Infrastructure</a> <span style="color:#6b7280;">(Q10, Q42)</span></li>
  <li><a href="#final-preparation-checklist"><span style="color:#9333ea;font-weight:700;">Guide:</span> Final Preparation Checklist</a></li>
</ul>

---

<a id="bucket-1"></a>

## Bucket 1 — API Performance & Troubleshooting

---

<a id="q-1"></a>

#### Q1. API response time increased from 200ms to 10 seconds. How will you troubleshoot?

| Step | Action |
| --- | --- |
| 1 | Check APM/logs (App Insights, Datadog) — when did spike start, which endpoint |
| 2 | Compare p50 vs p99 — one slow query or all endpoints |
| 3 | Inspect SQL execution plans, missing indexes, N+1 queries |
| 4 | Check CPU, memory, thread pool starvation, GC pauses |
| 5 | Review recent deployments, config changes, downstream API latency |
| 6 | Profile hot path — dotTrace, PerfView, distributed traces |

> **One-liner:** Follow the request path — APM → DB → resources → recent changes — measure before guessing.

---

<a id="q-3"></a>

#### Q3. API receives 50,000 requests per minute. How will you scale?

| Layer | Approach |
| --- | --- |
| App | Horizontal scale — multiple instances behind load balancer |
| Cache | Redis for hot reads — reduce DB hits |
| DB | Read replicas, connection pooling, query optimization |
| Async | Offload heavy work to queues (Service Bus, RabbitMQ) |
| Gateway | Rate limiting, API gateway for throttling |
| Infra | Auto-scale rules on CPU/request count |

> **One-liner:** Scale out app instances, cache reads, optimize DB, and async heavy work — never scale a bottleneck alone.

---

<a id="q-6"></a>

#### Q6. SQL queries went from milliseconds to 15 seconds. How will you investigate?

| Step | Action |
| --- | --- |
| 1 | Capture slow query log / App Insights dependency traces |
| 2 | Run execution plan — seek vs scan, key lookups, spills |
| 3 | Check missing/outdated statistics, index fragmentation |
| 4 | Look for parameter sniffing, implicit conversions, functions on indexed columns |
| 5 | Compare row counts — data growth without index update |
| 6 | Check blocking, deadlocks, lock escalation |

> **One-liner:** Execution plan + statistics + blocking — find what changed in data volume or query shape.

---

<a id="q-12"></a>

#### Q12. Application memory keeps increasing every day. How will you identify the root cause?

| Step | Action |
| --- | --- |
| 1 | Take memory dumps over time — compare heap growth |
| 2 | Use dotMemory / PerfView — find objects not being collected |
| 3 | Check static collections, caches without eviction, event handler leaks |
| 4 | Review `IDisposable` not disposed, DbContext lifetime issues |
| 5 | Inspect large object heap — LOH fragmentation |
| 6 | Correlate with traffic patterns — leak vs legitimate growth |

> **One-liner:** Memory dumps over time reveal leaks — look for growing static caches, undisposed resources, and event subscriptions.

---

<a id="q-14"></a>

#### Q14. One client sends 1000 req/sec and affects other users. How will you handle it?

| Approach | Detail |
| --- | --- |
| Rate limiting | Per-client/API key — fixed or sliding window |
| Throttling | Return 429 Too Many Requests with Retry-After |
| Quotas | Daily/monthly limits per tenant |
| Isolation | Dedicated instance or queue for heavy client |
| API Gateway | Ocelot, YARP, Azure APIM — enforce at edge |

> **One-liner:** Rate-limit per client at the gateway — protect shared resources before one tenant starves others.

---

<a id="q-35"></a>

#### Q35. Dashboard loads data from 15 APIs. How would you redesign?

| Approach | Detail |
| --- | --- |
| BFF | Backend-for-Frontend aggregates 15 calls into one API |
| GraphQL | Single query, server resolves fields |
| Parallel + combine | If keeping separate — `Task.WhenAll` on server, not browser |
| Caching | Cache stable dashboard slices with short TTL |
| CQRS read model | Pre-computed dashboard view — one query |

> **One-liner:** Never let the browser fan out to 15 APIs — aggregate on the server via BFF or a read model.

---

<a id="q-37"></a>

#### Q37. Production slowness at 2 AM. Step-by-step troubleshooting?

| Step | Action |
| --- | --- |
| 1 | Confirm scope — all users or subset, which features |
| 2 | Check alerts, error rate, latency dashboards |
| 3 | Inspect recent deploys, config changes, cert expiry |
| 4 | DB — active queries, blocking, connection pool exhaustion |
| 5 | Infra — CPU, memory, disk, network on app and DB servers |
| 6 | Downstream — third-party APIs, message queue backlog |
| 7 | Rollback if deploy-related; scale if load spike |
| 8 | Post-incident — root cause doc, monitoring gap fix |

> **One-liner:** Scope → metrics → deploys → DB → infra → downstream → fix → document.

---

<a id="q-39"></a>

#### Q39. Database connections exhausted during peak traffic. How will you resolve?

| Cause | Fix |
| --- | --- |
| Connection leak | Ensure `DbContext` is scoped per request, always disposed |
| Pool too small | Increase max pool size cautiously — `Max Pool Size=200` |
| Long-running queries | Timeout, optimize, move reports offline |
| Too many instances | Each instance holds pool — balance instances vs pool size |
| Sync over async | `.Result`/`.Wait()` blocks threads — use async all the way |

> **One-liner:** Scoped DbContext + async + right pool size — leaks and blocked threads exhaust connections fast.

---

<a id="bucket-2"></a>

## Bucket 2 — Data Processing & Database

---

<a id="q-2"></a>

#### Q2. User uploads CSV with 10 lakh records. How will you process efficiently?

| Approach | Detail |
| --- | --- |
| Don't sync | Return 202 Accepted immediately — process in background |
| Streaming | Read CSV with `CsvReader` line-by-line — never load all in memory |
| Batching | Insert in batches of 1000–5000 — `SqlBulkCopy` or EF `AddRange` + `SaveChanges` |
| Queue | Hangfire, Azure Function, worker service picks up job |
| Progress | SignalR or polling endpoint for status |
| Validation | Validate row-by-row, log failures to error file |

> **One-liner:** Accept upload async, stream-read CSV, bulk-insert in batches — never process 10L rows in one HTTP request.

---

<a id="q-9"></a>

#### Q9. Two users update the same record simultaneously. How avoid data loss?

| Approach | Detail |
| --- | --- |
| Optimistic concurrency | Row version / `[Timestamp]` — `DbUpdateConcurrencyException` on conflict |
| Pessimistic locking | `UPDLOCK` for critical financial records |
| UI | Show conflict message — let user refresh and retry |
| ETag | HTTP `If-Match` header on API updates |
| Last-write-wins | Avoid for important data — silent overwrite |

> **One-liner:** Use optimistic concurrency tokens — detect conflict, don't silently overwrite.

---

<a id="q-17"></a>

#### Q17. Grid must display 1 lakh records. How improve performance?

| Layer | Approach |
| --- | --- |
| API | Server-side pagination — return 20–50 rows per page |
| API | Server-side sort and filter — never send 1L rows |
| UI | Virtual scroll (CDK virtual scroll) — render only visible rows |
| DB | Indexed columns used in filter/sort |
| Export | Separate download endpoint for full export — async job |

> **One-liner:** Server-side paging + virtual scroll — never load 1 lakh rows into the browser.

---

<a id="q-33"></a>

#### Q33. API returns 1 million records and Angular hangs. Redesign API and UI?

| API | UI |
| --- | --- |
| Pagination with `page`, `pageSize`, `totalCount` | Paginated grid — default 25 rows |
| Cursor-based pagination for live data | Virtual scroll for large single-page views |
| Projection — return only needed columns | Lazy load details on row expand |
| `AsNoTracking()` + indexed query | Cancel in-flight requests on navigation |
| Hard cap — reject unbounded queries | Loading skeleton, never bind 1M to `*ngFor` |

> **One-liner:** API must paginate and project — UI must never bind a million items to the DOM.

---

<a id="q-41"></a>

#### Q41. Process 10,000 background jobs per minute. How design?

| Component | Choice |
| --- | --- |
| Queue | Azure Service Bus, RabbitMQ, Hangfire with Redis/SQL |
| Workers | Multiple worker instances — compete for messages |
| Idempotency | Job ID deduplication — safe retries |
| Batching | Group small jobs where possible |
| Scale | Auto-scale workers on queue depth metric |
| DLQ | Dead-letter queue for poison messages |

> **One-liner:** Message queue + multiple idempotent workers scaled on queue depth — not HTTP endpoints.

---

<a id="q-43"></a>

#### Q43. Report takes 2 minutes. Users should not wait on screen.

| Approach | Detail |
| --- | --- |
| Async job | Submit report request → return job ID |
| Background worker | Generate PDF/Excel in worker |
| Notification | Email link or SignalR when ready |
| Storage | Save report to blob storage — download URL |
| Cache | Cache identical report requests |

> **One-liner:** Fire-and-forget background job + notify when done — never block HTTP for 2-minute reports.

---

<a id="q-50"></a>

#### Q50. Customer data overwritten by another user. How prevent in future?

| Approach | Detail |
| --- | --- |
| Optimistic concurrency | Row version on every update |
| Audit log | Who changed what, when — append-only audit table |
| Soft delete | Never hard-delete — recoverable history |
| Field-level tracking | EF change tracker or trigger-based audit |
| UI permissions | Role-based edit rights per record |

> **One-liner:** Concurrency tokens + audit trail — detect conflicts and trace every change.

---

<a id="bucket-3"></a>

## Bucket 3 — Security & Authentication

---

<a id="q-4"></a>

#### Q4. User logs out but JWT is stateless. How invalidate token?

| Approach | Detail |
| --- | --- |
| Token blacklist | Store revoked JTIs in Redis with TTL = token expiry |
| Short-lived access token | 15 min access + refresh token in HttpOnly cookie |
| Refresh token rotation | Invalidate refresh on logout — access expires naturally |
| Session server-side | Hybrid — JWT + server session check for critical apps |
| Version claim | Bump `token_version` in DB on logout — validate on each request |

> **One-liner:** Short-lived JWT + revoke refresh token + optional Redis blacklist for immediate logout.

---

<a id="q-11"></a>

#### Q11. Mobile, Angular, and third-party systems consume APIs. How secure?

| Layer | Approach |
| --- | --- |
| Auth | OAuth 2.0 / OpenID Connect — different clients, same IdP |
| Mobile | PKCE flow, secure token storage |
| SPA | Authorization Code + PKCE — no implicit flow |
| Third-party | Client credentials or API keys with scopes |
| Gateway | API gateway validates tokens, rate limits per client |
| HTTPS | TLS everywhere — no plain HTTP |

> **One-liner:** OAuth2/OIDC per client type + API gateway + scoped access — one security model, multiple flows.

---

<a id="q-20"></a>

#### Q20. Users manually change URLs in browser. How secure routes?

| Approach | Detail |
| --- | --- |
| Route guards | `CanActivate` — check auth before rendering |
| Role guards | `CanActivate` with role/permission service |
| API enforcement | Never trust UI — API validates every request |
| Lazy modules | Protected feature modules behind guards |
| 404 for unauthorized | Don't reveal route exists — redirect to login or 403 |

> **One-liner:** Route guards for UX, API authorization for security — UI hiding is not security.

---

<a id="q-26"></a>

#### Q26. Secure Angular against XSS and CSRF?

| Attack | Defense |
| --- | --- |
| XSS | Angular sanitizes by default — avoid `bypassSecurityTrustHtml` |
| XSS | Content Security Policy headers |
| XSS | Don't use `innerHTML` with user input |
| CSRF | SameSite cookies + anti-forgery tokens for cookie auth |
| CSRF | JWT in header (not cookie) — CSRF less relevant |
| General | HTTP interceptors for auth headers |

> **One-liner:** Trust Angular sanitization, add CSP, use JWT in Authorization header — never bypass sanitizer.

---

<a id="q-34"></a>

#### Q34. JWT expires while user is active. How handle token refresh?

| Angular | .NET |
| --- | --- |
| HTTP interceptor catches 401 | Issue short access token (15 min) + refresh token |
| Call `/auth/refresh` silently | Refresh endpoint validates refresh token, returns new pair |
| Queue requests during refresh | Rotate refresh token — invalidate old one |
| Redirect to login if refresh fails | Store refresh in HttpOnly cookie or secure storage |

> **One-liner:** Interceptor auto-refreshes on 401 — short access token + rotated refresh token on server.

---

<a id="q-44"></a>

#### Q44. Secrets must never be in source code. How manage?

| Environment | Tool |
| --- | --- |
| Development | User Secrets (`dotnet user-secrets`) |
| Production | Azure Key Vault, AWS Secrets Manager |
| CI/CD | Pipeline variables / Key Vault references |
| Angular | No secrets in frontend — only public config |
| Rotation | Automated cert/secret rotation in Key Vault |

> **One-liner:** User Secrets locally, Key Vault in prod — never commit connection strings or API keys.

---

<a id="bucket-4"></a>

## Bucket 4 — Microservices & Distributed Systems

---

<a id="q-5"></a>

#### Q5. Order succeeds, Payment succeeds, Inventory fails. How maintain consistency?

| Pattern | Detail |
| --- | --- |
| Saga (orchestration) | Coordinator runs steps; on inventory fail → compensate payment + order |
| Saga (choreography) | Events: `PaymentFailed` triggers refund via event chain |
| Compensating transactions | Semantic undo — refund, cancel order, release stock |
| Outbox pattern | Reliable event publish with DB write |
| Avoid 2PC | Two-phase commit doesn't scale in microservices |

> **One-liner:** Saga with compensating transactions — no distributed 2PC; undo completed steps on failure.

---

<a id="q-15"></a>

#### Q15. Service A needs data from Service B. REST, Queue, or Events?

| Need | Choice |
| --- | --- |
| Immediate response required | REST or gRPC sync call |
| Fire-and-forget, loose coupling | Message queue (async) |
| Multiple consumers react | Events (pub/sub) |
| Read own data | Replicate via events — don't chain sync calls |
| High throughput | Events over REST chaining |

> **One-liner:** Sync REST/gRPC when you need an answer now; async events when you can decouple and scale.

---

<a id="q-40"></a>

#### Q40. Microservice failing continuously, cascading failures. How handle?

| Pattern | Detail |
| --- | --- |
| Circuit breaker | Polly — stop calling failing service, fail fast |
| Timeout | Every outbound call has timeout |
| Bulkhead | Isolate thread pools per downstream |
| Fallback | Return cached/default response |
| Retry | Exponential backoff — only for transient errors |
| Health checks | Remove unhealthy instance from load balancer |

> **One-liner:** Circuit breaker + timeout + bulkhead — fail fast so one bad service doesn't take down the chain.

---

<a id="q-45"></a>

#### Q45. Zero downtime deployments. How implement?

| Strategy | Detail |
| --- | --- |
| Blue-green | Two environments — switch traffic atomically |
| Rolling update | K8s/App Service — replace instances gradually |
| DB migrations | Backward-compatible migrations first — expand/contract |
| Feature flags | Deploy code dark, enable via flag |
| Health probes | New instances receive traffic only when healthy |

> **One-liner:** Rolling or blue-green deploy + backward-compatible DB migrations + health checks.

---

<a id="q-47"></a>

#### Q47. Cache frequently used data but users see updated info. Cache invalidation?

| Strategy | Detail |
| --- | --- |
| TTL | Short expiry for semi-fresh data — 1–5 min |
| Write-through | Update cache on every write |
| Event-driven | Publish `EntityUpdated` → invalidate cache key |
| Cache-aside | Read cache miss → DB → populate; invalidate on update |
| Version key | Include version in cache key — bump on schema change |

> **One-liner:** TTL for simplicity, event-driven invalidation for accuracy — pick based on staleness tolerance.

---

<a id="q-48"></a>

#### Q48. Third-party API slow or unavailable. Prevent impact?

| Pattern | Detail |
| --- | --- |
| Circuit breaker | Stop calling after failure threshold |
| Timeout | 2–5 sec max — don't wait 30 sec |
| Fallback | Cached last-known response or degraded mode |
| Async | Don't block user flow — queue and retry |
| Bulkhead | Dedicated HttpClient — isolate from main pool |

> **One-liner:** Circuit breaker + timeout + cached fallback — never let a third party block your core flow.

---

<a id="q-49"></a>

#### Q49. Track request across five microservices. Distributed tracing?

| Tool | Detail |
| --- | --- |
| OpenTelemetry | Instrument all services — traces, metrics, logs |
| Correlation ID | Pass `traceparent` header on every HTTP call |
| Collector | OTel Collector → Jaeger, App Insights, Datadog |
| Spans | Each service creates child spans — full waterfall view |
| Logging | Include trace ID in every log line |

> **One-liner:** OpenTelemetry + W3C trace context — one trace ID follows the request across all five services.

---

<a id="bucket-5"></a>

## Bucket 5 — ASP.NET Core Patterns

---

<a id="q-7"></a>

#### Q7. try-catch in every controller. Redesign exception handling?

| Approach | Detail |
| --- | --- |
| Global middleware | `UseExceptionHandler` — one place for all unhandled errors |
| `IExceptionFilter` | MVC-specific — return `ProblemDetails` JSON |
| ProblemDetails | RFC 7807 — consistent error shape |
| Never catch in controller | Let exceptions bubble — middleware handles |
| Custom exceptions | `NotFoundException` → 404, `ValidationException` → 400 |

> **One-liner:** Remove controller try-catch — global exception middleware returns consistent ProblemDetails.

---

<a id="q-8"></a>

#### Q8. V1 APIs in production, V2 needed. How implement versioning?

| Strategy | Detail |
| --- | --- |
| URL path | `/api/v1/orders`, `/api/v2/orders` — most visible |
| Header | `api-version: 2.0` — clean URLs |
| Package | `Asp.Versioning.Mvc` — `[ApiVersion("2.0")]` |
| Compatibility | V1 frozen — only additive changes in V2 |
| Deprecation | `Sunset` header + docs — migration timeline |

> **One-liner:** URL or header versioning with `Asp.Versioning` — keep V1 alive until all clients migrate.

---

<a id="q-13"></a>

#### Q13. Sending invoices takes 5 minutes. Users should not wait.

| Approach | Detail |
| --- | --- |
| Background job | Hangfire / Azure Function / `IHostedService` |
| Immediate response | `202 Accepted` + job ID |
| Email | Send invoice PDF when job completes |
| Queue | Message queue for reliable delivery |
| Idempotent | Same invoice request = same job — no duplicates |

> **One-liner:** Queue invoice generation — return immediately, email when done.

---

<a id="q-38"></a>

#### Q38. Audit logging across all APIs without changing every controller.

| Approach | Detail |
| --- | --- |
| Middleware | Audit middleware logs method, path, user, timestamp |
| Action filter | `IAsyncActionFilter` — log before/after action |
| EF interceptor | `SaveChangesInterceptor` — audit all DB writes |
| MediatR pipeline | `IPipelineBehavior` — cross-cutting for CQRS |
| Outbox | Append-only audit table — immutable log |

> **One-liner:** Middleware or action filter for HTTP audit, EF interceptor for data changes — zero controller changes.

---

<a id="q-46"></a>

#### Q46. Different clients need different response formats from same API.

| Approach | Detail |
| --- | --- |
| Content negotiation | `Accept: application/json` vs `application/xml` |
| BFF pattern | Separate backend per client type — tailored DTOs |
| DTO projection | Same service, different response DTOs per client |
| API versioning | V1 JSON shape vs V2 extended shape |
| GraphQL | Client selects fields |

> **One-liner:** BFF per client type or content negotiation — don't force one JSON shape on everyone.

---

<a id="bucket-6"></a>

## Bucket 6 — Angular Scenarios

---

<a id="q-16"></a>

#### Q16. Angular page takes 20 seconds to load. How troubleshoot?

| Check | Tool |
| --- | --- |
| Network tab | Slow API calls, large payloads, waterfall |
| Bundle size | `ng build --stats-json` → webpack analyzer |
| Change detection | Excessive cycles — `OnPush` strategy |
| Lazy loading | Are all modules eagerly loaded? |
| Lighthouse | Performance audit score |
| API | Backend latency vs frontend rendering |

> **One-liner:** Network tab first — usually slow APIs or huge bundle, not Angular itself.

---

<a id="q-18"></a>

#### Q18. Data flows Parent → Child → Grandchild → Great Grandchild. How implement?

| Approach | When |
| --- | --- |
| `@Input` / `@Output` | 1–2 levels only |
| Shared service | Injectable service with `BehaviorSubject` |
| NgRx / signals | Deep trees, many siblings need same data |
| Router state | Pass via route `data` or query params |
| Avoid | Prop drilling 4 levels — use service or store |

> **One-liner:** Don't prop-drill 4 levels — shared service or NgRx for deep component trees.

---

<a id="q-19"></a>

#### Q19. Component reloads frequently, calls same API repeatedly. Optimize?

| Fix | Detail |
| --- | --- |
| `shareReplay(1)` | Cache observable result across subscribers |
| `OnPush` | Reduce unnecessary re-renders |
| `distinctUntilChanged` | Skip duplicate emissions |
| Route reuse strategy | `RouteReuseStrategy` — don't destroy component |
| Debounce | `debounceTime` on search triggers |

> **One-liner:** `shareReplay` + `OnPush` + fix what's causing unnecessary re-renders.

---

<a id="q-21"></a>

#### Q21. Shopping cart count updates instantly across components.

| Approach | Detail |
| --- | --- |
| Shared service | `CartService` with `BehaviorSubject<number>` |
| NgRx | `cartCount` in store — all components subscribe |
| Signals (Angular 16+) | `signal()` + `computed()` — reactive without RxJS |
| Not `@Input` chain | Siblings can't pass to each other easily |

> **One-liner:** Shared service or NgRx store — one source of truth, all components subscribe.

---

<a id="q-22"></a>

#### Q22. Form with 200 fields. Template-Driven or Reactive?

| Choice | Why |
| --- | --- |
| **Reactive Forms** | 200 fields need dynamic validation, grouping, conditional logic |
| FormGroup / FormArray | Programmatic control — add/remove sections |
| Template-Driven | Only for simple forms — unmaintainable at 200 fields |
| Performance | Reactive forms don't re-run validation on every change detection |

> **One-liner:** Reactive Forms — only viable choice for large, dynamic, validated forms.

---

<a id="q-23"></a>

#### Q23. Users need offline support with poor connectivity.

| Approach | Detail |
| --- | --- |
| Service Worker | Cache static assets — PWA |
| IndexedDB | Store data locally — `localforage` |
| Sync queue | Queue writes offline, replay when online |
| `@angular/pwa` | `ng add @angular/pwa` |
| Optimistic UI | Show change immediately, sync in background |

> **One-liner:** PWA service worker for assets + IndexedDB for data + sync queue for writes.

---

<a id="q-24"></a>

#### Q24. Screen needs data from 10 APIs. Load efficiently?

| Approach | Detail |
| --- | --- |
| `forkJoin` | Parallel calls — wait for all, render once |
| `combineLatest` | When streams update independently |
| BFF | Best — one API call from backend |
| Loading state | Single skeleton until all ready — or progressive |
| Error handling | `catchError` per call — partial UI on failure |

> **One-liner:** `forkJoin` for parallel fetch, but prefer one BFF endpoint over 10 browser calls.

---

<a id="q-25"></a>

#### Q25. 50+ screens. When introduce NgRx?

| Signal | Action |
| --- | --- |
| Shared state across unrelated components | Consider NgRx or signals |
| Prop drilling pain | Move to store |
| Complex async flows | Effects for side effects |
| Simple apps | Services + BehaviorSubject is enough |
| Don't premature | NgRx adds boilerplate — justify with complexity |

> **One-liner:** Introduce NgRx when shared state and side effects outgrow services — not at screen count alone.

---

<a id="q-27"></a>

#### Q27. Initial bundle 25MB. How optimize?

| Fix | Impact |
| --- | --- |
| Lazy load routes | Biggest win — split by feature module |
| Tree shaking | Remove unused imports |
| Analyze bundle | `webpack-bundle-analyzer` — find culprits |
| Replace heavy libs | Moment.js → date-fns, lodash → specific imports |
| Production build | `ng build --configuration production` |
| Source maps off | In production build |

> **One-liner:** Lazy-load feature modules and analyze bundle — 25MB means something huge is eagerly loaded.

---

<a id="q-28"></a>

#### Q28. Faster startup. How implement lazy loading?

```typescript
// app-routing.module.ts
const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
];
```

| Rule | Detail |
| --- | --- |
| Feature modules | Each major section lazy-loaded |
| Preloading | `PreloadAllModules` after initial load — optional |
| Standalone (v17+) | `loadComponent` for route-level lazy components |

> **One-liner:** `loadChildren` per feature route — only load code when user navigates there.

---

<a id="q-29"></a>

#### Q29. Stock prices refresh every second. Real-time updates?

| Approach | Detail |
| --- | --- |
| SignalR | WebSocket hub — server pushes price updates |
| WebSocket | Raw WebSocket for custom protocol |
| SSE | Server-Sent Events — one-way server push |
| Polling | Last resort — `interval(1000)` hits server hard |
| Angular | Subscribe in service, `async` pipe in template |

> **One-liner:** SignalR or WebSocket push — polling every second doesn't scale.

---

<a id="q-30"></a>

#### Q30. Form fields stored in DB, rendered dynamically.

| Approach | Detail |
| --- | --- |
| `FormGroup` dynamic | Load field config from API → build controls in code |
| `FormArray` | Repeatable sections |
| JSON schema | Store form schema in DB — render with custom component |
| Validation rules | Fetch rules with field config — apply validators dynamically |
| Libraries | `ngx-formly` — JSON-driven forms |

> **One-liner:** Fetch field metadata from API → build `FormGroup` programmatically or use ngx-formly.

---

<a id="q-31"></a>

#### Q31. App feels fast but users say slow. Angular, Network, API, or DB?

| Layer | How to Check |
| --- | --- |
| Network | DevTools Network tab — TTFB, download time |
| API | Server APM — p95 latency per endpoint |
| DB | SQL execution plans, slow query log |
| Angular | Performance profiler — change detection cycles |
| Perceived | Time to interactive, Largest Contentful Paint |

> **One-liner:** Measure each layer independently — Network tab, APM, and Lighthouse tell you where time goes.

---

<a id="q-32"></a>

#### Q32. Users double-click Save, duplicate records created.

| Fix | Detail |
| --- | --- |
| Disable button | `[disabled]="saving"` on submit |
| Idempotency key | Client sends `Idempotency-Key` header — server dedupes |
| Server unique constraint | DB unique index on business key |
| Debounce | Ignore second click within 2 sec |
| Loading spinner | Visual feedback prevents repeat click |

> **One-liner:** Disable button on submit + idempotency key on API + DB unique constraint.

---

<a id="q-36"></a>

#### Q36. Managers see employee requests instantly. Real-time notifications?

| Stack | Detail |
| --- | --- |
| SignalR hub | `NotifyManager(employeeId, request)` on submit |
| Angular | `@microsoft/signalr` client — subscribe in service |
| Fallback | SSE or long polling if WebSocket blocked |
| Toast UI | `MatSnackBar` or custom notification component |
| Persistence | Also store notification in DB for offline managers |

> **One-liner:** SignalR hub pushes to manager group on submit — subscribe in Angular notification service.

---

<a id="bucket-7"></a>

## Bucket 7 — Architecture & Infrastructure

---

<a id="q-10"></a>

#### Q10. Users upload 2GB video files. Storage architecture?

| Layer | Choice |
| --- | --- |
| Upload | Chunked/resumable upload — tus.io, Azure Blob block upload |
| Storage | Azure Blob / S3 — not database, not local disk |
| CDN | Azure CDN / CloudFront for delivery |
| Metadata | DB stores URL, size, mime — not file bytes |
| Processing | Queue-triggered transcoding (Azure Function, FFmpeg) |
| Direct upload | SAS URL — browser uploads directly to blob, bypasses API |

> **One-liner:** Chunked upload to blob storage with SAS direct upload — never stream 2GB through your API server.

---

<a id="q-42"></a>

#### Q42. Multi-tenant app — same codebase, multiple customers.

| Strategy | Detail |
| --- | --- |
| Shared DB + tenant ID | `TenantId` column on every row — simplest |
| Schema per tenant | Separate schema — better isolation |
| DB per tenant | Maximum isolation — enterprise clients |
| Resolution | Subdomain, JWT claim, or header → `ITenantProvider` |
| EF global filter | `HasQueryFilter(e => e.TenantId == _tenantId)` |
| Cache keys | Prefix with tenant ID — no cross-tenant leak |

> **One-liner:** Tenant ID in JWT + EF global query filter — simplest; schema/DB per tenant for strict isolation.

---

<a id="final-preparation-checklist"></a>

## Final Preparation Checklist

- Can explain step-by-step API latency troubleshooting.
- Can design async bulk CSV processing without blocking HTTP.
- Can describe JWT logout, refresh, and multi-client security.
- Can explain saga pattern for distributed transaction failure.
- Can investigate slow SQL with execution plans and concurrency.
- Can redesign global exception handling without controller try-catch.
- Can implement API versioning without breaking V1 clients.
- Can design server-side pagination for large grids.
- Can explain Angular performance — lazy load, OnPush, virtual scroll.
- Can choose REST vs events for microservice communication.
- Can implement circuit breaker, cache invalidation, and distributed tracing.
- Can design multi-tenant, zero-downtime deploy, and secrets management.
