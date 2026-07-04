<h1 style="color:#2563eb;">System Design Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
Standard <strong style="color:#16a34a;">system design interview roadmap</strong> — HLD vs LLD, requirements, scalability, databases, caching, messaging, security, and classic design problems explained concisely.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> HLD vs LLD — WhatsApp Example</a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> Requirements — Functional & Non-Functional</a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> Scalability & Load Balancing</a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> Databases & Storage</a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> Caching — Redis & CDN</a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> API Design & Communication</a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> Message Queues & Event-Driven Design</a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> CAP Theorem & Consistency</a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> Microservices & Monolith at Scale</a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> Authentication, Security & Rate Limiting</a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> Observability — Logging, Metrics, Tracing</a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> Classic System Design Problems</a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> Interview Framework & Trade-offs</a></li>
  <li><a href="#interview-quick-answers"><span style="color:#9333ea;font-weight:700;">Guide:</span> Interview Quick Answers</a></li>
</ul>

---

<a id="topic-1"></a>

## 1. HLD vs LLD — WhatsApp Example

![HLD vs LLD Explained with WhatsApp Example](/assets/system-design/hld-vs-lld-whatsapp.png)

### High-Level Overview

| | HLD (High-Level Design) | LLD (Low-Level Design) |
| --- | --- | --- |
| **Focus** | System architecture | Module / component design |
| **Primary question** | How will the **entire application** work? | How will **this particular module** work? |
| **Level** | Macro | Micro |
| **Audience** | Architects, tech leads | Developers |

### Analogy

| | HLD | LLD |
| --- | --- | --- |
| **WhatsApp** | Designs the entire WhatsApp platform | Designs how the Chat Service works |
| **Blueprint** | Blueprint of the **city** | Blueprint of a **building** |

**Great software = HLD + LLD together.**

---

### WhatsApp — HLD Questions

| Area | Questions to answer |
| --- | --- |
| **Features** | Chat, group, voice, media, status? |
| **Non-functional** | Scalability, low latency, high availability, security? |
| **Major components** | Auth, User, Chat, Media, Notification services? |
| **Communication** | REST APIs, WebSockets, message queue? |
| **Data storage** | User DB, Chat DB, Redis cache, object storage for media? |
| **Scaling** | Load balancer, auto-scaling, multi-AZ, CDN for media? |

#### HLD — High-Level Architecture

```text
Mobile App
    ↓
Load Balancer
    ↓
Microservices Cluster
├── Auth Service
├── User Service
├── Chat Service
├── Media Service
└── Notification Service
    ↓
Data Layer
├── User DB
├── Chat DB
├── Redis Cache
└── Object Storage (Media)

Message Queue (Kafka / RabbitMQ) ←→ Services
```

---

### WhatsApp — LLD Questions (Chat Service Example)

| Area | Questions to answer |
| --- | --- |
| **Classes** | What classes are needed? |
| **Message object** | What should the Message object contain? |
| **Methods** | How should `sendMessage()` work? |
| **Design patterns** | Which pattern fits? (Repository, Factory, Observer…) |
| **Validation** | How should validations and exceptions be handled? |
| **Database** | What tables are required? |
| **Data flow** | How does data flow between objects/methods? |

#### LLD — Chat Service Class Design

```text
User
├── id, name, status

Message
├── id, senderId, receiverId, content, timestamp, status

Chat
├── id, type (one-to-one / group), participants

ChatService
├── sendMessage()
├── editMessage()
├── deleteMessage()
└── markAsRead()
```

```csharp
// Simplified LLD example
public class Message
{
    public string Id { get; set; }
    public string SenderId { get; set; }
    public string ReceiverId { get; set; }
    public string Content { get; set; }
    public DateTime Timestamp { get; set; }
    public MessageStatus Status { get; set; }
}

public class ChatService
{
    public void SendMessage(Message message)
    {
        Validate(message);
        _repository.Save(message);
        _notificationService.Notify(message.ReceiverId);
    }
}
```

---

### HLD vs LLD — Quick Comparison

| Feature | HLD | LLD |
| --- | --- | --- |
| **Focus** | System architecture | Code / module design |
| **Level** | Macro | Micro |
| **Components** | Services, databases, infra, communication | Classes, methods, attributes, logic |
| **Goal** | Scalability, availability, reliability | Maintainability, reusability, testability |
| **Audience** | Architects, tech leads | Developers |
| **Deliverables** | Architecture diagrams, component list, data flow | Class diagrams, API contracts, DB schema, algorithms |

**Interview one-liner:** HLD answers how the whole system works; LLD answers how a single module is built — both are required for great software.

---

<a id="topic-2"></a>

## 2. Requirements — Functional & Non-Functional

### Functional Requirements

What the system **must do** — features users expect.

| Type | Examples |
| --- | --- |
| User actions | Sign up, send message, upload file |
| Business rules | Max group size 256, message edit within 15 min |
| Integrations | OAuth login, payment gateway |

