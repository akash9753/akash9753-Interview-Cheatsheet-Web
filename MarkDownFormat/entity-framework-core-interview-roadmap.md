# Entity Framework Core Learning Roadmap for Interview Preparation

## Goal

This roadmap is focused on Entity Framework Core interview preparation.

---

## Topic Index

- 1. Entity Framework Core Basics
- 2. DbContext and DbSet
- 3. Entities and Models
- 4. Relationships
- 5. Configuration
- 6. Migrations
- 7. Querying Data
- 8. Loading Related Data
- 9. Tracking and No Tracking
- 10. CRUD Operations
- 11. Transactions
- 12. Concurrency
- 13. Performance Optimization
- 14. Raw SQL and Stored Procedures
- 15. Repository and Unit of Work
- 16. EF Core with ASP.NET Core
- 17. Testing EF Core Code
- 18. Advanced EF Core Topics
- 19. Security, Diagnostics, and Best Practices

---

## 1. Entity Framework Core Basics

### What to Learn

- What is EF Core?
- ORM concept
- EF vs EF Core vs ADO.NET
- Code-first vs database-first
- Entities, DbContext, DbSet

EF Core is an ORM that maps C# classes to database tables so you work with objects instead of raw SQL for most operations.

| Technology | Type | Change tracking | Migrations | Performance | Best for |
| --- | --- | --- | --- | --- | --- |
| ADO.NET | Low-level data access | No | Manual SQL scripts | Fastest (manual) | Full SQL control, legacy apps |
| EF 6 (.NET Framework) | ORM | Yes | Code-first / DB-first | Moderate | Legacy .NET Framework apps |
| EF Core | Modern ORM | Yes | Code-first migrations | Good — improving each version | .NET Core / .NET 5+ apps |

| Approach | Meaning |
| --- | --- |
| Code-first | Create entity classes first, then generate database using migrations |
| Database-first | Generate entity classes from an existing database |
| ADO.NET | Manual SQL and connection handling |
| EF Core | Object-based data access with change tracking and LINQ |

| Question | Answer |
| --- | --- |
| What is an ORM? | Maps database tables to C# objects — write LINQ instead of raw SQL |
| Why EF Core over EF 6? | Cross-platform, faster, modular, active development, .NET Core+ |
| Code-first vs Database-first? | Code-first = entities drive schema; DB-first = scaffold from existing DB |
| What is a DbContext? | Session/unit of work with the database — tracks changes, runs queries |
| What is a DbSet? | Represents a table — `DbSet<Book>` = Books table |

**Must-know points:**
- EF Core supports SQL Server, PostgreSQL, SQLite, MySQL, Cosmos DB
- EF Core is **not** EF 6 — they are different products
- Code-first uses **migrations** to evolve schema over time
- EF translates LINQ to SQL at runtime (provider-specific)

```csharp
// Code-first: entity + DbContext
public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Book> Books => Set<Book>();
}
```

---

## 2. DbContext and DbSet

### What to Learn

- Role of `DbContext` and `DbSet`
- `DbContextOptions`, connection string, DI registration
- `OnConfiguring`, `OnModelCreating`
- DbContext lifetime and thread safety

`DbContext` is the main session with the database. `DbSet<T>` represents a table/collection of entities.

```csharp
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Book> Books { get; set; }
    public DbSet<Author> Authors { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
    }
}
```

Register in ASP.NET Core:

```csharp
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
```

`DbContext` is **not thread-safe**. Use one instance per request/operation, not shared across threads.

| Concept | Role |
| --- | --- |
| `DbContext` | Gateway to DB — connection, change tracking, `SaveChanges`, LINQ |
| `DbSet<T>` | Collection representing a table |
| `OnModelCreating` | Fluent API configuration — relationships, indexes, filters |
| `OnConfiguring` | Runtime config when not using DI (rare in ASP.NET Core) |
| `DbContextOptions` | Provider + connection string passed via constructor |

### DbContext Lifetime in ASP.NET Core

| Lifetime | Safe for DbContext? | Why |
| --- | --- | --- |
| Scoped | **Yes (default)** | One context per HTTP request — recommended |
| Transient | Possible but wasteful | New context every injection — more connections |
| Singleton | **Never** | Not thread-safe, stale state, memory leak risk |

| Question | Answer |
| --- | --- |
| Is DbContext thread-safe? | No — never share across threads or register as Singleton |
| Why Scoped in ASP.NET Core? | One request = one unit of work = one consistent snapshot |
| What does `SaveChanges()` do? | Detects tracked changes, generates SQL INSERT/UPDATE/DELETE in one transaction |
| `AddDbContext` vs `AddDbContextFactory`? | Factory creates new contexts on demand — useful in Blazor, background jobs |

**Must-know points:**
- `DbContext` implements IDisposable — always scoped/disposed per request
- `ApplyConfigurationsFromAssembly()` loads all `IEntityTypeConfiguration<T>` classes
- `Set<Book>()` and `DbSet<Book>` are equivalent

---

## 3. Entities and Models

### What to Learn

- Entity classes, primary keys, foreign keys
- Navigation properties, required/optional fields
- Shadow properties, owned types, value objects

EF Core detects primary keys by convention: `Id` or `{ClassName}Id`.

```csharp
public class Book
{
    public int Id { get; set; }              // PK by convention
    public string Title { get; set; }
    public decimal Price { get; set; }
    public int AuthorId { get; set; }        // FK
    public Author Author { get; set; }       // Navigation property
}

public class Author
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<Book> Books { get; set; }
}
```

Explicit key and required field:

```csharp
public class Book
{
    [Key]
    public int BookId { get; set; }

    [Required, MaxLength(200)]
    public string Title { get; set; }
}
```

Owned type example:

```csharp
public class Order
{
    public int Id { get; set; }
    public Address ShippingAddress { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
}

// Fluent API
modelBuilder.Entity<Order>().OwnsOne(o => o.ShippingAddress);
```

| Concept | Meaning |
| --- | --- |
| Navigation property | Reference to related entity (`Author`, `List<Book>`) |
| Foreign key (FK) | Column linking to parent table PK (`AuthorId`) |
| Shadow property | Column in DB not defined on C# class — set via Fluent API |
| Owned type | Value object embedded in parent table (e.g. `Address`) |
| Conventional PK | `Id` or `{ClassName}Id` auto-detected by EF |

| Data annotation | Purpose |
| --- | --- |
| `[Key]` | Primary key |
| `[Required]` | NOT NULL column |
| `[MaxLength(n)]` | String length limit |
| `[ForeignKey("AuthorId")]` | Explicit FK mapping |
| `[NotMapped]` | Exclude property from database |

### Entity vs Model vs DTO

In interviews, **model** is the vague term — always clarify which layer you mean.

