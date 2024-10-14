# Flurl

<https://flurl.dev/>

> Flurl is a modern, fluent, asynchronous, testable, portable, buzzword-laden URL builder and HTTP client library for .NET.

## Links

* https://www.nuget.org/packages/Flurl/

## Example

```cs
// Flurl will use 1 HttpClient instance per host
var person = await "https://api.com"
    .AppendPathSegment("person")
    .SetQueryParams(new { a = 1, b = 2 })
    .WithOAuthBearerToken("my_oauth_token")
    .PostJsonAsync(new
    {
        first_name = "Claire",
        last_name = "Underwood"
    })
    .ReceiveJson<Person>();
```


```cs
// fake & record all http calls in the test subject
using (var httpTest = new HttpTest()) {
    // arrange
    httpTest.RespondWith("OK", 200);
    // act
    await sut.CreatePersonAsync();
    // assert
    httpTest.ShouldHaveCalled("https://api.com/*")
        .WithVerb(HttpMethod.Post)
        .WithContentType("application/json");
}
```
