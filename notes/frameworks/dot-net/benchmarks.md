---
aliases:
  - Performance
---

# Dotnet Benchmarks / Performance Tuning


## Docs

* [Home | BenchmarkDotNet](https://benchmarkdotnet.org/)
* [dotnet/BenchmarkDotNet: Powerful .NET library for benchmarking](https://github.com/dotnet/BenchmarkDotNet)
  * [How to run your benchmarks](https://benchmarkdotnet.org/articles/guides/how-to-run.html)
  * [Customizing Runtime](https://benchmarkdotnet.org/articles/guides/customizing-runtime.html)
  * [Parameterization](https://benchmarkdotnet.org/articles/features/parameterization.html)

## Articles

* [Benchmarking .NET 6 Applications Using BenchmarkDotNet: A Deep Dive](https://www.codemag.com/Article/2209061/Benchmarking-.NET-6-Applications-Using-BenchmarkDotNet-A-Deep-Dive)
* [Measuring performance using BenchmarkDotNet - Part 3 Breaking Builds - DEV Community](https://dev.to/newday-technology/measuring-performance-using-benchmarkdotnet-part-3-breaking-builds-36il)
* [Performance Benchmarking With BenchmarkDotNet](https://www.c-sharpcorner.com/article/performance-benchmarking-with-benchmarkdotnet/)
* [Guide To BenchmarkDotNet : A Benchmarking Library For DOTNET Developers - Analytics India Magazine](https://analyticsindiamag.com/guide-to-benchmarkdotnet-a-benchmarking-library-for-dotnet-developers/)
* [How to run micro-benchmarking with BenchmarkDotNet - Bonus post from The Ray Tracer Challenge series - CodeClimber](https://codeclimber.net.nz/archive/2019/06/24/how-to-run-micro-benchmarking-with-benchmarkdotnet-bonus-post-from-the-ray-tracer-challenge-series/)
* [Benchmarking .NET code - Scott Hanselman's Blog](https://www.hanselman.com/blog/benchmarking-net-code)
* [BenchmarkDotNet: Get Started with Benchmarking Your C# Code « Matthias Jost](https://www.matthias-jost.ch/testing-csharp-code-with-benchmarkdotnet/)
* [Benchmarks - .NET Benchmarks](https://benchmarks.martincostello.com/)
* [Charts for BenchmarkDotNet](https://chartbenchmark.net)

## Examples

* [C# Regex: Checking for "a-z" and "A-Z" - Stack Overflow](https://stackoverflow.com/questions/6017778/c-sharp-regex-checking-for-a-z-and-a-z/75644787#75644787)
  * [Performance Benchmarks for Testing \[a-Z\]](https://gist.github.com/KyleMit/1781d304634c703e7f4a81782166af56)
* [ToList(capacity) Benchmark](https://gist.github.com/sonnemaf/b91e7edc5531982b70a1e65235cba40f)

## SO

* [wcf - How to write Performance Test for .Net application? - Stack Overflow](https://stackoverflow.com/questions/2449870/how-to-write-performance-test-for-net-application)
* [performance - .NET benchmarking frameworks - Stack Overflow](https://stackoverflow.com/questions/1163143/net-benchmarking-frameworks)
* [Performance testing of dotnet core WebAPI - Stack Overflow](https://stackoverflow.com/questions/46372505/performance-testing-of-dotnet-core-webapi)
* [c# - Generic Performance Testing Framework For .NET - Stack Overflow](https://stackoverflow.com/questions/7580876/generic-performance-testing-framework-for-net)
* [.net - Performance Test C# Code concludes with varying results each run - Stack Overflow](https://stackoverflow.com/questions/60695919/performance-test-c-sharp-code-concludes-with-varying-results-each-run)


## char.Is* helpers for common ASCII sets

* [[API Proposal]: char helpers for common ASCII categories · Issue #68868 · dotnet/runtime](https://github.com/dotnet/runtime/issues/68868)
* [Add more char.Is* helpers for common ASCII sets](https://github.com/dotnet/runtime/pull/69318/files?w=1#diff-ea5ef93981b66b93a8906532bba87b7908ebf2042170b647a8953a9e952cbc06R236)
* [GitHub Quick Reviews - YouTube](https://www.youtube.com/watch?v=mhdY64EnxAw)
* [Char.IsAsciiLetter(Char) Method (System) | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.char.isasciiletter?view=net-7.0&viewFallbackFrom=net-6.0)
* [Char.IsLetter Method (System) | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.char.isletter?view=net-7.0)


## Regex Performance Considerations

* Articles
  * [Regular Expression Improvements in .NET 7 - .NET Blog](https://devblogs.microsoft.com/dotnet/regular-expression-improvements-in-dotnet-7/#source-generation)
  * [Regular Expression performance [David Gutierrez] | Microsoft Learn](https://learn.microsoft.com/en-us/archive/blogs/bclteam/regular-expression-performance-david-gutierrez)
  * [Optimizing Regular Expression Performance, Part I: Working with the Regex Class and Regex Objects [Ron Petrusha] | Microsoft Learn](https://learn.microsoft.com/en-us/archive/blogs/bclteam/optimizing-regular-expression-performance-part-i-working-with-the-regex-class-and-regex-objects-ron-petrusha)
  * [Optimizing Regular Expression Performance, Part II: Taking Charge of Backtracking [Ron Petrusha] | Microsoft Learn](https://learn.microsoft.com/en-us/archive/blogs/bclteam/optimizing-regular-expression-performance-part-ii-taking-charge-of-backtracking-ron-petrusha)
  * [Best Practices for Regular Expressions in .NET | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices)
* SO
  * [.net - How does RegexOptions.Compiled work? - Stack Overflow](https://stackoverflow.com/questions/513412/how-does-regexoptions-compiled-work)
  * [initialize Regex with pattern vs compiled regex C# - Stack Overflow](https://stackoverflow.com/questions/41350000/initialize-regex-with-pattern-vs-compiled-regex-c-sharp?noredirect=1&lq=1)
  * [c# - When not to use RegexOptions.Compiled - Stack Overflow](https://stackoverflow.com/questions/9969158/when-not-to-use-regexoptions-compiled)
  * [c# - Faster replacement for Regex - Stack Overflow](https://stackoverflow.com/questions/8941422/faster-replacement-for-regex?noredirect=1&lq=1)
* Docs
  * [GeneratedRegexAttribute Class (System.Text.RegularExpressions) | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.generatedregexattribute?view=net-7.0)
* Posts
  * [To Compile or Not To Compile](https://blog.codinghorror.com/to-compile-or-not-to-compile/)
  * [Dynamically Emitting Compiled Regular Expressions | Programming with Regular Expressions in C# | InformIT](https://www.informit.com/articles/article.aspx?p=27313&seqNum=7)


## Russian Regex

* [Regex IsMatch Diff | C# Online Compiler | .NET Fiddle](https://dotnetfiddle.net/UJfnA2)
* [Unicode Character 'CYRILLIC SMALL LETTER IE' (U+0435)](https://www.fileformat.info/info/unicode/char/0435/index.htm)
* [Unicode Character 'LATIN SMALL LETTER E' (U+0065)](https://www.fileformat.info/info/unicode/char/0065/index.htm)