| Aspect | Entity | Model (ViewModel / domain) | DTO |
| --- | --- | --- | --- |
| Purpose | Map to a database table | Shape data for UI or app logic | Transfer data across boundaries (API, services) |
| Layer | Data / persistence | Presentation or domain | API contract / service boundary |
| EF mapping | Yes — `DbSet<T>`, tracked by `DbContext` | Usually not mapped to DB | Never mapped to DB |
| Navigation properties | Yes (`Author`, `List<Book>`) | Sometimes (flattened for views) | No — flat, only needed fields |
| Tracking / change detection | Yes (when attached) | No | No |
| Validation | Data annotations + Fluent API | UI validation, display metadata | Input validation for API contracts |
| Typical use | `SaveChanges`, queries inside repository | MVC views, forms, Razor pages | REST request/response, gRPC messages |

```csharp
// Entity — persistence shape (maps to Books table)
public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
    public decimal Price { get; set; }
    public int AuthorId { get; set; }
    public Author Author { get; set; }
}

// Model / ViewModel — UI shape (MVC, Blazor forms)
public class BookEditViewModel
{
    public int Id { get; set; }
    public string Title { get; set; }
    public decimal Price { get; set; }
    public int AuthorId { get; set; }
    public List<SelectListItem> Authors { get; set; }  // dropdown data for the view
}

// DTO — API contract (no navigation, no EF concerns)
public record BookListDto(int Id, string Title, string AuthorName);
public record CreateBookDto(string Title, decimal Price, int AuthorId);
```

| Question | Answer |
| --- | --- |
| Entity vs DTO? | Entity = DB table mapping with relationships and tracking; DTO = flat contract for input/output — never expose entities from APIs |
| What is a "model" in .NET? | Context-dependent: in EF docs it often means entity; in MVC it means ViewModel; in Clean Architecture it may mean domain object — state the layer |
| Why not return entities from APIs? | Over-posting risk, leaks internal schema, circular JSON from navigations, unnecessary columns, harder to version |
| Entity → DTO mapping? | Project in query: `.Select(b => new BookListDto(...))` — EF translates to SQL and fetches only needed columns |
| Can a DTO be used as entity? | No — DTOs lack EF configuration, navigations, and should not be in `DbSet<T>` |

**Must-know points:**
- Reference navigation = single related entity; collection navigation = `List<T>`
- Nullable FK (`int?`) = optional relationship
- Owned types are stored in same table (or separate columns), not a separate entity table
- `ValueGeneratedOnAdd()` for identity/auto-increment columns

---

## 4. Relationships

### What to Learn

- One-to-one, one-to-many, many-to-many
- Required vs optional relationships
- Cascade delete, self-referencing

| Relationship | Example |
| --- | --- |
| One-to-one | Book → BookDetail |
| One-to-many | Author → Books |
| Many-to-many | Students ↔ Courses |

One-to-many:

```csharp
public class Author
{
    public int Id { get; set; }
    public List<Book> Books { get; set; }
}

public class Book
{
    public int Id { get; set; }
    public int AuthorId { get; set; }
    public Author Author { get; set; }
}
```

Many-to-many (EF Core 5+):

```csharp
public class Student
{
    public int Id { get; set; }
    public List<Course> Courses { get; set; }
}

public class Course
{
    public int Id { get; set; }
    public List<Student> Students { get; set; }
}
```

Fluent API with cascade delete:

```csharp
modelBuilder.Entity<Book>()
    .HasOne(b => b.Author)
    .WithMany(a => a.Books)
    .HasForeignKey(b => b.AuthorId)
    .OnDelete(DeleteBehavior.Cascade);
```

| Relationship | FK location | Navigation setup |
| --- | --- | --- |
| One-to-many | FK on "many" side (`Book.AuthorId`) | `Author.Books` + `Book.Author` |
| One-to-one | FK on dependent side | `HasOne().WithOne()` |
| Many-to-many (EF Core 5+) | Join table auto-created | `List<Course>` on both sides |

### DeleteBehavior Options

| Behavior | On parent delete | Use case |
| --- | --- | --- |
| `Cascade` | Deletes children automatically | Default for required relationships |
| `Restrict` | Blocks delete if children exist | Safer — prevent accidental deletes |
| `SetNull` | Sets FK to null | Optional relationships |
| `NoAction` | DB handles it (may error) | Database-level rules |

| Question | Answer |
| --- | --- |
| How does EF Core 5+ handle many-to-many? | Skip entity — two `List<T>` nav properties, join table auto-managed |
| Required vs optional relationship? | Required = non-nullable FK; optional = nullable FK (`int?`) |
| Self-referencing relationship? | Employee → Manager — same entity, FK points to same table |

**Must-know points:**
- Fluent API: `HasOne`, `WithMany`, `HasForeignKey`, `OnDelete`
- Loading related data requires navigation properties configured correctly
- Cascade delete can cause unintended mass deletes — use `Restrict` when unsure

---

## 5. Configuration

### What to Learn

- Data annotations vs Fluent API
- `IEntityTypeConfiguration<T>`
- Table/column mapping, indexes, defaults

Data annotations:

```csharp
[Table("tb_books")]
public class Book
{
    [Key]
    public int Id { get; set; }

    [Column("BookName"), Required, MaxLength(100)]
    public string Title { get; set; }
}
```

Fluent API (preferred for complex rules):

```csharp
public class BookConfiguration : IEntityTypeConfiguration<Book>
{
    public void Configure(EntityTypeBuilder<Book> builder)
    {
        builder.ToTable("tb_books");
        builder.HasKey(b => b.Id);
        builder.Property(b => b.Title).HasMaxLength(100).IsRequired();
        builder.HasIndex(b => b.Title);
        builder.Property(b => b.Price).HasDefaultValue(0);
    }
}
```

| Approach | Best for |
| --- | --- |
| Data annotations | Simple rules on entity class |
| Fluent API | Complex mapping, indexes, relationships |

| Feature | Data annotations | Fluent API |
| --- | --- | --- |
| Location | On entity class properties | `OnModelCreating` or `IEntityTypeConfiguration` |
| Relationships | Limited | Full control — cascade, join table, etc. |
| Indexes | `[Index]` attribute | `HasIndex()` |
| Table/column rename | `[Table]`, `[Column]` | `ToTable()`, `Property().HasColumnName()` |
| Seeding | `[Key]` required | `HasData()` in Fluent API |
| Best practice | Simple projects | **Preferred** for production — keeps entities clean |

| Question | Answer |
| --- | --- |
| Fluent API vs Data annotations? | Fluent API for complex rules; annotations for simple validation |
| What is `IEntityTypeConfiguration<T>`? | Separate class per entity — clean, testable configuration |
| How to add composite key? | Fluent API only: `HasKey(e => new { e.Id1, e.Id2 })` |
| How to set default value? | `.Property(x => x.Status).HasDefaultValue("Active")` |

