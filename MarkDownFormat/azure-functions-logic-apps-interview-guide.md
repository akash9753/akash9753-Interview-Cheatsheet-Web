# Azure Functions — Revision Notes

## Goal

Quick revision for **Azure Functions** — basics, Visual Studio workflow, config, deployment, portal testing, hosting plans, networking, and Application Insights. Simple explanations for interview prep.

---

## Topic Index

<ul>
  <li><a href="#basics">Basics — Function, Function App, Advantages</a></li>
  <li><a href="#first-function">Create First Azure Function</a></li>
  <li><a href="#code-vs">Understand Code in Visual Studio</a></li>
  <li><a href="#config-settings">Deploy Config Settings</a></li>
  <li><a href="#connection-strings">Connection Strings</a></li>
  <li><a href="#portal-create">Create Function App from Portal</a></li>
  <li><a href="#networking">Private Endpoint vs VNET Integration</a></li>
  <li><a href="#private-endpoint-function">Private Endpoint in Azure Function</a></li>
  <li><a href="#networking-architecture">Function App + VNET Architecture</a></li>
  <li><a href="#hosting-plans">Hosting Plans</a></li>
  <li><a href="#hosting-pricing">Hosting Plan Pricing</a></li>
  <li><a href="#portal-test">Test in Azure Portal</a></li>
  <li><a href="#app-insights">Application Insights</a></li>
  <li><a href="#azurite">What is Azurite?</a></li>
  <li><a href="#install-azurite">How to Install Azurite</a></li>
  <li><a href="#storage-explorer">Azure Storage Explorer</a></li>
  <li><a href="#triggers">Triggers in Azure Functions</a></li>
  <li><a href="#cron">CRON Expression (Timer Trigger)</a></li>
  <li><a href="#service-bus-trigger">Service Bus Trigger Example</a></li>
  <li><a href="#cosmos-db-trigger">Cosmos DB Trigger</a></li>
  <li><a href="#event-hub-trigger">Event Hub Trigger</a></li>
  <li><a href="#bindings">Bindings in Azure Functions</a></li>
  <li><a href="#input-binding-example">Input Binding Example</a></li>
  <li><a href="#no-binding-example">When We Cannot Use Binding</a></li>
  <li><a href="#bindings-next">Triggers vs Bindings — What Next?</a></li>
</ul>

---

<a id="basics"></a>

## Basics — Function, Function App, Advantages

### Azure Function

A single piece of **serverless code** that runs when a **trigger** fires (HTTP, timer, queue, blob, etc.).

> **One-liner:** Function = one event-driven code block.

### Azure Function App

The **host** that contains one or more functions. Shared settings: hosting plan, runtime, storage, App Insights.

> **One-liner:** Function App = container; Function = code inside it.

### Advantages

| Advantage | Why |
| --- | --- |
| No server management | Azure runs infrastructure |
| Pay per use | Consumption = cheap when idle |
| Auto scale | Scales with load |
| Event-driven | HTTP, timer, queue, blob, etc. |
| Fast to build | Small focused jobs |

---

<a id="first-function"></a>

## Create First Azure Function

Typical workflow with **C# and Visual Studio**:

1. **Create** Azure Function project in Visual Studio  
2. **Run locally** — test on your machine before cloud deploy  
3. **Deploy to Azure** — publish Function App  
4. **Run in Portal** — verify it works in Azure  

> **One-liner:** Create in VS → run local → deploy → test in Portal.

---

<a id="code-vs"></a>

## Understand Code in Visual Studio

### HTTP Trigger

A function with an **HTTP trigger** behaves like a small **API endpoint**.

```text
HTTP trigger function = API
```

Someone calls a URL → your function runs → returns a response.

### Route

Each function can have its own **route** (URL path). You can add multiple functions with different routes in the same Function App.

### `local.settings.json`

Local development config file in Visual Studio. Stores:
- App settings  
- Connection strings  
- Local-only secrets  

**Important:** This file is **not deployed** to Azure — it stays on your machine.

