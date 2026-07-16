# Microservice from QuestPond

## Goal

QuestPond-style microservice learning notes — **Day 10 RabbitMQ**, **Day 11 API Gateway with Ocelot**, and **Day 12 resiliency with Polly**. Focused on .NET interview answers with clear architecture and code.

---

## Topic Index

<ul>
  <li><a href="#day-10">Day 10 — RabbitMQ Fundamentals</a></li>
  <li><a href="#day-11">Day 11 — API Gateway Pattern using Ocelot</a></li>
  <li><a href="#day-12">Day 12 — Resiliency using Polly</a></li>
  <li><a href="#quick-answers">Interview Quick Answers</a></li>
</ul>

---

<a id="day-10"></a>

## Day 10 — RabbitMQ Fundamentals (AMQP, Broker, Exchange, Binding, Queues, Topics)

### Why RabbitMQ in microservices?

Microservices should not call each other synchronously for every side effect. Instead:

1. Service A saves business data  
2. Publishes an event/message  
3. Service B / C consume and react asynchronously  

RabbitMQ is a popular **message broker** for this — task queues, routing, fan-out, and work distribution.

> **One-liner:** RabbitMQ decouples producers and consumers so services talk via messages instead of tight HTTP chains.

---

### AMQP — what is it?

**AMQP (Advanced Message Queuing Protocol)** is the messaging protocol RabbitMQ speaks.

| Concept | Meaning |
| --- | --- |
| Protocol | Rules for how clients and broker exchange messages |
| Port | Default `5672` (AMQP), `15672` (management UI) |
| Client | Your .NET app using RabbitMQ.Client / MassTransit |
| Broker | RabbitMQ server that receives, routes, and stores messages |

**Why AMQP matters in interviews:** It is a standard wire protocol — reliable delivery, acknowledgements, exchanges, queues, and bindings are first-class concepts.

> **One-liner:** AMQP is the protocol; RabbitMQ is a broker that implements AMQP.

---

### Broker — the middleman

```text
Producer  →  Broker (RabbitMQ)  →  Consumer
```

| Role | Responsibility |
| --- | --- |
| **Producer** | Creates and publishes messages (e.g. Order API) |
| **Broker** | Accepts messages, routes them, stores them until consumed |
| **Consumer** | Pulls/receives messages and processes them (e.g. Email worker) |

**Benefits of a broker:**
- Producer does not know who consumes  
- Consumer can be offline — messages wait in queues  
- Multiple consumers can scale out  
- Routing rules live in the broker (exchanges + bindings)

![RabbitMQ architecture — Producer, Exchange, Bindings, Queues, Consumer](/assets/aspnet/rabbitmq-architecture.png)

**Inside the broker (from the diagram):**

```text
Producer
   ↓
Exchange  (Direct / Topic / Fanout)
   ↓
Bindings  (routing rules)
   ↓
Queues    (Queue1, Queue2, …)
   ↓
Consumer
```

> **One-liner:** Broker = RabbitMQ process that owns exchanges, bindings, and queues between producers and consumers.

---

### Exchange — where messages are sent first

Producers **never publish directly to a queue** in the classic AMQP model. They publish to an **exchange**. The exchange decides which queue(s) get the message using bindings and routing keys.

| Exchange type | Behavior | When to use |
| --- | --- | --- |
| **Direct** | Exact match on routing key ↔ binding key | One specific queue (e.g. `pdf.process`) |
| **Topic** | Pattern match (`*` one word, `#` many words) | Multi-region / category routing (`eu.de.*`, `us.#`) |
| **Fanout** | Ignore routing key — send to **all** bound queues | Broadcast (`OrderPlaced` to email + inventory + analytics) |
| **Headers** | Match on message headers (less common) | Complex attribute-based routing |

#### Direct exchange

```text
Routing key: "pdf.process"
Binding key: "pdf.process"  →  Queue1
```

Only queues bound with the **exact** key receive the message.

#### Topic exchange

```text
Routing key: "eu.de.orders"
Binding:     "eu.de.*"   → Queue2   (matches one word after eu.de)
Binding:     "us.#"      → Queue3   (does not match this message)
```

