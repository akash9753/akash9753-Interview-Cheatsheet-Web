# C# OOP Learning Roadmap for Interview Preparation

## Goal

This roadmap is focused only on object-oriented programming concepts in C#. Use it separately from the main C# fundamentals roadmap.

---

## Topic Index

<ul>
  <li><a href="#topic-1">1. OOP Basics</a></li>
  <li><a href="#topic-2">2. Constructors</a></li>
  <li><a href="#topic-3">3. Encapsulation</a></li>
  <li><a href="#topic-4">4. Abstraction</a></li>
  <li><a href="#topic-5">5. Inheritance</a></li>
  <li><a href="#topic-6">6. Polymorphism</a></li>
  <li><a href="#topic-7">7. Interfaces</a></li>
  <li><a href="#topic-8">8. Abstract Classes vs Interfaces</a></li>
  <li><a href="#topic-9">9. Association, Aggregation, and Composition</a></li>
  <li><a href="#topic-10">10. Static Members in OOP</a></li>
</ul>

---

<a id="topic-1"></a>

## 1. OOP Basics

### What to Learn

- What is object-oriented programming?
- Class
- Object
- State and behavior
- Fields
- Methods
- Properties
- Auto-implemented properties
- POCO (Plain Old CLR Object)
- Object initialization
- Access modifiers
- `public`
- `private`
- `protected`
- `internal`
- `protected internal`
- `private protected`
- Abstract class
- Private class
- Static class
- Sealed class

OOP organizes code around **objects** that combine **state** (data) and **behavior** (methods). C# supports class-based OOP with single inheritance and interface-based contracts.

### Four Pillars of OOP

| Pillar | Meaning | C# mechanism |
| --- | --- | --- |
| Encapsulation | Hide internal state, expose controlled access | `private` fields, properties, methods |
| Abstraction | Show what, hide how | `abstract` classes, interfaces |
| Inheritance | Reuse and extend base behavior | `: BaseClass`, `: IInterface` |
| Polymorphism | One interface, many implementations | Overloading, `virtual`/`override`, interfaces |

### Class vs Object

| Concept | Definition | Example |
| --- | --- | --- |
| Class | Blueprint / template | `class Employee { ... }` |
| Object | Instance of a class in memory | `var emp = new Employee();` |
| State | Data stored in fields/properties | `Name`, `Salary` |
| Behavior | Actions via methods | `CalculateBonus()` |

```csharp
public class Employee          // class = blueprint
{
    public string Name { get; set; }   // state
    public void Work() => Console.WriteLine($"{Name} is working");  // behavior
}

var emp = new Employee { Name = "Akash" };  // object = instance
emp.Work();
```

### Access Modifiers

| Modifier | Accessible from | Typical use |
| --- | --- | --- |
| `public` | Anywhere | API surface, properties |
| `private` | Same class only | Hidden fields, internal logic |
| `protected` | Same class + derived classes | Shared with children |
| `internal` | Same assembly | Assembly-internal types |
| `protected internal` | Derived in any assembly OR same assembly | Rare — combined rule |
| `private protected` | Derived classes in same assembly only | C# 7.2+ restrictive sharing |

### Class Type Comparison

| Feature | Abstract Class | Private Class | Static Class | Sealed Class |
| --- | --- | --- | --- | --- |
| Instantiation | Cannot instantiate directly | Only inside outer class | Cannot instantiate | Can be instantiated |
| Inheritance | Can be inherited | Only within outer class | Cannot be inherited | Cannot be inherited |
| Object creation | Not allowed directly | Allowed inside outer class | Not allowed | Allowed |
| Methods support | Abstract and normal methods | All method types | Only static methods | All method types |
| Fields support | Instance and static fields | All fields | Only static fields | All fields |
| Constructor support | Yes | Yes | Only static constructor | Yes |
| Access modifier / keyword | `abstract` | `private` | `static` | `sealed` |
| Main purpose | Base blueprint for child classes | Restrict class visibility | Utility/helper methods | Prevent inheritance |
| Can contain abstract method | Yes | No | No | No |
| Example | `abstract class Shape` | `private class Helper` | `static class MathHelper` | `sealed class Employee` |

### Common Use Cases

