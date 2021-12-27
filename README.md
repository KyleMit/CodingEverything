---
layout: default.njk
title: Read Me
tags: ['page']
toc: true
permalink: 'readme.md/index.html'
---

# [CodingEverything](http://www.codingeverything.com/)

A curious endeavor to catalogue and document the wealth of programming knowledge available on the internet and a humble attempt to contribute to it.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c235c25-e00e-4445-b3c1-b215b14df0e8/deploy-status)](https://app.netlify.com/sites/codingeverything/deploys)


## Powered By

* [**Eleventy**](https://www.11ty.io) - static site generation
* [**Netlify**](https://www.netlify.com/) - static site hosting
* [markdown-it](https://github.com/markdown-it/markdown-it) - markdown processor


## Project Setup

1. Install [Node.js & NPM](https://nodejs.org/en/download/)
2. Run `npm install` in the project directory to install local dependencies
3. Install eleventy globally

    ```bash
    npm i @11ty/eleventy -g
    npm i rimraf -g
    npm i cross-env -g
    ```

4. Run `npm run serve` to run a local dev environment
5. Access dev copy of the site at [localhost:8080](http://localhost:8080)

## NPM Scripts

```bash
npm run build       # builds site for production
npm run serve       # builds site + serves `_site` directory
npm run clean       # deletes `_site` directory
npm run clear-cache # deletes twitter cache
npm run favicon     # generates favicon assets from svg
```

## Tag Guidelines

Tags should be

* all lowercase
* hyphenated instead of using spaces

## Style Guide

### Use Markdown Lint

```html
<!-- markdownlint-disable MD026 -->
## We're back baby!
<!-- markdownlint-restore -->
```

### Use CSpell

```html

<!-- spellchecker: disable -->
**S**uccess **I**nstinct **G**rowth **N**eeds
<!-- spellchecker: enable -->
```

### Notes Sections

* Title
* Docs
* Links
* Getting Started
* --- domain ---
* Articles
* Questions


## Todo

* [ ] fix linting errors
* [ ] add metadata to each post tags/summary (hero image)
* [ ] fix tags.json
* [ ] review each post for content / custom css
* [ ] download images from imgur
