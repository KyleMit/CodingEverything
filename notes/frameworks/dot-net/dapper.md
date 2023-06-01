# Dapper

> Dapper - a simple object mapper for .Net

## Links

* [Dapper Docs](https://dapperlib.github.io/Dapper/)
* [Dapper Github](https://github.com/DapperLib/Dapper)


## Tutorials

[Entity Framework Community Standup - Dapper](https://www.youtube.com/watch?v=txiQar6PqvA)

## Example

```cs
public class Dog
{
    public int? Age { get; set; }
    public Guid Id { get; set; }
    public string Name { get; set; }
    public float? Weight { get; set; }

    public int IgnoredProperty { get { return 1; } }
}

var guid = Guid.NewGuid();
var dog = connection.Query<Dog>("select Age = @Age, Id = @Id", new { Age = (int?)null, Id = guid });

Assert.Equal(1,dog.Count());
Assert.Null(dog.First().Age);
Assert.Equal(guid, dog.First().Id);
```

## Parameterized queries

> Parameters are usually passed in as anonymous classes.

```cs
new {A = 1, B = "b"} // A will be mapped to the param @A, B to the param @B
```

## Literal replacements

```cs
connection.Query("select * from User where UserTypeId = {=Admin}", new { UserTypeId.Admin });
```

## Questions

* [Dapper Parameter replace not working for Top](https://stackoverflow.com/q/36946879/1366033)

    Use Parentheses with Top expression

    ```cs
    var sql = "Select Top ({=MaxLimit}) from Table";
    ```

* Using Dapper to get nvarchar(max) returns a string trimmed to 4000 characters. Can this behaviour be changed?

    [Default value is 4000 characters](https://github.com/DapperLib/Dapper/blob/a31dfd3dd4d7f3f2580bd33c877199d7ef3e3ef9/Dapper/DbString.cs#L16-L21)
