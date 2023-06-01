# TypeScript

[TypeScript Lang](https://www.typescriptlang.org/)


## Alternatives

* [**Flow**](https://flow.org/en/) -  A Static Type Checker for JavaScript


## Acronyms

* **ATA** - Automatic Type Acquisition

## Getting Started

You can install TypeScript via npm

```bash
npm install -g typescript
```

Then run the compiler via tsc

```bash
npx tsc
```


## Docs

* [TypeScript: The starting point for learning TypeScript](https://www.typescriptlang.org/docs/)
* [TypeScript: Handbook - The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
* [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## Utility Libraries

* [sindresorhus/type-fest](https://github.com/sindresorhus/type-fest) - A collection of essential TypeScript types
* [joonhocho/tsdef](https://github.com/joonhocho/tsdef) - TypeScript common pattern shortcut definitions / utility gist library

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
   npm init -y
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
   npx tsc --init --rootDir src --outDir out --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs
   ```

5. Now you can use all the built in node modules like this:

   ```ts
   import * as fs from 'fs';
   ```

   All your TypeScript code goes in src and the generated JavaScript goes in lib.

6. Add scripts to `package.json

  ```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
  },
  ```


### NPM Packages

* [typescript](https://www.npmjs.com/package/typescript)
* [@types/node](https://www.npmjs.com/package/@types/node)
* [ts-node](https://www.npmjs.com/package/ts-node)
* [nodemon](https://www.npmjs.com/package/nodemon)

### Live compile + run

* [fgnass/**node-dev**](https://github.com/fgnass/node-dev) - Zero-conf Node.js reloading
* [whitecolor/**ts-node-dev**](https://github.com/whitecolor/ts-node-dev#readme) - Compiles your TS app and restarts when files are modified.

1. Add `ts-node` which we will use for live compile + run in node

   ```bash
   npm install ts-node --save-dev
   ```

2. Add `nodemon` which will invoke ts-node whenever a file is changed

   ```bash
   npm install nodemon --save-dev
   ```

3. Scripts

  ```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
  },
  ```

## Declaration File

[Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

## Debugging

[TypeScript debugging with Visual Studio Code](https://code.visualstudio.com/docs/typescript/typescript-debugging)

1. Set `sourceMap` in `tsconfig.json`

   ```json
   {
     "compilerOptions": {
       "outDir": "out",
       "sourceMap": true
     }
   }
   ```

2. Create task to build app in `tasks.json`

   ```json
   {
     "version": "2.0.0",
     "tasks": [
       {
         "label": "tsc Build",
         "command": "tsc",
         "type": "shell",
         "problemMatcher": ["$tsc"],
         "presentation": { "reveal": "always" },
         "group": "build"
       }
     ]
   }
   ```

3. Create launch debug in `launch.json`

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "Launch Program",
         "preLaunchTask": "tsc Build",
         "program": "${workspaceFolder}/src/index.ts",
         "outFiles": ["${workspaceFolder}/out/**/*.js"],
         "skipFiles": ["<node_internals>/**"]
       }
     ]
   }
   ```

### Debug w/ ts-node

[`-r|--require`](https://nodejs.org/api/cli.html#-r---require-module)

```json
{
    "name": "TS Debug",
    "type": "node",
    "request": "launch",
    "args": [
        "src/index.ts"
    ],
    "runtimeArgs": [
        "--nolazy",
        "--require",
        "ts-node/register"
    ],
    "sourceMaps": true,
    "cwd": "${workspaceRoot}",
    "protocol": "inspector",
    "internalConsoleOptions": "openOnSessionStart"
}
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

[Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-)

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

## JSON to TypeScript Interfaces

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

## Convert API Response to Type

* [Fetch with async & await and TypeScript](https://www.carlrippon.com/fetch-with-async-await-and-typescript/)
* [How to design a Typescript Model for Response Returned](https://medium.com/@erVikas1/typescript-a5e7f6c6b110)

## TypeScript with ESM

* ESM only Libraries
  * [node-fetch don't work inside ts file](https://github.com/node-fetch/node-fetch/issues/1397)
  * [Typescript support for remark](https://github.com/remarkjs/remark/issues/819)

* [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-make-my-typescript-project-output-esm)

* [ESM support for ts-node](https://github.com/TypeStrong/ts-node/issues/1007)

* [ESM Support for Next.js](https://nextjs.org/blog/next-11-1#es-modules-support)

  ```js
  // next.config.js
  module.exports = {
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: true }
  }
  ```

## Mutually Exclusive Types

* Mutual Exclusion
* Mutually Exclusive
* Disjointed Union
* Discriminated Union
* XOR

* Demos
  * [Discriminated Union](https://bit.ly/ts-discriminated-unions)
  * [Disjointed Union](https://bit.ly/ts-disjointed-unions)

```ts
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

type NameOnly = { is: "NameOnly", name: string };
type FirstAndLastName = { is: "FirstAndLastName", firstname: string; lastname: string };
type Person = XOR<NameOnly, FirstAndLastName>;
let person: Person;
```

```ts
// proposed syntax
type A = { m: T } ^ { n:  U } ^ { o: Q }

// sugar for never
type A =
    { m: T; n: never; o: never; } |
    { m: never; n: U; o: never; } |
    { m: never; n: never; o: Q; }
```

```ts
interface A {
    kind: 'A',
    x: number
}
interface B {
    kind: 'B',
    y: number
}

type Z = A | B;

// here it DOES NOT allow to create a variable of type Z with both members of type A and B.
let z: Z = {
    kind: 'A',
    x: 5
    // y: 6 will produce an error
```

```ts
type Disjoint <T1, T2> = Extract<keyof T1, keyof T2> extends never ? T2 : never;
```

* [Proposal: Add an "logical or" (^) operator - Issue #14094](https://github.com/microsoft/TypeScript/issues/14094)
* [TypeScript: Documentation - TypeScript for Functional Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions)


* [Provide one of object types in typescript](https://stackoverflow.com/questions/47315346/)
* [TypeScript interface with XOR, {bar:string} xor {can:number}](https://stackoverflow.com/questions/44425344/)
* [typescript interface require one of two properties to exist](https://stackoverflow.com/questions/40510611/)
* [Typescript Interface - Possible to make "one or the other" properties required?](https://stackoverflow.com/questions/37688318/)
* [TypeScript require one parameter or the other, but not neither](https://stackoverflow.com/questions/52132696/)
* [Does Typescript support mutually exclusive types?](https://stackoverflow.com/questions/42123407/)

## Articles

* [Building and publishing an NPM Typescript package](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)
* [Improving Object.keys](https://fettblog.eu/typescript-better-object-keys/)

## Remove Unused Exports

* **Libs**
  * [ts-unused-exports - npm](https://www.npmjs.com/package/ts-unused-exports)
  * [ts-prune - npm](https://www.npmjs.com/package/ts-prune)
* **Stack**
  * [How to detect dead typescript code](https://stackoverflow.com/q/50184496/1366033)
  * [Detect unused exported symbols](https://stackoverflow.com/q/68546480/1366033)
* **Extensions**
  * [Find unused exports](https://marketplace.visualstudio.com/items?itemName=iulian-radu-at.find-unused-exports)
* **Articles**
  * [Finding dead code (and dead types) in TypeScript](https://effectivetypescript.com/2020/10/20/tsprune/)
  * [Finding and cleaning unused code in your Typescript project](https://medium.com/@nadeesha/finding-and-cleaning-unused-code-in-your-typescript-project-5099ab9363d)



## Questions


* [URLSearchParams constructor argument should be `string | object` #15338](https://github.com/microsoft/TypeScript/issues/15338#issuecomment-597554161)
* [Cannot find name 'console'. What could be the reason for this?](https://stackoverflow.com/a/42106036/1366033)
* [How to use URLSearchParams in a node.js and typescript project](https://stackoverflow.com/a/64088768/1366033)
* [Typescript: difference between String and string](https://stackoverflow.com/a/14727461/1366033)
* [Type 'T' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value](https://stackoverflow.com/a/54813723/1366033)
* [Function lacks ending return statement and return type does not include 'undefined'](https://stackoverflow.com/a/50079448/1366033)
* [import fails with 'no default export'](https://stackoverflow.com/a/50473239/1366033)

  ```diff
  - import Module from 'module';
  + import * as Module from 'module';
  ```


* [unknown file extension .ts with `ts-node`](https://stackoverflow.com/q/62096269/1366033)

   Remove `"type": "module"` from `package.json`


* [automatically install types](https://stackoverflow.com/q/48857430/1366033)

  ```bash
  npx typesync
  ```

* [requested module does not provide an export named](https://stackoverflow.com/q/47277887/1366033)

* [The requested module '*' is expected to be of type CommonJS](https://stackoverflow.com/q/63108391/1366033)

  ```js
  import { method } from 'commonjs-package';  // Errors
  import packageMain from 'commonjs-package'; // Works
  ```

* [tsconfig.json: Build:No inputs were found in config file](https://stackoverflow.com/q/41211566/1366033)

  Run `TypeScript: Restart TS server`


* [Import 'global' modules with TypeScript](https://stackoverflow.com/q/34161119/1366033)

  Use the side-effect-only import:

  ```ts
  import './greeting/greetingSpec';
  ```

* [Could not find a declaration file for module 'module-name'](https://stackoverflow.com/a/64656913/1366033)

  ```bash
  npm install -D @types/module-name
  ```

* [Adding Custom Type Definitions to a Third-Party Library](https://www.detroitlabs.com/blog/2018/02/28/adding-custom-type-definitions-to-a-third-party-library/)

  You get this error message

  > Could not find a declaration file for module 'library'.
  > 'library.js' implicitly has an 'any' type.
  > Try npm install @types/library if it exists
  > Or add a new declaration (`.d.ts`) file containing declare module 'library'

  ```json
  {
    "compilerOptions": {
      "typeRoots": [ "./types", "./node_modules/@types"]
    }
  }
  ```

  Add to exclude so it doesn't get compiled

  ```json
  {
    "exclude": ["node_modules", "types"]
  }
  ```


* [Interfaces vs Types](https://stackoverflow.com/q/37233735/1366033)

   ![differences](https://i.stack.imgur.com/6Tjyp.png)

* [readonly vs const](https://stackoverflow.com/q/37233735/1366033)

  * properties use `readonly` - compile time check
  * Variables use `const` - run time check as well

* [how to convert / cast / assert types](https://stackoverflow.com/q/13204759/1366033)

  ```ts
  <MarkerSymbolInfo> symbolInfo
  symbolInfo as MarkerSymbolInfo // tsx compatible
  ```


* [Add ES2019 Object.fromEntries function](https://github.com/microsoft/TypeScript/issues/30933)
  * [Property 'entries' does not exist on type 'ObjectConstructor'](https://stackoverflow.com/q/45422573/1366033)
  * [How can I make Object.fromEntries and Object.entries compile?](https://www.reddit.com/r/typescript/comments/e8abzr/)


* [Convert from unknown to Number](https://stackoverflow.com/q/53813188/1366033)

  > Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other.

  ```ts
  let port = process.env.REDIS_PORT as unknown as number
  ```

* [Create an enum with string values](https://stackoverflow.com/q/15490560/1366033)

  ```ts
  enum E {
      hello = "hello",
      world = "world"
  };
  ```

* [Parsing error: File 'tsconfig.json' not found - if project does not contain tsconfig.json in workspace root](https://github.com/microsoft/vscode-eslint/issues/722)

   remove `parserOptions` from `eslintrc.js`


* [Debug Angular/Typescript in visual code appends '_1' to variable](https://stackoverflow.com/q/65078164/1366033)

  > That thing happens when ECMAScript target version in ts config is below ES6.

* Typescript targets for node

  * [TypeScript tsconfig settings for Node.js 10?](https://stackoverflow.com/q/51716406/1366033)
  * [TypeScript: What's the "right" `target` for node 11?](https://stackoverflow.com/q/55098997/1366033)
  * [TypeScript tsconfig settings for Node.js 12?](https://stackoverflow.com/q/59787574/1366033)
  * [tsconfig/bases](https://github.com/tsconfig/bases) - Hosts TSConfigs to extend in a TypeScript app, tuned to a particular runtime environment

* [Should TypeScript Interfaces Be Defined in *.d.ts Files](https://stackoverflow.com/a/60092162/1366033)

  * `.d.ts` files are only seen as compiler input and not emitted to your dist/build folder
  * `.ts` files will provide definitions as part of an npm package or public typed API


* [How do I cast a JSON Object to a TypeScript class?](https://stackoverflow.com/q/22875636/1366033)

  Cast with [Type Assertions](https://basarat.gitbook.io/typescript/type-system/type-assertion#type-assertion-vs-casting)

  ```ts
  let questionText = await fs.readFile("./data.json", "utf-8")
  let questions: Question[] = JSON.parse(questionText)
  ```

* [Exclude property from type](https://stackoverflow.com/q/48215950/1366033)


  ```ts
  interface Test {
      a: string;
      b: number;
      c: boolean;
  }

  // Omit a single property:
  type OmitA = Omit<Test, "a">; // Equivalent to: {b: number, c: boolean}

  // Or, to omit multiple properties:
  type OmitAB = Omit<Test, "a"|"b">; // Equivalent to: {c: boolean}
  ```

* [Obtaining the return type of a function](https://stackoverflow.com/q/36015691/1366033)

  * [Notes on ReturnType](https://dev.to/busypeoples/notes-on-typescript-returntype-3m5a?signin=true)
  * [Utility Types > ReturnType<Type>](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)

  Simple Example

  ```tsx
  function getInt(a: string) {
    return parseInt(a);
  }

  type A = ReturnType<typeof getInt>; // => number
  ```

  Inferred Type

  ```tsx
  let id = 0;
  function createUser(name: string, position: string) {
    return {
      id: id++,
      name,
      position,
      createdAt: new Date()
    };
  }

  type User = ReturnType<typeof createUser>;
  // => {id: number, name: string, position: string, createdAt: Date}
  ```

* [How do I convert a string to enum in TypeScript?](https://stackoverflow.com/q/17380845/1366033)

  ```ts
  enum Color {
    Green = "Green",
    Red = "Red"
  }

  const color = "Green";
  const colorEnum = color as Color;
  ```

* [Use Enum as restricted key type in Typescript](https://stackoverflow.com/q/44243060/1366033)

  [Code Sandbox](https://codesandbox.io/s/typescript-enums-w52d1)

  ```ts
  enum Colors {
    Red = "Red",
    Yellow = "Yellow",
    Blue = "Blue"
  }

  type ColorDict1 = { [key in keyof typeof Colors]: any };
  let myColorDict1: ColorDict1 = {
    [Colors.Red]: 1,
    [Colors.Yellow]: 2,
    [Colors.Blue]: 3
  };

  type ColorDict2 = { [key in Colors]: any };
  let myColorDict2: ColorDict2 = {
    [Colors.Red]: 1,
    [Colors.Yellow]: 2,
    [Colors.Blue]: 3
  };

  type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
  };

  type ColorDict3 = EnumDictionary<Colors, any>;
  const myColorDict3: ColorDict3 = {
    [Colors.Red]: 1,
    [Colors.Yellow]: 2,
    [Colors.Blue]: 3
  };
  ```


* [Importing JSON file in TypeScript](https://stackoverflow.com/q/49996456/1366033)

  * `index.ts`

    ```ts
    import colorsJson from '../colors.json'; // This import style requires "esModuleInterop", see "side notes"
    console.log(colorsJson.primaryBright);
    ```

  * `tsconfig.json`

    ```json
    "resolveJsonModule": true,
    "esModuleInterop": true,
    ```


* [nameof keyword in Typescript](https://stackoverflow.com/q/50470025/1366033)

  ```ts
  const nameof = <T>(name: keyof T) => name;

  interface Person {
      firstName: string;
      lastName: string;
  }

  const personName1 = nameof<Person>("firstName"); // => "firstName"
  ```

* [Where is VSCode's “Restart TS server”?](https://stackoverflow.com/q/64454845/1366033)

  Make sure a `.js`, `.ts`, or `.tsx` file is open/focused

* [How to remove index signature using mapped types](https://stackoverflow.com/q/51465182/1366033)

  * [TS Playground](http://bit.ly/RemoveIndex)

  ```ts
  interface Foo {
    [key: string]: any;
    [key: number]: any;
    bar(): void;
  }

  type RemoveIndex<T> = {
    [ P in keyof T as string extends P ? never : number extends P ? never : P ] : T[P]
  };

  type FooWithOnlyBar = RemoveIndex<Foo>; //{ bar: () => void; }
  ```

* [Flat Map on Array](https://stackoverflow.com/a/53559473/1366033)

  Add `es2019` to `lib`

  ```ts
  {
    "compilerOptions": {
      "target": "es5",
      "lib": [
        "es2019"
      ]
    }
  }
  ```

* [Get key and corresponding property type from interface in typescript](https://stackoverflow.com/a/67393876/1366033)

  * `keyof T` - the **index type query operator**

    > For any type `T`, `keyof T` is the union of known, public property names of `T`
    > `keyof Car` is completely interchangeable with `"manufacturer" | "model" | "year"`

  * `T[K]` - the **indexed access operator**

    > `taxi["manufacturer"]` has the type `Car["manufacturer"]` — which in our example is just `string`


  ```ts
  const updatePerson = <K extends keyof IPerson>(key: K, value: IPerson[K]): IPerson => {
      return {...per, [key]: value}
  }

  const updateObject = <T extends Object, U extends keyof T>(obj: T, key: U, value: T[U]) => {
      obj[key] = value;
  }
  ```

  [TS Playground](https://bit.ly/3hlutYD)

* [What do `extends keyof` and `in keyof` mean?](https://stackoverflow.com/q/57337598/1366033)


* [TypeScript - Deep partial](https://stackoverflow.com/q/61132262/1366033)

  ```ts
  type DeepPartial<T> = {
      [P in keyof T]?: DeepPartial<T[P]>;
  };
  ```

* [Optional properties in typescript](https://stackoverflow.com/q/47942141/1366033)

  ```ts
  interface IEmployee {
    firstName: string;
    lastName: string;
    middleName?: string;
  }
  ```

* [Property 'share' does not exist on type 'Navigator'](https://stackoverflow.com/q/47831741/1366033)

  ```ts
  declare const navigator: any;
  ```

* [Restrict number to a certain range](https://stackoverflow.com/q/39494689/1366033)

  ```tsx
  type RangeType = 1 | 2 | 3
  ```

  * [Proposal: Interval Types / Inequality Types](https://github.com/microsoft/TypeScript/issues/43505)
  * [Stronger JavaScript with Opaque Types](https://codemix.com/opaque-types-in-javascript)


* [setTimeout return type](https://stackoverflow.com/a/51040768/1366033)

  ```ts
  const timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
  ```

* [Cannot find module 'fs' or its corresponding type declarations.ts](https://stackoverflow.com/q/37260901/1366033)

  ```bash
  npm install --save-dev @types/node
  ```

* [What is the exclamation mark (`!) operator in typescript](https://stackoverflow.com/q/42273853/1366033)

  [Non-null assertion operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)

  > Specifically, the operation `x!` produces a value of the type of x with `null` and `undefined` excluded


* [Why does TypeScript infer the 'never' type when reducing an Array with concat?](https://stackoverflow.com/q/54117100/1366033)


  ```ts
  ['a', 'b', 'c'].reduce((acc: string[], value) => acc.concat(value), []);
  ```



* [Types vs Interfaces differ in the ability to extend union types](https://stackoverflow.com/q/56085306/1366033)

  > An interface can only extend an object type or intersection of object types with statically known members
  >
  > This is because you cannot extend a union type using an interface.
  > You must use type alias:

  ```ts
  export type Partial2DPoint = { x: number } | { y: number }
  export type Partial3DPoint = Partial2DPoint & { z: number }
  ```

* [Typescript derive union type from tuple/array values](https://stackoverflow.com/q/45251664/1366033)

  ```ts
  const list = ['a', 'b', 'c'] as const; // TS3.4 syntax
  type NeededUnionType = typeof list[number]; // 'a'|'b'|'c';
  ```

* [Define a list of optional keys for Typescript Record](https://stackoverflow.com/q/53276792/1366033)

  ```ts
  type PartialList = Partial<Record<'a' | 'b' | 'c', string>>;
  ```

* [Use Enum as restricted key type in Typescript](https://stackoverflow.com/q/44243060/1366033)

  ```ts
  enum environment {
      qa = "qa",
      stage = "stage",
      prod = "prod",
  }

  type envs1 = { [key in environment]: string}
  type envs2 = Record<environment, string>
  ```

  [TS Enum Keys](https://bit.ly/ts-enum-keys)

* [Way to tell TypeScript compiler Array.prototype.filter removes certain types from an array?](https://stackoverflow.com/q/43010737/1366033)

  > The major issue is that TypeScript does not propagate the results of control flow analysis inside a function implementation to the scope where the function is called.

  ```js
  const arr = [1, 2, 3, 4, "5", 6];
  const numArr: number[] = arr
      .filter((i): i is number => {
          return typeof i === "number";
      });
  ```

* [Object Map Values](https://bit.ly/ts-objmapvals)

  ```ts
  interface ObjectConstructor {
      fromEntries<TKey extends PropertyKey, TVal>(e: [TKey, TVal][]): Record<TKey,TVal>;
      entries<TKey extends PropertyKey, TVal>(o: Record<TKey,TVal>): [TKey, TVal][];
      map<TOut>(arr: any[]): TOut[];
  }

  const objMapValues = <TKey extends PropertyKey, TOld, TNew>(obj: Record<TKey,TOld>, fn: (v: TOld) => TNew) : Record<TKey, TNew> => Object.fromEntries<TKey, TNew>(
    Object.entries<TKey, TOld>(obj).map<[TKey, TNew]>(([key, val]) => [key, fn(val)] ))
  ```

* [TypeScript: Same as Pick<...>, but with multiple fields](https://stackoverflow.com/q/59161763/1366033)

  ```ts
  interface MyInterface {
    a: number,
    b: number,
    c: number
  }

  type AB = Pick<MyInterface, 'a' | 'b'>;
  ```

* [`Unknown file extension ".ts"` vs `Cannot use import statement outside a module`](https://stackoverflow.com/questions/62237147/nodejs-typescript-and-module-issues#comment121297967_62239475)

  ```json
  compilerOptions: {
    module: 'CommonJS'
  }
  ```

* [Type `Set<T>` is not an array type or a string type.](https://stackoverflow.com/q/49218765/1366033)

  > Use compiler option `--downlevelIteration` to allow iterating of iterators.

  ```json
  {
    "compilerOptions": {
      "target": "es2015"
    }
  }
  ```

  or

  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "downlevelIteration": true
    }
  }
  ```

* [Compiler fails to import type from global.d.ts](https://stackoverflow.com/q/44533334/1366033)

  ```bash
  tsc ./index.ts ./global.d.ts
  ```

* [ts-node ignores d.ts files while tsc successfully compiles the project](https://stackoverflow.com/q/51610583/1366033)

  ```json
  // tsconfig.json
  {
    "ts-node": {
      "files": true
    }
  }
  ```

* [Difference between extending and intersecting interfaces in TypeScript?](https://stackoverflow.com/q/52681316/1366033)


  **Extension**

  ```ts
  interface Square extends Shape {
    sideLength: number;
  }
  ```

  **Intersection**

  ```ts
  type Square = Shape & {
    sideLength: number;
  }
  ```


* ['package.json' is not under 'rootDir'](https://stackoverflow.com/q/55753163/1366033)


  **`./src/tsconfig.json`**:

  ```json
  {
    "compilerOptions": {
      "rootDir": ".",
      "outDir": "../dist/",
      "resolveJsonModule": true
    },
    "references": [      // this is how we declare a dependency from
      { "path": "../" }  // this project to the one at the root dir`
    ]
  }
  ```

  **`./tsconfig.json`**:

  ```json
  {
    "compilerOptions": {
      "rootDir": ".",
      "outDir": ".",  // if out path for a file is same as its src path, nothing will be emitted
      "resolveJsonModule": true,
      "composite": true  // required on the dependency project for references to work
    },
    "files": [         // by whitelisting the files to include, TS won't automatically
      "package.json"   // include all source below root, which is the default.
    ]
  }
  ```

  **Run**

  ```bash
  tsc --build src
  ```

* [TSError Unable to compile TypeScript Module '' has no default export](https://stackoverflow.com/a/50473239/1366033)

  ```diff
  - import Module from 'module';
  + import * as Module from 'module';
  ```

* [Cannot find module 'ts-node/register'](https://stackoverflow.com/q/40910864/1366033)

  ```bash
  npm install ts-node --save-dev
  ```

* [Import class in definition file (*d.ts)](https://stackoverflow.com/q/39040108/1366033)

  ```ts
  declare namespace Express {
    interface Request {
      user: import("./user").User;
    }
  }
  ```

* [typescript: 'new' call to function](https://stackoverflow.com/q/66519278/1366033)

* [Defining array with multiple types in TypeScript](https://stackoverflow.com/q/29382389/1366033)

  Use **named tuples** in **TS 3.9+**

  ```ts
  const foo: [number, string] = [ 1, "message" ];
  ```

* ["Computed" property in Typescript](https://stackoverflow.com/q/53238881/1366033)

  ```ts
  class SimplePerson {
      public firstName: string;
      public lastName: string;
      get fullName(): string { // read-only property with getter function
          return this.firstName + " " + this.lastName;
      }
  }
  ```

* [Rename typescript class on import](https://stackoverflow.com/q/39610294/1366033)

  ```ts
  import { Class1 as Alias } from '../location2/class1'
  ```

* [Where to get return type for `setTimeout` (node vs window)](https://stackoverflow.com/q/45802988/1366033)

  ```ts
  let timer: ReturnType<typeof setTimeout> = setTimeout(() => { ... });
  ```

