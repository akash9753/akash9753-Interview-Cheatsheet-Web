<h1 style="color:#2563eb;">Microservices Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
This roadmap is focused on <strong style="color:#16a34a;">microservices architecture interview preparation</strong> — design principles, communication patterns, data management, resilience, and operations.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> <span style="color:#111827;">Microservices Fundamentals</span></a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> <span style="color:#111827;">Monolith vs Microservices</span></a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> <span style="color:#111827;">Domain-Driven Design and Bounded Contexts</span></a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> <span style="color:#111827;">Service Communication Patterns</span></a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> <span style="color:#111827;">REST APIs and gRPC</span></a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> <span style="color:#111827;">API Gateway Pattern</span></a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> <span style="color:#111827;">Service Discovery and Load Balancing</span></a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> <span style="color:#111827;">Database per Service</span></a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> <span style="color:#111827;">CQRS and Event Sourcing</span></a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> <span style="color:#111827;">Saga Pattern and Distributed Transactions</span></a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> <span style="color:#111827;">Message Brokers and Event-Driven Architecture</span></a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> <span style="color:#111827;">Resilience Patterns</span></a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> <span style="color:#111827;">Observability: Logging, Metrics, and Tracing</span></a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> <span style="color:#111827;">Containerization and Kubernetes</span></a></li>
  <li><a href="#topic-15"><span style="color:#ea580c;font-weight:700;">15.</span> <span style="color:#111827;">Security in Microservices</span></a></li>
  <li><a href="#topic-16"><span style="color:#0891b2;font-weight:700;">16.</span> <span style="color:#111827;">Testing Microservices</span></a></li>
  <li><a href="#topic-17"><span style="color:#0891b2;font-weight:700;">17.</span> <span style="color:#111827;">CI/CD and Deployment Strategies</span></a></li>
  <li><a href="#topic-18"><span style="color:#0891b2;font-weight:700;">18.</span> <span style="color:#111827;">Anti-Patterns and When Not to Use Microservices</span></a></li>
  <li><a href="#suggested-learning-order"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Suggested Learning Order</span></a></li>
  <li><a href="#weekly-study-plan"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Weekly Study Plan</span></a></li>
  <li><a href="#practical-project-preparation"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Practical Project Preparation</span></a></li>
  <li><a href="#final-preparation-checklist"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Final Preparation Checklist</span></a></li>
</ul>

---

<a id="topic-1"></a>

## 1. Microservices Fundamentals

### What to Learn

