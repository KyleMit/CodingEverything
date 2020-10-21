# TypeScript

[TypeScriptLang.org](https://www.typescriptlang.org/)

You can install TypeScript via npm

```bash
npm install -g typescript
```

Then run the compiler via tsc

```bash
npx tsc
```

## Handbook

[TS for JS Devs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### Types by Inference

```ts
let helloWorld = "Hello World";
//  ^ = let helloWorld: string
```

### Implicit Complex Type

```ts
const user = {
  name: "Hayes",
  id: 0,
};
```

### Describe Types shape

```ts
interface User {
  name: string;
  id: number;
}
```

### Assign Type

```ts
const user: User = {
  name: "Hayes",
  id: 0,
};
```

### Assign Class to Type

```ts
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```

### Interface for parameters and return signatures

```ts
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
```

### Primitives

#### JS Primitives

* `boolean`
* `number`
* `string`
* `bigint`
* `object`
* `symbol`
* `null`
* `undefined`

#### TS Primitives

* `any` (allow anything)
* `unknown` (ensure someone using this type declares what the type is)
* `never` (it’s not possible that this type could happen)
* `void` (a function which returns undefined or has no return value)

### Composing Types

#### Union Types `|`

Create type named `MyBool` - union operator (`|`) indicates type is composed of multiple values (`true` & `false`)

```ts
type MyBool = true | false;
```

##### Enum

```ts
type WindowStates = "open" | "closed" | "minimized";
```

##### Multiple Types

```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```

### Typeof

| type | predicate |
|---------|---------|
| string | typeof s === "string" |
| number | typeof n === "number" |
| boolean | typeof b === "boolean" |
| undefined | typeof undefined === "undefined" |
| function | typeof f === "function" |
| array | Array.isArray(a) |

### Generics

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

### Structural Typing

Structural Typing AKA "Duck Typing" is typed based on the "shape" of a value

Type does not need to be explicitly assigned in order to be consumed as type, as long as it matches shapes

```ts
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// prints "12, 26"
const point = { x: 12, y: 26 };
printPoint(point);
```

#### Structural Typing from Class

```ts
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); // prints "13, 56"
```

### [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

#### Boolean

```ts
let isDone: boolean = false;
```

#### Number

```ts
let decimal: number = 6;
let big: bigint = 100n;
```

#### String

```ts
let color: string = "blue";
```

#### Array

```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

#### Tuple

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10];
```

#### Enum

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

##### Enum with Explicit Values

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
```

##### Enum Text Description

```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2]; // 'Green'
```

#### Any & Unknown

Unlike `unknown`, variables of type `any` allow you to access arbitrary properties, even ones that don’t exist. These properties include functions and TypeScript will not check their existence or type.

#### Void

`void` is a little like the opposite of `any`: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

#### Null & Undefined

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

#### Type assertions

Similar to **casting** in any other language, but has no runtime impact - only used by the compiler at design time

##### Type As Syntax

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

##### Type Angle Bracket Syntax

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

> In general, the string(with a small ‘s’) denotes a primitive whereas String(with an uppercase ‘S’) denotes an object.

### Interfaces

Contain information about a type


```ts
// without interface
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

// with interface
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

interface LabeledValue {
  label: string;
}
```

#### Optional Properties

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```

#### Readonly properties


```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```

#### readonly vs const

* Variables use `const`
* properties use `readonly`

#### Function Types

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

#### Indexable Types

```ts
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

### Class Types

```ts
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
```

### Functions

#### JavaScript

```js
// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function (x, y) {
  return x + y;
};
```

#### TypeScript

```ts
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
};
```

#### Explicitly Type Assigned Function

```ts
let myAdd: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

#### Optional Parameters

```ts
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
```

#### Default Parameters

```ts
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
```

#### Rest Parameters

Sometimes called a `typearray` or from `arguments` in JS

```ts
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKenzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKenzie");
```

### this

[Understanding JavaScript Function Invocation and "this"](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)


## Export a Variable