| Wildcard | Meaning |
| --- | --- |
| `*` | Exactly one word |
| `#` | Zero or more words |

Examples:
- `order.*` matches `order.created`, `order.cancelled`  
- `order.#` matches `order.created`, `order.created.eu`, etc.

#### Fanout exchange

```text
Message → Fanout exchange → Q4, Q5, Q6 (all get a copy)
```

Perfect for **pub/sub** notifications.

> **One-liner:** Exchange routes messages; Direct = exact key, Topic = pattern, Fanout = broadcast to all.

---

### Binding — the rule between exchange and queue

A **binding** links an exchange to a queue.

| Piece | Role |
| --- | --- |
| Exchange | Entry point for messages |
| Binding | Rule: “send matching messages to this queue” |
| Binding key / pattern | Used by Direct/Topic to filter |
| Queue | Storage until a consumer takes the message |

Without bindings, messages have nowhere to go (unless alternate exchange / DLX configured).

> **One-liner:** Binding = glue that connects an exchange to a queue with optional routing rules.

---

### Queues — where messages wait

A **queue** stores messages until consumers acknowledge them.

| Property | Interview meaning |
| --- | --- |
| Durable | Survives broker restart (queue definition + durable messages) |
| Exclusive | Used by one connection only |
| Auto-delete | Deleted when last consumer disconnects |
| TTL | Message/queue time-to-live |
| Prefetch | How many unacked messages a consumer can hold |
| Ack / Nack | Consumer confirms success or asks for requeue/reject |

**Consumer acknowledgement:**
- **Ack** → message removed from queue  
- **Nack / reject** → requeue or send to dead-letter exchange  
- **No ack + consumer crash** → message can be redelivered (at-least-once)

> **One-liner:** Queue holds messages; consumers ack after successful processing so the broker can delete them.

---

### Topics vs Queues (interview wording)

People mix these terms. Be precise:

| Term | Meaning in RabbitMQ |
| --- | --- |
| **Queue** | Concrete buffer of messages for consumers |
| **Topic exchange** | Exchange type that routes by pattern |
| **Topic (concept)** | Pub/sub category / subject (often implemented with Topic or Fanout) |

**Queue model:** each message usually goes to one competing consumer (work queue).  
**Pub/sub model:** each subscriber queue gets a copy (fanout/topic with multiple bindings).

> **One-liner:** Queue stores messages; Topic exchange routes by pattern to one or many queues.

---

### End-to-end flow (OrderPlaced example)

```text
Order API (Producer)
   │  publish routing key: "order.placed"
   ▼
Topic Exchange: "orders.exchange"
   │  binding "order.*" → email.queue
   │  binding "order.*" → inventory.queue
   ▼
email.queue          inventory.queue
   │                    │
Email Consumer       Inventory Consumer
```

**With transactional outbox (production pattern):**
1. Save Order + Outbox row in **one DB transaction**  
2. Background worker publishes outbox message to RabbitMQ  
3. Consumers process independently and **idempotently**

This avoids: “order saved but event never published.”

---

### Dead Letter Exchange (DLX) — must know

When a message is rejected, expires, or exceeds max length:

```text
Main Queue → (fail / expire) → Dead Letter Exchange → Dead Letter Queue
```

Ops can inspect poison messages and replay after fixing bugs.

> **One-liner:** DLX/DLQ catches failed or expired messages for inspection and reprocessing.

---

### Delivery guarantees

| Guarantee | Reality |
| --- | --- |
| At-most-once | May lose messages (no persist / no ack) |
| At-least-once | May duplicate — **make handlers idempotent** |
| Exactly-once | Hard; usually “at-least-once + idempotency” |

> **One-liner:** RabbitMQ commonly gives at-least-once delivery — design consumers to handle duplicates.

---

### Minimal .NET publish / consume sketch

