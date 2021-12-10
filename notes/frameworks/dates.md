# Date Handling

## Native


| Property     | Values  | Example     |
| ------------ | ------- | ----------- |
| weekday      | narrow  | M           |
|              | short   | Mon         |
|              | long    | Monday      |
|              |         |             |
| year         | 2-digit | 19          |
|              | numeric | 2019        |
|              |         |             |
| month        | numeric |             |
|              | 2-digit |             |
|              | narrow  |             |
|              | short   |             |
|              | long    |             |
|              |         |             |
| day          | 2-digit |             |
|              | numeric |             |
|              |         |             |
| hour         | 2-digit |             |
|              | numeric |             |
|              |         |             |
| minute       | 2-digit |             |
|              | numeric |             |
|              |         |             |
| second       | 2-digit |             |
|              | numeric |             |
|              |         |             |
| timeZoneName | short   |             |
|              | long    |             |
|              |         |             |
| era          | narrow  | A           |
|              | short   | AD          |
|              | long    | Anno Domini |

```js
(new Date()).toLocaleDateString("en-US", {
    era: "narrow"
})
```

### Format Date - Further Reading

* [Get Locale Short Date Format using javascript](https://stackoverflow.com/q/2388115/1366033)
* [Get String in YYYYMMDD format from JS date object?](https://stackoverflow.com/q/3066586/1366033)
* [Where can I find documentation on formatting a date in JavaScript?](https://stackoverflow.com/q/1056728/1366033)
* [Converting a string to a date in JavaScript](https://stackoverflow.com/q/5619202/1366033)
* [Format JavaScript date as yyyy-mm-dd](https://stackoverflow.com/q/23593052/1366033)
* [How to format a JavaScript date](https://stackoverflow.com/q/3552461/1366033)
* [Display date/time in user's locale format and time offset](https://stackoverflow.com/q/85116/1366033)

### Specification

#### MDN

[`Date.prototype.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
[`Intl.DateTimeFormat.prototype.format()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format)

#### Github

* [tc39/ecma262](https://github.com/tc39/ecma262)
* [tc39/ecma402](https://github.com/tc39/ecma402)

#### Docs

[ECMAScript® 2021 Language Specification > tolocalestring](https://tc39.es/ecma262/#sec-date.prototype.tolocalestring)
[ECMAScript® 2021 Internationalization API Specification > DateTimeFormat Objects](https://tc39.es/ecma402/#datetimeformat-objects)

### Questions

* [Getting the client's time zone (and offset) in JavaScript](https://stackoverflow.com/q/1091372/1366033)


    Use [`getTimezoneOffset`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset):

    ```js
    let offset = new Date().getTimezoneOffset();
    ```

    Use [`Intl.DateTimeFormat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) which returns [tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones):

    ```js
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    ```

* [How to format time since xxx e.g. “4 minutes ago” similar to Stack Exchange sites](https://stackoverflow.com/q/3177836/1366033)

   Use [Intl.RelativeTimeFormat.prototype.format()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format)

    ```js
    new Intl.RelativeTimeFormat([]).format(-2, 'minutes'); // '2 minutes ago'
    new Intl.RelativeTimeFormat([]).format(2, 'minutes');  // 'in 2 minutes'
    ```

* [How to format a JavaScript date](https://stackoverflow.com/q/3552461/1366033)

    Use [Intl.DateTimeFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

    ```js
    new Intl.DateTimeFormat([]).format(new Date());                                                       //'12/8/2021'
    new Intl.DateTimeFormat([], {day: 'numeric', month: 'numeric'}).format(new Date());                   // '12/8'
    new Intl.DateTimeFormat([], {weekday: 'short', day: 'numeric', month: 'numeric'}).format(new Date()); // 'Wed, 12/8'
    ```

## Moment

* [Is Between](https://momentjscom.readthedocs.io/en/latest/moment/05-query/06-is-between/)

    ```js
    moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true
    ```

## Luxon
