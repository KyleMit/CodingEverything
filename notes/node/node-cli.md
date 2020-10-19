# Creating a CLI w/ Node


## Tutorials

* [Making CLI app with ease using commander.js and Inquirer.js](https://medium.com/jspoint/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac)
* [Build a Command Line Application with Node.js](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs)
* [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
* [Build a JavaScript Command Line Interface (CLI) with Node.js](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)

## Install Locally

```bash
npm install -g .
```

## Troubleshooting

[Running global npm scripts in node 12.9.0: This command not found error. #29287](https://github.com/nodejs/node/issues/29287#issuecomment-524859390)

Delete the following folders:

```none
%AppData%\npm
%AppData%\npm-cache
```

### API

[Difference between terms: “option”, “argument”, and “parameter”?](https://stackoverflow.com/q/36495669/1366033)
[Positional arguments vs options in a command-line interface](https://softwareengineering.stackexchange.com/q/366218/87466)
[Variadic function](https://en.wikipedia.org/wiki/Variadic_function)
[Sending command line arguments to npm script](https://stackoverflow.com/a/26545792/1366033)


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


## Commander

* [Provide Array of permitted values for an option? - Issue #518](https://github.com/tj/commander.js/issues/518) - Not Yet
* [Enhance Option class to allow specifying choices - PR #1331](https://github.com/tj/commander.js/pull/1331) - Version 7.x

```js
program
   .addOption(new Option('-s, --secret').hideHelp())
   .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))
   .addOption(new Option('-s, --size <value>', 'drink size').choices(['big', 'little']));
```