**Must-know points:**
- `ApplyConfigurationsFromAssembly()` registers all configuration classes
- Unique index: `.HasIndex(x => x.Email).IsUnique()`
- Composite index: `.HasIndex(x => new { x.FirstName, x.LastName })`

---

## 6. Migrations

### What to Learn

- Create, apply, remove, rollback migrations
- Migration history, SQL scripts, production updates

Migrations track schema changes over time and apply them to the database.

```powershell
# Package Manager Console
Add-Migration InitialCreate
Update-Database
Remove-Migration
Update-Database AddBookToDb   # rollback/forward to specific migration
```

CLI:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet ef migrations script     # generate SQL script
```

Each migration creates `Up()` and `Down()` methods to apply or revert changes.

| Command | Purpose |
| --- | --- |
| `dotnet ef migrations add Name` | Create new migration from model changes |
| `dotnet ef database update` | Apply pending migrations to database |
| `dotnet ef migrations remove` | Remove last **unapplied** migration |
| `dotnet ef migrations script` | Generate SQL script for production/CI |
| `dotnet ef database update PreviousMigration` | Rollback to specific migration |

| Question | Answer |
| --- | --- |
| What is a migration? | C# snapshot of schema change with `Up()` and `Down()` methods |
| How to deploy migrations to production? | Run SQL script or `dotnet ef database update` in CI/CD pipeline |
| What is `__EFMigrationsHistory` table? | Tracks which migrations have been applied |
| Can you edit a migration after applying? | No — create a new migration instead |
| Code-first workflow? | Change entity → add migration → update database |

**Production best practices:**
- Review generated SQL before applying to production
- Never delete applied migrations from history
- Use idempotent scripts for zero-downtime deployments when possible
- Back up database before major schema changes

---

## 7. Querying Data

### IEnumerable vs IQueryable

| Feature | `IEnumerable<T>` | `IQueryable<T>` |
| --- | --- | --- |
| Namespace | `System.Collections.Generic` | `System.Linq` |
| Execution | In-memory (client-side) | Deferred — runs on database server |
| Data source | Collections, lists, arrays | EF Core `DbSet`, ORM queries |
| LINQ provider | LINQ to Objects | LINQ to Entities (translates to SQL) |
| When query runs | After `.ToList()`, `foreach`, etc. | When query is enumerated / materialized |
| Best for | In-memory filtering after fetch | Database queries — filter before fetch |
| Performance risk | Can load entire table then filter in C# | Efficient SQL with `WHERE`, `JOIN` in DB |

**Quick revision:**
- `IQueryable` = query built in C#, executed as SQL on the server
- `IEnumerable` = data already in memory or fully loaded
- Always filter with `Where()` **before** `ToList()` on EF queries
- Calling `.AsEnumerable()` forces client-side evaluation — use only when needed

### Where().First() vs First(predicate)

| Approach | Code | SQL behavior |
| --- | --- | --- |
| `Where().First()` | `.Where(b => b.Price > 10).First()` | `WHERE Price > 10` + returns first row |
| `First(predicate)` | `.First(b => b.Price > 10)` | Same — combined into one SQL query |
| `Where().FirstOrDefault()` | `.Where(...).FirstOrDefault()` | Same filter, returns null if none |
| `FirstOrDefault(predicate)` | `.FirstOrDefault(b => ...)` | Preferred shorthand — same result |

**Quick revision:**
- Both approaches translate to similar SQL — prefer `FirstOrDefault(predicate)` for readability
- Use `FirstOrDefault` when no match is possible; `First` throws if empty
- Never call `First()` on unfiltered `DbSet` — always add a filter

### FirstOrDefaultAsync vs SingleOrDefaultAsync

| Method | Returns when 0 rows | Returns when 1 row | Returns when 2+ rows |
| --- | --- | --- | --- |
| `FirstOrDefaultAsync` | `null` | The row | The **first** row (no error) |
| `SingleOrDefaultAsync` | `null` | The row | **Throws** `InvalidOperationException` |
| `FirstAsync` | Throws | The row | First row |
| `SingleAsync` | Throws | The row | Throws |

**When to use:**
- `FirstOrDefault` — get any matching row (e.g. latest order, any active user)
- `SingleOrDefault` — expect **at most one** row (e.g. by unique email, primary key lookup)
- `FindAsync(id)` — best for primary key lookup (checks change tracker first)

### Client-side vs Server-side Filtering

| Pattern | What happens | Problem |
| --- | --- | --- |
| `context.Books.ToList().Where(b => b.Price > 10)` | Loads **all** books, filters in C# | Full table scan + memory waste |
| `context.Books.Where(b => b.Price > 10).ToList()` | SQL `WHERE Price > 10` on server | Correct — filter in DB |
| `.AsEnumerable().Where(...)` | Forces client evaluation | Use only for logic that cannot translate to SQL |
| `.ToList()` too early | Materializes before more filters | Always chain filters before `ToList()` |

**Quick revision:**
- Materialization = `ToList()`, `ToArray()`, `foreach`, `Count()` (sometimes)
- Keep query as `IQueryable` until the last possible step
- If EF cannot translate a method, it may throw or silently client-evaluate (older versions)

### SQL Query Patterns — Quick Revision

| LINQ | SQL equivalent | Use case |
| --- | --- | --- |
| `.Where(x => x.Active)` | `WHERE Active = 1` | Filter |
| `.OrderBy(x => x.Name)` | `ORDER BY Name` | Sort ascending |
| `.OrderByDescending(x => x.Date)` | `ORDER BY Date DESC` | Sort descending |
| `.Select(x => new { x.Id, x.Name })` | `SELECT Id, Name` | Projection |
| `.Skip(20).Take(10)` | `OFFSET 20 FETCH NEXT 10` | Pagination |
| `.GroupBy(x => x.CategoryId)` | `GROUP BY CategoryId` | Aggregation |
| `.Any(x => x.Price > 100)` | `EXISTS (...)` | Exists check — faster than `Count() > 0` |
| `.Count(x => x.Active)` | `SELECT COUNT(...)` | Count with filter |
| `.Distinct()` | `SELECT DISTINCT` | Remove duplicates |
| `.Join(...)` | `INNER JOIN` | Join tables |

### SQL Optimization — Filter Early, Join Later

| Rule | Bad | Good |
| --- | --- | --- |
| Filter before join | Join all tables, then `Where` | `Where` first, then `Include` / `Join` |
| Select only needed columns | `ToList()` full entity | `.Select(dto => new { ... })` |
| Paginate large sets | Load all rows | `.Skip().Take()` in SQL |
| Avoid N+1 | Loop + query per item | `.Include()` or single projection query |
| Index filtered columns | Full scan on `WHERE Email` | Index on `Email`, `CategoryId`, FK columns |

**Quick revision:**
- Push filters as close to the data source as possible
- Join only tables/columns needed for the result
- Use `EXISTS` / `Any()` instead of `Count() > 0` for existence checks

### What to Learn

- LINQ to Entities, filtering, sorting, grouping, joins
- Projection, paging, query execution flow

```csharp
// Filter + sort
var books = context.Books
    .Where(b => b.Price > 10)
    .OrderBy(b => b.Title)
    .ToList();

