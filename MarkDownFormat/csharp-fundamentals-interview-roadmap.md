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

- C# is a statically typed, object-oriented language developed by Microsoft.
- C# source code uses `.cs` files and is organized into **namespaces** and **classes**.
- The `using` directive imports namespaces so you can use types without fully qualifying them.
- Every console app needs an entry point — typically `static void Main()` or top-level statements.
- Statements end with a semicolon (`;`); code blocks use `{ }`.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

| Question | Answer |
| --- | --- |
| What is C#? | Statically typed, object-oriented language for building .NET applications |
| Namespace? | Logical container for types — avoids naming conflicts |
| `using` directive? | Imports a namespace for shorter type names |
| `Main` method? | Application entry point |
| Top-level statements? | C# 9+ — write code without explicit `Main` in one file |

**Must-know points:**
- C# is **case-sensitive**
- `//` single-line and `/* */` multi-line comments
- **`var`** infers type at compile time (still strongly typed)

---

<a id="topic-2"></a>

## 2. Variables, Data Types, and Operators

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

### `struct` vs `class`

| `struct` | `class` |
| --- | --- |
| Value type | Reference type |
| Stored in stack/directly in containing type | Object stored in heap, reference stored in variable |
| Copy creates new value | Copy creates new reference to same object |
| Cannot inherit from another struct/class | Supports inheritance |
| Best for small data | Best for complex objects |

```csharp
struct Point
{
    public int X;
}

class Person
{
    public string Name;
}
```

### Type Safety, Casting, and Conversion

| Concept | Detail |
| --- | --- |
| Implicit cast | Safe widening — automatic (`int` → `double`) |
| Explicit cast | Narrowing — manual `(type)value`, data loss possible |
| Casting | `(type)value` — compatible types |
| Conversion | `Convert`, `Parse`, `TryParse` — strings, nulls, objects |

```csharp
int a = 10;
double b = a;           // Implicit

int y = (int)10.5;      // Explicit — data loss
```

| | `Convert` | `Parse` | `TryParse` | `is` | `as` |
| --- | --- | --- | --- | --- | --- |
| Use | Any type → target type | String → value type | String → value type | Check type | Cast reference type |
| Returns | Converted value | Parsed value | `bool` + `out` value | `bool` | Casted type or `null` |
| On failure | Default (e.g. `0` for null) | Throws exception | Returns `false` | Returns `false` | Returns `null` |
| Best for | `null` / mixed types | Trusted valid input | User input | Inheritance check | Safe downcast |

**Boxing / Unboxing:** Value type → `object` (heap allocation) → cast back. Avoid in hot paths.

### `var` vs `dynamic`

| | `var` | `dynamic` |
| --- | --- | --- |
| Type checking | Compile time | Runtime |
| Type safety | Strong | Weak |

### `const` vs `readonly`

| | `const` | `readonly` |
| --- | --- | --- |
| Set at | Declaration only | Declaration or constructor |
| Scope | Always static | Instance or static |

### Null Operators

| Operator | Use |
| --- | --- |
| `?.` | Safe member access — short-circuits on null |
| `??` | Default when left side is null |
| `??=` | Assign only if variable is null |

```csharp
string city = customer?.Address?.City;
string name = input ?? "Guest";
```

| Question | Answer |
| --- | --- |
| `var` vs `dynamic`? | `var` = compile-time type; `dynamic` = runtime binding |
| `const` vs `readonly`? | `const` = compile-time static; `readonly` = set once at runtime |
| `struct` vs `class`? | `struct` = value type, copy by value; `class` = reference type, copy shares same object |
| Boxing cost? | Heap allocation + GC pressure — avoid in loops/collections |

**Must-know points:**
- Implicit = safe widening; explicit = narrowing with possible **data loss**
- **`TryParse`** for user input; **`Convert`** when value may be `null`; **`is`** to check, **`as`** to cast safely
- Use **`struct`** for small immutable data; **`class`** for objects with behavior and identity

---

<a id="topic-3"></a>

## 3. Control Flow Statements

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

- Named parameters are used to specify an argument by name instead of position.
- Optional parameters allow some arguments to be skipped by providing default values.
- `params` is used when a method can accept a variable number of parameters.
- `out` and `ref` can be used to return or modify more than one value from a method.
- `out` is used to return a new value. The variable does not need to be initialized before being passed.
- `ref` is used to modify an existing value. The variable must be initialized before being passed.

### `ref` vs `out`

| `ref` | `out` |
| --- | --- |
| Pass variable by reference; must be initialized before passing | Pass variable by reference; must be assigned inside method |
| Used for input + output | Used only for output |

#### `ref` Example — modify existing value

```csharp
using System;

class Program
{
    static void Increase(ref int number)
    {
        number = number + 10;
    }

    static void Main()
    {
        int value = 5;   // must initialize before ref

        Increase(ref value);

        Console.WriteLine(value);   // 15
    }
}
```

#### `out` Example — return multiple values

```csharp
using System;

class Program
{
    static void GetValues(out int age, out string name)
    {
        age = 25;
        name = "Akash";
    }

    static void Main()
    {
        int age;
        string name;

        GetValues(out age, out name);

        Console.WriteLine(age);     // 25
        Console.WriteLine(name);    // Akash
    }
}
```

| Question | Answer |
| --- | --- |
| `ref` vs `out`? | `ref` = input + output, must init before call; `out` = output only, assign inside method |
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

- Extension methods allow adding new methods to an existing type without modifying the original source code.
- Extension methods must be declared inside a static class.
- Extension methods themselves must be static.
- The `this` keyword binds the extension method to the target type.
- Extension methods are useful when you want to add helper behavior to a type whose source code you do not control.

```csharp
using System;
using System.Collections.Generic;

// Extension methods must be in a static class
public static class DictionaryExtensions
{
    public static void PrintKeyValue<TKey, TValue>(this Dictionary<TKey, TValue> dictionary)
    {
        foreach (var pair in dictionary)
            Console.WriteLine($"Key: {pair.Key}, Value: {pair.Value}");
    }
}

class Program
{
    static void Main()
    {
        var users = new Dictionary<int, string>
        {
            { 1, "Akash" },
            { 2, "Ravi" },
            { 3, "Priya" }
        };

        users.PrintKeyValue();
    }
}
```

