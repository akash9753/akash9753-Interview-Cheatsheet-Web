<h1 style="color:#2563eb;">ASP.NET Core Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
This roadmap is focused on <strong style="color:#16a34a;">ASP.NET Core interview preparation</strong>.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> <span style="color:#111827;">ASP.NET Core Basics</span></a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> <span style="color:#111827;">Hosting, Kestrel, and IIS</span></a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> <span style="color:#111827;">MVC Architecture</span></a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> <span style="color:#111827;">Request Pipeline and Middleware</span></a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> <span style="color:#111827;">Routing</span></a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> <span style="color:#111827;">Controllers and Actions</span></a></li>
  <li><a href="#topic-7"><span style="color:#16a34a;font-weight:700;">7.</span> <span style="color:#111827;">MVC Views and Data Passing</span></a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> <span style="color:#111827;">Web API Fundamentals</span></a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> <span style="color:#111827;">Model Binding and Validation</span></a></li>
  <li><a href="#topic-10"><span style="color:#7c3aed;font-weight:700;">10.</span> <span style="color:#111827;">Dependency Injection</span></a></li>
  <li><a href="#topic-11"><span style="color:#7c3aed;font-weight:700;">11.</span> <span style="color:#111827;">Configuration and Options Pattern</span></a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> <span style="color:#111827;">Logging and Error Handling</span></a></li>
  <li><a href="#topic-13"><span style="color:#dc2626;font-weight:700;">13.</span> <span style="color:#111827;">Filters</span></a></li>
  <li><a href="#topic-14"><span style="color:#dc2626;font-weight:700;">14.</span> <span style="color:#111827;">Authentication, Authorization, and JWT</span></a></li>
  <li><a href="#topic-15"><span style="color:#dc2626;font-weight:700;">15.</span> <span style="color:#111827;">OAuth, OpenID Connect, and SSO</span></a></li>
  <li><a href="#topic-16"><span style="color:#ea580c;font-weight:700;">16.</span> <span style="color:#111827;">Cookies, Session, TempData, ViewData, and ViewBag</span></a></li>
  <li><a href="#topic-17"><span style="color:#ea580c;font-weight:700;">17.</span> <span style="color:#111827;">Minimal APIs</span></a></li>
  <li><a href="#topic-18"><span style="color:#ea580c;font-weight:700;">18.</span> <span style="color:#111827;">File Upload and Download</span></a></li>
  <li><a href="#topic-19"><span style="color:#ea580c;font-weight:700;">19.</span> <span style="color:#111827;">Background Services</span></a></li>
  <li><a href="#topic-20"><span style="color:#0891b2;font-weight:700;">20.</span> <span style="color:#111827;">Caching</span></a></li>
  <li><a href="#topic-21"><span style="color:#0891b2;font-weight:700;">21.</span> <span style="color:#111827;">Security Best Practices</span></a></li>
  <li><a href="#topic-22"><span style="color:#0891b2;font-weight:700;">22.</span> <span style="color:#111827;">Testing ASP.NET Core Applications</span></a></li>
  <li><a href="#topic-23"><span style="color:#0891b2;font-weight:700;">23.</span> <span style="color:#111827;">Deployment and Hosting</span></a></li>
  <li><a href="#topic-24"><span style="color:#0891b2;font-weight:700;">24.</span> <span style="color:#111827;">Performance and Best Practices</span></a></li>
  <li><a href="#suggested-learning-order"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Suggested Learning Order</span></a></li>
  <li><a href="#weekly-study-plan"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Weekly Study Plan</span></a></li>
  <li><a href="#practical-project-preparation"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Practical Project Preparation</span></a></li>
  <li><a href="#final-preparation-checklist"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Final Preparation Checklist</span></a></li>
</ul>

---

<a id="topic-1"></a>

## 1. ASP.NET Core Basics

ASP.NET Core is a modern, cross-platform framework for building web applications, MVC applications, Razor Pages, and HTTP APIs.

### Web Forms vs ASP.NET MVC 5 vs ASP.NET Core MVC

| Feature | Web Forms | ASP.NET MVC 5 | ASP.NET Core MVC |
| --- | --- | --- | --- |
| Cross platform | No | No | Yes |
| Performance | Lower due to view state and page lifecycle | Better than Web Forms | Best among these options |
| Simplicity | More complicated | Medium | Simplified |
| Cloud ready | No | Partial | Yes |
| HTML control | Less control | Good control with Razor | Good control with Razor |
| Configuration | `web.config` | `web.config` | `appsettings.json` |
| Dependency injection | Third-party needed | Third-party needed | Built-in |
| Self hosting | No | No | Yes |
| Static content | No `wwwroot` convention | No `wwwroot` convention | Uses `wwwroot` |
| Development OS | Windows only | Windows only | Windows, Mac, Linux |

### `wwwroot` Folder

`wwwroot` is used to store static files in ASP.NET Core.

Common static files:

- CSS files
- JavaScript files
- Images
- Fonts
- Static HTML files

| Question | Answer |
| --- | --- |
| What is ASP.NET Core? | Cross-platform, unified framework for web apps, MVC, Razor Pages, and HTTP APIs |
| ASP.NET Core vs ASP.NET Framework? | Core is cross-platform with built-in DI and `appsettings.json`; Framework is Windows-only with `web.config` |
| Why no `Startup.cs` in newer templates? | .NET 6+ minimal hosting model merges setup into `Program.cs` (top-level statements) |
| What is `wwwroot`? | Convention folder for static assets served by `UseStaticFiles()` |
| Environment-specific configuration? | `appsettings.{Environment}.json` layered over base; environment variables override |

**Must-know points:**
- Built-in dependency injection, configuration, and logging — no third-party container required
- Runs on Kestrel by default; production often uses reverse proxy (IIS, Nginx, Apache)
- `Program.cs` registers services (`builder.Services`) and configures middleware (`app.Use*`)

---

<a id="topic-2"></a>

## 2. Hosting, Kestrel, and IIS

Kestrel is the default cross-platform web server used in ASP.NET Core applications.

### Kestrel Request Flow

| Step | Component | Role |
| --- | --- | --- |
| 1 | Browser / client | Sends HTTP request |
| 2 | Kestrel | Terminates HTTP connection, forwards to app pipeline |
| 3 | Middleware pipeline | Auth, routing, static files, logging, etc. |
| 4 | Controller / endpoint | Executes application logic |
| 5 | Kestrel | Writes HTTP response back to client |

```text
Browser Request
    -> Kestrel Server
    -> Middleware Pipeline
    -> Controller / Endpoint
    -> Response
    -> Browser
```

### Kestrel Features

- Cross-platform
- High performance
- Lightweight
- Asynchronous processing
- Supports HTTP/1.1 and HTTP/2
- Default server in ASP.NET Core
- Often used behind IIS, Nginx, or Apache in production

### Why Kestrel When IIS Exists?

Kestrel was introduced because ASP.NET Core needed a fast, lightweight, cross-platform, and high-performance web server.

IIS limitations:

- Windows only
- Heavier server model
- Less flexible for cross-platform hosting

Kestrel advantages:

- Runs on Windows, Linux, and Mac
- High performance
- Lightweight
- Built for ASP.NET Core
- Cloud and container friendly
- Can self-host without IIS

### In-Process vs Out-of-Process Hosting

| Feature | In-Process Hosting | Out-of-Process Hosting |
| --- | --- | --- |
| Process | Runs inside IIS worker process `w3wp.exe` | Runs outside IIS in `dotnet.exe` |
| Performance | Faster and lower latency | Slightly slower due to proxy communication |
| Platform | Windows only | Cross-platform application process |
| IIS role | Hosts the app directly | Acts as reverse proxy to Kestrel |

### IIS vs Kestrel

| Feature | IIS | Kestrel |
| --- | --- | --- |
| Full form / type | Internet Information Services | Cross-platform web server |
| Platform | Windows only | Windows, Linux, Mac |
| Type | Traditional web server | Lightweight web server |
| Performance | Good | Very high |
| Cross-platform | No | Yes |
| ASP.NET Core support | Through hosting module / reverse proxy | Native support |
| Self hosting | No | Yes |
| Cloud ready | Limited | Yes |
| Docker support | Limited | Excellent |
| Default in ASP.NET Core | No | Yes |
| Production usage | IIS + Kestrel | Usually behind IIS/Nginx/Apache |

### Does Kestrel Replace IIS?

No. In production, IIS, Nginx, or Apache often works as a reverse proxy, and Kestrel does the ASP.NET Core request processing.

```text
Client Request
    -> IIS / Nginx / Apache Reverse Proxy
    -> Kestrel Server
    -> ASP.NET Core App
    -> Kestrel
    -> Reverse Proxy
    -> Client
```

Reverse proxy benefits:

- SSL handling
- Security
- Load balancing
- Static file handling
- Request filtering
- Process management

| Question | Answer |
| --- | --- |
| What is Kestrel? | Cross-platform, high-performance web server built into ASP.NET Core |
| Kestrel vs IIS? | Kestrel runs the app; IIS/Nginx/Apache often act as reverse proxy in production |
| In-process vs out-of-process? | In-process runs inside `w3wp.exe` (Windows, faster); out-of-process runs `dotnet.exe` with IIS as proxy |
| Does Kestrel replace IIS? | No — they complement; proxy handles SSL, load balancing; Kestrel runs ASP.NET Core |
| Why use a reverse proxy? | SSL termination, security filtering, load balancing, static file offload |

**Must-know points:**
- Kestrel is the default server — lightweight, async, HTTP/1.1 and HTTP/2
- Never expose Kestrel directly to the internet without a reverse proxy in production
- In-process hosting is Windows-only and offers lowest latency with IIS

---

<a id="topic-3"></a>

## 3. MVC Architecture

MVC separates an application into Model, View, and Controller.

| Part | Responsibility |
| --- | --- |
| Model | Handles application data and business logic |
| View | Handles UI and display logic |
| Controller | Handles user requests and connects Model with View |

### HTTP Stateless Model and MVC Flow

