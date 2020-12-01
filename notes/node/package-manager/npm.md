# Node Package Manager


## Docs

* [Unpublishing packages from the registry](https://docs.npmjs.com/unpublishing-packages-from-the-registry)

    ```bash
    npm unpublish <package-name> -f
    ```

* [shrinkwrap.json](https://docs.npmjs.com/cli/v6/configuring-npm/shrinkwrap-json)
* [package-lock.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json)



## Commands

## Install

* `--production` - npm will not install modules listed in `devDependencies`

## Badge Provider

[Version Badge for npm, RubyGems, PyPI, Bower and other packages](https://badge.fury.io/)

## Alternatives

* [yarn](https://yarnpkg.com/)
* [pnpm](https://pnpm.js.org/)


## Ecosystem

* [greenkeeper](https://greenkeeper.io/) (deprecated)
* [Snyk](https://snyk.io/)

## Scripts

[docs > scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts)

```bash
npm run <script-name>
```

Pass custom parameters to npm scripts by adding two dashes (`--`) after the command - e.g.

```bash
npm run build -- --colors
```

## NPX

Available in Node 8.2 / npm 5.2.0

[Introducing npx: an npm package runner](https://medium.com/@maybekatz/npx-55f7d4bd282b) by Kat Marchán


`npx` runs the local package binary in `./node_modules/.bin/<command>`


## Questions

* [What is the difference between npm-shrinkwrap.json and package-lock.json?](https://stackoverflow.com/a/46132512/1366033)


* [How to install an npm package from GitHub directly?](https://stackoverflow.com/q/17509669/1366033)

