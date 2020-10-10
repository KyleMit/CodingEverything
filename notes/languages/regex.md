# Regular Expressions



## Chron Syntax / Regex

[cron](https://en.wikipedia.org/wiki/Cron)
[cronexpr](https://github.com/gorhill/cronexpr#implementation)
[cron editor](https://github.com/gorhill/cronexpr#implementation)

[Create a regular expression for Cron statement](https://stackoverflow.com/q/14203122/1366033)


### General Format


| Field name    | Mandatory? | Allowed values  | Special characters |
| ------------- | ---------- | --------------- | ------------------ |
| Seconds       | No\*       | 0-59            | * / , -            |
| Minutes       | Yes        | 0-59            | * / , -            |
| Hours         | Yes        | 0-23            | * / , -            |
| Day of month  | Yes        | 1-31            | * / , - L W        |
| Month         | Yes        | 1-12 or JAN-DEC | * / , -            |
| Day of week   | Yes        | 0-6 or SUN-SAT  | * / , - L #        |
| Year          | No\*       | 1970–2099       | * / , -            |


**Predefined Scheduling Macros**:


| Entry      | Equivalent to      |
| ---------- | ------------------ |
| @annually  | 0 0 0 1 1 \* \*    |
| @yearly    | 0 0 0 1 1 \* \*    |
| @monthly   | 0 0 0 1 \* \* \*   |
| @weekly    | 0 0 0 \* \* 0 \*   |
| @daily     | 0 0 0 \* \* \* \*  |
| @hourly    | 0 0 \* \* \* \* \* |
| @reboot    |                    |


**Valid time units**:

| unit   | definition  |
| -------| ----------- |
| ns     | nanosecond  |
| us, µs | microsecond |
| ms     | millisecond |
| s      | second      |
| m      | minute      |
| h      | hour        |



[Regex to allow only number between 1 to 12](https://stackoverflow.com/q/32435949/1366033)


| Allowed values | Regex                      |
| -------------- | -------------------------- |
| 0-59           | [1-5]?[0-9]                |
| 0-23           | 2[0-3]\|1[0-9]\|[0-9]      |
| 1-31           | 3[01]\|[12][0-9]\|[1-9]    |
| 1-12           | 1[0-2]\|[1-9]              |
| 0-6            | [0-6]                      |
| 1970–2099      | 19[7-9][0-9]\|20[0-9][0-9] |


