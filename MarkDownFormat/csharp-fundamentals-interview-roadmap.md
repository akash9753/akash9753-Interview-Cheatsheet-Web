# C# Fundamentals Learning Roadmap for Interview Preparation

## Goal

This roadmap is designed to prepare core C# and .NET fundamentals for interviews.

---

## Topic Index

<ul>
  <li><a href="#topic-1">1. C# Basics</a></li>
  <li><a href="#topic-2">2. Variables, Data Types, and Operators</a></li>
  <li><a href="#topic-3">3. Control Flow Statements</a></li>
  <li><a href="#topic-4">4. Methods and Parameters</a></li>
  <li><a href="#topic-5">5. Static Members and Extension Methods</a></li>
  <li><a href="#topic-6">6. Strings and String Handling</a></li>
  <li><a href="#topic-7">7. Arrays and Collections</a></li>
  <li><a href="#topic-8">8. Generics</a></li>
  <li><a href="#topic-9">9. Exception Handling</a></li>
  <li><a href="#topic-10">10. Delegates, Events, and Lambda Expressions</a></li>
  <li><a href="#topic-11">11. LINQ</a></li>
  <li><a href="#topic-12">12. File Handling and Streams</a></li>
  <li><a href="#topic-13">13. Memory Management and Garbage Collection</a></li>
  <li><a href="#topic-14">14. Asynchronous Programming</a></li>
  <li><a href="#topic-15">15. Multithreading and Parallel Programming</a></li>
  <li><a href="#topic-16">16. Reflection and Attributes</a></li>
  <li><a href="#topic-17">17. Records, Tuples, and Modern C# Features</a></li>
  <li><a href="#topic-18">18. Testing in C#</a></li>
  <li><a href="#topic-19">19. Advanced C# Concepts</a></li>
  <li><a href="#topic-20">20. Performance and Best Practices</a></li>
</ul>

---

<a id="topic-1"></a>

## 1. C# Basics

### What to Learn

- What is C#?
- What is .NET?
- Difference between .NET Framework, .NET Core, and modern .NET
- Structure of a C# program
- Namespaces
- Assemblies
- `.exe` files
- `.dll` files
- SDK, runtime, and CLI basics
- CLR
- CTS
- CLS
- IL
- JIT compiler
- Managed code
- Unmanaged code

- `.exe` files are executable applications.
- `.dll` files are shared libraries used by other applications.
- The .NET compiler converts C# code into platform-independent Intermediate Language, also called IL.
- IL code is packaged inside assemblies such as `.exe` and `.dll`.
- Processors cannot understand IL directly, so IL must be converted into native machine instructions.
- CLR provides the runtime environment required to execute .NET applications.
- CLR provides services like garbage collection, security, threading, debugging, memory management, and exception handling.
- JIT compiler translates IL into CPU-specific native code during runtime.
- JIT compilation happens when the code is needed at runtime.
- After JIT compilation, the generated native code is executed by the operating system and CPU.
- Managed code is code controlled by CLR.
- Unmanaged code runs outside CLR control and has its own runtime or direct operating system interaction.

### CLR Execution Flow

| Stage | What Happens |
| --- | --- |
| **Source (.cs)** | C# code written by the developer |
| **Compiler (Roslyn)** | Compiles source to platform-independent IL |
| **IL** | Bytecode packaged inside `.exe` / `.dll` assemblies |
| **CLR** | Loads assembly; provides GC, security, threading, exception handling |
| **JIT** | Translates IL to native CPU instructions when code is first needed |
| **Native code** | Executed by the OS and processor |

### CLR Responsibilities

| Responsibility | Meaning |
| --- | --- |
| JIT compilation | Converts IL code into machine code during runtime |
| Memory management | Automatically allocates and releases managed memory |
| Garbage collection | Removes unused objects from memory automatically |
| App domain management | Isolates applications for secure execution |
| CLS | Defines common rules for .NET languages |
| CTS | Defines all data types used in .NET |
| Thread management | Handles execution of multiple threads |
| Security management | Provides code and application security |
| Debugging | Helps developers find and fix errors |
| Exception handling | Handles runtime errors without crashing the application |

| Question | Answer |
| --- | --- |
| What is CLR? | Common Language Runtime — executes .NET apps and provides managed services |
| IL vs native code? | IL is platform-independent bytecode; JIT converts it to CPU-specific machine code at runtime |
| Managed vs unmanaged? | Managed = CLR-controlled (.NET); unmanaged = direct OS/COM/native resources |
| .NET Framework vs .NET Core vs modern .NET? | Framework = Windows-only legacy; Core = cross-platform rewrite; modern .NET (5+) unifies the platform |
| What is an assembly? | Deployment unit (.exe/.dll) containing IL, metadata, and manifest |

**Must-know points:**
- C# compiles to **IL**, not directly to machine code — JIT runs at **runtime**
- **CTS** defines all .NET types; **CLS** defines cross-language rules
- `.dll` = library; `.exe` = entry-point application — both are assemblies

---

<a id="topic-2"></a>

## 2. Variables, Data Types, and Operators

### What to Learn

- Value types and reference types
- Primitive data types
- Signed numeric data types
- Unsigned numeric data types
- `char`
- `bool`
- `string`
- `object`
- `var`
- `dynamic`
- `const`
- `readonly`
- Nullable types
- Type safety
- Casting
- Conversion
- `Convert`
- `Parse`
- `TryParse`
- Boxing
- Unboxing
- Operators
- Arithmetic operators
- Relational operators
- Logical operators
- Assignment operators
- Bitwise operators
- Ternary operator
- Null-coalescing operator `??`
- Null-coalescing assignment operator `??=`
- Null-conditional operator `?.`
- `is` operator
- `as` operator

### Signed Data Types

| Type | Size | Range / Purpose |
| --- | --- | --- |
| `sbyte` | 1 byte | -128 to 127 |
| `short` | 2 bytes | -32,768 to 32,767 |
| `int` | 4 bytes | Around -2 billion to 2 billion |
| `long` | 8 bytes | Very large negative to positive values |
| `float` | 4 bytes | Decimal values |
| `double` | 8 bytes | Large decimal values |
| `decimal` | 16 bytes | High precision decimal values |
| `nint` | Platform dependent | Native signed integer |

### Unsigned Data Types

| Type | Size | Range / Purpose |
| --- | --- | --- |
| `byte` | 1 byte | 0 to 255 |
| `ushort` | 2 bytes | 0 to 65,535 |
| `uint` | 4 bytes | 0 to around 4 billion |
| `ulong` | 8 bytes | Very large positive values |
| `nuint` | Platform dependent | Native unsigned integer |

### Other Common Types

| Type | Size / Value | Purpose |
| --- | --- | --- |
| `char` | 2 bytes | Stores a single Unicode character |
| `bool` | `true` / `false` | Stores boolean value |
| `string` | Reference type | Stores text |
| `object` | Reference type | Base type of all data types |

### Type Safety, Casting, and Conversion

- Type safety prevents storing incompatible data types in a variable.
- Casting converts one data type into another using a cast operator.
- Implicit casting is automatic conversion from a smaller or safe type to a larger compatible type.
- Explicit casting is manual conversion from a larger type to a smaller type using a cast operator.
- Conversion uses methods or helper classes such as `Convert`, `Parse`, and `TryParse`.

```csharp
int a = 10;
double b = a;       // Implicit casting

double x = 10.5;
int y = (int)x;     // Explicit casting, data loss possible
```

| Feature | Casting | Conversion |
| --- | --- | --- |
| Meaning | Changing datatype using cast operator | Changing datatype using methods/classes |
| Syntax | `(type)value` | `Convert`, `Parse`, `TryParse` |
| Performed by | Compiler/runtime | Methods |
| Mostly used for | Compatible numeric types | String/object/data conversions |
| Can handle null | No | Yes, depending on API |
| Exception handling | Limited | Better control |

### Convert Class Methods

| Method | Converts To |
| --- | --- |
| `Convert.ToInt16()` | `short` |
| `Convert.ToInt32()` | `int` |
| `Convert.ToInt64()` | `long` |
| `Convert.ToDouble()` | `double` |
| `Convert.ToDecimal()` | `decimal` |
| `Convert.ToBoolean()` | `bool` |
| `Convert.ToString()` | `string` |
| `Convert.ToChar()` | `char` |

### Parse vs TryParse

| Feature | `Parse()` | `TryParse()` |
| --- | --- | --- |
| Return type | Actual datatype | `bool` |
| Invalid input | Throws exception | Returns `false` |
| Exception handling | Required | Not required |
| Safer | No | Yes |
| Performance | Slower when exceptions occur | Better for user input |
| Recommended for user input | No | Yes |

### `var` vs `dynamic`

| Feature | `var` | `dynamic` |
| --- | --- | --- |
| Type decision | Compile time | Runtime |
| Type checking | Compile time | Runtime |
| Actual type | Fixed after assignment | Decided at runtime |
| IntelliSense | Yes | Limited |
| Performance | Faster | Slower |
| Error detection | Compile time | Runtime |
| Type safety | Strong | Weak |

### `const` vs `readonly`

| Feature | `const` | `readonly` |
| --- | --- | --- |
| Initialization | Only at declaration | At declaration or in constructor |
| Mutability | Always immutable | Immutable after initialization |
| Runtime vs compile time | Compile time | Runtime |
| Scope | Always static | Instance-level or static |

### Null-Conditional vs Traditional Null Checks

| Approach | Syntax | Behavior |
| --- | --- | --- |
| Traditional | `if (obj != null) obj.Method();` | Verbose; repeated null checks |
| Null-conditional `?.` | `obj?.Method()` | Calls only if not null; short-circuits |
| Chained `?.` | `obj?.Child?.Name` | Returns null at first null in chain |
| Null-coalescing `??` | `name ?? "Guest"` | Default when left side is null |
| Null-coalescing assign `??=` | `name ??= "Guest"` | Assign only when variable is null |

```csharp
// Traditional
string city = null;
if (customer != null && customer.Address != null)
    city = customer.Address.City;

// Null-conditional
string city = customer?.Address?.City;
```

### Null-Coalescing Operators

- `??` returns a default value when the left side value is null.
- `??=` assigns a value only when the variable is null.

```csharp
string name = null;
string result = name ?? "Guest";

name ??= "Akash";
```

### `is` and `as` Operators

- `is` checks whether an object is compatible with a specific type.
- `as` performs conversion between compatible reference types and returns `null` if conversion fails.