**Output:**
```text
Key: 1, Value: Akash
Key: 2, Value: Ravi
Key: 3, Value: Priya
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

- C# strings are objects.
- `string` is a reference type.
- `string` is a C# alias for `System.String`.
- `String` and `string` work identically.
- String objects are created in heap memory.
- Strings are immutable, meaning the value cannot be changed after creation.
- When a string is modified, a new string object is created.
- String interning allows the runtime to store only one copy of identical string literals.
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

- Exception handling allows runtime errors to be handled without crashing the application.
- `try` contains code that may throw an exception.
- `catch` handles the exception.
- `finally` runs cleanup code whether an exception occurs or not.
- `throw` preserves the original stack trace.
- `throw ex` resets the stack trace and is usually avoided.
- Do not use exceptions for normal control flow.

### Exception vs InnerException

```csharp
/*
    Exception
    - Main/current error object.
    - Contains error message, stack trace, type, etc.

    InnerException
    - Original/root exception inside another exception.
    - Used when we catch one exception and throw a new custom exception.
    - Helps to know actual reason of failure.

    Interview line:
    Exception is the current error, InnerException is the original error that caused it.
*/

try
{
    try
    {
        int x = int.Parse("abc"); // Original error
    }
    catch (Exception ex)
    {
        // Wrapping original exception inside new exception
        throw new Exception("Failed to convert string to number", ex);
    }
}
catch (Exception ex)
{
    Console.WriteLine("Exception Message:");
    Console.WriteLine(ex.Message);

    Console.WriteLine();

    Console.WriteLine("InnerException Message:");
    Console.WriteLine(ex.InnerException?.Message);
}

/*
Output:

Exception Message:
Failed to convert string to number

InnerException Message:
The input string 'abc' was not in a correct format.
*/
```

> **Interview line:** **Exception** is the current error; **InnerException** is the original error that caused it.

| Question | Answer |
| --- | --- |
| Exception vs InnerException? | Exception = current/wrapped error; InnerException = original root cause |
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

- A **delegate** is a type-safe function pointer — it holds a reference to a method.
- **Lambda** (`x => x * x`) is shorthand for an anonymous method, often assigned to delegates.
- An **event** is a wrapper around a delegate — it notifies listeners when something happens. Others can listen (`+=`), but only the class that owns the event can fire it (`Invoke`).

### Built-in Delegate Types

| Type | Returns | Use |
| --- | --- | --- |
| `Func` | A value | Compute and return (last generic = return type) |
| `Action` | `void` | Execute side effects |
| `Predicate` | `bool` | Test a condition (`Func<T, bool>`) |

```csharp
// Delegate — type-safe function pointer; holds reference of a method

// Types of Delegate:
// Func      => returns a value
// Action    => returns void
// Predicate => returns bool

Func<int, int> square = x => x * x;
Action<string> print = msg => Console.WriteLine(msg);
Predicate<int> isEven = x => x % 2 == 0;
```

### Event — Basic Example

```csharp
// Event — wrapper around delegate; notifies subscribers when something happens

public event Action OnSaved;

OnSaved += () => Console.WriteLine("Saved");
OnSaved?.Invoke();
```

### Delegate vs Event

| | Delegate field | Event |
| --- | --- | --- |
| External `=` assignment | Allowed | Blocked |
| External `Invoke` | Allowed | Blocked |
| `+=` / `-=` subscribe | Yes | Yes |
| Purpose | General callback | One class notifies others who are listening |

```csharp
public class DocumentService
{
    public event Action? OnSaved;

    public void Save()
    {
        // save logic...
        OnSaved?.Invoke();  // only this class can fire the event
    }
}

var service = new DocumentService();
service.OnSaved += () => Console.WriteLine("Saved");
service.Save();
```

| Question | Answer |
| --- | --- |
| What is a delegate? | Type-safe function pointer — holds reference of a method |
| `Func` vs `Action` vs `Predicate`? | Returns value / void / bool |
| What is a lambda? | Inline anonymous function for delegates and LINQ |
| What is an event? | Wrapper around delegate — notifies listeners; only owner can fire it |
| Why events over public delegates? | Prevents outsiders from invoking or overwriting handlers |
| Multicast delegate? | `+=` chains multiple methods; all run on `Invoke` |

**Must-know points:**
- `Func` last type parameter is always the **return type**
- `?.Invoke()` safely calls only when subscribers exist
- Unsubscribe with `-=` to avoid **memory leaks** on long-lived publishers
- Common in UI (`Click`), domain notifications, and LINQ (`Where(x => ...)`)

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

### First / FirstOrDefault / Single / SingleOrDefault

When to use each — based on **how many matches** you expect:

| LINQ Method | **0 Match (Empty)** | **1 Match** | **2+ Matches** |
| --- | --- | --- | --- |
| **First()** | ❌ Throws `InvalidOperationException` | ✅ Returns the first element | ✅ Returns the first element |
| **FirstOrDefault()** | ✅ Returns `default(T)` (`null`, `0`, etc.) | ✅ Returns the first element | ✅ Returns the first element |
| **Single()** | ❌ Throws `InvalidOperationException` | ✅ Returns the only element | ❌ Throws `InvalidOperationException` |
| **SingleOrDefault()** | ✅ Returns `default(T)` (`null`, `0`, etc.) | ✅ Returns the only element | ❌ Throws `InvalidOperationException` |

#### When to Use Which

| Method | Rule |
| --- | --- |
| **First()** | You expect **at least one** record |
| **FirstOrDefault()** | Record **may or may not** exist |
| **Single()** | You expect **exactly one** record (enforces uniqueness) |
| **SingleOrDefault()** | Record may not exist, but if it exists there must be **only one** |

```csharp
var users = new List<User> { new(1, "Akash"), new(2, "Raj") };

// First — at least one expected
var first = users.First();                             // User id=1
var missing = users.Where(u => u.Id == 99).First();    // throws

// FirstOrDefault — may not exist
var found = users.FirstOrDefault(u => u.Id == 99);       // null

// Single — exactly one expected (e.g. unique key)
var only = users.Single(u => u.Id == 1);               // User id=1
var dup = users.Single(u => u.Age > 0);                // throws (2+ matches)

