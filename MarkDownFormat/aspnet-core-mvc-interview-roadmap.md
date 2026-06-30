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

### What to Learn

- What is ASP.NET Core?
- Difference between Web Forms, ASP.NET MVC 5, and ASP.NET Core MVC
- Difference between ASP.NET MVC, ASP.NET Web API, and ASP.NET Core
- Cross-platform nature of ASP.NET Core
- Hosting model
- Project structure
- `Program.cs`
- `Startup.cs` concept in older ASP.NET Core projects
- `wwwroot` folder
- `appsettings.json`
- Environment-specific configuration

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

---

<a id="topic-2"></a>

## 2. Hosting, Kestrel, and IIS

### What to Learn

- Kestrel web server
- IIS integration
- In-process hosting
- Out-of-process hosting
- Reverse proxy
- IIS vs Kestrel
- Production hosting patterns

Kestrel is the default cross-platform web server used in ASP.NET Core applications.

### Kestrel Flow
![Kestrel and MVC request flow diagram](assets/aspnet/kestrel-mvc-request-flow.png)

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

---

<a id="topic-3"></a>

## 3. MVC Architecture

### What to Learn

- MVC pattern
- Model
- View
- Controller
- Razor views
- Controller to view flow
- Strongly typed views

MVC separates an application into Model, View, and Controller.

| Part | Responsibility |
| --- | --- |
| Model | Handles application data and business logic |
| View | Handles UI and display logic |
| Controller | Handles user requests and connects Model with View |

### MVC Flow
![HTTP stateless behavior with controller example](assets/aspnet/http-stateless-controller-example.png)

```text
User Request
    -> Controller
    -> Model / Service
    -> Controller
    -> View
    -> HTML Response
```

---

<a id="topic-4"></a>

## 4. Request Pipeline and Middleware

### What to Learn

- Request pipeline
- Middleware
- Built-in middleware
- Custom middleware
- Middleware order
- Request delegate
- `Use`
- `Run`
- `Map`
- `UseMiddleware<T>()`
- Exception handling middleware
- Static files middleware
- Routing middleware

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

### Common Built-In Middleware
![ASP.NET Core middleware pipeline order](assets/aspnet/middleware-pipeline-order.jpg)

![Complete ASP.NET Core 2026 cheat sheet](assets/aspnet/aspnet-core-2026-cheat-sheet.jpg)

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

---

<a id="topic-5"></a>

## 5. Routing

### What to Learn

- Conventional routing
- Attribute routing
- Endpoint routing
- Area routing
- Route parameters
- Optional route parameters
- Route constraints
- Route templates
- Route names

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

---

<a id="topic-6"></a>

## 6. Controllers and Actions

### What to Learn

- Controller basics
- Action methods
- Action results
- `IActionResult`
- `ActionResult<T>`
- `Controller`
- `ControllerBase`
- Status code results
- Content results
- File results
- Redirect results
- Controller base classes

Controllers handle incoming requests and return responses.

### `Controller` vs `ControllerBase`

| Feature | `Controller` | `ControllerBase` |
| --- | --- | --- |
| Namespace | `Microsoft.AspNetCore.Mvc` | `Microsoft.AspNetCore.Mvc` |
| Used in | MVC applications | Web API |
| Supports views | Yes | No |
| Returns HTML | Yes | No |
| Returns JSON | Yes | Yes |
| View support | `View()` available | Not available |
| Razor support | Yes | No |
| TempData/ViewBag/ViewData | Yes | No |
| API support | Yes | Yes |
| Lightweight | No | Yes |
| Best for | MVC + Razor views | REST APIs |
| Base class | Inherits from `ControllerBase` | Base API class |

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

---

<a id="topic-7"></a>

## 7. MVC Views and Data Passing

### What to Learn

- Passing model to view
- Strongly typed views
- `@model`
- `ViewData`
- `ViewBag`
- `TempData`
- ViewModel
- Razor view basics

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

---

<a id="topic-8"></a>

## 8. Web API Fundamentals

### What to Learn

- What is Web API?
- REST basics
- REST constraints
- HTTP methods
- GET
- POST
- PUT
- PATCH
- DELETE
- HTTP status codes
- Request body
- Response body
- JSON/XML responses
- DTOs
- API versioning basics
- Swagger/OpenAPI
- Content negotiation
- Web API vs MVC controller
- Web API vs WCF

