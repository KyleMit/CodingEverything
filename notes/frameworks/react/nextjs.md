# Next

[Next.js by Vercel - The React Framework](https://nextjs.org/)

> The React Framework for Production
> Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## Getting Started

* [Getting Started](https://nextjs.org/docs/getting-started)

```bash
# starter
npx create-next-app@latest
# manual
npm install next react react-dom
# blog example
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

## Links

* [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs)
* [Github Discussions](https://github.com/vercel/next.js/discussions)
* [Stack Overflow [next.js]](https://stackoverflow.com/questions/tagged/next.js)
* [Discord](https://discord.com/channels/752553802359505017/752553802359505020)
* [/r/Next.js](https://www.reddit.com/r/nextjs/)

## Docs

* [Basic Features: Pages](https://nextjs.org/docs/basic-features/pages)
* [API Routes: Introduction | Next.js](https://nextjs.org/docs/api-routes/introduction)

## Tutorial

* [Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-app)
* [vercel/next-learn template](https://github.com/vercel/next-learn/tree/master/basics/learn-starter)

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

* Next.js can serve static assets, like images, under the top-level `public` directory.

## Pre Rendering

* [Pre Rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering)
  * [SSG](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)
  * [SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering)

### SSG

#### [Without Data](https://nextjs.org/docs/basic-features/pages#static-generation-without-data)

#### [With Data](https://nextjs.org/docs/basic-features/pages#static-generation-with-data)

* `getStaticProps` - Your page **content** depends on external data
* `getStaticPaths` - Your page **paths** depend on external data

### SSR

* `getServerSideProps` - This function will be called by the server on every request.

```js
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page
```

### Dynamic Routes

* [Routing: Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)

* Add brackets to a page to create a dynamic route (a.k.a. url slugs, pretty urls, etc)

  e.g. `pages/post/[pid].js`

  ```js
  import { useRouter } from 'next/router'

  const Post = () => {
    const router = useRouter()
    const { pid } = router.query

    return <p>Post: {pid}</p>
  }

  export default Post
  ```

* Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets

  e.g. `pages/post/[...slug].js` matches `/post/a`, `/post/a/b`, & `/post/a/b/c`

* Each object must have the `params` key and contain an object with the `id` key (because we're using `[id]` in the file name)

  ```json
  [
    {
      params: {
        id: 'ssg-ssr'
      }
    },
  ]
  ```

## Frontmatter

[jonschlinkert/**gray-matter**](https://github.com/jonschlinkert/gray-matter) - Smarter YAML front matter parser

## Markdown

[**remark**](https://github.com/remarkjs/remark) - remark is a popular tool that transforms markdown with plugins. These plugins can inspect and change your markup.

## Date Format

[date-fns](https://date-fns.org/) - modern JavaScript date utility library

```js
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
```

## Typescript

[Next.js with TypeScript](https://nextjs.org/docs/basic-features/typescript#pages)

```bash
npx create-next-app@latest --ts
```

* Dot files
  * `next-env.d.ts`
  * `tsconfig.json`
  * `next.config.js`

```ts
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
}
```

## Directories

### Build Directory

[Setting a custom build directory](https://nextjs.org/docs/api-reference/next.config.js/setting-a-custom-build-directory)

`next.config.js`

```js
module.exports = {
  distDir: 'build',
}
```

### src Directory

[Advanced Features: `src` Directory](https://nextjs.org/docs/advanced-features/src-directory)

> Pages can also be added under `src/pages` as an alternative to the root `pages` directory.

## Deployment

[Deployment](https://nextjs.org/docs/deployment)


## Scripts

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

## Metadata / Head

* [next/head](https://nextjs.org/docs/api-reference/next/head)
* [Advanced Features: Custom `Document`](https://nextjs.org/docs/advanced-features/custom-document)

## Images

* [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
* [next/image - api](https://nextjs.org/docs/api-reference/next/image)

```js
import Image from 'next/image'

<Image
  src="/images/profile.jpg" // Route of the image file
  height={144} // Desired size with correct aspect ratio
  width={144} // Desired size with correct aspect ratio
  alt="Your Name"
/>
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

## CSS

* [PostCSS](https://postcss.org/) - a tool for transforming CSS with JavaScript
* [classnames](https://github.com/JedWatson/classnames) - A simple javascript utility for conditionally joining classNames together

### Styled JSX

* [vercel/styled-jsx](https://github.com/vercel/styled-jsx) - Full CSS support for JSX without compromises
* [styled-jsx](https://www.npmjs.com/package/styled-jsx)
* Alternatives
  * [**styled-components**](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)
  * [**emotion**](https://github.com/vercel/next.js/tree/canary/examples/with-emotion)

```html
<style jsx>{`
  …
`}</style>
```

### CSS Modules

* [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
* [css-modules](https://github.com/css-modules/css-modules)

Use the `[name].module.css` file naming convention.

## Layout

`components/layout.js`

```jsx
export default function Layout({ children }) {
  return <div>{children}</div>
}
```

## Questions

* Error: Element type is invalid


  > Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.
  > You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

  ```diff
  - import { Head } from 'next'
  + import Head from 'next/head'
  ```


* [Error: Invalid src prop on `next/image`, hostname "res.cloudinary.com" is not configured under images in your `next.config.js`](https://stackoverflow.com/q/68205860/1366033)

  [Next/Image > Domains](https://nextjs.org/docs/api-reference/next/image#domains)

  ```js
  module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com'],
    },
  }
  ```

* `/_next/data/zzz/xxx.json` 404

  * [why /_next/data/[hash]/xxx.json 404](https://github.com/vercel/next.js/discussions/38414)
  * [handling 404 json after deployment](https://github.com/vercel/next.js/discussions/14726)

