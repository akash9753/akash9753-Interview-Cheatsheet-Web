<h1 style="color:#2563eb;">Today's Interview Q&amp;A</h1>

## Goal

<p style="color:#374151;">
<strong style="color:#16a34a;">16 real interview questions</strong> — LINQ/EF Core, ASP.NET Core APIs, MySQL indexing, performance, thread pool starvation, error contracts, API versioning, and one coding problem. Concise tables + one-liners for revision.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#bucket-1"><span style="color:#2563eb;font-weight:700;">1.</span> Introduction</a> <span style="color:#6b7280;">(Q1)</span></li>
  <li><a href="#bucket-2"><span style="color:#2563eb;font-weight:700;">2.</span> LINQ, IEnumerable &amp; IQueryable</a> <span style="color:#6b7280;">(Q2–Q4)</span></li>
  <li><a href="#bucket-3"><span style="color:#16a34a;font-weight:700;">3.</span> API Errors &amp; Versioning</a> <span style="color:#6b7280;">(Q5–Q7)</span></li>
  <li><a href="#bucket-4"><span style="color:#16a34a;font-weight:700;">4.</span> MySQL Indexing</a> <span style="color:#6b7280;">(Q8–Q10)</span></li>
  <li><a href="#bucket-5"><span style="color:#7c3aed;font-weight:700;">5.</span> Performance &amp; Thread Pool</a> <span style="color:#6b7280;">(Q11–Q15)</span></li>
  <li><a href="#bucket-6"><span style="color:#dc2626;font-weight:700;">6.</span> Coding — Stack &amp; Greedy</a> <span style="color:#6b7280;">(Q16)</span></li>
  <li><a href="#interview-quick-answers"><span style="color:#9333ea;font-weight:700;">Guide:</span> Interview Quick Answers</a></li>
</ul>

---

<a id="bucket-1"></a>

## 1. Introduction

<a id="q-1"></a>

#### Q1. Tell me about yourself.

| Section | What to cover (60–90 sec) |
| --- | --- |
| **Present** | Current role, tech stack (.NET, ASP.NET Core, EF, SQL), 1–2 recent wins |
| **Past** | Relevant experience — APIs, performance, databases, team size |
| **Future** | Why this role/company — growth, product, tech fit |
| **Close** | One line tying your strengths to their needs |

**Template:**

> I'm a .NET developer with **X years** building **ASP.NET Core APIs** and **SQL-backed** systems. In my current role at **[Company]**, I **[specific achievement — e.g. cut API latency 40%, designed error contract, optimized MySQL indexes]**. Before that, I worked on **[relevant domain]**. I'm strong in **EF Core, API design, performance troubleshooting**, and collaborating with teams on production issues. I'm looking for **[role]** where I can **[contribute — scale APIs, own backend, mentor]** — and this team's focus on **[their product/tech]** is a great fit.

| Do | Don't |
| --- | --- |
| Match job description keywords | Read entire resume line by line |
| Quantify impact (%, ms, users) | Personal life story |
| End with why this company | Say "I need a job" |

> **One-liner:** Present → past highlight → why this role — 90 seconds max, tailored to the job description.

---

<a id="bucket-2"></a>

## 2. LINQ, IEnumerable & IQueryable

<a id="q-2"></a>

#### Q2. What is the difference between IEnumerable and IQueryable?

| Feature | `IEnumerable<T>` | `IQueryable<T>` |
| --- | --- | --- |
| **Execution** | In-memory (client-side) | Deferred — translated by provider (e.g. SQL) |
| **Data source** | Lists, arrays, in-memory collections | EF Core `DbSet`, ORM |
| **LINQ provider** | LINQ to Objects | LINQ to Entities |
| **When it runs** | On enumeration (`foreach`, `ToList()`) | When query is executed against provider |
| **Expression tree** | No — delegates compiled in C# | Yes — provider builds SQL/query |
| **Best for** | Data already in memory | Database queries — filter before fetch |