| Type | Use Case |
| --- | --- |
| Abstract class | Base class for shared and abstract logic |
| Private class | Helper class hidden inside another class; helps encapsulation |
| Static class | Utility/helper functions and constants |
| Sealed class | Final class where further inheritance should be prevented |

### POCO (Plain Old CLR Object)

A **POCO** is a simple C# class — public properties with `{ get; set; }`, no inheritance from framework or ORM base classes.

```csharp
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

| Concept | Meaning |
| --- | --- |
| POCO | Plain class — `object` or nothing as base; no `EntityObject`, `Controller`, etc. |
| Used for | EF entities, DTOs, ViewModels, domain objects, configuration models |
| Not POCO | Classes forced to inherit framework types (EF 6 `EntityObject`, `MarshalByRefObject`) |

| Question | Answer |
| --- | --- |
| What is a POCO? | Plain Old CLR Object — simple class with auto-properties, framework-independent |
| POCO vs class? | Every POCO is a class; not every class is a POCO if it inherits a heavy framework base |
| Why interviewers ask? | EF Core, Web API DTOs, and MVC ViewModels are all typically POCOs — same pattern, different layer |
| Class vs object? | Class = template; object = runtime instance created with `new` |
| Four pillars of OOP? | Encapsulation, Abstraction, Inheritance, Polymorphism |

**Must-know points:**
- C# supports **single class inheritance** only — use interfaces for multiple contracts
- `sealed` on class = no further inheritance; `sealed` on method = no further override
- Static class = utility container — cannot instantiate or inherit

---

<a id="topic-2"></a>

## 2. Constructors

### What to Learn

- Default constructor
- Parameterized constructor
- Static constructor
- Private constructor
- Constructor overloading
- Constructor chaining
- `this` keyword
- `base` keyword
- Copy constructor concept

### Constructor Type Comparison

| Feature | Private Constructor | Static Constructor | Copy Constructor |
| --- | --- | --- | --- |
| Purpose | Restricts object creation from outside class | Initializes static members | Creates object by copying another object |
| Access modifier | `private` | No access modifier allowed | Usually `public` |
| Parameters | Can have parameters | Cannot have parameters | Takes same class object as parameter |
| Object creation outside class | Not allowed | Cannot create object | Allowed |
| Called by | Inside same class only | Automatically by CLR | Explicitly by programmer |
| Invocation | Manual | Automatic | Manual |
| Runs how many times | Every object creation inside class | Only once per application lifetime | Every time constructor is called |
| Used in | Singleton pattern | Static initialization | Object cloning/copying |
| Supports instance members | Yes | No, only static members | Yes |
| Inheritance | Class cannot be inherited externally if only private constructor exists | Static class cannot inherit | Normal inheritance rules |
| Example | `private Employee()` | `static Employee()` | `public Employee(Employee emp)` |

### Constructor Overloading

Constructor overloading means defining multiple constructors in the same class with different sets of parameters.

```csharp
public class Employee
{
    public Employee()
    {
    }

    public Employee(string name)
    {
        Name = name;
    }

    public string Name { get; set; }
}
```

### Constructor Chaining

```csharp
public class Employee
{
    public Employee() : this("Unknown") { }           // calls parameterized ctor

    public Employee(string name)
    {
        Name = name;
    }

    public string Name { get; set; }
}

public class Manager : Employee
{
    public Manager(string name, int teamSize) : base(name)  // calls parent ctor
    {
        TeamSize = teamSize;
    }

