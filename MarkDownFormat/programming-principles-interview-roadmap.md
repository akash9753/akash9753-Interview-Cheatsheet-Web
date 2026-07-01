<h1 style="color:#2563eb;">Programming Principles Learning Roadmap for Interview Preparation</h1>

## 1. SOLID Principles

```text
SOLID Principles
│
├── S → Single Responsibility Principle
│      ├── A class should have only one responsibility.
│      └── Example:
│          ├── EmployeeService → Business Logic
│          └── EmployeeRepository → Database Logic
│
├── O → Open/Closed Principle
│      ├── Code should be open for extension but closed for modification.
│      └── Example:
│          └── Extension Methods in C#
│
├── L → Liskov Substitution Principle
│      ├── Child classes should replace parent classes without breaking behavior.
│      └── Example:
│          └── Bird bird = new Sparrow();
│
├── I → Interface Segregation Principle
│      ├── Clients should not depend on unused interfaces.
│      └── Example:
│          ├── IPrinter
│          ├── IScanner
│          └── Instead of one big IMachine interface
│
└── D → Dependency Inversion Principle
       ├── Depend on abstractions, not concrete implementations.
       └── Example:
           ├── PaymentService depends on IPaymentGateway
           └── Not directly on RazorPay class

       └── IoC → Inversion of Control
            ├── IoC is a way to implement DIP.
            ├── Framework controls object creation and dependency flow.
            └── Example:
                └── ASP.NET Core creates controller objects automatically.

            └── Dependency Injection
                 ├── Dependencies are provided externally instead of creating manually.
                 └── Example:
                     └── services.AddScoped<IService, Service>();

                 ├── Constructor Injection
                 │      ├── Dependencies injected through constructor.
                 │      └── Example:
                 │          └── public HomeController(IService service)
                 │
                 ├── Property Injection
                 │      ├── Dependencies injected through properties.
                 │      └── Example:
                 │          └── public IService Service { get; set; }
                 │
                 ├── Method Injection
                 │      ├── Dependencies injected through methods.
                 │      └── Example:
                 │          └── void Process(IService service)
                 │
                 └── Service Lifetimes
                        ├── AddTransient
                        │      ├── Creates new instance every time.
                        │      └── Example:
                        │          └── Random number generator service
                        │
                        ├── AddScoped
                        │      ├── One instance per HTTP request.
                        │      └── Example:
                        │          └── DbContext in ASP.NET Core
                        │
                        └── AddSingleton
                               ├── Single instance for whole application.
                               └── Example:
                                   └── Logging service / Configuration service
```

### SOLID Summary

### SOLID — Bad vs Good (.NET)

| Principle | Violation (bad) | Fix (good) |
| --- | --- | --- |
| SRP | `EmployeeService` saves to DB, sends email, generates PDF | Split into `EmployeeService`, `EmployeeRepository`, `EmailService` |
| OCP | `if (type == "RazorPay")` in payment method | `IPaymentGateway` + strategy — add new gateway without editing existing code |
| LSP | `Square : Rectangle` breaks `SetWidth`/`SetHeight` contract | Subtypes must honor parent behavior — don't weaken preconditions |
| ISP | Fat `IMachine` with `Print`, `Scan`, `Fax` — client uses only `Print` | `IPrinter`, `IScanner` — small focused interfaces |
| DIP | `OrderService` does `new SqlRepository()` | Depend on `IOrderRepository` — inject via constructor |

| Principle | Full Form | Meaning | Example |
| --- | --- | --- | --- |
| S | Single Responsibility Principle | A class should have only one responsibility | `EmployeeService` for business logic, `EmployeeRepository` for database logic |
| O | Open/Closed Principle | Code should be open for extension but closed for modification | Extension methods in C# |
| L | Liskov Substitution Principle | Child classes should replace parent classes without breaking behavior | `Bird bird = new Sparrow();` |
| I | Interface Segregation Principle | Clients should not depend on unused interfaces | `IPrinter`, `IScanner` instead of one big `IMachine` |
| D | Dependency Inversion Principle | Depend on abstractions, not concrete implementations | `PaymentService` depends on `IPaymentGateway` |

