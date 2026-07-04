<h1 style="color:#2563eb;">System Design Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
Standard <strong style="color:#16a34a;">system design interview roadmap</strong> — HLD vs LLD, requirements, scalability, databases, caching, messaging, security, and classic design problems explained concisely.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> HLD vs LLD — WhatsApp Example</a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> LLD — SOLID, Design Patterns & Architecture</a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> Requirements — Functional & Non-Functional</a></li>
  <li><a href="#topic-4"><span style="color:#2563eb;font-weight:700;">4.</span> Scalability & Load Balancing</a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> Databases & Storage</a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> Caching — Redis & CDN</a></li>
  <li><a href="#topic-7"><span style="color:#16a34a;font-weight:700;">7.</span> API Design & Communication</a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> Message Queues & Event-Driven Design</a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> CAP Theorem & Consistency</a></li>
  <li><a href="#topic-10"><span style="color:#7c3aed;font-weight:700;">10.</span> Microservices & Monolith at Scale</a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> Authentication, Security & Rate Limiting</a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> Observability — Logging, Metrics, Tracing</a></li>
  <li><a href="#topic-13"><span style="color:#dc2626;font-weight:700;">13.</span> Classic System Design Problems</a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> Interview Framework & Trade-offs</a></li>
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

## 2. LLD — SOLID, Design Patterns & Architecture

### Where Principles Belong in System Design

| Concept | Level | Used for |
| --- | --- | --- |
| **SOLID principles** | LLD | Class / interface design |
| **Design patterns** | LLD | Reusable code structure |
| **Architectural patterns** | HLD | Application / system structure |

**Interview one-liner:** LLD uses SOLID and design patterns to build maintainable modules; HLD uses architectural patterns to structure the whole application.

---

### SOLID Principles

| Principle | Full Form | Meaning | Example |
| --- | --- | --- | --- |
| **S** | Single Responsibility Principle | A class should have only one responsibility | `EmployeeService` for business logic, `EmployeeRepository` for database logic |
| **O** | Open/Closed Principle | Open for extension, closed for modification | Extension methods in C# |
| **L** | Liskov Substitution Principle | Child classes should replace parent classes without breaking behavior | `Bird bird = new Sparrow();` |
| **I** | Interface Segregation Principle | Clients should not depend on unused interfaces | `IPrinter`, `IScanner` instead of one big `IMachine` |
| **D** | Dependency Inversion Principle | Depend on abstractions, not concrete implementations | `PaymentService` depends on `IPaymentGateway` |

#### SOLID — Bad vs Good (.NET)

| Principle | Violation (bad) | Fix (good) |
| --- | --- | --- |
| SRP | `EmployeeService` saves to DB, sends email, generates PDF | Split into `EmployeeService`, `EmployeeRepository`, `EmailService` |
| OCP | `if (type == "RazorPay")` in payment method | `IPaymentGateway` + strategy — add new gateway without editing existing code |
| LSP | `Square : Rectangle` breaks `SetWidth`/`SetHeight` contract | Subtypes must honor parent behavior — don't weaken preconditions |
| ISP | Fat `IMachine` with `Print`, `Scan`, `Fax` — client uses only `Print` | `IPrinter`, `IScanner` — small focused interfaces |
| DIP | `OrderService` does `new SqlRepository()` | Depend on `IOrderRepository` — inject via constructor |

#### IoC vs DI

| Concept | Type | Meaning |
| --- | --- | --- |
| IoC | Principle / Concept | Transfers object creation and control to framework/container |
| DI | Design Pattern | Implements IoC by injecting dependencies from outside |

#### Service Lifetimes (ASP.NET Core)

| Lifetime | Registration | Instance scope | Example |
| --- | --- | --- | --- |
| Transient | `AddTransient` | New every resolve | Lightweight stateless helpers |
| Scoped | `AddScoped` | One per HTTP request | `DbContext`, unit-of-work |
| Singleton | `AddSingleton` | One for app lifetime | Config, logging, caches |