    public int TeamSize { get; set; }
}
```

| Constructor order in inheritance | Runs first → last |
| --- | --- |
| Base class static ctor | Once per type |
| Derived class static ctor | Once per type |
| Base class instance ctor | Before derived |
| Derived class instance ctor | After base |

| Question | Answer |
| --- | --- |
| Default constructor? | Compiler adds parameterless ctor if none defined and no other ctors exist |
| Private constructor use? | Singleton, factory patterns — block external `new` |
| `this` vs `base` in ctor? | `this(...)` chains within same class; `base(...)` calls parent constructor |
| Static constructor? | Runs once before first static member access or first instance — no access modifier, no params |
| Copy constructor in C#? | Not built-in — use copy ctor manually or `ICloneable` / record copy semantics |

**Must-know points:**
- If you define **any** constructor, compiler does **not** add default parameterless ctor
- Static ctor cannot be called explicitly — CLR invokes it
- Base ctor **must** be called before derived ctor body (via `base()` or implicit default)

---

<a id="topic-3"></a>

## 3. Encapsulation

### What to Learn

- Data hiding
- Private fields
- Public properties
- Getter and setter
- Read-only properties
- Init-only properties
- Validation inside properties
- Benefits of encapsulation

Encapsulation is about binding data and methods into a single unit, usually a class.

- Data is important in encapsulation because encapsulation protects internal state.
- Internal state is usually stored in fields or properties.
- Access modifiers such as `private`, `public`, and `protected` control access.
- Encapsulation helps maintain data integrity.
- A common pattern is to keep fields private and expose controlled access through properties or methods.

```csharp
public class BankAccount
{
    private decimal _balance;

    public decimal Balance => _balance;

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
        {
            throw new ArgumentException("Amount must be positive.");
        }

        _balance += amount;
    }
}
```

### Property Types

| Type | Syntax | Mutable after construction? |
| --- | --- | --- |
| Read-write | `{ get; set; }` | Yes |
| Read-only (field) | `{ get; }` + ctor init | No after ctor |
| Read-only (expression) | `=> _field` | No setter |
| Init-only | `{ get; init; }` | Only in ctor / object initializer |
| Write-only | `{ set; }` | Rare — set without get |

```csharp
public class Product
{
    public string Sku { get; init; }           // set once at creation
    public decimal Price { get; private set; }  // only class can change
}
```

| Question | Answer |
| --- | --- |
| Encapsulation vs abstraction? | Encapsulation = hide **data**; abstraction = hide **implementation complexity** |
| Why private fields + public properties? | Control validation, read-only exposure, change internal storage without breaking callers |
| `init` vs `set`? | `init` allows assignment only during object initialization — immutable after `new` |
| Data hiding? | `private`/`protected` members — external code cannot access internal state directly |

**Must-know points:**
- Prefer **properties** over public fields — fields cannot add validation or versioning
- Validation belongs in property setter or dedicated methods (`Deposit` example)
- Encapsulation improves maintainability and supports invariants (e.g. balance never negative)

---

<a id="topic-4"></a>

## 4. Abstraction

### What to Learn

- What is abstraction?
- Hiding implementation details
- Abstract classes
- Abstract methods
- Abstract properties
- Interfaces
- Real-world abstraction examples

Abstraction focuses on what a class or object should do, not how it does it.

- Data is not mandatory for abstraction.
- Abstraction can define only behavior, such as methods in an interface or abstract class.
- Abstract classes and interfaces are common ways to implement abstraction.
- Abstraction hides complexity from the user.
- Abstract class is one of the ways to implement abstraction.
- Abstract classes and interfaces act as base types; direct object creation is not possible.
- An abstract class cannot be sealed or static.
- An abstract class does not support multiple class inheritance.

```csharp
public abstract class Shape
{
    public abstract double GetArea();
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public override double GetArea() => Math.PI * Radius * Radius;
}
```

### Abstraction vs Encapsulation

| Aspect | Abstraction | Encapsulation |
| --- | --- | --- |
| Focus | What object does | How data is protected |
| Mechanism | Abstract class, interface | Access modifiers, properties |
| Goal | Reduce complexity for caller | Protect internal state |
| Example | `IShape.GetArea()` — no circle math exposed | `private _balance` + `Deposit()` |

| Question | Answer |
| --- | --- |
| What is abstraction? | Expose essential behavior, hide implementation details |
| Abstract class vs interface for abstraction? | Abstract class = shared code + partial contract; interface = pure contract |
| Can abstract class have concrete methods? | Yes — normal methods with body allowed alongside abstract members |
| Can you `new` an abstract class? | No — must subclass and implement abstract members |

**Must-know points:**
- Abstraction does **not** require data — interfaces can be behavior-only
- Abstract class cannot be `static` or `sealed`
- Real-world: `Stream` abstracts read/write; `FileStream` implements details

---

<a id="topic-5"></a>

## 5. Inheritance

### What to Learn

- Base class
- Derived class
- Single inheritance
- Multilevel inheritance
- Interface-based multiple inheritance
- `base` keyword
- `protected` members
- Constructor execution order in inheritance
- `sealed` class
- `sealed` method

Inheritance allows a derived class to reuse and extend members from a base class.

- C# supports single class inheritance.
- C# does not support multiple class inheritance.
- Multiple inheritance-like behavior is achieved through interfaces.
- A sealed class prevents further inheritance.
- A sealed method prevents overriding further in derived classes.

```csharp
public class Animal
{
    public string Name { get; set; }
    public virtual void Speak() => Console.WriteLine("...");
}