### Non-Functional Requirements (NFRs)

How the system **must perform** — quality attributes.

| NFR | Meaning | Example target |
| --- | --- | --- |
| **Scalability** | Handle growth in users/traffic | 10M DAU |
| **Availability** | Uptime | 99.9% SLA |
| **Latency** | Response time | p99 < 200ms |
| **Consistency** | Data correctness | Strong vs eventual |
| **Durability** | Data not lost | Replicated storage |
| **Security** | Auth, encryption | TLS, E2E encryption |

**Interview tip:** Always clarify requirements before drawing architecture.

---

<a id="topic-3"></a>

## 3. Scalability & Load Balancing

### Vertical vs Horizontal Scaling

| Type | Approach | Pros | Cons |
| --- | --- | --- | --- |
| **Vertical** | Bigger server (more CPU/RAM) | Simple | Hardware limit, single point of failure |
| **Horizontal** | More servers | Unlimited scale, fault tolerance | Complexity, data consistency |

### Load Balancing

Distributes traffic across multiple servers.

| Algorithm | Use |
| --- | --- |
| Round robin | Even distribution |
| Least connections | Long-lived connections |
| IP hash | Session stickiness |
| Weighted | Different server capacities |

```text
Clients → Load Balancer → [Server 1, Server 2, Server 3]
```

**Layers:** DNS load balancing · L4 (TCP) · L7 (HTTP path-based routing)

---

<a id="topic-4"></a>

## 4. Databases & Storage

### SQL vs NoSQL

| | SQL (RDBMS) | NoSQL |
| --- | --- | --- |
| **Schema** | Fixed, relational | Flexible, document/key-value/graph |
| **Scale** | Vertical + read replicas | Horizontal sharding native |
| **ACID** | Strong | Often eventual consistency |
| **Use case** | Transactions, joins | High scale, flexible schema |

### Common Choices

| Store | Use case |
| --- | --- |
| PostgreSQL / SQL Server | Users, orders, relational data |
| MongoDB | Flexible documents, catalogs |
| Cassandra / DynamoDB | High write throughput, time-series |
| Redis | Cache, sessions, pub/sub |
| S3 / Blob Storage | Images, videos, files |

### Sharding & Replication

| Technique | Purpose |
| --- | --- |
| **Replication** | Copies for read scale + failover |
| **Sharding** | Split data across DBs by key (userId, region) |

---

<a id="topic-5"></a>

## 5. Caching — Redis & CDN

### Caching Strategies

| Strategy | Flow |
| --- | --- |
| **Cache-aside** | App checks cache → miss → read DB → write cache |
| **Write-through** | Write to cache + DB together |
| **Write-back** | Write cache first, async flush to DB |

### Redis Use Cases

- Session storage
- Rate limiting counters
- Real-time leaderboards
- Pub/sub for notifications

### CDN (Content Delivery Network)

Edge servers cache static/media content close to users — reduces latency for images, videos, JS/CSS.

**Interview one-liner:** Cache hot data in Redis; serve static/media via CDN.

---

<a id="topic-6"></a>

## 6. API Design & Communication

### Sync vs Async

| Type | Protocol | Use |
| --- | --- | --- |
| **Sync** | REST, gRPC | Request/response, real-time query |
| **Async** | Message queue, events | Decouple services, heavy processing |

### REST vs gRPC vs WebSocket

| API | Best for |
| --- | --- |
| **REST** | Public APIs, CRUD, simplicity |
| **gRPC** | Internal microservices, high performance |
| **WebSocket** | Real-time chat, live updates |

### API Gateway

Single entry point — auth, routing, rate limiting, SSL termination.

---

<a id="topic-7"></a>

## 7. Message Queues & Event-Driven Design

### Why Message Queue?

- Decouple producer and consumer
- Handle traffic spikes (buffer)
- Async processing (notifications, emails)

| Broker | Characteristics |
| --- | --- |
| **Kafka** | High throughput, event log, replay |
| **RabbitMQ** | Flexible routing, traditional queue |
| **Azure Service Bus** | Cloud-native, enterprise |

```text
Chat Service → Kafka → Notification Service
                    → Analytics Service
```

---

<a id="topic-8"></a>

## 8. CAP Theorem & Consistency

### CAP Theorem

In a distributed system, pick **two** of three:

| | Meaning |
| --- | --- |
| **C** — Consistency | All nodes see same data at same time |
| **A** — Availability | Every request gets a response |
| **P** — Partition tolerance | System works despite network splits |

**Reality:** Network partitions happen → choose **CP** or **AP**.

| Choice | Example |
| --- | --- |
| **CP** | Banking — consistency over availability |
| **AP** | Social feed — availability, eventual consistency |

### Consistency Models