### Folder structure (high level)

```text
Function App project
├── Function1/          (one function)
├── Function2/
├── host.json           (host-level config)
└── local.settings.json (local only — not deployed)
```

> **One-liner:** HTTP trigger = API; route = URL path; `local.settings.json` = local config only.

---

<a id="config-settings"></a>

## Deploy Config Settings

| Where | Config lives |
| --- | --- |
| **Visual Studio (local)** | `local.settings.json` → `Values` section |
| **Azure (cloud)** | Function App → **Configuration** → Application settings |

**Key point:** When you deploy from Visual Studio, **app settings do not automatically go to Azure**. You must **manually create** the same settings in the Azure Portal (or use CI/CD / ARM / Bicep).

> **One-liner:** `local.settings.json` is local only — recreate settings in Azure after deploy.

---

<a id="connection-strings"></a>

## Connection Strings

### Local (Visual Studio)

In `local.settings.json`:

```json
{
  "ConnectionStrings": {
    "MyDb": "Server=...;Database=..."
  },
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true"
  }
}
```

### Read in C# Azure Function

```csharp
// From environment / configuration
var conn = Environment.GetEnvironmentVariable("MyDb");
// or IConfiguration in isolated worker
```

### Deploy to Azure

**Connection strings also do not deploy automatically.** After publishing:
1. Open Function App in Azure Portal  
2. Go to **Configuration**  
3. Add connection string under **Connection strings** tab (or as app setting)  

> **One-liner:** Store connection strings in `local.settings.json` locally; add them manually in Azure Configuration after deploy.

---

<a id="portal-create"></a>

## Create Function App from Portal

You can create a Function App from **Visual Studio** or directly from the **Azure Portal**.

When creating in Portal, you choose important fields:

| Field | What it means |
| --- | --- |
| **Hosting plan** | Consumption / Premium / App Service — CPU & memory infrastructure |
| **Runtime stack** | .NET, Java, Node, Python, etc. |
| **Storage account** | Required by Functions runtime (internal state, triggers) |
| **Networking** | VNET integration, Private Endpoint (for secure access) |
| **Application Insights** | Monitoring and logging |

> **One-liner:** Portal creation forces you to pick plan, runtime, storage, networking, and monitoring upfront.

---

<a id="networking"></a>

## Private Endpoint vs VNET Integration

Simple difference:

| Concept | Direction | Simple meaning |
| --- | --- | --- |
| **VNET Integration** | Function App → **into** your VNET | Your function can **reach** private resources inside VNET (SQL, APIs on private IP) |
| **Private Endpoint** | External → **into** Function App | Function App gets a **private IP** inside VNET — callers access it without going over public internet |

```text
VNET Integration:     Function ──calls──► Private SQL in VNET
Private Endpoint:     Client in VNET ──calls──► Function (private IP)
```

> **One-liner:** VNET Integration = function reaches private network; Private Endpoint = function is reached privately.

---

<a id="private-endpoint-function"></a>

## Private Endpoint in Azure Function

By default, an Azure Function App is reachable from the **public internet** (HTTP URL).

**Problem:** What if you want the function accessible **only from a VNET** — not from the public internet?

**Solution:** **Private Endpoint**

### What Private Endpoint does

```text
Before (public):
  Internet ──► Function App (public URL)

After (private endpoint):
  Internet ──✗──► Function App
  VM inside VNET ──► Function App (private IP in VNET)
```

Private Endpoint gives your Function App a **private IP address** inside your Virtual Network. Only resources in (or connected to) that VNET can call it.

### Steps to understand / verify

1. **Learn the concept** — Private Endpoint blocks public access, allows VNET-only access  
2. **Create Private Endpoint** for the Function App linked to your VNET  
3. **Verify public blocked** — try calling function URL from internet → should fail  
4. **Verify VNET works** — call function from a **VM inside the same VNET** → should succeed  

| Check | Expected result |
| --- | --- |
| Call from public internet | ❌ Not reachable |
| Call from VM in linked VNET | ✅ Works |