```csharp
// IQueryable — SQL: SELECT * FROM Orders WHERE Amount > 100
var q = db.Orders.Where(o => o.Amount > 100);

// IEnumerable — loads all rows, then filters in C#
var bad = db.Orders.ToList().Where(o => o.Amount > 100);
```

> **One-liner:** `IQueryable` executes on the server (SQL); `IEnumerable` executes in memory after data is fetched.

---

<a id="q-3"></a>

#### Q3. When would you use IQueryable over IEnumerable in an ASP.NET Core API?

| Scenario | Use `IQueryable` | Use `IEnumerable` |
| --- | --- | --- |
| EF Core `DbSet` query | ✅ Filter/sort/page in SQL | ❌ Avoid until after DB filter |
| Pagination (`Skip`/`Take`) | ✅ Before `ToListAsync()` | ❌ Loads entire table |
| Dynamic filters from query string | ✅ Build expression, one SQL | ❌ Load all then filter |
| In-memory aggregation after cache hit | ❌ | ✅ Data already in Redis/memory |
| Calling non-translatable C# method | ❌ Must switch to client eval | ✅ After `.AsEnumerable()` |

**API pattern:**

```csharp
public async Task<ActionResult<List<OrderDto>>> GetOrders([FromQuery] OrderFilter filter)
{
    IQueryable<Order> query = _db.Orders.AsNoTracking();
    if (filter.Status is not null)
        query = query.Where(o => o.Status == filter.Status);

    return Ok(await query
        .OrderByDescending(o => o.CreatedAt)
        .Take(50)
        .Select(o => new OrderDto(o.Id, o.Amount))
        .ToListAsync());
}
```

> **One-liner:** Keep EF queries as `IQueryable` until the last step — push `Where`, `OrderBy`, `Skip`, `Take` to SQL before `ToListAsync()`.

---

<a id="q-4"></a>

#### Q4. If you have an IQueryable from EF Core and call a custom C# method inside Where, what happens at runtime, and how would you handle it safely?

| What happens | Detail |
| --- | --- |
| **Default** | EF tries to translate to SQL — **throws** if method is not translatable |
| **If forced** | `.AsEnumerable()` / `.ToList()` first → entire set loaded → filter in memory |
| **Risk** | Silent performance disaster if someone materializes early |

```csharp
// ❌ Throws or unpredictable — CustomMethod not in SQL
query.Where(x => CustomMethod(x.Name));

// ✅ Option A — translate logic to SQL-safe expressions
query.Where(x => x.Name.StartsWith(prefix));

// ✅ Option B — filter in DB first, then client eval on small set
query.Where(x => x.IsActive)
     .AsEnumerable()
     .Where(x => CustomMethod(x.Name));

// ✅ Option C — map to SQL via EF.Functions or mapped DB function
query.Where(x => EF.Functions.Like(x.Name, pattern));
```

| Safe approach | When |
| --- | --- |
| Rewrite as translatable expression | Always prefer |
| DB scalar function / computed column | Reusable server-side logic |
| `.AsEnumerable()` after narrow filter | Small result set only |
| Raw SQL / `FromSqlInterpolated` | Complex logic that must run on DB |

> **One-liner:** Custom C# in `Where` usually can't translate — rewrite for SQL, use a DB function, or materialize only after narrowing the query.

---

<a id="bucket-3"></a>

## 3. API Errors & Versioning

<a id="q-5"></a>

#### Q5. How do you structure exception handling so you return consistent RFC 7807 ProblemDetails responses while avoiding leaking internal errors?

| Layer | Responsibility |
| --- | --- |
| **Global exception middleware** | Catch unhandled exceptions → map to `ProblemDetails` |
| **Domain exceptions** | Typed exceptions (`NotFoundException`, `ValidationException`) → known status codes |
| **Development** | `UseDeveloperExceptionPage()` — full stack trace |
| **Production** | Generic `detail` to client; full exception logged server-side only |

