# Node Package Manager


## Docs

[Unpublishing packages from the registry](https://docs.npmjs.com/unpublishing-packages-from-the-registry)

```bash
npm unpublish <package-name> -f
```

## Badge Provider

[Version Badge for npm, RubyGems, PyPI, Bower and other packages](https://badge.fury.io/)

## Alternatives

* [yarn](https://yarnpkg.com/)
* [pnpm](https://pnpm.js.org/)


## NPM Package

### Run package locally

1. In package directory run `npm link`

   ```bash
   npm link
   ```

2. In the directory you want to consume the package, run the following:

   ```bash
   npm link <package-name>
   ```

## Deployment

### Project Setup

```bash
npm login
npm config set access public
npm publish --access public
```

## NPM CLI