**Note:** Private Endpoint usually requires **Premium** or suitable hosting plan with VNET support — not typical on basic Consumption without proper networking setup.

> **One-liner:** Private Endpoint = Function App reachable only inside VNET, not from public internet.

---

<a id="networking-architecture"></a>

## Function App + VNET Architecture

High-level picture of how **Function App**, **VNET Integration**, and **Private Endpoint** fit together:

```text
                    ┌─────────────────────────────┐
                    │  Function App ("Fun App")   │
                    │  Public IP (default)        │
                    │  ├── GetProduct             │
                    │  └── GetStock               │
                    └──────────┬──────────────────┘
                               │
              VNET Integration │  "extended" into VNET
              (outbound)       │
                               ▼
┌──────────────────────────────────────────────────────┐
│                      VNET                            │
│                                                      │
│   ┌─────────┐         ┌──────────────────┐          │
│   │   VM    │ ──✅──► │ Private Endpoint │          │
│   │ private │  calls  │ (Function App    │          │
│   │   IP    │         │  private IP)     │          │
│   └─────────┘         └──────────────────┘          │
│                                                      │
└──────────────────────────────────────────────────────┘

        Public Internet ──✗──► Function (when PE enabled)
```

### Parts explained

| Component | Role |
| --- | --- |
| **Function App** | Hosts functions like `GetProduct`, `GetStock`; has public IP by default |
| **VNET Integration ("extended")** | Function App can **call into** VNET — reach VM, private SQL, internal APIs |
| **VM (private IP)** | Resource inside VNET — not on public internet |
| **Private Endpoint** | Function App gets **private IP inside VNET** — VM calls functions privately |
| **Public Internet** | Blocked from calling function when private access-only is configured |

### Two directions (remember both)

| Direction | Mechanism | Example |
| --- | --- | --- |
| **Function → VNET** | VNET Integration | Function calls private API on VM |
| **VNET → Function** | Private Endpoint | VM calls `GetProduct` without public internet |

> **One-liner:** VNET Integration = function reaches VM; Private Endpoint = VM reaches function — both keep traffic private.

---

<a id="hosting-plans"></a>

## Hosting Plans

**Hosting plan** = the CPU and memory infrastructure that runs your function code.

| Plan | Typical use |
| --- | --- |
| **Consumption** | Dev / local — serverless, scale to zero |
| **Flex Consumption** | Dev / local — newer flexible serverless option |
| **Premium** | Staging / Production — pre-warmed, VNET, less cold start |
| **App Service (Dedicated)** | Staging / Production — runs on App Service plan you choose |

### When to choose which

| Choose | When |
| --- | --- |
| **Consumption / Flex** | Learning, dev, low traffic, cost-sensitive |
| **Premium** | Production APIs needing VNET, steady traffic, low cold start |
| **App Service** | Already have App Service plan, need dedicated resources |

> **One-liner:** Consumption/Flex for dev; Premium/App Service for staging and production.

---

<a id="hosting-pricing"></a>

## Hosting Plan Pricing

| Plan | Cost | Environment |
| --- | --- | --- |
| **Consumption** | Cheap / almost no cost when idle | Dev / local |
| **Flex Consumption** | Cheap / very low cost | Dev / local |
| **Premium** | Costly (always-on capacity) | Staging / Production |
| **App Service** | Depends on chosen App Service plan | Staging / Production |

> **One-liner:** Dev = Consumption/Flex (cheap); Prod = Premium or App Service (costlier but predictable).

---

<a id="portal-test"></a>

## Test in Azure Portal

Two ways to test a deployed function:

### 1. Function URL

Call the function using its **HTTP URL**.

You need a key:
- **Function key** — scoped to one function  
- **Host key** — all functions in the app  
- **Master key** — admin-level (keep secret)  

Append key as query string: `?code=<key>` or use header.

### 2. Test / Run feature (Portal UI)

Use the built-in **Test/Run** tab in Azure Portal.