```csharp
// Publish
channel.ExchangeDeclare("orders.exchange", ExchangeType.Topic, durable: true);
channel.BasicPublish(
    exchange: "orders.exchange",
    routingKey: "order.placed",
    basicProperties: props,
    body: body);

// Consume
channel.QueueDeclare("email.queue", durable: true, exclusive: false, autoDelete: false);
channel.QueueBind("email.queue", "orders.exchange", routingKey: "order.*");
channel.BasicConsume("email.queue", autoAck: false, consumer);
// after success:
channel.BasicAck(deliveryTag, multiple: false);
```

In real .NET microservices, teams often use **MassTransit** or **NServiceBus** on top of RabbitMQ for retries, sagas, and outbox.

---

### Day 10 interview checklist

| Question | Short answer |
| --- | --- |
| What is AMQP? | Messaging protocol used by RabbitMQ |
| What is a broker? | Server that routes and stores messages |
| Why exchange? | Routing layer — producers publish to exchange, not queue |
| Binding? | Rule linking exchange → queue |
| Direct vs Topic vs Fanout? | Exact / pattern / broadcast |
| Queue? | Buffer waiting for consumers |
| Why ack? | Confirm processing so message can be deleted |
| DLQ? | Store failed/expired messages |
| At-least-once? | Possible duplicates → idempotent consumers |

---

<a id="day-11"></a>

## Day 11 — API Gateway Pattern using Ocelot

> QuestPond session: **API Gateway pattern using Ocelot** (31-08-2025)

### Why do microservices need an API Gateway?

Without a gateway, every client must know every service URL:

```text
Mobile / Web / Partner
   ├── http://orders:5001
   ├── http://payments:5002
   ├── http://catalog:5003
   └── http://users:5004
```

Problems:
- Clients are tightly coupled to service topology  
- Auth, rate limiting, SSL repeated everywhere  
- Hard to change internal URLs / versions  
- CORS and security rules scatter across services  

**API Gateway pattern** puts one front door in front of all services:

```text
Client
  ↓
API Gateway (Ocelot)
  ├── Authentication / Authorization
  ├── Routing / load balancing
  ├── Rate limiting
  ├── Request aggregation
  ├── Headers / path transforms
  └── QoS (timeouts, retries)
  ↓
Order | Payment | Catalog | User microservices
```

> **One-liner:** API Gateway is the single entry point — clients call the gateway; the gateway routes to microservices.

---

### API Gateway vs Load Balancer vs Reverse Proxy

| Component | Main job |
| --- | --- |
| **Load balancer** | Distribute traffic across instances |
| **Reverse proxy** | Forward requests; hide internal hosts |
| **API Gateway** | Reverse proxy **plus** API features (auth, rate limit, aggregation, versioning) |

Ocelot is an **API Gateway for .NET** — configuration-driven routing on top of ASP.NET Core.

> **One-liner:** LB spreads traffic; gateway adds API management on top of routing.

---

### What is Ocelot?

**Ocelot** is an open-source .NET API Gateway. You typically:

1. Create an ASP.NET Core empty/web project  
2. Add Ocelot NuGet package  
3. Define routes in `ocelot.json`  
4. Call `AddOcelot()` + `UseOcelot()`  

| Feature | Ocelot support |
| --- | --- |
| Routing | Upstream path → Downstream host/path |
| Load balancing | Round robin, least connection, etc. |
| Authentication | JWT / IdentityServer integration |
| Rate limiting | Per-route limits |
| QoS | Timeout + Polly-style breaker options |
| Aggregation | Combine multiple downstream responses |
| Caching | Response caching |
| Header/claim transforms | Add/remove/change headers |

**Alternatives:** YARP (Microsoft, high performance), Azure API Management, Kong, AWS API Gateway.

> **One-liner:** Ocelot = config-based .NET API gateway for routing and cross-cutting concerns.

---

### Core Ocelot concepts

| Term | Meaning |
| --- | --- |
| **Upstream** | What the **client** calls (gateway URL/path) |
| **Downstream** | Internal microservice URL Ocelot forwards to |
| **ReRoute / Route** | Mapping from upstream → downstream |
| **GlobalConfiguration** | Shared settings (base URL, rate limit defaults, QoS) |
| **Service discovery** | Optional Consul/Eureka/K8s instead of hard-coded hosts |

