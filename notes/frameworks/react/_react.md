# React


* [React Getting Started](https://reactjs.org/docs/getting-started.html)
* [Creating a New App](https://reactjs.org/docs/create-a-new-react-app.html)

## Ecosystem

* [Redwood](https://redwoodjs.com/)
  * [React Single File Components Are Here](https://dev.to/swyx/react-single-file-components-are-coming-3g74)

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


* `className` is used instead of `class` for adding CSS classes, as `class` is a reserved keyword in JavaScript
* Properties and methods in JSX are camelCase - `onclick` will become `onClick`
* Self-closing tags must end in a slash - e.g. `<img />`

```js
const heading = <h1 className="site-heading">Hello, React</h1>
```

```js
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')
```

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

## Debug

* [React Dev Tools](https://fb.me/react-devtools)
* [React Dev Tools For Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)


## React Hook Form

* [React Hook Form](https://react-hook-form.com/) - Simple React forms validation
* [react-hook-form - CodeSandbox](https://codesandbox.io/s/react-hook-form-tutorial-app-setup-forked-y7rot)

[How to add comments to React?](https://stackoverflow.com/q/30766441/1366033)

```js
return (
  <p>
      {/* This is a comment, one line */}
  </p>
)
```


[React - uncaught TypeError: Cannot read property 'setState' of undefined](https://stackoverflow.com/q/32317154/1366033)

This is due to `this.delta` not being bound to `this`. In order to bind set `this.delta = this.delta.bind(this)` in the constructor:

```js
constructor(props) {
  super(props);
  this.state = {count : 1};
  this.delta = this.delta.bind(this);
}
```
