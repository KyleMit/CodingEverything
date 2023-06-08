# Dotnet Test

[Testing in .NET](https://docs.microsoft.com/en-us/dotnet/core/testing/)

## Libraries

* ms-test
* xunit
* nunit

## Comparison

* [NUnit vs. XUnit vs. MSTest](https://www.lambdatest.com/blog/nunit-vs-xunit-vs-mstest/)
* [NUnit vs. XUnit vs. MSTest](https://www.reddit.com/r/csharp/comments/mc245n/)
* [MSTest, NUnit or xUnit](https://www.reddit.com/r/csharp/comments/eg3aui/)

## Questions

* [Run selected unit tests](https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests)

  ```bash
  dotnet test --filter FullyQualifiedName.IntegrationTests
  ```

* [dotnet test verbosity level for test output only #1773](https://github.com/microsoft/vstest/issues/1773)


  ```bash
  dotnet test Test.csproj --verbosity quiet --logger:"console;verbosity=quiet"
  ```

  [`dotnet test` options](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-test#options)