| Aspect | Behavior |
| --- | --- |
| HTTP default | Stateless — each request is independent; server does not remember prior requests |
| Where state lives | Cookies, session, JWT, database — not in the HTTP protocol itself |
| Controller role | Receives request, calls model/service, selects view — fresh `HttpContext` per request |
| vs Web Forms | No ViewState or postback lifecycle; MVC rebuilds page from scratch each request |

```text
User Request
    -> Controller
    -> Model / Service
    -> Controller
    -> View
    -> HTML Response
```

| Question | Answer |
| --- | --- |
| What is MVC? | Separation of concerns: Model (data/logic), View (UI), Controller (request handling) |
| Role of Model? | Business logic, data access, validation rules |
| Role of View? | Renders HTML via Razor; displays data from controller |
| Role of Controller? | Handles HTTP request, invokes model, returns view or result |
| Why is HTTP stateless relevant? | MVC does not preserve page state — use session, cookies, or tokens for user state |

**Must-know points:**
- Controller should stay thin — delegate business logic to services/models
- Strongly typed views (`@model`) give compile-time safety and IntelliSense
- MVC is a pattern, not exclusive to ASP.NET — but Razor is the ASP.NET Core view engine

---

<a id="topic-4"></a>

## 4. Request Pipeline and Middleware

Middleware is a software component executed during the request-response pipeline in ASP.NET Core.

Middleware can:

- Intercept HTTP requests
- Modify the request
- Execute processing logic
- Pass control to the next middleware
- Generate a response directly
- Execute logic before and after controller execution

### Middleware Flow

```text
Client Request
    -> Middleware 1
    -> Middleware 2
    -> Middleware 3
    -> Controller / Endpoint
    -> Middleware 3
    -> Middleware 2
    -> Middleware 1
    -> Client Response
```

### `app.Run()`, `app.Use()`, and `app.Map()`

| Method | Purpose |
| --- | --- |
| `app.Run()` | Terminal middleware. Handles final processing and ends the pipeline. No next middleware runs after it. |
| `app.Use()` | Adds middleware that can run before and after the next middleware by calling `next()`. |
| `app.Map()` | Creates a branch in the middleware pipeline based on a URL path segment. |

### Request Delegate

Request delegates are used to build the request pipeline. They are configured using `Run`, `Map`, and `Use` extension methods.

### Middleware Pipeline Order (Typical)

| Order | Middleware | Purpose |
| --- | --- | --- |
| 1 | Exception handling (`UseExceptionHandler` / dev page) | Catch unhandled errors; dev page in Development only |
| 2 | HTTPS redirection | Redirect HTTP → HTTPS |
| 3 | Static files (`UseStaticFiles`) | Serve `wwwroot` before routing |
| 4 | Routing (`UseRouting`) | Match URL to endpoint |
| 5 | CORS (`UseCors`) | Cross-origin headers — before auth when needed |
| 6 | Authentication (`UseAuthentication`) | Identify user (JWT, cookies) |
| 7 | Authorization (`UseAuthorization`) | Enforce permissions |
| 8 | Endpoints (`MapControllers`, `MapGet`, etc.) | Execute controller action or minimal API |

### ASP.NET Core — Full Lifecycle (Build → Runtime → Request)

![ASP.NET Core — Full Lifecycle from Source Code to Served Request](/assets/aspnet/aspnet-core-full-lifecycle.svg)

### Middleware vs Filter

| Point | Middleware | Filter |
| --- | --- | --- |
| Scope | Entire HTTP pipeline — all requests | MVC controller / Minimal API endpoint only |
| Static files & routing | Runs before and after routing; applies to static files | Runs only after endpoint is matched — not for static files |
| Context | `HttpContext` only — no action/model info | Access to controller, action, model binding, and result |
| Best for | Logging, CORS, auth pipeline, global exception handler | `[Authorize]`, validation, action logging, per-controller exceptions |

> **One-liner:** Middleware wraps the whole app; filters run inside the MVC/endpoint pipeline with full action context.

### ASP.NET Core Quick Reference

| Area | Key API / concept |
| --- | --- |
| Hosting | `WebApplication.CreateBuilder`, Kestrel, reverse proxy |
| Services | `builder.Services.Add*` — DI registration |
| Pipeline | `app.Use*`, `app.Map*` — middleware order matters |
| MVC | `[ApiController]`, `ControllerBase`, Razor views |
| Config | `appsettings.json`, `IOptions<T>`, environment variables |
| Auth | JWT bearer, `[Authorize]`, Identity |
| Errors | `UseExceptionHandler`, `ProblemDetails` (RFC 7807) |

- `UseAuthentication()`
- `UseAuthorization()`
- `UseStaticFiles()`
- `UseExceptionHandler()`
- `UseRouting()`
- `UseEndpoints()`

### Custom Middleware Example

```csharp
public class LoggingMiddleware
{
    private readonly RequestDelegate _next;

    public LoggingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine("Before Request");
        await _next(context);
        Console.WriteLine("After Response");
    }
}
```

Register middleware:

```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseMiddleware<LoggingMiddleware>();

app.Run();
```

### `Startup.cs`, `ConfigureServices`, and `Configure`

Older ASP.NET Core projects commonly used `Startup.cs`.

| Method | Purpose |
| --- | --- |
| `ConfigureServices()` | Registers services into the dependency injection container |
| `Configure()` | Configures middleware in the HTTP request pipeline |

```text
Application Start
    -> ConfigureServices()
    -> Services Registered
    -> Configure()
    -> Middleware Pipeline Created
    -> Application Ready
```

| Question | Answer |
| --- | --- |
| What is middleware? | Components in the HTTP pipeline that can inspect/modify request and response |
| `Use` vs `Run` vs `Map`? | `Use` calls next middleware; `Run` is terminal; `Map` branches by path |
| Why does order matter? | Auth must run after routing; static files before endpoints; exception handler early |
| Middleware vs filters? | Middleware runs for entire pipeline (incl. static files); filters run only in MVC/controller pipeline |
| Custom middleware registration? | `app.UseMiddleware<T>()` or inline `app.Use(async (ctx, next) => ...)` |

**Must-know points:**
- Each middleware can run code before and after `await _next(context)`
- `ConfigureServices` / `builder.Services` = DI; `Configure` / `app` = pipeline (legacy vs minimal hosting)
- Wrong middleware order is a common interview trap — auth after routing, static files before endpoints

---

<a id="topic-5"></a>

## 5. Routing

Routing maps incoming requests to controllers, actions, Razor Pages, or endpoints.

### Conventional Routing

```csharp
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});
```

### Attribute Routing

```csharp
[Route("api/products")]
public class ProductsController : ControllerBase
{
}
```

### Routing Types

| Type | Meaning |
| --- | --- |
| Conventional routing | Route pattern defined globally in `Program.cs` or `Startup.cs` |
| Attribute routing | Route defined using attributes on controllers/actions |
| Endpoint routing | Modern endpoint-based routing introduced in ASP.NET Core 3.0 |
| Area routing | Used to organize large MVC applications into areas |

| Question | Answer |
| --- | --- |
| Conventional vs attribute routing? | Conventional = global pattern in `Program.cs`; attribute = `[Route]` on controller/action |
| What is endpoint routing? | Unified routing (ASP.NET Core 3.0+) — maps to endpoints, not just controllers |
| Optional route parameter syntax? | `{id?}` — parameter is optional |
| Route constraints? | `{id:int}`, `{name:alpha}` — restrict parameter shape |
| Area routing pattern? | `[Area("Admin")]` + route template `{area:exists}/{controller}/{action}` |

**Must-know points:**
- Attribute routing takes precedence over conventional when both apply
- `[controller]` and `[action]` tokens substitute class/method names in route templates
- `MapControllerRoute` and `MapControllers` are the modern endpoint-routing equivalents

---

<a id="topic-6"></a>

## 6. Controllers and Actions

Controllers handle incoming requests and return responses.

### `Controller` vs `ControllerBase`

```text
ControllerBase  ←  base class (API helpers: Ok, BadRequest, RedirectToAction…)
     ↑
Controller      ←  adds MVC view support: View(), ViewBag, ViewData, TempData
```

| Feature | `ControllerBase` | `Controller` |
| --- | --- | --- |
| **Inheritance** | Base class for HTTP controllers | **Inherits `ControllerBase`** |
| **Primary use** | Web API / REST JSON endpoints | MVC apps with Razor views |
| **`View()` / Razor** | ❌ Not available | ✅ Returns `.cshtml` views |
| **`PartialView()`** | ❌ | ✅ |
| **ViewBag / ViewData / TempData** | ❌ | ✅ MVC view data helpers |
| **`Ok()`, `BadRequest()`, `NotFound()`** | ✅ | ✅ (inherited from `ControllerBase`) |
| **Returns JSON** | ✅ | ✅ |
| **Returns HTML** | ❌ (no view engine) | ✅ |
| **Weight** | Lighter — no view dependencies | Heavier — pulls in MVC view features |
| **Typical attribute** | `[ApiController]` + `[Route("api/[controller]")]` | Conventional or attribute routing for pages |
| **When to choose** | API-only project | Server-rendered pages + optional API |

#### Side-by-side examples

```csharp
// Web API — inherit ControllerBase
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public ActionResult<List<Product>> GetAll() => Ok(products);
}

// MVC with Razor — inherit Controller
public class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewBag.Title = "Home";
        return View(model);  // returns Index.cshtml
    }
}
```

| Question | Answer |
| --- | --- |
| Can API use `Controller`? | Yes, but unnecessary — adds view overhead; use `ControllerBase` |
| Can MVC use `ControllerBase`? | Only if returning JSON/redirects — no `return View()` |
| What does `Controller` add? | View helpers — `View()`, `PartialView()`, ViewBag, ViewData, TempData |
| Same action results? | Both support `Ok()`, `RedirectToAction()`, `File()`, etc. from `ControllerBase` |

**Interview one-liner:** `ControllerBase` = API base with result helpers; `Controller` extends it with Razor view support — APIs use `ControllerBase`, MVC pages use `Controller`.

### `IActionResult` vs `ActionResult<T>`