For browser-based testing you may need to **enable CORS** on the Function App.

### Live logs

While testing, view **execution logs** in the portal. For deeper monitoring, use **Application Insights**.

> **One-liner:** Test via URL + key, or Portal Test/Run (enable CORS); watch live logs during execution.

---

<a id="app-insights"></a>

## Application Insights

**Application Insights** is Azure’s **logging and monitoring** tool for Function Apps.

It stores:
- Logs and custom logs  
- Exceptions  
- Performance data (slow requests, dependencies)  

### Typical setup

1. Deploy Function App from Visual Studio to Azure  
2. **Create / link Application Insights** during or after deployment  
3. Run functions — telemetry flows automatically  

### What you can find

| Problem | App Insights shows |
| --- | --- |
| Slow function | High duration, dependency traces |
| Exception | Stack trace, failed requests |
| Failures | Error rate, failed invocations |

**Demo scenario:** Function-1 runs very slow → see high duration in App Insights. Function-2 throws exception → see exception details and stack trace.

> **One-liner:** App Insights = find slow functions and exceptions in Azure Functions.

---

<a id="azurite"></a>

## What is Azurite?

**Azurite** is a **local emulator** that makes your PC act like an **Azure Storage Account** for development.

It emulates:
- Blob storage  
- Queue storage  
- Table storage  

### When do you need Azurite?

Install Azurite if:
- You want local development without connecting to real Azure Storage  
- You run **Azure Functions in Visual Studio** with `UseDevelopmentStorage=true`  
- You get errors like **"unable to connect to storage account"**  

Azure Functions runtime **requires** a storage account connection (`AzureWebJobsStorage`). Locally, Azurite provides that storage.

> **One-liner:** Azurite = local fake Azure Storage for dev — required when Functions can't reach cloud storage.

---

<a id="install-azurite"></a>

## How to Install Azurite

### Prerequisites

