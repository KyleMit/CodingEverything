# JavaScript

## ES6

[lukehoban/**es6features**](https://github.com/lukehoban/es6features) - Overview of ECMAScript 6 features


## Debounce

[Javascript debounce function](https://stackoverflow.com/a/61241621/1366033)

```js
function debounceLate(func, wait) {
  var timeoutId;

  return function() {
      var context = this,
          args = arguments;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(function() {
        func.apply(context, args);
      }, wait);
  };
};

function debounceEarly(func, wait) {
    var timeoutId;

    return function() {
        var context = this,
            args = arguments;

        var defer = function() {timeoutId = null;};
        var callNow = !timeoutId;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(defer, wait);

        if (callNow) func.apply(context, args);
    };
};
```

```js
// example function
let sayHello = (name) => console.log(`Hi ${name}`)

// generate a debounced version with a min time between calls of 2 seconds
let sayHelloDebounced = debounce(sayHello, 2000)

// call however you want
sayHelloDebounced('David')
```

[Using async/await with a forEach loop](https://stackoverflow.com/q/37576685/1366033)

```js
async function printFiles () {
  const files = await getFilePaths();

  await Promise.all(files.map(async (file) => {
    const contents = await fs.readFile(file, 'utf8')
    console.log(contents)
  }));
}
```

[What does a tilde do when it precedes an expression?](https://stackoverflow.com/q/12299665/1366033)

```js
console.log(~"apple".indexOf("a"))     // true
console.log("apple".indexOf("a") >= 0) // true
console.log("apple".includes("a"))     // true
```

## `Object.defineProperty()`

Use Cases:

* Customization default property modifiers/access
  * Read only props
  * Write only props
  * Composite props
* Implement custom logic during get/set (logging, observability)
* Enumerability

[when do you use Object.defineProperty](https://stackoverflow.com/q/10105824/1366033)
[how to use javascript Object.defineProperty](https://stackoverflow.com/q/18524652/1366033)

[MDN Docs - `Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
[Example in StartsWith Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Polyfill)

Let's look at a couple ways to describe properties in c#

```cs
// separate functions for accessor and mutator
string _name;
public string getString() {
    return _name;
}
public void setString(value) {
    _name = value;
}

// properties with backing fields
string _name;
public string Name
{
    get {
        return _name;
    }
    set {
        _name = value;
    }
}

// expression body members
string _name;
public string Name
{
    get => _name;
    set => _name = value;
}

// auto implemented property
public string Name { get; set; }
```

Read Only Properties

```cs
// properties with backing fields
string _name;
public string Name
{
    get {
        return _name;
    }
}

// expression body member
string _firstName;
string _lastName;
public string FullName => $"{_firstName} {_lastName}"
```

[Auto-Implemented Properties in C#](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties)



```js
String.prototype.startsWithAny = function(searchStrings) {
    return searchStrings.some(search => this.startsWith(search))
};
Object.defineProperty(String.prototype, 'startsWithAny', {
    value: function(searchStrings) {
        return searchStrings.some(search => this.startsWith(search))
    }
});
```

## JavaScript Format Date

| Property     | Values  | Example     |
|--------------|---------|-------------|
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


## JS Doc Comments

Emmet autocomplete `/**`

[JS Doc](https://jsdoc.app/)


## Questions

* [Getting Text From Fetch Response Object](https://stackoverflow.com/a/41946517/1366033)


    ```js
    var response = await fetch(`/api/search?q=val`);
    var results = await response.text();
    ```

* [Polling until getting specific result?](https://stackoverflow.com/a/64654157/1366033)
