# NX.JS

[NX](https://nx.dev/)

> Extensible Dev Tools for Monorepos

![nx mono structure](/assets/notes/node/nx-mono-structure.png)

```bash
npx create-nx-workspace your-name
```

```bash
/apps # specific apps
/libs # common ui elements - shared across multiple components
```

* [Nx CLI](https://nx.dev/latest/angular/cli/overview#installing-the-cli)

    ```bash
    npm install -g nx
    ```

## Plugins

* [angular](https://nx.dev/latest/react/angular/overview)
* [react](https://nx.dev/latest/react/react/overview)
* [jest](https://nx.dev/latest/react/jest/overview)
* [cypress](https://nx.dev/latest/react/cypress/overview)
* [storybook](https://nx.dev/latest/react/storybook/overview)
* [linter](https://nx.dev/latest/react/linter/eslint)
* [node](https://nx.dev/latest/react/node/overview)
* [express](https://nx.dev/latest/react/express/overview)
* [nest](https://nx.dev/latest/react/nest/overview)
* [next](https://nx.dev/latest/react/next/overview)
* [gatsby](https://nx.dev/latest/react/gatsby/overview)
* [nx-plugin](https://nx.dev/latest/react/nx-plugin/overview)

## Gatsby

[gatsby: Gatsby Plugin | Nx react documentation](https://nx.dev/latest/react/gatsby/overview)


```bash
npm install -D @nrwl/gatsby
```

```bash
nx generate @nrwl/gatsby:application <name>
```


## Questions

* [Debug NX Apps](https://github.com/nrwl/nx/issues/2690)

    ```json
    "serve": {
        "builder": "@nrwl/node:execute",
        "options": {
            "buildTarget": "api:build",
            "inspect": true,
            "port": 7777
        }
    },
    ```

    Command Palette - Attach to Node Process

* Community SAM Plugin

* [Serverless (via AWS SAM) support?](https://github.com/nrwl/nx/issues/1523)
* [studds/nx-aws: AWS plugins for nx](https://github.com/studds/nx-aws)
* [@nx-aws/sam - npm](https://www.npmjs.com/package/@nx-aws/sam)