// Projection (fetch only needed columns)
var names = context.Books
    .Select(b => new { b.Id, b.Title })
    .ToList();

// Group
var byAuthor = context.Books
    .GroupBy(b => b.AuthorId)
    .Select(g => new { AuthorId = g.Key, Count = g.Count() })
    .ToList();

// Pagination
var page = context.Books
    .OrderBy(b => b.Id)
    .Skip(20)
    .Take(10)
    .ToList();
```

Query execution flow:

1. Open connection
2. Translate LINQ to SQL
3. Execute query
4. Map results to entities
5. Close connection

Use `ToListAsync()` in async apps instead of `ToList()`.

| Question | Answer |
| --- | --- |
| Difference between `IEnumerable` and `IQueryable`? | `IQueryable` executes on DB server; `IEnumerable` in memory |
| When does EF execute the query? | On materialization — `ToList`, `First`, `foreach`, etc. |
| `First` vs `FirstOrDefault`? | `First` throws if empty; `FirstOrDefault` returns null |
| `Single` vs `First`? | `Single` throws if more than one match; `First` returns first match |
| What is deferred execution? | Query not run until enumerated — allows chaining `Where`, `OrderBy` |
| Can all LINQ methods translate to SQL? | No — some methods force client evaluation |

---

## 8. Loading Related Data

### Include vs Select

| Feature | `.Include()` / `.ThenInclude()` | `.Select()` projection |
| --- | --- | --- |
| Purpose | Load full related entities | Load only chosen columns/DTO |
| Tracking | Tracked entities (unless `AsNoTracking`) | Usually no tracking needed |
| SQL | JOIN or multiple queries | Custom `SELECT` with JOIN |
| Over-fetching | Can load all columns of related tables | Fetches only what you specify |
| Best for | Updates, full object graphs | Read APIs, reports, list views |
| N+1 fix | Yes — eager loads in one query | Yes — single shaped query |

```csharp
// Include — full Author + Books entities
var authors = context.Authors.Include(a => a.Books).ToList();

// Select — only needed fields (faster)
var dto = context.Authors
    .Select(a => new { a.Name, BookCount = a.Books.Count })
    .ToList();
```

**Quick revision:**
- Use `Include` when you need full entities for update/display
- Use `Select` for read-only APIs — less memory, less data transfer
- `Select` + DTO is usually the fastest read pattern

### Single Query vs Split Query

| Feature | Default (single query) | `.AsSplitQuery()` |
| --- | --- | --- |
| SQL | One query with JOINs | Multiple separate SQL queries |
| Risk | Cartesian explosion with multiple `Include` | Avoids duplicate parent rows |
| Performance | Fast for 1 include | Better for multiple collection includes |
| Result | Duplicated parent data in result set | Clean separate result sets |

**Cartesian explosion example:** `Include(a => a.Books).Include(a => a.Reviews)` — one author with 10 books and 10 reviews = 100 rows in SQL result.

**Quick revision:**
- Multiple collection `Include`s → use `.AsSplitQuery()`
- Single `Include` on one navigation → default single query is fine
- Always measure — split query trades one round-trip for multiple

### What to Learn

- Eager, lazy, explicit loading
- `Include`, `ThenInclude`, N+1 problem

| Strategy | When to use |
| --- | --- |
| Eager loading | Related data needed immediately |
| Lazy loading | Related data needed later (requires proxies) |
| Explicit loading | Load related data on demand manually |

Eager loading:

```csharp
var authors = context.Authors
    .Include(a => a.Books)
    .ToList();
```

Nested include:

```csharp
var orders = context.Orders
    .Include(o => o.Customer)
    .ThenInclude(c => c.Address)
    .ToList();
```

Explicit loading:

```csharp
var author = context.Authors.First();
context.Entry(author).Collection(a => a.Books).Load();
```

N+1 problem: loading parent list then querying each child separately. Fix with `Include()` or projection.

| Question | Answer |
| --- | --- |
| What is N+1 problem? | 1 query for parents + N queries for each child's related data |
| Eager vs Lazy vs Explicit loading? | Eager = `Include` upfront; Lazy = on access (proxy); Explicit = `Entry().Load()` |
| `Include` vs `ThenInclude`? | `Include` = first level; `ThenInclude` = nested navigation |
| Does lazy loading work by default? | No — requires `UseLazyLoadingProxies()` and virtual navigation properties |
| How to fix N+1? | `Include()`, projection with `Select`, or split query |

### Loading Strategies Comparison

| Strategy | How | When |
| --- | --- | --- |
| Eager | `.Include(a => a.Books)` | Know you need related data upfront |
| Explicit | `context.Entry(author).Collection(a => a.Books).Load()` | Load on demand, no proxies |
| Lazy | Access `author.Books` triggers query | Rare — hidden queries, N+1 risk |

---

## 9. Tracking and No Tracking

### AsNoTracking vs Default Tracking

| Feature | Default (tracking) | `AsNoTracking()` |
| --- | --- | --- |
| Change detection | Yes — EF watches modifications | No |
| Memory | Higher — snapshot of entities | Lower |
| `SaveChanges` updates | Yes — auto-detects changes | No — must attach/update manually |
| Best for | Update/delete workflows | Read-only APIs, reports, dropdowns |
| Performance | Slower reads | Faster reads |
| Identity resolution | Same instance for same PK in context | New instance each query |

**Quick revision:**
- Default tracking = EF knows what changed and writes UPDATE on `SaveChanges`
- `AsNoTracking()` = read-only, no overhead — use for GET endpoints
- To update after `AsNoTracking`: attach entity and set state, or query with tracking
- `AsNoTrackingWithIdentityResolution()` — no tracking but same PK returns same instance

### What to Learn

- Change tracking, entity states
- `AsNoTracking`, `AsTracking`

EF Core tracks entities by default and detects changes for `SaveChanges()`.

| State | Meaning |
| --- | --- |
| Added | Will be inserted |
| Modified | Will be updated |
| Deleted | Will be deleted |
| Unchanged | No changes |
| Detached | Not tracked |

Read-only query (faster, no tracking overhead):

```csharp
var books = context.Books
    .AsNoTracking()
    .Where(b => b.Price > 10)
    .ToList();