[Typescript: How to export a variable](https://stackoverflow.com/q/42540745/1366033)

> There are two different types of export, **named** and **default**.
> You can have multiple named exports per module but only one default export.

### Named Export

```ts
// file1.ts
const arr = [1,2,3];
export { arr };
```

```ts
// file2.ts
import { arr } from "./file1";
console.log(arr.length);
```

### Default Export

```ts
// file1.ts
const arr = [1,2,3];
export default arr;
```

```ts
// file2.ts
import arr from './file1';
console.log(arr.length);
```

## Typescript in Node


[Node.js QuickStart - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/nodejs)

1. Setup a Node.js project `package.json`

   ```bash
   `npm init -y`
   ```

2. Add TypeScript

   ```bash
   npm install typescript --save-dev
   ```

3. Add `node.d.ts`

   ```bash
   npm install @types/node --save-dev
   ```

4. Init a `tsconfig.json` for TypeScript options with a few key options in your tsconfig.json

   ```bash
   npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs
   ```

5. Now you can use all the built in node modules like this:

   ```ts
   import * as fs from 'fs';
   ```

   All your TypeScript code goes in src and the generated JavaScript goes in lib.


### NPM Packages

* [typescript](https://www.npmjs.com/package/typescript)
* [@types/node](https://www.npmjs.com/package/@types/node)
* [ts-node](https://www.npmjs.com/package/ts-node)
* [nodemon](https://www.npmjs.com/package/nodemon)

### Live compile + run

1. Add `ts-node` which we will use for live compile + run in node

   ```bash
   npm install ts-node --save-dev
   ```

2. Add `nodemon` which will invoke ts-node whenever a file is changed

   ```bash
   npm install nodemon --save-dev
   ```



```json
"scripts": {
  "start": "npm run build:live",
  "build": "tsc -p .",
  "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
},
```


## Typescript Commands

TypeScript comes with two binaries: `tsc` and `tsserver`.

* `tsc` - TypeScript compiler w/ CLI


```bash
# invoke cli from global install
$ tsc --init
# invoke cli from local install
$ ./node_modules/.bin/tsc --init
# invoke cli from remote install
$ npx tsc --init
```

[TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```bash
# Run a compile based on a backwards look through the fs for a tsconfig.json
tsc

# Transpile just the index.ts with the compiler defaults
tsc index.ts

# Transpile any .ts files in the folder src, with the default settings
tsc src/*.ts

# Transpile any files referenced in with the compiler settings from tsconfig.production.json
tsc --project tsconfig.production.json
```

## Typescript Config

[TSConfig Reference](https://www.typescriptlang.org/tsconfig)


```bash
npx tsc --init \
        --rootDir src \
        --outDir build \
        --lib es6 \
        --module commonjs \
        --allowJs true \
        --noImplicitAny true \
        --esModuleInterop \
        --resolveJsonModule
```

## Definitely Typed

[DefinitelyTyped Home](https://definitelytyped.org/)
[DefinitelyTyped/**DefinitelyTyped**](https://github.com/DefinitelyTyped/DefinitelyTyped)

> The repository for high quality TypeScript type definitions

### npm

```bash
npm install --save-dev @types/jquery
```

### Triple-Slash Directives


```ts
/// <reference path="jquery/jquery.d.ts" />
```

### Types of Types in TypeScript

* Implicit - inferred from literals
* Explicit - set via interface / class
* Ambient - added to the global execution scope


## Publishing Types in NPM

[Handbook > Publishing](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)

```ts
{
  "name": "awesome",
  "author": "Vanguard Industries",
  "version": "1.0.0",
  "main": "./lib/main.js",
  "types": "./lib/main.d.ts"
}
```

## JSON to TypeScript

[quicktype](https://quicktype.io/typescript/) - Instantly generate TypeScript interfaces from JSON

```bash
# Install quicktype with npm
$ npm install -g quicktype
# Generate TypeScript for a simple JSON sample
$ echo '[1, 2, 3.14]' | quicktype --lang ts
# Generate TypeScript for a sample JSON file
$ quicktype person.json -o Person.ts
```

## Types

### Decorators

* Requires `experimentalDecorators` in `tsconfig.json`

  ```json
  {
    "experimentalDecorators": true,
  }
  ```

* Can be attached to `class`, `method`, `accessor`, `property`, or `parameter` objects
* The decorator class is a function and gets the constructor as a parameter

  ```ts
  function sealed(target) {
    // do something with 'target' ...
  }
  ```

* **decorator factory** - customize how the function is called by returning the function

  ```ts
  function color(value: string) {
    // this is the decorator factory
    return function (target) {
      // this is the decorator
      // do something with 'target' and 'value'...
    };
  }
  ```

[Using Class Decorators in Typescript with a real example](https://dev.to/danywalls/decorators-in-typescript-with-example-part-1-m0f)

#### Inheritance Example

```ts
// base class
class BaseEntity {
  readonly id: number;
  readonly created: string;
  constructor() {
    this.id = Math.random();
    this.created = new Date().toLocaleDateString();
  }
}

// child class
class Course extends BaseEntity {
  constructor(public name: string) {
    super();
  }
}

let englishCourse = new Course("English");
console.log("id: " + englishCourse.id);
console.log("created: " + englishCourse.created);
```

#### Decorator Example

```ts
function BaseEntity(ctr: Function) {
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString("es-ES");
}

@BaseEntity
class User {
  constructor(public name: string) {}
}

let user = new User("susan");
//City and User classes has the id and created property ;)
console.log("id: " + user.id);
console.log("created: " + user.created);
```

#### Decorator Factory Example


```ts
function LuckyNumber(limit: number) {
  return function (constructor: Function) {
    constructor.prototype.lucky = Math.floor(
      Math.random() * Math.floor(limit)
  }
}
```

## Features by Version

[TypeScript: Handbook - Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)

* [Announcing TypeScript 3.0](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/)
* [Announcing TypeScript 3.1](https://devblogs.microsoft.com/typescript/announcing-typescript-3-1/)
* [Announcing TypeScript 3.2](https://devblogs.microsoft.com/typescript/announcing-typescript-3-2/)
* [Announcing TypeScript 3.3](https://devblogs.microsoft.com/typescript/announcing-typescript-3-3/)
* [Announcing TypeScript 3.4](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/)
* [Announcing TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/)


### 3.4

#### Incremental Compilation

```bash
tsc --incremental
```


### 3.6

#### Better feedback for Promises

```ts
interface Customer {
    name: string
    phone: string
}

declare function getCustomerData(id: string): Promise<Customer>;
declare function payCustomer(customer: Customer): void;

async function f() {
    // before - Argument of type 'Promise<Customer>'is not assignable to parameter of type 'Customer'
    const customer = getCustomerData('c1')
    // after - Did you forget to use 'await'?
    const customer = getCustomerData('c1')
    payCustomer(customer)
}
```

#### Unicode Identifiers

```ts
const 𝓱𝓮𝓵𝓵𝓸 = "world"
```


### 3.7

#### Optional Chaining

```ts
// before
if (data && data.customer && data.customer.address) let address = data.customer.address
// after
let address = data?.customer?.address
```

#### Nullish Coalescing

This way we can unambiguously differentiate between something that is `undefined` or a `falsy` value

```ts
// before
let passCode =  data.number || '-1111' // will not accept 0
// after
let passCode =  data.number ?? '-1111' // 0 could be a passCode
```

#### Recursive Type Aliases

```ts
// before
interface JSONObject { [x: string]: JSONValue; }
interface JSONArray extends Array<JSONValue> { }
type JSONValue = string | number | boolean | JSONObject | JSONArray
// after
type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>
```

#### Assert Signatures

```ts
function isDate(input: unknown) : asserts input is Date {
  if (input instanceof Date)
    return;
  else
    throw new Error('Input must be a Date!');
}
```

```ts
function getYear(input: unknown) : number {
  isDate(input);
  // before - TypeScripts knows that input is Date
  let year = input.getFullYear();
  // after - TypeScripts knows that input is Date
  let year = input.getFullYear();
  return year;
}
```


### 4.0

#### Variadic Tuple Types

Avoid "death by a thousand overloads"

```js
function concat(arr1, arr2) {
    return [...arr1, ...arr2];
}
```

```js
function tail(arg) {
    const [_, ...result] = arg;
    return result
}
```

##### Tuples

```ts
type Strings = [string, string];
type Numbers = [number, number];

// [string, string, number, number, boolean]
type StrStrNumNumBool = [...Strings, ...Numbers, boolean];
```

#### Concat Example


```ts
type Arr = readonly any[];

function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
    return [...arr1, ...arr2];
}
```


#### Labeled Tuple Elements

```ts
type Range = [start: number, end: number];
```

Similar phrasings:

```ts
// rest parameters
function foo(...args: [string, number]): void {
    // ...
}
// named parameters
function foo(arg0: string, arg1: number): void {
    // ...
}
```

However rest param types don't come with labels

#### Class Property Inference from Constructors

**Flag**: `noImplicitAny`

```ts
class Square {
    // Previously: implicit any!
    // Now: inferred to `number`!
    area;
    sideLength;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
        this.area = sideLength ** 2;
    }
}
```

#### Short-Circuiting Assignment Operators

***compound assignment* operators** - apply an operator to two arguments, then assign the result to the left side

Examples:

```js
// Addition
a += b; // a = a + b

// Subtraction
a -= b; // a = a - b

// Multiplication
a *= b; // a = a * b

// Division
a /= b; // a = a / b

// Exponentiation
a **= b; // a = a ** b

// Left Bit Shift
a <<= b; // a = a << b
```

**new assignment operators**: `&&=`, `||=`, and `??=`

```ts
a = a && b;
a = a || b;
a = a ?? b;
```

Here's an **example**:

```ts
// if block
if (!a) {
    a = b;
}
// ternary
a = a ? a : b
// or
a = a || b
// compound assignment operators
a ||= b
```


## Convert API Response to Type

* [Fetch with async & await and TypeScript](https://www.carlrippon.com/fetch-with-async-await-and-typescript/)
* [How to design a Typescript Model for Response Returned](https://medium.com/@erVikas1/typescript-a5e7f6c6b110)




## Type Errors

* [Could not find a declaration file for module 'module-name'](https://stackoverflow.com/q/41292559/1366033)
* [URLSearchParams constructor argument should be `string | object` #15338](https://github.com/microsoft/TypeScript/issues/15338#issuecomment-597554161)
* [Cannot find name 'console'. What could be the reason for this?](https://stackoverflow.com/a/42106036/1366033)
* [How to use URLSearchParams in a node.js and typescript project](https://stackoverflow.com/a/64088768/1366033)
* [Typescript: difference between String and string](https://stackoverflow.com/a/14727461/1366033)
* [Type 'T' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value](https://stackoverflow.com/a/54813723/1366033)
* [Function lacks ending return statement and return type does not include 'undefined'](https://stackoverflow.com/a/50079448/1366033)