public class Dog : Animal
{
    public override void Speak() => Console.WriteLine("Woof");
}

public class Puppy : Dog
{
    // override Speak again, or sealed override to stop further overrides
}
```

| Inheritance type | C# support | Example |
| --- | --- | --- |
| Single | Yes | `class Dog : Animal` |
| Multilevel | Yes | `A : B : C` chain |
| Multiple classes | **No** | Cannot `class X : A, B` |
| Multiple interfaces | Yes | `class X : IA, IB` |
| Hierarchical | Yes | `Dog : Animal`, `Cat : Animal` |

| Question | Answer |
| --- | --- |
| Why no multiple inheritance? | Diamond problem — ambiguous which base method to call |
| `protected` members? | Visible in base and derived classes, hidden from outside |
| `sealed` class? | `sealed class X` — cannot be inherited (`string` is sealed) |
| `sealed override`? | `public sealed override void M()` — child classes cannot override again |
| Constructor in inheritance? | Base ctor runs before derived — use `base(...)` |

**Must-know points:**
- All classes implicitly inherit `object` (or another base)
- `base.Method()` calls parent implementation from override
- Interface inheritance is separate from class inheritance

---

<a id="topic-6"></a>

## 6. Polymorphism

### What to Learn

- Compile-time polymorphism
- Runtime polymorphism
- Method overloading
- Method overriding
- Operator overloading basics
- `virtual` keyword
- `override` keyword
- `new` keyword for method hiding
- Dynamic method dispatch
- Early binding
- Late binding

Polymorphism is the ability of a variable, object, or function to take multiple forms.

### Compile-Time vs Runtime Polymorphism

| Feature | Compile-Time Polymorphism | Runtime Polymorphism |
| --- | --- | --- |
| Achieved by | Method overloading | Method overriding |
| Definition | Multiple methods with same name in same class | Same method name in parent and child classes |
| Inheritance required | No | Yes |
| Method signature | Different | Same |
| Parameters | Number, type, or order should differ | Must be same |
| Keywords used | No special keyword | `virtual` and `override` |
| Binding time | Compile time / early binding | Runtime / late binding |
| Purpose | Increase method flexibility | Modify inherited method behavior |
| Parent class method | Not required | Required |
| Child class method | Not required | Required |
| Overriding optional | Not applicable | Yes |
| Example | `Add(int)` and `Add(int, int)` | `Display()` in parent and child |

### Method Overloading vs Overriding

| Feature | Overloading | Overriding |
| --- | --- | --- |
| Same class? | Yes — same class, different signatures | No — parent and child |
| Signature | Must differ (params) | Must match exactly |
| Keywords | None | `virtual` / `override` |
| Polymorphism type | Compile-time | Runtime |
| Inheritance | Not required | Required |

```csharp
// Overloading — compile-time
public class Calculator
{
    public int Add(int a, int b) => a + b;
    public int Add(int a, int b, int c) => a + b + c;
}

// Overriding — runtime
public class Animal
{
    public virtual void Speak() => Console.WriteLine("...");
}
public class Dog : Animal
{
    public override void Speak() => Console.WriteLine("Woof");
}