```csharp
// Program.cs
builder.Services.AddProblemDetails();
app.UseExceptionHandler();
app.UseStatusCodePages();

// Custom handler
public class GlobalExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext ctx, Exception ex, CancellationToken ct)
    {
        var (status, title) = ex switch
        {
            NotFoundException => (404, "Not Found"),
            ValidationException => (400, "Validation Error"),
            _ => (500, "An error occurred")
        };

        var problem = new ProblemDetails
        {
            Status = status,
            Title = title,
            Detail = status == 500 ? "Contact support with trace ID." : ex.Message,
            Instance = ctx.Request.Path
        };
        problem.Extensions["traceId"] = Activity.Current?.Id ?? ctx.TraceIdentifier;

        _logger.LogError(ex, "Unhandled exception {TraceId}", problem.Extensions["traceId"]);
        await Results.Problem(problem).ExecuteAsync(ctx);
        return true;
    }
}
```

| Rule | Why |
| --- | --- |
| Never return stack traces in prod | Security + UX |
| Log full exception with `traceId` | Support can correlate |
| Use `ValidationProblemDetails` for 400 | RFC 7807 + field errors |
| Map known exceptions explicitly | Predictable API contract |

> **One-liner:** Global handler → `ProblemDetails` with safe `detail` in prod; log full exception + `traceId` server-side only.

---

<a id="q-6"></a>

#### Q6. Design an API error response contract with errorCode, message, details, and traceId/correlationId. How would you keep it stable across API versions?

```json
{
  "errorCode": "ORDER_NOT_FOUND",
  "message": "The requested order was not found.",
  "details": { "orderId": "abc-123" },
  "traceId": "00-4bf92f3577b34da6a3ce929d0e0e4736-00",
  "correlationId": "req-7f3a2b1c"
}
```

| Field | Purpose | Versioning rule |
| --- | --- | --- |
| `errorCode` | Machine-readable stable identifier | **Never rename** — add new codes only |
| `message` | Human-readable summary | Can improve wording; don't change meaning |
| `details` | Structured context (field errors, IDs) | Add optional fields only |
| `traceId` | Distributed trace / ASP.NET `Activity` | Always present |
| `correlationId` | Client or gateway request ID | Propagate from header `X-Correlation-Id` |

| Stability tactic | How |
| --- | --- |
| Separate contract from `ProblemDetails` | Wrapper implements RFC 7807 via `type` + extensions |
| Version in URL (`/v1`) not in error shape | Same JSON schema for v1 and v2 |
| Error code registry | Documented enum / OpenAPI `x-error-codes` |
| Additive changes only | New `details` keys OK; removing breaks clients |

```csharp
public record ApiErrorResponse(
    string ErrorCode,
    string Message,
    object? Details,
    string TraceId,
    string? CorrelationId);
```

> **One-liner:** Stable `errorCode` + additive `details`; never break the envelope across versions — version URLs, not error JSON shape.

---

<a id="q-7"></a>

#### Q7. Compare URI versioning (/v1), header-based versioning, and media type versioning. Which do you prefer for long-term backward compatibility, and why?

| Strategy | Example | Pros | Cons |
| --- | --- | --- | --- |
| **URI** | `/api/v1/orders` | Obvious, cacheable, easy routing | URL pollution; "wrong" version bookmarked |
| **Header** | `Api-Version: 2` | Clean URLs | Hidden; harder to test in browser; cache/CDN complexity |
| **Media type** | `Accept: application/vnd.myapi.v2+json` | REST-pure; content negotiation | Hardest for clients; tooling support weak |

| Criteria | URI | Header | Media type |
| --- | --- | --- | --- |
| Discoverability | ✅ High | ⚠️ Low | ⚠️ Low |
| CDN / proxy caching | ✅ Easy | ⚠️ Vary header needed | ⚠️ Vary on Accept |
| Client simplicity | ✅ | ⚠️ | ❌ |
| Long-term compat | ✅ Route old + new in parallel | ✅ | ✅ |