```text
Client → GET /gateway/orders/1
              │
              ▼ upstream: /orders/{id}
         Ocelot route
              │
              ▼ downstream: http://orders-service/api/orders/{id}
         Order microservice
```

---

### Minimal `ocelot.json` example

```json
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/orders/{id}",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        { "Host": "localhost", "Port": 5001 }
      ],
      "UpstreamPathTemplate": "/orders/{id}",
      "UpstreamHttpMethod": [ "GET" ]
    },
    {
      "DownstreamPathTemplate": "/api/payments",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        { "Host": "localhost", "Port": 5002 }
      ],
      "UpstreamPathTemplate": "/payments",
      "UpstreamHttpMethod": [ "POST" ]
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "https://localhost:7000"
  }
}
```

**Meaning:**
- Client calls `GET https://localhost:7000/orders/5`  
- Ocelot forwards to `http://localhost:5001/api/orders/5`  

---

### ASP.NET Core wiring

```csharp
// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);
builder.Services.AddOcelot(builder.Configuration);

var app = builder.Build();
await app.UseOcelot();
app.Run();
```

Package: `Ocelot` (and optionally `Ocelot.Provider.Consul`, `Ocelot.Provider.Polly`, etc.).

> **One-liner:** Load `ocelot.json`, `AddOcelot`, `UseOcelot` — routes become your public API surface.

---

### Multiple instances + load balancing

```json
"DownstreamHostAndPorts": [
  { "Host": "orders-1", "Port": 5001 },
  { "Host": "orders-2", "Port": 5001 }
],
"LoadBalancerOptions": {
  "Type": "RoundRobin"
}
```

| Type | Behavior |
| --- | --- |
| RoundRobin | Rotate instances |
| LeastConnection | Prefer fewer active connections |
| NoLoadBalancer | First / only host |
| CookieStickySessions | Same client sticks to same instance |

> **One-liner:** List multiple downstream hosts and pick a load-balancer type in the route.

---

### Authentication at the gateway

Typical pattern:
1. Client sends JWT in `Authorization` header  
2. Ocelot validates token once at the edge  
3. Forwards identity claims downstream (or re-validates per service for defense in depth)

```json
"AuthenticationOptions": {
  "AuthenticationProviderKey": "Bearer",
  "AllowedScopes": []
}
```

In `Program.cs`, register JWT bearer with the same key name Ocelot expects.

**Interview tip:** Gateway auth reduces duplication, but critical services may still validate tokens themselves.

> **One-liner:** Validate JWT at Ocelot so internal services are not publicly exposed without auth.

---

### Rate limiting at the gateway

Protect downstream services from noisy clients:

```json
"RateLimitOptions": {
  "ClientWhitelist": [],
  "EnableRateLimiting": true,
  "Period": "1m",
  "PeriodTimespan": 60,
  "Limit": 100
}
```

When exceeded → **429 Too Many Requests**.

> **One-liner:** Rate limit at the gateway so one client cannot flood every microservice.

---

### QoS — timeout and quality of service

```json
"QoSOptions": {
  "ExceptionsAllowedBeforeBreaking": 3,
  "DurationOfBreak": 5000,
  "TimeoutValue": 3000
}
```

| Setting | Meaning |
| --- | --- |
| TimeoutValue | Max wait for downstream (ms) |
| ExceptionsAllowedBeforeBreaking | Failures before circuit opens |
| DurationOfBreak | How long to fail fast (ms) |

This connects Day 11 (gateway) with Day 12 (Polly resiliency): Ocelot can apply breaker/timeout around downstream calls.

> **One-liner:** QoS on a route adds timeout + circuit-breaker behavior for that downstream dependency.

---

### Request aggregation (BFF-style)

One upstream call → multiple downstream calls → combined response.

Useful when a UI needs Order + Customer in one round trip.

