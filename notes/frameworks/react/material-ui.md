# Material - UI

[Material-UI](https://material-ui.com/)

> A popular React UI framework

## Alternatives

* [React-Bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework, Rebuilt for React.
* [Fannypack](https://fannypack.style/) - A friendly, themeable, accessible React UI Kit built with Reakit.

## Versions

[V Next (5)](https://next.material-ui.com/components/chips/)

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

## Fiddle

* https://material-ui.com/r/issue-template-next
* https://material-ui.com/r/ts-issue-template



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


* TypeError: Cannot read property 'up' of undefined

> Material-UI: The `styles` argument provided is invalid.
> You are providing a function without a theme in the context.
> One of the parent elements needs to use a ThemeProvider.

* [How to style body element in materialUI](https://stackoverflow.com/q/64705335/1366033)

  ```tsx
  const useGlobalStyles = makeStyles({
    "@global": {
      body: {
        backgroundColor: "tomato"
      }
    }
  });
  const theme = createMuiTheme({});

  function MyThemeProvider({ children }) {
    useGlobalStyles();
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  function App() {
    return (
      <MyThemeProvider>
        <Button variant="contained" color="primary">
          Button
        </Button>
      </MyThemeProvider>
    );
  }
  ```

* [Set Typography Text Color in Material UI](https://stackoverflow.com/q/60607586/1366033)

  ```ts
  const theme = createMuiTheme({
    typography: {
      allVariants: {
        color: "pink"
      },
    },
  });
  ```

* [Accessing previous theme variables in createMuiTheme](https://stackoverflow.com/q/47977618/1366033)

  ```ts
  import { createMuiTheme } from 'material-ui/styles';

  const defaultTheme = createMuiTheme();

  const theme = createMuiTheme({
    typography: {
      fontSize: defaultTheme.typography.fontSize + 2
    }
  });

  export default theme;
  ```


* [How do I change the shape of a button in material-ui using theme?](https://stackoverflow.com/q/57487071/1366033)

  ```ts
  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 8,
        },
      },
    },
  })
  ```

* [Material UI Overriding styles with increased specificity](https://stackoverflow.com/q/63880835/1366033)

  ```tsx
  const useStyles = makeStyles(() => ({
    accordionHeader: {
      '&.Mui-expanded': {
        marginTop: 12,
        marginBottom: 12
      },
    },
  }));

  const MyAccordion = ({ summary, details }) => {
    const classes = useStyles();

    return (
      <Accordion>
        <AccordionSummary classes={{ content: classes.accordionHeader }}>
          {summary}
        </AccordionSummary>
        <AccordionDetails>
          {details}
        </AccordionDetails>
      </Accordion>
    )
  };
  ```

  [Customizing components - Pseudo Classes](https://material-ui.com/customization/components/#pseudo-classes)

* [Using `theme` in makeStyles](https://stackoverflow.com/q/59250673/1366033)

  ```ts
  const useStyles = makeStyles(theme => ({
    paragraph: {
      color: theme.palette.primary.main
    }
  }));
  ```

* [What is the difference between Box and Grid](https://stackoverflow.com/q/62744735/1366033)

* [Material-ui makeStyles overwritten by default](https://stackoverflow.com/q/64283026/1366033)


  ```ts
  const useStyles = makeStyles({
      error: {
          backgroundColor: red[100],
          "&.MuiDataGrid-row:hover": {
              backgroundColor: red[50]
          },
      },
  })
  ```

* [makeStyle for child elements](https://stackoverflow.com/q/59178802/1366033)

  Use [nesting selectors](https://material-ui.com/styles/basics/#nesting-selectors)

  ```ts
  const useStyles = makeStyles(theme => ({
      grid: {
          fontSize: 16,
          "& .MuiDataGrid-columnHeaderWrapper": {
              background: "white"
          }
      },
  }))

  <DataGrid className={classes.grid}
  ```

* [Material UI Datagrid Sticky Header](https://stackoverflow.com/q/66435092/1366033)

* [How do you change a style of a child when hovering over a parent](https://stackoverflow.com/q/59178802/1366033)

  ```tsx
  const useStyles = makeStyles(theme => ({
      externalLink: {
          "&:hover": {
              "& $externalIcon": {
                  opacity: .7
              }
          }
      },
      externalIcon: {
          opacity: 0,
          transition: "opacity .4s ease"
      }
  }))

  return <Link
            href={`${rootURL}/${data.topicName}/`}
            target="_blank"
            rel="noreferrer"
            className={classes.externalLink}
          >
      {data.topicDisplayName}
      <OpenInNew className={classes.externalIcon} />
  </Link>
  ```

* [Adding Badge to a Tab](https://stackoverflow.com/q/38697630/1366033)

  ```jsx
  <Tab label={<Badge badgeContent="2" color="primary">
      Messages
  </Badge>} value="messages" />
  ```

* [How to style body element in materialUI](https://stackoverflow.com/a/68893077/1366033)

  Add theme override to CSSVaseline

  ```js
  MuiCssBaseline: {
    "@global": {
      body: {
        backgroundColor: "tomato"
      }
    }
  }
  ```

* [3 ways to add custom fonts to your Material UI project](https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/)

```bash
npm install typeface-cormorant
```

```ts
// index.ts
import "typeface-cormorant";

// theme.ts
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Cormorant',
      'serif',
    ].join(','),
},});
```