| Feature | `IActionResult` | `ActionResult<T>` |
| --- | --- | --- |
| Type | Interface | Generic class |
| Returns | HTTP response | HTTP response plus typed data |
| Strongly typed | No | Yes |
| Swagger documentation | Less detailed | Better detailed |
| Compile-time type checking | No | Yes |
| Flexibility | High | High |
| Supports `Ok()`, `NotFound()` | Yes | Yes |
| API response type known | No | Yes |
| Best use case | Multiple different response types | Returning specific model/data |
| Example | `Task<IActionResult>` | `Task<ActionResult<List<Employee>>>` |

### Common HTTP Status Code Helpers

```csharp
return Ok();
return NotFound();
return BadRequest();
return Unauthorized();
return StatusCode(500);
```

Common error status codes:

| Code | Meaning |
| --- | --- |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

| Question | Answer |
| --- | --- |
| `Controller` vs `ControllerBase`? | `ControllerBase` = API base (`Ok`, `BadRequest`); `Controller` adds `View()`, ViewBag, ViewData, TempData for Razor |
| `IActionResult` vs `ActionResult<T>`? | `ActionResult<T>` gives typed response + better OpenAPI/Swagger docs |
| When use `ControllerBase`? | Web APIs returning JSON/XML — no Razor views needed |
| Common result helpers? | `Ok()`, `NotFound()`, `BadRequest()`, `CreatedAtAction()`, `NoContent()` |
| `[ApiController]` attribute? | Enables automatic model validation, binding source inference, problem details |

**Must-know points:**
- Prefer `ActionResult<T>` for APIs — compile-time type checking and Swagger clarity
- `return Ok(data)` sets 200; use correct status codes (`201` for create, `204` for delete with no body)
- `Controller` inherits `ControllerBase` — API controllers should not inherit `Controller`

---

<a id="topic-7"></a>

## 7. MVC Views and Data Passing

A model is passed from Controller to View using the `View()` method in ASP.NET MVC/Core.

### Passing Model to View

```csharp
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class EmployeeController : Controller
{
    public IActionResult Index()
    {
        Employee emp = new Employee
        {
            Id = 1,
            Name = "Akash"
        };

        return View(emp);
    }
}
```

View:

```cshtml
@model Employee

<h1>@Model.Id</h1>
<h1>@Model.Name</h1>
```

### Strongly Typed Views

A strongly typed view is bound to a specific model class using the `@model` directive.

Benefits:

- Compile-time checking
- IntelliSense support
- Type safety
- Fewer runtime errors
- Better maintainability

**ViewModels are POCOs** — plain classes shaped for a specific view (dropdown lists, display fields, validation). They are not EF entities and are not mapped to database tables.

### ASP.NET MVC Data Passing Types

| Feature | ViewData | ViewBag | TempData | Session Variable | ViewModel |
| --- | --- | --- | --- | --- | --- |
| Type | Dictionary | Dynamic object | Dictionary | Session object | Strongly typed class |
| Syntax | `ViewData["Key"]` | `ViewBag.Name` | `TempData["Key"]` | `HttpContext.Session` | Custom model class |
| Data transfer | Controller to View | Controller to View | Controller to View / Redirect | Across user session | Controller to View |
| Lifetime | Current request | Current request | Next request | User session | Current request |
| Redirect support | No | No | Yes | Yes | No |
| Type safety | No | No | No | No | Yes |
| Compile-time checking | No | No | No | No | Yes |
| Need type casting | Yes | No | Yes | Yes | No |
| Recommended use | Less preferred | Less preferred | Redirect messages | User/login data | Preferred |

| Question | Answer |
| --- | --- |
| ViewData vs ViewBag? | Both request-scoped dictionaries; ViewData needs string keys and casting; ViewBag is dynamic |
| When to use TempData? | Pass data across redirect (`RedirectToAction`) — survives one request |
| ViewModel vs entity? | ViewModel is POCO shaped for a view (dropdowns, display fields); entity maps to DB |
| Strongly typed view benefit? | `@model` gives IntelliSense, compile-time checks, fewer runtime errors |
| Session vs TempData? | Session lasts entire user session; TempData is one redirect/read then gone |

**Must-know points:**
- Prefer ViewModel over ViewBag/ViewData for maintainability and type safety
- TempData uses session provider by default — requires `AddSession()` + `UseSession()`
- ViewModels are POCOs — not EF entities; keep view concerns separate from persistence

---

<a id="topic-8"></a>

## 8. Web API Fundamentals

Web API is used to build HTTP services. It allows communication between applications over HTTP and commonly returns data in JSON or XML format.

Common clients:

- Web applications
- Mobile applications
- Angular, React, Vue applications
- Desktop applications
- Third-party integrations

### DTOs and POCOs

**DTO** (Data Transfer Object) = flat object for API request/response. DTOs are always **POCOs** — plain classes or records with no EF mapping and no navigation properties.

```csharp
// Request DTO — what the client sends
public record CreateEmployeeDto(string Name, string Department);

// Response DTO — what the API returns (not the EF entity)
public record EmployeeDto(int Id, string Name, string Department);
```

| Type | POCO? | Mapped to DB? | Used in |
| --- | --- | --- | --- |
| EF entity | Yes | Yes | Repository / `DbContext` |
| DTO | Yes | No | Web API JSON body |
| ViewModel | Yes | No | MVC Razor views |

| Question | Answer |
| --- | --- |
| DTO vs entity? | Entity = persistence + relationships; DTO = API contract — both can be POCOs |
| Why DTOs in Web API? | Hide internal schema, prevent over-posting, avoid circular JSON from navigations |
| POCO in Web API? | Request/response models are plain classes — no `ControllerBase` inheritance on data types |

### Web API Advantages

### API Versioning Approaches

| Approach | How | Example |
| --- | --- | --- |
| URL path | Version in route | `api/v1/products`, `api/v2/products` |
| Query string | `?api-version=1.0` | `api/products?api-version=2.0` |
| Header | Custom header | `X-Api-Version: 1.0` |
| Media type | `Accept` header | `application/vnd.company.v2+json` |
| Attribute | `[MapToApiVersion("2.0")]` on controller/action | Works with `Asp.Versioning.Mvc` package |

- Supports multiple clients
- Supports JSON and XML responses
- Lightweight and faster than SOAP services
- Easy integration with frontend frameworks
- Uses standard HTTP methods
- Supports REST architecture
- Platform-independent communication

### REST Architecture Overview

| Layer | Responsibility |
| --- | --- |
| Client | UI or app consuming the API (browser, mobile, SPA) |
| API gateway / load balancer | Optional — routing, rate limiting, SSL (YARP, Ocelot) |
| Web API | REST endpoints — resources identified by URLs, HTTP verbs for actions |
| Business / service layer | Domain logic, validation |
| Data store | Database, cache |

### Common HTTP Status Codes

| Code | Meaning | Typical use |
| --- | --- | --- |
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | Successful POST — resource created |
| 400 | Bad Request | Validation failure, malformed body |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Authenticated but not permitted |
| 404 | Not Found | Resource does not exist |
| 500 | Internal Server Error | Unhandled server exception |

| Constraint | Meaning |
| --- | --- |
| Client-server | Client and server are separate |
| Stateless | Server does not store client state between requests |
| Cacheable | Responses can be cached |
| Uniform interface | Standard URL and HTTP method usage |
| Layered system | Multiple layers are allowed |
| Code on demand | Optional executable code can be sent by server |

### Common HTTP Methods

| Method | Purpose |
| --- | --- |
| GET | Fetch data |
| POST | Insert data |
| PUT | Update complete data |
| PATCH | Update partial data |
| DELETE | Delete data |

### Example Web API Controller

```csharp
[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public IActionResult GetEmployees()
    {
        return Ok();
    }

    [HttpPost]
    public IActionResult AddEmployee()
    {
        return Ok();
    }
}
```

### Web API vs MVC Controller

| Feature | Web API | MVC Controller |
| --- | --- | --- |
| Main output | JSON/XML data | Views / HTML pages |
| Used for | Services/APIs | Server-side web applications |
| Common clients | Mobile apps and frontend frameworks | Browser rendering Razor views |
| Base class | `ControllerBase` | `Controller` |

### Content Negotiation

| `Accept` header | Response format |
| --- | --- |
| `application/json` | JSON (default in most APIs) |
| `application/xml` | XML |
| `*/*` | Server picks default formatter |

- Client sends `Accept` header; server selects formatter (`System.Text.Json`, `XmlSerializer`)
- `[Produces("application/json")]` constrains output on controller/action
- For APIs, most teams standardize on JSON and skip negotiation

### Client → Web API Request Flow

| Step | What happens |
| --- | --- |
| 1 | Client builds HTTP request (method, URL, headers, JSON body) |
| 2 | Request hits Kestrel → middleware → routing |
| 3 | Model binding maps body/query/route to action parameters |
| 4 | Action executes, returns `IActionResult` / `ActionResult<T>` |
| 5 | Formatter serializes response to JSON; status code set |
| 6 | Response returned to client |

Content negotiation decides the response format based on the `Accept` header.

```text
Accept: application/json -> JSON response
Accept: application/xml  -> XML response
```

### Web API vs WCF

| Feature | Web API | WCF |
| --- | --- | --- |
| Style | REST based | SOAP and REST |
| Weight | Lightweight | Heavier framework |
| Protocol | HTTP | Multiple protocols |
| Best for | Web/mobile HTTP services | Enterprise services |
| JSON support | Easy | More configuration |

| Question | Answer |
| --- | --- |
| REST vs SOAP? | REST uses HTTP + JSON/XML over URLs; SOAP uses XML envelopes and WSDL |
| Idempotent HTTP methods? | GET, PUT, DELETE are idempotent; POST and PATCH are not |
| When return 201 vs 200? | 201 + `Location` header after POST create; 200 for successful GET/PUT |
| 401 vs 403? | 401 = not authenticated; 403 = authenticated but lacks permission |
| What is content negotiation? | Server picks response format (JSON/XML) based on `Accept` header |
| API versioning strategies? | URL path, query string, header, or media type — pick one and document it |
| Swagger/OpenAPI purpose? | Interactive API docs, client codegen, contract testing |