Animal a = new Dog();
a.Speak();  // "Woof" — late binding
```

### Override vs Method Hiding

| Feature | `override` | `new` (hiding) |
| --- | --- | --- |
| Base method | Must be `virtual`/`abstract`/`override` | Any method |
| Polymorphism | Yes — runtime dispatch | No — compile-time type wins |
| Base reference | Calls derived version | Calls base version |
| Keyword | `override` | `new` |

The **`new`** keyword is used for **member hiding**. When a derived class declares a member with the same name and signature as a member in the base class and marks it with `new`, the derived member **hides** the base member. Which member is called depends on the **compile-time type of the reference**, not the runtime type of the object.

- The derived class provides a new implementation.
- The base method is still accessible through a base class reference.
- Method hiding is different from overriding (`virtual` / `override`).

```csharp
public class BaseClass
{
    public void Display()
    {
        Console.WriteLine("Base display");
    }
}

public class ChildClass : BaseClass
{
    public new void Display()
    {
        Console.WriteLine("Child display");
    }
}

ChildClass child = new ChildClass();
BaseClass asBase = child;

child.Display();    // "Child display" — reference type is ChildClass
asBase.Display();   // "Base display"  — reference type is BaseClass (hiding, not polymorphism)
```

> **Interview one-liner:** `new` hides the base member; the call uses the compile-time reference type, not the runtime object type.
### Early Binding vs Late Binding

| Feature | Early Binding | Late Binding |
| --- | --- | --- |
| Binding time | Compile time | Runtime |
| Performance | Faster | Slower |
| Type checking | Compile-time checking | Runtime checking |
| IntelliSense support | Yes | Limited or no |
| Error detection | Compile time | Runtime |
| Example | Normal object call | Reflection / `dynamic` |

```csharp
dynamic obj = new Customer();
```

| Question | Answer |
| --- | --- |
| Compile-time vs runtime polymorphism? | Overloading = compile-time; overriding = runtime via `virtual`/`override` |
| `virtual` vs `abstract`? | `virtual` has default impl, child may override; `abstract` has no impl, child **must** override |
| `override` vs `new`? | `override` = true polymorphism; `new` = hides base method — base ref calls base version |
| What is late binding? | Method resolved at runtime based on actual object type |
| Operator overloading? | `public static MyType operator +(MyType a, MyType b)` — compile-time |

**Must-know points:**
- Without `virtual`, derived method does **not** override — it hides (needs `new` or won't compile if signatures match with override intent)
- `dynamic` bypasses compile-time checking — late binding via DLR
- Polymorphism enables Open/Closed Principle — extend via new types without changing caller code

---

<a id="topic-7"></a>

## 7. Interfaces

### What to Learn

- Interface declaration
- Interface implementation
- Multiple interface implementation
- Explicit interface implementation
- Interface properties
- Interface methods
- Default interface methods
- Interface segregation principle
- Interface naming convention

Interfaces define a contract for classes.

### Benefits of Interfaces

1. Help define the contract of the system.
2. Make unit testing easier.
3. Support dependency injection.
4. Help reduce tight coupling.
5. Support multiple interface inheritance.

From C# 8.0, interfaces can contain default method implementations.

```csharp
public interface ILogger
{
    void Log(string message);
}

public class FileLogger : ILogger
{
    public void Log(string message) => File.AppendAllText("log.txt", message);
}

// Multiple interfaces
public interface IReadable { string Read(); }
public interface IWritable { void Write(string data); }
public class Document : IReadable, IWritable
{
    public string Read() => "...";
    public void Write(string data) { }
}
```

### Explicit Interface Implementation

```csharp
public interface IFirst { void Show(); }
public interface ISecond { void Show(); }