// SingleOrDefault — zero or one only
var opt = users.SingleOrDefault(u => u.Id == 1);        // User id=1
var none = users.SingleOrDefault(u => u.Id == 99);     // null
```

**Interview one-liner:** `First` = need at least one; `FirstOrDefault` = optional; `Single` = exactly one required; `SingleOrDefault` = zero or one only.

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

### Garbage Collector

- Garbage Collector automatically frees unused managed memory in .NET.
- The runtime decides when the Garbage Collector should run.
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

### Dispose vs Finalizer

| Aspect | `Dispose()` | Finalizer (`~ClassName()`) |
| --- | --- | --- |
| **When it runs** | Deterministic — when you call `Dispose()` or exit a `using` block | Non-deterministic — when GC collects the object |
| **Who triggers it** | Developer (or `using` / `using var`) | Garbage Collector |
| **Interface** | `IDisposable.Dispose()` | Destructor syntax `~ClassName()` |
| **Timing guarantee** | Runs immediately (or at end of scope) | No guarantee — may run late or never |
| **Managed resources** | Safe to release (other managed objects, streams, etc.) | Avoid — other managed objects may already be collected |
| **Unmanaged resources** | Yes — primary use case | Yes — safety net if `Dispose()` was never called |
| **Performance** | Lightweight; no extra GC overhead | Adds object to finalization queue; extra GC pass — slower |
| **Exception safety** | Exceptions can be handled normally | Exceptions in finalizers are swallowed by the runtime |
| **Multiple calls** | Should be idempotent — guard with `_disposed` flag | Runs at most once per object |
| **Suppress** | Call `GC.SuppressFinalize(this)` after cleanup to skip finalizer | N/A |
| **Typical use** | Files, streams, DB connections, sockets, `HttpClient` | Rare — only when wrapping unmanaged handles and implementing full dispose pattern |
| **Preferred?** | **Yes** — always prefer `using` / explicit `Dispose()` | Last-resort backup only |

```csharp
class FileWrapper : IDisposable {
    private bool _disposed;
    private FileStream _stream;

    public void Dispose() {
        Dispose(true);
        GC.SuppressFinalize(this); // skip finalizer — already cleaned up
    }

    protected virtual void Dispose(bool disposing) {
        if (_disposed) return;
        if (disposing) _stream?.Dispose(); // managed — only when disposing == true
        // release unmanaged handles here (both paths)
        _disposed = true;
    }

    ~FileWrapper() => Dispose(false); // finalizer safety net
}
```

### Stack vs Heap

| Feature | Stack | Heap |
| --- | --- | --- |
| Speed | Fast | Slower |
| Storage | Local variables, method calls, reference addresses | Objects and dynamically allocated data |
| Managed by | Automatically by method scope | Garbage Collector |
| Size | Smaller | Larger |
| Lifetime | Method scope | Until GC removes object |

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
├── Garbage Collector (GC)
│     ├── Purpose
│     │     ├── Frees unused memory
│     │     ├── Prevents memory leaks
│     │     └── Manages heap automatically
│     │
│     ├── Generations
│     │     ├── Gen 0 — short-lived objects (fastest collection)
│     │     ├── Gen 1 — survived Gen 0 (buffer)
│     │     └── Gen 2 — long-lived objects (expensive collection)
│     │
│     ├── Large Object Heap (LOH) — objects larger than ~85 KB
│     │
│     └── Object Lifecycle
│           ├── Created → Gen 0
│           ├── Survives → Gen 1 → Gen 2
│           └── No references → removed by GC
│
└── Unmanaged Resources (outside GC)
      ├── File handles, DB connections, sockets
      └── Manual cleanup via IDisposable / using
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

### Concurrency vs Parallelism

> **Interview trap:** "Executing multiple tasks at the same time" is only **~50% correct**. Concurrency means multiple tasks **in progress** — they may share one core through **time slicing**. Parallelism means tasks run **simultaneously on different cores**.

![Concurrency vs Parallelism comparison table — goal, perspective, and resource utilization](/assets/csharp/concurrency-vs-parallelism-table.png)

| | **Concurrency** | **Parallelism** |
| --- | --- | --- |
| **Definition** | Multiple tasks overlap on the **same core** (time slicing) | Multiple tasks on **different cores** at the same instant |
| **Goal** | **Usability** — keep app responsive | **Performance** — faster CPU-bound work |
| **Perspective** | Software design — cooperative overlapping work | Hardware — true simultaneous execution |
| **Resource use** | Light | Heavy |
| **Keyword** | **Non-blocking** | **Multi-core speedup** |

![Concurrency and parallelism in the real world — juggler (one worker, many tasks) vs office cubicles (many workers at once)](/assets/csharp/concurrency-parallelism-real-world.png)

| Real-world analogy | Maps to |
| --- | --- |
| **Juggler** — one person, many balls in progress | **Concurrency** — one thread, tasks take turns |
| **Many cubicles** — many people working at once | **Parallelism** — many cores/threads simultaneously |

| Statement | Correct? |
| --- | --- |
| Concurrency is about **performance** | **No** — it is about **usability** and responsiveness |
| Parallelism is about **performance** | **Yes** — use multiple cores for CPU-bound speedup |
| Async/await is a type of **concurrency** | **Yes** — non-blocking overlap, not necessarily parallel |
| Concurrent apps can be **nondeterministic** in order | **Yes** — intermediate sequence may vary |

![Concurrent applications can be nondeterministic in execution order](/assets/csharp/concurrency-nondeterministic.png)

![Final output can still be deterministic even when intermediate steps run in varying order](/assets/csharp/concurrency-deterministic-output.png)

> **Interview line:** **Non-blocking = concurrency** (usability). **Performance = parallelism** (multi-core). `async`/`await` is a form of concurrency — not the same as parallelism.

### Async/Await — A Form of Concurrency

Async is **not mainly about creating threads**. For I/O-bound work, the goal is **usability** — keep the main thread free so the app stays responsive.

![Async is about making the application usable — not primarily about performance](/assets/csharp/async-usability-not-performance.png)

| About async | Not about async |
| --- | --- |
| Making application **usable** | Improving raw **performance** |
| **Non-blocking** main thread | Creating new threads for every call |

![What async is about vs not about](/assets/csharp/async-about-not-about.png)

**Blocking — thread waits (bad for usability):**

```csharp
static void Main(string[] args)
{
    SomeMethod();                        // blocks 20 seconds
    Console.WriteLine("Main method code");
}

static void SomeMethod()
{
    Task.Delay(20000).Wait();            // blocks caller thread
}
```

![Blocking example — Task.Delay().Wait() freezes the main thread](/assets/csharp/async-blocking-wait-example.png)

**Non-blocking — main thread continues (concurrency):**

```csharp
static void Main(string[] args)
{
    SomeMethod();                        // starts async work, returns immediately
    Console.WriteLine("Main method code"); // prints right away
}

