# Azure Service Bus — Revision Notes

## Goal

Quick revision for **Azure Service Bus** — what it is, a simple example, and advantages. Written in simple terms for interview prep.

---

## Topic Index

<ul>
  <li><a href="#what">What is Azure Service Bus?</a></li>
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

<a id="example"></a>

## Example — User Registration & Email

```text
Service 1: User Registration Service
        │
        │  msg (user registered)
        ▼
Azure Service Bus
        │
        │  msg picked
        ▼
Service 2: Email Sender Service
        └── sends welcome email
```

### Flow

1. **User Registration Service** saves the user and sends a **message** to Service Bus  
2. **Azure Service Bus** stores the message in a queue/topic  
3. **Email Sender Service** picks the message and sends the welcome email  

Registration does **not** wait for email to finish — that is the async benefit.

| Service | Job |
| --- | --- |
| User Reg service | Register user → publish message |
| Azure Service Bus | Buffer / deliver message |
| Email Sender service | Consume message → send email |

> **One-liner:** Register user → message to bus → email service picks it up later.

---

<a id="advantages"></a>

## Advantages

### 1. Decoupled services

| Without Service Bus | With Service Bus |
| --- | --- |
| User Reg must know Email service URL | User Reg only sends to bus |
| If Email service is down, registration may fail | Message waits in bus until Email service is back |
| Tight coupling | Loose coupling |

Services do not need direct references to each other.

### 2. Load balancing

- Multiple **Email Sender** instances can read from the same queue  
- Each message goes to **one** consumer (competing consumers)  
- High registration traffic is spread across workers automatically  

```text
Service Bus Queue
   ├── Email Worker 1  ← picks msg
   ├── Email Worker 2  ← picks msg
   └── Email Worker 3  ← picks msg
```

> **One-liner:** Decoupled = services independent; load balancing = many workers share the queue.

---

## 30-second revision

1. Service Bus = reliable message broker + async communication  
2. User Reg → msg → Service Bus → msg picked → Email Sender  
3. Advantages: **decoupled services** and **load balancing**