```

Check entity state:

```csharp
var state = context.Entry(book).State;  // Modified, Added, etc.
```

Use tracking for updates; use `AsNoTracking()` for read-only APIs and reports.

| Question | Answer |
| --- | --- |
| What is change tracking? | EF snapshots entities and detects modifications for `SaveChanges` |
| Entity states? | Added, Modified, Deleted, Unchanged, Detached |
| When to use `AsNoTracking`? | Read-only queries — APIs, reports, dropdowns |
| How to update detached entity? | `context.Update(entity)` or attach and set state to Modified |
| `Attach` vs `Update`? | `Attach` = Unchanged state; `Update` = all properties marked Modified |

---

## 10. CRUD Operations

### SaveChanges vs ExecuteUpdate / ExecuteDelete (EF Core 7+)

| Feature | `SaveChanges` + tracked entities | `ExecuteUpdate` / `ExecuteDelete` |
| --- | --- | --- |
| Loads data into memory | Yes | No — runs SQL directly |
| Change tracking | Required | Not used |
| Use case | Single entity CRUD | Bulk update/delete |
| SQL | `UPDATE` per entity | One `UPDATE`/`DELETE` statement |
| Events/interceptors | Fires `SaveChanges` pipeline | Bypasses change tracker |
| Performance | Slow for thousands of rows | Fast for bulk operations |

```csharp
// Bulk update — no load into memory
await context.Books
    .Where(b => b.Price == 0)
    .ExecuteUpdateAsync(s => s.SetProperty(b => b.Price, 9.99m));

// Bulk delete
await context.Books
    .Where(b => b.IsDeleted)
    .ExecuteDeleteAsync();
```

### Projection vs Full Entity Loading

| Feature | Full entity `.ToList()` | `.Select()` to DTO |
| --- | --- | --- |
| Columns fetched | All columns | Only selected columns |
| Navigation properties | May lazy-load or need Include | Shaped in one query |
| Memory usage | High | Low |
| Network/DB load | High | Low |
| Tracking overhead | Yes (default) | Usually none |
| Best for | Edit forms, domain logic | List APIs, grids, reports |

```csharp
// Bad for list API — loads everything
var books = context.Books.Include(b => b.Author).ToList();

// Good — only what UI needs
var books = context.Books
    .Select(b => new BookListDto
    {
        Id = b.Id,
        Title = b.Title,
        AuthorName = b.Author.Name
    })
    .AsNoTracking()
    .ToList();
```

**Quick revision:**
- Never return full entities from list/search APIs — project to DTO
- Combine `Select` + `AsNoTracking` for fastest reads
- Use `ExecuteUpdate`/`ExecuteDelete` for bulk ops without loading entities

### What to Learn

- Insert, read, update, delete
- `SaveChanges`, `SaveChangesAsync`

Create:

```csharp
var book = new Book { Title = "EF Core Guide", Price = 29.99m };
context.Books.Add(book);
await context.SaveChangesAsync();
```

Read:

```csharp
var book = await context.Books.FindAsync(1);
var list = await context.Books.Where(b => b.Price > 10).ToListAsync();
```

Update:

```csharp
var book = await context.Books.FindAsync(1);
book.Price = 19.99m;
await context.SaveChangesAsync();
```

Delete:

```csharp
var book = await context.Books.FindAsync(1);
context.Books.Remove(book);
await context.SaveChangesAsync();
```

Bulk delete (EF Core 7+):

```csharp
await context.Books.Where(b => b.Price == 0).ExecuteDeleteAsync();
```

| Question | Answer |
| --- | --- |
| `Add` vs `AddRange`? | `AddRange` for bulk insert in one `SaveChanges` call |
| `Remove` vs `RemoveRange`? | `RemoveRange` deletes multiple tracked entities |
| `FindAsync` vs `FirstOrDefault`? | `FindAsync` checks change tracker first, then DB — best for PK |
| `ExecuteDelete` vs `Remove` + `SaveChanges`? | `ExecuteDelete` = SQL DELETE without loading entities — faster bulk |
| `ExecuteUpdate` (EF 7+)? | Bulk UPDATE in SQL without loading — `SetProperty()` |

### CRUD Methods Comparison

| Operation | Tracked approach | Bulk approach (EF 7+) |
| --- | --- | --- |
| Insert | `Add()` + `SaveChanges()` | `AddRange()` + `SaveChanges()` |
| Read | `FindAsync`, LINQ + `ToListAsync` | `FromSql`, projection |
| Update | Modify tracked entity + `SaveChanges()` | `ExecuteUpdateAsync()` |
| Delete | `Remove()` + `SaveChanges()` | `ExecuteDeleteAsync()` |

---

## 11. Transactions

### Transaction Isolation Levels

| Level | Dirty read | Non-repeatable read | Phantom read | Performance | Use case |
| --- | --- | --- | --- | --- | --- |
| Read Uncommitted | Possible | Possible | Possible | Fastest | Rarely used — dirty reads |
| Read Committed | No | Possible | Possible | Default in SQL Server | Most apps (EF default) |
| Repeatable Read | No | No | Possible | Medium | Same row read twice = same value |
| Serializable | No | No | No | Slowest | Strict consistency |
| Snapshot | No | No | No | Good for reads | SQL Server — row versioning |

**Quick revision:**
- **Dirty read** — read uncommitted data from another transaction
- **Non-repeatable read** — same row returns different value in same transaction
- **Phantom read** — new rows appear in repeated range query
- EF `SaveChanges()` uses a transaction — all changes commit or rollback together
- Use `BeginTransactionAsync()` when multiple `SaveChanges` must be atomic

### What to Learn

- Default transaction, manual transactions
- `BeginTransaction`, commit, rollback

`SaveChanges()` runs inside a transaction by default.

Manual transaction:

```csharp
using var transaction = await context.Database.BeginTransactionAsync();
try
{
    context.Books.Add(new Book { Title = "A" });
    context.Authors.Add(new Author { Name = "John" });
    await context.SaveChangesAsync();
    await transaction.CommitAsync();
}
catch
{
    await transaction.RollbackAsync();
    throw;
}
```

`TransactionScope` for distributed transactions across multiple resources.

| Question | Answer |
| --- | --- |
| Is `SaveChanges` transactional? | Yes — all changes in one transaction by default |
| When use manual transaction? | Multiple `SaveChanges` calls must succeed or fail together |
| `Commit` vs `SaveChanges`? | `SaveChanges` auto-commits; manual needs explicit `CommitAsync()` |
| What happens on exception? | Transaction rolls back — no partial saves |
| `TransactionScope` use case? | Multiple DbContexts or DB + message queue — distributed transaction |

---

## 12. Concurrency

### Optimistic vs Pessimistic Concurrency

| Feature | Optimistic | Pessimistic |
| --- | --- | --- |
| Locking | No lock during read | Row/table locked during transaction |
| Conflict detection | At `SaveChanges` via concurrency token | Prevented by lock |
| EF Core support | Default — `[Timestamp]` / `RowVersion` | Raw SQL `WITH (UPDLOCK)` |
| Performance | Better for low-conflict apps | Better when conflicts are frequent |
| Exception | `DbUpdateConcurrencyException` | Blocking/waiting on locked rows |
| Best for | Web apps, most CRUD | Financial systems, seat booking |

### What to Learn

- Optimistic vs pessimistic concurrency
- Row version, concurrency tokens
- `DbUpdateConcurrencyException`

Optimistic concurrency (default in EF Core):

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }

    [Timestamp]
    public byte[] RowVersion { get; set; }
}
```

