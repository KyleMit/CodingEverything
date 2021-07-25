# React Router

> Declarative routing for React


By Michael Jackson / React Training

## Links

* [ReactTraining/**react-router**](https://github.com/ReactTraining/react-router)

## Alternatives

* Reach Router

## Getting Started

```bash
npm install react-router-dom
```


## Demo

[Quick Start](https://reactrouter.com/web/guides/quick-start)

```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```

## Questions

* [Multiple path names for a same component in React Router](https://stackoverflow.com/q/40541994/1366033)

    ```jsx
    <Router>
        <Route path={["/home", "/users", "/widgets"]} component={Home} />
    </Router>
    ```