**Must-know points:**
- Never expose EF entities directly — use DTOs to prevent over-posting and hide schema
- `[ApiController]` enables automatic 400 on validation errors and infers `[FromBody]` for complex types
- Stateless REST — auth via JWT or API key per request, not server session for pure APIs

---

<a id="topic-9"></a>

## 9. Model Binding and Validation

Model binding maps HTTP request data to action method parameters or model objects.

Common binding sources:

- Route values
- Query string
- Request body
- Headers
- Form data

| Question | Answer |
| --- | --- |
| What is model binding? | Maps HTTP request data (route, query, body, form) to action parameters or models |
| `[FromBody]` vs `[FromQuery]`? | Body = JSON/XML payload; query = URL `?key=value` parameters |
| `[FromRoute]`? | Binds from route template values (`{id}`) |
| How does validation run? | Data annotations + `ModelState`; `[ApiController]` auto-returns 400 if invalid |
| FluentValidation vs annotations? | Annotations on model properties; FluentValidation = separate validator classes, richer rules |

**Must-know points:**
- Check `ModelState.IsValid` in MVC; `[ApiController]` returns 400 automatically for APIs
- Complex types from body default to `[FromBody]` with `[ApiController]`; primitives from query
- Custom validation: implement `IValidatableObject` or create `ValidationAttribute` subclass

---

<a id="topic-10"></a>

## 10. Dependency Injection

Dependency Injection is a design pattern used to provide dependencies to a class instead of creating them inside the class.

### Problems Without DI

- Tight coupling
- Difficult testing
- Harder maintenance
- Code duplication
- Violation of SOLID principles
- Complex object graphs become hard to manage manually

### Why Use DI in .NET?

- Loose coupling
- Improved testability
- Better maintainability
- Code reusability
- Centralized configuration
- Lifecycle management
- Follows Dependency Inversion Principle

### DI Types

| Type | Meaning |
| --- | --- |
| Constructor injection | Dependency injected through constructor; most common |
| Property injection | Dependency injected through property |
| Method injection | Dependency injected through method parameter |

### DI Implementation Steps

1. Create an interface.
2. Create a service class.
3. Register the service in `Program.cs`.
4. Inject the service through constructor.

```csharp
public interface IMessageService
{
    void SendMessage();
}

public class EmailService : IMessageService
{
    public void SendMessage()
    {
        Console.WriteLine("Email Sent");
    }
}

builder.Services.AddScoped<IMessageService, EmailService>();
```

Inject in controller:

```csharp
public class EmployeeController : Controller
{
    private readonly IMessageService _messageService;

    public EmployeeController(IMessageService messageService)
    {
        _messageService = messageService;
    }

    public void NotifyEmployee()
    {
        _messageService.SendMessage();
    }
}
```

### Service Lifetimes

| Lifetime | Registration | Instance scope | Common use |
| --- | --- | --- | --- |
| Transient | `AddTransient` | New instance every time resolved | Lightweight, stateless helpers |
| Scoped | `AddScoped` | One instance per HTTP request | DbContext, unit-of-work, request context |
| Singleton | `AddSingleton` | One instance for app lifetime | Cache, config readers, logging sinks |

Important points:

- Constructor injection is most recommended.
- Scoped is commonly used in ASP.NET Core web applications.
- Singleton services should be thread-safe.

| Question | Answer |
| --- | --- |
| Why use DI? | Loose coupling, testability, centralized registration, lifecycle management |
| Preferred injection style? | Constructor injection — dependencies explicit and required |
| Transient vs scoped? | Transient = new every resolve; scoped = one per request (default for web services) |
| Can scoped be injected into singleton? | No — captive dependency; inject `IServiceScopeFactory` instead |
| `DbContext` lifetime? | Always scoped — one per request; never singleton |

**Must-know points:**
- Register interfaces, not concrete types, in `Program.cs` / `ConfigureServices`
- Captive dependency (singleton holding scoped) causes stale state and bugs — common interview question
- `IServiceProvider` resolves services; prefer constructor injection over `GetService()` in app code

---

<a id="topic-11"></a>

## 11. Configuration and Options Pattern

### IOptions Interfaces Comparison

| Interface | Reloads on change? | Lifetime | Best for |
| --- | --- | --- | --- |
| `IOptions<T>` | No — snapshot at first resolve | Singleton | Static settings that never change at runtime |
| `IOptionsSnapshot<T>` | Yes — per scope/request | Scoped | Settings that may change between requests |
| `IOptionsMonitor<T>` | Yes — pushes `OnChange` callbacks | Singleton | Dynamic config with change notifications |

`appsettings.json` stores application configuration settings in ASP.NET Core.

Common configurations:

- Connection strings
- API keys
- Logging settings
- JWT settings
- Application settings
- Environment configurations

### Example `appsettings.json`

```json
{
  "MySettings": {
    "AppName": "Orion180"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  }
}
```

### Reading Configuration Using `IConfiguration`

```csharp
public class EmployeeController : Controller
{
    private readonly IConfiguration _configuration;

    public EmployeeController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public void GetData()
    {
        string appName = _configuration["MySettings:AppName"];
        Console.WriteLine(appName);
    }
}
```

Benefits:

- Centralized configuration management
- Avoids hardcoded values
- Easy environment-based configuration
- Better maintainability
- Supports strongly typed settings using options pattern

### Options Pattern Registration

```csharp
builder.Services.Configure<MySettings>(builder.Configuration.GetSection("MySettings"));
// Inject IOptions<MySettings>, IOptionsSnapshot<MySettings>, or IOptionsMonitor<MySettings>
```

| Question | Answer |
| --- | --- |
| `IConfiguration` vs Options pattern? | `IConfiguration` is key-value access; Options = strongly typed, validated settings class |
| `IOptions` vs `IOptionsSnapshot`? | `IOptions` = singleton snapshot; `IOptionsSnapshot` = reloads per scope/request |
| `IOptionsMonitor` use case? | Singleton with `OnChange` callback when config file changes |
| Configuration precedence? | env vars > command line > `appsettings.{Environment}.json` > `appsettings.json` |
| User secrets? | Development-only secrets store — `dotnet user-secrets`; not for production |

**Must-know points:**
- Never commit secrets — use User Secrets (dev), environment variables, or Azure Key Vault (prod)
- `Configure<T>` binds a section to a POCO; validate with `ValidateOnStart()` or data annotations
- `ASPNETCORE_ENVIRONMENT` drives which `appsettings.{Environment}.json` loads

---

<a id="topic-12"></a>

## 12. Logging and Error Handling

### Structured Logging (Serilog vs Plain Text)

| Aspect | Plain text logging | Structured logging (Serilog) |
| --- | --- | --- |
| Format | Free-form strings | Properties + message template |
| Queryability | Hard to search/filter | Easy to query in Seq, ELK, Application Insights |
| Example | `Log.Info("User " + id)` | `Log.Information("User {UserId} logged in", id)` |
| Correlation | Manual | Built-in support for trace/correlation IDs |

### Global Error Handling with ProblemDetails

| Approach | When | Output |
| --- | --- | --- |
| Developer exception page | Development only | Full stack trace (`UseDeveloperExceptionPage`) |
| Exception handler middleware | Production | Friendly error page or JSON (`UseExceptionHandler`) |
| `ProblemDetails` (RFC 7807) | APIs | Standard JSON: `type`, `title`, `status`, `detail`, `traceId` |
| `[ApiController]` validation | Invalid model | Automatic 400 `ValidationProblemDetails` |

### OpenTelemetry Observability

| Signal | What it captures | ASP.NET Core integration |
| --- | --- | --- |
| Traces | Request spans across services | `AddOpenTelemetry().WithTracing()` |
| Metrics | Counters, histograms (latency, errors) | `WithMetrics()` — request duration, active connections |
| Logs | Structured log events | Bridge `ILogger` to OTLP exporter |

Common use cases:

- Log request and response details
- Log exceptions
- Centralize error handling
- Return consistent error responses

| Question | Answer |
| --- | --- |
| Log levels in order? | Trace → Debug → Information → Warning → Error → Critical |
| Structured logging benefit? | Searchable properties (`{UserId}`) instead of string concatenation |
| `ProblemDetails`? | RFC 7807 standard error JSON for APIs — `title`, `status`, `detail`, `traceId` |
| Dev vs prod exception handling? | Dev page shows stack trace; prod uses `UseExceptionHandler` — never expose internals |
| Correlation ID? | Unique ID per request — propagate in logs and response headers for tracing |

**Must-know points:**
- Use `ILogger<T>` via DI — category name = fully qualified type name
- Never log passwords, tokens, or PII — mask sensitive fields
- Global exception middleware catches unhandled errors; filters catch controller-level exceptions

---

<a id="topic-13"></a>

## 13. Filters

Filters run inside the MVC/controller pipeline. Middleware runs in the full HTTP pipeline.

### Middleware vs Filter

| Feature | Middleware | Filter |
| --- | --- | --- |
| Works on | Entire HTTP pipeline | MVC / Controller pipeline |
| Executes before routing | Yes | No |
| Access to `HttpContext` | Yes | Yes |
| Access to controller/action | No | Yes |
| Used for | Logging, auth, exception handling | Validation, action logic |
| Runs for static files | Yes | No |
| Scope | Global | Controller / action |
| Order | Pipeline order | Filter order |

### Middleware and Filter Types

| Category | Type | Purpose | Example |
| --- | --- | --- | --- |
| Middleware | Built-in middleware | Provided by ASP.NET Core | `UseAuthentication()` |
| Middleware | Custom middleware | User-created middleware | `UseMiddleware<LoggingMiddleware>()` |
| Filter | Authorization filter | Checks authorization before action | `[Authorize]` |
| Filter | Resource filter | Runs before/after model binding | `IResourceFilter` |
| Filter | Action filter | Runs before/after action method | `ActionFilterAttribute` |
| Filter | Exception filter | Handles exceptions | `IExceptionFilter` |
| Filter | Result filter | Runs before/after result execution | `IResultFilter` |
| Filter | Endpoint filter | Used with Minimal APIs | `IEndpointFilter` |

