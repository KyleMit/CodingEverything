# Mock Service Worker (MSW)

<https://mswjs.io/>

> Mock by intercepting requests on the network level. Seamlessly reuse the same mock definition for testing, development, and debugging.

## Example

```js
import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.post('/login', async (req, res, ctx) => {
    const { username } = await req.json()

    return res(
      ctx.json({
        username,
        firstName: 'John'
      })
    )
  }),
)

worker.start()
```

## Getting Started

* [Mocking REST API](https://mswjs.io/docs/getting-started/mocks/rest-api)


## Docs

* [`rest`](https://mswjs.io/docs/api/rest)


## Questions

* [Node interceptors don't resolve relative URLs when "location" is present · Issue #1625](https://github.com/mswjs/msw/issues/1625)


  Workaround: Include absolute URL in fetch

  ```diff
  - await fetch(`/sample-data`);
  + await fetch(`${window.location.origin}/sample-data`);
  ```


