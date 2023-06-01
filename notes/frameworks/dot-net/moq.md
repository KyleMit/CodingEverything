# MOQ

> Moq is intended to be simple to use, strongly typed (no magic strings!, and therefore full compiler-verified and refactoring-friendly) and minimalistic (while still fully functional!).

<https://www.moqthis.com/moq4/>

## Docs

* [Quickstart · moq/moq4 Wiki](https://github.com/Moq/moq4/wiki/Quickstart)
* [moq/moq4: Repo for managing Moq 4.x](https://github.com/moq/moq4)


## Questions

* [Non-overridable members may not be used in setup / verification expressions](https://stackoverflow.com/q/56905578/1366033)

    > Moq creates an implementation of the mocked type. If the type is an interface, it creates a class that implements the interface. If the type is a class, it creates an inherited class, and the members of that inherited class call the base class. But in order to do that it has to override the members. If a class has members that can't be overridden (they aren't virtual, abstract) then Moq can't override them to add its own behaviors.

    Instead of this:

    ```cs
    var mockPagingOptions = new Mock<PagingOptions>();
    mockPagingOptions.Setup(po => po.Limit).Returns(25);
    mockPagingOptions.Setup(po => po.Offset).Returns(0);
    ```

    Do this:

    ```cs
    var pagingOptions = new PagingOptions { Limit = 25, Offset = 0 };
    ```

* [Mocking a property](https://stackoverflow.com/q/12141799/1366033)

    ```cs
    input.SetupGet(x => x.ColumnNames).Returns(temp);
    ```

* [How to verify that method was NOT called in Moq?](https://stackoverflow.com/q/537308/1366033)

    ```cs
    _mock.Object.DoSomething()
    _mock.Verify(service => service.ShouldNotBeCalled(), Times.Never());
    ```

  * [Verify Method (Expression(Action(T)), Times)](https://documentation.help/Moq/B5B9BE8D.htm)
  * [Times Members](https://documentation.help/Moq/121DDFF0.htm)

* [How to mock non virtual methods?](https://stackoverflow.com/q/11738102/1366033)

  > Moq cannot mock non virtual methods on classes