| Question | Answer |
| --- | --- |
| Filter execution order? | Authorization → Resource → Action → Exception → Result |
| Middleware vs authorization filter? | Middleware runs before routing; `[Authorize]` filter runs at controller level |
| Action filter use case? | Logging, model validation tweaks, short-circuit before/after action |
| Exception filter vs middleware? | Filter has access to action context; middleware catches all pipeline errors |
| Endpoint filters? | Minimal API equivalent of action filters — `IEndpointFilter` |

**Must-know points:**
- Filters run only for MVC/controller endpoints — not for static files or non-MVC middleware
- `IAsyncActionFilter` preferred over sync for async action methods
- Global filters registered via `options.Filters.Add<T>()` in `AddControllers`

---

<a id="topic-14"></a>

## 14. Authentication, Authorization, and JWT

Authentication verifies who the user is. Authorization verifies what the user can access.

### Authentication vs Authorization

| Feature | Authentication | Authorization |
| --- | --- | --- |
| Meaning | Verifies who the user is | Verifies what the user can access |
| Process | Login process | Permission process |
| Example | Username and password | Admin can access dashboard |

### Token-Based Authentication Flow

```text
Client Login
    -> Server Validates User
    -> Generate JWT Token
    -> Send Token To Client
    -> Client Sends Token In Header
    -> Server Validates Token
    -> Access Granted
```

### JWT Authentication Flow

| Step | Actor | Action |
| --- | --- | --- |
| 1 | Client | POST credentials to `/login` |
| 2 | Server | Validate user, sign JWT (header + payload + signature) |
| 3 | Server | Return access token (and optionally refresh token) |
| 4 | Client | Store token; send `Authorization: Bearer {token}` on each request |
| 5 | Server | Validate signature, expiry, issuer, audience |
| 6 | Server | Build `ClaimsPrincipal`; authorization checks run |

### Two-Factor Authentication (TOTP)

| Step | What happens |
| --- | --- |
| 1 | User enables 2FA — server generates shared secret |
| 2 | User scans QR code in authenticator app (Google Authenticator, etc.) |
| 3 | Login: password + 6-digit TOTP code from app |
| 4 | Server validates TOTP against shared secret (time-based, ~30s window) |
| 5 | Recovery codes issued for backup access |

JWT stands for JSON Web Token.

- JSON because data is stored in JSON format.
- Web because it is mainly used in web communication.
- Token because it is used for authentication and authorization.

JWT has three parts:

| Part | Purpose |
| --- | --- |
| Header | Contains algorithm and token type |
| Payload | Contains user data and claims |
| Signature | Verifies token integrity |

Structure:

```text
Header.Payload.Signature
```

### Roles vs Claims

| Aspect | Roles | Claims |
| --- | --- | --- |
| Granularity | Coarse groups (Admin, User) | Fine-grained key-value pairs (email, department, permission) |
| Storage | `ClaimTypes.Role` in identity | Any `type` + `value` pair in token or cookie |
| Authorization | `[Authorize(Roles = "Admin")]` | `[Authorize(Policy = "CanEdit")]` with claim requirements |
| Flexibility | Limited — role explosion problem | Preferred for policy-based auth |
| JWT payload | Role claim(s) | Multiple custom claims |

| Concept | Meaning |
| --- | --- |
| Identity | Represents authenticated user information |
| Claim | Additional information about user, such as email, role, department |
| Role | Permission group such as Admin, User, Manager |
| Principal | Security context containing identity plus roles/claims |

### Sensitive Data in JWT

Do not store critical information in JWT payload because it is Base64 encoded, not encrypted.

Do not store:

- Password
- Bank details
- Sensitive personal information

Store only minimal data such as:

- User ID
- Email
- Role

### Creating JWT Token Example

```csharp
var claims = new[]
{
    new Claim(ClaimTypes.Name, "Akash"),
    new Claim(ClaimTypes.Role, "Admin")
};

var key = new SymmetricSecurityKey(
    Encoding.UTF8.GetBytes("SecretKey"));

var creds = new SigningCredentials(
    key,
    SecurityAlgorithms.HmacSha256);

var token = new JwtSecurityToken(
    claims: claims,
    expires: DateTime.Now.AddMinutes(30),
    signingCredentials: creds);

var jwt = new JwtSecurityTokenHandler().WriteToken(token);
```

### Authorize Attribute

`[Authorize]` restricts unauthorized users. Only authenticated users can access the controller or action.

```csharp
[Authorize]
public class EmployeeController : ControllerBase
{
}

[Authorize(Roles = "Admin")]
public IActionResult AdminOnly()
{
    return Ok();
}
```

### Sending Token From Client

Tokens are sent using the Authorization header.

```text
Authorization: Bearer TokenValue
```

JavaScript example:

```javascript
fetch(url, {
  headers: {
    "Authorization": "Bearer " + token
  }
});
```

### Access Token vs Refresh Token

| Feature | Access Token | Refresh Token |
| --- | --- | --- |
| Expiry | Short expiry | Long expiry |
| Purpose | Used for API access | Used to generate new access tokens |
| Sent in every request | Yes | No, used occasionally |
| Example lifetime | 15 minutes to 1 hour | 7 days to 90 days |

Refresh token flow:

```text
Login
    -> Access Token + Refresh Token
    -> Access Token Expired
    -> Client Sends Refresh Token
    -> Server Validates Refresh Token
    -> New Access Token Generated
```

| Question | Answer |
| --- | --- |
| Authentication vs authorization? | AuthN = who you are (login); AuthZ = what you can do (permissions) |
| JWT three parts? | Header (algorithm), Payload (claims), Signature (integrity verification) |
| Is JWT encrypted? | No — Base64-encoded and signed, not encrypted; never store secrets in payload |
| Access vs refresh token? | Access = short-lived API access; refresh = long-lived, used only to get new access token |
| Where send JWT? | `Authorization: Bearer {token}` header |
| Roles vs claims for authZ? | Roles for simple cases; claims + policies for fine-grained, scalable permissions |

**Must-know points:**
- Validate issuer, audience, expiry, and signature on every request — use `AddJwtBearer`
- Refresh tokens should be stored securely (httpOnly cookie or secure storage) — not in localStorage for sensitive apps
- `[AllowAnonymous]` bypasses `[Authorize]` on specific actions

---

<a id="topic-15"></a>

## 15. OAuth, OpenID Connect, and SSO

OAuth, OpenID, and OpenID Connect are protocols. JWT is a token format.

### Main Difference

| Concept | Meaning |
| --- | --- |
| OAuth | Authorization framework. Answers: what can the application access? |
| OpenID | Authentication protocol. Answers: who is the user? |
| OpenID Connect | Authentication layer over OAuth 2.0. Handles login and identity. |
| JWT | Token format that carries claims/data. |

### OAuth

OAuth allows third-party applications to access resources securely.

Examples:

- Login with Google
- Allow another app to access photos or profile data

### OpenID Connect

OpenID Connect is built on top of OAuth 2.0 and adds authentication support.

Commonly used in:

- Google Login
- Microsoft Login
- Azure AD / Microsoft Entra ID
- Okta
- Auth0

### Real Login Flow

```text
User Clicks Login with Google
    -> OpenID Connect
    -> Uses OAuth 2.0
    -> Generates JWT Token
    -> Application Gets User Info
```

### OAuth vs OpenID vs OpenID Connect vs JWT

| Feature | OAuth | OpenID | OpenID Connect | JWT |
| --- | --- | --- | --- | --- |
| Purpose | Authorization | Authentication | Authentication + authorization | Token format |
| Checks | Access | Identity | Identity + access | Carries data |
| Protocol/format | Framework | Protocol | Protocol | Token |
| Uses JWT | Sometimes | No | Yes | Itself JWT |
| Login support | No | Yes | Yes | No |
| Permission handling | Yes | No | Yes | No |
| Common use | API access | User identity | Social login | Secure data transfer |

### Microsoft Identity Platform and Entra ID

- Microsoft supports OpenID Connect through Microsoft Identity Platform and Microsoft Entra ID.
- Azure Active Directory is now Microsoft Entra ID.
- OIDC defines how authentication works.
- Microsoft Entra ID performs authentication as a managed identity provider.

### IdentityServer4 and Microsoft Entra ID

IdentityServer4 is an OpenID Connect and OAuth 2.0 framework for ASP.NET Core applications. It is outdated for newer .NET versions; Duende IdentityServer is the newer commercial successor.

| Feature | IdentityServer4 | Microsoft Entra ID |
| --- | --- | --- |
| Hosted by | Self-hosted | Microsoft Cloud |
| Control | Full control | Managed by Microsoft |
| Cost | Free old version | Subscription based |
| Best for | Custom auth systems | Enterprise login |
| OIDC support | Yes | Yes |
| OAuth support | Yes | Yes |

### SSO

Single Sign-On is an authentication mechanism where a user logs in once and can access multiple applications without logging in again.

Common technologies:

- OpenID Connect
- OAuth 2.0
- SAML
- JWT tokens

| Question | Answer |
| --- | --- |
| OAuth vs OpenID Connect? | OAuth = authorization (what app can access); OIDC = authentication layer on OAuth 2.0 (who user is) |
| OAuth vs JWT? | OAuth is a protocol/framework; JWT is a token format — OIDC often issues JWTs |
| What is SSO? | Single login grants access to multiple apps without re-authenticating |
| Microsoft Entra ID? | Formerly Azure AD — cloud identity provider with OIDC/OAuth support |
| IdentityServer4 vs Duende? | IdentityServer4 is legacy; Duende is the supported commercial successor for .NET |

**Must-know points:**
- "Login with Google/Microsoft" = OIDC flow on top of OAuth 2.0
- JWT carries claims after OIDC login — app validates token, does not call IdP every request
- SAML is enterprise SSO alternative to OIDC — common in corporate environments

---

<a id="topic-16"></a>