| Model | Description |
| --- | --- |
| **Strong** | Read always returns latest write |
| **Eventual** | Replicas converge over time |
| **Read-your-writes** | User sees own updates immediately |

---

<a id="topic-9"></a>

## 9. Microservices & Monolith at Scale

| | Monolith | Microservices |
| --- | --- | --- |
| **Deploy** | Single unit | Independent per service |
| **Scale** | Scale entire app | Scale individual services |
| **Complexity** | Lower initially | Higher — networking, observability |
| **Best for** | Startups, small teams | Large scale, many teams |

**System design link:** HLD often results in microservices for large apps (WhatsApp, Netflix). LLD designs each service internally.

---

<a id="topic-10"></a>

## 10. Authentication, Security & Rate Limiting

### Auth Patterns

| Pattern | Use |
| --- | --- |
| **JWT** | Stateless API auth |
| **OAuth 2.0** | Third-party login (Google, GitHub) |
| **Session + cookie** | Web apps |

### Security Essentials

- HTTPS everywhere
- Encrypt data at rest and in transit
- Input validation, SQL injection prevention
- Secrets in vault — not in code

### Rate Limiting

Prevent abuse — token bucket, sliding window, per-IP or per-user limits.

```text
API Gateway → Rate Limiter → Backend Services
```

---

<a id="topic-11"></a>

## 11. Observability — Logging, Metrics, Tracing

| Pillar | Tool examples | Purpose |
| --- | --- | --- |
| **Logging** | ELK, Serilog, CloudWatch | Debug errors, audit |
| **Metrics** | Prometheus, Grafana, Datadog | CPU, latency, error rate |
| **Tracing** | Jaeger, Zipkin, OpenTelemetry | Follow request across services |

**SLI / SLO / SLA:** Define measurable targets (e.g. 99.9% requests < 300ms).

---

<a id="topic-12"></a>

## 12. Classic System Design Problems

| Problem | Key components |
| --- | --- |
| **URL Shortener** | Hash generation, redirect, analytics, cache |
| **Chat App (WhatsApp)** | WebSocket, message queue, presence, media storage |
| **News Feed** | Fan-out on write vs read, cache, ranking |
| **Rate Limiter** | Token bucket, Redis, distributed counter |
| **Notification System** | Queue, push providers, retry, dedup |
| **E-commerce** | Inventory, cart, payment, order saga |
| **YouTube / Netflix** | CDN, transcoding, recommendation, blob storage |

### 4-Step Interview Framework

1. **Clarify requirements** — functional + non-functional + scale estimates
2. **High-level design** — components, APIs, data flow (HLD)
3. **Deep dive** — database schema, bottlenecks, scaling one component (LLD)
4. **Trade-offs** — what you'd improve with more time

---

<a id="topic-13"></a>

## 13. Interview Framework & Trade-offs

### Back-of-Envelope Estimation

| Metric | Rough value |
| --- | --- |
| 1 day | ~86,400 seconds ≈ **100K** |
| 1 million requests/day | ~12 req/sec average |
| Text message | ~1 KB |
| Image | ~200 KB – 2 MB |

### Common Trade-offs

| Trade-off | Options |
| --- | --- |
| SQL vs NoSQL | Consistency/joins vs scale/flexibility |
| Sync vs async | Simplicity vs decoupling |
| Cache | Speed vs staleness |
| Consistency vs availability | CAP — CP vs AP |
| Monolith vs microservices | Speed of dev vs scale of ops |

**Interview one-liner:** Start with requirements, draw HLD boxes and arrows, deep-dive one component with LLD, then discuss trade-offs and scale.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

| Topic | Key Points |
| --- | --- |
| HLD vs LLD | HLD = whole system architecture; LLD = module/classes/methods |
| HLD focus | Services, DBs, infra, scaling, communication |
| LLD focus | Classes, methods, validation, DB tables, design patterns |
| HLD analogy | Blueprint of the city |
| LLD analogy | Blueprint of one building |
| Functional requirements | What system does — features |
| Non-functional requirements | How well — scale, latency, availability, security |
| Vertical vs horizontal scale | Bigger machine vs more machines |
| Load balancer | Distribute traffic across servers |
| SQL vs NoSQL | Relational/ACID vs flexible/horizontal scale |
| Caching | Redis cache-aside; CDN for static/media |
| CAP theorem | Pick 2: Consistency, Availability, Partition tolerance |
| Message queue | Decouple services — Kafka, RabbitMQ |
| API Gateway | Single entry — auth, routing, rate limit |
| Rate limiting | Token bucket / sliding window — prevent abuse |
| Observability | Logs + metrics + distributed tracing |
| System design steps | Requirements → HLD → deep dive → trade-offs |

**Suggested learning order:** HLD vs LLD → requirements → scale → databases → cache → APIs → messaging → CAP → security → classic problems → interview framework.

**One-liner:** System design interviews test whether you can think at both levels — architect the city (HLD) and design the building (LLD).
