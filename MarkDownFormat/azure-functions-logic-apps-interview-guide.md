# Azure Functions — Revision Notes

## Goal

Quick revision for **Azure Functions** basics — what a Function is, what a Function App is, and why you use them. Written in simple terms for interview prep.

---

## Topic Index

<ul>
  <li><a href="#azure-function">Azure Function</a></li>
  <li><a href="#azure-function-app">Azure Function App</a></li>
  <li><a href="#advantages">Why — Advantages of Azure Functions</a></li>
</ul>

---

<a id="azure-function"></a>

## Azure Function

An **Azure Function** is a single piece of **serverless code** that runs when something happens (a **trigger**).

Examples:
- HTTP request hits your API  
- A message arrives in a queue  
- A timer fires every night  
- A file is uploaded to Blob Storage  

You write only the logic you need — Azure runs it without you managing a server.

> **One-liner:** Azure Function = one small event-driven code block that runs on a trigger.

---

<a id="azure-function-app"></a>

## Azure Function App

An **Azure Function App** is the **container / hosting unit** that holds one or more Azure Functions.

Think of it like this:

| Term | Analogy |
| --- | --- |
| **Function App** | The project / app that hosts your functions |
| **Function** | One method inside that project |

All functions in the same Function App share:
- App settings and connection strings  
- Hosting plan (Consumption, Premium, etc.)  
- Runtime (.NET, Node, Python, etc.)  
- Storage account (required for the runtime)

> **One-liner:** Function App = the host; Function = the individual piece of code inside it.

---

<a id="advantages"></a>

## Why — Advantages of Azure Functions

| Advantage | Simple explanation |
| --- | --- |
| **No server management** | Azure handles infrastructure — you focus on code |
| **Pay for what you use** | On Consumption plan, you pay mainly when code runs (not for idle servers) |
| **Auto scale** | More requests → Azure spins up more instances automatically |
| **Event-driven** | Fits queues, timers, webhooks, blobs, Service Bus, and other Azure events |
| **Fast to build** | Good for small tasks, glue code, and background jobs |
| **Integrates with Azure** | Easy connection to Storage, Cosmos DB, Service Bus, Event Grid, etc. |

**When it fits well:**
- Process queue messages  
- Scheduled cleanup jobs  
- Webhooks and lightweight APIs  
- React to file uploads or database changes  

**When to think twice:**
- Always-on heavy apps with steady load (App Service / containers may be cheaper)  
- Very long-running work without proper planning  

> **One-liner:** Azure Functions = no servers to manage, pay per use, auto-scale, event-driven — ideal for small focused jobs.

---

## 30-second revision

1. **Function** = one trigger-based code unit  
2. **Function App** = host that contains your functions + settings + plan  
3. **Why** = serverless, cost-efficient, auto-scale, event-driven, quick to build
