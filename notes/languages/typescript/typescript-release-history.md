
# Features by Version

[TypeScript: Handbook - Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)

* [Announcing TypeScript 3.0](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/)
* [Announcing TypeScript 3.1](https://devblogs.microsoft.com/typescript/announcing-typescript-3-1/)
* [Announcing TypeScript 3.2](https://devblogs.microsoft.com/typescript/announcing-typescript-3-2/)
* [Announcing TypeScript 3.3](https://devblogs.microsoft.com/typescript/announcing-typescript-3-3/)
* [Announcing TypeScript 3.4](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/)
* [Announcing TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/)


## 3.4

### Incremental Compilation

```bash
tsc --incremental
```

### `as const` assertions

[const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

* object literals get `readonly` properties
* array literals become `readonly` tuples

## 3.6

### Better feedback for Promises

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

### Unicode Identifiers

```ts
const 𝓱𝓮𝓵𝓵𝓸 = "world"
```


## 3.7

### Optional Chaining

```ts
// before
if (data && data.customer && data.customer.address) let address = data.customer.address
// after
let address = data?.customer?.address
```

### Nullish Coalescing

This way we can unambiguously differentiate between something that is `undefined` or a `falsy` value

```ts
// before
let passCode =  data.number || '-1111' // will not accept 0
// after
let passCode =  data.number ?? '-1111' // 0 could be a passCode
```

### Recursive Type Aliases

```ts
// before
interface JSONObject { [x: string]: JSONValue; }
interface JSONArray extends Array<JSONValue> { }
type JSONValue = string | number | boolean | JSONObject | JSONArray
// after
type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>
```

### Assert Signatures

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


## 4.0

### Variadic Tuple Types

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

#### Tuples

```ts
type Strings = [string, string];
type Numbers = [number, number];

// [string, string, number, number, boolean]
type StrStrNumNumBool = [...Strings, ...Numbers, boolean];
```

### Concat Example


```ts
type Arr = readonly any[];

function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
    return [...arr1, ...arr2];
}
```


### Labeled Tuple Elements

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

### Class Property Inference from Constructors

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

### Short-Circuiting Assignment Operators

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