public class Demo : IFirst, ISecond
{
    void IFirst.Show() => Console.WriteLine("IFirst");
    void ISecond.Show() => Console.WriteLine("ISecond");
    // Must cast to interface to call: ((IFirst)obj).Show();
}
```

| Question | Answer |
| --- | --- |
| Interface vs class? | Interface = contract only; no fields (pre-C# 8), no instance state |
| Multiple interfaces? | `class X : IA, IB` — C# allows multiple interface implementation |
| Explicit implementation? | When two interfaces have same method signature — prefix with interface name |
| Default interface methods? | C# 8.0+ — interface can have body; implementing class inherits default unless overridden |
| ISP (Interface Segregation)? | Many small interfaces better than one fat interface |

**Must-know points:**
- Interface members are **public** by default (implementing members must be public unless explicit)
- Naming: `I` prefix convention (`ILogger`, `IRepository`)
- Interfaces enable DI, mocking, and loose coupling

---

<a id="topic-8"></a>

## 8. Abstract Classes vs Interfaces

### What to Learn

- Abstract class use cases
- Interface use cases
- Shared behavior using abstract classes
- Contracts using interfaces
- Abstract members
- Virtual members
- When to choose abstract class
- When to choose interface

| Feature | Abstract Class | Interface |
| --- | --- | --- |
| Definition | Contains declaration and implementation of methods | Mostly contains declarations; C# 8.0+ allows default implementations |
| Keyword used | `abstract` | `interface` |
| Multiple inheritance | Does not support multiple class inheritance | Supports multiple interface inheritance |
| Constructors | Can have constructors | Cannot have constructors |
| Fields support | Can have fields | Cannot have instance fields |
| Access modifiers | Supports access modifiers | Members are public by default in older interface style |
| Method types | Abstract and normal methods | Abstract methods and default methods from C# 8.0 |
| Object creation | Cannot instantiate directly | Cannot instantiate directly |
| Static members | Supported | Supported in modern C# |
| Purpose | Common base class with shared code | Contract for classes |
| Inheritance keyword | `:` | `:` |
| Example | `abstract class Shape` | `interface IShape` |

### When to Choose

| Choose abstract class when | Choose interface when |
| --- | --- |
| Shared code across subclasses | Only contract needed, no shared impl |
| Single inheritance hierarchy | Multiple unrelated types need same contract |
| Need fields, constructors, non-public members | Lightweight plug-in / strategy pattern |
| Base "is-a" relationship with common behavior | Capability marker (`IDisposable`, `IComparable`) |

| Question | Answer |
| --- | --- |
| Abstract class vs interface? | Abstract = IS-A with shared code; interface = CAN-DO contract |
| Can interface have methods with body? | Yes from C# 8.0 (default implementations) |
| Can abstract class implement interface? | Yes — `abstract class X : IY` |
| Diamond problem in interfaces? | C# resolves via explicit implementation if signatures clash |
| `IEnumerable` vs abstract base? | Interface — many unrelated types can enumerate |

**Must-know points:**
- Prefer **interface** for DI and testability; **abstract class** when subclasses share substantial code
- From C# 8, interfaces can have static members, default methods, and access modifiers
- A class can inherit **one** abstract class and **many** interfaces

---

<a id="topic-9"></a>

## 9. Association, Aggregation, and Composition

### What to Learn

- Association
- Aggregation
- Composition
- Has-a relationship
- Uses-a relationship
- Object lifetime ownership
- Real-world examples

Association, aggregation, and composition describe relationships between objects.

- Association means one object uses or communicates with another object.
- Aggregation is a weak has-a relationship where the child can exist independently.
- Composition is a strong has-a relationship where the child object lifetime depends on the parent.

| Relationship | Strength | Lifetime | Example |
| --- | --- | --- | --- |
| Association | Weak — uses | Independent | Doctor uses Stethoscope |
| Aggregation | Weak — has-a | Child can outlive parent | Department has Employees (employees exist without dept) |
| Composition | Strong — part-of | Child dies with parent | House has Rooms (room cannot exist without house) |

```csharp
// Composition — Engine created and owned by Car
public class Car
{
    private readonly Engine _engine = new Engine();  // lifetime tied to Car
}

// Aggregation — Team references Player objects created elsewhere
public class Team
{
    public List<Player> Players { get; set; }  // players can exist without team
}
```

| Question | Answer |
| --- | --- |
| Association vs aggregation vs composition? | Association = uses; aggregation = weak has-a; composition = strong ownership |
| Composition over inheritance? | Favor has-a over is-a when behavior is composed, not specialized |
| UML interview tip? | Composition = filled diamond; aggregation = hollow diamond |
| Real example of composition? | `Order` owns `OrderLine` items — lines don't exist without order |

**Must-know points:**
- **Composition** preferred in design patterns (Strategy, Decorator) over deep inheritance trees
- Association is the broadest term — aggregation and composition are specializations
- Object lifetime ownership is the key interview differentiator

---

<a id="topic-10"></a>

## 10. Static Members in OOP

### What to Learn

- Static fields
- Static methods
- Static properties
- Static classes
- Static constructors
- Shared state
- Utility classes
- Limitations of static classes

Static members belong to the type itself, not to an object instance.

- Static classes are useful for utility/helper methods and constants.
- Static classes cannot be instantiated.
- Static classes cannot be inherited.
- Static classes can contain only static members.
- Static constructors initialize static members and run only once per application lifetime.

```csharp
public static class MathHelper
{
    public static double Pi => 3.14159;
    public static int Add(int a, int b) => a + b;
}