| Pattern | Idea |
| --- | --- |
| **API Gateway** | Shared gateway for all clients |
| **BFF (Backend for Frontend)** | Separate gateway/API shaped per client (web BFF, mobile BFF) |

Keep **business logic out of the gateway** — aggregation and routing only.

> **One-liner:** Aggregation reduces client round trips; BFF customizes the gateway per client type.

---

### Path / header transforms

Ocelot can rewrite paths and headers before forwarding:

| Transform | Example |
| --- | --- |
| Path | `/gateway/orders` → `/api/v1/orders` |
| Add header | Inject correlation ID |
| Claims to headers | Pass user id to downstream |

Helps keep internal APIs private while exposing a clean public contract.

---

### Service discovery (optional)

Hard-coded hosts work for demos. In production:

| Approach | Example |
| --- | --- |
| Config hosts | `DownstreamHostAndPorts` in JSON |
| Consul / Eureka | Ocelot provider packages |
| Kubernetes | DNS service names (`orders.default.svc.cluster.local`) |

> **One-liner:** Prefer service discovery or K8s DNS over hard-coded IPs when services scale dynamically.

---

### Good practices

| Do | Don't |
| --- | --- |
| Put auth, routing, rate limit in gateway | Put business rules in Ocelot |
| Version public routes (`/v1/...`) | Expose every internal endpoint |
| Run multiple gateway instances behind LB | Treat gateway as only one box (SPOF) |
| Log correlation IDs end-to-end | Hide all errors with empty 500s |
| Combine with Polly/QoS for resiliency | Retry non-idempotent POSTs blindly |

---

### Day 11 interview checklist

| Question | Short answer |
| --- | --- |
| Why API Gateway? | Single entry for routing, auth, rate limit, aggregation |
| What is Ocelot? | .NET API gateway configured mainly via `ocelot.json` |
| Upstream vs Downstream? | Client-facing path vs internal service URL |
| Gateway vs load balancer? | Gateway = API features; LB = distribute traffic |
| BFF? | Gateway tailored per frontend (web/mobile) |
| Rate limiting? | Cap requests at edge → 429 |
| QoS in Ocelot? | Timeout + circuit breaker for downstream |
| SPOF risk? | Scale gateway horizontally behind a load balancer |

---

<a id="day-12"></a>

## Day 12 — Resiliency using Polly

### Why resiliency in microservices?

In distributed systems, **failures are normal**:
- Network blips  
- Downstream 500s  
- Timeouts  
- Slow dependencies  
- Partial outages  

If Service A waits forever on Service B, threads pile up and the whole system collapses (**cascading failure**).

**Polly** is the .NET resiliency library for policies like Retry, Circuit Breaker, Timeout, Fallback, Bulkhead, Rate Limiter.

> **One-liner:** Polly wraps calls with policies so transient failures don’t take down your service.

---

### Core Polly policies

| Policy | Purpose | When to use |
| --- | --- | --- |
| **Retry** | Try again after transient failure | Network glitch, 408/429/5xx |
| **Wait and Retry** | Retry with delay / exponential backoff | Avoid thundering herd |
| **Circuit Breaker** | Stop calling a broken dependency for a while | Persistent failures |
| **Timeout** | Cancel if too slow | Hung HTTP/SQL calls |
| **Fallback** | Return default/cached response | Degrade gracefully |
| **Bulkhead** | Limit concurrent calls (isolate resources) | Protect thread pool |
| **Rate Limiter** | Cap request rate | Protect self/downstream |

---

### Retry — don’t retry everything

Retry only **transient** errors.

| Retry | Do not retry blindly |
| --- | --- |
| Timeout / network failure | `400 Bad Request` (client bug) |
| `408`, `429`, `502`, `503`, `504` | `401` / `403` (auth) |
| SQL transient errors | Business validation failures |

**Exponential backoff example:** wait `2^attempt` seconds (+ jitter).

```csharp
Policy
    .Handle<HttpRequestException>()
    .OrResult<HttpResponseMessage>(r => (int)r.StatusCode >= 500)
    .WaitAndRetryAsync(
        retryCount: 3,
        sleepDurationProvider: attempt => TimeSpan.FromSeconds(Math.Pow(2, attempt)),
        onRetry: (outcome, delay, attempt, ctx) =>
        {
            // log attempt
        });
```

