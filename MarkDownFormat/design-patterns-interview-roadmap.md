# Design Patterns Interview Guide

## Goal

Design patterns are reusable solutions to common software design problems. These are the patterns most often asked in .NET interviews — with simple C# examples and one-liner answers.

---

## Topic Index

<ul>
  <li><a href="#singleton">1. Singleton Pattern (Creational)</a></li>
  <li><a href="#factory">2. Factory Pattern (Creational)</a></li>
  <li><a href="#builder">3. Builder Pattern (Creational)</a></li>
  <li><a href="#adapter">4. Adapter Pattern (Structural)</a></li>
  <li><a href="#decorator">5. Decorator Pattern (Structural)</a></li>
  <li><a href="#strategy">6. Strategy Pattern (Behavioral)</a></li>
  <li><a href="#mediator">7. Mediator Pattern (Behavioral)</a></li>
  <li><a href="#observer">8. Observer Pattern (Behavioral)</a></li>
  <li><a href="#cheat-sheet">Easy Interview Cheat Sheet</a></li>
</ul>

---

<a id="singleton"></a>

## 1. Singleton Pattern (Creational)

**Definition:** Only one object of a class should exist throughout the application.

### Example

```csharp
class Logger
{
    private static Logger instance;

    private Logger() { }

    public static Logger GetInstance()
    {
        if (instance == null)
            instance = new Logger();

        return instance;
    }

    public void Log()
    {
        Console.WriteLine("Logging...");
    }
}
```

### Usage

```csharp
Logger logger1 = Logger.GetInstance();
Logger logger2 = Logger.GetInstance();

Console.WriteLine(logger1 == logger2); // True
```

**Interview one-liner:** Singleton ensures only one instance of a class exists.

---

<a id="factory"></a>

## 2. Factory Pattern (Creational)

**Definition:** Creates objects without exposing object creation logic.

### Example

```csharp
interface IAnimal
{
    void Speak();
}

class Dog : IAnimal
{
    public void Speak()
    {
        Console.WriteLine("Bark");
    }
}

class Cat : IAnimal
{
    public void Speak()
    {
        Console.WriteLine("Meow");
    }
}

class AnimalFactory
{
    public static IAnimal GetAnimal(string type)
    {
        if (type == "Dog")
            return new Dog();

        return new Cat();
    }
}
```

### Usage

```csharp
IAnimal animal = AnimalFactory.GetAnimal("Dog");
animal.Speak();
```

**Interview one-liner:** Factory creates objects based on the requirement.

---

<a id="builder"></a>

## 3. Builder Pattern (Creational)

**Definition:** Builds a complex object step by step.

### Example

```csharp
class Pizza
{
    public string Size;
    public bool Cheese;
    public bool Olives;
}

class PizzaBuilder
{
    private Pizza pizza = new Pizza();

    public PizzaBuilder SetSize(string size)
    {
        pizza.Size = size;
        return this;
    }

    public PizzaBuilder AddCheese()
    {
        pizza.Cheese = true;
        return this;
    }

    public PizzaBuilder AddOlives()
    {
        pizza.Olives = true;
        return this;
    }

    public Pizza Build()
    {
        return pizza;
    }
}
```

### Usage

```csharp
Pizza pizza = new PizzaBuilder()
                    .SetSize("Large")
                    .AddCheese()
                    .AddOlives()
                    .Build();
```

**Interview one-liner:** Builder creates complex objects step by step.

---

<a id="adapter"></a>

## 4. Adapter Pattern (Structural)

**Definition:** Converts one interface into another compatible interface.

### Example

```csharp
class OldPrinter
{
    public void PrintOld()
    {
        Console.WriteLine("Old Printer");
    }
}

interface IPrinter
{
    void Print();
}

class PrinterAdapter : IPrinter
{
    private OldPrinter printer = new OldPrinter();

    public void Print()
    {
        printer.PrintOld();
    }
}
```

### Usage

```csharp
IPrinter printer = new PrinterAdapter();
printer.Print();
```

**Interview one-liner:** Adapter makes incompatible classes work together.

