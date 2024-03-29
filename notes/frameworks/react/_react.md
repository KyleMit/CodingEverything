---
templateEngineOverride : md
---

# React

* [React Getting Started](https://reactjs.org/docs/getting-started.html)
* [Creating a New App](https://reactjs.org/docs/create-a-new-react-app.html)

## Ecosystem

* [Redwood](https://redwoodjs.com/)
  * [React Single File Components Are Here](https://dev.to/swyx/react-single-file-components-are-coming-3g74)
* [Relay](https://relay.dev/)

## Docs

* [Strict Mode](https://reactjs.org/docs/strict-mode.html)

## Syntax

ES6 Class with `render` method

```js
class App extends React.Component {
  render() {
      return (
          //...
      );
  }
}
```

Render function

```js
render() {
    return <h1>Hello world!</h1>
}
```

Initialize with `ReactDOM`

```js
ReactDOM.render(<App />, document.getElementById('root'))
```

[Passing Props](https://stackoverflow.com/a/55073712/1366033)

<!-- {% raw %} -->

```js
// function component syntax
function HelloWorldFunc(props) {
  return (
    <div>Hello, {props.user.name} </div>
  );
}
// class component syntax
class HelloWorldClass extends React.Component {
  render() {
    return (
      <div >
        Hello, {this.props.user.name}
      </div>
    );
  }
}

// createElement syntax
const helloCreate = React.createElement(HelloWorldFunc, {user:{name:'Kyle'}});
// JSX syntax
const helloJSX = <HelloWorldClass user={{name:'Kyle'}} />
```

<!-- {% endraw %} -->

## JSX

* **JSX** - JavaScript XML

* Reserved Keywords
  * use `className` of `class` for adding CSS classes
  * use `htmlFor` instead of `for` for label attributes
* Properties and methods in JSX are camelCase - `onclick` will become `onClick`
* Self-closing tags must end in a slash - e.g. `<img />`

```js
const heading = <h1 className="site-heading">Hello, React</h1>
```

```js
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')
```

* [JSX Gotchas](https://shripadk.github.io/react/docs/jsx-gotchas.html)

## Babel

Babel in the browser

```html
<script type="text/babel">
    class App extends React.Component {
        render() {
            return <h1>Hello world!</h1>
        }
    }

    ReactDOM.render(<App />, document.getElementById('root'))
</script>
```

## Server Components

* [React 18: React Server Components | Next.js](https://nextjs.org/docs/advanced-features/react-18/server-components)
* [Introducing Zero-Bundle-Size React Server Components – React Blog](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)
* [React Server Components](https://www.patterns.dev/posts/react-server-components/)

## Debug

* [React Dev Tools](https://fb.me/react-devtools)
* [React Dev Tools For Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Hooks API Reference

[Hooks API Reference – React](https://reactjs.org/docs/hooks-reference.html)

* `useState` - Returns a stateful value, and a function to update it.

  ```js
  const [state, setState] = useState(initialState);
  ```

* `useEffect` - Accepts a function that contains imperative, possibly effectful code.

  ```js
  useEffect(didUpdate);
  ```

  > Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

* `useContext` - Accepts a context object (the value returned from `React.createContext`) and returns the current context value for that context

* `useReducer` - An alternative to `useState`. `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one

  ```js
  const [state, dispatch] = useReducer(reducer, initialArg, init);
  ```

* `useCallback` - Returns a [memoized](https://en.wikipedia.org/wiki/Memoization) callback.

  ```js
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );
  ```

* `useMemo` - Returns a memoized value

  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

## Patterns

* Boundary
  * [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
  * Auth Boundary
* Provider
  * [Context](https://reactjs.org/docs/context.html)
* Fetch On Render
  * Async Render
  * [Suspense](https://reactjs.org/docs/react-api.html#reactsuspense)
  * Concurrent
  * [Lazy](https://reactjs.org/docs/react-api.html#reactlazy)


## Performance Profiling / Testing

* Docs
  * [Performance Tools – React](https://reactjs.org/docs/perf.html)
  * [Optimizing Performance – React](https://reactjs.org/docs/optimizing-performance.html)
  * [Profiler API – React](https://reactjs.org/docs/profiler.html)
* Articles
  * [Introducing the React Profiler – React Blog](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)


### React Hook Form

* [React Hook Form](https://react-hook-form.com/) - Simple React forms validation
* [react-hook-form - CodeSandbox](https://codesandbox.io/s/react-hook-form-tutorial-app-setup-forked-y7rot)

## Convert from Class to Function

* [How To Convert React Class Components to Functional Components with React Hooks](https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks#prerequisites)
* [Convert a React Class-Based Component to a Functional One Using a State Hook](https://www.digitalocean.com/community/tutorials/react-converting-to-a-hook)


[How to make vs code autocomplete React component's prop types?](https://stackoverflow.com/q/44408624/1366033)

1. Add JS Doc

   ```js
   /**
    *
    * @param {{headerText: string}} props
    */
   export default function Header(props) {
     return <h1>{props.headerText}</h1>
   }
   ```

2. Destructure params

   ```js
   export default function Header({headerText}) {
     return <h1>{headerText}</h1>
   }
   ```

3. Use PropTypes

  ```js
  import React from "react"
  import PropTypes from 'prop-types';

  function Header(props) {
    return <h1>{props.headerText}</h1>
  }

  Header.propTypes = {
      headerText: PropTypes.string.isRequired
  }

  export default Header
  ```

[Adjacent JSX elements must be wrapped in an enclosing tag](https://stackoverflow.com/a/33385872/1366033)
[Fragments – React](https://reactjs.org/docs/fragments.html)

```js
// wrapper div
return (
    <div>
       <Comp1 />
       <Comp2 />
    </div>
)

// fragment
return (
    <React.Fragment>
       <Comp1 />
       <Comp2 />
    </React.Fragment>
)

// short syntax
return (
    <>
       <Comp1 />
       <Comp2 />
    </>
)
```

## React Server Components

* [Introducing Zero-Bundle-Size React Server Components – React Blog](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)
  * [reactjs/server-components-demo: Demo app of React Server Components.](https://github.com/reactjs/server-components-demo)
  * [RFC: React Server Components by josephsavona · Pull Request #188 · reactjs/rfcs](https://github.com/reactjs/rfcs/pull/188)
  * [Data Fetching with React Server Components - YouTube](https://www.youtube.com/watch?v=TQQPAU21ZUw)

## TypeScript

### Events

```ts
const [state, setState] = React.useState<{ age: string | number; name: string }>({
  age: '',
  name: 'hai',
});

const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
  const name = event.target.name as keyof typeof state;
  setState({
    ...state,
    [name]: event.target.value,
  });
};
```

## Articles

* [Stateless Component vs Pure Component](https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b)


### Comma Separated Array of React Components

* Stack
  * [How to render react components by using map and join?](https://stackoverflow.com/q/34034038/1366033)
  * [Rendering comma separated list of links](https://stackoverflow.com/q/23618744/1366033)
  * [Is there a way to do array.join in react](https://stackoverflow.com/q/33577448/1366033)
  * [How to add a comma in array.map after every element except last element in React JSX](https://stackoverflow.com/q/47881767/1366033)
  * [Display comma separated elements of array in React](https://stackoverflow.com/q/43309773/1366033)
  * [Display comma separated elements of array in React](https://stackoverflow.com/q/43309773/1366033)
* Alt
  * [ReactJS Display array with separators in component](https://stackoverflow.com/q/67941404/1366033)
  * [How to using array.prototype.join in reactjs](https://stackoverflow.com/q/50287251/1366033)
  * [Can I do an Array.join() with an HTML tag in React, using JSX?](https://stackoverflow.com/q/56136295/1366033)
  * [React Join Children](https://gist.github.com/granmoe/274c299b792b039deecfb619753ea32c)


```tsx
const list = ({ data }) => data.reduce((acc, el) => [ acc, ', ', el ]);
```

```tsx
.map<React.ReactNode>(t => <span>{t}</span>)
.reduce((acc, el) => [acc, ', ', el])}
```

```tsx
.map(t => <span>t</span>)
.reduce((acc, el) => {
    return acc === null ? [el] : [...acc, ',', el]
}, null)
```

```tsx
const joinComponents = (accumulator, current) => [
  ...accumulator,
  accumulator.length ? ', ' : '',
  current
]

listComponents
  .map(item => <span key={item.id}> {item.t} </span>)
  .reduce(joinComponents, [])
```

```tsx
{this.props.data
    .map(item => <span>{item}</span>)
    .map((item, index) => [index > 0 && ', ', item ])}
```

* **Names**
  * `JoinComponents`
  * `JoinJsx`
  * `joinJsxArray`
  * `List`
  * `Intersperse`


https://codesandbox.io/s/react-join-components-lzjdx?file=/src/App.tsx


```tsx
const JoinComponent = <T, >(arr: Array<T>, sep = ', '): Array<T | string> => {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce((acc, el) => acc.concat([sep, el]), [arr[0]] as Array<T | string>);
};
```

## Questions


* [Get version number from package.json](https://stackoverflow.com/a/50822003/1366033)
* [Import JSON Data](https://stackoverflow.com/a/45662052/1366033)
* [Update State](https://learn.co/lessons/react-updating-state)
* [Increment State](https://stackoverflow.com/a/39316556/1366033)
* [Distinguish between Left and Right click events](https://stackoverflow.com/q/31110184/1366033)
* ['this' becomes undefined when called from onClick](https://github.com/facebook/react/issues/5040#issuecomment-362503705)
* [Prevent Default](https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46)

* [handle the `onKeyPress` event in ReactJS?](https://stackoverflow.com/a/35707795/1366033)
* [conditionally applying class attributes](https://stackoverflow.com/a/30533260/1366033)

* [How to add comments to React?](https://stackoverflow.com/q/30766441/1366033)

  ```js
  return (
    <p>
        {/* This is a comment */}
    </p>
  )
  ```


* [React - uncaught TypeError: Cannot read property 'setState' of undefined](https://stackoverflow.com/q/32317154/1366033)

  This is due to `this.delta` not being bound to `this`. In order to bind set `this.delta = this.delta.bind(this)` in the constructor:

  ```js
  constructor(props) {
    super(props);
    this.state = {count : 1};
    this.delta = this.delta.bind(this);
  }
  ```

* [Component definition is missing display name react/display-name](https://stackoverflow.com/q/52992932/1366033)

  ```js
  export default function MyComponent() {
    return <div></div>;
  }
  ```

  OR

  ```js
  const MyComponent = () => <div></div>;
  MyComponent.displayName = 'MyComponent';
  export default MyComponent;
  ```

* [Error when Async function in useEffect](https://stackoverflow.com/q/58495238/1366033)

  > commitHookEffectList > destroy is not a function

  ```js
  const getCat = async () => {
    //...
  }

  useEffect(getCat);         // ❌
  useEffect(() => getCat())  // ❌

  useEffect(() => {          // ✔
    getCat()
  })
  ```

* [How to call loading function with React useEffect only once](https://stackoverflow.com/q/53120972/1366033)

  Make sure you pass second initializer param

  ```js
  useEffect(() => {
    // Run! Like go get some data from an API.
  }, []);
  ```

  `useEffect` runs by default after every render of the component *(thus causing an effect)*.

* Fix file association

    ```json
    "files.associations": {
        "*.js": "javascriptreact"
    }
    ```

* [Cannot use JSX unless the '--jsx' flag is provided](https://stackoverflow.com/q/50432556/1366033)

  ```json
  "compilerOptions": {
    "jsx": "react",
  },
  ```

* ["'React' refers to a UMD global, but the current file is a module](https://stackoverflow.com/q/54770627/1366033)

  You do need to import React, since the jsx tags compile into calls to `React.createElement()`

  ```js
  import React from 'react';
  ```

* [Use React hook to implement a self-increment counter](https://stackoverflow.com/q/53395147/1366033)

  ```js
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  ```


* [Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables](https://stackoverflow.com/q/44198100/1366033)

  Set env variable before running script `NODE_ENV=development` using [`cross-env`](https://www.npmjs.com/package/cross-env)

  ```bash
  npx cross-env NODE_ENV=development babel src -d lib
  ```

* [React event types](https://stackoverflow.com/q/42081549/1366033)

  * [SyntheticEvent – React](https://reactjs.org/docs/events.html)

* [Is it possible to use if...else... statement in React render function?](https://stackoverflow.com/q/40477245/1366033)


  * [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator)

  Inside JSX Render function with `&&` or Ternary

  ```jsx
  render() {
    return (
      <div>
        {isLoggedIn ? "hello" : "anon"}
      </div>
    );
  }
  ```

  As variable set in function

  ```jsx
  if (isLoggedIn) {
    text = "hello";
  } else {
    text = "anon";
  }

  return (
    <div>
      {text}
    </div>
  );
  ```

* [Type `(props: Props) => Element[]` is not assignable to type `FunctionComponent<Props>`](https://stackoverflow.com/q/57651621/1366033)

  * React components cannot render as arrays
  * You can update your code to return multiple elements within a `<React.Fragment>`

* [`React.FC` is discouraged](https://github.com/facebook/create-react-app/pull/8177)

  1. Provides an implicit definition of `children` (even if your component doesn't need it)
  2. Doesn't support generics.
  3. Doesn't work correctly with `defaultProps`.

  But

  * provides typechecking and autocomplete for static properties like `displayName`, `propTypes`, and `defaultProps`

* [What's the difference between `React.FC` and `JSX.Element`](https://stackoverflow.com/q/58656026/1366033)

  ```tsx
  const Component: React.FC = () => {}
  const Component = (): JSX.Element => {}
  ```

* [Typescript input onchange event.target.value](https://stackoverflow.com/q/40676343/1366033)

  ```ts
  interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
      target: EventTarget & T;
  }
  ```

  ```ts
  const onChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void
  ```

* [How to use `setState` callback on react hooks](https://stackoverflow.com/questions/56247433/how-to-use-setstate-callback-on-react-hooks)

  ```ts
  const [count, setCount] = useState(0);
  setCount(prev => prev + 1);
  ```

  [Using the State Hook](https://reactjs.org/docs/hooks-state.html)

* [Using async/await inside a React functional component](https://stackoverflow.com/q/57847626/1366033)

  From [ExhaustiveDeps](https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L104) linting rule:

  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

  ```ts
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await MyAPI.getData(someId);
      // ...
    }
    fetchData();
  }, [someId]); // Or [] if effect doesn't need props or state
  ```

* [dynamic and static className](https://stackoverflow.com/q/36209432/1366033)

  ```jsx
  className={`wrapper searchDiv ${this.state.something}`}
  ```

* [Detect click outside React component](https://stackoverflow.com/q/32553158/1366033)


  ```tsx
  function DetectOutsideClicks() {
    const node = useRef(null);

    const handleClick = e => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      // handle code
    };

    useEffect(() => {
      // add when mounted
      document.addEventListener("mousedown", handleClick);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);

    return (
      <div ref={node}>
        ...
      </div>
    );
  }
  ```

* [polling api every x seconds with react](https://stackoverflow.com/q/46140764/1366033)

  ```tsx
  import { useEffect, useRef } from "react"

  export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        const id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  // usage
  useInterval(() => {
    // Your custom logic here
  }, delay);
  ```

* [Trace why a React component is re-rendering](https://stackoverflow.com/q/41004631/1366033)


* [JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.](https://stackoverflow.com/q/37674017/1366033)


* [How to use generics in props in React in a functional component?](https://stackoverflow.com/q/53958028/1366033)

  ```tsx
  const MyComponent = <T extends object>({...props}) => { /* ... */}
  const MyComponent = <T, >({...props}) => { /* ... */}
  ```

* [Prevent form submission when enter is pressed inside input](https://stackoverflow.com/q/43750335/1366033)

  ```tsx
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      void dispatch(UserDuck.Actions.login(userName, password));
  };

  return <form onSubmit={handleSubmit}>
  ```

* [React + TypeScript: Handling form onSubmit event](https://www.kindacode.com/article/react-typescript-handling-form-onsubmit-event/)

  ```ts
  const submitForm = (event: React.FormEvent<HTMLFormElement>)
  ```