**Preference for long-term backward compatibility:** **URI versioning (`/v1`, `/v2`)**

| Why |
| --- |
| Explicit in logs, traces, and support tickets |
| Run v1 and v2 side-by-side with separate controllers or route maps |
| Easy deprecation policy — sunset `/v1` with documented timeline |
| Works with OpenAPI per version (`/swagger/v1`, `/swagger/v2`) |
| No surprise for clients — version visible in every request |

> **One-liner:** Prefer **URI versioning** for clarity and parallel deployments — run v1/v2 together, deprecate on a published schedule.

---

<a id="bucket-4"></a>

## 4. MySQL Indexing

<a id="q-8"></a>

#### Q8. In MySQL, if a query filters on user_id and created_at and sorts by created_at DESC, how would you choose the composite index order, and why?

**Query pattern:**

```sql
SELECT * FROM documents
WHERE user_id = 42
  AND created_at >= '2026-01-01'
ORDER BY created_at DESC;
```

| Index choice | Columns | Why |
| --- | --- | --- |
| **Recommended** | `(user_id, created_at DESC)` | Equality on `user_id` first (high selectivity), then range + sort on `created_at` |
| Wrong order | `(created_at, user_id)` | Can't use `user_id` equality efficiently after range on `created_at` |

**Leftmost prefix rule:**

1. **Equality columns first** — `user_id = ?`
2. **Range/sort columns next** — `created_at` range + `ORDER BY created_at DESC`
3. Match **sort direction** in index when possible (`DESC` index in MySQL 8+)

```sql
CREATE INDEX ix_documents_user_created
ON documents (user_id, created_at DESC);
```

> **One-liner:** Composite index **`(user_id, created_at DESC)`** — equality column first, then sort/range column matching `ORDER BY` direction.

---

<a id="q-9"></a>

#### Q9. When can MySQL use the composite index to return rows already in the correct order without performing a filesort?

| Condition | Required |
| --- | --- |
| **Index column order** | Matches `ORDER BY` column order |
| **Sort direction** | Index direction matches `ASC`/`DESC` (MySQL 8+ supports mixed) |
| **No gap in prefix** | All columns before `ORDER BY` column used with **equality** (`=`), not range |
| **Same table** | No join reorder that breaks index order |
| **EXPLAIN** | `Extra` does **not** show `Using filesort` |

```sql
-- ✅ Index (user_id, created_at DESC) — no filesort
WHERE user_id = 42
ORDER BY created_at DESC;

-- ⚠️ May filesort — created_at is range, not pure equality
WHERE user_id = 42 AND created_at >= '2026-01-01'
ORDER BY created_at DESC;
-- Still often avoids filesort within user_id partition in MySQL 8+
```

| EXPLAIN signal | Meaning |
| --- | --- |
| `Using index` | Covering index — even better |
| `Using filesort` | Extra sort pass — consider index tuning |
| `key = ix_documents_user_created` | Index used for access |

> **One-liner:** No filesort when `ORDER BY` matches index column order/direction and preceding columns use equality filters.

---

<a id="q-10"></a>

#### Q10. If the query changes to `user_id IN (...)` `ORDER BY created_at DESC` `LIMIT 50`, how does that affect MySQL's ability to use the same index for ordering, and what would you do?

| Impact | Detail |
| --- | --- |
| **Multiple `user_id` values** | Optimizer may scan multiple index ranges or use `index_merge` |
| **Global sort across users** | `(user_id, created_at)` sorts within each user, **not globally** by `created_at` |
| **Likely result** | `Using filesort` + `LIMIT 50` — sort all matching rows then take 50 |
| **LIMIT helps** | Stops after enough rows only if optimizer can avoid full sort (rare with `IN`) |

