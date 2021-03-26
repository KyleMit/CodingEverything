
# Handbook

[TS for JS Devs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Types by Inference

```ts
let helloWorld = "Hello World";
//  ^ = let helloWorld: string
```

## Implicit Complex Type

```ts
const user = {
  name: "Hayes",
  id: 0,
};
```

## Describe Types shape

```ts
interface User {
  name: string;
  id: number;
}
```


## Assign Type

```ts
const user: User = {
  name: "Hayes",
  id: 0,
};
```

## Assign Class to Type

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

## Interface for parameters and return signatures

```ts
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
```

## Primitives

### JS Primitives

* `boolean`
* `number`
* `string`
* `bigint`
* `object`
* `symbol`
* `null`
* `undefined`

### TS Primitives

* `any` (allow anything)
* `unknown` (ensure someone using this type declares what the type is)
* `never` (it’s not possible that this type could happen)
* `void` (a function which returns undefined or has no return value)

## Composing Types

### Union Types `|`

Create type named `MyBool` - union operator (`|`) indicates type is composed of multiple values (`true` & `false`)

```ts
type MyBool = true | false;
```

#### Enum

```ts
type WindowStates = "open" | "closed" | "minimized";
```

#### Multiple Types

```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```

## Typeof

| type      | predicate                        |
| --------- | -------------------------------- |
| string    | typeof s === "string"            |
| number    | typeof n === "number"            |
| boolean   | typeof b === "boolean"           |
| undefined | typeof undefined === "undefined" |
| function  | typeof f === "function"          |
| array     | Array.isArray(a)                 |

## Generics

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

## Structural Typing

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

### Structural Typing from Class

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

## [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### Boolean

```ts
let isDone: boolean = false;
```

### Number

```ts
let decimal: number = 6;
let big: bigint = 100n;
```

### String

```ts
let color: string = "blue";
```

### Array

```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

### Tuple

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10];
```

### Enum

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

#### Enum with Explicit Values

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
```

#### Enum Text Description

```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2]; // 'Green'
```

### Any & Unknown

Unlike `unknown`, variables of type `any` allow you to access arbitrary properties, even ones that don’t exist. These properties include functions and TypeScript will not check their existence or type.

### Void

`void` is a little like the opposite of `any`: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

### Null & Undefined

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

### Type assertions

Similar to **casting** in any other language, but has no runtime impact - only used by the compiler at design time

#### Type As Syntax

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

#### Type Angle Bracket Syntax

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

> In general, the string(with a small ‘s’) denotes a primitive whereas String(with an uppercase ‘S’) denotes an object.

## Interfaces

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

### Optional Properties

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```

### [Extending Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces)

```ts
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
```

### Readonly properties


```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```


### Function Types

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

### Indexable Types

```ts
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

## Class Types

```ts
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
```

## Functions

### JavaScript

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

### TypeScript

```ts
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
};
```

### Explicitly Type Assigned Function

```ts
let myAdd: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

### Optional Parameters

```ts
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
```

### Default Parameters

```ts
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
```

### Rest Parameters

Sometimes called a `typearray` or from `arguments` in JS

```ts
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKenzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKenzie");
```

## this

[Understanding JavaScript Function Invocation and "this"](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)

