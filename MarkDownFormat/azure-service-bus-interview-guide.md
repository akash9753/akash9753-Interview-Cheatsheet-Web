# Azure Service Bus — Revision Notes

## Goal

Quick revision for **Azure Service Bus** — what it is, concepts, queue workflow, connection strings, example, and advantages. Simple explanations for interview prep.

---

## Topic Index

<ul>
  <li><a href="#what">What is Azure Service Bus?</a></li>
  <li><a href="#concepts">Concepts — Namespace, Queue, Topic & Subscription</a></li>
  <li><a href="#queue-workflow">Queue Workflow — Create, Send, Receive</a></li>
  <li><a href="#connection-strings">Connection Strings</a></li>
  <li><a href="#sdk">Azure Service Bus SDK (C#)</a></li>
  <li><a href="#example">Example — User Registration & Email</a></li>
  <li><a href="#advantages">Advantages</a></li>
</ul>

---

<a id="what"></a>

## What is Azure Service Bus?

**Azure Service Bus** is a **message broker** on Azure.

| Keyword | Meaning |
| --- | --- |
| **Message broker** | Middle layer that holds and routes messages between services |
| **Reliable** | Messages are stored safely until a consumer processes them |
| **Async communication** | Sender does not wait for receiver — fire message and continue |

Services talk through the bus instead of calling each other directly over HTTP.

> **One-liner:** Service Bus = reliable message broker for asynchronous communication between services.

---

<a id="concepts"></a>

## Concepts — Namespace, Queue, Topic & Subscription

### Namespace

A **namespace** is a **container** for Service Bus entities.

It can hold:
- Queues  
- Topics  
- Subscriptions  
- etc.

```text
Namespace (container)
   ├── Queue-1
   ├── Queue-2
   ├── Topic-1
   │     ├── Subscription-1
   │     └── Subscription-2
   └── ...
```

> **One-liner:** Namespace = container that holds queues, topics, and subscriptions.

---

### Queue (point-to-point)

**One sender → one queue → one receiver** (competing consumers pick one message each).

```text
Sender / Publisher / Service 1
        │
        │  sends msg
        ▼
      Queue
        │
        │  receive msg
        ▼
Receiver / Subscriber / Service 2
```

| Role | Also called |
| --- | --- |
| Sender | Publisher, Service 1 |
| Queue | Message buffer |
| Receiver | Subscriber, Service 2 |

> **One-liner:** Queue = point-to-point — one message consumed by one worker.

---

### Topic & Subscription (publish/subscribe)

**One sender → topic → many subscriptions → many receivers**

```text
Sender
  │
  │  msg
  ▼
Topic
  ├── Subscription 1  ──► Receiver 1
  ├── Subscription 2  ──► Receiver 2
  └── Subscription 10 ──► Receiver 10
```

| Pattern | Use |
| --- | --- |
| **Queue** | One consumer per message (work distribution) |
| **Topic + Subscription** | Broadcast / fan-out to many subscribers |

> **One-liner:** Topic = publish once; each subscription gets a copy for its receiver.

---

<a id="queue-workflow"></a>

## Queue Workflow — Create, Send, Receive

Typical hands-on steps:

1. **Create namespace** — container for your queues/topics  
2. **Create a queue** inside the namespace  
3. **Send message** to the queue (publisher / sender)  
4. **Receive message** from the queue (subscriber / receiver)  

```text
Step 1: Namespace
Step 2: Queue (inside namespace)
Step 3: Producer sends msg ──► Queue
Step 4: Consumer receives msg ◄── Queue
```

> **One-liner:** Namespace → queue → send → receive.

---

<a id="connection-strings"></a>

## Connection Strings

To connect from .NET / apps you need a **connection string**.

### Queue connection string vs namespace connection string

| Type | Scope |
| --- | --- |
| **Namespace connection string** | Access to the whole namespace (all queues/topics in that namespace) |
| **Queue connection string** | Scoped to one specific queue |

**Remember:** **Namespace = container** which contains queues & topics.

```text
Namespace connection string
   └── can access Queue-A, Queue-B, Topic-X, etc.

Queue connection string
   └── scoped to one queue only
```

In production prefer **Managed Identity + RBAC** over long-lived connection strings when possible.

> **One-liner:** Namespace string = whole container; queue string = one queue only.

---

<a id="sdk"></a>

## Azure Service Bus SDK (C#)

Package: `Azure.Messaging.ServiceBus`

Four main types to remember:

| Class | Purpose |
| --- | --- |
| **ServiceBusClient** | Connects your C# code to Azure Service Bus |
| **ServiceBusSender** | Sends messages |
| **ServiceBusReceiver** | Receives messages |
| **ServiceBusProcessor** | Receives messages with built-in extras (like Receiver + automation) |

---

### 1. ServiceBusClient

- Entry point — connects C# app to Service Bus  
- Needs **connection string** (namespace or entity-scoped)  

```csharp
await using var client = new ServiceBusClient(connectionString);
```

> **One-liner:** ServiceBusClient = connection to Service Bus using connection string.

---

### 2. ServiceBusSender

- Used to **send** messages  
- Created from `ServiceBusClient`  
- Needs **queue name** OR **topic name**  

```csharp
ServiceBusSender sender = client.CreateSender("orders-queue");

var message = new ServiceBusMessage("Hello");
await sender.SendMessageAsync(message);
```

> **One-liner:** ServiceBusSender = send to a specific queue or topic.

---

### 3. ServiceBusReceiver

- Used to **receive** messages  
- Created from `ServiceBusClient`  
- Needs:
  - **Queue name** — for queue  
  - **OR Topic name + Subscription name** — for pub/sub  

```csharp
// from queue
ServiceBusReceiver receiver = client.CreateReceiver("orders-queue");

// from topic subscription
ServiceBusReceiver subReceiver = client.CreateReceiver("orders-topic", "email-subscription");

ServiceBusReceivedMessage msg = await receiver.ReceiveMessageAsync();
```

> **One-liner:** ServiceBusReceiver = pull messages from queue or topic+subscription.

---

### 4. ServiceBusProcessor

- Works like **ServiceBusReceiver** but with **extra built-in features**:
  - Automatic message pumping (background loop)  
  - Concurrency handling  
  - Error handling callbacks  

```csharp
ServiceBusProcessor processor = client.CreateProcessor("orders-queue");

processor.ProcessMessageAsync += async args =>
{
    string body = args.Message.Body.ToString();
    await args.CompleteMessageAsync(args.Message);
};

await processor.StartProcessingAsync();
```

| Receiver | Processor |
| --- | --- |
| You call `ReceiveMessageAsync()` manually | Runs continuously in background |
| More control | Easier for long-running workers |

> **One-liner:** ServiceBusProcessor = automated receiver with concurrency and error hooks.

---

### SDK flow summary

```text
ServiceBusClient (connection string)
    ├── CreateSender("queue-or-topic")     → send messages
    ├── CreateReceiver("queue")            → receive (manual)
    ├── CreateReceiver("topic", "sub")     → receive from subscription
    └── CreateProcessor("queue")           → receive (automatic)
```

---

<a id="example"></a>

## Example — User Registration & Email

```text
Service 1: User Registration Service
        │
        │  msg (user registered)
        ▼
Azure Service Bus (Queue)
        │
        │  msg picked
        ▼
Service 2: Email Sender Service
        └── sends welcome email
```

### Flow

1. **User Registration Service** saves the user and sends a **message** to Service Bus  
2. **Azure Service Bus** stores the message in a queue  
3. **Email Sender Service** picks the message and sends the welcome email  

Registration does **not** wait for email to finish — that is the async benefit.

> **One-liner:** Register user → message to queue → email service picks it up later.

---

<a id="advantages"></a>

## Advantages

### 1. Decoupled services

| Without Service Bus | With Service Bus |
| --- | --- |
| User Reg must know Email service URL | User Reg only sends to bus |
| If Email service is down, registration may fail | Message waits in bus until Email service is back |
| Tight coupling | Loose coupling |

### 2. Load balancing

- Multiple **Email Sender** instances read from the same queue  
- Each message goes to **one** consumer  
- Traffic spreads across workers automatically  

> **One-liner:** Decoupled = services independent; load balancing = many workers share the queue.

---

## 30-second revision

1. Service Bus = reliable message broker + async communication  
2. **Namespace** = container; **Queue** = point-to-point; **Topic** = pub/sub with subscriptions  
3. Workflow: create namespace → create queue → send msg → receive msg  
4. Connection string: namespace (whole container) vs queue (one queue)  
5. SDK: Client → Sender / Receiver / Processor  
6. User Reg → queue → Email Sender; advantages = decoupled + load balancing
