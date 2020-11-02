# Contentful

## Acronyms

* **CDA** - [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)

## Alternatives

* [Cosmic](https://www.cosmicjs.com/)
* [Dato CMS](https://www.datocms.com/)
* [Sanity.io](https://www.sanity.io/)
* [Agility CMS](https://agilitycms.com/)
* [Contentstack](https://www.contentstack.com/)
* [Flotiq](https://flotiq.com/)
* [Kontent](https://kontent.ai/)
* [Strapi](https://strapi.io/)
* [Drupal](https://www.drupal.org/)
* [WordPress](https://wordpress.com/)

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

![contentful intro](/assets/notes/contentful/intro.png)

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

## Managing Multiple Environments

[Multiple environments](https://www.contentful.com/developers/docs/concepts/multiple-environments/)

## Contentful CLI

[Installing the Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/installation/)

```bash
npm install -g contentful-cli
```

## Import / Export

[Importing and exporting content with the Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/)
