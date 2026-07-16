# Azure Service Bus Interview Guide

## Goal

Complete Azure Service Bus notes for .NET / cloud interviews — queues, topics, subscriptions, sessions, dead-lettering, transactions, security, and how it compares to Event Grid, Event Hubs, and RabbitMQ.

---

## Topic Index

<ul>
  <li><a href="#what">What is Azure Service Bus?</a></li>
  <li><a href="#when">When to use Service Bus</a></li>
  <li><a href="#compare">Service Bus vs Event Grid vs Event Hubs vs Storage Queue</a></li>
  <li><a href="#queues">Queues</a></li>
  <li><a href="#topics">Topics and Subscriptions</a></li>
  <li><a href="#messages">Message anatomy</a></li>
  <li><a href="#receive">Receive modes (Peek-Lock vs Receive-and-Delete)</a></li>
  <li><a href="#dlq">Dead-letter queue</a></li>
  <li><a href="#sessions">Sessions and ordered processing</a></li>
  <li><a href="#duplicate">Duplicate detection</a></li>
  <li><a href="#transactions">Transactions and Outbox</a></li>
  <li><a href="#dotnet">.NET sender / receiver examples</a></li>
  <li><a href="#security">Security (Managed Identity, SAS, RBAC)</a></li>
  <li><a href="#tiers">Tiers, partitioning, scaling</a></li>
  <li><a href="#patterns">Common microservice patterns</a></li>
  <li><a href="#checklist">Interview Quick Answers</a></li>
</ul>

---

<a id="what"></a>

## What is Azure Service Bus?

**Azure Service Bus** is a fully managed **enterprise message broker** on Azure. Applications exchange messages asynchronously through:

- **Queues** — competing consumers (one message → one consumer)
- **Topics + Subscriptions** — pub/sub (one message → many subscribers)

It supports reliable delivery, sessions, dead-lettering, scheduled messages, transactions, and advanced filtering.

> **One-liner:** Service Bus is Azure’s enterprise messaging service for reliable queues and pub/sub between apps and microservices.

---

<a id="when"></a>

## When to use Service Bus

| Use case | Why Service Bus fits |
| --- | --- |
| Order / payment workflows | Reliable, durable messaging |
| Decouple microservices | Producer doesn’t wait on consumer |
| Work distribution | Multiple workers compete for queue messages |
| Broadcast events to many handlers | Topics + subscriptions |
| Ordered processing per customer/order | Sessions |
| Need DLQ, retry, peek-lock | Built-in enterprise features |

**Not ideal when:**
- You need massive telemetry ingestion (use **Event Hubs**)
- You only need lightweight reactive routing of cloud events (use **Event Grid**)
- You need a simple cheap queue with fewer features (consider **Storage Queue**)

---

<a id="compare"></a>

## Service Bus vs Event Grid vs Event Hubs vs Storage Queue

| Feature | Service Bus | Event Grid | Event Hubs | Storage Queue |
| --- | --- | --- | --- | --- |
| Model | Queue / Topic messaging | Event routing | Event streaming / ingestion | Simple queue |
| Best for | Business workflows | React to Azure/resource events | Telemetry, clickstream | Basic async work |
| Ordering | Sessions | Limited | Per partition | FIFO-ish, weaker |
| DLQ | Yes | N/A (retry/dead-letter via destinations) | Capture / consumer offset | Poison handling manual |
| Transactions | Yes (limited) | No | No | No |
| Size / throughput | High, enterprise | High event fan-out | Extremely high | Moderate |
| Protocols | AMQP, HTTPS | HTTPS | AMQP, Kafka protocol | HTTPS |

> **One-liner:** Service Bus = reliable business messaging; Event Grid = event routing; Event Hubs = big stream ingest; Storage Queue = simple cheap queue.

---

<a id="queues"></a>

## Queues

```text
Producer → Queue → Consumer A
                 ↘ Consumer B  (competing — only one gets each message)
```

| Concept | Meaning |
| --- | --- |
| Competing consumers | Multiple receivers; each message processed once |
| Load leveling | Smooth spikes — producers fast, consumers catch up |
| Decoupling | Sender and receiver can scale independently |

**Typical flow (Peek-Lock):**
1. Consumer receives message (locked, not deleted)  
2. Processes successfully → **Complete** (delete)  
3. Fails / crashes → lock expires → message becomes available again  

> **One-liner:** Queue = one-to-one messaging with competing consumers for work distribution.