1. Install **Node.js** from [https://nodejs.org](https://nodejs.org)  
2. Open **Windows PowerShell (Admin)**  

### Step 1 — Check Node.js

```powershell
node -v
npm -v
```

If not installed, download and install Node.js first.

### Step 2 — Install and run Azurite

```powershell
npm install -g azurite
azurite --version
azurite
```

| Command | Purpose |
| --- | --- |
| `npm install -g azurite` | Install Azurite globally |
| `azurite --version` | Verify installation |
| `azurite` | Start local storage emulator |

Keep Azurite running while developing Functions locally.

In `local.settings.json`:

```json
"AzureWebJobsStorage": "UseDevelopmentStorage=true"
```

> **One-liner:** Install Node.js → `npm install -g azurite` → run `azurite` → use `UseDevelopmentStorage=true`.

---

<a id="storage-explorer"></a>

## Azure Storage Explorer

**Azure Storage Explorer** is a **desktop GUI app** to manage Azure storage resources — **blobs**, **queues**, **tables**, and **file shares**.

### What you can do

| Feature | Use |
| --- | --- |
| Connect to cloud storage | View/manage real Azure Storage accounts |
| Connect to local storage | View Azurite emulator data on your PC |
| Upload/download blobs | Test file triggers and blob storage |
| View queues | Inspect messages for queue-triggered functions |

### Install

1. Download from [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer)  
2. Double-click installer and complete setup  
3. Connect to **Local & Attached** → **Emulator** (Azurite) or your Azure subscription  

> **One-liner:** Storage Explorer = GUI to browse cloud or local (Azurite) storage — blobs, queues, tables.

---

<a id="triggers"></a>

## Triggers in Azure Functions

A **trigger** decides **when** an Azure Function runs. Every function has exactly **one trigger**.

| Trigger | When it runs |
| --- | --- |
| **HttpTrigger** | Someone hits the function URL (API call) |
| **TimerTrigger** | On a schedule (CRON expression) |
| **ServiceBusTrigger** | Message arrives on Service Bus queue/topic subscription |
| **QueueTrigger** | Message arrives on Storage Queue |
| **CosmosDBTrigger** | Document changes in Cosmos DB |
| **EventHubTrigger** | Event arrives on Event Hub |
| **BlobTrigger** | File uploaded/changed in Blob Storage |

> **One-liner:** Trigger = the event that starts your function.

### Timer trigger — common local error

If Timer trigger fails with:

```text
unable to connect to storage account
```

**Fix:** Install and run **Azurite** — Timer triggers need storage even locally.

---

<a id="cron"></a>

## CRON Expression (Timer Trigger)

A **CRON expression** schedules when a Timer trigger function runs.

### Azure Functions format (6 fields)

```text
{second} {minute} {hour} {day} {month} {day-of-week}
```

| Field | Range |
| --- | --- |
| second | 0–59 |
| minute | 0–59 |
| hour | 0–23 |
| day | 1–31 |
| month | 1–12 |
| day-of-week | 0–6 (Sun–Sat) |

### Examples

| Schedule | CRON expression |
| --- | --- |
| Every hour | `0 0 * * * *` |
| Every 5 minutes | `0 */5 * * * *` |
| 1st of every month at midnight | `0 0 0 1 * *` |

```csharp
[Function("ScheduledJob")]
public void Run([TimerTrigger("0 */5 * * * *")] TimerInfo timer)
{
    // runs every 5 minutes
}
```

> **One-liner:** Azure Timer CRON = 6 fields starting with seconds — `0 */5 * * * *` = every 5 minutes.

---

<a id="service-bus-trigger"></a>

## Service Bus Trigger Example

Typical microservice pattern:

```text
Order Service (Console App)
        │
        │  sends Order detail
        ▼
Service Bus Queue
        │
        │  message arrives
        ▼
Dispatch Service (Azure Function + Service Bus Trigger)
        │
        └── picks up order and processes/dispatches
```

| Component | Role |
| --- | --- |
| **Order Service** | Console app — sends order JSON to Service Bus queue |
| **Service Bus Queue** | Buffer between producer and consumer |
| **Dispatch Service** | Azure Function with **ServiceBusTrigger** — auto-runs when message arrives |

```csharp
[Function("DispatchOrder")]
public void Run(
    [ServiceBusTrigger("orders-queue", Connection = "ServiceBusConnection")]
    string orderMessage)
{
    // read order detail from message and dispatch
}
```

> **One-liner:** Service Bus Trigger = function wakes up automatically when a queue message arrives.

---

<a id="cosmos-db-trigger"></a>

## Cosmos DB Trigger

**Azure Cosmos DB Trigger** runs a function when documents are **created or updated** in a Cosmos DB container.

### Example scenario — user registration

```text
User registers
   │
   ▼
Save user in Cosmos DB
   │
   ▼
Cosmos DB Trigger fires (new record added)
   │
   ▼
Email Service (Azure Function)
   └── reads UserName, UserEmail, Gender, City, etc.
   └── sends welcome email
```

| Step | What happens |
| --- | --- |
| 1 | User details saved to Cosmos DB |
| 2 | Cosmos DB Trigger detects new document |
| 3 | Function reads fields from the new record |
| 4 | Function sends welcome email automatically |

```csharp
[Function("SendWelcomeEmail")]
public void Run(
    [CosmosDBTrigger(
        databaseName: "UserDb",
        containerName: "Users",
        Connection = "CosmosDbConnection",
        LeaseContainerName = "leases",
        CreateLeaseContainerIfNotExists = true)]
    IReadOnlyList<User> users)
{
    foreach (var user in users)
    {
        // use user.UserName, user.UserEmail, user.Gender, user.City...
        // send welcome email
    }
}
```

**Note:** Cosmos DB trigger uses a **lease container** to track which changes were already processed.

> **One-liner:** Cosmos DB Trigger = auto-run function when a new/updated document is saved — e.g. send welcome email after user registration.

---

<a id="event-hub-trigger"></a>

## Event Hub Trigger

**Azure Function with Event Hub Trigger** runs when a **message/event** is available in **Azure Event Hub**.

Event Hub is used for **high-volume streaming data** — telemetry, logs, clickstream, IoT events.

```text
Producer (app / device / service)
        │
        │  sends events
        ▼
Azure Event Hub
        │
        │  new event available
        ▼
Azure Function (EventHubTrigger)
        └── processes the event
```

```csharp
[Function("ProcessEventHubMessage")]
public void Run(
    [EventHubTrigger("my-event-hub", Connection = "EventHubConnection")]
    EventData[] events,
    FunctionContext context)
{
    foreach (var eventData in events)
    {
        var body = eventData.Body.ToString();
        // process telemetry / log / event
    }
}
```

| Use case | Why Event Hub |
| --- | --- |
| Application telemetry | High throughput event stream |
| IoT sensor data | Many devices sending events |
| Log ingestion | Continuous stream of log events |

> **One-liner:** Event Hub Trigger = function runs automatically when a message/event arrives in Event Hub.

---

<a id="bindings"></a>

## Bindings in Azure Functions

A **binding** is a **declarative** way to connect a function to Azure resources — storage, queues, databases, etc.

Instead of writing manual SDK code to read/write every time, you declare bindings in the function signature.

| Why use bindings? | Manual code works too, but bindings… |
| --- | --- |
| Shorter code | Less boilerplate |
| Cleaner | Crisp, readable function |
| Less error-prone | Runtime handles connection wiring |

### Input binding vs output binding

| Type | Direction | Meaning |
| --- | --- | --- |
| **Input binding** | Resource → Function | Function **reads** data from Azure resource |
| **Output binding** | Function → Resource | Function **writes** data to Azure resource |

Examples of resources: Blob Storage, Queue, SQL, Cosmos DB, Service Bus, etc.

### Demo — Output binding (HTTP + Blob)

**Scenario:** User posts feedback via HTTP POST API → function saves feedback as a **blob**.

```text
Client
  │  HTTP POST (feedback JSON)
  ▼
Azure Function
  ├── HttpTrigger        (input — starts function, receives request)
  └── Blob output binding (output — writes feedback to blob storage)
```

```csharp
[Function("SubmitFeedback")]
public static async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequest req,
    [Blob("feedback/{rand-guid}.json", FileAccess.Write, Connection = "AzureWebJobsStorage")]
    Stream outputBlob)
{
    string body = await new StreamReader(req.Body).ReadToEndAsync();
    await using var writer = new StreamWriter(outputBlob);
    await writer.WriteAsync(body);
    return new OkResult();
}
```

**Flow:**
1. `[HttpTrigger]` — API receives POST feedback  
2. Function reads feedback body  
3. `[Blob]` output binding — stores content in blob storage  

> **One-liner:** Bindings = declarative read/write to Azure resources; input = read in, output = write out.

**When bindings are not enough:** Sometimes you need **explicit manual code** — see examples below.

---

<a id="input-binding-example"></a>

## Input Binding Example

**Scenario:** HTTP GET API with `{userid}` in URL → function reads user from **Cosmos DB** and returns it.

```text
Client  GET /api/user/{userid}
              │
              ▼
Azure Function
  ├── HttpTrigger      (starts function — userid from route)
  └── CosmosDB input   (reads user document by id)
```

```csharp
[Function("GetUser")]
public static IActionResult Run(
    [HttpTrigger(AuthorizationLevel.Function, "get", Route = "user/{userid}")]
    HttpRequest req,
    string userid,
    [CosmosDB(
        databaseName: "UserDb",
        containerName: "Users",
        Id = "{userid}",
        PartitionKey = "{userid}",
        Connection = "CosmosDbConnection")]
    User user)
{
    if (user == null)
        return new NotFoundResult();

    return new OkObjectResult(user);
}
```

| Step | Binding |
| --- | --- |
| 1 | `[HttpTrigger]` — GET with `{userid}` in route |
| 2 | `[CosmosDB]` input binding — loads user document automatically |

**Manual alternative:** You can write explicit Cosmos SDK code to connect, query by id, and return JSON — bindings just make code **crisp and short**.

> **One-liner:** Input binding = data flows in from Cosmos/queue/blob without manual SDK boilerplate.

---

<a id="no-binding-example"></a>

## When We Cannot Use Binding

**Problem with output binding only:**

Same feedback POST scenario:
- `[HttpTrigger]` receives feedback  
- `[Blob]` output binding saves to storage  

**Issue:** Caller only gets **`200 OK`** — not a custom response body like:

```json
{ "message": "Feedback saved successfully", "id": "abc-123" }
```

**Solution:** Write **explicit code** when you need **both**:
1. Save to blob (or any storage)  
2. Return a **custom HTTP response** to the caller  

```csharp
[Function("SubmitFeedbackExplicit")]
public static async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequest req,
    BlobServiceClient blobClient)
{
    string body = await new StreamReader(req.Body).ReadToEndAsync();
    var id = Guid.NewGuid().ToString();

    // explicit blob write
    var container = blobClient.GetBlobContainerClient("feedback");
    await container.CreateIfNotExistsAsync();
    var blob = container.GetBlobClient($"{id}.json");
    await blob.UploadAsync(BinaryData.FromString(body));

    // custom response
    return new OkObjectResult(new
    {
        message = "Feedback saved successfully",
        id = id
    });
}
```

| Use binding | Use explicit code |
| --- | --- |
| Simple save + 200 OK is enough | Need custom response body |
| Standard I/O, less code | Full control over HTTP result + side effects |

> **One-liner:** Output binding often returns only 200 OK — use explicit SDK code when caller needs a custom response plus storage write.

---

<a id="bindings-next"></a>

## Triggers vs Bindings — What Next?

### More trigger types (optional deep dive)

You can learn these triggers separately — they are **optional** for understanding later topics:

- Cosmos DB trigger  
- Service Bus trigger  
- Event Hub trigger  
- Queue trigger, Blob trigger, etc.  

**Note:** Understanding every trigger is **not required** to learn **Bindings** — no hard dependency.

### What are Bindings?

| Concept | Role |
| --- | --- |
| **Trigger** | Starts the function (one per function) — also an input binding |
| **Input binding** | Extra data **into** the function (read from resource) |
| **Output binding** | Data **out** of the function (write to resource) |

If you skip trigger videos, you can jump to **Bindings** — they are a separate topic.

> **One-liner:** Trigger starts the function; bindings are optional extra I/O — input reads, output writes.

---

## 30-second revision

1. Function = trigger code; Function App = host  
2. VS workflow: create → local run → deploy → portal test  
3. `local.settings.json` = local only; copy settings to Azure manually  
4. Connection strings same rule — add in Azure Configuration after deploy  
5. HTTP trigger = API; keys needed for Function URL testing  
6. Consumption/Flex = dev (cheap); Premium/App Service = prod  
7. VNET Integration = reach private resources; Private Endpoint = private access to function  
8. App Insights = logs, exceptions, slow function detection  
9. Azurite = local storage emulator; install via npm when local Functions fail on storage  
10. Storage Explorer = GUI for cloud + Azurite blobs/queues/tables  
11. Trigger = when function runs; Timer uses 6-field CRON; Service Bus trigger = queue message  
12. Order app → Service Bus queue → Dispatch Function is classic async pattern  
13. Cosmos DB Trigger = new user saved → function sends welcome email from document fields  
14. Event Hub Trigger = function runs when message/event arrives in Event Hub stream  
15. Bindings = declarative I/O; input = read, output = write; HTTP POST → blob example  
16. Input binding demo: GET `{userid}` → Cosmos DB user; explicit code when custom HTTP response needed  
17. Private Endpoint = Function App private IP in VNET; block public, allow VM-in-VNET calls only  
18. Architecture: Fun App extended into VNET; VM calls functions via Private Endpoint; public blocked
