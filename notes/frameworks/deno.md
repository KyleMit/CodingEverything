# Deno

<https://deno.com/>

## Installation

```bash
choco install deno
```

```bash
irm https://deno.land/install.ps1 | iex
Invoke-RestMethod https://deno.land/install.ps1 | Invoke-Expression
```

## Release Notes

* [Announcing Deno 2](https://deno.com/blog/v2.0)

## CLI

```bash
den init my_project
deno run --watch main.ts
deno test
```

## Configuration

`deno.json`

```json
{
  "tasks": {
    "dev": "deno run --watch src/main.ts"
  }
}
```

## Docs

* [Security and permissions](https://docs.deno.com/runtime/fundamentals/security/#environment-access)

## DotEnv

* [dotenv@v3.2.2 | Deno](https://deno.land/x/dotenv@v3.2.2/mod.ts)
  * [/dotenv/mod.ts | std@0.224.0 | Deno](https://deno.land/std@0.224.0/dotenv/mod.ts)
    * [@std - JSR](https://jsr.io/@std)

## Standard Library

* [@std - JSR](https://jsr.io/@std)
* [The Deno Standard Library is now available on JSR](https://deno.com/blog/std-on-jsr)

## JSR

[JSR: the JavaScript Registry](https://jsr.io/)

> The open-source package registry for modern JavaScript and TypeScript