### IoC vs DI

| Concept | Type | Meaning |
| --- | --- | --- |
| IoC | Principle / Concept | Transfers object creation and control to framework/container |
| DI | Design Pattern | Implements IoC by injecting dependencies from outside |

### IoC Container Responsibilities

1. Creates objects.
2. Injects dependencies.
3. Manages object lifetime.
4. Resolves dependencies automatically.

### DI Injection Types

| Type | How | Pros | Cons |
| --- | --- | --- | --- |
| Constructor | Via ctor parameters | Required deps clear, testable | Many deps = large ctor |
| Property | `public IService Svc { get; set; }` | Optional / late binding | Easy to forget injection |
| Method | Passed into method | Per-call dependency | Not for core deps |

### Service Lifetimes (ASP.NET Core)

| Lifetime | Registration | Instance scope | Example |
| --- | --- | --- | --- |
| Transient | `AddTransient` | New every resolve | Lightweight stateless helpers |
| Scoped | `AddScoped` | One per HTTP request | `DbContext`, unit-of-work |
| Singleton | `AddSingleton` | One for app lifetime | Config, logging, caches |

| Question | Answer |
| --- | --- |
| SRP in one line? | One class, one reason to change |
| OCP in one line? | Extend via new types/interfaces, don't modify existing working code |
| LSP classic trap? | `Square : Rectangle` — substituting breaks area logic |
| DIP vs DI? | DIP = principle (depend on abstractions); DI = pattern implementing it |
| IoC vs DI? | IoC = who creates objects (container); DI = how dependencies arrive (injection) |
| Scoped vs Singleton for DbContext? | **Scoped** — DbContext is not thread-safe; never Singleton |

**Must-know points:**
- SOLID is about maintainability and testability — tie each letter to a real refactor story
- Constructor injection is the default in ASP.NET Core
- `DbContext` = Scoped; logging/config = Singleton; avoid captive dependencies (Singleton holding Scoped)

---

## 2. Design Patterns

### Top 5 Patterns for .NET Interviews

| Pattern | Category | When to use | .NET example |
| --- | --- | --- | --- |
| Singleton | Creational | One shared instance | Logger, config holder |
| Factory | Creational | Hide concrete type creation | `PaymentGatewayFactory` |
| Repository | Structural-ish | Abstract data access | `IRepository<T>` over EF |
| Strategy | Behavioral | Swap algorithms at runtime | Payment methods, pricing rules |
| Decorator | Structural | Add behavior without subclassing | `LoggingDecorator` around service |

### Decorator vs Inheritance

| Aspect | Inheritance | Decorator |
| --- | --- | --- |
| Extension | Compile-time subclass | Runtime wrap |
| Flexibility | Fixed hierarchy | Stack multiple decorators |
| Open/Closed | Often violates OCP | Aligns with OCP |
| Example | `LoggedService : Service` | `new LoggingDecorator(new Service())` |

