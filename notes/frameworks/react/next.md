# Next

[Next.js by Vercel - The React Framework](https://nextjs.org/)

> The React Framework for Production
> Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## Directories

### Build Directory

[Setting a custom build directory](https://nextjs.org/docs/api-reference/next.config.js/setting-a-custom-build-directory)

`next.config.js`

```js
module.exports = {
  distDir: 'build',
}
```

### Src Directory

[Advanced Features: `src` Directory](https://nextjs.org/docs/advanced-features/src-directory)

> Pages can also be added under `src/pages` as an alternative to the root `pages` directory.

## Deployment

[Deployment](https://nextjs.org/docs/deployment)

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

## Static HTML Export

[Advanced Features: Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export)

```bash
next export
```

## API Routes

[API Routes: Introduction](https://nextjs.org/docs/api-routes/introduction)

> For example, the following API route `pages/api/user.js` returns a `json` response with a status code of `200`:

```js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
```
