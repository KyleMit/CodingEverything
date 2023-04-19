# Shouldly

[Overview - Shouldly](https://docs.shouldly.org/)

> Shouldly is an assertion framework which focuses on giving great error messages when the assertion fails while being simple and terse.

## Links

* [shouldly/shouldly: Should testing for .NET—the way assertions should be!](https://github.com/shouldly/shouldly)

## Example

```cs
// old way
Assert.That(contestant.Points, Is.EqualTo(1337));
// Expected 1337 but was 0

// shouldly
contestant.Points.ShouldBe(1337);
// contestant.Points should be 1337 but was 0
```

## Getting Started

```cs
dotnet add package Shouldly
```

## Questions

* Should contain item in list

  [Enumerable > Contain](https://docs.shouldly.org/documentation/enumerable/contain)

  ```cs
  list.ShouldContain(m => m > 100)
  ```

  