Handle conflict:

```csharp
try
{
    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException)
{
    // Reload entity or ask user to retry
}
```

Pessimistic (raw SQL lock):

```csharp
var emp = context.Employees
    .FromSqlRaw("SELECT * FROM Employees WITH (UPDLOCK) WHERE Id = {0}", id)
    .FirstOrDefault();
```

| Question | Answer |
| --- | --- |
| What is optimistic concurrency? | Check row version at save — throw if another user modified first |
| How to implement in EF Core? | `[Timestamp]` byte[] or Fluent API `IsRowVersion()` / concurrency token |
| `DbUpdateConcurrencyException`? | Thrown when concurrency token mismatch — reload or retry |
| Optimistic vs pessimistic? | Optimistic = no lock, check at save; Pessimistic = lock row during read |
| When use pessimistic? | High-conflict scenarios — bank transfers, seat booking |

---

## 13. Performance Optimization

### 11 Rules to Optimize EF Core

| # | Rule | Why |
| --- | --- | --- |
| 1 | Use `AsNoTracking()` for read-only queries | Less memory, faster |
| 2 | Project with `Select()` to DTOs | Fetch only needed columns |
| 3 | Filter before `ToList()` | SQL `WHERE`, not in-memory filter |
| 4 | Use pagination (`Skip`/`Take`) | Avoid loading huge result sets |
| 5 | Use `Include()` only when needed | Prevent over-fetching |
| 6 | Use `AsSplitQuery()` for multiple includes | Avoid cartesian explosion |
| 7 | Add indexes on filtered/sorted columns | Faster SQL execution |
| 8 | Use compiled queries for hot paths | Reuse query plan |
| 9 | Use `ExecuteUpdate`/`ExecuteDelete` for bulk ops | Skip change tracker |
| 10 | Avoid N+1 — batch with `Include` or projection | One query vs many |
| 11 | Use async methods (`ToListAsync`, etc.) | Free threads under load |

### 8 Common EF Core Performance Mistakes

| Mistake | Problem | Fix |
| --- | --- | --- |
| `ToList()` before `Where()` | Loads entire table | Filter first, materialize last |
| Returning full entities from APIs | Over-fetching all columns | `Select` to DTO |
| Multiple queries in a loop (N+1) | 1 + N database round-trips | `Include` or single projection |
| Tracking on read-only endpoints | Unnecessary snapshot overhead | `AsNoTracking()` |
| Too many `Include`s in one query | Cartesian explosion | `AsSplitQuery()` or reshape query |
| No pagination on large tables | Memory + timeout | `Skip().Take()` |
| `Count()` before `Any()` | Scans all rows | Use `.Any()` for existence |
| Synchronous DB calls | Blocks thread pool | `ToListAsync`, `SaveChangesAsync` |

### Pagination — Correct vs Wrong

| Approach | Code | Result |
| --- | --- | --- |
| Wrong | `books.Skip(page * size).Take(size).ToList()` without `OrderBy` | Unstable/random pages |
| Correct | `.OrderBy(b => b.Id).Skip().Take().ToList()` | Consistent pages |
| Wrong | `books.ToList().Skip(20).Take(10)` | Loads all rows first |
| Correct | `.OrderBy().Skip().Take().ToListAsync()` | SQL `OFFSET/FETCH` |
| Keyset pagination | `.Where(b => b.Id > lastId).Take(10)` | Faster for large tables |

```csharp
var page = await context.Books
    .AsNoTracking()
    .OrderBy(b => b.Id)
    .Skip((pageNumber - 1) * pageSize)
    .Take(pageSize)
    .Select(b => new BookDto { Id = b.Id, Title = b.Title })
    .ToListAsync();
```

### Compiled Queries

| Feature | Normal LINQ | Compiled query |
| --- | --- | --- |
| Query plan | Built each time (cached by EF/SQL Server) | Pre-compiled expression tree |
| Best for | General queries | Hot path — called thousands of times |
| Syntax | Inline LINQ | `EF.CompileAsyncQuery(...)` |
| Parameters | Any | Must be passed as method args |

```csharp
private static readonly Func<AppDbContext, int, Task<Book?>> GetBookById =
    EF.CompileAsyncQuery((AppDbContext ctx, int id) =>
        ctx.Books.AsNoTracking().FirstOrDefault(b => b.Id == id));

// Usage
var book = await GetBookById(context, 5);
```

**Quick revision:**
- Compiled queries help when the **same query shape** runs repeatedly with different parameters
- Not needed for every query — use for proven hot paths

### What to Learn

- `AsNoTracking`, projection, pagination
- Compiled queries, split queries, indexes, N+1 avoidance

Key tips:

- Use `AsNoTracking()` for read-only queries
- Use `Select()` to fetch only needed columns
- Use `Include()` only when related data is required
- Add indexes on frequently filtered columns
- Use pagination for large datasets

Compiled query (reuses query plan):

```csharp
private static readonly Func<AppDbContext, int, Task<Book?>> GetBookById =
    EF.CompileAsyncQuery((AppDbContext ctx, int id) =>
        ctx.Books.FirstOrDefault(b => b.Id == id));
```

Split query (avoids cartesian explosion with multiple includes):

```csharp
var authors = context.Authors
    .Include(a => a.Books)
    .AsSplitQuery()
    .ToList();
```

Connection resiliency:

```csharp
options.UseSqlServer(connectionString, sql =>
    sql.EnableRetryOnFailure(maxRetryCount: 3));
```

| Question | Answer |
| --- | --- |
| Top 3 performance tips? | `AsNoTracking`, projection/DTO, pagination |
| What is N+1 and how to fix? | Multiple queries in loop — use `Include` or single projection |
| What is cartesian explosion? | Multiple `Include` on collections — duplicate rows — use `AsSplitQuery` |
| Compiled queries benefit? | Reuse expression tree for frequently called queries |
| `EnableRetryOnFailure`? | Auto-retry transient SQL errors (connection drops) |

---

## 14. Raw SQL and Stored Procedures

