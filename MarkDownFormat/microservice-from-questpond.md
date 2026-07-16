# Microservice from QuestPond

## Goal

QuestPond-style microservice learning notes — **Day 10 RabbitMQ fundamentals** and **Day 11 resiliency with Polly**. Focused on .NET interview answers with clear architecture and code.

---

## Topic Index

<ul>
  <li><a href="#day-10">Day 10 — RabbitMQ Fundamentals</a></li>
  <li><a href="#day-11">Day 11 — Resiliency using Polly</a></li>
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

## Day 11 — Resiliency using Polly

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

### Resiliency vs messaging (Day 10 + Day 11 together)

| Approach | Helps with |
| --- | --- |
| **RabbitMQ async** | Decouple services; absorb spikes; retry via requeue/DLQ |
| **Polly on HTTP** | Protect sync calls that must stay request/response |
| **Outbox** | Reliable publish after DB commit |
| **Idempotent consumers** | Safe at-least-once delivery |

Don’t use Polly retry as a substitute for good architecture. Use:
- Polly for **transient sync failures**  
- Queues for **async workloads and decoupling**  
- Circuit breaker to **stop hammering a dead service**

---

### Day 11 interview checklist

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
5. Polly = Retry + Circuit Breaker + Timeout + Fallback  
6. Retry transient only; open circuit on repeated failure  
7. Wrap policies; attach to `IHttpClientFactory`  
8. Queues for async decoupling; Polly for sync call protection