| Mitigation | When |
| --- | --- |
| **Rewrite — union per user** | Small fixed set of user IDs |
| **Denormalized feed table** | `(owner_id, created_at, doc_id)` pre-sorted per tenant |
| **Index `(created_at DESC, user_id)`** | If filter is date-range heavy, not user-heavy |
| **Elastic / search index** | Cross-user chronological feeds at scale |
| **Partition by user_id** | Large multi-tenant — queries scoped per partition |

```sql
-- Alternative index if query is "latest 50 across many users by date"
CREATE INDEX ix_documents_created_user ON documents (created_at DESC, user_id);

-- Or restrict query — per-user pagination (index-friendly)
WHERE user_id = ? ORDER BY created_at DESC LIMIT 50;
```

> **One-liner:** `IN (...)` + global `ORDER BY created_at` breaks per-user index ordering — expect filesort; rewrite, denormalize feed, or paginate per user.

---

<a id="bucket-5"></a>

## 5. Performance & Thread Pool

<a id="q-11"></a>

#### Q11. When a single endpoint is slow under load, how do you determine whether the bottleneck is CPU, memory allocation/GC, the database, or thread pool contention?

| Signal | CPU bound | Memory / GC | Database | Thread pool |
| --- | --- | --- | --- | --- |
| **CPU %** | High sustained | Spiky during GC | Low–medium | Low (threads blocked) |
| **Request duration** | Grows with compute | Pauses correlate with Gen2 | Slow SQL in traces | Queue time high |
| **APM dependency** | App span long, DB fast | Heap growth | DB span dominates | Thread pool queue length ↑ |
| **GC metrics** | Normal | `% time in GC` high, Gen2 freq | Normal | Normal |
| **Thread pool** | Active ≈ cores | Normal | Pool waiting on IO | **Queue length** >> 0, starvation counter |

**Investigation order:**

| Step | Tool |
| --- | --- |
| 1 | APM trace — breakdown app vs SQL vs external |
| 2 | SQL slow log / `EXPLAIN` — p95 query time |
| 3 | `dotnet-counters` — CPU, GC, thread pool queue |
| 4 | Load test single endpoint — isolate variable |
| 5 | Profile (`dotnet-trace`, dotTrace) if app-bound |

> **One-liner:** APM trace first — if DB span is 90%, tune SQL; if app span is long with low CPU, check thread pool queue and blocking calls.

---

<a id="q-12"></a>

#### Q12. Once you've confirmed the bottleneck is in .NET code rather than the database, how do you decide between async/await, increasing concurrency, or caching? What metrics drive that decision?

| Option | When | Metrics that say "yes" |
| --- | --- | --- |
| **async/await** | IO-bound — HTTP, DB, file, message bus | Threads blocked waiting on IO; low CPU during wait |
| **More concurrency / scale out** | CPU-bound or throughput ceiling | CPU > 70%, healthy memory, linear scale with instances |
| **Caching** | Repeated identical reads, stale OK | High read ratio, same keys, DB still hot after SQL tune |

| Decision tree | |
| --- | --- |
| Same query/response repeated? | → **Cache** (hit rate, TTL, invalidation) |
| Waiting on external IO with sync code? | → **async/await** end-to-end |
| CPU pegged, profiling shows hot loop? | → **Optimize algorithm** or scale out |
| Thread pool queue growing? | → Fix **blocking** first — not more concurrency |

| Metric | Target signal |
| --- | --- |
| Cache hit ratio | > 80% for cache candidate |
| Thread pool queue length | Should stay near 0 |
| `async` all the way | No `.Result` / `.Wait()` on request path |
| p99 latency after cache | Drop vs DB baseline |

> **One-liner:** IO wait → async; repeated reads → cache; CPU saturation → optimize or scale — never add concurrency on top of blocked thread pool.

---

<a id="q-13"></a>