### FromSql — Safe vs Unsafe

| Approach | Example | Safe? |
| --- | --- | --- |
| `FromSqlInterpolated` | `$"SELECT * FROM Books WHERE Id = {id}"` | Yes — parameterized |
| `FromSqlRaw` with params | `FromSqlRaw("... WHERE Id = {0}", id)` | Yes — parameterized |
| String concatenation | `$"SELECT * FROM Books WHERE Id = {userInput}"` | **No — SQL injection** |
| LINQ queries | `.Where(b => b.Id == id)` | Yes — always parameterized |

**Quick revision:**
- Never build SQL with `+` or string concat from user input
- `FromSqlInterpolated` and `FromSqlRaw` with `{0}` placeholders are safe
- LINQ is the safest default — EF parameterizes automatically
- `ExecuteSqlRawAsync` with parameters for non-query commands

### EF Core vs Dapper

| Feature | EF Core | Dapper |
| --- | --- | --- |
| Type | Full ORM | Micro-ORM |
| Change tracking | Yes | No |
| Migrations | Yes | No |
| LINQ support | Yes | No — raw SQL only |
| Performance | Good — can be heavy | Very fast for reads |
| Learning curve | Higher | Lower |
| Best for | CRUD apps, complex models | Reports, hot queries, microservices |
| Mapping | Automatic entity mapping | Manual or simple object mapping |

**When to use Dapper:**
- Hand-tuned SQL for performance-critical reports
- Simple read-only queries where EF overhead is not needed
- Legacy stored procedures with complex result shapes

**When to stay with EF Core:**
- Most CRUD, relationships, migrations, change tracking
- Team productivity and maintainability matter more than micro-seconds

### What to Learn

- `FromSqlRaw`, `FromSqlInterpolated`
- Stored procedures, SQL injection prevention

```csharp
// Parameterized (safe)
var books = context.Books
    .FromSqlInterpolated($"SELECT * FROM Books WHERE Price > {minPrice}")
    .ToList();

// Stored procedure
var results = context.Books
    .FromSqlRaw("EXEC GetBooksByAuthor @AuthorId = {0}", authorId)
    .ToList();

// Execute non-query
await context.Database.ExecuteSqlRawAsync(
    "UPDATE Books SET Price = Price * 1.1 WHERE CategoryId = {0}", categoryId);
```

Always use parameters. Never concatenate user input into SQL strings.

| Question | Answer |
| --- | --- |
| How to prevent SQL injection in EF Core? | Use LINQ, `FromSqlInterpolated`, or parameterized `FromSqlRaw` |
| `FromSqlRaw` vs `FromSqlInterpolated`? | Both safe with params; interpolated is cleaner syntax |
| Can EF Core call stored procedures? | Yes — `FromSqlRaw("EXEC sp_name @p = {0}", param)` |
| EF Core vs Dapper? | EF = full ORM; Dapper = micro-ORM, raw SQL, faster reads |
| When to use raw SQL? | Complex reports, TVPs, performance-tuned queries EF cannot express |

---

## 15. Repository and Unit of Work

### What to Learn

- Repository pattern, Unit of Work
- When it helps vs when it adds unnecessary abstraction

`DbContext` already acts as Unit of Work — it tracks changes and saves them together via `SaveChanges()`.

Simple repository:

```csharp
public interface IBookRepository
{
    Task<Book?> GetByIdAsync(int id);
    Task AddAsync(Book book);
    Task SaveAsync();
}

public class BookRepository : IBookRepository
{
    private readonly AppDbContext _context;
    public BookRepository(AppDbContext context) => _context = context;

    public Task<Book?> GetByIdAsync(int id) => _context.Books.FindAsync(id);
    public Task AddAsync(Book book) => _context.Books.AddAsync(book).AsTask();
    public Task SaveAsync() => _context.SaveChangesAsync();
}
```

Use repository when you need testability or complex query abstraction. Skip it if it only wraps `DbSet` without adding value.

| Question | Answer |
| --- | --- |
| What is Repository pattern? | Abstraction over data access — hides `DbContext` details |
| What is Unit of Work? | Groups multiple operations into one transaction |
| Does EF Core need Repository? | **Debatable** — `DbContext` already is Unit of Work + Repository |
| When to use Repository? | Complex queries, test mocking, multiple data sources |
| When to skip Repository? | Simple CRUD — extra layer with no value |

| DbContext already provides | How |
| --- | --- |
| Unit of Work | `SaveChanges()` commits all tracked changes together |
| Repository | `DbSet<T>` = CRUD for entity type |
| Query | LINQ on `DbSet` |
| Transaction | Implicit in `SaveChanges` or explicit `BeginTransaction` |

**Must-know points:**
- Microsoft does not require Repository pattern with EF Core
- Generic `IRepository<T>` often becomes a pass-through anti-pattern
- Prefer service layer + DbContext directly for most apps

---

## 16. EF Core with ASP.NET Core

### What to Learn

- DI registration, scoped lifetime
- Using EF Core in services, seeding data

```csharp
// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// Service
public class BookService
{
    private readonly AppDbContext _context;
    public BookService(AppDbContext context) => _context = context;

    public Task<List<Book>> GetAllAsync() =>
        _context.Books.AsNoTracking().ToListAsync();
}
```

DbContext is registered as **Scoped** — one instance per HTTP request.

Seed data:

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Book>().HasData(
        new Book { Id = 1, Title = "Sample", Price = 9.99m });
}
```

| Lifetime | Register as | Use case |
| --- | --- | --- |
| Scoped | `AddDbContext` (default) | Web APIs — one context per request |
| Singleton | **Never** for DbContext | Thread-safety issues |
| Factory | `AddDbContextFactory` | Blazor Server, background workers, parallel tasks |

| Question | Answer |
| --- | --- |
| Why Scoped for DbContext? | Aligns with HTTP request — one consistent unit of work |
| Inject DbContext in Singleton service? | **No** — inject `IDbContextFactory` instead |
| How to seed data? | `HasData()` in migration or `DbInitializer` on startup |
| `EnsureCreated` vs Migrations? | `EnsureCreated` = dev only, no migration history; use migrations in production |

**Must-know points:**
- Register provider in `Program.cs`: `UseSqlServer`, `UseNpgsql`, `UseSqlite`
- Connection string from `appsettings.json` via `Configuration`
- Pooling is automatic with ADO.NET — don't create contexts manually per query

---

## 17. Testing EF Core Code

### What to Learn

- In-memory provider, SQLite in-memory
- Integration tests, mocking repositories

SQLite in-memory (better relational behavior):

```csharp
var options = new DbContextOptionsBuilder<AppDbContext>()
    .UseSqlite("DataSource=:memory:")
    .Options;

using var context = new AppDbContext(options);
context.Database.OpenConnection();
context.Database.EnsureCreated();

