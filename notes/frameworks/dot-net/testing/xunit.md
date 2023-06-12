# XUnit

<https://xunit.net/>

> xUnit.net is a free, open source, community-focused unit testing tool for the .NET Framework

## Links

* [Comparing xUnit.net to other frameworks](https://xunit.net/docs/comparisons)

## Fluent Assertions

* [Fluent Assertions](https://fluentassertions.com)

> A very extensive set of extension methods that allow you to more naturally specify the expected outcome of a TDD or BDD-style unit tests

## Auto Fixture

> AutoFixture is an open source library for .NET designed to minimize the 'Arrange' phase of your unit tests in order to maximize maintainability. Its primary goal is to allow developers to focus on what is being tested rather than how to setup the test scenario, by making it easier to create object graphs containing test data.

* [AutoFixture](https://github.com/AutoFixture/AutoFixture)
* [AutoFixture Cheat Sheet](https://github.com/AutoFixture/AutoFixture/wiki/Cheat-Sheet#autogenerated-number)

## Xunit.Runner.Console

* [Getting started: .NET Framework with command line > xUnit.net](https://xunit.net/docs/getting-started/netfx/cmdline)
* [NuGet Gallery | xunit.runner.console 2.4.1](https://www.nuget.org/packages/xunit.runner.console)

## Questions

* [Difference between Fact and Theory?](https://stackoverflow.com/q/22373258/1366033)

  * `[Fact]` - "normal" unit test that takes no method arguments.
  * `[Theory]` - expects one or more `DataAttribute` to supply the values for a Parameterized arguments

* [Multiple assertions using Fluent Assertions library](https://stackoverflow.com/q/45949961/1366033)

  [Assertion Scopes](https://fluentassertions.com/introduction#assertion-scopes)

  ```cs
  using (new AssertionScope())
  {
      5.Should().Be(10);
      "Actual".Should().Be("Expected");
  }
  ```

* [Create autogenerated integers with AutoFixture](https://stackoverflow.com/q/32594851/1366033)

  ```cs
  var fixture = new Fixture();
  fixture.Customize(new NumericSequenceCustomization());
  var i = fixture.Create<int>();
  ```

* [Unit Testing with DateTime.Now](https://stackoverflow.com/q/2425721/1366033)

  ```cs
  var timeMock = new Mock<TimeProvider>();
  timeMock.SetupGet(tp => tp.UtcNow).Returns(new DateTime(2010, 3, 11));
  TimeProvider.Current = timeMock.Object;
  ```

* [Correct usage of Theory in xUnit](https://stackoverflow.com/q/35591470/1366033)

  ```cs
  [Theory]
  [InlineData(10, 5, 15)]
  public void AddMembers(int x, int y, int expected) {
      var calc = new CalculateDemo();
      var result = calc.Add(x, y);
      Assert.Equal(expected, result);
  }
  ```

* [How to share one fixture among all test classes?](https://stackoverflow.com/q/63600252/1366033)

  [Shared Context between Tests](https://xunit.net/docs/shared-context)

  ```cs
  public class MyDatabaseTests : IClassFixture<DatabaseFixture>
  {
      DatabaseFixture fixture;

      public MyDatabaseTests(DatabaseFixture fixture)
      {
          this.fixture = fixture;
      }

      // ... write tests, using fixture.Db to get access to the SQL Server ...
  }
  ```

* [How do you filter xunit tests by trait with "dotnet test"?](https://stackoverflow.com/q/42262651/1366033)

  ```cs
  [Fact]
  [Trait("Color", "Blue")]
  public void TestBlue()
  {
  }
  ```

  ```bash
  dotnet test --filter Color=Blue
  ```

* [How to filter unit tests by xUnit.net trait attribute when using VS test explorer?](https://stackoverflow.com/q/57828264/1366033)


* [How to test greater than](https://stackoverflow.com/q/4138132/1366033)

  ```cs
  Assert.IsTrue(actualCount > 5, "greater than five");
  ```

* [Assert two List<T> are equal?](https://stackoverflow.com/q/419659/1366033)

  With [FluentAssertions Collections](https://fluentassertions.com/collections/)

  ```cs
  collection.Should().Equal(1, 2, 5, 8);
  ```

  ```cs
  CollectionAssert.AreEqual(IEnumerable, IEnumerable) // For sequences, order matters
  CollectionAssert.AreEquivalent(IEnumerable, IEnumerable) // For sets, order doesn't matter
  ```

  * [Is there an easy way in xunit.net to compare two collections without regarding the items' order?](https://stackoverflow.com/q/28217974/1366033)
  * [How can I compare two lists with xunit test](https://stackoverflow.com/q/59458136/1366033)
  * [comparing two lists with Xunit](https://stackoverflow.com/q/45284937/1366033)

* Skip / ignore a particular test

  ```cs
  [Fact(Skip="reason")]
  ```