static async void SomeMethod()
{
    await Task.Delay(20000);             // releases thread during wait
}
```

![Non-blocking async — await releases the thread until the delay completes](/assets/csharp/async-nonblocking-await-example.png)

![Main thread continues ahead while Task.Delay runs — non-blocking flow](/assets/csharp/async-nonblocking-main-thread.png)

**Fire-and-forget downloads — app stays usable while files download:**

```csharp
static void Main(string[] args)
{
    NewMethod();   // download file 1 (async)
    NewMethod1();  // download file 2 (async)

    Console.WriteLine("Start data input, enter your name");
    string str = Console.ReadLine();       // user can type while downloads run
}
```

![Async fire-and-forget downloads — UI stays responsive during Task.Delay](/assets/csharp/async-fire-and-forget-downloads.png)

| Myth | Reality |
| --- | --- |
| "Async always creates threads" | **No** — async I/O often uses **zero** extra threads |
| "Asynchronous code does not use threads" | **Mostly true for I/O** — thread is released during wait; continuation *may* use a pool thread |
| Can you do non-blocking with threads? | Yes — `Task.Factory.StartNew` uses **worker threads** — but it is **resource-intensive** |

![Async does not use or create threads — common interview claim for I/O-bound work](/assets/csharp/async-does-not-create-threads.png)

![Task.Factory.StartNew spawns worker threads visible in debugger](/assets/csharp/async-task-startnew-worker-threads.png)

### SynchronizationContext and Worker Threads

| Term | Meaning |
| --- | --- |
| **Main thread** | UI thread or entry thread — must stay responsive |
| **Worker thread** | Any thread **other than** the main thread — often from **ThreadPool** |
| **SynchronizationContext** | Captures *where* `await` resumes — UI thread in WPF/WinForms; none in ASP.NET Core console |

After `await`, code after the wait may resume on a **different worker thread** (especially in console apps with no sync context):

![Why extra worker thread after await — continuation may run on ThreadPool thread](/assets/csharp/async-worker-thread-after-await.png)

```csharp
// WPF/WinForms — await captures SynchronizationContext → resumes on UI thread
// ASP.NET Core / Console — no sync context → may resume on any ThreadPool thread
await Task.Delay(1000);
Console.WriteLine("After await");  // might be worker thread in console app
```

The compiler implements `async`/`await` using a **state machine** — the hidden mechanism behind non-blocking code:

![State machines — the hidden recipe behind async/await](/assets/csharp/async-state-machine-hidden-recipe.png)

**Summarizing async vs threading:**

- **Async does not create threads** — for I/O, the thread is released during `await`
- **Async uses state machines internally** — compiler-generated `IAsyncStateMachine`
- **Without `SynchronizationContext`**, async can resume on a **ThreadPool** thread for the remaining code
- **Asynchrony is a form of concurrency** — overlap without blocking; not always parallelism
- You **can** implement non-blocking with threads (`Task.Run` / `StartNew`) — but it is **resource-intensive**
- **Usability vs performance** — async/concurrency = usability; parallelism = performance

![Summarizing — async, state machines, sync context, concurrency, usability vs performance](/assets/csharp/async-summarizing.png)

### What Happens Under the Hood

**1. `await` is a state machine, not a thread swap**

The compiler rewrites your `async` method into a state machine that resumes at the `await` point. No new thread is guaranteed. In WPF/WinForms, `await` captures the `SynchronizationContext` so the continuation resumes on the UI thread.

**2. The classic deadlock: `.Result` blocking the thread the continuation needs**

The UI thread blocks on `.Result` or `.Wait()` → the `async` method tries to resume on that same UI thread → neither side proceeds. Fix: stay **async all the way up** — no mixed `.Result` or `.Wait()`.

```csharp
// BAD — deadlock on UI thread or ASP.NET (legacy) sync context
var data = GetDataAsync().Result;

// GOOD
var data = await GetDataAsync();
```

**3. `ConfigureAwait(false)` matters in libraries — and is a no-op in ASP.NET Core**

ASP.NET Core has no `SynchronizationContext` to capture, so `ConfigureAwait(false)` changes nothing there. It is essential in **WPF/WinForms library code** when you do not need to resume on the UI thread.

```csharp
// Library code — avoid capturing UI context
await client.GetAsync(url).ConfigureAwait(false);
```

**4. `TaskCompletionSource` bridges callback APIs into `Task`**

Use it to wrap event-based or callback APIs as `await`-able tasks. Always create with **`TaskCreationOptions.RunContinuationsAsynchronously`** — without it, the callback thread can synchronously run every continuation waiting on that task.

```csharp
var tcs = new TaskCompletionSource<string>(
    TaskCreationOptions.RunContinuationsAsynchronously);

someCallbackApi.OnComplete += result => tcs.SetResult(result);
someCallbackApi.OnError += ex => tcs.SetException(ex);

return tcs.Task;
```

**5. `async void` outside event handlers is a silent crash waiting to happen**

Exceptions thrown inside `async void` cannot be caught by the caller — they crash the process via the unobserved exception path. Use **`async Task`** everywhere except UI event handlers where the signature is forced.

```csharp
// BAD — exception cannot be caught by caller
async void LoadData() { throw new Exception(); }

// GOOD
async Task LoadDataAsync() { /* ... */ }
```

### Async Programming Rules

| Rule | Detail |
| --- | --- |
| `async` all the way | Don't mix blocking calls in async methods |
| Avoid `Task.Result` / `.Wait()` | Causes deadlocks when continuation needs the blocked thread (UI / legacy sync context) |
| Return `Task` not `void` | Except UI event handlers — `async void` exceptions crash the process |
| Use `ConfigureAwait(false)` in libraries | Skips UI `SynchronizationContext`; no-op in ASP.NET Core |
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
| Concurrency vs parallelism? | Concurrency = overlapping tasks (usability/non-blocking); parallelism = simultaneous multi-core execution (performance) |
| Is "multiple tasks at same time" concurrency? | Only partly — true concurrency can time-slice on **one core** |
| Is async a type of concurrency? | **Yes** — non-blocking overlap; not necessarily parallel |
| Async goal — performance or usability? | **Usability** — responsive UI/server thread; parallelism is for CPU speedup |
| Does async create threads? | **Not for I/O** — thread released during wait; continuation may use ThreadPool |
| What is a worker thread? | Any thread other than the main thread — often ThreadPool background thread |
| What is SynchronizationContext? | Decides where `await` resumes — UI thread in WPF/WinForms; none in ASP.NET Core |
| `Task` vs `Task<T>`? | `Task` = no return value; `Task<T>` = async operation returning `T` |
| `async` without `await`? | Compiler warning — method runs synchronously |
| `Task.Run` purpose? | Offload CPU-bound work to thread pool |
| `Task` vs `Thread`? | Task = operation; async I/O often uses no new thread; `Task.Run`/parallel uses ThreadPool |
| Async deadlock cause? | `.Result`/`.Wait()` blocks the thread the `await` continuation needs to resume on |
| `ConfigureAwait(false)` in ASP.NET Core? | No-op — no `SynchronizationContext`; still useful in WPF/WinForms libraries |
| `async void` risk? | Exceptions not catchable by caller — only for UI event handlers |
| `TaskCompletionSource` use? | Wrap callback/event APIs as `Task`; use `RunContinuationsAsynchronously` |
| What does `await` compile to? | State machine that resumes after I/O — not a guaranteed thread switch |
| `ValueTask` vs `Task`? | `ValueTask` reduces allocation when result often synchronous |

**Must-know points:**
- **Concurrency** = usability + **non-blocking**; **parallelism** = **performance** on multiple cores
- `async`/`await` is a **form of concurrency** — not the same as parallelism
- "Multiple tasks at the same time" describes parallelism better than concurrency
- Async I/O does **not** guarantee a new thread — `await` uses a **state machine**
- **SynchronizationContext** controls resume thread (UI in WPF/WinForms; ThreadPool in console)
- **Worker thread** = any non-main thread; may appear after `await` without sync context
- Async is for **I/O-bound** work — not a magic speedup for CPU loops
- `await` is a **state machine** resume, not a thread swap — no new thread for async I/O
- `await` captures context by default — `ConfigureAwait(false)` in libraries; **no-op in ASP.NET Core**
- Never `.Result`/`.Wait()` on UI thread — **async all the way** to avoid deadlock
- `async void` only for UI events; use `async Task` everywhere else
- `TaskCompletionSource` + **`RunContinuationsAsynchronously`** when bridging callbacks to `Task`
- Always pass **CancellationToken** through public async APIs

---

<a id="topic-15"></a>

## 15. Multithreading and Parallel Programming

### Concurrency vs Parallelism — Thread, Async/Await, TPL

```csharp
// CONCURRENCY
// - Multiple tasks are in progress at same time logically.
// - They may not run at exact same time.
// - Best for I/O work: API call, DB call, file read.
//
// Examples: async/await, Task.WhenAll