- Definition of microservices
- Characteristics of microservices architecture
- Single responsibility per service
- Independent deployability
- Decentralized data management
- Technology heterogeneity
- Organizational alignment (Conway's Law)

### Core Characteristics

| Characteristic | Meaning |
| --- | --- |
| Small and focused | Each service does one business capability well |
| Independent | Deploy, scale, and fail independently |
| Decentralized | Own data, own team, own technology choices |
| Communication | Lightweight protocols (HTTP, messaging) |
| Resilience | Design for failure — no single point of failure |

```text
E-Commerce System (Microservices)
│
├── User Service        → Authentication, profiles
├── Product Service     → Catalog, inventory
├── Order Service       → Order placement, status
├── Payment Service     → Payment processing
├── Notification Service → Email, SMS alerts
└── API Gateway         → Single entry point
```

| Question | Answer |
| --- | --- |
| What is a microservice? | Small, autonomous service around a business capability — independently deployable |
| Microservices vs SOA? | Microservices are finer-grained, avoid ESB, favor smart endpoints/dumb pipes |
| Conway's Law? | System design mirrors communication structure of the organization |
| How small is "micro"? | Size by business boundary, not lines of code — bounded context matters |
| Shared libraries OK? | Careful — shared libraries create coupling; prefer duplication over wrong abstraction |

**Must-know points:**
- Microservices are an architectural style, not a technology
- Each service should be owned by a team that can build and operate it end-to-end
- Independence is the key benefit — trade-off is distributed system complexity

---

<a id="topic-2"></a>

## 2. Monolith vs Microservices

### What to Learn

- Monolithic architecture
- Modular monolith
- When to start with monolith
- Migration strategies (strangler fig)
- Trade-offs comparison
- Team size and organizational factors

### Architecture Comparison

| Aspect | Monolith | Microservices |
| --- | --- | --- |
| Deployment | Single unit | Independent per service |
| Scaling | Scale entire app | Scale individual services |
| Technology | One stack typically | Polyglot possible |
| Data | Shared database | Database per service |
| Complexity | Simpler ops | Complex distributed ops |
| Team structure | One team common | Multiple autonomous teams |
| Failure isolation | One failure can crash all | Isolated failures |
| Development speed (early) | Faster initially | Slower initially (infra overhead) |

### Strangler Fig Pattern

```text
Legacy Monolith
  ↓
Route new features to new microservices via API Gateway
  ↓
Gradually replace monolith modules
  ↓
Decommission monolith
```

| Question | Answer |
| --- | --- |
| When start monolith? | Small team, unclear domain boundaries, early-stage product |
| When move to microservices? | Clear bounded contexts, multiple teams, independent scaling needs |
| Modular monolith? | Single deploy but well-separated modules — good middle ground |
| Biggest microservices mistake? | Splitting too early before understanding domain boundaries |
| Strangler fig? | Incrementally replace monolith by routing traffic to new services |

**Must-know points:**
- "Monolith first" is valid — extract services when pain points justify the complexity
- Network calls replace in-process calls — latency and failure modes change dramatically
- Operational maturity (CI/CD, monitoring, container orchestration) is prerequisite

---

<a id="topic-3"></a>

## 3. Domain-Driven Design and Bounded Contexts

### What to Learn

- Bounded context
- Ubiquitous language
- Aggregates and aggregate roots
- Context mapping
- Entities vs value objects
- Domain events
- Decomposing by business capability

### DDD Building Blocks

| Concept | Meaning |
| --- | --- |
| Bounded Context | Explicit boundary where a domain model applies |
| Ubiquitous Language | Shared vocabulary between developers and domain experts |
| Aggregate | Cluster of entities treated as a single unit for data changes |
| Aggregate Root | Entry point for accessing aggregate — enforces invariants |
| Domain Event | Something that happened in the domain that other contexts care about |

### Context Mapping Patterns

| Pattern | Relationship |
| --- | --- |
| Shared Kernel | Two contexts share a subset of model |
| Customer-Supplier | Upstream/downstream with negotiated contract |
| Anti-Corruption Layer | Translation layer to protect your model from external model |
| Open Host Service | Published protocol for integration |
| Published Language | Well-documented exchange format (e.g. JSON schema) |

| Question | Answer |
| --- | --- |
| Bounded context example? | "Order" means different things in Sales vs Shipping vs Billing |
| How to identify services? | Find bounded contexts — each becomes a candidate microservice |
| Aggregate root? | Only entity external code can reference — controls consistency boundary |
| Anti-corruption layer? | Adapter that translates external API/model to your domain model |
| Domain event example? | `OrderPlaced`, `PaymentCompleted` — other services react asynchronously |

**Must-know points:**
- Service boundaries should align with business capabilities, not technical layers
- Avoid "entity services" (one service per database table) — group by business function
- Use domain events for cross-context communication instead of direct DB joins

---

<a id="topic-4"></a>

## 4. Service Communication Patterns

### What to Learn

- Synchronous vs asynchronous communication
- Request/response vs event-driven
- Orchestration vs choreography
- Coupling implications
- Idempotency
- Message ordering

### Sync vs Async

| Type | Protocol | Coupling | Use When |
| --- | --- | --- | --- |
| Synchronous | HTTP/REST, gRPC | Tight — caller waits | Need immediate response, simple queries |
| Asynchronous | Message queue, event bus | Loose — fire and forget | Long-running, fan-out, eventual consistency OK |

### Orchestration vs Choreography

```text
Orchestration (central coordinator)
  Order Service → tells → Payment, Inventory, Shipping

Choreography (no central coordinator)
  OrderPlaced event → Payment listens
                    → Inventory listens
                    → Shipping listens
```

| Question | Answer |
| --- | --- |
| Sync vs async trade-off? | Sync = simpler but cascading failures; async = resilient but eventual consistency |
| Orchestration vs choreography? | Orchestration = central saga coordinator; choreography = services react to events |
| When prefer async? | Multi-step workflows, high throughput, decoupling teams |
| Idempotency? | Same request processed once even if delivered multiple times — critical for messaging |
| Backpressure? | Slow consumer signals producer to slow down — prevents overload |

**Must-know points:**
- Prefer async messaging for cross-service workflows that don't need immediate response
- Design all message handlers to be idempotent
- Avoid distributed transactions — use sagas instead

---

<a id="topic-5"></a>

## 5. REST APIs and gRPC

### What to Learn

- REST principles for microservices
- API versioning strategies
- gRPC and Protocol Buffers
- REST vs gRPC comparison
- Contract-first design
- OpenAPI/Swagger
- Error handling conventions

### REST vs gRPC

| Aspect | REST | gRPC |
| --- | --- | --- |
| Protocol | HTTP/JSON | HTTP/2 + Protobuf |
| Performance | Good | Better — binary, multiplexing |
| Browser support | Native | Needs gRPC-Web proxy |
| Contract | OpenAPI optional | .proto file required |
| Streaming | Limited | Bidirectional streaming built-in |
| Human readable | Yes (JSON) | No (binary) |
| Best for | Public APIs, CRUD | Internal service-to-service |

### API Versioning Strategies

| Strategy | Example |
| --- | --- |
| URL path | `/api/v2/orders` |
| Query string | `/api/orders?version=2` |
| Header | `Accept: application/vnd.myapi.v2+json` |
| Media type | Content negotiation |

| Question | Answer |
| --- | --- |
| When gRPC over REST? | Internal high-performance service-to-service, streaming, strongly typed contracts |
| REST maturity levels? | Richardson Maturity Model — Level 0 (RPC) to Level 3 (HATEOAS) |
| Breaking vs non-breaking changes? | Adding optional field = non-breaking; removing/renaming = breaking |
| Contract-first? | Define API contract before implementation — enables parallel development |
| 4xx vs 5xx? | 4xx = client error (bad request); 5xx = server error (retry may help) |

**Must-know points:**
- Use REST for external/public APIs; gRPC for internal high-throughput communication
- Always version APIs — plan deprecation timeline
- Return consistent error format across all services

---

<a id="topic-6"></a>

## 6. API Gateway Pattern

### What to Learn

- Why API Gateway is needed
- Routing and composition
- Cross-cutting concerns
- BFF (Backend for Frontend)
- Rate limiting and throttling
- SSL termination
- Popular gateways (Kong, Ocelot, Azure APIM, AWS API Gateway)

### API Gateway Responsibilities

```text
Client
  ↓
API Gateway
  ├── Authentication / Authorization
  ├── Rate limiting
  ├── Request routing
  ├── Response aggregation
  ├── Protocol translation (REST → gRPC)
  └── Caching
  ↓
Microservices
```

| Question | Answer |
| --- | --- |
| Why not call services directly? | Clients would need to know all service locations, handle auth per service, deal with multiple protocols |
| BFF pattern? | Separate gateway per client type (web BFF, mobile BFF) — tailored responses |
| Gateway vs load balancer? | LB distributes traffic; gateway adds API management (auth, routing, composition) |
| Single point of failure? | Yes — deploy multiple gateway instances behind load balancer |
| Response aggregation? | Gateway calls multiple services and combines results — reduces client round trips |

**Must-know points:**
- Keep business logic out of the gateway — only cross-cutting concerns
- Ocelot is popular for .NET microservices API gateway
- Use BFF when web and mobile need different data shapes from same backend

---

<a id="topic-7"></a>

## 7. Service Discovery and Load Balancing

### What to Learn

- Client-side vs server-side discovery
- Service registry (Consul, Eureka, etcd)
- DNS-based discovery
- Kubernetes service discovery
- Health checks
- Load balancing algorithms

### Discovery Patterns

| Pattern | How It Works |
| --- | --- |
| Client-side | Client queries registry, picks instance, load balances |
| Server-side | Client calls load balancer, LB queries registry |
| DNS-based | Services registered as DNS records |
| Kubernetes | kube-dns/CoreDNS resolves service names to pod IPs |

### Load Balancing Algorithms

| Algorithm | Behavior |
| --- | --- |
| Round Robin | Rotate through instances sequentially |
| Least Connections | Route to instance with fewest active connections |
| Random | Random instance selection |
| Weighted | Favor instances with more capacity |
| Consistent Hashing | Same client always routes to same instance |

| Question | Answer |
| --- | --- |
| Why service discovery? | Services scale up/down dynamically — IPs change, clients need current locations |
| Health check types? | HTTP endpoint, TCP port, custom script — unhealthy instances removed from rotation |
| Kubernetes service types? | ClusterIP (internal), NodePort, LoadBalancer, ExternalName |
| Eureka vs Consul? | Eureka = Netflix, AP system; Consul = CP, also config and service mesh |
| Sidecar proxy? | Envoy/Linkerd proxy alongside each service — handles discovery, LB, retries |

**Must-know points:**
- In Kubernetes, service discovery is built-in via Services and DNS
- Always implement health check endpoints (`/health`, `/ready`)
- Use readiness probes to prevent traffic to starting-up instances

---

<a id="topic-8"></a>

## 8. Database per Service

### What to Learn

- Why each service owns its data
- Challenges of distributed data
- Data duplication and eventual consistency
- Cross-service queries
- Shared database anti-pattern
- Polyglot persistence
- Outbox and inbox patterns

### Database per Service

```text
Order Service     → Order DB (PostgreSQL)
Product Service   → Product DB (MongoDB)
User Service      → User DB (SQL Server)
Analytics Service → Read replica / Data warehouse
```

### Handling Cross-Service Data Needs

| Approach | Description |
| --- | --- |
| API composition | Gateway/service calls multiple APIs and joins data |
| CQRS read model | Maintain denormalized read database fed by events |
| Data duplication | Copy needed fields via events — accept eventual consistency |
| Saga | Coordinate multi-service transactions |

| Question | Answer |
| --- | --- |
| Why database per service? | Loose coupling — services evolve schema independently |
| How query across services? | API composition or CQRS read models — never direct DB joins across services |
| Shared database anti-pattern? | Multiple services sharing one DB — creates tight coupling, schema conflicts |
| Polyglot persistence? | Each service picks best DB for its needs (SQL, NoSQL, graph, cache) |
| Eventual consistency? | Data across services temporarily inconsistent — converges over time |

**Must-know points:**
- No distributed JOINs — design for data locality within each service
- Use outbox pattern to reliably publish events when DB state changes
- Accept duplication — same data may exist in multiple services in different shapes

---

<a id="topic-9"></a>

## 9. CQRS and Event Sourcing

### What to Learn

- Command Query Responsibility Segregation
- Separate read and write models
- Event sourcing concept
- Event store
- Projections and read models
- When to use CQRS/ES
- MediatR in .NET

### CQRS

```text
Commands (Write)              Queries (Read)
      ↓                              ↓
Write Model / DB              Read Model / DB
(optimized for writes)        (optimized for reads, denormalized)
```

### Event Sourcing

```text
Instead of storing current state:
  Store sequence of events → OrderCreated → ItemAdded → PaymentReceived

Current state = replay all events (or use snapshots)
```

| Question | Answer |
| --- | --- |
| CQRS benefit? | Scale reads and writes independently; optimize each side |
| Event sourcing benefit? | Complete audit trail, temporal queries, rebuild state from events |
| CQRS without event sourcing? | Yes — common to use CQRS with traditional CRUD write side |
| When NOT to use? | Simple CRUD apps — adds complexity without benefit |
| MediatR role? | In-process command/query dispatcher — IRequest, IRequestHandler |
| Snapshot? | Periodic save of aggregate state — avoid replaying thousands of events |

**Must-know points:**
- CQRS shines when read and write patterns differ significantly
- Event sourcing adds auditability but increases complexity — use when audit/replay is required
- Projections build read models asynchronously from event stream

---

<a id="topic-10"></a>

## 10. Saga Pattern and Distributed Transactions

### What to Learn

- Why 2PC (two-phase commit) doesn't work well
- Choreography-based saga
- Orchestration-based saga
- Compensating transactions
- Saga execution coordinator
- Idempotency in saga steps
- Outbox pattern

### Saga Types

| Type | Coordinator | How |
| --- | --- | --- |
| Choreography | None — events drive flow | Each service publishes events, others react |
| Orchestration | Central saga orchestrator | Orchestrator tells each service what to do next |

### Example: Order Saga

```text
1. Order Service  → CreateOrder
2. Payment Service → ProcessPayment
3. Inventory Service → ReserveStock
4. Shipping Service → CreateShipment

Failure at step 3:
  → Compensate: ReleaseStock
  → Compensate: RefundPayment
  → Compensate: CancelOrder
```

| Question | Answer |
| --- | --- |
| Why not 2PC? | Locks resources across services, poor availability, doesn't scale |
| Compensating transaction? | Semantic undo — e.g. refund payment instead of deleting payment record |
| Choreography saga risk? | Hard to track overall state — cyclic dependencies possible |
| Orchestration saga risk? | Orchestrator is coupling point — but easier to understand flow |
| Outbox pattern? | Write business data + event to outbox table in same DB transaction — separate process publishes |

**Must-know points:**
- Every saga step must be idempotent — messages can be redelivered
- Design compensating actions for every step that can fail
- Use orchestration for complex workflows; choreography for simple event chains

---

<a id="topic-11"></a>

## 11. Message Brokers and Event-Driven Architecture

### What to Learn

- Message queue vs event stream
- RabbitMQ, Kafka, Azure Service Bus
- Pub/sub pattern
- Topics and subscriptions
- Dead-letter queues
- Message ordering and partitioning
- Exactly-once vs at-least-once delivery

### Broker Comparison

| Broker | Model | Best For |
| --- | --- | --- |
| RabbitMQ | Message queue, AMQP | Task queues, routing, moderate throughput |
| Apache Kafka | Event log / stream | High throughput, event sourcing, replay |
| Azure Service Bus | Enterprise messaging | .NET ecosystems, sessions, transactions |
| Redis Streams | Lightweight stream | Simple pub/sub, caching layer |

### Event-Driven Flow

```text
Producer → Event Bus → Consumer A
                     → Consumer B
                     → Consumer C
```

| Question | Answer |
| --- | --- |
| Queue vs topic? | Queue = one consumer per message; topic = broadcast to all subscribers |
| Kafka partition? | Ordered log segment — messages in partition are ordered |
| Dead-letter queue? | Failed messages after max retries — inspect and reprocess manually |
| At-least-once delivery? | Message may be delivered more than once — handler must be idempotent |
| Event vs command? | Event = past tense fact (`OrderPlaced`); command = request to do something (`PlaceOrder`) |

**Must-know points:**
- Choose Kafka for event streaming and replay; RabbitMQ for task queues and routing
- Always handle poison messages with dead-letter queues
- Use correlation IDs to trace messages across services

---

<a id="topic-12"></a>

## 12. Resilience Patterns

### What to Learn

- Circuit Breaker
- Retry with exponential backoff
- Timeout
- Bulkhead
- Fallback
- Rate limiting
- Polly library in .NET

### Resilience Patterns

| Pattern | Purpose |
| --- | --- |
| Circuit Breaker | Stop calling failing service — fail fast, allow recovery |
| Retry | Retry transient failures with backoff |
| Timeout | Don't wait forever — cancel hung requests |
| Bulkhead | Isolate resources — one service failure doesn't exhaust all threads |
| Fallback | Return cached/default response when service unavailable |
| Rate Limiter | Protect service from overload |

### Circuit Breaker States

```text
Closed (normal) → failures exceed threshold → Open (fail fast)
Open → after timeout → Half-Open (test one request)
Half-Open → success → Closed | failure → Open
```

| Question | Answer |
| --- | --- |
| Circuit breaker vs retry? | Retry helps transient failures; circuit breaker stops calling consistently failing service |
| Exponential backoff? | Wait 1s, 2s, 4s, 8s between retries — prevents thundering herd |
| Bulkhead example? | Separate thread pool per downstream service — one slow service doesn't block all |
| Polly in .NET? | Resilience library — `WaitAndRetry`, `CircuitBreaker`, `Timeout`, `Bulkhead` policies |
| Cascading failure? | One service down causes callers to exhaust resources — resilience patterns prevent this |

**Must-know points:**
- Combine patterns: retry + circuit breaker + timeout
- Set timeouts on every outbound HTTP/gRPC call
- Use Polly with `IHttpClientFactory` in ASP.NET Core

---

<a id="topic-13"></a>

## 13. Observability: Logging, Metrics, and Tracing

### What to Learn

- Three pillars: logs, metrics, traces
- Centralized logging (ELK, Seq, Loki)
- Distributed tracing (OpenTelemetry, Jaeger, Zipkin)
- Correlation IDs
- Health checks
- SLIs, SLOs, and SLAs
- Alerting

### Three Pillars

| Pillar | What | Tool Examples |
| --- | --- | --- |
| Logs | Discrete events with context | Seq, ELK Stack, Splunk |
| Metrics | Numeric measurements over time | Prometheus, Grafana, App Insights |
| Traces | Request flow across services | Jaeger, Zipkin, OpenTelemetry |

### Distributed Tracing

```text
Request ID: abc-123
  → API Gateway (12ms)
    → Order Service (45ms)
      → Payment Service (120ms)
      → Inventory Service (30ms)
```

| Question | Answer |
| --- | --- |
| Correlation ID? | Unique ID passed across all service calls — links logs and traces |
| Structured logging? | JSON logs with fields (timestamp, level, correlationId, service) — queryable |
| SLI vs SLO vs SLA? | SLI = metric; SLO = target (99.9% uptime); SLA = contract with consequences |
| OpenTelemetry? | Vendor-neutral standard for traces, metrics, logs — CNCF project |
| Health vs readiness? | Liveness = is process running; Readiness = can accept traffic (DB connected) |

**Must-know points:**
- Log aggregation is essential — can't debug distributed systems by SSH-ing into servers
- Propagate correlation/trace IDs in HTTP headers across every service call
- Define SLOs per service — alert on SLO burn rate, not every error

---

<a id="topic-14"></a>

## 14. Containerization and Kubernetes

### What to Learn

- Docker fundamentals
- Container images and registries
- Kubernetes architecture
- Deployments, Services, Ingress
- ConfigMaps and Secrets
- Horizontal Pod Autoscaler
- Service mesh (Istio, Linkerd) overview

### Kubernetes Resources

| Resource | Purpose |
| --- | --- |
| Pod | One or more containers — smallest deployable unit |
| Deployment | Manages replica set, rolling updates |
| Service | Stable network endpoint for pods |
| Ingress | HTTP routing into cluster |
| ConfigMap | Non-sensitive configuration |
| Secret | Sensitive configuration (base64 encoded) |

### Microservices on Kubernetes

```text
Ingress Controller
  → Service: api-gateway
  → Service: order-service (3 pods)
  → Service: payment-service (2 pods)
  → Service: product-service (3 pods)
```

| Question | Answer |
| --- | --- |
| Container vs VM? | Container shares host OS kernel — lighter, faster start; VM has full OS isolation |
| Deployment vs StatefulSet? | Deployment = stateless; StatefulSet = stable identity, persistent storage |
| Service mesh? | Infrastructure layer for service-to-service comms — mTLS, retries, observability |
| HPA? | Horizontal Pod Autoscaler — scales pods based on CPU, memory, or custom metrics |
| Rolling update? | Gradually replace old pods with new — zero downtime deployment |
| Liveness vs readiness probe? | Liveness = restart if fails; Readiness = remove from service endpoints |

**Must-know points:**
- One container per service — each microservice gets its own deployment
- Use ConfigMaps/Secrets instead of hardcoding configuration
- Service mesh adds power but complexity — evaluate if needed for your scale

---

<a id="topic-15"></a>

## 15. Security in Microservices

### What to Learn

- Authentication vs authorization
- OAuth 2.0 and OpenID Connect
- JWT tokens
- Service-to-service authentication (mTLS)
- API key management
- Zero Trust in microservices
- Secrets management
- OWASP API Security Top 10

### Security Layers

| Layer | Mechanism |
| --- | --- |
| Edge | API Gateway validates JWT, rate limits |
| Service-to-service | mTLS, service accounts, mutual auth |
| Data | Encryption at rest and in transit |
| Secrets | Vault, Azure Key Vault, K8s Secrets |

| Question | Answer |
| --- | --- |
| Where validate JWT? | API Gateway for external; each service can also validate for defense in depth |
| mTLS? | Both client and server present certificates — mutual authentication |
| Service account? | Identity for service-to-service calls in Kubernetes |
| Principle of least privilege? | Each service only accesses resources it needs |
| Token propagation? | Pass JWT or exchange for service token at each hop |
| OWASP API Top 10? | Broken auth, excessive data exposure, lack of rate limiting, etc. |

**Must-know points:**
- Never trust internal network — authenticate service-to-service calls
- Rotate secrets automatically — use vault, not environment variables in images
- Validate input at every service boundary

---

<a id="topic-16"></a>

## 16. Testing Microservices

### What to Learn

- Testing pyramid for microservices
- Unit tests
- Integration tests
- Contract testing (Pact)
- End-to-end tests
- Component tests
- Test containers
- Chaos engineering

### Testing Pyramid

```text
        ╱ E2E (few) ╲
       ╱ Component   ╲
      ╱ Integration    ╲
     ╱ Unit (many)      ╲
```

| Test Type | Scope | Speed |
| --- | --- | --- |
| Unit | Single class/method | Fast |
| Integration | Service + DB/messaging | Medium |
| Contract | API agreement between consumer/provider | Medium |
| Component | Service in isolation with test doubles | Medium |
| E2E | Full system through API Gateway | Slow |

| Question | Answer |
| --- | --- |
| Contract testing? | Verify consumer and provider agree on API — Pact records interactions |
| Testcontainers? | Spin up real DB/broker in Docker for integration tests |
| Why few E2E tests? | Slow, flaky, hard to debug — cover critical user journeys only |
| Consumer-driven contracts? | Consumer defines expected API — provider verifies against contract |
| Chaos engineering? | Intentionally inject failures (kill pods, latency) to test resilience |

**Must-know points:**
- Each service should have its own CI pipeline with unit + integration tests
- Use Pact for contract testing between services — catch breaking API changes early
- Testcontainers give realistic integration tests without shared test environments

---

<a id="topic-17"></a>

## 17. CI/CD and Deployment Strategies

### What to Learn

- CI/CD per microservice
- Independent deployment pipelines
- Blue-green deployment
- Canary releases
- Rolling updates
- Feature flags
- Database migration strategies
- GitOps

### Deployment Strategies

| Strategy | Description | Risk |
| --- | --- | --- |
| Rolling update | Gradually replace instances | Low — automatic rollback possible |
| Blue-green | Two environments, switch traffic | Low — instant rollback |
| Canary | Route small % traffic to new version | Lowest — test with real users |
| Recreate | Stop all, deploy new | High downtime — dev/test only |

### Independent Deployment

```text
Order Service     → Pipeline A → Deploy independently
Payment Service   → Pipeline B → Deploy independently
Product Service   → Pipeline C → Deploy independently
```

| Question | Answer |
| --- | --- |
| Monorepo vs multirepo? | Monorepo = one repo, multiple services; multirepo = one repo per service |
| Backward compatible changes? | Add fields, don't remove — old and new versions coexist during rollout |
| Database migration? | Expand-contract pattern — add column, migrate data, remove old column |
| Feature flags? | Toggle features without deployment — decouple release from deploy |
| GitOps? | Git as source of truth — ArgoCD/Flux auto-sync cluster to repo state |

**Must-know points:**
- Each microservice should deploy independently without coordinating with other teams
- Use canary deployments for high-risk changes
- Automate rollback — health checks should trigger automatic revert

---

<a id="topic-18"></a>

## 18. Anti-Patterns and When Not to Use Microservices

### What to Learn

- Distributed monolith
- Nano services
- Shared database
- Chatty services
- No API versioning
- Premature decomposition
- Over-engineering

### Common Anti-Patterns

| Anti-Pattern | Problem |
| --- | --- |
| Distributed monolith | Microservices deployed together, tightly coupled — worst of both worlds |
| Nano services | Too granular — network overhead exceeds benefit |
| Shared database | Services coupled through schema — can't deploy independently |
| Chatty services | Too many network calls per request — high latency |
| Smart endpoints, dumb pipes violation | Business logic in ESB/gateway instead of services |
| No idempotency | Duplicate messages cause data corruption |

### When NOT to Use Microservices

| Situation | Better Choice |
| --- | --- |
| Small team (< 5 developers) | Modular monolith |
| Unclear domain boundaries | Monolith until boundaries emerge |
| Simple CRUD app | Monolith or serverless |
| No DevOps maturity | Monolith — fix ops first |
| Low scale requirements | Monolith is simpler and cheaper |

| Question | Answer |
| --- | --- |
| Distributed monolith signs? | Must deploy multiple services together, shared DB, synchronous chains |
| How to detect chatty services? | High latency, many inter-service calls per user request — use tracing |
| Nano service? | Service with single endpoint — overhead of network > benefit of separation |
| Reverse to monolith? | Valid strategy — some companies merge services back when boundaries were wrong |
| Success criteria? | Teams deploy independently, services scale independently, failures are isolated |

**Must-know points:**
- Microservices solve organizational and scaling problems — not technical elegance
- Start simple, extract services when you feel the pain of the monolith
- Operational cost of N services is real — monitoring, deployment, debugging all multiply

---

<a id="suggested-learning-order"></a>

## Suggested Learning Order

1. Microservices fundamentals
2. Monolith vs microservices trade-offs
3. Domain-Driven Design and bounded contexts
4. Service communication (sync vs async)
5. REST and gRPC
6. API Gateway
7. Service discovery and load balancing
8. Database per service
9. CQRS and event sourcing
10. Saga pattern
11. Message brokers and event-driven architecture
12. Resilience patterns (circuit breaker, retry)
13. Observability (logging, tracing, metrics)
14. Containers and Kubernetes
15. Security
16. Testing strategies
17. CI/CD and deployment
18. Anti-patterns and decision framework

---

<a id="weekly-study-plan"></a>

## Weekly Study Plan

### Week 1: Foundations

- Microservices characteristics
- Monolith vs microservices
- Bounded contexts and DDD basics
- Decomposition strategies
- Strangler fig pattern

### Week 2: Communication and APIs

- Sync vs async communication
- REST API design and versioning
- gRPC fundamentals
- API Gateway pattern
- Service discovery

### Week 3: Data and Transactions

- Database per service
- Eventual consistency
- CQRS basics
- Saga pattern (orchestration and choreography)
- Outbox pattern

### Week 4: Messaging and Resilience

- RabbitMQ / Kafka / Service Bus
- Event-driven architecture
- Circuit breaker, retry, timeout
- Bulkhead and fallback
- Polly in .NET

### Week 5: Operations and Production

- Distributed tracing and logging
- Kubernetes deployments
- Security (JWT, mTLS)
- Contract testing with Pact
- CI/CD and canary deployments
- Anti-patterns review

---

<a id="practical-project-preparation"></a>

## Practical Project Preparation

### What to Build

- E-commerce system with 3–4 microservices (Order, Product, Payment, Notification)
- API Gateway with Ocelot or YARP
- Async communication via RabbitMQ or Azure Service Bus
- Saga for order placement workflow
- Circuit breaker with Polly on HTTP clients
- Centralized logging with Seq or ELK
- Distributed tracing with OpenTelemetry
- Docker Compose or Kubernetes deployment
- Contract tests between services
- CI/CD pipeline per service

---

<a id="final-preparation-checklist"></a>

## Final Preparation Checklist

- Can explain what microservices are and their key characteristics.
- Can compare monolith vs microservices with trade-offs.
- Can explain bounded contexts and how to decompose a system.
- Can describe sync vs async communication and when to use each.
- Can compare REST vs gRPC.
- Can explain API Gateway and BFF patterns.
- Can describe database per service and eventual consistency.
- Can explain CQRS and event sourcing basics.
- Can describe saga pattern with compensating transactions.
- Can compare message brokers (RabbitMQ vs Kafka).
- Can explain circuit breaker, retry, timeout, and bulkhead.
- Can describe distributed tracing and correlation IDs.
- Can explain container deployment on Kubernetes.
- Can describe security patterns (JWT, mTLS, service accounts).
- Can explain contract testing and testing pyramid.
- Can describe blue-green, canary, and rolling deployments.
- Can identify anti-patterns and when NOT to use microservices.
