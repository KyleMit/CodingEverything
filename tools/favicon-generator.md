# Generate Favicon Files

This tool is the CLI version of [Real Favicon Generator](https://realfavicongenerator.net/) ([source code on github](https://github.com/RealFaviconGenerator/cli-real-favicon))

The script runs using [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b), but you can also install it to your machine using [this npm package](https://www.npmjs.com/package/cli-real-favicon):

```bash
npm install -g cli-real-favicon
```

The CLI signature and parameters are setup in in the [scripts](https://docs.npmjs.com/misc/scripts) portion of the package.json, so just run the following

```bash
npm run favicon
```

Which will execute the following command

```bash
npx real-favicon generate "./tools/favicon-generator.json" "./tools/faviconData.json" "./assets/images/icons/fav"
```

After the generation is complete, move the following files to the src root:

* \favicon.ico
* \manifest.json