---

<a id="topics"></a>

## Topics and Subscriptions (Pub/Sub)

```text
Producer → Topic
             ├── Subscription: EmailService
             ├── Subscription: InventoryService
             └── Subscription: AnalyticsService
```

Each subscription gets a **copy** of matching messages (like a virtual queue per subscriber).

### Filters

| Filter type | Example |
| --- | --- |
| Correlation filter | `CorrelationId` / `Subject` / custom properties match |
| SQL filter | `sys.Label = 'OrderPlaced' AND Region = 'IN'` |
| True / False filter | Accept all / accept none |

> **One-liner:** Topic publishes once; each subscription independently receives matching messages.

---

<a id="messages"></a>

## Message anatomy

| Part | Purpose |
| --- | --- |
| **Body** | Payload (JSON, bytes, XML) |
| **MessageId** | Identity; used with duplicate detection |
| **CorrelationId** | Link request/response or saga steps |
| **SessionId** | Group messages for ordered processing |
| **Subject / Label** | Lightweight routing metadata |
| **Application properties** | Custom key/value for filters |
| **ContentType** | e.g. `application/json` |
| **TimeToLive (TTL)** | Expire unused messages |
| **ScheduledEnqueueTime** | Delay delivery |

Keep payloads reasonably sized; for large blobs, store in Blob Storage and send a pointer in the message.

> **One-liner:** Put routing metadata in properties; put business data in the body (or a blob reference).

---

<a id="receive"></a>

## Receive modes

| Mode | Behavior | When |
| --- | --- | --- |
| **Peek-Lock** | Lock message; Complete/Abandon/DeadLetter later | Default for reliability |
| **Receive-and-Delete** | Remove immediately on receive | Only if losing a message on crash is acceptable |

### Settlement actions (Peek-Lock)

| Action | Meaning |
| --- | --- |
| **Complete** | Success — remove message |
| **Abandon** | Unlock for another consumer |
| **Defer** | Set aside; retrieve later by sequence number |
| **DeadLetter** | Move to DLQ with reason |

> **One-liner:** Prefer Peek-Lock + Complete so crashes don’t lose in-flight work silently.

---

<a id="dlq"></a>

## Dead-letter queue (DLQ)

Every queue/subscription has a **dead-letter sub-queue**.

Messages go to DLQ when:
- Max delivery count exceeded  
- TTL expired (if dead-lettering on expiration enabled)  
- Explicit `DeadLetter`  
- Filter evaluation / header issues (in some cases)

**Ops practice:**
1. Alert on DLQ depth  
2. Inspect reason / description  
3. Fix bug  
4. Resubmit or discard  

> **One-liner:** DLQ holds poison/failed messages for inspection instead of infinite retry loops.

---

<a id="sessions"></a>

## Sessions and ordered processing

**Message sessions** enable:
- Ordered processing for a given `SessionId` (e.g. `OrderId`, `CustomerId`)
- Sticky consumer per session
- Session state (optional)

```text
SessionId = "order-1001"
  msg1 → msg2 → msg3   (processed in order by one session receiver)
```

Without sessions, competing consumers can process related messages out of order.

> **One-liner:** Use sessions when order matters for a business key (order, user, device).

---

<a id="duplicate"></a>

## Duplicate detection

Enable on queue/topic with a history window (e.g. 10 minutes).

If a producer retries with the same **MessageId**, Service Bus drops the duplicate.

Pairs well with:
- At-least-once producers  
- Idempotent consumers (still recommended)

> **One-liner:** Duplicate detection ignores repeated MessageIds within the configured window.

---

<a id="transactions"></a>

## Transactions and Outbox

Service Bus supports **AMQP transactions** for atomic operations across entities in the same namespace (with limits).

### Cross-resource problem (DB + bus)

```text
Save Order in SQL  ✅
Send message to Service Bus  ❌ crash
```

**Transactional Outbox** (recommended microservice pattern):
1. In one SQL transaction: save Order + Outbox row  
2. Background publisher sends to Service Bus  
3. Mark outbox published  

Combine with **idempotent consumers** / inbox pattern.

> **One-liner:** Don’t rely on DB + Service Bus in one distributed TX — use outbox for reliable publish.

---

<a id="dotnet"></a>

## .NET sender / receiver examples

Package: `Azure.Messaging.ServiceBus`

### Send to queue

