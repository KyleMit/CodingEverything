# Material - UI

[Material-UI](https://material-ui.com/)

> A popular React UI framework

## Getting Started

```bash
# with npm
npm install @material-ui/core

# with yarn
yarn add @material-ui/core
```

### Example

```jsx
import React from 'react';
import { Button } from '@material-ui/core';

function App() {
  return <Button color="primary">Hello World</Button>;
}
```

## Docs

[styles](https://material-ui.com/styles/basics/)

## Components

### Select

* [Select component](https://material-ui.com/components/selects/)
* [Select API](https://material-ui.com/api/select/)

```ts
import Select from '@material-ui/core/Select';
import { Select } from '@material-ui/core';
```


## Questions

* [Set Material UI Select width?](https://stackoverflow.com/q/56120213/1366033)

  ```jsx
  <FormControl style={{minWidth: 120}}>
  ```
