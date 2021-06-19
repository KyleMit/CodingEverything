# Date Handling

## Native

* [Getting the client's time zone (and offset) in JavaScript](https://stackoverflow.com/q/1091372/1366033)


    Use [`getTimezoneOffset`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset):

    ```js
    let offset = new Date().getTimezoneOffset();
    ```

    Use [`Intl.DateTimeFormat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) which returns [tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones):

    ```js
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    ```

## Moment

* [Is Between](https://momentjscom.readthedocs.io/en/latest/moment/05-query/06-is-between/)

    ```js
    moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true
    ```

## Luxon