### Boxing and Unboxing

- Boxing converts a value type into a reference type such as `object`.
- Unboxing converts the boxed object back into a value type.
- Boxing and unboxing create extra heap objects, increase GC pressure, and reduce performance.

```csharp
int x = 10;
object obj = x;     // Boxing

int value = (int)obj; // Unboxing
```

### Quick Reference: Convert, Parse, TryParse, Boxing & Unboxing

Use this table to choose the right conversion API or concept at a glance.

| Topic | Method / Property / Concept | Namespace | When to use | Example |
| --- | --- | --- | --- | --- |
| `Convert` | **Method** | `System` | When value can be `null` | `int n = Convert.ToInt32(null); // 0` |
| `Parse` | **Method** | `System` | When string value is 100% valid | `int n = int.Parse("123"); // 123` |
| `TryParse` | **Method** | `System` | When value may be invalid, like user input | `bool ok = int.TryParse("abc", out int n); // false` |
| Boxing | **Concept** | No specific namespace | When value type is stored in `object` | `object obj = 10;` |
| Unboxing | **Concept** | No specific namespace | When object is converted back to value type | `int n = (int)obj;` |

| Question | Answer |
| --- | --- |
| Value type vs reference type? | Value = stack/inline copy; reference = heap object accessed via reference |
| `var` vs `dynamic`? | `var` = compile-time inferred type; `dynamic` = runtime binding, no compile-time checks |
| `const` vs `readonly`? | `const` = compile-time constant, always static; `readonly` = set at declaration or ctor, instance or static |
| `Parse` vs `TryParse`? | `Parse` throws on invalid input; `TryParse` returns `bool` — safer for user input |
| Boxing cost? | Value → `object` allocates on heap; avoid in hot paths and generic collections |

**Must-know points:**
- Implicit cast = safe widening; explicit cast = narrowing with possible **data loss**
- `is` checks type; `as` casts reference types and returns **null** on failure
- Prefer `TryParse` over `Parse` for **untrusted input**

---

<a id="topic-3"></a>

## 3. Control Flow Statements

### What to Learn

- `if`, `else if`, and `else`
- `switch` statement
- `switch` expression
- `for` loop
- `while` loop
- `do while` loop
- `foreach` loop
- `break`
- `continue`
- `goto`
- Pattern matching basics

- Use `if` and `else` when conditions are different or complex.
- Use `switch` when comparing one value against multiple possible values.
- Use `for` when the number of iterations is known.
- Use `while` when the number of iterations depends on a condition.
- Use `foreach` to iterate through collections.
- `foreach` internally uses `IEnumerable` and `IEnumerator`.
- `foreach` hides calls to `MoveNext()` and `Current`.

