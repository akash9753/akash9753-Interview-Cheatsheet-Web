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
  <li><a href="#hosting-plans">Hosting Plans</a></li>
  <li><a href="#hosting-pricing">Hosting Plan Pricing</a></li>
  <li><a href="#portal-test">Test in Azure Portal</a></li>
  <li><a href="#app-insights">Application Insights</a></li>
  <li><a href="#azurite">What is Azurite?</a></li>
  <li><a href="#install-azurite">How to Install Azurite</a></li>
  <li><a href="#storage-explorer">Azure Storage Explorer</a></li>
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