#### Q13. What are the common causes of thread pool starvation in ASP.NET Core, and what symptoms would you expect in metrics and logs?

| Cause | Example |
| --- | --- |
| **Sync-over-async** | `.Result`, `.Wait()`, `.GetAwaiter().GetResult()` on async path |
| **Blocking IO** | `Thread.Sleep`, sync `HttpClient`, `File.ReadAllText` in request |
| **Long CPU work on pool thread** | Heavy JSON parse, crypto, compression on request thread |
| **Lock contention** | Threads blocked waiting for shared lock |
| **Too many simultaneous requests** | Each holds thread while blocked |
| **Custom `TaskScheduler`** | Starves default pool |

| Symptom | Where |
| --- | --- |
| Rising **request queue time** | APM, Kestrel metrics |
| **Thread pool queue length** spike | `System.Runtime` EventCounter |
| **HTTP 503** / timeouts under moderate load | Load balancer, clients |
| **Low CPU** but high latency | Threads blocked, not computing |
| **`ThreadPool starvation` warnings** | .NET 6+ runtime logs |
| **Growing `Active` + `Queued` threads** | `dotnet-counters` |

> **One-liner:** Starvation = blocked pool threads — sync-over-async and blocking IO; symptom is queue time ↑ with low CPU and 503s.

---

<a id="q-14"></a>

#### Q14. When you suspect thread pool starvation in production, what evidence do you gather first, and how do you document root cause and remediation?

| Order | Evidence | What to capture |
| --- | --- | --- |
| 1 | **Metrics dashboard** | Thread pool queue length, request rate, p95/p99, 503 rate |
| 2 | **APM traces** | Slow requests — gap between queue and execution |
| 3 | **Logs** | `ThreadPool starvation` warnings, correlation IDs |
| 4 | **dotnet-counters / trace** | `threadpool-thread-count`, `threadpool-queue-length`, CPU |
| 5 | **Dump (if needed)** | Thread stacks — who's blocking |

**RCA document template:**

| Section | Content |
| --- | --- |
| **Summary** | Starvation on endpoint X, p99 30s, 12% 503 |
| **Timeline** | Start, peak, deploy correlation |
| **Evidence** | Screenshots — queue length, trace, stack showing `.Wait()` |
| **Root cause** | e.g. `service.GetDataAsync().Result` in middleware |
| **Fix** | `await` end-to-end; `ConfigureAwait(false)` in library code |
| **Verification** | Load test before/after — queue length 0, p99 < 200ms |
| **Prevention** | Analyzer rule, code review checklist, CI lint for `.Result` |

> **One-liner:** Metrics → traces → logs → counter trace → dump; document timeline, stack proof, fix, and load-test verification.

---

<a id="q-15"></a>

#### Q15. How do you decide whether to mitigate immediately vs deploying a code fix? What rollback plan would you document for each?

| Situation | Mitigate now | Code fix |
| --- | --- | --- |
| **Severity** | Production down / SLA breach | Degraded but serving |
| **Fix ETA** | Code fix > 30–60 min | Fix ready and tested |
| **Risk of mitigation** | Scale-out, rate limit — low risk | Hotfix untested — higher risk |

| Immediate mitigation | Action | Rollback |
| --- | --- | --- |
| **Scale out** | +N instances | Scale back to previous count |
| **Rate limit** | Reduce RPS at gateway | Remove limit rule |
| **Feature flag** | Disable slow feature | Re-enable flag |
| **Offload to queue** | Accept async processing | Drain queue, revert to sync |
| **Circuit breaker** | Stop calling failing dependency | Close circuit after fix |

| Code fix deployment | Rollback plan |
| --- | --- |
| **Blue/green or slot swap** | Swap back to previous slot — instant |
| **Rolling deploy** | Redeploy previous build tag from CI |
| **Database migration** | Backward-compatible migration only; keep rollback script |
| **Config change** | Version control previous `appsettings` — revert commit |

**Decision framework:**