public async Task ConcurrencyExample()
{
    Task<string> userTask = GetUserAsync();
    Task<string> orderTask = GetOrderAsync();

    // Both tasks are in progress together
    await Task.WhenAll(userTask, orderTask);
}

// PARALLELISM
// - Multiple tasks actually run at same time on multiple CPU cores.
// - Best for CPU-heavy work: calculation, image processing, large data processing.
//
// Examples: Thread, Task.Run, Parallel.For / Parallel.ForEach

public void ParallelismExample()
{
    Parallel.For(1, 5, i =>
    {
        Console.WriteLine($"Processing {i}");
    });
}

// THREAD — actual execution unit; manual low-level parallel work
Thread thread = new Thread(() =>
{
    Console.WriteLine("Running on separate thread");
});
thread.Start();

// ASYNC / AWAIT — non-blocking wait; mostly concurrency, not pure parallelism
public async Task<string> GetDataAsync()
{
    HttpClient client = new HttpClient();
    return await client.GetStringAsync("https://api.com/data");
}

// TPL — Task Parallel Library; Task, Task.Run, Parallel.For; uses ThreadPool
Task task = Task.Run(() =>
{
    Console.WriteLine("Running using TPL");
});
```

### Time Slicing vs True Parallelism

On a **single processor**, multiple threads do **not** run at the same time. The OS uses **time slicing** — it switches rapidly between threads via **context switching**. That is **concurrency**, not true **parallelism**.

![Single processor — Thread 1 and Thread 2 share one CPU through time slicing and context switching](/assets/csharp/single-processor-time-slicing.png)

| Single core | Multi-core |
| --- | --- |
| One thread runs at a time | Multiple threads can run **simultaneously** |
| OS switches between threads (context switch) | Thread 1 on Processor 1, Thread 2 on Processor 2 |
| Feels concurrent, not parallel | **True parallelism** — real speedup for CPU work |

![True parallelism — Thread 1 on Processor 1 and Thread 2 on Processor 2 at the same time](/assets/csharp/multicore-true-parallelism.png)

| Term | Meaning |
| --- | --- |
| **Time slicing** | CPU gives each thread a small time slice, then switches |
| **Context switching** | Save thread state, load another thread — has overhead |
| **True parallelism** | Two+ threads executing on different cores at the same instant |

> **Interview line:** Many threads on one core = time slicing + context switching, not real parallelism. Real parallelism needs multiple cores running work simultaneously.

### Foreground vs Background Thread

Every `Thread` is either **foreground** or **background**. This controls whether the thread keeps the process alive.

| Type | `IsBackground` | Keeps process alive? | Typical examples |
| --- | --- | --- | --- |
| **Foreground** | `false` (default for `new Thread()`) | **Yes** — CLR waits for it to finish | Main UI thread, worker you must complete before exit |
| **Background** | `true` | **No** — process exits when all foreground threads end | `ThreadPool` threads, daemon-style workers |

```csharp
// Foreground thread (default) — app waits for this to finish
Thread fg = new Thread(() => DoWork());
fg.IsBackground = false;
fg.Start();

// Background thread — app can exit even if this is still running
Thread bg = new Thread(() => DoWork());
bg.IsBackground = true;
bg.Start();
```

| Question | Answer |
| --- | --- |
| Main thread type? | **Foreground** — keeps the app running |
| `ThreadPool` thread type? | **Background** — reused workers, do not block shutdown alone |
| What happens on app exit? | CLR stops all **background** threads; waits for **foreground** threads |
| When set `IsBackground = true`? | Short-lived workers that should not prevent process shutdown |

> **Interview line:** Foreground threads keep the process alive; background threads do not. `ThreadPool` threads are always background — prefer them over creating foreground threads manually.

### Thread Pooling

Creating a **new `Thread` per request** is expensive: allocate a thread object, reserve stack memory, then garbage-collect when done. There is also a **practical limit** on how many threads the OS can handle — too many hurts **performance**.

**Thread pooling** reuses a fixed set of worker threads instead of create-and-destroy every time.

```
Request
   │
   ├─ BAD: new Thread() → Resources allocated → Task executed → GC ❌
   │
   └─ GOOD: Queue work → ThreadPool picks idle thread → Task executed → thread returns to Pool ✅
```

![Thread pooling vs creating new threads — reuse pool workers instead of per-request thread allocation](/assets/csharp/thread-pooling-lifecycle.png)

![Thread pooling — hundreds of tasks reuse threads picked from the pool](/assets/csharp/thread-pool-hundreds-tasks.png)

| Approach | Cost | Best for |
| --- | --- | --- |
| `new Thread()` each time | High — creation + GC + no reuse | Rare — when you need full thread control |
| **ThreadPool** (`Task.Run`, `Parallel.For`) | Low — reuse existing workers | Most CPU offload and parallel work |

```csharp
// Uses ThreadPool — preferred
Task.Run(() => ProcessItem(item));