> **One-liner:** Retry transient faults with backoff; never blindly retry permanent client errors.

---

### Circuit Breaker — fail fast

Circuit breaker stops calling a failing dependency so it can recover and so your app doesn’t waste resources.

```text
Closed  →  failures exceed threshold  →  Open
Open    →  wait break duration        →  Half-Open
Half-Open → success                   →  Closed
          → failure                   →  Open again
```

| State | Behavior |
| --- | --- |
| **Closed** | Calls flow normally; failures are counted |
| **Open** | Calls fail immediately (fast fail) |
| **Half-Open** | Trial calls allowed to test recovery |

```csharp
Policy
    .Handle<HttpRequestException>()
    .CircuitBreakerAsync(
        handledEventsAllowedBeforeBreaking: 5,
        durationOfBreak: TimeSpan.FromSeconds(30));
```

> **One-liner:** Circuit breaker opens after repeated failures, fails fast for a break period, then probes recovery.

---

### Timeout — don’t wait forever

```csharp
Policy.TimeoutAsync(TimeSpan.FromSeconds(3));
```

Combine with HttpClient timeout. Prefer cooperative cancellation (`CancellationToken`).

> **One-liner:** Timeout bounds how long you’ll wait so hung dependencies can’t exhaust your threads.

---

### Fallback — graceful degradation

```csharp
Policy<ProductDto>
    .Handle<Exception>()
    .FallbackAsync(new ProductDto { Name = "Unavailable", Price = 0 });
```

Or return last known cache value.

> **One-liner:** Fallback returns a safe default when the real call fails — better UX than a hard crash.

---

### Bulkhead — isolate failures

Limit concurrent executions so one slow dependency doesn’t consume the entire thread pool.

```csharp
Policy.BulkheadAsync(
    maxParallelization: 10,
    maxQueuingActions: 20);
```

> **One-liner:** Bulkhead isolates resources so one dependency’s slowness doesn’t starve everything else.

---

### Policy wrap — real-world stack

Order matters. Common pattern:

```text
Fallback
  └─ Circuit Breaker
       └─ Retry
            └─ Timeout
                 └─ Actual HTTP call
```

Meaning:
1. Each attempt has a **timeout**  
2. Failed attempts **retry**  
3. Too many failures **open the circuit**  
4. If still failing, **fallback**

```csharp
var timeout = Policy.TimeoutAsync<HttpResponseMessage>(TimeSpan.FromSeconds(3));
var retry = Policy
    .HandleResult<HttpResponseMessage>(r => !r.IsSuccessStatusCode)
    .WaitAndRetryAsync(3, i => TimeSpan.FromMilliseconds(200 * i));
var breaker = Policy
    .HandleResult<HttpResponseMessage>(r => !r.IsSuccessStatusCode)
    .CircuitBreakerAsync(5, TimeSpan.FromSeconds(30));
var fallback = Policy<HttpResponseMessage>
    .Handle<Exception>()
    .FallbackAsync(new HttpResponseMessage(HttpStatusCode.OK)
    {
        Content = new StringContent("{\"status\":\"degraded\"}")
    });

var pipeline = Policy.WrapAsync(fallback, breaker, retry, timeout);
```

> **One-liner:** Wrap Timeout + Retry + Circuit Breaker + Fallback for production HTTP resilience.

---

### Polly + `IHttpClientFactory` (ASP.NET Core)

Best practice: register named/typed clients with resilience handlers.

**Classic Polly (v7 style):**

```csharp
services.AddHttpClient<IPaymentClient, PaymentClient>()
    .AddPolicyHandler(Policy
        .HandleTransientHttpError()
        .WaitAndRetryAsync(3, attempt => TimeSpan.FromSeconds(Math.Pow(2, attempt))))
    .AddPolicyHandler(Policy
        .HandleTransientHttpError()
        .CircuitBreakerAsync(5, TimeSpan.FromSeconds(30)));
```