```text
Design Patterns
│
├── Creational Patterns → Deal with object creation.
│
│   ├── Singleton
│   │      ├── Ensures only one object instance exists.
│   │      └── Example:
│   │          └── Logger class
│   │
│   ├── Factory
│   │      ├── Creates objects without exposing creation logic.
│   │      └── Example:
│   │          └── PaymentGatewayFactory
│   │
│   ├── Abstract Factory
│   │      ├── Creates related object families.
│   │      └── Example:
│   │          └── UIFactory for Windows and Mac UI controls
│   │
│   ├── Builder
│   │      ├── Builds complex objects step by step.
│   │      └── Example:
│   │          └── PizzaBuilder / ReportBuilder
│   │
│   └── Prototype
│          ├── Creates objects by cloning existing objects.
│          └── Example:
│              └── MemberwiseClone()
│
├── Structural Patterns → Deal with class and object composition.
│
│   ├── Adapter
│   │      ├── Converts one interface into another compatible interface.
│   │      └── Example:
│   │          └── Power adapter
│   │
│   ├── Decorator
│   │      ├── Adds behavior dynamically without modifying class.
│   │      └── Example:
│   │          └── LoggingDecorator around service
│   │
│   ├── Facade
│   │      ├── Provides simplified interface to complex system.
│   │      └── Example:
│   │          └── HomeTheaterFacade
│   │
│   ├── Composite
│   │      ├── Treats group of objects as single object.
│   │      └── Example:
│   │          └── Folder containing files/folders
│   │
│   ├── Proxy
│   │      ├── Controls access to another object.
│   │      └── Example:
│   │          └── Lazy loading in EF Core
│   │
│   └── Bridge
│          ├── Separates abstraction from implementation.
│          └── Example:
│              └── RemoteControl and TV
│
└── Behavioral Patterns → Deal with communication between objects.
    │
    ├── Strategy
    │      ├── Encapsulates interchangeable algorithms.
    │      └── Example:
    │          └── Different payment methods
    │
    ├── Observer
    │      ├── Notifies dependent objects automatically on state change.
    │      └── Example:
    │          └── YouTube subscribers notification
    │
    ├── Command
    │      ├── Encapsulates request as an object.
    │      └── Example:
    │          └── Remote control button commands
    │
    ├── Iterator
    │      ├── Sequentially accesses collection elements.
    │      └── Example:
    │          └── foreach loop
    │
    ├── Mediator
    │      ├── Centralizes communication between objects.
    │      └── Example:
    │          └── Chat room mediator
    │
    ├── State
    │      ├── Changes behavior based on object state.
    │      └── Example:
    │          └── ATM machine states
    │
    └── Chain of Responsibility
           ├── Passes request through chain of handlers.
           └── Example:
               └── ASP.NET Core Middleware Pipeline
```

### Creational Patterns

| Pattern | Meaning | Example |
| --- | --- | --- |
| Singleton | Ensures only one object instance exists | Logger class |
| Factory | Creates objects without exposing creation logic | `PaymentGatewayFactory` |
| Abstract Factory | Creates related object families | UI factory for Windows and Mac controls |
| Builder | Builds complex objects step by step | `PizzaBuilder`, `ReportBuilder` |
| Prototype | Creates objects by cloning existing objects | `MemberwiseClone()` |

### Structural Patterns

| Pattern | Meaning | Example |
| --- | --- | --- |
| Adapter | Converts one interface into another compatible interface | Power adapter |
| Decorator | Adds behavior dynamically without modifying class | `LoggingDecorator` around service |
| Facade | Provides simplified interface to complex system | `HomeTheaterFacade` |
| Composite | Treats group of objects as single object | Folder containing files/folders |
| Proxy | Controls access to another object | Lazy loading in EF Core |
| Bridge | Separates abstraction from implementation | `RemoteControl` and `TV` |

### Behavioral Patterns

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
| Singleton thread safety? | Use `Lazy<T>` or lock — interview follow-up for double-checked locking |
| Factory vs Abstract Factory? | Factory = one product; Abstract Factory = families of related products (UI themes) |
| Strategy vs State? | Strategy = client picks algorithm; State = object changes behavior by internal state |
| Observer in .NET? | Events, `IObservable<T>`, MediatR notifications |
| Repository pattern? | Abstraction over data access — not a GoF pattern but very common in .NET interviews |
| Middleware = which pattern? | Chain of Responsibility |

**Must-know points:**
- **Creational** = how objects are born; **Structural** = how they're composed; **Behavioral** = how they communicate
- EF Core lazy loading uses **Proxy** pattern
- MediatR handlers often implement **Command** pattern

---

## 3. Architectural Patterns

### Layered vs Clean Architecture

| Layer (traditional) | Clean Architecture ring | Responsibility |
| --- | --- | --- |
| UI / API | Presentation | Controllers, DTOs, HTTP |
| Business / Service | Application | Use cases, commands, queries |
| Domain | Domain | Entities, value objects, rules |
| Data / Infrastructure | Infrastructure | EF, files, external APIs |