| Question | Answer |
| --- | --- |
| `switch` statement vs expression? | Statement uses `case`/`break`; expression returns a value with `=>` syntax |
| `for` vs `foreach`? | `for` when index/control needed; `foreach` for any `IEnumerable` collection |
| `break` vs `continue`? | `break` exits loop; `continue` skips to next iteration |
| Pattern matching in `switch`? | Type patterns, relational patterns, property patterns (C# 7+) |
| When avoid `goto`? | Almost always — use structured control flow instead |

**Must-know points:**
- `foreach` cannot modify the collection during iteration (throws `InvalidOperationException`)
- `switch` expression is **expression-bodied** — must cover all cases or have `default`
- `do-while` always runs **at least once**; `while` may never run

---

<a id="topic-4"></a>

## 4. Methods and Parameters

### What to Learn

- Method declaration
- Return types
- Method overloading
- Optional parameters
- Named arguments
- `ref` parameters
- `out` parameters
- `in` parameters
- `params` keyword
- Local functions
- Expression-bodied methods
- Recursive methods

- Named parameters are used to specify an argument by name instead of position.
- Optional parameters allow some arguments to be skipped by providing default values.
- `params` is used when a method can accept a variable number of parameters.
- `out` and `ref` can be used to return or modify more than one value from a method.
- `out` is used to return a new value. The variable does not need to be initialized before being passed.
- `ref` is used to modify an existing value. The variable must be initialized before being passed.

### `ref` vs `out` vs `in`

| Feature | `ref` | `out` | `in` |
| --- | --- | --- | --- |
| Purpose | Pass by reference (read/write) | Return value via parameter | Pass by read-only reference |
| Initialization before call | Required | Not required | Required |
| Assignment inside method | Optional (usually modified) | Required before return | Cannot modify |
| Data flow | Input and output | Output only | Input only |
| Common use | Modify existing variable | Multiple return values | Large struct without copying |
| Compiler rule | Must be assigned before passing | Method must assign before return | Passed as `readonly` ref |

```csharp
static void UpdateValue(ref int number)
{
    number += 10;
}

static void GetValue(out int number)
{
    number = 100;
}
```

| Question | Answer |
| --- | --- |
| `ref` vs `out`? | `ref` = read/write existing var; `out` = output-only, no pre-init required |
| What is `in`? | Read-only reference — avoids copying large structs |
| `params` keyword? | Accepts variable number of arguments as array — must be last parameter |
| Method overloading? | Same name, different parameter types/count — resolved at compile time |
| Expression-bodied method? | `int Double(int x) => x * 2;` — single-expression shorthand |

**Must-know points:**
- Named arguments improve readability: `Save(name: "Akash", age: 30)`
- Optional parameters need **default values** and must come after required params
- `out` enables `TryParse` pattern — returns `bool` + parsed value

---

<a id="topic-5"></a>

## 5. Static Members and Extension Methods

### What to Learn

- Static class
- Static fields
- Static methods
- Static properties
- Static constructor
- Extension methods
- `this` keyword in extension methods
- Common use cases of extension methods

- Extension methods allow adding new methods to an existing type without modifying the original source code.
- Extension methods must be declared inside a static class.
- Extension methods themselves must be static.
- The `this` keyword binds the extension method to the target type.
- Extension methods are useful when you want to add helper behavior to a type whose source code you do not control.

```csharp
public static class StringExtensions
{
    public static bool IsNullOrEmptyText(this string value)
    {
        return string.IsNullOrEmpty(value);
    }
}
```

| Question | Answer |
| --- | --- |
| Static class rules? | All members static, sealed implicitly, no inheritance, no `new` |
| Extension method requirements? | Static class, static method, first param prefixed with `this` |
| Static constructor? | Runs once before first static member access — no access modifier, no params |
| Why extension methods? | Add behavior to types you don't own without modifying source |
| Static vs instance? | Static = one copy shared; instance = per-object state |

**Must-know points:**
- Extension methods are **syntactic sugar** — compiler calls static method with instance as first arg
- Static fields are **shared** across all instances — thread-safety matters for mutable static state
- Cannot add instance fields via extension methods — only methods

---

<a id="topic-6"></a>

## 6. Strings and String Handling

### What to Learn

- `string` type
- `System.String`
- String immutability
- String interpolation
- String concatenation
- String interning
- `StringBuilder`
- Common string methods
- String comparison
- String formatting
- Verbatim strings
- Raw string literals

- C# strings are objects.
- `string` is a reference type.
- `string` is a C# alias for `System.String`.
- `String` and `string` work identically.
- String objects are created in heap memory.
- Strings are immutable, meaning the value cannot be changed after creation.
- When a string is modified, a new string object is created.
- String interning allows CLR to store only one copy of identical string literals.
- Strings are immutable, which also helps thread safety because multiple threads can read the same string without one thread changing it.

```csharp
string name = "Akash";
name = name + " Patel";

// Original string: "Akash"
// New string: "Akash Patel"
```

### Common String Operations

- Concatenate
- Trim
- Replace
- Contains
- Compare
- Format
- Split
- Join

### `string` vs `StringBuilder`

| Feature | `string` | `StringBuilder` |
| --- | --- | --- |
| Type | Immutable | Mutable |
| Performance | Slow for repeated modifications | Fast for repeated modifications |
| Memory usage | Creates new memory on each change | Reuses internal buffer |
| Namespace | `System` | `System.Text` |
| Best use | Few changes or fixed text | Many repeated changes |

```csharp
StringBuilder sb = new StringBuilder();
sb.Append("Hello");
sb.Append(" World");
```

| Question | Answer |
| --- | --- |
| Why are strings immutable? | Thread safety, interning, and hash stability — modification creates new object |
| `string` vs `StringBuilder`? | `string` for few changes; `StringBuilder` for repeated concatenation in loops |
| String interpolation? | `$"Hello {name}"` — readable formatting, compile-time checked |
| Verbatim string? | `@"C:\path\file"` — backslashes literal, no escaping |
| Raw string literal? | `"""multi-line"""` — C# 11+ for embedded quotes/newlines |

**Must-know points:**
- `+` in a loop on strings causes **many allocations** — use `StringBuilder`
- String interning: identical literals may share **one heap instance**
- `string.Compare` / `Equals` — specify `StringComparison` for culture/case rules

---

<a id="topic-7"></a>

## 7. Arrays and Collections

### What to Learn

- Single-dimensional arrays
- Multi-dimensional arrays
- Jagged arrays
- `Array` class
- Non-generic collections
- Generic collections
- `List<T>`
- `Dictionary<TKey, TValue>`
- `HashSet<T>`
- `Queue<T>`
- `Stack<T>`
- `LinkedList<T>`
- `SortedList`
- `SortedDictionary`
- `IEnumerable`
- `IEnumerator`
- `ICollection`
- `IList`
- `IDictionary`
- `IComparable`
- `IComparer`
- Generic vs non-generic collections

### Collections vs Generics

- Non-generic collections store data as `object`, so they are not type safe.
- Generic collections store strongly typed data and are safer and faster.
- Generics avoid unnecessary casting and reduce boxing/unboxing.

| Feature | Non-Generic Collections | Generic Collections |
| --- | --- | --- |
| Namespace | `System.Collections` | `System.Collections.Generic` |
| Type safety | No | Yes |
| Data storage | Stores as `object` | Stores specific type |
| Casting required | Yes | No |
| Boxing/unboxing | Required for value types | Not required |
| Performance | Slower | Faster |
| Compile-time checking | No | Yes |
| Runtime error chance | More | Less |
| Examples | `ArrayList`, `Hashtable`, `Stack`, `Queue` | `List<int>`, `Dictionary<int,string>`, `Stack<int>` |
| Recommendation | Old applications | Modern applications |

### `System.Collections` Hierarchy

```text
System.Collections
│
├── IEnumerable
│   │
│   ├── Method
│   │      └── GetEnumerator()
│   │
│   └── IEnumerator
│       │
│       ├── Property
│       │      └── Current
│       │
│       └── Methods
│              ├── MoveNext()
│              ├── Reset()
│              └── Dispose()
│
├── ICollection
│   │
│   ├── Properties
│   │      ├── Count
│   │      ├── IsSynchronized
│   │      └── SyncRoot
│   │
│   └── Methods
│          ├── CopyTo()
│          └── GetEnumerator()
│
├── IList
│   │
│   ├── Properties
│   │      ├── IsFixedSize
│   │      ├── IsReadOnly
│   │      └── Item[index]
│   │
│   └── Methods
│          ├── Add()
│          ├── Insert()
│          ├── Remove()
│          ├── RemoveAt()
│          ├── Contains()
│          ├── IndexOf()
│          └── Clear()
│
├── IDictionary
│   │
│   ├── Properties
│   │      ├── Keys
│   │      ├── Values
│   │      ├── Item[key]
│   │      ├── IsFixedSize
│   │      └── IsReadOnly
│   │
│   └── Methods
│          ├── Add()
│          ├── Remove()
│          ├── Contains()
│          └── Clear()
│
├── ArrayList
│   │
│   ├── Methods
│   │      ├── Add()
│   │      ├── Insert()
│   │      ├── Remove()
│   │      ├── RemoveAt()
│   │      ├── Sort()
│   │      ├── Reverse()
│   │      └── Clear()
│   │
│   └── Properties
│          ├── Count
│          ├── Capacity
│          └── Item[index]
│
├── Queue
│   │
│   ├── Methods
│   │      ├── Enqueue()
│   │      ├── Dequeue()
│   │      ├── Peek()
│   │      └── Clear()
│   │
│   └── Property
│          └── Count
│
├── Stack
│   │
│   ├── Methods
│   │      ├── Push()
│   │      ├── Pop()
│   │      ├── Peek()
│   │      └── Clear()
│   │
│   └── Property
│          └── Count
│
└── Hashtable
    │
    ├── Methods
    │      ├── Add()
    │      ├── Remove()
    │      ├── ContainsKey()
    │      ├── ContainsValue()
    │      └── Clear()
    │
    └── Properties
           ├── Keys
           ├── Values
           └── Count
```

### `System.Collections.Generic` Hierarchy

```text
System.Collections.Generic
│
├── IEnumerable<T>
│   │
│   ├── Method
│   │      └── GetEnumerator()
│   │
│   └── IEnumerator<T>
│       │
│       ├── Property
│       │      └── Current
│       │
│       └── Methods
│              ├── MoveNext()
│              ├── Reset()
│              └── Dispose()
│
├── ICollection<T>
│   │
│   ├── Properties
│   │      ├── Count
│   │      └── IsReadOnly
│   │
│   └── Methods
│          ├── Add()
│          ├── Remove()
│          ├── Clear()
│          ├── Contains()
│          ├── CopyTo()
│          └── GetEnumerator()
│
├── IList<T>
│   │
│   ├── Property
│   │      └── this[int index]
│   │
│   └── Methods
│          ├── IndexOf()
│          ├── Insert()
│          └── RemoveAt()
│
├── IDictionary<TKey, TValue>
│   │
│   ├── Properties
│   │      ├── Keys
│   │      └── Values
│   │
│   └── Methods
│          ├── Add()
│          ├── Remove()
│          ├── ContainsKey()
│          └── TryGetValue()
│
├── ISet<T>
│   │
│   └── Methods
│          ├── UnionWith()
│          ├── IntersectWith()
│          ├── ExceptWith()
│          └── SymmetricExceptWith()
│
├── IReadOnlyCollection<T>
│   │
│   └── Property
│          └── Count
│
├── IReadOnlyList<T>
│   │
│   └── Property
│          └── this[int index]
│
├── List<T>
│   │
│   ├── Methods
│   │      ├── Add()
│   │      ├── Insert()
│   │      ├── Remove()
│   │      ├── RemoveAt()
│   │      ├── Sort()
│   │      ├── Reverse()
│   │      └── Clear()
│   │
│   └── Properties
│          ├── Count
│          ├── Capacity
│          └── Item[index]
│
├── Queue<T>
│   │
│   ├── Methods
│   │      ├── Enqueue()
│   │      ├── Dequeue()
│   │      ├── Peek()
│   │      └── Clear()
│   │
│   └── Property
│          └── Count
│
├── Stack<T>
│   │
│   ├── Methods
│   │      ├── Push()
│   │      ├── Pop()
│   │      ├── Peek()
│   │      └── Clear()
│   │
│   └── Property
│          └── Count
│
├── Dictionary<TKey, TValue>
│   │
│   ├── Methods
│   │      ├── Add()
│   │      ├── Remove()
│   │      ├── ContainsKey()
│   │      ├── TryGetValue()
│   │      └── Clear()
│   │
│   └── Properties
│          ├── Keys
│          ├── Values
│          └── Count
│
├── HashSet<T>
│   │
│   ├── Methods
│   │      ├── Add()
│   │      ├── Remove()
│   │      ├── UnionWith()
│   │      ├── IntersectWith()
│   │      └── Clear()
│   │
│   └── Property
│          └── Count
│
└── LinkedList<T>
    │
    ├── Methods
    │      ├── AddFirst()
    │      ├── AddLast()
    │      ├── Remove()
    │      ├── Find()
    │      └── Clear()
    │
    └── Properties
           ├── First
           ├── Last
           └── Count
```

- `foreach` hides `MoveNext()` and `Current`.
- `foreach` automatically uses `IEnumerator<T>` internally.
- `IEnumerable<T>` only supports iteration (`foreach`).
- `IEnumerator` only browses the collection.
- `ICollection` browses the collection and also provides count.
- `IList` or `IDictionary` supports browse, count, add, and remove operations.

### Dictionary vs List Lookup Performance

| Feature | `Dictionary<TKey,TValue>` | `List<T>` |
| --- | --- | --- |
| Lookup complexity | **O(1)** average (hash table) | **O(n)** linear scan |
| Key-based access | Yes — `dict[key]`, `TryGetValue` | No — use `Find`, `First`, or loop |
| Order | Not guaranteed | Insertion order preserved |
| Duplicates | Keys must be unique | Allows duplicates |
| Best for | Frequent key lookups, maps | Indexed access, ordered iteration, small sets |

### Common Collection Interfaces

| Interface | Purpose |
| --- | --- |
| `IEnumerable` / `IEnumerable<T>` | Supports iteration using `foreach` |
| `IEnumerator` / `IEnumerator<T>` | Moves through a collection using `MoveNext()` and `Current` |
| `ICollection` / `ICollection<T>` | Supports iteration plus count and basic collection operations |
| `IList` / `IList<T>` | Supports index-based access, add, insert, remove, and search |
| `IDictionary` / `IDictionary<TKey,TValue>` | Stores key-value pairs |
| `ISet<T>` | Supports set operations such as union and intersection |

### `IEnumerable` vs `IEnumerator`

| Feature | `IEnumerable` | `IEnumerator` |
| --- | --- | --- |
| Purpose | Used to iterate collection | Used to move through collection |
| Generic version | `IEnumerable<T>` | `IEnumerator<T>` |
| Main method | `GetEnumerator()` | `MoveNext()`, `Reset()`, `Dispose()` |
| Main property | None | `Current` |
| Used by | Collection classes | `foreach` internally |
| Relation | Creates enumerator | Used by enumerator |

### `IComparable` vs `IComparer`

| Feature | `IComparable` | `IComparer` |
| --- | --- | --- |
| Purpose | Default sorting | Custom sorting |
| Comparison logic | Inside same type | Separate comparer type |
| Method | `CompareTo()` | `Compare()` |
| Namespace | `System` | `System.Collections.Generic` |
| Sorting type | Single/default | Multiple/custom |
| Who controls sorting | Object itself | External comparer |

| Question | Answer |
| --- | --- |
| Generic vs non-generic collections? | Generic = type-safe, no boxing; non-generic stores `object` — legacy |
| `List<T>` vs `Dictionary<K,V>`? | List for indexed access; dictionary for O(1) key lookups |
| `IEnumerable` vs `IEnumerator`? | `IEnumerable` = get enumerator; `IEnumerator` = `MoveNext`/`Current` state machine |
| `HashSet<T>` use case? | Unique items, fast `Contains`, set operations (union/intersect) |
| `Queue` vs `Stack`? | Queue = FIFO (`Enqueue`/`Dequeue`); Stack = LIFO (`Push`/`Pop`) |

**Must-know points:**
- Prefer **generic** collections (`List<T>`, `Dictionary<K,V>`) over `ArrayList`/`Hashtable`
- `foreach` uses `IEnumerator` — modifying collection during iteration throws
- Choose collection by **access pattern**: lookup → Dictionary; order/index → List

---

<a id="topic-8"></a>

## 8. Generics

### What to Learn

- Generic classes
- Generic methods
- Generic interfaces
- Type parameters
- Generic constraints
- `where` keyword
- Covariance
- Contravariance
- Benefits of generics

- Generics allow classes, methods, and interfaces to use a placeholder type such as `T`.
- Generic code can work with different data types safely.
- Generic constraints restrict which types can be used as type arguments.
- Constraints improve compile-time safety and allow access to members of a known base type or interface.

```csharp
class Repository<T> where T : class
{
    public void Add(T item)
    {
        // Add item
    }
}
```

### Common Generic Constraint Examples

| Constraint | Meaning |
| --- | --- |
| `where T : class` | Allows only reference types |
| `where T : struct` | Allows only value types |
| `where T : new()` | Requires a public parameterless constructor |
| `where T : BaseClass` | Requires type to inherit from a specific base class |
| `where T : IInterface` | Requires type to implement a specific interface |

| Question | Answer |
| --- | --- |
| Why generics? | Type safety without boxing; reusable code for any type |
| `where T : class`? | Reference types only |
| `where T : struct`? | Value types only (excludes nullable) |
| Covariance `out`? | `IEnumerable<Derived>` assignable to `IEnumerable<Base>` — output positions |
| Contravariance `in`? | `Action<Base>` assignable to `Action<Derived>` — input positions |

**Must-know points:**
- Generics are resolved at **compile time** — no runtime type erasure like Java
- Constraints enable calling methods on `T` after narrowing type
- `List<int>` avoids boxing that `ArrayList` would cause

---

<a id="topic-9"></a>

## 9. Exception Handling

### What to Learn

- `try`
- `catch`
- `finally`
- `throw`
- `throw ex` vs `throw`
- Custom exceptions
- Exception filters
- Checked and unchecked exceptions concept
- Best practices for exception handling

- Exception handling allows runtime errors to be handled without crashing the application.
- `try` contains code that may throw an exception.
- `catch` handles the exception.
- `finally` runs cleanup code whether an exception occurs or not.
- `throw` preserves the original stack trace.
- `throw ex` resets the stack trace and is usually avoided.
- Do not use exceptions for normal control flow.

| Question | Answer |
| --- | --- |
| `throw` vs `throw ex`? | `throw` preserves stack trace; `throw ex` resets it — avoid `throw ex` |
| `finally` always runs? | Yes — even if `return` in `try` or `catch` (unless process crash) |
| Exception filters? | `catch (Ex ex) when (ex.HResult == …)` — conditional catch |
| When create custom exception? | Domain-specific errors callers should handle distinctly |
| Checked vs unchecked in C#? | C# has no checked exceptions — all are unchecked |

**Must-know points:**
- Catch **specific** exceptions before general ones
- Never swallow exceptions silently — log or rethrow
- `using` + `IDisposable` preferred over relying on finalizers

---

<a id="topic-10"></a>

## 10. Delegates, Events, and Lambda Expressions

### Delegates, Func, Action, Predicate

| Type | Signature | Returns | Example |
| --- | --- | --- | --- |
| `Delegate` | Custom method signature | Varies | `delegate void Notify(string msg);` |
| `Action` | 0–16 parameters | `void` | `Action<string> log = Console.WriteLine;` |
| `Func` | 0–16 params + return type | `TResult` | `Func<int,int,int> add = (a,b) => a + b;` |
| `Predicate<T>` | One `T` parameter | `bool` | `Predicate<int> isEven = n => n % 2 == 0;` |
| Lambda | Inline anonymous function | Varies | `nums.Where(x => x > 5)` |

### Events vs Delegates

| Feature | Delegate field | Event |
| --- | --- | --- |
| Who can invoke? | Anyone holding the reference | Only the declaring class raises it |
| Purpose | General method pointer | Publisher-subscriber encapsulation |
| Multicast | Yes | Yes (backed by delegate) |
| Syntax | `MyDelegate handler;` | `event MyDelegate Handler;` |
| Memory leaks risk | Subscribers must `-=` manually | Same — always unsubscribe in `Dispose` |

### What to Learn

- Delegates
- Multicast delegates
- Anonymous methods
- Lambda expressions
- `Func`
- `Action`
- `Predicate`
- Events
- Event handlers
- Publisher-subscriber pattern

- Delegates are type-safe references to methods.
- `Func` represents a method that returns a value.
- `Action` represents a method that does not return a value.
- `Predicate` represents a method that returns a boolean value.
- Lambda expressions provide a short syntax for anonymous functions.

| Question | Answer |
| --- | --- |
| Delegate vs interface? | Delegate = single method signature; interface = full contract with multiple members |
| Multicast delegate? | Delegate holding multiple methods — invokes all in order |
| `Func` vs `Action`? | `Func` returns value; `Action` returns void |
| Event vs delegate field? | Event restricts invocation to publisher — subscribers use `+=`/`-=` |
| Lambda vs anonymous method? | Lambda is shorter; anonymous method allows more statement bodies |

**Must-know points:**
- Always **unsubscribe** event handlers to prevent memory leaks
- `Predicate<T>` is legacy — prefer `Func<T, bool>`
- Delegates enable LINQ, callbacks, and observer pattern

---

<a id="topic-11"></a>

## 11. LINQ

### LINQ Operators by Category

| Category | Operators | Purpose |
| --- | --- | --- |
| **Filtering** | `Where`, `OfType`, `Distinct` | Narrow the sequence |
| **Projection** | `Select`, `SelectMany` | Transform or flatten elements |
| **Sorting** | `OrderBy`, `OrderByDescending`, `ThenBy`, `ThenByDescending`, `Reverse` | Order results |
| **Grouping** | `GroupBy`, `ToLookup` | Group by key |
| **Joining** | `Join`, `GroupJoin`, `Zip` | Combine two sequences |
| **Aggregation** | `Count`, `Sum`, `Min`, `Max`, `Average`, `Aggregate` | Reduce to scalar |
| **Quantifiers** | `Any`, `All`, `Contains` | Boolean existence checks |
| **Element** | `First`, `FirstOrDefault`, `Single`, `SingleOrDefault`, `Last`, `LastOrDefault`, `ElementAt` | Pick one element |
| **Set** | `Union`, `Intersect`, `Except`, `Distinct` | Set operations |
| **Partition** | `Skip`, `Take`, `SkipWhile`, `TakeWhile` | Pagination and slicing |
| **Conversion** | `ToList`, `ToArray`, `ToDictionary`, `Cast`, `AsEnumerable` | Materialize or convert |

### LINQ Best Practices

| Rule | Why |
| --- | --- |
| Filter before `Select` / `OrderBy` | Smaller working set |
| Use `Any()` not `Count() > 0` | Short-circuits at first match |
| Materialize once when iterating twice | Deferred queries re-execute |
| Push filters to `IQueryable` with EF | Server-side SQL, less memory |
| Avoid `ToList()` in tight loops | Reduces allocations |
| Prefer method syntax for chaining | Composable with lambdas |

### Deferred vs Immediate Execution

| Execution | When it runs | Examples |
| --- | --- | --- |
| **Deferred** | When enumerated (`foreach`, `ToList`, etc.) | `Where`, `Select`, `OrderBy` |
| **Immediate** | As soon as operator is called | `ToList`, `ToArray`, `Count`, `First`, `Sum`, `Max` |

### What to Learn

- What is LINQ?
- LINQ query syntax
- LINQ method syntax
- `Where`
- `Select`
- `SelectMany`
- `OrderBy`
- `OrderByDescending`
- `ThenBy`
- `GroupBy`
- `Join`
- `GroupJoin`
- `Any`
- `All`
- `Contains`
- `First`
- `FirstOrDefault`
- `Single`
- `SingleOrDefault`
- `Last`
- `LastOrDefault`
- `Count`
- `Sum`
- `Min`
- `Max`
- `Average`
- `Distinct`
- `Union`
- `Intersect`
- `Except`
- `Skip`
- `Take`
- `ToList`
- `ToArray`
- `ToDictionary`
- Deferred execution
- Immediate execution
- `IEnumerable` vs `IQueryable`

- LINQ provides query capabilities directly in C#.
- Query syntax looks similar to SQL.
- Method syntax uses extension methods and lambda expressions.
- Deferred execution means query evaluation is delayed until the value is actually needed.
- `ToList()`, `ToArray()`, and `ToDictionary()` force immediate execution.
- `First()` expects at least one element and throws an exception if none exists.
- `FirstOrDefault()` returns the first element or the default value when no element is found.
- `Single()` expects exactly one matching element and throws an exception if none or multiple are found.
- `SingleOrDefault()` returns the default value if no record is found and throws an exception if more than one element matches.
- Pagination can be done using `Skip()` and `Take()`.

```csharp
var page = numbers
    .Skip(0)
    .Take(2)
    .ToList();
```

### `IEnumerable` vs `IQueryable`

| Feature | `IEnumerable` | `IQueryable` |
| --- | --- | --- |
| Namespace | `System.Collections` | `System.Linq` |
| Evaluation | **Client-side** (in-memory) | **Server-side** when provider supports it (e.g. EF → SQL) |
| Data source | Arrays, lists, in-memory collections | EF Core, LINQ to SQL, remote providers |
| Query building | LINQ to Objects | Expression tree translated by provider |
| Extension methods | `System.Linq.Enumerable` | `System.Linq.Queryable` |
| Best for | In-memory filtering/projection | Database and remote query sources |
| Performance pitfall | Pulls all rows then filters in app | Builds SQL — filters at source |

| Scenario | `IEnumerable` behavior | `IQueryable` behavior |
| --- | --- | --- |
| `.Where(x => x.Age > 18)` | Filters in application memory | Translated to `WHERE Age > 18` in SQL |
| Chained operators | Each step in memory | Combined into single query when possible |
| Provider | Always LINQ to Objects | EF Core, NHibernate, etc. |

### `System.Linq` Hierarchy

```text
System.Linq
│
├── IEnumerable<T>
│   │
│   ├── Conversion Methods
│   │      ├── ToList()                : List<T>
│   │      ├── ToArray()               : T[]
│   │      ├── ToDictionary()          : Dictionary<TKey,TValue>
│   │      └── Cast<TResult>()         : IEnumerable<TResult>
│   │
│   ├── Filtering Methods
│   │      ├── Where()                 : IEnumerable<T>
│   │      ├── OfType<TResult>()       : IEnumerable<TResult>
│   │      └── Skip()                  : IEnumerable<T>
│   │
│   ├── Projection Methods
│   │      ├── Select()                : IEnumerable<TResult>
│   │      └── SelectMany()            : IEnumerable<TResult>
│   │
│   ├── Sorting Methods
│   │      ├── OrderBy()               : IOrderedEnumerable<T>
│   │      ├── OrderByDescending()     : IOrderedEnumerable<T>
│   │      ├── ThenBy()                : IOrderedEnumerable<T>
│   │      └── Reverse()               : IEnumerable<T>
│   │
│   ├── Grouping Methods
│   │      ├── GroupBy()               : IEnumerable<IGrouping<TKey,T>>
│   │      └── ToLookup()              : ILookup<TKey,T>
│   │
│   ├── Joining Methods
│   │      ├── Join()                  : IEnumerable<TResult>
│   │      └── GroupJoin()             : IEnumerable<TResult>
│   │
│   ├── Aggregate Methods
│   │      ├── Count()                 : int
│   │      ├── Sum()                   : numeric type
│   │      ├── Min()                   : T
│   │      ├── Max()                   : T
│   │      ├── Average()               : double
│   │      └── Aggregate()             : TResult
│   │
│   ├── Quantifier Methods
│   │      ├── Any()                   : bool
│   │      ├── All()                   : bool
│   │      └── Contains()              : bool
│   │
│   ├── Element Methods
│   │      ├── First()                 : T
│   │      ├── FirstOrDefault()        : T
│   │      ├── Last()                  : T
│   │      ├── LastOrDefault()         : T
│   │      ├── Single()                : T
│   │      └── ElementAt()             : T
│   │
│   ├── Set Methods
│   │      ├── Distinct()              : IEnumerable<T>
│   │      ├── Union()                 : IEnumerable<T>
│   │      ├── Intersect()             : IEnumerable<T>
│   │      └── Except()                : IEnumerable<T>
│   │
│   └── Partition Methods
│          ├── Take()                  : IEnumerable<T>
│          ├── Skip()                  : IEnumerable<T>
│          ├── TakeWhile()             : IEnumerable<T>
│          └── SkipWhile()             : IEnumerable<T>
│
│
└── IQueryable<T>
    │
    ├── Properties
    │      ├── Provider               : IQueryProvider
    │      ├── Expression             : Expression
    │      └── ElementType            : Type
    │
    ├── Methods
    │      ├── Where()                : IQueryable<T>
    │      ├── Select()               : IQueryable<TResult>
    │      ├── OrderBy()              : IOrderedQueryable<T>
    │      ├── GroupBy()              : IQueryable<IGrouping<TKey,T>>
    │      └── Join()                 : IQueryable<TResult>
    │
    └── Converts LINQ query into SQL query
```

| Question | Answer |
| --- | --- |
| Query syntax vs method syntax? | Both compile to same calls — method syntax more common in production |
| `First` vs `FirstOrDefault`? | `First` throws if empty; `FirstOrDefault` returns default |
| `Single` vs `SingleOrDefault`? | Expects exactly one; throws if zero or many (unless `OrDefault`) |
| Deferred execution? | Query not run until enumerated or terminal operator called |
| `IEnumerable` vs `IQueryable`? | In-memory vs expression-tree query — EF needs `IQueryable` for SQL |

**Must-know points:**
- Calling `ToList()` **materializes** — use when you need multiple passes or count
- `SelectMany` flattens nested collections — `from x in xs from y in x.Items` equivalent
- Never call `.ToList()` before `.Where()` on EF queries — kills server-side filtering

---

<a id="topic-12"></a>

## 12. File Handling and Streams

### What to Learn

- `File`
- `FileInfo`
- `Directory`
- `DirectoryInfo`
- `Path`
- `Stream`
- `FileStream`
- `StreamReader`
- `StreamWriter`
- `MemoryStream`
- Reading and writing files
- `using` directive
- `using` statement
- `using` declaration
- Alias directive
- `IDisposable`

- `using` can import namespaces.
- `using` can automatically dispose resources.
- The `using` statement ensures `Dispose()` is called even if an exception occurs.
- `using` can also create an alias for a namespace or type.
- `IDisposable` is commonly used for resources such as files, streams, database connections, and network resources.

```csharp
using System;

using (var stream = new FileStream("file.txt", FileMode.Open))
{
    // Use stream
}

using ProjectA = MyCompany.ProjectA.SubModule;
```

| Question | Answer |
| --- | --- |
| `using` directive vs statement? | Directive = import namespace; statement = `IDisposable` scope |
| `using` declaration (C# 8)? | `using var stream = …` — disposes at end of scope |
| `File` vs `FileStream`? | `File` = static helpers; `FileStream` = low-level byte stream |
| `StreamReader` vs `StreamWriter`? | Text read vs text write — built on `Stream` |
| When use `MemoryStream`? | In-memory buffer — testing, serialization without disk I/O |

**Must-know points:**
- Always dispose streams — `using` ensures `Dispose()` even on exception
- `Path.Combine` handles directory separators cross-platform
- Prefer `async` file APIs (`ReadAllTextAsync`) in ASP.NET Core for scalability

---

<a id="topic-13"></a>

## 13. Memory Management and Garbage Collection

### What to Learn

- Stack memory
- Heap memory
- Managed heap
- Managed memory
- Unmanaged memory
- Garbage collection
- Generations in GC
- Gen 0
- Gen 1
- Gen 2
- Large Object Heap
- Finalizers
- Destructors
- `IDisposable`
- `Dispose()`
- `using` statement
- `using` declaration
- Weak references
- Memory leaks in .NET

### Garbage Collector

- Garbage Collector automatically frees unused managed memory in .NET.
- CLR decides when the Garbage Collector should run.
- Developers generally do not control the exact execution time of GC.
- GC usually runs when memory pressure increases or memory allocation is required.
- Memory cleanup in .NET is called non-deterministic finalization because timing is unpredictable.
- Finalization releases resources before an object is removed from memory.
- A finalizer/destructor is executed when the Garbage Collector cleans the object.
- Finalizers are not guaranteed to run immediately after an object becomes unused.
- Heavy business logic inside finalizers is not recommended.
- Finalizers should mainly be used for unmanaged resource cleanup.
- `Dispose()` provides deterministic cleanup and should be preferred over finalizers.
- The `IDisposable` pattern is commonly used for files, streams, database connections, and similar resources.
- `using` automatically calls `Dispose()` after resource usage.

### Stack vs Heap

| Feature | Stack | Heap |
| --- | --- | --- |
| Speed | Fast | Slower |
| Storage | Local variables, method calls, reference addresses | Objects and dynamically allocated data |
| Managed by | Automatically by method scope | Garbage Collector |
| Size | Smaller | Larger |
| Lifetime | Method scope | Until GC removes object |

### Value Type vs Reference Type

| Feature | Value Type | Reference Type |
| --- | --- | --- |
| Stores | Actual value | Memory address/reference |
| Memory | Usually stack or inline | Heap for actual object |
| Copy behavior | Copies value | Copies reference |
| Nullable | No, except nullable value types | Yes |
| Examples | `int`, `double`, `bool`, `char`, `struct`, `enum`, `DateTime` | `class`, `string`, `array`, `delegate`, `object` |

### GC Generations

| Generation | Purpose |
| --- | --- |
| Gen 0 | Short-lived objects such as temporary objects and method-level objects |
| Gen 1 | Objects that survived Gen 0 collection; buffer between Gen 0 and Gen 2 |
| Gen 2 | Long-lived objects such as static objects, application cache, and long-living references |
| Large Object Heap | Stores objects larger than about 85 KB |

### Useful GC Methods

| Method | Purpose |
| --- | --- |
| `GC.Collect()` | Forces garbage collection manually |
| `GC.GetGeneration()` | Returns the generation of an object |
| `GC.SuppressFinalize()` | Prevents finalizer execution |

### Memory Management Hierarchy

```text
Memory Management in .NET
│
├── Stack Memory
│     └── Stores value types, method calls, and local variables.
│
├── Heap Memory
│     └── Stores reference type objects.
│
├── Managed Memory
│     └── Memory controlled by CLR (.NET Runtime).
│
│     ├── Managed Code
│     │     └── Code executed under CLR.
│     │
│     │     ├── C#
│     │     ├── VB.NET
│     │     └── F#
│     │
│     ├── Managed Heap
│     │     └── Stores managed objects created using new keyword.
│     │
│     └── Garbage Collector (GC)
│           └── Automatically cleans unused managed objects.
│
│           ├── Purpose
│           │     ├── Frees unused memory
│           │     ├── Prevents memory leaks
│           │     └── Manages heap automatically
│           │
│           ├── Generations
│           │     │
│           │     ├── Gen 0
│           │     │     └── Stores short-lived objects.
│           │     │
│           │     │     ├── Example
│           │     │     │     ├── Local objects
│           │     │     │     ├── Temporary strings
│           │     │     │     └── Method-level objects
│           │     │     │
│           │     │     └── Fastest collection
│           │     │
│           │     ├── Gen 1
│           │     │     └── Stores objects surviving Gen 0.
│           │     │
│           │     │     ├── Medium-lived objects
│           │     │     └── Buffer between Gen0 and Gen2
│           │     │
│           │     └── Gen 2
│           │           └── Stores long-lived objects.
│           │
│           │           ├── Example
│           │           │     ├── Static objects
│           │           │     ├── Singleton objects
│           │           │     └── Application cache
│           │           │
│           │           └── Slowest and expensive collection
│           │
│           ├── Large Object Heap (LOH)
│           │     └── Stores objects larger than 85 KB.
│           │
│           ├── GC Methods
│           │     │
│           │     ├── GC.Collect()
│           │     │     └── Forces garbage collection manually.
│           │     │
│           │     ├── GC.GetGeneration()
│           │     │     └── Returns generation of object.
│           │     │
│           │     └── GC.SuppressFinalize()
│           │           └── Prevents finalizer execution.
│           │
│           └── Object Lifecycle
│                 │
│                 ├── Object Created
│                 │     └── Stored in Gen 0
│                 │
│                 ├── Survives Collection
│                 │     └── Moved to Gen 1
│                 │
│                 ├── Survives Again
│                 │     └── Moved to Gen 2
│                 │
│                 └── No References
│                       └── Removed by GC
│
└── Unmanaged Memory
      └── Memory/resources outside CLR control.
      
      ├── Unmanaged Resources
      │     ├── File Handles
      │     ├── Database Connections
      │     ├── Network Sockets
      │     ├── COM Objects
      │     └── Printer Resources
      │
      ├── Not cleaned directly by GC
      │
      └── Manual Cleanup
            │
            ├── IDisposable
            │     └── Provides cleanup mechanism.
            │
            ├── Dispose()
            │     └── Releases unmanaged resources manually.
            │
            └── using statement
                  └── Automatically calls Dispose().
```

| Question | Answer |
| --- | --- |
| Stack vs heap? | Stack = value types, locals, fast; heap = objects, GC-managed |
| Gen 0 / 1 / 2? | Short-lived → survived → long-lived; Gen 2 collections are expensive |
| LOH? | Objects ≥ ~85 KB on Large Object Heap — collected with Gen 2 |
| `Dispose` vs finalizer? | `Dispose` = deterministic cleanup; finalizer = non-deterministic safety net |
| Memory leak in .NET? | Usually event handlers, static collections, or undisposed unmanaged handles |

**Must-know points:**
- Prefer **`using`** over finalizers for files, streams, DB connections
- `GC.Collect()` — rarely needed; can hurt performance
- Value types on stack; reference type **object** on heap, **reference** may be on stack

---

<a id="topic-14"></a>

## 14. Asynchronous Programming

### Synchronous vs Asynchronous

| Aspect | Synchronous | Asynchronous |
| --- | --- | --- |
| Thread blocking | Thread waits until I/O completes | Thread released during I/O |
| Responsiveness | UI/server thread can freeze | UI stays responsive; server handles more requests |
| Return type | Normal return | `Task`, `Task<T>`, `ValueTask` |
| Keywords | None | `async` / `await` |
| Best for | CPU-bound quick work | I/O-bound — network, DB, file |

### Async Programming Rules

| Rule | Detail |
| --- | --- |
| `async` all the way | Don't mix blocking calls in async methods |
| Avoid `Task.Result` / `.Wait()` | Causes deadlocks on sync context (ASP.NET legacy) |
| Return `Task` not `void` | Except event handlers |
| Use `ConfigureAwait(false)` in libraries | Avoids capturing UI/sync context |
| Prefer `await` over `ContinueWith` | Cleaner exception propagation |
| Name async methods with `Async` suffix | Convention — `GetDataAsync()` |
| Don't wrap purely CPU work in fake async | Use `Task.Run` for CPU offload, not `Task.Delay(0)` |
| Propagate `CancellationToken` | Cooperative cancellation through call chain |

### `Task.WhenAll` vs `Task.WhenAny`

| API | Behavior | Use case |
| --- | --- | --- |
| `Task.WhenAll(t1, t2)` | Waits for **all** tasks; throws first exception | Parallel independent I/O (multiple API calls) |
| `Task.WhenAny(tasks)` | Returns when **first** completes | Timeout race, first-available result |
| `await Task.WhenAll(...)` | Unwraps when all done | `var results = await Task.WhenAll(t1, t2);` |

### `CancellationToken` Pattern

| Step | Code / behavior |
| --- | --- |
| Create source | `var cts = new CancellationTokenSource();` |
| Pass token | `await HttpClient.GetAsync(url, cts.Token);` |
| Cancel | `cts.Cancel();` — sets token to cancelled state |
| Check in loop | `token.ThrowIfCancellationRequested();` |
| Timeout | `cts.CancelAfter(TimeSpan.FromSeconds(30));` |
| Propagate | Pass same token to all nested async calls |

### What to Learn

- Synchronous vs asynchronous programming
- `Task`
- `Task<T>`
- `async`
- `await`
- `Task.Run`
- `Task.Wait`
- `Task.WhenAll`
- `Task.WhenAny`
- `ContinueWith`
- Cancellation token
- Deadlocks in async code
- ConfigureAwait concept
- ValueTask basics

- Asynchronous programming helps keep applications responsive and non-blocking.
- `Task` represents an asynchronous operation.
- `Task<T>` represents an asynchronous operation that returns a value.
- `async` and `await` simplify asynchronous programming.
- `Task.Run()` runs code on a background thread through the thread pool.
- `Task.WhenAll()` waits for all tasks to complete.
- `Task.WhenAny()` waits for the first completed task.
- `CancellationToken` cancels long-running tasks safely.

| Question | Answer |
| --- | --- |
| `Task` vs `Task<T>`? | `Task` = no return value; `Task<T>` = async operation returning `T` |
| `async` without `await`? | Compiler warning — method runs synchronously |
| `Task.Run` purpose? | Offload CPU-bound work to thread pool |
| Async deadlock cause? | `.Result`/`.Wait()` on UI/ASP.NET sync context blocks continuation |
| `ValueTask` vs `Task`? | `ValueTask` reduces allocation when result often synchronous |

**Must-know points:**
- Async is for **I/O-bound** work — not a magic speedup for CPU loops
- `await` captures context by default — use `ConfigureAwait(false)` in library code
- Always pass **CancellationToken** through public async APIs

---

<a id="topic-15"></a>

## 15. Multithreading and Parallel Programming

### What to Learn

- Process vs thread
- Thread lifecycle
- `Thread` class
- Foreground thread
- Background thread
- Thread pool
- Task Parallel Library
- `Task`
- `Task<T>`
- `Parallel.For`
- `Parallel.ForEach`
- `Parallel.Invoke`
- PLINQ
- Locking
- `lock` keyword
- `Monitor`
- `Mutex`
- `Semaphore`
- `SemaphoreSlim`
- `ReaderWriterLock`
- Race conditions
- Deadlocks
- Thread safety
- Concurrent collections
- Concurrency vs parallelism

### Concurrency vs Parallelism

| Feature | Concurrency | Parallelism |
| --- | --- | --- |
| Meaning | Multiple tasks **make progress** (may interleave) | Multiple tasks **run simultaneously** on multiple cores |
| Execution | Time-slicing on one or more cores | True simultaneous execution |
| CPU cores | Works on single core | Requires multiple cores for real parallelism |
| Goal | Responsiveness, structuring work | Throughput, CPU utilization |
| Shared state | Often shares data — needs synchronization | Often partitions work — less contention |
| C# examples | `async`/`await`, `Task`, event-driven | `Parallel.For`, `Parallel.ForEach`, PLINQ |
| Analogy | One chef switching between dishes | Multiple chefs cooking at once |

### Thread vs TPL

| Feature | `Thread` | TPL |
| --- | --- | --- |
| Level | Low-level | High-level |
| Namespace | `System.Threading` | `System.Threading.Tasks` |
| Management | Manual | Automatic |
| Performance | Slower/heavier | Faster/lighter |
| Resource usage | Heavy | Lightweight |
| Recommended today | Less common | Most common |
| Uses ThreadPool | No by default | Yes |

### TPL Hierarchy

```text
TPL (Task Parallel Library)
│
├── Purpose
│     └── Simplifies concurrent and parallel programming in .NET.
│
├── Built On
│     └── ThreadPool
│
├── Core Components
│     │
│     ├── Task
│     │     └── Represents asynchronous operation.
│     │
│     ├── Task<TResult>
│     │     └── Task that returns value/result.
│     │
│     ├── async / await
│     │     └── Simplifies asynchronous programming.
│     │
│     ├── CancellationToken
│     │     └── Cancels running task safely.
│     │
│     └── ContinueWith()
│           └── Executes task after previous task completes.
│
├── Task Execution Methods
│     │
│     ├── Task.Run()
│     │     └── Runs code in background thread.
│     │
│     ├── Task.Wait()
│     │     └── Waits for task completion.
│     │
│     ├── Task.WhenAll()
│     │     └── Waits for all tasks to complete.
│     │
│     └── Task.WhenAny()
│           └── Waits for first completed task.
│
├── Parallel Programming
│     │
│     ├── Parallel.For()
│     │     └── Executes loop iterations in parallel.
│     │
│     ├── Parallel.ForEach()
│     │     └── Executes collection items in parallel.
│     │
│     ├── Parallel.Invoke()
│     │     └── Executes multiple methods simultaneously.
│     │
│     └── PLINQ
│           └── Executes LINQ queries in parallel.
│
├── Best Use Cases
│     │
│     ├── async/await + Task.WhenAll()
│     │     └── API calls, DB calls, network operations.
│     │
│     ├── Parallel.ForEach()
│     │     └── CPU-intensive processing.
│     │
│     ├── Task.Run()
│     │     └── Background processing.
│     │
│     └── CancellationToken
│           └── Cancel long-running operations.
│
└── Benefits
      │
      ├── Better performance
      ├── Automatic thread management
      ├── Better scalability
      ├── Simplified async programming
      ├── Efficient CPU utilization
      └── Easier than manual threading
```

### Synchronization Tools

| Tool | Purpose |
| --- | --- |
| `lock` | Allows only one thread at a time inside a critical section |
| `Monitor` | Advanced thread synchronization mechanism |
| `Mutex` | Synchronizes threads across processes |
| `Semaphore` | Allows a limited number of threads simultaneously |
| `SemaphoreSlim` | Lightweight in-process semaphore |
| `ReaderWriterLock` | Allows multiple readers but a single writer |

### Concurrency Control Hierarchy

```text
Concurrency Control
│
├── Programming Concurrency
│     └── Multiple tasks making progress together.
│
│     ├── Multithreading
│     │     └── Multiple threads executing in application.
│     │
│     ├── async/await
│     │     └── Non-blocking asynchronous execution.
│     │
│     ├── Task Parallel Library (TPL)
│     │     └── Task-based concurrent programming in .NET.
│     │
│     ├── Parallelism
│     │     └── Multiple tasks executing simultaneously on multiple CPU cores.
│     │
│     └── Synchronization
│           │
│           ├── lock
│           │     └── Allows only one thread at a time.
│           │
│           ├── Monitor
│           │     └── Advanced thread synchronization mechanism.
│           │
│           ├── Mutex
│           │     └── Synchronizes threads across processes. Only one instance.
│           │
│           ├── Semaphore
│           │     └── Allows limited number of threads simultaneously. More sophisticated version of mutex. Out-of-process.
│           │
│           ├── SemaphoreSlim
│           │     └── More sophisticated version of lock and monitor. In-process.
│           │
│           └── ReaderWriterLock
│                 └── Multiple readers but single writer.
│
└── Database Concurrency Control
      └── Prevents data conflicts when multiple users access same data.
      
      ├── Why Concurrency Control?
      │     │
      │     ├── Dirty Read
      │     │     └── Reading uncommitted data.
      │     │
      │     ├── Unrepeatable Read
      │     │     └── Same query returns different values.
      │     │
      │     ├── Phantom Read
      │     │     └── New rows appear during same transaction.
      │     │
      │     └── Lost Update
      │           └── One update overwrites another update.
      │
      ├── Concurrency Types
      │     │
      │     ├── Optimistic Concurrency (Most Common)
      │     │     │
      │     │     ├── Assumes conflicts are rare.
      │     │     ├── No immediate lock on data.
      │     │     ├── Conflict checked during update.
      │     │     ├── Better performance and scalability.
      │     │     ├── Mostly used in Web Apps & EF Core.
      │     │     │
      │     │     ├── SQL Server
      │     │     │     ├── RowVersion
      │     │     │     ├── Timestamp
      │     │     │     └── Version Column
      │     │     │
      │     │     └── EF Core
      │     │           ├── [Timestamp]
      │     │           ├── IsRowVersion()
      │     │           ├── Concurrency Token
      │     │           └── DbUpdateConcurrencyException
      │     │
      │     └── Pessimistic Concurrency
      │           │
      │           ├── Assumes conflicts are common.
      │           ├── Locks data immediately.
      │           ├── Other users must wait.
      │           ├── Prevents simultaneous updates.
      │           ├── Mostly used in Banking & Payment Systems.
      │           │
      │           ├── Lock Types
      │           │     │
      │           │     ├── Row Lock
      │           │     │     └── Locks single row.
      │           │     │
      │           │     ├── Page Lock
      │           │     │     └── Locks group of rows/pages.
      │           │     │
      │           │     ├── Table Lock
      │           │     │     └── Locks entire table.
      │           │     │
      │           │     ├── Dataset Lock
      │           │     │     └── Locks complete dataset/result set.
      │           │     │
      │           │     ├── Shared Lock (S)
      │           │     │     └── Multiple users can read but not update.
      │           │     │
      │           │     ├── Exclusive Lock (X)
      │           │     │     └── Only one transaction can read/write.
      │           │     │
      │           │     ├── Update Lock (U)
      │           │     │     └── Used before converting to exclusive lock.
      │           │     │
      │           │     ├── Intent Lock
      │           │     │     └── Indicates lower-level locks will be used.
      │           │     │
      │           │     └── Schema Lock
      │           │           └── Prevents schema modifications.
      │           │
      │           └── Transactions
      │                 │
      │                 ├── BEGIN TRANSACTION
      │                 │     └── Starts transaction scope.
      │                 │
      │                 ├── COMMIT
      │                 │     └── Saves all changes permanently.
      │                 │
      │                 ├── ROLLBACK
      │                 │     └── Reverts all changes.
      │                 │
      │                 └── WITH (UPDLOCK, ROWLOCK)
      │                       └── Applies pessimistic locking in SQL Server.
      │
      └── Isolation Levels
            │
            ├── Read Uncommitted
            │     └── Allows dirty reads.
            │
            ├── Read Committed
            │     └── Prevents dirty reads.
            │
            ├── Repeatable Read
            │     └── Prevents unrepeatable reads.
            │
            ├── Snapshot
            │     └── Uses row versioning for consistency.
            │
            └── Serializable
                  └── Highest isolation and strict consistency.
```

- Optimistic locking assumes that concurrency conflicts will rarely happen, so there is no lock; it only checks old values against new values during update.

| Question | Answer |
| --- | --- |
| Process vs thread? | Process = isolated app instance; thread = execution unit within process |
| `lock` vs `Monitor`? | `lock` is syntactic sugar for `Monitor.Enter`/`Exit` |
| Race condition? | Unsynchronized shared mutable state — unpredictable results |
| Deadlock? | Two threads each hold a lock the other needs — circular wait |
| `ConcurrentDictionary` vs `Dictionary` + lock? | Built-in thread-safe operations without manual locking |

**Must-know points:**
- Prefer **TPL** (`Task`, `Parallel`) over raw `Thread` for most scenarios
- `lock` only works on **reference types** — lock on private readonly object, not `this` or strings
- `async`/`await` is concurrency; `Parallel.For` is parallelism

---

<a id="topic-16"></a>

## 16. Reflection and Attributes

### What to Learn

- Reflection basics
- `Type`
- `typeof`
- `GetType`
- `Activator.CreateInstance`
- Reading metadata
- Invoking public members
- Attributes
- Built-in attributes
- Custom attributes
- Use cases of reflection
- Performance impact of reflection

- Reflection allows a program to inspect and interact with types and metadata dynamically at runtime.
- Reflection can be used to read metadata and invoke members dynamically.
- `dynamic` uses runtime binding and may use reflection-like behavior internally.

### `typeof` vs `GetType()`

| Feature | `typeof` | `GetType()` |
| --- | --- | --- |
| Works on | Type name (compile-time) | Object instance (runtime) |
| Evaluated | Compile time | Runtime |
| Returns | `Type` object | `Type` of **actual** runtime type |
| Null safe | Yes — no instance needed | No — throws on null instance |
| Syntax | `typeof(int)` | `obj.GetType()` |
| Polymorphism | Returns declared type name | Returns derived type if overridden |

### `dynamic` vs Reflection

| Feature | `dynamic` | Reflection |
| --- | --- | --- |
| Purpose | Late-bound member access | Inspect/invoke types and metadata at runtime |
| Syntax | Natural — `dyn.Method()` | Verbose — `type.GetMethod("M").Invoke(...)` |
| Compile-time checking | None | None for invoked members |
| Performance | DLR cache helps; still slower | Slow — avoid in hot paths |
| Use case | COM interop, JSON to dynamic | Plugins, serializers, DI containers |
| Type info | Implicit at runtime | Explicit `Type`, `PropertyInfo`, etc. |

| Question | Answer |
| --- | --- |
| What is reflection? | Runtime inspection of types, methods, properties via `System.Reflection` |
| `typeof` vs `GetType()`? | `typeof` on type name at compile time; `GetType()` on instance — returns runtime type |
| Custom attributes? | Metadata on types/members — read via reflection (`[Serializable]`, `[Required]`) |
| Performance cost? | Reflection is slow — cache `MethodInfo` if used repeatedly |
| `Activator.CreateInstance`? | Creates object from `Type` at runtime — used in factories/DI |

**Must-know points:**
- Attributes don't **do** anything alone — something must read them (serializer, validator, framework)
- `dynamic` uses DLR — not the same as reflection but similar late binding
- Prefer compile-time generics over reflection when possible

---

<a id="topic-17"></a>

## 17. Records, Tuples, and Modern C# Features

### Collection Expressions (C# 12)

| Syntax | Equivalent | Notes |
| --- | --- | --- |
| `int[] a = [1, 2, 3];` | `new int[] { 1, 2, 3 }` | Works for arrays, spans, lists |
| `[..existing, 4]` | Spread operator — append items | Combines collections |
| `List<int> list = [1, 2];` | `new List<int> { 1, 2 }` | Target-typed |

### Primary Constructors

| Feature | Traditional constructor | Primary constructor (C# 12) |
| --- | --- | --- |
| Syntax | Fields + ctor body | `class Person(string name) { }` |
| DI in ASP.NET Core | Explicit ctor parameters | `class Svc(ILogger log) : ISvc` — params become fields |
| Validation | In ctor body | Can use ctor body block after declaration |
| Inheritance | Standard `base()` | Primary params passed to base |

### Pattern Matching

| Pattern | Example | Use |
| --- | --- | --- |
| Type / declaration | `if (obj is string s)` | Type check + cast in one step |
| Switch expression | `status switch { 1 => "Ok", _ => "?" }` | Expression-bodied switch |
| Relational | `x is > 0 and < 100` | Range checks |
| Property | `person is { Age: > 18 }` | Deconstruct and match properties |
| Null guard | `ArgumentNullException.ThrowIfNull(arg);` | .NET 6+ guard clauses |

### Switch Statement vs Expression

| Feature | `switch` statement | `switch` expression |
| --- | --- | --- |
| Returns value | No (uses `break`) | Yes — assigned to variable |
| Syntax | `case` / `break` | `pattern => result` |
| Exhaustiveness | Optional `default` | Compiler warns if not exhaustive |
| Example | `switch(x) { case 1: … break; }` | `var r = x switch { 1 => "a", _ => "b" };` |

### What to Learn

- Records
- Record classes
- Record structs
- Tuples
- Deconstruction
- Pattern matching
- Nullable reference types
- Init-only properties
- Required members
- Target-typed `new`
- Global using
- File-scoped namespace
- Primary constructors
- Collection expressions
- `yield return`
- `yield break`
- Enum

### Yield: `yield return` vs Returning a List

| Feature | `yield return` | `return list` |
| --- | --- | --- |
| Execution | Deferred — one item at a time | Eager — builds entire list first |
| Memory | O(1) extra — no full buffer | O(n) — holds all items in memory |
| State | Iterator preserves position between calls | All items materialized upfront |
| Return type | `IEnumerable` / `IEnumerable<T>` | `List<T>` or similar |
| Best for | Large/streaming sequences, pipelines | Small collections, need count/index |

- `yield` supports deferred execution.
- Values are returned one at a time when requested, not all at once.
- `yield return` returns the current value and pauses execution.
- `yield break` stops the iteration completely.
- `yield` preserves state between iterations.
- `yield` improves memory usage because all values do not need to be stored in a temporary list.
- `yield` works with `IEnumerable` and `IEnumerable<T>` for custom iteration.

### Enum

- An enum represents a group of named constants.
- Enum is a value type.
- Default enum values start from `0`.
- Values can be custom defined.
- Enum values can be cast to integers and integers can be cast to enum values.

| Question | Answer |
| --- | --- |
| Record vs class? | Record = value-based equality, `with` expressions, concise syntax for DTOs |
| Tuple vs record? | Tuple = lightweight anonymous grouping; record = named named type with semantics |
| `init` vs `set`? | `init` = set only during object initialization |
| Nullable reference types? | `string?` vs `string` — compile-time null analysis (C# 8+) |
| `yield return` benefit? | Lazy iteration — memory efficient for large sequences |

**Must-know points:**
- Records: `public record Person(string Name, int Age);` — positional syntax
- Deconstruction: `(var x, var y) = tuple;` or `var (a, b) = point;`
- File-scoped namespace: `namespace MyApp;` — less indentation (C# 10)

---

<a id="topic-18"></a>

## 18. Testing in C#

### What to Learn

- Unit testing
- Integration testing
- Test-driven development basics
- xUnit
- NUnit
- MSTest
- Mocking
- Moq or similar libraries
- Arrange, Act, Assert pattern
- Test coverage

- Unit tests verify small units of logic independently.
- Integration tests verify multiple parts working together.
- Mocking replaces external dependencies with controlled test objects.
- Arrange, Act, Assert keeps tests readable and consistent.

| Question | Answer |
| --- | --- |
| Unit vs integration test? | Unit = isolated logic; integration = multiple components + real dependencies |
| xUnit vs NUnit vs MSTest? | xUnit most common in .NET Core OSS; all support `[Fact]`/`[Test]` patterns |
| What is mocking? | Replace dependencies with test doubles (Moq, NSubstitute) |
| AAA pattern? | Arrange setup → Act execute → Assert verify |
| TDD? | Write failing test first, then minimal code to pass, then refactor |

**Must-know points:**
- Tests should be **fast**, **isolated**, **repeatable**, **self-validating**
- Mock **interfaces**, not concrete classes when possible
- Integration tests often use `WebApplicationFactory` in ASP.NET Core

---

<a id="topic-19"></a>

## 19. Advanced C# Concepts

### Serialization Flow

| Step | Component | Action |
| --- | --- | --- |
| 1 | Object (in memory) | .NET object graph in heap |
| 2 | Serializer (`System.Text.Json`, Newtonsoft) | Converts object to JSON/XML/binary |
| 3 | Wire format | JSON string, XML, protobuf bytes |
| 4 | Transport | HTTP body, file, message queue |
| 5 | Deserializer | Reconstructs object from wire format |
| 6 | Object (restored) | New instance — not same reference as original |

### Key C# Keywords Quick Reference

| Keyword | Purpose |
| --- | --- |
| `ref` / `out` / `in` | Parameter passing modifiers |
| `async` / `await` | Asynchronous programming |
| `yield` | Iterator blocks |
| `lock` | Thread synchronization |
| `nameof` | Compile-time safe name string |
| `stackalloc` | Stack-allocated buffer |
| `scoped` | Limits ref struct lifetime (C# 11) |
| `required` | Caller must set property (C# 11) |
| `file` | File-local types (C# 11) |

### Better Alternatives

| Instead of | Prefer | Why |
| --- | --- | --- |
| `string` concat in loop | `StringBuilder` | Fewer allocations |
| `ArrayList` | `List<T>` | Type safety |
| `Parse()` on user input | `TryParse()` | No exception on failure |
| `throw ex` | `throw` | Preserves stack trace |
| `.Result` / `.Wait()` | `await` | Avoids deadlocks |
| `Substring` in hot path | `AsSpan().Slice()` | Zero-allocation slice |
| Reflection in hot path | Compiled expressions / source generators | Performance |

### What to Learn

- Expression trees
- Dynamic keyword
- Unsafe code
- Pointers
- Span<T>
- Memory<T>
- Ref structs
- Attributes in depth
- Source generators
- Interceptors concept
- Analyzers
- Nullable annotations
- Custom awaiters

- `dynamic` delays type checking until runtime.
- Runtime errors are possible with `dynamic` if the expected member does not exist.
- Expression trees represent code as data and are commonly used by query providers.
- Unsafe code allows pointer operations but should be used carefully.
- `Span<T>` and `Memory<T>` help work efficiently with contiguous memory while reducing allocations.

| Question | Answer |
| --- | --- |
| Expression trees? | Code represented as data — EF translates `IQueryable` to SQL |
| `Span<T>` vs array? | `Span` = stack-only view over memory; no heap allocation for slice |
| `ref struct`? | Must live on stack — cannot box or use as class field |
| Source generators? | Compile-time code generation — reduces reflection at runtime |
| Unsafe code? | Pointers with `unsafe` block — bypasses type safety, use sparingly |

**Must-know points:**
- `Span<T>` and `ReadOnlySpan<T>` enable high-performance string/array processing
- `Memory<T>` is heap-safe alternative when `Span` can't be stored
- `dynamic` bypasses compile-time checking — runtime errors possible

---

<a id="topic-20"></a>

## 20. Performance and Best Practices

### `AsSpan` vs `Substring`

| Feature | `Substring` | `AsSpan().Slice()` |
| --- | --- | --- |
| Allocation | **New string** on heap | **No allocation** — view over existing memory |
| Return type | `string` | `ReadOnlySpan<char>` |
| Lifetime | Independent copy | Must not outlive source string |
| Use case | Need new string instance | Parsing, tokenizing, comparisons in hot paths |
| Performance | Slower for many slices | Faster — zero-copy |

### What to Learn

- Big O basics
- Avoiding unnecessary allocations
- Choosing the right collection
- String performance
- `StringBuilder`
- Boxing and unboxing performance
- Async performance
- LINQ performance considerations
- Caching basics
- Profiling basics
- BenchmarkDotNet basics
- Logging best practices
- Exception handling best practices
- Naming conventions

### Naming Conventions

| Type | Convention | Example |
| --- | --- | --- |
| Property | PascalCase | `FirstName` |
| Method | PascalCase | `CalculateTotal()` |
| Class | PascalCase | `EmployeeService` |
| Interface | PascalCase with `I` prefix | `IRepository` |
| Local variable | camelCase | `firstName` |
| Parameter | camelCase | `userId` |
| Private field | `_camelCase` | `_userService` |
| Constant | PascalCase | `MaxLimit` |

- Choose the correct collection based on access pattern and lookup needs.
- Avoid repeated string concatenation in loops; use `StringBuilder`.
- Avoid unnecessary boxing and unboxing.
- Prefer `TryParse()` for user input.
- Avoid using exceptions for normal control flow.
- Use LINQ carefully for large collections when performance matters.
- Use profiling and benchmarking to measure performance instead of guessing.

| Question | Answer |
| --- | --- |
| Big O for `List` lookup vs `Dictionary`? | List O(n); Dictionary O(1) average |
| When use `StringBuilder`? | Repeated string modifications in loops |
| LINQ performance tip? | Defer `ToList()`; filter early; avoid LINQ in tight hot loops |
| BenchmarkDotNet? | NuGet package for statistically valid micro-benchmarks |
| Naming: private field? | `_camelCase` with underscore prefix |

**Must-know points:**
- Measure first — **BenchmarkDotNet** / dotMemory / Visual Studio profiler
- Avoid premature optimization — optimize proven bottlenecks
- `struct` for small immutable value types can reduce heap pressure

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### What is C#?

| Aspect | Detail |
| --- | --- |
| Definition | Modern, type-safe, object-oriented language by Microsoft |
| Runs on | .NET runtime (CLR) |
| Use cases | Web, desktop, mobile, cloud, games |
| Key strength | Rich ecosystem, strong typing, LINQ, async/await |

> **One-liner:** C# is a versatile .NET language for building type-safe apps from web APIs to desktop tools.

### .NET Framework vs .NET Core / .NET

| Point | .NET Framework | .NET Core / .NET 5+ |
| --- | --- | --- |
| Platform | Windows only | Cross-platform (Win, Linux, Mac) |
| Status | Maintenance mode | Active development (.NET 8, 9…) |
| Deployment | Machine-wide GAC possible | Self-contained or framework-dependent |
| Performance | Older runtime | Faster, modular, cloud-optimized |

> **One-liner:** Use modern **.NET** for new projects; Framework remains for legacy Windows apps.

### Managed Code vs Unmanaged Code

| Point | Managed Code | Unmanaged Code |
| --- | --- | --- |
| Runtime | Runs under CLR with GC | Runs outside CLR (native C/C++) |
| Memory | GC handles allocation/cleanup | Manual `malloc`/`free` |
| Safety | Type-safe, bounds-checked | Pointer-based, developer-managed |
| Interop | P/Invoke, `unsafe` blocks call unmanaged | DLLs, COM, native libraries |

> **One-liner:** C# is managed by default; unmanaged code is native code you call via interop.

### Array vs ArrayList

| Point | Array | ArrayList |
| --- | --- | --- |
| Type safety | Fixed type (`int[]`) | Stores `object` — not type-safe |
| Size | Fixed at creation | Dynamically grows |
| Performance | Faster, no boxing | Slower, boxing for value types |
| Modern alternative | `T[]` or `List<T>` | Prefer `List<T>` in new code |

> **One-liner:** Use typed arrays or `List<T>` — avoid legacy `ArrayList`.

### IEnumerable vs ICollection vs IList

| Point | IEnumerable | ICollection | IList |
| --- | --- | --- | --- |
| Purpose | Forward-only iteration | Iterate + count + add/remove | Index-based list access |
| Count | No (`Count()` extension) | Yes (`Count` property) | Yes |
| Modify collection | No | Yes (`Add`, `Remove`) | Yes + `Insert`, indexer |
| Index access | No | No | Yes — `list[i]` |

> **One-liner:** IEnumerable reads; ICollection modifies; IList adds index-based access.

### Value Type vs Reference Type

| Point | Value Type | Reference Type |
| --- | --- | --- |
| Storage | Stack (or inline in object) | Heap — variable holds reference |
| Copy behavior | Copies the value | Copies the reference (same object) |
| Examples | `int`, `struct`, `enum` | `class`, `string`, arrays |
| Null | Cannot be null (except `Nullable<T>`) | Can be null |

> **One-liner:** Value types copy data; reference types copy pointers to shared heap objects.

### What are Generics (`<T>`)?

| Aspect | Detail |
| --- | --- |
| Purpose | Write reusable, type-safe code for any type |
| Syntax | `List<T>`, `Dictionary<TKey,TValue>`, `void Method<T>(T item)` |
| Benefit | Compile-time type checking, no boxing |
| Constraints | `where T : class`, `struct`, `new()`, interface |

> **One-liner:** Generics let one implementation work for many types without casting or boxing.

### What is Reflection?

| Aspect | Detail |
| --- | --- |
| Definition | Inspect and invoke types, methods, properties at runtime |
| Namespace | `System.Reflection` |
| Use cases | Serialization, DI containers, ORM mapping, plugins |
| Trade-off | Powerful but slower than compile-time code |

> **One-liner:** Reflection reads type metadata at runtime — use sparingly due to performance cost.

### IEnumerable vs IQueryable

| Point | IEnumerable | IQueryable |
| --- | --- | --- |
| Execution | In-memory (client) | Deferred — can translate to SQL |
| Best for | LINQ-to-Objects, collections | LINQ-to-Entities / EF Core |
| Expression tree | No | Yes — provider builds remote query |
| When queried | `foreach` / terminal operator | Provider executes (e.g. SQL to DB) |

> **One-liner:** Use `IQueryable` with EF so filtering runs on the database, not in memory.

### First vs FirstOrDefault

| Point | First() | FirstOrDefault() |
| --- | --- | --- |
| No match | Throws `InvalidOperationException` | Returns default (`null`, `0`) |
| Use when | You expect exactly one item | Match may not exist |
| With predicate | `First(x => x.Id == 1)` | `FirstOrDefault(x => x.Id == 1)` |
| Empty sequence | Throws | Returns default |

> **One-liner:** Prefer `FirstOrDefault` unless absence of a match should be an error.

### Single vs SingleOrDefault

| Point | Single() | SingleOrDefault() |
| --- | --- | --- |
| No match | Throws | Returns default |
| More than one match | Throws | Throws |
| Use when | Exactly one item required | Zero or one expected |
| Typical use | Unique key lookup | Optional unique record |

> **One-liner:** `Single` enforces uniqueness; `SingleOrDefault` allows zero or one result only.

### Delegates and Events

| Concept | Meaning | Example |
| --- | --- | --- |
| Delegate | Type-safe function pointer | `Func<int,int>`, `Action` |
| Multicast | Delegate holds multiple methods | `del += MethodB` |
| Event | Restricted delegate — only publisher invokes | `public event EventHandler Click` |
| Pattern | Observer / pub-sub within a class | WinForms, WPF, custom notifications |

> **One-liner:** Delegates reference methods; events wrap delegates so only the owner can raise them.