// Parallel loop — also uses ThreadPool
Parallel.For(0, 100, i => Process(i));

// Manual queue to pool
ThreadPool.QueueUserWorkItem(_ => DoWork());
```

**Pooling must-know:**
- `Task.Run`, `Parallel.For`, and `Parallel.ForEach` all use the **ThreadPool** internally
- Pool threads are **background** threads — efficient for short work items
- Avoid `new Thread()` in hot paths (per HTTP request, per message) — use `Task.Run` or async I/O instead
- Thread creation has overhead and limits — pooling improves throughput under load

| Concept | Meaning | Comes Under Mostly |
| --- | --- | --- |
| Thread | Actual worker/execution path | Parallelism |
| `async`/`await` | Non-blocking wait | Concurrency |
| `Task` | Represents future work | Concurrency / TPL |
| `Task.WhenAll` | Runs multiple async operations together | Concurrency |
| `Task.Run` | Runs work on ThreadPool thread | Parallelism |
| `Parallel.For` | Runs loop iterations on multiple threads | Parallelism |
| TPL | .NET library for Task and Parallel APIs | Both |

**Easy remember:**
- **Concurrency** = Multiple tasks in progress
- **Parallelism** = Multiple tasks running at same time
- **Thread** = Actual worker
- **async/await** = Non-blocking wait
- **TPL** = Task + Parallel library

### Task vs Thread — Task Encapsulates Threading

`Task` is a **higher-level encapsulation over threading**. You describe *what work* to do; the runtime maps it to `ThreadPool` threads, scheduling, and completion — you do not manage raw `Thread` objects yourself.

```csharp
using System.Threading;       // Thread, ThreadPool — low-level
using System.Threading.Tasks; // Task, Parallel — TPL (high-level)
```

![System.Threading vs System.Threading.Tasks namespaces](/assets/csharp/threading-namespaces.png)

| | `Thread` | `Task` / TPL |
| --- | --- | --- |
| Level | Low-level — manual create/start/join | High-level — represents an operation |
| Who schedules? | You — or OS time-slices on one core | TPL + ThreadPool — partitions across cores |
| Multicore use | Manual — you must split work yourself | `Parallel.For` auto-splits work across cores |
| Best for | Rare — full thread control | Most async and parallel scenarios |

```csharp
Task task = SomeAsyncMethod();
// Does NOT mean a new thread was created.

Task.Run(() => { /* work */ });
// Usually uses a ThreadPool thread.
```

> **Interview line:** **Task is not equal to Thread.** Task is encapsulation over threading — an operation abstraction. For async I/O, Task usually does **not** create a new thread. For `Task.Run` or `Parallel.For`, TPL uses **ThreadPool** threads across available cores.

### TPL — Multicore Processing

**TPL (Task Parallel Library)** uses processors better than manual `new Thread()` because it **partitions work** and schedules it across all available CPU cores.

![TPL encapsulates multi-core execution](/assets/csharp/tpl-multicore-encapsulation.png)

```csharp
// Manual thread — one thread, you split work yourself
// Thread o1 = new Thread(RunMillionIterations);
// o1.Start();

// TPL — splits 1 million iterations across cores automatically
Parallel.For(0, 1_000_000, _ => RunMillionIterations());

private static void RunMillionIterations()
{
    string x = "";
    for (int i = 0; i < 1_000_000; i++)
        x += "s";
}
```

![Parallel.For partitions loop work across Core 1 and Core 2 with synchronization](/assets/csharp/parallel-for-multicore-partition.png)

![Parallel.For example — TPL splits million iterations across cores instead of one manual thread](/assets/csharp/parallel-for-million-iterations.png)

**What TPL does for you:**

| Manual `Thread` | TPL (`Parallel.For`, `Task.Run`) |
| --- | --- |
| You create and manage each thread | Runtime queues work to **ThreadPool** |
| OS time-slices on single core unless you assign work per core | **Partitions** loop/work across multiple cores |
| No built-in sync for shared results | Handles **work stealing**, partitioning, and sync |
| High creation overhead per thread | Reuses pool threads — better throughput |

| Concept | Meaning |
| --- | --- |
| **Core affinity** | OS maps threads to CPU cores — you want work spread across cores, not piled on one |
| **TPL multicore** | `Parallel.For` / `Parallel.ForEach` divide iterations across available processors |
| **Synchronization** | When parallel paths update shared state (`Variable [X]`), use `lock` or thread-safe types |

> **Interview line:** Raw threading on one core is time slicing. TPL **encapsulates multicore execution** — it partitions CPU-bound work so Thread 1 runs on Processor 1, Thread 2 on Processor 2, without you managing cores manually.

### TPL Hierarchy — Task Parallel Library

```csharp
/*
.NET
 └── System.Threading.Tasks namespace
      └── TPL - Task Parallel Library
           ├── Task
           │    ├── Task              // async work without return value
           │    ├── Task<T>           // async work with return value
           │    ├── Task.Run()        // run work on ThreadPool
           │    ├── Task.Delay()      // delay without blocking thread
           │    ├── Task.WhenAll()    // wait for multiple tasks
           │    └── Task.WhenAny()    // wait for any one task
           │
           ├── Parallel
           │    ├── Parallel.For()        // parallel loop
           │    └── Parallel.ForEach()    // parallel foreach loop
           │
           ├── PLINQ
           │    └── AsParallel()      // parallel LINQ query
           │
           └── ThreadPool
                └── Used internally by Task and Parallel
*/

// Easy interview line:
// TPL is part of System.Threading.Tasks namespace.
// It provides Task, Task<T>, Parallel, and PLINQ to write async and parallel code.
// Internally, TPL uses ThreadPool.

// Simple flow:
// async/await → Task / Task<T> → TPL → ThreadPool → Threads

using System.Threading.Tasks;

Task task = Task.Run(() =>
{
    Console.WriteLine("Task running using TPL");
});

Parallel.For(1, 5, i =>
{
    Console.WriteLine(i);
});
```

**Easy interview line:** TPL is in `System.Threading.Tasks` — provides `Task`, `Task<T>`, `Parallel`, and PLINQ; internally uses **ThreadPool**.

**Simple flow:** `async/await` → `Task` / `Task<T>` → TPL → ThreadPool → Threads

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

### Optimistic vs Pessimistic Concurrency

| Optimistic | Pessimistic |
| --- | --- |
| No lock while reading | Locks data immediately |
| Uses `RowVersion` / Concurrency Token | Uses SQL locks (`UPDLOCK`, `XLOCK`) |
| Better performance | Lower performance due to blocking |
| Conflicts detected during `SaveChanges()` | Conflicts prevented before update |
| Best for low contention | Best for high contention (banking, inventory, payments) |

### Optimistic Concurrency

Does not lock data while reading. Checks during update whether another user changed the data.

**When to use:** Low-conflict apps, normal CRUD, profile update, product update

**How it works:**
1. User A reads record
2. User B reads same record
3. User B updates first
4. User A tries to update
5. System detects conflict using `RowVersion`

**Entity:**

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Stock { get; set; }

    [Timestamp]
    public byte[] RowVersion { get; set; }
}
```