## 16. Cookies, Session, TempData, ViewData, and ViewBag

### Web Session Lifecycle

| Phase | What happens |
| --- | --- |
| Browser opens | No session yet |
| First request | Server creates session, issues session ID cookie |
| Subsequent requests | Browser sends session ID; server loads session data |
| Data read/write | `HttpContext.Session.SetString/GetString` |
| Timeout / close | Session expires (idle timeout) or `Session.Clear()` |
| Browser closes | Session cookie may persist (depends on cookie settings) — server session may still expire |

HTTP is stateless by default. Session management techniques help maintain user state/data between multiple HTTP requests.

### Cookies

Cookies are small pieces of data stored in the user's browser by a website.

Common uses:

- Store user data
- Maintain login session
- Remember user preferences
- Shopping cart
- Analytics/tracking

Cookie operations:

```csharp
Response.Cookies.Append("UserName", "Akash");

string user = Request.Cookies["UserName"];

Response.Cookies.Delete("UserName");
```

### Session Management

Session data is stored on the server. A session ID is stored in a browser cookie.

Common uses:

- User login
- Shopping cart
- User preferences
- Temporary data
- Authentication

Configure session:

```csharp
builder.Services.AddSession();
app.UseSession();
```

Store and read session data:

```csharp
HttpContext.Session.SetString("UserName", "Akash");
HttpContext.Session.SetInt32("UserId", 101);

string userName = HttpContext.Session.GetString("UserName");
int? userId = HttpContext.Session.GetInt32("UserId");

HttpContext.Session.Remove("UserName");
HttpContext.Session.Clear();
```

Important points:

- Session is not enabled by default in ASP.NET Core.
- Session variables are user-specific.
- Session variables are not global.
- Session data is not shared between users.
- Session expires after timeout.
- Session variables internally use cookies to store only the session ID.

### Session vs Cookie

| Feature | Session | Cookie |
| --- | --- | --- |
| Storage location | Server | Browser |
| Security | More secure | Less secure |
| Data size | Larger | Small, around 4 KB |
| Lifetime | Until session timeout | Until expiry date |
| Speed | Slightly slower | Faster |
| Sensitive data | Can store more safely | Not recommended |
| Server memory required | Yes | No |
| Automatically sent with request | Session ID only | Entire cookie |
| Main usage | User state/login | Preferences/tracking |

### Session Management Techniques

| Technique | Storage Location | Lifetime | Usage |
| --- | --- | --- | --- |
| Cookies | Browser | Until expiry | Remember user/preferences |
| Session | Server | Until timeout | User login/state |
| TempData | Server/session-backed | Next request only | Redirect messages |
| ViewData | Server memory | Current request | Controller to View |
| ViewBag | Server memory | Current request | Controller to View |
| Query string | URL | Until URL changes | Small public data |
| Hidden fields | Web page | Form submission | Hidden form values |
| ViewState | Page | Postback | Web Forms page state |

### TempData

TempData transfers data from one request to another request. It is mostly used after `RedirectToAction()`.

Important points:

- TempData survives one redirect/request.
- TempData is user-specific.
- TempData is tied to session.
- Data exists until it is read.
- After reading, TempData is removed unless `Keep()` or `Peek()` is used.

```csharp
TempData["Message"] = "Saved Successfully";
```

### `Keep()` vs `Peek()`

| Feature | `Keep()` | `Peek()` |
| --- | --- | --- |
| Purpose | Preserves TempData after it is read | Reads TempData without deleting it |
| When used | After accessing TempData | When reading TempData |
| Need extra call after read | Yes | No |

```csharp
var data = TempData["Message"];
TempData.Keep("Message");

var value = TempData.Peek("Message");
```

### TempData vs ViewData

| Feature | TempData | ViewData |
| --- | --- | --- |
| Lifetime | Available for next request | Current request only |
| Redirect support | Yes | No |
| Internal storage | Session/provider-backed | `ViewDataDictionary` |
| Removal | Removed after read | Available during current request only |

### TempData vs Session

| Feature | TempData | Session |
| --- | --- | --- |
| Lifetime | One request/redirect | Entire user session |
| Removal | Auto removes after read | Until timeout or manual removal |
| Best use | Redirect messages | User/login data |
| User specific | Yes | Yes |

### HttpContext

`HttpContext` represents all information related to a single HTTP request and response.

It contains:

- Request
- Response
- Session
- User
- Cookies
- Items

```csharp
public IActionResult Index()
{
    string browser = HttpContext.Request.Headers["User-Agent"];

    HttpContext.Response.Cookies.Append("UserName", "Akash");

    return View();
}
```

| Question | Answer |
| --- | --- |
| Cookie vs session storage? | Cookie = client-side (4 KB limit); session = server-side (session ID in cookie only) |
| Is session enabled by default? | No — requires `AddSession()` and `UseSession()` |
| TempData lifetime? | Survives one redirect; removed after read unless `Keep()` or `Peek()` |
| `Keep()` vs `Peek()`? | `Keep()` preserves after read; `Peek()` reads without deleting |
| What is `HttpContext`? | Per-request context — request, response, session, user, cookies, `Items` |

**Must-know points:**
- Session uses server memory by default — use distributed session (Redis/SQL) for scale-out
- Never store sensitive data in cookies without encryption — prefer server session or JWT
- TempData is backed by session provider — requires session middleware

---

<a id="topic-17"></a>

## 17. Minimal APIs

### Controllers vs Minimal APIs

| Aspect | Controller-based API | Minimal API |
| --- | --- | --- |
| Structure | Class + action methods | Lambda/delegate per route |
| Ceremony | More boilerplate (class, attributes) | Less code — `app.MapGet(...)` |
| Filters | Action/authorization filters | Endpoint filters (`IEndpointFilter`) |
| OpenAPI | Mature support | Good support in .NET 7+ |
| Best for | Large APIs, teams preferring MVC patterns | Microservices, small endpoints, prototypes |

### Primary Constructor Controllers (.NET 8+)

| Pattern | Example |
| --- | --- |
| Traditional | Explicit constructor assigning `private readonly` fields |
| Primary constructor | `public class ProductsController(IProductService svc) : ControllerBase` — params become fields |

- Reduces boilerplate for DI-injected dependencies
- Same DI rules apply — services injected via constructor parameters

### DTO Naming Conventions

| Direction | Naming pattern | Example |
| --- | --- | --- |
| Create request | `Create{Entity}Dto` / `Create{Entity}Request` | `CreateEmployeeDto` |
| Update request | `Update{Entity}Dto` | `UpdateEmployeeDto` |
| Response | `{Entity}Dto` / `{Entity}Response` | `EmployeeDto` |
| List response | `IEnumerable<{Entity}Dto>` or wrapper | `List<EmployeeDto>` |

### Minimal API — Avoid Entity Over-Posting

| Risk | Mitigation |
| --- | --- |
| Binding directly to EF entity | Client can set `Id`, `IsAdmin`, navigation properties |
| Mass assignment | Use dedicated request DTO with only allowed fields |
| Response leakage | Return response DTO — hide internal columns and relationships |
| Validation | Data annotations on DTO + `Results.ValidationProblem` |

Minimal APIs are a lightweight way to build HTTP APIs with less ceremony than controller-based APIs.

```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World");

app.Run();
```

| Question | Answer |
| --- | --- |
| Minimal API vs controller? | Minimal = less ceremony, inline routes; controllers = better for large APIs with filters |
| How inject services in Minimal API? | Parameters in handler delegate — resolved from DI automatically |
| Grouping endpoints? | `app.MapGroup("/api/v1/products")` with shared prefix and filters |
| Endpoint filters? | `IEndpointFilter` — like action filters for minimal APIs |
| Primary constructor controllers? | C# 12 / .NET 8 — `class MyController(IService svc) : ControllerBase` |

**Must-know points:**
- Minimal APIs and controllers can coexist in the same project
- Use DTOs in minimal API handlers — never bind POST body directly to EF entities
- `MapGroup` + `WithTags` improves Swagger organization

---

<a id="topic-18"></a>

## 18. File Upload and Download

| Question | Answer |
| --- | --- |
| What is `IFormFile`? | Represents uploaded file in multipart form — `file.OpenReadStream()`, `.FileName`, `.Length` |
| File size limits? | `RequestSizeLimit`, `MultipartBodyLengthLimit`, `FormOptions` in config |
| Secure upload practices? | Validate extension, MIME type, size; store outside web root; generate random filenames |
| Return file from API? | `return File(bytes, "application/pdf", "report.pdf")` or `PhysicalFile` |
| Streaming large files? | `return File(stream, contentType, enableRangeProcessing: true)` |

**Must-know points:**
- Never trust client-provided filename or extension — validate and sanitize
- Store uploads outside `wwwroot` or use blob storage (Azure Blob, S3)
- Scan uploads for malware in production; enforce max size to prevent DoS

---

<a id="topic-19"></a>

## 19. Background Services

| Question | Answer |
| --- | --- |
| `IHostedService` vs `BackgroundService`? | `BackgroundService` is base class with `ExecuteAsync` loop; implements `IHostedService` |
| Worker Service template? | Standalone project for long-running background tasks (not web requests) |
| Cancellation in background work? | Pass `CancellationToken` from `stoppingToken` — respect shutdown gracefully |
| Scoped services in background? | Create scope: `using var scope = _scopeFactory.CreateScope()` |
| Queued background tasks? | `Channel<T>` or `IBackgroundTaskQueue` pattern for fire-and-forget with control |

**Must-know points:**
- Background services start with the host and stop on shutdown — handle `CancellationToken`
- Do not inject scoped services (e.g. `DbContext`) directly into singleton hosted service
- Use `IHostedService` for one-shot startup tasks; `BackgroundService` for continuous loops

---

<a id="topic-20"></a>

## 20. Caching

### Caching Strategies Comparison