public class Counter
{
    public static int Count;                    // shared across all instances
    public Counter() => Count++;                // instance ctor bumps static
    static Counter() => Count = 0;              // runs once
}
```

### Static vs Instance Members

| Feature | Static | Instance |
| --- | --- | --- |
| Belongs to | Type (class) | Object instance |
| Access | `ClassName.Member` | `obj.Member` |
| Can access instance members? | No (without instance ref) | Yes — can access static |
| Override? | No | Yes (virtual/override) |
| Use case | Utilities, counters, factories | Per-object state and behavior |

| Question | Answer |
| --- | --- |
| Static class rules? | All members static, sealed implicitly, no inheritance, no `new` |
| Static constructor? | No access modifier, no params, runs once before first use |
| Static vs singleton? | Static = single type-level instance; singleton = pattern controlling one **object** instance |
| Thread safety with static? | Shared mutable static state needs locking — common interview follow-up |
| Can interface have static members? | Yes — C# 8.0+ static methods on interfaces |

**Must-know points:**
- Static fields are **shared** — one copy for all instances
- Avoid static mutable global state in web apps (lifetime / testability issues)
- `static class` = container for helpers (`Console`, `Math`, extension method holders)

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### OOP Concepts — Four Pillars

| Pillar | Meaning | C# Example |
| --- | --- | --- |
| Encapsulation | Hide data, expose via methods/properties | `private` fields + public properties |
| Abstraction | Show what, hide how | `abstract class`, `interface` |
| Inheritance | Reuse base behavior | `class Dog : Animal` |
| Polymorphism | One interface, many forms | Overloading, `virtual`/`override` |

> **One-liner:** OOP bundles data and behavior, hides complexity, reuses code, and supports multiple implementations.

### What is Polymorphism?

| Type | Mechanism | When Resolved |
| --- | --- | --- |
| Compile-time | Method overloading — same name, different params | Compile time |
| Runtime | Method overriding — `virtual`/`override` | Runtime via vtable |
| Interface | Class implements multiple interfaces | Runtime dispatch |
| Benefit | Open/Closed — extend without changing callers | Design flexibility |

> **One-liner:** Polymorphism lets one reference call different implementations — overloading at compile time, overriding at runtime.

### Abstract Class vs Interface

| Point | Abstract Class | Interface |
| --- | --- | --- |
| Inheritance | Single class inheritance | Multiple interfaces |
| Implementation | Can have concrete + abstract members | Contract only (C# 8+ default methods) |
| State | Can have fields and constructors | No instance fields (traditionally) |
| Best for | Shared IS-A hierarchy with common code | CAN-DO capability across unrelated types |

> **One-liner:** Abstract class shares code in a hierarchy; interface defines a contract any class can implement.

### Method Overloading vs Method Overriding

| Point | Overloading | Overriding |
| --- | --- | --- |
| Same class / hierarchy | Same class | Child replaces parent method |
| Signature | Different parameters | Same signature |
| Keywords | None required | `virtual` / `override` |
| Binding | Compile-time | Runtime |

> **One-liner:** Overloading = multiple methods, same name, different params; overriding = child replaces parent behavior.

### Partial Class vs Sealed Class

| Point | Partial Class | Sealed Class |
| --- | --- | --- |
| Purpose | Split one class across multiple files | Prevent further inheritance |
| Keyword | `partial` | `sealed` |
| Use case | Designer-generated + hand-written code | Security, performance, final behavior |
| Can inherit from? | Normal inheritance rules apply | Others can use it; cannot extend it |

> **One-liner:** `partial` splits a class across files; `sealed` blocks anyone from inheriting it.