**Dependency rule (Clean):** inner layers never reference outer layers — Domain has zero framework references.

### CQRS Flow

| Step | Command side | Query side |
| --- | --- | --- |
| Input | `CreateOrderCommand` | `GetOrderByIdQuery` |
| Handler | Validates, writes to DB | Reads optimized model / projection |
| Model | Write entity / aggregate | Read DTO / view model |
| Storage | Same DB or separate write DB | Read replica / materialized view |

### Microservices Communication

| Style | Mechanism | Pros | Cons |
| --- | --- | --- | --- |
| Sync | HTTP/gRPC REST call | Simple, immediate response | Tight coupling, cascading failures |
| Async | Message queue (RabbitMQ, Kafka) | Loose coupling, resilience | Eventual consistency, complexity |

### Distributed Transaction Patterns

| Pattern | Purpose | How |
| --- | --- | --- |
| Saga | Multi-service transaction | Choreography (events) or orchestration (coordinator) |
| Outbox | Reliable publish | Write event to outbox table in same DB transaction as business data |
| Inbox | Reliable consume | Store message ID — process once, idempotent handler |

### SOA vs Microservices

| Aspect | SOA | Microservices |
| --- | --- | --- |
| Granularity | Larger services | Small, bounded-context services |
| Communication | Often ESB, SOAP/XML | REST, gRPC, events |
| Deployment | Shared infrastructure common | Independent deploy per service |
| Data | Shared DB possible | Database per service (ideal) |

```text
Architectural Patterns → High-level application structure design patterns.
│
├── MVC
│      ├── Separates application into Model, View, and Controller.
│      └── Example:
│          └── ASP.NET Core MVC application
│
├── Layered Architecture
│      ├── Organizes code into layers like UI, Business, and Data.
│      └── Example:
│          └── UI Layer → Service Layer → Repository Layer
│
├── Clean Architecture
│      ├── Separates business logic from frameworks and infrastructure.
│      └── Example:
│          └── Domain, Application, Infrastructure, API projects
│
├── Microservices
│      ├── Breaks application into small independent services.
│      └── Example:
│          └── Payment Service, User Service, Order Service
│
├── Event-Driven Architecture
│      ├── Components communicate using events/messages.
│      └── Example:
│          └── RabbitMQ / Kafka event processing
│
└── CQRS → Command Query Responsibility Segregation
       ├── Separates read and write operations into different models.
       └── Example:
           └── MediatR in ASP.NET Core

       ├── Command
       │      ├── Handles create/update/delete operations.
       │      └── Example:
       │          └── CreateOrderCommand
       │
       └── Query
              ├── Handles read/fetch operations.
              └── Example:
                  └── GetOrderByIdQuery
```

### Architectural Pattern Summary

| Pattern | Meaning | Example |
| --- | --- | --- |
| MVC | Separates application into Model, View, and Controller | ASP.NET Core MVC application |
| Layered Architecture | Organizes code into layers like UI, Business, and Data | UI Layer → Service Layer → Repository Layer |
| Clean Architecture | Separates business logic from frameworks and infrastructure | Domain, Application, Infrastructure, API projects |
| Microservices | Breaks application into small independent services | Payment Service, User Service, Order Service |
| Event-Driven Architecture | Components communicate using events/messages | RabbitMQ / Kafka event processing |
| CQRS | Separates read and write operations into different models | MediatR in ASP.NET Core |

### CQRS

| Part | Meaning | Example |
| --- | --- | --- |
| Command | Handles create, update, delete operations | `CreateOrderCommand` |
| Query | Handles read/fetch operations | `GetOrderByIdQuery` |