| Type | Scope | Invalidation | Best for |
| --- | --- | --- | --- |
| In-memory (`IMemoryCache`) | Single server | Manual or absolute/sliding expiration | Single-instance, hot data |
| Distributed (`IDistributedCache`) | Multi-server (Redis, SQL Server) | TTL or manual remove | Scale-out, shared cache |
| Response caching | HTTP cache headers | Client/proxy revalidation | Static or semi-static GET responses |
| Output caching (.NET 7+) | Server-side response cache | Policy-based (VaryByQuery, tags) | Full page/API response without re-execution |
| HybridCache (.NET 9+) | L1 in-memory + L2 distributed | Tag-based invalidation | Best of both — local speed + shared L2 |

| Question | Answer |
| --- | --- |
| In-memory vs distributed cache? | In-memory = single server; distributed (Redis) = shared across instances |
| Response vs output caching? | Response caching = HTTP headers for client/proxy; output caching = server skips re-execution |
| Cache invalidation strategies? | Absolute expiration, sliding expiration, manual remove, tag-based (HybridCache) |
| When not to cache? | User-specific, frequently changing, or sensitive data |
| Redis role? | Distributed cache backplane — session, SignalR scale-out, cache |

**Must-know points:**
- Always set expiration — unbounded cache causes memory pressure
- Cache keys must be unique and include relevant parameters (e.g. `product:{id}`)
- `IDistributedCache` serializes to bytes — use JSON or MessagePack for complex objects

---

<a id="topic-21"></a>

## 21. Security Best Practices

### Rate Limiting Strategies

| Algorithm | Behavior | Use case |
| --- | --- | --- |
| Fixed window | N requests per fixed time window | Simple API throttling |
| Sliding window | Rolling window — smoother than fixed | Fairer burst control |
| Token bucket | Tokens refill at rate; burst allowed | APIs with occasional spikes |
| Concurrency | Limit simultaneous requests | Protect resource-heavy endpoints |

- Configure via `AddRateLimiter()` + `UseRateLimiter()` (.NET 7+)
- Return `429 Too Many Requests` with `Retry-After` header

### YARP Reverse Proxy

| Feature | YARP |
| --- | --- |
| Type | Yet Another Reverse Proxy — Microsoft library |
| Config | Code, `appsettings.json`, or custom provider |
| Use case | Route `/api/*` to backend clusters, load balancing, transforms |
| vs Ocelot | YARP is lower-level, high-performance, Microsoft-maintained |

### Ocelot API Gateway

| Feature | Ocelot |
| --- | --- |
| Type | API gateway for .NET |
| Features | Routing, aggregation, rate limiting, auth, QoS |
| Config | `ocelot.json` route definitions |
| Use case | Microservices gateway — single entry point to multiple downstream APIs |

### Securing Web APIs

Common practices:

- Use JWT authentication
- Use HTTPS
- Implement authorization
- Use role-based or policy-based access
- Validate user input
- Use exception handling and logging
- Configure CORS correctly
- Protect sensitive APIs

```csharp
[Authorize]
public class PolicyController : ControllerBase
{
}
```

| Question | Answer |
| --- | --- |
| CORS purpose? | Controls which origins can call your API from browser — server-side header policy |
| CSRF protection in MVC? | Anti-forgery tokens (`[ValidateAntiForgeryToken]`) for cookie-based forms |
| XSS prevention? | Encode output in Razor (`@`), validate input, Content-Security-Policy headers |
| SQL injection prevention? | Parameterized queries / EF Core — never concatenate user input into SQL |
| Rate limiting? | `AddRateLimiter()` — fixed/sliding window; return 429 when exceeded |

**Must-know points:**
- HTTPS everywhere in production — `UseHttpsRedirection` + HSTS
- CORS is not auth — it only relaxes browser same-origin policy; APIs still need JWT/auth
- Store secrets in environment variables or Key Vault — never in source code or `appsettings.json` committed to git

---

<a id="topic-22"></a>

## 22. Testing ASP.NET Core Applications

| Question | Answer |
| --- | --- |
| Unit vs integration test? | Unit = isolate class with mocks; integration = real HTTP pipeline via test server |
| `WebApplicationFactory`? | Boots in-memory test host with same `Program.cs` configuration |
| Mocking in controller tests? | Mock `IService` with Moq/NSubstitute; inject via constructor |
| Test server? | `factory.CreateClient()` sends real HTTP requests to in-memory pipeline |
| Testing middleware? | Integration test with `CreateClient()` or unit test `InvokeAsync` directly |

**Must-know points:**
- Use `WebApplicationFactory<Program>` for integration tests — exercises routing, DI, middleware
- Override services in test: `factory.WithWebHostBuilder(b => b.ConfigureServices(...))`
- Prefer testing behavior (status code, response body) over implementation details

---

<a id="topic-23"></a>

## 23. Deployment and Hosting

Production hosting examples:

- Windows Server: IIS + Kestrel
- Linux Server: Nginx + Kestrel
- Apache + Kestrel

| Question | Answer |
| --- | --- |
| `ASPNETCORE_ENVIRONMENT` values? | Development, Staging, Production — drives config and exception pages |
| Publish command? | `dotnet publish -c Release -o ./publish` |
| IIS hosting model? | In-process (inside w3wp) or out-of-process (Kestrel + IIS reverse proxy) |
| Linux production stack? | Nginx or Apache as reverse proxy → Kestrel |
| Health checks? | `AddHealthChecks()` + `MapHealthChecks("/health")` for load balancer probes |

**Must-know points:**
- Never run as Development in production — exposes developer exception page
- Docker: multi-stage build — SDK image for build, runtime image for deploy
- Configure production secrets via environment variables or secret manager — not appsettings in image

---

<a id="topic-24"></a>

## 24. Performance and Best Practices

### Scaling SignalR with Redis Backplane

| Without backplane | With Redis backplane |
| --- | --- |
| Messages only reach clients on same server | Messages broadcast across all server instances |
| Single-server SignalR only | Horizontal scale-out behind load balancer |
| In-memory connection tracking | Redis pub/sub synchronizes groups and connections |

- Add `AddSignalR().AddStackExchangeRedis(connectionString)` for multi-server deployments
- Sticky sessions not required when backplane is configured

### Async, Threads, Concurrency, and Parallelism

Asynchronous code does not automatically create a new thread in the background.

Async is mainly about:

- Making the application usable/responsive
- Non-blocking main thread
- Improving scalability for I/O-bound work

Async is not mainly about:

- Creating new threads
- Automatically improving CPU performance

Important differences:

- Async enables concurrency, especially for I/O-bound work.
- Concurrency means multiple tasks are in progress at the same time.
- Parallelism means multiple tasks execute at the same time on multiple CPU cores.
- TPL can use multiple cores for parallel work.
- Threading uses time slicing and context switching.
- Synchronization context connects callbacks back to the original context when needed.

| Question | Answer |
| --- | --- |
| Why async in ASP.NET Core? | Frees threads during I/O wait — improves scalability under load |
| Async vs multithreading? | Async = concurrency without extra threads for I/O; multithreading = parallel CPU work |
| Pagination benefit? | Limits payload size and DB load — `Skip/Take` or keyset pagination |
| Response compression? | `AddResponseCompression()` — gzip/Brotli for text responses |
| SignalR scale-out? | Redis backplane syncs messages across server instances |

**Must-know points:**
- Use `async`/`await` for I/O-bound work (DB, HTTP, file) — avoid `.Result` and `.Wait()` (deadlocks)
- Enable response compression for JSON/HTML — not for already-compressed content (images)
- Monitor with OpenTelemetry + Application Insights — traces, metrics, logs

---

<a id="suggested-learning-order"></a>

## Suggested Learning Order

1. ASP.NET Core basics
2. Hosting, Kestrel, and IIS
3. MVC architecture
4. Request pipeline and middleware
5. Routing
6. Controllers and actions
7. MVC views and data passing
8. Web API fundamentals
9. Model binding and validation
10. Dependency injection
11. Configuration and options pattern
12. Logging and error handling
13. Filters
14. Authentication, authorization, and JWT
15. OAuth, OpenID Connect, and SSO
16. Cookies, session, TempData, ViewData, and ViewBag
17. Minimal APIs
18. File upload and download
19. Background services
20. Caching
21. Security best practices
22. Testing ASP.NET Core applications
23. Deployment and hosting
24. Performance and best practices

---

<a id="weekly-study-plan"></a>

## Weekly Study Plan

### Week 1: ASP.NET Core Foundation

- ASP.NET Core basics
- Hosting and Kestrel
- MVC architecture
- Project structure
- `wwwroot`
- Request pipeline
- Middleware
- Routing

### Week 2: MVC and Web API

- Controllers and actions
- MVC views
- Strongly typed views
- ViewData, ViewBag, TempData
- REST fundamentals
- HTTP methods and status codes
- Web API controllers
- Swagger/OpenAPI

### Week 3: Application Services

- Dependency injection
- Service lifetimes
- Configuration
- Options pattern
- Logging
- Error handling
- Filters

### Week 4: State and Security

- Cookies
- Session
- TempData
- Authentication
- Authorization
- JWT
- OAuth
- OpenID Connect
- SSO

### Week 5: Advanced and Practical Topics

- Minimal APIs
- File upload and download
- Background services
- Caching
- Testing
- Deployment
- Performance

---

<a id="practical-project-preparation"></a>

## Practical Project Preparation

### What to Build

- MVC application with strongly typed views
- CRUD Web API using ASP.NET Core
- Authentication-based Web API with JWT
- API with middleware logging
- File upload and download API
- Background worker service
- API with validation and global exception handling
- App using cookies, session, and TempData

---

<a id="final-preparation-checklist"></a>

## Final Preparation Checklist

- Can explain ASP.NET Core request pipeline.
- Can explain middleware and middleware order.
- Can explain Kestrel, IIS, and reverse proxy hosting.
- Can explain MVC architecture.
- Can pass model data from controller to view.
- Can explain strongly typed views.
- Can explain ViewData, ViewBag, TempData, Session, and Cookies.
- Can create controller-based Web APIs.
- Can explain routing and model binding.
- Can explain dependency injection and service lifetimes.
- Can explain configuration and options pattern.
- Can implement global exception handling.
- Can explain middleware vs filters.
- Can explain JWT authentication and authorization.
- Can explain OAuth, OpenID Connect, and SSO basics.
- Can explain Minimal APIs.
- Can explain file upload, caching, testing, and deployment basics.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### .NET Framework vs .NET Core / .NET