| Question | Answer |
| --- | --- |
| SRP in one line? | One class, one reason to change |
| OCP in one line? | Extend via new types/interfaces, don't modify existing working code |
| DIP vs DI? | DIP = principle (depend on abstractions); DI = pattern implementing it |
| Scoped vs Singleton for DbContext? | **Scoped** — DbContext is not thread-safe; never Singleton |

**Must-know:** SOLID is about maintainability and testability — tie each letter to a real refactor story. Constructor injection is the default in ASP.NET Core.

---

### Design Patterns (LLD)

#### Top 5 Patterns for .NET Interviews

| Pattern | Category | When to use | .NET example |
| --- | --- | --- | --- |
| Singleton | Creational | One shared instance | Logger, config holder |
| Factory | Creational | Hide concrete type creation | `PaymentGatewayFactory` |
| Repository | Structural-ish | Abstract data access | `IRepository<T>` over EF |
| Strategy | Behavioral | Swap algorithms at runtime | Payment methods, pricing rules |
| Decorator | Structural | Add behavior without subclassing | `LoggingDecorator` around service |

#### Creational Patterns

| Pattern | Meaning | Example |
| --- | --- | --- |
| Singleton | Ensures only one object instance exists | Logger class |
| Factory | Creates objects without exposing creation logic | `PaymentGatewayFactory` |
| Abstract Factory | Creates related object families | UI factory for Windows and Mac controls |
| Builder | Builds complex objects step by step | `PizzaBuilder`, `ReportBuilder` |
| Prototype | Creates objects by cloning existing objects | `MemberwiseClone()` |

#### Structural Patterns

| Pattern | Meaning | Example |
| --- | --- | --- |
| Adapter | Converts one interface into another compatible interface | Power adapter |
| Decorator | Adds behavior dynamically without modifying class | `LoggingDecorator` around service |
| Facade | Provides simplified interface to complex system | `HomeTheaterFacade` |
| Composite | Treats group of objects as single object | Folder containing files/folders |
| Proxy | Controls access to another object | Lazy loading in EF Core |
| Bridge | Separates abstraction from implementation | `RemoteControl` and `TV` |

#### Behavioral Patterns

| Pattern | Meaning | Example |
| --- | --- | --- |
| Strategy | Encapsulates interchangeable algorithms | Different payment methods |
| Observer | Notifies dependent objects automatically on state change | YouTube subscribers notification |
| Command | Encapsulates request as an object | Remote control button commands |
| Iterator | Sequentially accesses collection elements | `foreach` loop |
| Mediator | Centralizes communication between objects | Chat room mediator |
| State | Changes behavior based on object state | ATM machine states |
| Chain of Responsibility | Passes request through chain of handlers | ASP.NET Core Middleware Pipeline |

| Question | Answer |
| --- | --- |
| Factory vs Abstract Factory? | Factory = one product; Abstract Factory = families of related products |
| Strategy vs State? | Strategy = client picks algorithm; State = object changes behavior by internal state |
| Middleware = which pattern? | Chain of Responsibility |
| Repository pattern? | Abstraction over data access — very common in .NET interviews |

**Must-know:** **Creational** = how objects are born; **Structural** = how they're composed; **Behavioral** = how they communicate.

---

### Architectural Patterns (HLD)

#### Layered vs Clean Architecture

| Layer (traditional) | Clean Architecture ring | Responsibility |
| --- | --- | --- |
| UI / API | Presentation | Controllers, DTOs, HTTP |
| Business / Service | Application | Use cases, commands, queries |
| Domain | Domain | Entities, value objects, rules |
| Data / Infrastructure | Infrastructure | EF, files, external APIs |

**Dependency rule (Clean):** inner layers never reference outer layers — Domain has zero framework references.

#### Architectural Pattern Summary