`HandleTransientHttpError()` covers network failures + `5xx` + `408`.

**Modern note (.NET 8+):** Microsoft.Extensions.Http.Resilience / Polly v8 uses **resilience pipelines**. Interviewers still expect the concepts: retry, breaker, timeout, fallback.

> **One-liner:** Attach Polly policies to `IHttpClientFactory` so every outbound HTTP call is resilient by default.

---

### Resiliency vs messaging (Day 10 + Day 12 together)

| Approach | Helps with |
| --- | --- |
| **RabbitMQ async** | Decouple services; absorb spikes; retry via requeue/DLQ |
| **Polly on HTTP** | Protect sync calls that must stay request/response |
| **Ocelot QoS** | Timeout/breaker at the API Gateway edge |
| **Outbox** | Reliable publish after DB commit |
| **Idempotent consumers** | Safe at-least-once delivery |

Don’t use Polly retry as a substitute for good architecture. Use:
- Polly for **transient sync failures**  
- Queues for **async workloads and decoupling**  
- Circuit breaker to **stop hammering a dead service**  
- Ocelot for **edge routing, auth, and rate limiting**

---

### Day 12 interview checklist

| Question | Short answer |
| --- | --- |
| What is Polly? | .NET resiliency library (retry, breaker, timeout, etc.) |
| Retry vs circuit breaker? | Retry = try again; breaker = stop calling for a while |
| Exponential backoff? | Increasing wait between retries (+ jitter) |
| Why timeout? | Prevent hung calls from exhausting resources |
| Fallback? | Return default/cached response on failure |
| Bulkhead? | Limit concurrency / isolate resources |
| Cascading failure? | One down service brings others down — resiliency prevents this |
| With HttpClient? | Add policies via `IHttpClientFactory` |

---

<a id="quick-answers"></a>

## Interview Quick Answers

### RabbitMQ

| Topic | One-liner |
| --- | --- |
| AMQP | Protocol for reliable messaging |
| Broker | RabbitMQ server between producer and consumer |
| Exchange | Routes messages using type + bindings |
| Binding | Rule connecting exchange to queue |
| Queue | Stores messages until acked |
| Direct | Exact routing key match |
| Topic | Pattern routing (`*`, `#`) |
| Fanout | Broadcast to all bound queues |
| Ack | Consumer confirms successful processing |
| DLQ | Holds poison/expired messages |
| At-least-once | Duplicates possible → idempotency required |

### Ocelot / API Gateway

| Topic | One-liner |
| --- | --- |
| API Gateway | Single entry point for microservices |
| Ocelot | .NET gateway configured via `ocelot.json` |
| Upstream | Path/URL the client calls |
| Downstream | Internal service Ocelot forwards to |
| Rate limiting | Cap requests at the edge (429) |
| QoS | Timeout + circuit breaker per route |
| Aggregation | One call → multiple services → combined response |
| BFF | Gateway shaped per frontend (web/mobile) |
| vs YARP | Ocelot = full gateway features; YARP = high-perf reverse proxy |

### Polly

| Topic | One-liner |
| --- | --- |
| Retry | Re-attempt transient failures |
| WaitAndRetry | Retry with delay/backoff |
| Circuit Breaker | Fail fast while dependency is unhealthy |
| Timeout | Cap wait time |
| Fallback | Degrade gracefully |
| Bulkhead | Isolate concurrency |
| Policy wrap | Combine policies in a pipeline |
| HttpClientFactory | Attach resiliency to outbound HTTP |

---

## 60-second revision

1. Producer → Exchange → Binding → Queue → Consumer  
2. Direct = exact, Topic = pattern, Fanout = all  
3. Ack + durable queues + DLQ for reliability  
4. At-least-once needs idempotent consumers  
5. API Gateway = single entry; Ocelot routes upstream → downstream  
6. Auth + rate limit + QoS belong at the gateway edge  
7. Polly = Retry + Circuit Breaker + Timeout + Fallback  
8. Queues for async; Ocelot for edge; Polly for sync call protection
