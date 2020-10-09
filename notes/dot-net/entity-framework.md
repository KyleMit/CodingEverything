# Entity Framework

[Entity Framework bind raw SQL query to model class](https://stackoverflow.com/questions/43429928/entity-framework-bind-raw-sql-query-to-model-class)

```cs
var players = dbContext.Database
    .SqlQuery<PlayerViewModel>("SELECT Lebron as FirstName, James as LastName FROM Players")
    .ToList<PlayerViewModel>();
```

[EF 6 - SQL queries for non-entity types](https://docs.microsoft.com/en-us/ef/ef6/querying/raw-sql)
[EF Core - Raw SQL Queries](https://docs.microsoft.com/en-us/ef/core/querying/raw-sql)

[Configuring a DbContext](https://docs.microsoft.com/en-us/ef/core/miscellaneous/configuring-dbcontext)