| Point | .NET Framework | .NET Core / .NET 5+ |
| --- | --- | --- |
| Platform | Windows only | Cross-platform |
| Hosting | IIS-centric | Kestrel, IIS, Docker, Linux |
| Configuration | `web.config` | `appsettings.json` + env vars |
| DI | Third-party (older) | Built-in DI container |

> **One-liner:** ASP.NET Core runs on modern cross-platform .NET with built-in DI and middleware pipeline.

### ConfigureServices() vs Configure()

| Point | ConfigureServices() | Configure() |
| --- | --- | --- |
| Purpose | Register DI services | Build HTTP middleware pipeline |
| Called | Once at startup | Once at startup |
| Modern equivalent | `builder.Services` in `Program.cs` | `app.Use*` middleware calls |
| Example | `services.AddControllers()` | `app.UseRouting(); app.UseAuthorization()` |

> **One-liner:** Services = what the app uses; Configure/pipeline = how requests flow through middleware.

### ASP.NET Core Request Lifecycle

| Step | Component | Action |
| --- | --- | --- |
| 1 | Kestrel / reverse proxy | Receives HTTP request |
| 2 | Middleware pipeline | Routing, auth, CORS, etc. |
| 3 | Endpoint | Controller action or Minimal API |
| 4 | Response | Serializes result, returns through pipeline |

> **One-liner:** Request enters Kestrel → passes middleware chain → hits endpoint → response flows back out.

### ASP.NET Core Application Lifecycle

| Phase | What Happens |
| --- | --- |
| Build | `WebApplication.CreateBuilder()` — register services |
| Configure pipeline | `app.Use*()` middleware order |
| Run | `app.Run()` — listen for requests |
| Shutdown | Graceful stop — `IHostApplicationLifetime`, cancellation |

> **One-liner:** Build services → configure middleware → run host until shutdown signal.

### What is Nginx?

| Aspect | Detail |
| --- | --- |
| Type | High-performance web server and reverse proxy |
| Role in ASP.NET | Sits in front of Kestrel on Linux production |
| Benefits | SSL termination, load balancing, static files, rate limiting |
| Flow | Client → Nginx → Kestrel (ASP.NET Core app) |

> **One-liner:** Nginx is a reverse proxy that handles TLS and routing before forwarding to Kestrel.

### What is Custom Middleware?

| Aspect | Detail |
| --- | --- |
| Definition | Component in the pipeline that processes `HttpContext` |
| Signature | `RequestDelegate _next` — call `_next(context)` to continue |
| Order | Registration order in `Program.cs` matters |
| Use cases | Logging, correlation ID, exception handling, auth |

```csharp
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    public RequestLoggingMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine($"Request: {context.Request.Path}");
        await _next(context);
        Console.WriteLine($"Response: {context.Response.StatusCode}");
    }
}

// Program.cs
app.UseMiddleware<RequestLoggingMiddleware>();
```

> **One-liner:** Middleware wraps each request — do work before/after `_next`, or short-circuit the pipeline.

### What is IConfiguration?

| Aspect | Detail |
| --- | --- |
| Purpose | Unified access to app settings from multiple sources |
| Sources | `appsettings.json`, env vars, Key Vault, command line |
| Injection | `IOptions<T>`, `IConfiguration` in constructors |
| Hierarchy | Later sources override earlier (env vars win over JSON) |

> **One-liner:** `IConfiguration` merges all config sources — inject settings instead of hardcoding.

### What is Web API?

| Aspect | Detail |
| --- | --- |
| Definition | HTTP API returning data (usually JSON), not HTML views |
| Base class | `ControllerBase` (not `Controller` with views) |
| Attributes | `[ApiController]`, `[Route("api/[controller]")]` |
| Use case | Mobile apps, SPAs, microservices, integrations |

> **One-liner:** Web API exposes HTTP endpoints that return data — the backend for modern frontends.

### Explain REST APIs

| Principle | Meaning |
| --- | --- |
| Resources | Nouns in URLs — `/api/orders/5` |
| HTTP verbs | GET read, POST create, PUT/PATCH update, DELETE remove |
| Stateless | Each request carries all needed context (e.g. JWT) |
| Status codes | 2xx success, 4xx client error, 5xx server error |

> **One-liner:** REST maps resources to URLs and uses standard HTTP verbs and status codes.

### HTTP Status Codes Used in APIs

| Code | Meaning | When to Use |
| --- | --- | --- |
| 200 | OK | Successful GET/PUT/PATCH |
| 201 | Created | Successful POST with new resource |
| 400 | Bad Request | Validation failed |
| 401 | Unauthorized | Not authenticated |
| 403 | Forbidden | Authenticated but not allowed |
| 404 | Not Found | Resource does not exist |
| 500 | Internal Server Error | Unhandled exception |

> **One-liner:** Use precise status codes — 401 for missing auth, 403 for missing permission, 400 for bad input.

### How Do You Secure an API?

| Layer | Technique |
| --- | --- |
| Authentication | JWT, OAuth 2.0, API keys |
| Authorization | `[Authorize]`, role/policy-based access |
| Transport | HTTPS only in production |
| Input | Validation, rate limiting, CORS policy |

> **One-liner:** Authenticate identity, authorize actions, encrypt in transit, validate all input.

### What is JWT? How JWT Authentication Works

| Step | Action |
| --- | --- |
| 1 | User logs in with credentials |
| 2 | Server validates and signs JWT (header + payload + signature) |
| 3 | Client sends `Authorization: Bearer {token}` on each request |
| 4 | Server validates signature and claims — grants access |

| JWT Part | Contains |
| --- | --- |
| Header | Algorithm (`HS256`, `RS256`) |
| Payload | Claims (`sub`, `role`, `exp`) |
| Signature | Integrity verification |

> **One-liner:** JWT is a signed token carrying claims — stateless auth without server-side sessions.

### What is an API Gateway?

| Aspect | Detail |
| --- | --- |
| Role | Single entry point for all client requests |
| Handles | Routing, auth, rate limiting, SSL, aggregation |
| Examples | Ocelot, YARP, Azure APIM, Kong |
| Benefit | Clients don't call individual microservices directly |

> **One-liner:** API Gateway is the front door — routing, security, and cross-cutting concerns in one place.

### Dependency Injection and Service Lifetimes

| Lifetime | Scope | Example |
| --- | --- | --- |
| Transient | New instance every injection | Lightweight stateless helpers |
| Scoped | One per HTTP request | `DbContext`, unit of work |
| Singleton | One for app lifetime | Config, caching services |

> **One-liner:** Transient = new each time; Scoped = per request; Singleton = shared app-wide.

### Authentication vs Authorization

| Point | Authentication | Authorization |
| --- | --- | --- |
| Question | Who are you? | What can you do? |
| Mechanism | Login, JWT, cookies | Roles, policies, claims |
| Middleware | `UseAuthentication()` | `UseAuthorization()` |
| Attribute | — | `[Authorize(Roles = "Admin")]` |

> **One-liner:** Authentication proves identity; authorization checks permissions.

### Middleware in ASP.NET Core

| Aspect | Detail |
| --- | --- |
| Definition | Pipeline components processing `HttpContext` |
| Order | Request flows down, response flows back up |
| Built-in | Routing, Auth, CORS, Static Files, Exception Handler |
| Custom | `app.UseMiddleware<T>()` or extension method |

> **One-liner:** Middleware is a chain of request handlers — order matters, especially auth before endpoints.

### Routing in ASP.NET Core

| Type | Example |
| --- | --- |
| Conventional | `{controller=Home}/{action=Index}/{id?}` |
| Attribute | `[Route("api/[controller]")]` on controller |
| Minimal API | `app.MapGet("/users", () => ...)` |
| Constraints | `{id:int}`, `{name:alpha}` |

> **One-liner:** Routing maps URLs to endpoints — attribute routing is standard for Web APIs.

### Explain Kestrel Server

| Aspect | Detail |
| --- | --- |
| Role | Cross-platform web server built into ASP.NET Core |
| Default | Handles HTTP directly in development and production |
| Production | Often behind IIS, Nginx, or Apache as reverse proxy |
| Benefit | High performance, async I/O |

> **One-liner:** Kestrel is the built-in web server — fast, cross-platform, usually behind a reverse proxy in prod.

### appsettings.json

| Aspect | Detail |
| --- | --- |
| Purpose | Default configuration file (JSON) |
| Environments | `appsettings.Development.json` overrides base |
| Access | `IConfiguration`, `IOptions<T>` |
| Secrets | Use User Secrets (dev) or Key Vault (prod) — not committed |

> **One-liner:** `appsettings.json` holds default config — environment files and env vars override it.

### Global Exception Handling

| Approach | How |
| --- | --- |
| Middleware | `app.UseExceptionHandler("/error")` |
| Filter | `IExceptionFilter` on MVC controllers |
| Problem Details | Return RFC 7807 `ProblemDetails` JSON for APIs |
| Dev vs Prod | Show details in dev; generic message in production |

```csharp
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";
        await context.Response.WriteAsJsonAsync(new { error = "An error occurred." });
    });
});
```

> **One-liner:** Catch unhandled exceptions centrally — return safe JSON in prod, log full details server-side.

### Explain MVC Architecture

| Layer | Role |
| --- | --- |
| Model | Data and business logic |
| View | UI (Razor `.cshtml`) |
| Controller | Processes request, selects view or redirect |

> **One-liner:** Controller receives request, model holds data/logic, view renders the response.

### Controller vs ControllerBase

| Point | `ControllerBase` | `Controller` |
| --- | --- | --- |
| Use case | Web API / JSON | MVC + Razor views |
| Views | No `View()` | `View()`, `PartialView()` |
| Inheritance | Base class | Extends `ControllerBase` |

> **One-liner:** `ControllerBase` for APIs; `Controller` adds Razor view helpers on top of the same action results.