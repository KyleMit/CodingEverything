# NSubstitute

> A friendly substitute for .NET mocking libraries

<https://nsubstitute.github.io/>

## Links

* [NuGet Gallery | NSubstitute 5.1.0](https://www.nuget.org/packages/NSubstitute)

## Example

```cs
//Create:
var calculator = Substitute.For<ICalculator>();

//Set a return value:
calculator.Add(1, 2).Returns(3);
Assert.AreEqual(3, calculator.Add(1, 2));

//Check received calls:
calculator.Received().Add(1, Arg.Any<int>());
calculator.DidNotReceive().Add(2, 2);

//Raise events
calculator.PoweringUp += Raise.Event();
```