**EF Core:**

```csharp
try
{
    var product = await context.Products.FindAsync(id);

    product.Stock = 20;

    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException)
{
    Console.WriteLine("Data was modified by another user.");
}
```

> **One-liner:** Optimistic concurrency does not lock the row. It uses `RowVersion` / Concurrency Token to detect conflicts during `SaveChanges()`.

### Pessimistic Concurrency

Locks the data during a transaction so other transactions cannot modify it until the lock is released.

**When to use:** Banking, ticket booking, inventory management, payment processing

**SQL Server:**

```sql
BEGIN TRANSACTION;

SELECT * FROM Products WITH (UPDLOCK, ROWLOCK)
WHERE Id = 1;

UPDATE Products
SET Stock = Stock - 1
WHERE Id = 1;

COMMIT TRANSACTION;
```

**EF Core:**

```csharp
using var transaction = await context.Database.BeginTransactionAsync();

var product = await context.Products
    .FromSqlInterpolated($@"
        SELECT * FROM Products WITH (UPDLOCK, ROWLOCK)
        WHERE Id = {id}")
    .FirstAsync();

product.Stock--;
await context.SaveChangesAsync();

await transaction.CommitAsync();
```

| Lock Hint | Purpose |
| --- | --- |
| `UPDLOCK` | Prevents other updates |
| `ROWLOCK` | Locks only the selected row |
| `XLOCK` | Exclusive lock — no reads or writes |
| `HOLDLOCK` | Holds lock until transaction completes |

> **One-liner:** EF Core has no built-in pessimistic concurrency — use a database transaction with SQL Server lock hints (`UPDLOCK` / `XLOCK` / `ROWLOCK`) to lock rows until the transaction completes.

| Question | Answer |
| --- | --- |
| Process vs thread? | Process = isolated app instance; thread = execution unit within process |
| Foreground vs background thread? | Foreground keeps process alive; background does not — `ThreadPool` threads are background |
| What is thread pooling? | Reuse a pool of worker threads instead of `new Thread()` per task — less allocation, better performance |
| Why avoid `new Thread()` every request? | Thread creation + GC overhead; OS thread limit hurts performance under load |
| Time slicing vs true parallelism? | Single core = threads take turns (context switching); multi-core = threads run simultaneously |
| What is context switching? | OS saves one thread's state and loads another — overhead, not real parallel speedup |
| Task vs Thread? | Task encapsulates threading — operation abstraction; Thread is low-level worker |
| Why TPL over manual Thread? | TPL partitions work across cores, uses ThreadPool, handles scheduling |
| What does `Parallel.For` do? | Splits loop iterations across available CPU cores automatically |
| Core affinity? | OS schedules threads to cores — TPL spreads CPU work to use all cores efficiently |
| Concurrency vs parallelism? | Concurrency = tasks make progress; parallelism = tasks run on multiple cores at once |
| Thread vs TPL vs Parallel? | Thread = manual/low-level; TPL = `Task`/async; Parallel = CPU-bound multi-core loops |
| `lock` vs `Monitor`? | `lock` is syntactic sugar for `Monitor.Enter`/`Exit` |
| Race condition? | Unsynchronized shared mutable state — unpredictable results |
| Deadlock? | Two threads each hold a lock the other needs — circular wait |
| `ConcurrentDictionary` vs `Dictionary` + lock? | Built-in thread-safe operations without manual locking |

**Must-know points:**
- Prefer **TPL** (`Task`, `Parallel`) over raw `Thread` for most scenarios — uses **ThreadPool** and **multicore partitioning**
- **Single core** = time slicing + context switching (concurrency, not parallelism)
- **Multi-core** = true parallelism when threads run on different processors at the same time
- **Task** encapsulates threading — you work with operations, not manual thread lifecycle
- **Foreground** thread keeps app alive; **background** thread does not — pool threads are background
- **Thread pooling** reuses workers — avoid per-request `new Thread()` creation and GC pressure
- `lock` only works on **reference types** — lock on private readonly object, not `this` or strings
- `async`/`await` is concurrency; `Parallel.For` is parallelism

---

<a id="topic-16"></a>

## 16. Reflection and Attributes

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

### Type Checking & Casting — Quick Reference

| Keyword / Method | Use |
| --- | --- |
| `typeof` | Check type at compile-time |
| `GetType()` | Get actual runtime type of object |
| `is` | Check type including inheritance |
| `as` | Safe casting |

```csharp
// typeof — compile-time, no instance needed
Type t1 = typeof(string);

// GetType() — runtime type of instance
object obj = "hello";
Type t2 = obj.GetType();

// is — type check (returns bool)
if (obj is string s) { /* pattern match */ }

// as — safe cast (returns null on failure)
string? text = obj as string;
```

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

### Record vs Class — Understand the Real Difference

