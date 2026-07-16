# Azure Functions and Logic Apps Interview Guide

## Goal

Complete interview notes for **Azure Functions** (serverless compute) and **Azure Logic Apps** (serverless workflows/integration) — triggers, bindings, hosting plans, Durable Functions, connectors, when to choose which, and .NET examples.

---

## Topic Index

<ul>
  <li><a href="#functions-what">Azure Functions — what and why</a></li>
  <li><a href="#triggers">Triggers and bindings</a></li>
  <li><a href="#hosting">Hosting plans</a></li>
  <li><a href="#dotnet">.NET isolated worker examples</a></li>
  <li><a href="#durable">Durable Functions</a></li>
  <li><a href="#security-fn">Functions security and identity</a></li>
  <li><a href="#best-fn">Functions best practices</a></li>
  <li><a href="#logic-what">Logic Apps — what and why</a></li>
  <li><a href="#logic-types">Consumption vs Standard</a></li>
  <li><a href="#connectors">Connectors and patterns</a></li>
  <li><a href="#compare">Functions vs Logic Apps vs WebJobs vs App Service</a></li>
  <li><a href="#together">Using Functions + Logic Apps + Service Bus together</a></li>
  <li><a href="#checklist">Interview Quick Answers</a></li>
</ul>

---

<a id="functions-what"></a>

## Azure Functions — what and why

**Azure Functions** is a **serverless compute** service: you write small pieces of code that run in response to events (**triggers**). Azure scales instances automatically and (on Consumption) you largely pay for execution time.

| Trait | Meaning |
| --- | --- |
| Event-driven | HTTP, queue, timer, blob, Event Hub, Service Bus, Cosmos, etc. |
| Short-lived | Best for bursty, focused work |
| Managed scale | Scale out with load; scale to zero on Consumption |
| Bindings | Declarative inputs/outputs reduce boilerplate |

> **One-liner:** Azure Functions = serverless, event-driven code that scales automatically.

---

### When to use Functions

| Good fit | Poor fit |
| --- | --- |
| Process Service Bus / Queue messages | Long-running heavy CPU for hours (without Durable/Premium care) |
| HTTP APIs / webhooks | Large always-on complex monolith (use App Service/Containers) |
| Timer jobs (CRON) | Ultra-low predictable latency without Premium/plan tuning |
| Glue code between Azure services | Thick UI hosting |

---

<a id="triggers"></a>

## Triggers and bindings

**Trigger** = what starts the function (exactly one primary trigger).  
**Binding** = declarative input/output connection to another resource.

| Trigger | Example |
| --- | --- |
| HTTP | REST endpoint / webhook |
| Timer | CRON schedule (`0 */5 * * * *`) |
| Service Bus | Queue or topic subscription message |
| Storage Queue / Blob | Message or blob created |
| Event Hub | Telemetry batch |
| Event Grid | Resource event |
| Cosmos DB | Change feed |
| Kafka / others | Via extensions |

| Binding direction | Example |
| --- | --- |
| In | Read blob path into stream |
| Out | Write to queue / Cosmos / blob |
| In/Out | Table entity update |

> **One-liner:** Trigger starts the function; bindings move data in/out without manual SDK plumbing.

---

<a id="hosting"></a>

## Hosting plans

| Plan | Scale to zero | Cold start | VNet / networking | Best for |
| --- | --- | --- | --- | --- |
| **Consumption** | Yes | Possible | Limited | Spiky, cost-sensitive workloads |
| **Premium (Elastic Premium)** | No (pre-warmed) | Reduced | VNet integration | Production, predictable latency |
| **Dedicated (App Service plan)** | No | Like App Service | Yes | Run on existing plan |
| **Flex Consumption** | Yes (modern Consumption variant) | Improved options | Better networking options | Newer Consumption-style hosting |

**Interview tip:** Mention cold start on Consumption and how Premium / pre-warmed instances help.

> **One-liner:** Consumption = cheap + cold starts; Premium = always ready + VNet for production APIs.

---

### Runtime versions / worker model

| Model | Notes |
| --- | --- |
| **In-process** (.NET) | Older; shares host process |
| **Isolated worker** (.NET) | Recommended — function runs in separate process; more control, middleware |

Prefer **.NET isolated** for new projects.

---

<a id="dotnet"></a>

## .NET isolated worker examples

### HTTP trigger

```csharp
[Function("HelloHttp")]
public IActionResult Run(
    [HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequestData req)
{
    return new OkObjectResult(new { message = "Hello from Azure Functions" });
}
```

### Service Bus trigger

```csharp
[Function("ProcessOrder")]
public async Task Run(
    [ServiceBusTrigger("orders", Connection = "ServiceBusConnection")]
    string message,
    FunctionContext context)
{
    // deserialize + process
    // throw → message abandoned / retried per host.json & SB settings
}
```

### Timer trigger

```csharp
[Function("NightlyCleanup")]
public void Run([TimerTrigger("0 0 2 * * *")] TimerInfo timer)
{
    // runs daily at 02:00 UTC (CRON)
}
```

