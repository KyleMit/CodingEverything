# Node Package Manager


## Docs

* [Unpublishing packages from the registry](https://docs.npmjs.com/unpublishing-packages-from-the-registry)

    ```bash
    npm unpublish <package-name> -f
    ```

* [shrinkwrap.json](https://docs.npmjs.com/cli/v6/configuring-npm/shrinkwrap-json)
* [package-lock.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json)



## Commands

## Init

[npm-init | npm Docs](https://docs.npmjs.com/cli/v6/commands/npm-init)

```bash
npm init foo -> npx create-foo
npm init @usr/foo -> npx @usr/create-foo
npm init @usr -> npx @usr/create
```

## Install

* `--production` - npm will not install modules listed in `devDependencies`

[Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable.html)

```bash
npm i
npm ci # only use package-lock
```

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


* [Peer Dependencies](https://nodejs.org/es/blog/npm/peer-dependencies/)
* [Installing a local module using npm?](https://stackoverflow.com/a/8089029/1366033)
* [npm link docs](https://docs.npmjs.com/cli/link)
* [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
* [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
* [How to publish packages to npm (the way the industry does things)](https://zellwk.com/blog/publish-to-npm/)
* [What is the meaning of the “at” (@) prefix on npm packages?](https://stackoverflow.com/q/36667258/1366033)


* [What is the difference between npm-shrinkwrap.json and package-lock.json?](https://stackoverflow.com/a/46132512/1366033)


* [How to install an npm package from GitHub directly?](https://stackoverflow.com/q/17509669/1366033)

* [How to set shell for npm run-scripts in Windows](https://stackoverflow.com/q/23243353/1366033)

    ```bash
    npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
    ```

  **Note**: [Yarn does not work in Git Bash on Windows](https://github.com/yarnpkg/yarn/issues/5349)


* [How to update each dependency in package.json to the latest version?](https://stackoverflow.com/q/16073603/1366033)

    ```bash
    npm outdated # list all
    npm update   # update all (respect package )
    ```

    or individually

    ```bash
    npm install express@latest --save
    npm install express@x.x.x --save
    ```

