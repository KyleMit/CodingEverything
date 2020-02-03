---
title: Back to basics - Delegates with Rob Hale
date: 2014-04-21
---

https://www.meetup.com/VTCode/events/171549152/

### Announcements

June Meeting - Pragmatic Architecture Choices Panel


### Delegation Design Pattern

Class depends on another class and tells it to do work

Delegator --> Delegatee

```cs
// simple delegate design pattern.  Form1 isn't responsible for all logging
var logger = LogManager.GetLogger("Simple delegation");
logger.Info("I'm delegating!");
```            

Complex Case with Interfaces - Somebody will handle

```cs
public partial class Form1 : Form
{
    private IScreenWriter sw;

    public Form1(IScreenWriter writer)
    {
        InitializeComponent();
        sw = writer;
    }

    private void Form1_Load(object sender, EventArgs e)
    {
        sw.Write("logger");
    }
}

public interface IScreenWriter
{
    void Write(string message);
}

public class Log4NetScreenWriter : IScreenWriter
{
    public void Write(string message)
    {
        // simple delegate design pattern.  Form1 isn't responsible for all logging
        var logger = LogManager.GetLogger("Simple delegation");
        logger.Info(message + " - Logged with console");
    }
}

public class ConsoleScreenWriter : IScreenWriter
{
    public void Write(string message)
    {
        Console.Write(message + " - Logged with console");
    }
}
```
            
### Delegates

[`Func(Of TResult) Delegate`](http://msdn.microsoft.com/en-us/library/bb534960(v=vs.110).aspx)

Delegates are a **reference type** that defines a method signature

Like C++ function pointers, but are type safe
Unlike method overloading, the return type is part of the signature

They allow methods to be passed as parameters
They can be used to define callback methods
They can be chained together

Events are a special type of Delegates
Pass what you'd like to execute. Can have many listeners

All delegates in .NET are multi-cast delegates. This means that we can assign multiple methods to the same delegate variable.
So you can add multiple functions of the same signature to a single delegate:

```cs
var gen = new NumberGenerator();
SimpleThing thing = gen.ReturnFive;
thing += gen.ReturnFive;
thing();

//scope delegate returnType Signature
public delegate int SimpleThing();

public class NumberGenerator
{
    public int ReturnFive()
    {
        MessageBox.Show("5");
        return 5;
    }
    public int ReturnTen()
    {
        MessageBox.Show("10");
        return 10;
    }
}
```

You can get a list of all attached delegates, but you have to fire manually

```cs
thing();

//does the same thing as above
foreach (SimpleThing d in thing.GetInvocationList())
{
    d();
}
```

If a delegate method throws an exception, future delegates will not fire.
Instead you can handle all exceptions

```cs
foreach (SimpleThing d in thing.GetInvocationList())
{
    try
    {
        d();
    }
    catch (Exception exception)
    {
        Console.WriteLine(exception);
    }
}
```

Different Syntaxes, from a Named Delegate, to an Anonymous Delegate, to a Lambda Expression.  All preform the same action

```cs
public delegate int SimpleThing();

SlightlyComplexThing namedDelegate = BeingExplicit;
SlightlyComplexThing anonymousDelegate = delegate(int i) { return i < 25; };
SlightlyComplexThing lambdaDelgate = i => i < 25;

public Boolean BeingExplicit(int number)
{
    return number > 25;
}
```

You can pass your own lambdas

```cs
TestInt(10, i => i < 25);

private static void TestInt(int numberIn, Func<int, bool> testComparison)
{
    Console.WriteLine(testComparison(numberIn) ? "Passes" : "Fails");
}
```

