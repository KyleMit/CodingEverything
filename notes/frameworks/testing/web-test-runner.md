# Web Test Runner


## Links

* [Docs](https://modern-web.dev/docs/test-runner/overview/)
* [Guide](https://modern-web.dev/guides/test-runner/getting-started/)
* [npm](https://www.npmjs.com/package/@web/test-runner)
* [Github](https://github.com/modernweb-dev/web/tree/master/packages/test-runner)


## Getting Started

```bash
npm i --save-dev @web/test-runner
```

## Commands


```bash
#Do a single test run:
wtr test/**/*.test.js --node-resolve

#Run in watch mode, reloading on file changes:
wtr test/**/*.test.js --node-resolve --watch

# Run with code coverage profiling (this is slower):
wtr test/**/*.test.js --node-resolve --coverage

# Transform JS to a compatible syntax based on user agent:
wtr test/**/*.test.js --node-resolve --esbuild-target auto
```
