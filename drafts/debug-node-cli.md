---
title: 'Setup Visual Studio Code debugger on your own Node CLI with NPM Link'
summary: Debugging can be tricky when using sym links and hitting a local CLI.  Here's a walkthrough of how to setup a CLI using npm and then debug it from a different directory
tags: ['post', 'npm', 'cli', 'debug']
authors: ['Kyle']
date: 2020-10-18
draft: true
---

Let's invent a tiny problem.  If you're used to using [`ls`](https://ss64.com/bash/ls.html) on a linux command prompt, you'll notice that it's not available on a standard windows command prompt (which uses [`dir`](https://ss64.com/nt/dir.html) instead).  Instead, you'll get the following error:

> `> ls`
> 'ls' is not recognized as an internal or external command, operable program or batch file.

There are plenty of ways around this, but let's use it as an opportunity to **build**, **deploy**, and **debug** a node CLI

## Creating the CLI

### Initialize NPM

You can setup whatever info you'd like here, but to bypass, just accept all with `-y` flag:

```bash
npm init -y
```

### Create the file to execute: `ls.js`

The *very first line must* be the following:

```js
#!/usr/bin/env node
```

Node will expose some useful metadata with the following APIS:

```js
let cwdPath = process.cwd() // the path in your command prompt
let filePath = __dirname    // the folder where ls.js lives
```

Let's write a function that will grab the directory info and log it to the console

```js
(async function() {
    let { promises: fs } = require("fs")
    let cwd = process.cwd()
    let dir = await fs.readdir(cwd)
    console.log(dir)
})()
```

At this point, you could call your file from the current directory like this:

```bash
node ls.js
```

But the goal is to be able to invoke that command from anywhere.  So we'll add a command to the `bin` property in the `package.json` file:

```json
"bin": {
    "ls": "./ls.js"
},
```

This maps the `ls` command to the `ls.js` file.  To install it on your machine from the local files, do an npm install like this:

```bash
npm install -g .
```

Which will install it into your `PATH` directory by installing it into the following folder on windows `%AppData%\npm`

And now we should be able to execute it from any directory like this:

```bash
> ls
```

## Add Debugging in VS Code

If you just want to test in the current directory, maybe stub out the call to `process.cwd()`, you could add a `launch.json` that runs through node directly.

But let's say that you'd like to mirror how the code is going to be used by running and debugging from a separate folder elsewhere on your machine.  One rub is that VS Code will only automatically attach a debugger to a child of your current working directory.  So we need to install again somewhere else and then refer back to the original.

### Create `node-cli-debug-test`

Let's create a sample project to test our code from

```bash
mkdir node-cli-debug-test
```

Now let's install our package into our current folder.

#### A) Install from folder

We can [install a package completely offline](https://stackoverflow.com/q/8088795/1366033) by passing in the local path to the project

```bash
npm i ~/Documents/code/cli-ls/
```

which will a local file dependency to your `package.json` like this:

```json
{
  "dependencies": {
    "@kylemit/cli-ls": "file:../cli-ls"
  }
}
```

But often packages on your local machine our destined for a public or private repository, so let's investigate that flow next and from here on

#### B) Install from repository

First, you'll have to publish your package to a public or private repository.  Let's publish to npm like this:

```bash
npm login
npm publish --access public
```

Once our package is published, we can go back to our test directory and install it from npm like this:

```bash
npm i @kylemit/cli-ls
```

### Debug Local Files

Now we have some local files within our working directory that we can attach a process to easily within VS Code.  Go to the debug pane in code and click the link to "create a launch.json" and choose "node" as your default program. But instead of debugging an `index.js` file at the project root, we're going to debug one of the files in `node_modules`, so replace the `program` property like this:

```diff
- "program": "${workspaceFolder}\\index.js"
+ "program": "${workspaceFolder}/node_modules/@kylemit/cli-ls/ls.js"
```

So the entire `launch.config` should look like this:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch CLI ls",
            "skipFiles": ["<node_internals>/**"],
            "program": "${workspaceFolder}/node_modules/@kylemit/cli-ls/ls.js"
        }
    ]
}
```

And then launch with <kbd>F5</kbd>!

![debugger](/assets/posts/debug-node-cli/debugger.png)

### NPM Link

But let's say there we got an error, and we want to test locally without having to go through the whole lifecycle of incrementing our node package, publishing up, and then downloading locally.  We can handle this use case by creating symbolic links with `npm link`

1. In package directory run `npm link`

   ```bash
   npm link
   ```

2. In the directory you want to consume the package, run the following:

   ```bash
   npm link <package-name>
   ```

Now if we make updates to our package, they'll show up immediately in our local `node_modules` folder.

### Debugging with SymLink

**But Wait!** Now that the we're using a symlink, our breakpoint doesn't work anymore!

That's because the breakpoint needs to be set on the actual file that's being executed, not the local representation.

One quick and dirty way to stop at a particular line is to add in a `debugger` statement.

```js
debugger;
```

One reason why this is really helpful in this context is because it guarantees we've opened and stopped at the correct file.  There's an unresolved feature request to [allow to follow symlink / open original from explorer #57873](https://github.com/Microsoft/vscode/issues/57873)

![debugger with symlink](/assets/posts/debug-node-cli/debugger-sym-link.png)

Notice that the breakpoints set on the local file have not loaded and will say "unbound breakpoint" when you hover over them.


Published the package on npm [@kylemit/cli-ls](https://www.npmjs.com/package/@kylemit/cli-ls)