---

<a id="decorator"></a>

## 5. Decorator Pattern (Structural)

**Definition:** Adds new functionality without changing existing code.

### Example

```csharp
interface ICoffee
{
    string GetDescription();
}

class Coffee : ICoffee
{
    public string GetDescription()
    {
        return "Coffee";
    }
}

class MilkDecorator : ICoffee
{
    private ICoffee coffee;

    public MilkDecorator(ICoffee coffee)
    {
        this.coffee = coffee;
    }

    public string GetDescription()
    {
        return coffee.GetDescription() + " + Milk";
    }
}
```

### Usage

```csharp
ICoffee coffee = new MilkDecorator(new Coffee());

Console.WriteLine(coffee.GetDescription());
```

**Output:** `Coffee + Milk`

**Interview one-liner:** Decorator adds new behavior to an object without modifying it.

---

<a id="strategy"></a>

## 6. Strategy Pattern (Behavioral)

**Definition:** Selects an algorithm at runtime.

### Example

```csharp
interface IPayment
{
    void Pay();
}

class CardPayment : IPayment
{
    public void Pay()
    {
        Console.WriteLine("Paid by Card");
    }
}

class UpiPayment : IPayment
{
    public void Pay()
    {
        Console.WriteLine("Paid by UPI");
    }
}

class Payment
{
    private IPayment payment;

    public Payment(IPayment payment)
    {
        this.payment = payment;
    }

    public void MakePayment()
    {
        payment.Pay();
    }
}
```

### Usage

```csharp
Payment payment = new Payment(new UpiPayment());

payment.MakePayment();
```

**Interview one-liner:** Strategy allows changing the algorithm at runtime.

---

<a id="mediator"></a>

## 7. Mediator Pattern (Behavioral)

**Definition:** Objects communicate through a mediator instead of directly.

### Example

```csharp
class ChatMediator
{
    public void Send(string message)
    {
        Console.WriteLine("Message: " + message);
    }
}

class User
{
    private ChatMediator mediator;

    public User(ChatMediator mediator)
    {
        this.mediator = mediator;
    }

    public void SendMessage(string message)
    {
        mediator.Send(message);
    }
}
```

### Usage

```csharp
ChatMediator mediator = new ChatMediator();

User user = new User(mediator);

user.SendMessage("Hello");
```

**Interview one-liner:** Mediator reduces direct communication between objects.

---

<a id="observer"></a>

## 8. Observer Pattern (Behavioral)

**Definition:** When one object changes, all subscribed objects are notified.

### Example

```csharp
interface IObserver
{
    void Update(string message);
}

class User : IObserver
{
    public void Update(string message)
    {
        Console.WriteLine(message);
    }
}

class YouTubeChannel
{
    private List<IObserver> subscribers = new List<IObserver>();

    public void Subscribe(IObserver observer)
    {
        subscribers.Add(observer);
    }

    public void UploadVideo()
    {
        foreach (var user in subscribers)
        {
            user.Update("New Video Uploaded");
        }
    }
}
```

### Usage

```csharp
YouTubeChannel channel = new YouTubeChannel();

channel.Subscribe(new User());
channel.Subscribe(new User());

channel.UploadVideo();
```

**Output:**

```
New Video Uploaded
New Video Uploaded
```

**Interview one-liner:** Observer notifies multiple objects automatically when a state changes.

---

<a id="cheat-sheet"></a>

## Easy Interview Cheat Sheet

| Pattern | Purpose | One-Line Example |
|---|---|---|
| Singleton | One object | Logger, Configuration, Cache |
| Factory | Create objects | PaymentFactory, AnimalFactory |
| Builder | Build complex objects | Pizza, House, Car |
| Adapter | Convert one interface to another | Old API → New API |
| Decorator | Add features without modifying code | Coffee + Milk, Logging |
| Strategy | Change algorithm at runtime | Payment methods, Sorting |
| Mediator | Centralize communication | Chat Room, Air Traffic Control |
| Observer | Notify subscribers of changes | YouTube notifications, Email alerts |