### Output binding example (Storage Queue)

```csharp
[Function("Enqueue")]
[QueueOutput("outbound-jobs", Connection = "AzureWebJobsStorage")]
public string Run([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req)
    => req.Body.ToString() ?? "{}";
```

**Configuration:**
- App Settings / Key Vault references for secrets  
- `host.json` for concurrency, extensions, sampling  
- Connection names point to app settings, not hard-coded secrets  

---

<a id="durable"></a>

## Durable Functions

**Durable Functions** extend Azure Functions with **stateful orchestration** using an orchestration framework (event sourcing behind the scenes).

| Concept | Role |
| --- | --- |
| **Orchestrator function** | Describes the workflow (must be deterministic) |
| **Activity function** | Does real work (I/O, DB, HTTP) |
| **Entity function** | Small stateful actor-like entities |
| **Client** | Starts / queries orchestrations |

### Patterns

| Pattern | Use |
| --- | --- |
| Function chaining | Step1 → Step2 → Step3 |
| Fan-out / fan-in | Parallel activities, then aggregate |
| Async HTTP APIs | Start long work; client polls status |
| Monitor | Poll until condition met |
| Human interaction | Wait for external event (approval) |

```csharp
[Function("OrderSaga")]
public static async Task RunOrchestrator([OrchestrationTrigger] TaskOrchestrationContext context)
{
    var order = context.GetInput<OrderDto>();
    await context.CallActivityAsync("ReserveInventory", order);
    await context.CallActivityAsync("ChargePayment", order);
    await context.CallActivityAsync("SendEmail", order);
}
```

> **One-liner:** Durable Functions = serverless sagas/workflows with reliable state and retries.

---

<a id="security-fn"></a>

## Functions security and identity

| Concern | Approach |
| --- | --- |
| HTTP auth levels | `Anonymous`, `Function` (key), `Admin` |
| Real API security | Azure AD JWT, API Management in front |
| Access Azure resources | **Managed Identity** + RBAC |
| Secrets | Key Vault references |
| Network | Private endpoints / VNet (Premium/Dedicated/Flex options) |

Never rely only on function keys for public enterprise APIs — put **APIM** or Easy Auth / Entra ID in front.

> **One-liner:** Function keys for simple protection; Managed Identity + Entra ID / APIM for production.

---

<a id="best-fn"></a>

## Functions best practices

| Do | Don't |
| --- | --- |
| Keep functions small and idempotent | Put huge monolith logic in one function |
| Use async I/O | Block threads with `.Result` |
| Design for retries / poison messages | Assume exactly-once without idempotency |
| Centralize config in app settings | Hard-code connection strings |
| Use Durable for long workflows | Run 30-minute sync HTTP on Consumption blindly |
| Log with correlation IDs / App Insights | Swallow exceptions silently |
| Set appropriate concurrency in `host.json` | Overwhelm downstream SQL with unbounded parallelism |

**Cold start mitigation:** Premium plan, fewer heavy dependencies at startup, precompiled isolated worker.

---

<a id="logic-what"></a>

## Logic Apps — what and why

**Azure Logic Apps** is a **serverless integration / workflow** platform. You design workflows visually (or with code) using **connectors** to SaaS and Azure services — almost no code for many integrations.

| Trait | Meaning |
| --- | --- |
| Low-code / no-code | Designers + managed connectors |
| Orchestration | Conditional paths, loops, delays, approvals |
| Integration | Office 365, SAP, Salesforce, SQL, Service Bus, HTTP… |
| Enterprise integration | B2B (AS2, X12), maps (Integration Account) on suitable SKUs |

> **One-liner:** Logic Apps = serverless workflows that connect systems with connectors instead of custom glue code.

---

### When to use Logic Apps

| Good fit | Prefer Functions instead |
| --- | --- |
| Approval flows, email, Teams notifications | Complex CPU algorithms |
| SaaS-to-SaaS integration | Custom high-performance APIs |
| Scheduled sync between systems | Fine-grained code-first unit testing needs |
| Quick automation for business teams | Ultra-custom binary protocols |

---

<a id="logic-types"></a>

## Consumption vs Standard

| | **Consumption** | **Standard** (single-tenant) |
| --- | --- | --- |
| Hosting | Multi-tenant | Workflows in App Service / Container-like hosting |
| Pricing | Per action execution | Plan-based |
| VNet / private networking | Limited | Stronger private networking |
| Local development | Designer-centric | More stateful workflows, build capabilities |
| Built-in vs managed connectors | Managed connectors billed per call | Built-in connectors often cheaper at scale |

> **One-liner:** Consumption for simple cloud workflows; Standard when you need VNet, higher control, and predictable hosting.

---

### Workflow concepts

| Concept | Meaning |
| --- | --- |
| **Trigger** | Recurrence, HTTP request, Service Bus, Event Grid, Outlook, etc. |
| **Action** | Call connector operation (create row, send email, post message) |
| **Control** | Condition, For each, Until, Scope, Switch |
| **Run history** | Each execution’s inputs/outputs for debugging |
| **Stateful vs Stateless** (Standard) | Stateful stores run state; Stateless = faster/cheaper for short flows |