![Record vs Class in C# — behavior and state vs data-only models](/assets/csharp/record-vs-class.png)

| Use **Class** | Use **Record** |
| --- | --- |
| Object has **behavior** and **state changes** | Object only represents **data** |
| Business logic, entities | DTOs, API requests/responses, read-only models |
| Data mutates over time | Data transfer between layers |

#### Class — Reference Type with Behavior

```csharp
public class Employee
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Promote()
    {
        // Business logic — behavior belongs in a class
    }
}
```

**Ideal for:** business logic · entities · objects whose data changes over time

#### Record — Value-Based Reference Type

```csharp
public record Employee(string Name, int Age);
```

**Ideal for:** DTOs · API requests & responses · read-only data models · data transfer between layers

#### The Most Important Difference — Equality

**Class — reference equality**

Even if data is identical, two different instances are **not equal** (different memory locations).

```csharp
var emp1 = new Employee { Name = "John", Age = 25 };
var emp2 = new Employee { Name = "John", Age = 25 };

Console.WriteLine(emp1 == emp2); // False
```

**Record — value equality**

Records are equal if **all property values** are identical.

```csharp
var emp1 = new Employee("John", 25);
var emp2 = new Employee("John", 25);

Console.WriteLine(emp1 == emp2); // True
```

#### Full Comparison

| Point | Class | Record |
| --- | --- | --- |
| **Primary purpose** | Behavior + mutable state | Immutable / data-centric models |
| **Equality** | Reference equality (default) | Value equality (by property values) |
| **Syntax** | Verbose — properties + methods | Concise — positional: `record Person(string Name)` |
| **Mutation** | Properties can change anytime | Prefer `init` or `with` for copies |
| **`with` expression** | Manual clone/copy | Built-in: `emp with { Age = 26 }` |
| **Typical use** | Domain entities, services | DTOs, API models, config snapshots |

#### Simple Rule

- **Use class for behavior.**
- **Use record for data.**

**Interview one-liner:** Class compares by reference and holds behavior; record compares by value and is ideal for DTOs and immutable data.

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
| Record vs class? | Class = reference equality + behavior; Record = value equality + DTOs/data — use class for behavior, record for data |
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
| Runs on | .NET |
| Use cases | Web, desktop, mobile, cloud, games |
| Key strength | Rich ecosystem, strong typing, LINQ, async/await |

> **One-liner:** C# is a versatile .NET language for building type-safe apps from web APIs to desktop tools.

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

### `struct` vs `class`

| `struct` | `class` |
| --- | --- |
| Value type | Reference type |
| Stored in stack/directly in containing type | Object stored in heap, reference stored in variable |
| Copy creates new value | Copy creates new reference to same object |
| Cannot inherit from another struct/class | Supports inheritance |
| Best for small data | Best for complex objects |

```csharp
struct Point { public int X; }
class Person { public string Name; }
```

> **One-liner:** `struct` copies data on the stack; `class` shares one heap object via reference.

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

### First vs FirstOrDefault vs Single vs SingleOrDefault

| LINQ Method | 0 matches | 1 match | 2+ matches |
| --- | --- | --- | --- |
| `First()` | Throws | Returns first | Returns first |
| `FirstOrDefault()` | Returns default | Returns first | Returns first |
| `Single()` | Throws | Returns only | Throws |
| `SingleOrDefault()` | Returns default | Returns only | Throws |

| Method | Use when |
| --- | --- |
| `First()` | At least one record expected |
| `FirstOrDefault()` | Record may or may not exist |
| `Single()` | Exactly one record — enforces uniqueness |
| `SingleOrDefault()` | Zero or one only |

> **One-liner:** `First`/`FirstOrDefault` pick the first match; `Single`/`SingleOrDefault` require at most one match.

### Delegates and Events

| Type | Returns |
| --- | --- |
| `Func` | A value |
| `Action` | `void` |
| `Predicate` | `bool` |

| Delegate field vs Event | Delegate | Event |
| --- | --- | --- |
| External invoke | Yes | No |
| External `=` | Yes | No |

> **One-liner:** Delegate = type-safe function pointer; Event = wrapper around delegate to notify listeners (only owner can fire it).

### Optimistic Concurrency (EF Core)

| Aspect | Detail |
| --- | --- |
| Definition | No lock on read; checks for changes at update time |
| When to use | Low conflict, CRUD, profile/product updates |
| How | `RowVersion` / `[Timestamp]` / Concurrency Token |
| On conflict | `DbUpdateConcurrencyException` at `SaveChanges()` |

> **One-liner:** No row lock — `RowVersion` detects if data changed when you call `SaveChanges()`.

### Pessimistic Concurrency (EF Core)

| Aspect | Detail |
| --- | --- |
| Definition | Locks rows during a transaction until commit/rollback |
| When to use | Banking, tickets, inventory, payments |
| EF Core support | No built-in API — use `BeginTransactionAsync` + SQL lock hints |
| Common hints | `UPDLOCK`, `ROWLOCK`, `XLOCK`, `HOLDLOCK` |

> **One-liner:** Use a transaction with `UPDLOCK`/`ROWLOCK` in raw SQL — EF Core does not lock rows pessimistically by default.

### Concurrency vs Parallelism

| | Concurrency | Parallelism |
| --- | --- | --- |
| Goal | **Usability** — non-blocking, responsive app | **Performance** — multi-core speedup |
| Execution | Tasks overlap — may time-slice on one core | Tasks run simultaneously on different cores |
| Example | `async`/`await`, juggler with many balls | `Parallel.For`, many workers in cubicles |
| Interview trap | "Multiple tasks at same time" — only ~50% defines concurrency |

> **One-liner:** Non-blocking = concurrency (usability). Multi-core = parallelism (performance). Async is a form of concurrency.

### Async/Await vs Threading

| Point | Detail |
| --- | --- |
| Async goal | **Usability** — not primarily raw performance |
| Creates threads? | **No** for I/O — thread released during `await` |
| Mechanism | Compiler **state machine** + optional ThreadPool continuation |
| Worker thread | Any thread other than main — may resume after `await` |
| Sync context | WPF/WinForms → UI thread; ASP.NET Core console → ThreadPool |

> **One-liner:** Async is concurrency for responsiveness — state machine under the hood, not a thread per call.

### Thread vs TPL vs Parallel Library

| | Thread | TPL | Parallel Library |
| --- | --- | --- | --- |
| Level | Low-level, manual | High-level, task-based | Part of TPL |
| Best for | Full thread control | Async I/O, background work | CPU-bound multi-core work |
| Pooling | No — create/destroy each time | Yes — uses ThreadPool | Yes — uses ThreadPool |
| Examples | `new Thread()` | `Task.Run`, `async`/`await` | `Parallel.For`, `Parallel.ForEach` |

### Foreground vs Background Thread

| Type | Keeps process alive? | Example |
| --- | --- | --- |
| Foreground | Yes | Main thread, `new Thread()` with `IsBackground = false` |
| Background | No | `ThreadPool` threads, `IsBackground = true` |

> **One-liner:** Foreground keeps the app running; background does not — ThreadPool workers are always background.

### Thread Pooling

> **One-liner:** Thread pooling reuses worker threads from a pool — faster than `new Thread()` per task and avoids creation/GC overhead.

### Time Slicing vs True Parallelism

| Scenario | What happens |
| --- | --- |
| Many threads, **one core** | Time slicing + context switching — not real parallelism |
| Threads on **multiple cores** | True parallelism — Thread 1 on Processor 1, Thread 2 on Processor 2 |

### Task Encapsulates Threading

> **One-liner:** `Task` is a higher-level wrapper over threading — TPL schedules work on ThreadPool threads so you don't manage raw `Thread` objects.

### TPL Multicore Processing

> **One-liner:** TPL encapsulates multicore execution — `Parallel.For` partitions CPU work across all available cores better than manual `new Thread()`.

> **One-liner:** Thread = manual; TPL = Task/async concurrency; Parallel = CPU work across cores.
