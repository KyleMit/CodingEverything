# React Hook Form

[React Hook Form](https://react-hook-form.com/)

> Performant, flexible and extensible forms with easy-to-use validation.

## Alternatives

* [Native (Forms – React)](https://reactjs.org/docs/forms.html)
* [Formik](https://formik.org/)
* [Redux Form](https://redux-form.com/8.3.0/)
* [React Final Form](https://final-form.org/react)

## Get Started

```bash
yarn add react-hook-form
```

```tsx
import useForm from "react-hook-form"

const { register, handleSubmit } = useForm()
const onSubmit = data => {
    console.log(data)
}

return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
    </form>
  )
```

## Validation

```jsx
<input name="firstName" ref={register({ required: true })} />
{errors.firstName && errors.firstName.type === "required" && (
<p>First Name is required</p>
)}
```

## TypeScript

[TS Support](https://react-hook-form.com/ts)


## Tutorials

* [React Hook Form - custom hook for forms validation - YouTube](https://www.youtube.com/watch?v=-mFXqOaqgZk)