```csharp
await using var client = new ServiceBusClient(connectionString);
ServiceBusSender sender = client.CreateSender("orders");

var message = new ServiceBusMessage(BinaryData.FromString(json))
{
    MessageId = orderId.ToString(),
    Subject = "OrderPlaced",
    ContentType = "application/json",
    CorrelationId = correlationId
};
message.ApplicationProperties["Region"] = "IN";

await sender.SendMessageAsync(message);
```

### Process with Peek-Lock

```csharp
ServiceBusProcessor processor = client.CreateProcessor("orders", new ServiceBusProcessorOptions
{
    AutoCompleteMessages = false,
    MaxConcurrentCalls = 4
});

processor.ProcessMessageAsync += async args =>
{
    string body = args.Message.Body.ToString();
    // process...
    await args.CompleteMessageAsync(args.Message);
};

processor.ProcessErrorAsync += args =>
{
    // log args.Exception
    return Task.CompletedTask;
};

await processor.StartProcessingAsync();
```

### Topic subscription receive

```csharp
var processor = client.CreateProcessor("orders-topic", "email-subscription");
```

Prefer **Managed Identity** over connection strings in production.

---

<a id="security"></a>

## Security

| Method | Notes |
| --- | --- |
| **Connection string / SAS** | Easy for demos; rotate secrets; store in Key Vault |
| **Azure RBAC + Managed Identity** | Preferred — `Azure Service Bus Data Owner/Sender/Receiver` roles |
| Network | Private Endpoint, firewall, VNet rules (Premium) |
| TLS | Always encrypt in transit |

> **One-liner:** Use Managed Identity + RBAC; avoid long-lived connection strings in app settings when possible.

---

<a id="tiers"></a>

## Tiers, partitioning, scaling

| Tier | Highlights |
| --- | --- |
| **Basic** | Queues only; fewer features |
| **Standard** | Queues + topics; sessions; transactions; good default |
| **Premium** | Dedicated resources, VNet/Private Link, higher/isolated performance |

**Scaling concepts:**
- Prefetch and concurrent calls on processors  
- Partitioned entities (older feature; Premium has different scaling model)  
- Autoscale consumers based on queue depth  

> **One-liner:** Standard for most apps; Premium when you need isolation, VNet, and higher predictable throughput.

---

<a id="patterns"></a>

## Common microservice patterns with Service Bus

| Pattern | How |
| --- | --- |
| Competing consumers | Multiple workers on one queue |
| Pub/Sub | Topic + subscriptions + filters |
| Request-reply | CorrelationId + reply queue/session |
| Delayed processing | Scheduled messages |
| Saga / workflow | Commands/events over queues/topics + compensations |
| Reliable publish | Transactional outbox → Service Bus |
| Poison handling | Max delivery count → DLQ |

### Typical architecture

```text
API / Order Service
   │  (outbox publisher)
   ▼
Service Bus Topic: orders
   ├── sub: inventory
   ├── sub: payment
   └── sub: notification
         │
         ▼
Azure Functions / Worker services
```

---

<a id="checklist"></a>

## Interview Quick Answers

| Question | Answer |
| --- | --- |
| What is Service Bus? | Managed enterprise message broker (queues + topics) |
| Queue vs Topic? | Queue = competing consumers; Topic = pub/sub via subscriptions |
| Peek-Lock vs Receive-and-Delete? | Peek-Lock locks until Complete; safer default |
| Dead-letter queue? | Holds failed/expired/poison messages |
| Sessions? | Ordered, sticky processing by SessionId |
| Duplicate detection? | Drops same MessageId within history window |
| vs Event Hubs? | Hubs = streaming ingest; Service Bus = business messaging |
| vs Event Grid? | Grid = event routing/notifications; Service Bus = durable workflows |
| vs RabbitMQ? | Similar patterns; Service Bus is fully managed PaaS on Azure |
| How to secure? | Managed Identity + RBAC, Private Endpoint on Premium |
| Reliable DB+message? | Transactional outbox pattern |

---

## 60-second revision

1. Service Bus = reliable Azure messaging (queues + topics)  
2. Queue = work distribution; Topic = broadcast to subscriptions  
3. Peek-Lock + Complete for safe processing  
4. DLQ for poison messages; sessions for ordering  
5. Prefer Managed Identity; use outbox for DB + message atomicity  
6. Pick Event Hubs for streams, Event Grid for reactive routing, Service Bus for workflows