| Pattern | Meaning | Example |
| --- | --- | --- |
| MVC | Separates application into Model, View, and Controller | ASP.NET Core MVC application |
| Layered Architecture | Organizes code into layers like UI, Business, and Data | UI Layer → Service Layer → Repository Layer |
| Clean Architecture | Separates business logic from frameworks and infrastructure | Domain, Application, Infrastructure, API projects |
| Microservices | Breaks application into small independent services | Payment Service, User Service, Order Service |
| Event-Driven Architecture | Components communicate using events/messages | RabbitMQ / Kafka event processing |
| CQRS | Separates read and write operations into different models | MediatR in ASP.NET Core |

#### CQRS Flow

| Step | Command side | Query side |
| --- | --- | --- |
| Input | `CreateOrderCommand` | `GetOrderByIdQuery` |
| Handler | Validates, writes to DB | Reads optimized model / projection |
| Model | Write entity / aggregate | Read DTO / view model |
| Storage | Same DB or separate write DB | Read replica / materialized view |

#### Distributed Transaction Patterns

| Pattern | Purpose | How |
| --- | --- | --- |
| Saga | Multi-service transaction | Choreography (events) or orchestration (coordinator) |
| Outbox | Reliable publish | Write event to outbox table in same DB transaction as business data |
| Inbox | Reliable consume | Store message ID — process once, idempotent handler |

| Question | Answer |
| --- | --- |
| When CQRS? | High read/write asymmetry, complex domains, separate scaling of reads |
| Saga vs 2PC? | 2PC rare in microservices; Saga uses compensating transactions |
| Clean Architecture core idea? | Business rules at center; frameworks are plugins on the outside |

**Must-know:** Event-driven decouples producers/consumers; MediatR is a popular CQRS/command dispatcher in ASP.NET Core.

---

<a id="topic-3"></a>

## 3. Requirements — Functional & Non-Functional

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

<a id="topic-4"></a>

## 4. Scalability & Load Balancing

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

<a id="topic-5"></a>

## 5. Databases & Storage

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

<a id="topic-6"></a>

## 6. Caching — Redis & CDN

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

<a id="topic-7"></a>

## 7. API Design & Communication

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

<a id="topic-8"></a>

## 8. Message Queues & Event-Driven Design

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

<a id="topic-9"></a>

## 9. CAP Theorem & Consistency

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

<a id="topic-10"></a>

## 10. Microservices & Monolith at Scale

| | Monolith | Microservices |
| --- | --- | --- |
| **Deploy** | Single unit | Independent per service |
| **Scale** | Scale entire app | Scale individual services |
| **Complexity** | Lower initially | Higher — networking, observability |
| **Best for** | Startups, small teams | Large scale, many teams |

**System design link:** HLD often results in microservices for large apps (WhatsApp, Netflix). LLD designs each service internally.

---

<a id="topic-11"></a>

## 11. Authentication, Security & Rate Limiting

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

<a id="topic-12"></a>

## 12. Observability — Logging, Metrics, Tracing

| Pillar | Tool examples | Purpose |
| --- | --- | --- |
| **Logging** | ELK, Serilog, CloudWatch | Debug errors, audit |
| **Metrics** | Prometheus, Grafana, Datadog | CPU, latency, error rate |
| **Tracing** | Jaeger, Zipkin, OpenTelemetry | Follow request across services |

**SLI / SLO / SLA:** Define measurable targets (e.g. 99.9% requests < 300ms).

---

<a id="topic-13"></a>

## 13. Classic System Design Problems

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

<a id="topic-14"></a>

## 14. Interview Framework & Trade-offs

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
| SOLID principles | LLD — class/interface design; one class one responsibility, depend on abstractions |
| Design patterns | LLD — reusable code structure; creational, structural, behavioral |
| Architectural patterns | HLD — MVC, layered, clean, microservices, CQRS, event-driven |
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

**Suggested learning order:** HLD vs LLD → SOLID & design patterns → requirements → scale → databases → cache → APIs → messaging → CAP → security → classic problems → interview framework.

**One-liner:** System design interviews test whether you can think at both levels — architect the city (HLD) and design the building (LLD).