| Question | Answer |
| --- | --- |
| MVC vs Layered? | MVC is presentation pattern; layered is full-stack separation (UI → BLL → DAL) |
| When CQRS? | High read/write asymmetry, complex domains, separate scaling of reads |
| CQRS always two databases? | No — can start with one DB; separate read models as optimization |
| Microservices vs monolith? | Monolith first for small teams; microservices for independent scale/deploy boundaries |
| Saga vs 2PC? | 2PC (two-phase commit) rare in microservices; Saga uses compensating transactions |
| Outbox pattern why? | Avoid "DB saved but message not published" — atomic write + outbox poll |
| Clean Architecture core idea? | Business rules at center; frameworks are plugins on the outside |

**Must-know points:**
- **Event-driven** decouples producers/consumers — good for audit, integrations, async workflows
- MediatR in ASP.NET Core is a popular CQRS/command dispatcher
- Microservices trade operational complexity for team autonomy and independent deployment

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### What are SOLID Principles?

| Letter | Principle | One-Line Rule |
| --- | --- | --- |
| S | Single Responsibility | One class, one reason to change |
| O | Open/Closed | Open for extension, closed for modification |
| L | Liskov Substitution | Subtypes must replace base types safely |
| I | Interface Segregation | No fat interfaces — split by client need |
| D | Dependency Inversion | Depend on abstractions, not concretions |

> **One-liner:** SOLID keeps code maintainable, testable, and easy to extend without breaking existing behavior.

### SOLID — Examples

| Principle | Bad | Good |
| --- | --- | --- |
| SRP | `OrderService` saves DB + sends email + prints PDF | `OrderService`, `OrderRepository`, `EmailService` |
| OCP | `if (type == "Credit")` in payment method | `IPaymentProcessor` + strategy classes |
| LSP | `Square` breaks `Rectangle.SetWidth` | Design shapes so substitutability holds |
| ISP | `IMachine` with `Print`, `Scan`, `Fax` for all | `IPrinter`, `IScanner` separately |
| DIP | `new SqlOrderRepository()` inside service | Inject `IOrderRepository` via constructor |

> **One-liner:** Each principle fixes a specific design smell — tie answers to a real refactor story.

### Factory Pattern

| Aspect | Detail |
| --- | --- |
| Type | Creational |
| Purpose | Centralize object creation — caller uses interface |
| Hide | Concrete class selection logic |
| Example | `IPaymentGateway gateway = PaymentFactory.Create("Stripe")` |

> **One-liner:** Factory encapsulates `new` — callers ask for a product type, not a concrete class.

### Repository Pattern

| Aspect | Detail |
| --- | --- |
| Purpose | Abstract data access behind an interface |
| Benefit | Business layer independent of EF/SQL |
| Common API | `GetById`, `Add`, `Update`, `Delete`, `GetAll` |
| Example | `IRepository<Order>` implemented by `OrderRepository` using `DbContext` |

> **One-liner:** Repository hides persistence details so services depend on `IRepository`, not `DbContext`.

### Which Design Patterns Have You Used?

| Pattern | Where Used | Why |
| --- | --- | --- |
| Repository | Data layer | Decouple EF from business logic |
| Factory | Payment / notification creation | Switch providers without `if/else` chains |
| Singleton | Config / logging (careful) | Single shared instance |
| Strategy | Discount / tax calculation | Swap algorithms at runtime |
| Dependency Injection | ASP.NET Core built-in | Implements DIP across the app |

> **One-liner:** Name patterns you actually used in production and explain the problem each solved.

### Monolithic vs Microservices Architecture

| Point | Monolith | Microservices |
| --- | --- | --- |
| Deployment | Single unit | Independent per service |
| Scaling | Scale entire app | Scale individual services |
| Complexity | Simpler ops | Distributed system challenges |
| Best for | Small teams, early products | Clear boundaries, multiple teams |

> **One-liner:** Start monolith until boundaries are clear — extract microservices when independent scale/deploy pays off.

### Explain MVC Architecture

| Layer | Role | ASP.NET Core Example |
| --- | --- | --- |
| Model | Data + business rules | Entity, ViewModel, service |
| View | UI presentation | `.cshtml` Razor views |
| Controller | Handles request, returns view/JSON | `HomeController` |

> **One-liner:** MVC separates UI, logic, and data — controller orchestrates, view renders, model holds state.