```text
P0 + fix > 1 hour  → mitigate NOW + code fix in parallel
P1 + fix ready     → deploy fix with canary + rollback tag ready
P2                 → schedule fix next release
```

> **One-liner:** P0 mitigates first (scale, flag, rate limit) with documented rollback; code fix ships with previous build tag ready to redeploy.

---

<a id="bucket-6"></a>

## 6. Coding — Stack & Greedy

<a id="q-16"></a>

#### Q16. Given a stack of document IDs and a list of requested document IDs, compute the minimum number of pop operations required to retrieve all requested documents using a greedy strategy.

**Problem:** Stack is top-accessible (LIFO). Pop removes top. For each requested ID **in order**, pop until that ID is on top, then pop it. Count every pop.

```csharp
public static int MinPopsToRetrieve(IReadOnlyList<int> stack, IReadOnlyList<int> requested)
{
    var remaining = new List<int>(stack); // index 0 = bottom, last = top
    int pops = 0;

    foreach (int docId in requested)
    {
        while (remaining.Count > 0 && remaining[^1] != docId)
        {
            remaining.RemoveAt(remaining.Count - 1);
            pops++;
        }
        if (remaining.Count > 0 && remaining[^1] == docId)
        {
            remaining.RemoveAt(remaining.Count - 1);
            pops++;
        }
    }
    return pops;
}
```

**Example:**

```text
Stack (bottom → top): [1, 2, 3, 4, 5]
Requested: [3, 1]

Get 3: pop 5, 4 → pop 3     = 3 pops   (stack: [1,2])
Get 1: pop 2 → pop 1        = 2 pops
Total                       = 5 pops
```

| Step | Greedy choice |
| --- | --- |
| For each requested ID in order | Pop until target on top |
| Then pop target | Retrieve document |
| **Optimal** | Only one way to reach a buried item — greedy = optimal |

| Complexity | Value |
| --- | --- |
| Time | O(S + R × S) worst case; O(S) total pops ≤ stack size |
| Space | O(S) copy of stack |

> **One-liner:** Greedy — for each requested ID in order, pop until it's on top, pop it; sum all pops.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

| # | Topic | One-liner |
| --- | --- | --- |
| 1 | Tell me about yourself | 90 sec — present role, quantified win, why this job |
| 2 | IEnumerable vs IQueryable | IQueryable = server SQL; IEnumerable = in-memory |
| 3 | IQueryable in API | Keep EF query as IQueryable until `ToListAsync()` |
| 4 | Custom method in Where | Not translatable — rewrite, DB function, or narrow then `AsEnumerable()` |
| 5 | ProblemDetails | RFC 7807 global handler; safe detail in prod; log full ex + traceId |
| 6 | Error contract | Stable `errorCode`; additive `details`; version URLs not error shape |
| 7 | API versioning | Prefer URI `/v1` for clarity and parallel deployments |
| 8 | MySQL composite index | `(user_id, created_at DESC)` — equality first, then sort |
| 9 | Avoid filesort | ORDER BY matches index order; equality on prefix columns |
| 10 | IN + ORDER BY | Breaks per-user index order — filesort; denormalize or paginate per user |
| 11 | Bottleneck diagnosis | APM trace → SQL vs CPU vs thread pool queue |
| 12 | async vs cache vs scale | IO → async; repeat reads → cache; CPU → optimize/scale |
| 13 | Thread pool starvation | `.Result`/blocking IO; queue length ↑, low CPU, 503s |
| 14 | Starvation evidence | Metrics → traces → logs → dotnet-counters → dump |
| 15 | Mitigate vs fix | P0 mitigate + rollback plan; code fix with previous tag ready |
| 16 | Stack greedy pops | Pop until requested ID on top, repeat per ID in order |

**Suggested review order:** Q1 intro → Q2–4 LINQ → Q5–7 API → Q8–10 MySQL → Q11–15 performance → Q16 coding.
