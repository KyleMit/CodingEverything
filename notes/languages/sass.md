# Sass

<!-- markdownlint-disable MD024 -->

**Sass** - [Syntactically Awesome Style Sheets](https://sass-lang.com/)

## Getting Started

### Install

```bash
npm install -g sass
```

### Run CLI

```bash
sass --watch input.scss output.css
```

## SCSS vs. SASS

* SCSS - uses curly braces and semi-colons
* Sass - doesn't

## Syntax

### Variables

#### Input

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

#### Output

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

### Nesting

#### Input

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }
```

#### Output

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
```

### Partial Files

* Partial files are **prefixed** with a leading underscore `_`
* e.g. `_partial.scss`
* This lets the processor know it should not be generated into it's own css file
* Consumed with the `@use` rule


### Mixin

* declare with `@mixin` rule
* consume with `@include` rule

#### Input

```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box {
  @include transform(rotate(30deg));
}
```

#### Output

```css
.box {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
```

### Extend / Inheritance

* declare with `%` prefix
* consume wih `@extend` rule
* the current class will be added to the extended selectors

#### Input

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}
```

#### Output

```css
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

```

## At Rules
