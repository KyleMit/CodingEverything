# Yarn

* [Yarn](https://classic.yarnpkg.com/lang/en/)
* [yarn | Github](https://github.com/yarnpkg/yarn) - Fast, reliable, and secure dependency management

## Getting Started

* [yarn init](https://classic.yarnpkg.com/en/docs/cli/init/)

    ```bash
    yarn init
    ```

### Configuration

* Manifest - [`package.json`](https://yarnpkg.com/configuration/manifest)
* Yarnrc - [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc)
* Lockfile - [`yarn.lock`](https://yarnpkg.com/configuration/yarnrc/#lockfileFilename)

## CLI

* [CLI Introduction](https://classic.yarnpkg.com/en/docs/cli/)


## Questions

* [Is there's a command for yarn to install a subfolder?](https://stackoverflow.com/q/48908597/1366033)

  Use [`--cwd`](https://classic.yarnpkg.com/en/package/cwd) like this:

  ```bash
  yarn --cwd "your/path" script
  ```

* Syntax highlighting for `yarn.lock`

  Install [Syntax Highlighting for yarn.lock files](https://marketplace.visualstudio.com/items?itemName=mariusschulz.yarn-lock-syntax)