Web API is used to build HTTP services. It allows communication between applications over HTTP and commonly returns data in JSON or XML format.

Common clients:

- Web applications
- Mobile applications
- Angular, React, Vue applications
- Desktop applications
- Third-party integrations

### Web API Advantages
![Web API versioning with MapToApiVersion](assets/aspnet/api-versioning-maptoapiversion.jpg)

- Supports multiple clients
- Supports JSON and XML responses
- Lightweight and faster than SOAP services
- Easy integration with frontend frameworks
- Uses standard HTTP methods
- Supports REST architecture
- Platform-independent communication

### REST Constraints
![REST architecture diagram](assets/aspnet/rest-architecture.png)

![Common HTTP status codes reference](assets/aspnet/http-status-codes.gif)

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
![Content negotiation with Accept JSON and XML](assets/aspnet/content-negotiation-json-xml.png)

![Client to Web API HTTP JSON flow](assets/aspnet/client-webapi-http-json-flow.png)

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

---

<a id="topic-9"></a>

## 9. Model Binding and Validation

### What to Learn

- Model binding
- Binding from route
- Binding from query string
- Binding from request body
- Binding from headers
- Data annotations
- Model validation
- `ModelState`
- Custom validation attributes
- FluentValidation basics

Model binding maps HTTP request data to action method parameters or model objects.

Common binding sources:

- Route values
- Query string
- Request body
- Headers
- Form data

---

<a id="topic-10"></a>

## 10. Dependency Injection

### What to Learn

- What is dependency injection?
- Why use dependency injection?
- Problems without dependency injection
- Constructor injection
- Property injection
- Method injection
- Built-in dependency injection container
- Service registration
- Service lifetimes
- Transient
- Scoped
- Singleton
- `IServiceCollection`
- `IServiceProvider`
- Common lifetime mistakes

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
![ASP.NET Core DI service lifetimes simplified](assets/aspnet/di-service-lifetimes.jpg)

| Lifetime | Meaning | Common Use |
| --- | --- | --- |
| `AddTransient` | Creates a new object every time requested | Temporary calculation service |
| `AddScoped` | Creates one object per HTTP request | Request-specific services |
| `AddSingleton` | Creates one object for entire application lifetime | Cache service, logger service |

Important points:

- Constructor injection is most recommended.
- Scoped is commonly used in ASP.NET Core web applications.
- Singleton services should be thread-safe.

---

<a id="topic-11"></a>

## 11. Configuration and Options Pattern
![IOptions vs IOptionsSnapshot vs IOptionsMonitor](assets/aspnet/options-interfaces-comparison.png)

### What to Learn

- `appsettings.json`
- Environment-specific settings
- Environment variables
- User secrets
- Configuration providers
- `IConfiguration`
- Options pattern
- `IOptions<T>`
- `IOptionsSnapshot<T>`
- `IOptionsMonitor<T>`

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

---

<a id="topic-12"></a>

## 12. Logging and Error Handling
![Serilog structured logging vs plain text logging](assets/aspnet/serilog-structured-logging.jpg)

![Global error handling with ProblemDetails](assets/aspnet/global-error-handling-problemdetails.jpg)

![OpenTelemetry tracing and metrics setup](assets/aspnet/opentelemetry-tracing-metrics.jpg)

### What to Learn

- Built-in logging
- Log levels
- Structured logging
- Exception handling middleware
- Developer exception page
- Global exception handling
- Problem Details
- Custom error response
- Correlation ID basics

Common use cases:

- Log request and response details
- Log exceptions
- Centralize error handling
- Return consistent error responses

---

<a id="topic-13"></a>

## 13. Filters

### What to Learn

- Authorization filters
- Resource filters
- Action filters
- Exception filters
- Result filters
- Endpoint filters
- Filter execution order
- Custom filters
- Service filters
- Type filters
- Middleware vs filters

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

---

<a id="topic-14"></a>

## 14. Authentication, Authorization, and JWT

### What to Learn

- Authentication vs authorization
- Claims
- Roles
- Principal
- Identity
- JWT authentication
- JWT structure
- Access token
- Refresh token
- Cookie authentication
- ASP.NET Core Identity basics
- `[Authorize]`
- `[AllowAnonymous]`
- Authorization header

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

### JWT Token
![How JWT authentication works in ASP.NET Core](assets/aspnet/jwt-authentication-flow.jpg)

