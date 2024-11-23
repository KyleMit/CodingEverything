# Dotnet Test

[Testing in .NET](https://docs.microsoft.com/en-us/dotnet/core/testing/)

## Libraries

* ms-test
* xunit
* nunit

## Docs

* [Unit testing C# code in .NET using dotnet test and xUnit](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test)
* [Unit testing C# with MSTest and .NET](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)
  * [Use MSTest in unit tests](https://learn.microsoft.com/en-us/visualstudio/test/using-microsoft-visualstudio-testtools-unittesting-members-in-unit-tests?view=vs-2022)

## Nuget

* [MSTest.TestFramework 3.6.2](https://www.nuget.org/packages/MSTest.TestFramework)
* [MSTest.TestAdapter 3.6.2](https://www.nuget.org/packages/MSTest.TestAdapter/)
* [xunit 2.9.2](https://www.nuget.org/packages/xunit)
* [xunit.runner.visualstudio 2.8.2](https://www.nuget.org/packages/xunit.runner.visualstudio)
* [coverlet.collector 6.0.2](https://www.nuget.org/packages/coverlet.collector#readme-body-tab)

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