context.Books.Add(new Book { Title = "Test" });
await context.SaveChangesAsync();

Assert.Equal(1, context.Books.Count());
```

EF Core InMemory (simple unit tests, not full SQL behavior):

```csharp
var options = new DbContextOptionsBuilder<AppDbContext>()
    .UseInMemoryDatabase("TestDb")
    .Options;
```

Prefer SQLite in-memory or a real test database for integration tests.

| Provider | SQL support | Best for |
| --- | --- | --- |
| InMemory | None — fake provider | Quick unit tests, not real SQL behavior |
| SQLite in-memory | Real SQL engine | Integration tests — relational behavior |
| Testcontainers / real DB | Full production parity | CI integration tests |

| Question | Answer |
| --- | --- |
| Can InMemory test LINQ-to-SQL? | No — different provider, many SQL features missing |
| How to test `SaveChanges`? | SQLite in-memory with `EnsureCreated()` |
| Mock DbContext? | Possible but painful — prefer real provider or repository abstraction |
| Integration vs unit test? | Integration = real DB; unit = mock or InMemory |

**Must-know points:**
- InMemory does not enforce FK constraints by default
- Always `OpenConnection()` before `EnsureCreated()` for SQLite in-memory
- Test migrations separately against real database

---

## 18. Advanced EF Core Topics

### Global Query Filters

| Feature | Without filter | With `HasQueryFilter` |
| --- | --- | --- |
| Soft delete | Must add `Where(!x.IsDeleted)` everywhere | Auto-applied to all queries |
| Multi-tenancy | Manual `Where(TenantId == x)` per query | Filter by tenant automatically |
| Override | N/A | `.IgnoreQueryFilters()` to bypass |
| Applies to | N/A | All queries on that entity type |

```csharp
// Soft delete filter — auto-excludes deleted rows
modelBuilder.Entity<Book>().HasQueryFilter(b => !b.IsDeleted);

// Multi-tenant filter
modelBuilder.Entity<Order>().HasQueryFilter(o => o.TenantId == _tenantId);

// Bypass when needed (admin, reports)
var allBooks = context.Books.IgnoreQueryFilters().ToList();
```

**Quick revision:**
- Global filters reduce repeated `Where` clauses
- Always remember `IgnoreQueryFilters()` for admin/audit scenarios
- Filters apply to direct queries and `Include` navigation queries

### Inheritance Mapping Strategies

| Strategy | Tables | Discriminator | Best for |
| --- | --- | --- | --- |
| TPH (Table Per Hierarchy) | 1 table | Yes — type column | Similar subtypes, few null columns |
| TPT (Table Per Type) | 1 per class | No | Normalized schema, many subtype fields |
| TPC (Table Per Concrete) | 1 per concrete class | No | No shared table, distinct subtypes |

### pgvector / Semantic Search (PostgreSQL)

| Feature | Traditional search | pgvector semantic search |
| --- | --- | --- |
| Match type | Exact / `LIKE` / full-text | Meaning-based similarity |
| Extension | Built-in SQL | `pgvector` PostgreSQL extension |
| Use case | Keywords, filters | AI embeddings, similar content |
| EF Core | Standard LINQ | Requires Npgsql + vector type mapping |

**Quick revision:**
- pgvector stores embedding vectors and finds nearest neighbors
- Used for semantic search, recommendations, RAG applications
- Not needed for typical CRUD — advanced PostgreSQL + .NET scenario

### What to Learn

- Global query filters, soft delete
- Interceptors, value converters
- Inheritance mapping (TPH, TPT, TPC)

Soft delete with global filter:

```csharp
public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
    public bool IsDeleted { get; set; }
}

// OnModelCreating
modelBuilder.Entity<Book>().HasQueryFilter(b => !b.IsDeleted);
```

SaveChanges interceptor for audit:

```csharp
public class AuditInterceptor : SaveChangesInterceptor
{
    public override InterceptionResult<int> SavingChanges(
        DbContextEventData eventData, InterceptionResult<int> result)
    {
        // Set CreatedDate, ModifiedDate, etc.
        return base.SavingChanges(eventData, result);
    }
}
```

Inheritance — TPH (single table, discriminator column):

```csharp
modelBuilder.Entity<Payment>()
    .HasDiscriminator<string>("PaymentType")
    .HasValue<CreditCardPayment>("Credit")
    .HasValue<PayPalPayment>("PayPal");
```

| Question | Answer |
| --- | --- |
| TPH vs TPT vs TPC? | TPH = 1 table + discriminator; TPT = table per type; TPC = table per concrete class |
| What is a global query filter? | Auto-applied `WHERE` on all queries — soft delete, multi-tenancy |
| How to bypass global filter? | `.IgnoreQueryFilters()` |
| What is an interceptor? | Hook into EF pipeline — audit fields, logging, soft delete on save |
| Value converter use case? | Map enum to string, encrypt column, custom type serialization |

---

## 19. Security, Diagnostics, and Best Practices

### What to Learn

- SQL injection prevention
- Sensitive data logging, detailed errors
- Async queries, least privilege, input validation

Never enable sensitive logging in production:

```csharp
// Development only
options.UseSqlServer(connectionString)
    .EnableDetailedErrors()
    .EnableSensitiveDataLogging();  // shows parameter values — dev only
```

Best practices:

- Use parameterized queries (`FromSqlInterpolated`, LINQ)
- Use `AsNoTracking()` for read-only endpoints
- Use pagination for large result sets
- Keep DbContext scoped per request
- Use concurrency tokens for shared data updates
- Validate input before saving to prevent over-posting
- Use least-privilege database accounts in production
- Prefer `SaveChangesAsync()` and async LINQ methods

```csharp
// Safe async read
var books = await context.Books
    .AsNoTracking()
    .Where(b => b.Title.Contains(search))
    .Take(50)
    .ToListAsync();
```

| Security topic | Best practice |
| --- | --- |
| SQL injection | LINQ or parameterized raw SQL only |
| Over-posting | Use DTOs for API input — never bind entity directly |
| Sensitive logging | `EnableSensitiveDataLogging()` — **development only** |
| DB account | Least privilege — app user should not be `sa` / admin |
| Connection string | Store in secrets/env vars — never in source code |

| Question | Answer |
| --- | --- |
| How to log EF SQL queries? | `LogTo(Console.WriteLine)` or `EnableSensitiveDataLogging` in dev |
| What is over-posting attack? | Client sends extra fields (e.g. `IsAdmin=true`) bound to entity |
| How to prevent mass assignment? | DTO + `Select` projection — don't expose entity to API |
| Async in EF Core? | Always `ToListAsync`, `SaveChangesAsync` — frees threads |
| Connection resiliency? | `EnableRetryOnFailure()` for transient SQL errors |
