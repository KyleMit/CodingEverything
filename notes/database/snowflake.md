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

  [`DATEADD`](https://docs.snowflake.com/en/sql-reference/functions/dateadd.html)
  [`CURRENT_DATE`](https://docs.snowflake.com/en/sql-reference/functions/current_date.html)

  ```sql
  where item_date_purchased > dateadd(day, -30, current_date());
  ```

* String ends with another string

  [`endswith`](https://docs.snowflake.com/en/sql-reference/functions/endswith.html)

  ```sql
  where endswith(hostname, '.com')
  ```

* [Snowflake date_trunc to remove time from date](https://stackoverflow.com/q/58111744/1366033)

  ```sql
  select to_timestamp('2019-09-23 12:33:25') -- 2019-09-23T12:33:25Z
  select date_trunc('DAY', to_timestamp('2019-09-23 12:33:25')) -- 2019-09-23T00:00:00Z
  select cast(date_trunc('DAY',  to_timestamp('2019-09-23 12:33:25')) as date) -- 2019-09-23
  select cast(to_timestamp('2019-09-23 12:33:25') as date) -- 2019-09-23
  select to_timestamp('2019-09-23 12:33:25')::date -- 2019-09-23
  select date(to_timestamp('2019-09-23 12:33:25')) -- 2019-09-23
  ```

  * [Date & Time Data Types](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html)
  * [Date and Time Input / Output](https://docs.snowflake.com/en/user-guide/date-time-input-output.html)
  * [Date & Time Functions](https://docs.snowflake.com/en/sql-reference/functions-date-time.html)
    * [CURRENT_TIMESTAMP](https://docs.snowflake.com/en/sql-reference/functions/current_timestamp.html)
    * [TO_DATE , DATE](https://docs.snowflake.com/en/sql-reference/functions/to_date.html)
    * [DATE_PART](https://docs.snowflake.com/en/sql-reference/functions/date_part.html)

* [How to extract a substring of a URL with regex](https://stackoverflow.com/q/71610700/1366033)

  Use [`PARSE_URL`](https://docs.snowflake.com/sql-reference/functions/parse_url)

  ```sql
  SELECT PARSE_URL('https://www.snowflake.com/');
  -- +-----------------------------------------+
  -- | PARSE_URL('HTTPS://WWW.SNOWFLAKE.COM/') |
  -- |-----------------------------------------|
  -- | {                                       |
  -- |   "fragment": null,                     |
  -- |   "host": "www.snowflake.com",          |
  -- |   "parameters": null,                   |
  -- |   "path": "",                           |
  -- |   "port": null,                         |
  -- |   "query": null,                        |
  -- |   "scheme": "https"                     |
  -- | }                                       |
  -- +-----------------------------------------+
  ```

  [How To Query JSON Data in Snowflake](https://www.bmc.com/blogs/snowflake-query-json-data/)

  ```sql
  SELECT PARSE_URL('https://www.snowflake.com/'):host -- www.snowflake.com
  ```

  ```sql
  SELECT PARSE_URL('https://www.snowflake.com/')['host'] -- www.snowflake.com
  ```

* [Concat two Strings](https://stackoverflow.com/q/59581699/1366033)

  Use [`CONCAT`](https://docs.snowflake.com/en/sql-reference/functions/concat)

  ```sql
  SELECT CONCAT('hello', ' ', 'world') -- 'hello world'
  ```

  Use `||`

  ```sql
  SELECT 'hello' || ' ' || 'world' -- 'hello world'
  ```