![Two-factor authentication with TOTP in ASP.NET Core](assets/aspnet/tfa-totp-implementation.jpg)

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

### Claims, Roles, Identity, and Principal
![Roles vs Claims comparison](assets/aspnet/roles-vs-claims.png)

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

---

<a id="topic-15"></a>

## 15. OAuth, OpenID Connect, and SSO

### What to Learn

- OAuth
- OpenID
- OpenID Connect
- JWT token format
- Microsoft Identity Platform
- Microsoft Entra ID
- IdentityServer4
- Duende IdentityServer
- Single Sign-On

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

---

<a id="topic-16"></a>

## 16. Cookies, Session, TempData, ViewData, and ViewBag
![Web session lifecycle from browser open to close](assets/aspnet/web-session-lifecycle.png)

### What to Learn

- Cookies
- Session management
- Session variables
- TempData
- ViewData
- ViewBag
- Query string
- Hidden fields
- HTTP context
- ViewModel

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

---

<a id="topic-17"></a>

## 17. Minimal APIs
![Controllers vs Minimal APIs comparison](assets/aspnet/controllers-vs-minimal-apis.jpg)

![Primary constructor in ASP.NET Core controller](assets/aspnet/primary-constructor-controller.jpg)

![DTO request/response naming for Web APIs](assets/aspnet/dto-request-response-naming.jpg)

![Avoid binding directly to entities in Minimal APIs](assets/aspnet/minimal-api-dto-overposting-security.jpg)

### What to Learn

- Minimal API basics
- Route handlers
- Parameter binding
- Dependency injection in route handlers
- Returning results
- Endpoint filters
- Grouping endpoints
- Minimal API vs controller-based API

Minimal APIs are a lightweight way to build HTTP APIs with less ceremony than controller-based APIs.

```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World");

app.Run();
```

---

<a id="topic-18"></a>

## 18. File Upload and Download

### What to Learn

- `IFormFile`
- Multipart form data
- File size limits
- File validation
- Saving files
- Streaming files
- Returning files from APIs
- Security risks in file upload

---

<a id="topic-19"></a>

## 19. Background Services

### What to Learn

- Hosted services
- `IHostedService`
- `BackgroundService`
- Worker service
- Timed background tasks
- Queued background tasks
- Cancellation tokens
- Logging in background services

---

<a id="topic-20"></a>

## 20. Caching
![Response caching vs output caching vs HybridCache](assets/aspnet/caching-strategies-response-output-hybrid.jpg)

### What to Learn

- In-memory caching
- Distributed caching
- Response caching
- Output caching
- Cache expiration
- Cache invalidation
- Redis basics

---

<a id="topic-21"></a>

## 21. Security Best Practices
![Fixed and sliding window rate limiting in ASP.NET Core](assets/aspnet/rate-limiting-fixed-sliding-window.jpg)

![YARP reverse proxy setup in .NET](assets/aspnet/yarp-reverse-proxy.jpg)

![Ocelot API gateway setup in .NET](assets/aspnet/ocelot-api-gateway.jpg)

### What to Learn

- HTTPS
- CORS
- CSRF
- XSS basics
- SQL injection prevention
- Secure headers
- Secrets management
- Input validation
- Rate limiting
- Avoiding sensitive data in logs
- Securing APIs

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

---

<a id="topic-22"></a>

## 22. Testing ASP.NET Core Applications

### What to Learn

- Unit testing controllers
- Unit testing services
- Integration testing
- `WebApplicationFactory`
- Test server
- Mocking dependencies
- Testing middleware
- Testing APIs

---

<a id="topic-23"></a>

## 23. Deployment and Hosting

### What to Learn

- Development, staging, and production environments
- Publishing an application
- IIS hosting
- Linux hosting
- Docker basics
- Reverse proxy basics
- Health checks
- Configuration in production

Production hosting examples:

- Windows Server: IIS + Kestrel
- Linux Server: Nginx + Kestrel
- Apache + Kestrel

---

<a id="topic-24"></a>

## 24. Performance and Best Practices
![Scaling SignalR with a Redis backplane](assets/aspnet/signalr-redis-backplane.jpg)

### What to Learn

- Async APIs
- Avoiding blocking calls
- Efficient logging
- Response compression
- Caching
- Pagination
- Avoiding over-fetching data
- Proper status codes
- API response consistency
- Monitoring basics

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