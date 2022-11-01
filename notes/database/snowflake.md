# Snowflake

## Docs

* [`GROUP BY`](https://docs.snowflake.com/en/sql-reference/constructs/group-by.html)

## Questions

* [Case Insensitive `LIKE` Operator](https://stackoverflow.com/q/61073549/1366033)

  [`ILIKE`](https://docs.snowflake.com/en/sql-reference/functions/ilike.html)

  ```sql
  select 1 where 'Hello' ilike 'hello'
  ```

* [How to clear last run query (Cache) in snowflake](https://stackoverflow.com/q/70793413/1366033)

  ```sql
  ALTER SESSION SET USE_CACHED_RESULT=FALSE;
  ```

* [Regex word-boundary not working as expected](https://stackoverflow.com/q/73170886/1366033)

  [Docs > Regex > Backslash sequences](https://docs.snowflake.com/en/sql-reference/functions-regexp.html#label-regexp-general-usage-notes)

  Use `'\\b'`, not `'\b'`

* [Snowflake SQL Filter by transactions in the last rolling 30 days](https://stackoverflow.com/a/68129314/1366033)

  ```sql
  where item_date_purchased > dateadd(day, -30, current_date());
  ```
