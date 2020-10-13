# Contentful


## Links

* [Training](https://public.learningcenter.contentful.com/catalog)
* [Docs](https://www.contentful.com/developers/docs/)
* [Dev Portal](https://www.contentful.com/developers/)
* [SDK](https://github.com/contentful/contentful.js)

## Navigation

* Space Home
* Content Model
* Content
* Media

## Docs

* [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)

## Getting Started

```bash
npm install contentful
```

* [`createClient`](https://contentful.github.io/contentful.js/contentful/7.14.7/contentful.html#.createClient)

```js
let client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});
```

* [`getEntries`](https://contentful.github.io/contentful.js/contentful/7.14.7/ContentfulClientAPI.html#.getEntries)
* [Retrieve entries with search parameters](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters)
