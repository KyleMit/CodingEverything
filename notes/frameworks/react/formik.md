# Formik

[Formik by Formium - The React forms API](https://formik.org/)

## Alternatives

* [Redux Form](https://redux-form.com/8.3.0/)

## Use Cases

* Getting values in and out of form state
* Validation and error messages
* Handling form submission

## Docs

* [Getting Started](https://formik.org/docs/overview)
* [Tutorial](https://formik.org/docs/tutorial)

## Getting Started

### Installation

```bash
npm install formik --save
```

## Tutorial

[Schema Validation with Yup](https://formik.org/docs/tutorial#schema-validation-with-yup)


### Handle Change

Similar to:

```js
const [values, setValues] = React.useState({});

const handleChange = event => {
  setValues(prevValues => ({
    ...prevValues,
    // we use the name to tell formik which key of `values` to update.
    [event.target.name]: event.target.value
  });
}

let input = <input onChange={formik.handleChange} />
```

### Validation

* Formik will only proceed with executing the `onSubmit` function we passed to `useFormik()` if there are no errors
  * i.e. if our validation function returned `{}`

```js
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required'<ErrorMessage name="password" component="div" />
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

const valMsg = {formik.errors.email ? <div>{formik.errors.email}</div> : null}
```

### Formik Components

```js
import { Formik, Form, Field, ErrorMessage } from 'formik';

<ErrorMessage name="email" component="div" />
```

## Yup - Schema Validation

* [jquense/**yup**](https://github.com/jquense/yup) - Dead simple Object schema validation
* [Example on RunKit](https://runkit.com/jquense/yup)
* Similar to [Joi](https://github.com/hapijs/joi) / [React PropTypes](https://github.com/facebook/prop-types)
