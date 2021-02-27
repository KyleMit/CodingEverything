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