---

<a id="connectors"></a>

## Connectors and common patterns

| Connector examples | Use |
| --- | --- |
| HTTP / HTTPS | Call any API |
| Service Bus | Send/receive broker messages |
| SQL Server / Azure SQL | CRUD rows |
| Outlook / Teams | Notifications and approvals |
| Blob Storage | File drop processing |
| Cosmos DB | Document ops |
| Salesforce / SAP | Line-of-business integration |

### Common Logic App patterns

```text
1) HTTP webhook → parse JSON → insert SQL → send Teams message
2) Recurrence → get new CRM records → transform → post to API
3) Service Bus message → condition → call Function → dead-letter path
4) Approval email → if approved → continue order workflow
```

**Error handling:** use `Scope` + configure run after (succeeded/failed/timed out) for compensation paths.

> **One-liner:** Connectors are prebuilt adapters; scopes + run-after give try/catch style control.

---

<a id="compare"></a>

## Functions vs Logic Apps vs WebJobs vs App Service

| Option | Strength | Weakness |
| --- | --- | --- |
| **Azure Functions** | Code-first serverless events | Workflows can get messy in code |
| **Logic Apps** | Visual integration + connectors | Complex logic / testing harder; action costs |
| **WebJobs** | Background jobs on App Service | Less elastic than Functions |
| **App Service / Containers** | Full web apps / long-running APIs | You manage more scaling/hosting concerns |

### Decision guide

| If you need… | Choose |
| --- | --- |
| Custom business code reacting to events | **Functions** |
| Stateful serverless saga in code | **Durable Functions** |
| SaaS connectors + approvals + low code | **Logic Apps** |
| Front-door APIs with UI/backend | **App Service / AKS / Container Apps** |
| Enterprise messaging backbone | **Service Bus** (+ Functions/Logic Apps as consumers) |

> **One-liner:** Functions = code; Logic Apps = workflow connectors; together they cover compute + integration.

---

<a id="together"></a>

## Using Functions + Logic Apps + Service Bus together

Typical enterprise design:

```text
API / Microservice
   │
   ▼
Azure Service Bus (queue/topic)
   │
   ├── Azure Function (complex processing, Durable saga)
   └── Logic App (notify Teams, update SharePoint, call SaaS)
```

| Layer | Responsibility |
| --- | --- |
| Service Bus | Reliable buffer, pub/sub, DLQ |
| Function | Code-heavy transforms, calculations, Durable orchestration |
| Logic App | Connector-heavy business automation |

**Example interview story:**  
“Orders land on a Service Bus topic. A Function validates and updates SQL. A Logic App listens to a ‘OrderConfirmed’ subscription and emails the customer plus posts to Teams. Poison messages go to DLQ for ops.”

---

### Monitoring

| Tool | Use |
| --- | --- |
| Application Insights | Functions logs, failures, dependencies |
| Logic Apps run history | Step-level inputs/outputs |
| Azure Monitor alerts | Failures, latency, DLQ depth |
| Correlation IDs | Trace across Function → Bus → Logic App |

---

<a id="checklist"></a>

## Interview Quick Answers

### Azure Functions

| Question | Answer |
| --- | --- |
| What is Azure Functions? | Serverless event-driven compute |
| Trigger vs binding? | Trigger starts; binding is I/O glue |
| Consumption vs Premium? | Scale-to-zero + cold start vs pre-warmed + VNet |
| Isolated worker? | Recommended .NET model — separate process |
| Durable Functions? | Stateful orchestrations (fan-out, chaining, human approval) |
| How to secure HTTP functions? | Keys for basic; Entra ID / APIM for real APIs |
| Idempotency? | Required because triggers can retry |

### Logic Apps

| Question | Answer |
| --- | --- |
| What is Logic Apps? | Serverless workflow/integration with connectors |
| When over Functions? | Low-code SaaS integration, approvals, rapid automation |
| Consumption vs Standard? | Pay-per-action multi-tenant vs single-tenant with VNet/control |
| Connector? | Prebuilt API wrapper for a service |
| Error handling? | Scopes + configure run after |
| Stateful vs Stateless? | Persist run state vs faster short flows (Standard) |

### Comparison

| Question | Answer |
| --- | --- |
| Functions vs Logic Apps? | Code vs visual connector workflows |
| With Service Bus? | Bus buffers; Functions/Logic Apps process |
| Cold start? | Consumption Functions delay on idle; Premium reduces it |

---

## 60-second revision

1. Functions = serverless code on triggers/bindings  
2. Consumption scales to zero (cold start); Premium for production networking/latency  
3. Durable Functions = serverless sagas  
4. Logic Apps = connector-based workflows (approvals, SaaS)  
5. Use Functions for code; Logic Apps for integration glue  
6. Put Service Bus in the middle for reliable async processing  
7. Secure with Managed Identity, Key Vault, APIM / Entra ID
