# SOLID Principles Interview Guide

## Goal

SOLID principles help you design maintainable, testable .NET code. These are the most common explanations expected in .NET interviews — often followed by a simple code example like the ones below.

---

## Topic Index

<ul>
  <li><a href="#srp">S — Single Responsibility Principle</a></li>
  <li><a href="#ocp">O — Open/Closed Principle</a></li>
  <li><a href="#lsp">L — Liskov Substitution Principle</a></li>
  <li><a href="#isp">I — Interface Segregation Principle</a></li>
  <li><a href="#dip">D — Dependency Inversion Principle</a></li>
  <li><a href="#remember">Easy Way to Remember</a></li>
  <li><a href="#30-second">30-Second Interview Explanation</a></li>
</ul>

---

<a id="srp"></a>

## S — Single Responsibility Principle (SRP)

**Definition:** A class should have only one reason to change.

### Bad

```csharp
class Employee
{
    public void CalculateSalary() { }

    public void SaveToDatabase() { }

    public void SendEmail() { }
}
```

One class has **3 responsibilities**.

### Good

```csharp
class Employee
{
    public void CalculateSalary() { }
}

class EmployeeRepository
{
    public void Save() { }
}

class EmailService
{
    public void Send() { }
}
```

> **One-liner:** One class should have only one responsibility.

---

<a id="ocp"></a>

## O — Open/Closed Principle (OCP)

**Definition:** Software should be open for extension but closed for modification.

### Bad

```csharp
class Payment
{
    public void Pay(string type)
    {
        if (type == "Card")
        {
        }
        else if (type == "UPI")
        {
        }
    }
}
```

Need to **modify** the class whenever a new payment type is added.

### Good

```csharp
interface IPayment
{
    void Pay();
}

class CardPayment : IPayment
{
    public void Pay() { }
}

class UpiPayment : IPayment
{
    public void Pay() { }
}
```

Add a new class for a new payment type — **no change** to existing code.

> **One-liner:** Add new functionality without modifying existing code.

---

<a id="lsp"></a>

## L — Liskov Substitution Principle (LSP)

**Definition:** A child class should be able to replace its parent class without breaking the program.

### Bad

```csharp
class Bird
{
    public virtual void Fly() { }
}

class Penguin : Bird
{
    public override void Fly()
    {
        throw new Exception();
    }
}
```

Penguin cannot fly — substituting it for `Bird` breaks callers that expect `Fly()` to work.

### Good

```csharp
interface IBird { }

interface IFlyBird
{
    void Fly();
}

class Sparrow : IFlyBird
{
    public void Fly() { }
}

class Penguin : IBird
{
}
```

> **One-liner:** Child class should work wherever parent class is expected.

---

<a id="isp"></a>

## I — Interface Segregation Principle (ISP)

**Definition:** Don't force a class to implement methods it doesn't need.

### Bad

```csharp
interface IWorker
{
    void Work();
    void Eat();
}

class Robot : IWorker
{
    public void Work() { }

    public void Eat()
    {
        throw new NotImplementedException();
    }
}
```

Robot doesn't eat — but it is forced to implement `Eat()`.

### Good

```csharp
interface IWork
{
    void Work();
}

interface IEat
{
    void Eat();
}

class Robot : IWork
{
    public void Work() { }
}

class Human : IWork, IEat
{
    public void Work() { }
    public void Eat() { }
}
```

> **One-liner:** Create small, specific interfaces instead of one large interface.

---

<a id="dip"></a>

## D — Dependency Inversion Principle (DIP)

**Definition:** Depend on abstractions, not concrete classes.

### Bad

```csharp
class EmailService
{
    public void Send() { }
}

class Notification
{
    private EmailService email = new EmailService();
}
```

`Notification` is tightly coupled with `EmailService`.

### Good

```csharp
interface IMessageService
{
    void Send();
}

class EmailService : IMessageService
{
    public void Send() { }
}

class Notification
{
    private readonly IMessageService service;

    public Notification(IMessageService service)
    {
        this.service = service;
    }
}
```

Now you can inject `EmailService`, `SmsService`, or `WhatsAppService`.

> **One-liner:** High-level modules should depend on interfaces, not concrete classes.

---

<a id="remember"></a>

## Easy Way to Remember

| Principle | Remember |
| --- | --- |
| **S** | One class → One responsibility |
| **O** | Extend, don't modify |
| **L** | Child should replace Parent |
| **I** | Small interfaces |
| **D** | Depend on interfaces, not implementations |

---

<a id="30-second"></a>

## 30-Second Interview Explanation

- **S** – One class should have one responsibility.
- **O** – Add new features without changing existing code.
- **L** – A child class should be usable wherever its parent is expected.
- **I** – Don't force classes to implement unnecessary methods.
- **D** – Depend on abstractions (interfaces), not concrete classes.

These are the most common explanations expected in .NET interviews, often followed by a simple code example like the ones above.
