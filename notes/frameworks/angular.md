# Angular


## Docs

[Angular Docs](https://angular.io/docs)
[Docs > CLI](https://angular.io/cli/)

## Concepts

* [Introduction to Angular concepts](https://angular.io/guide/architecture)
* [Angular - Glossary](https://angular.io/guide/glossary#router)
  * [Directives](https://angular.io/guide/glossary#directive)
  * [Components](https://angular.io/guide/glossary#component)
  * [Data Binding](https://angular.io/guide/glossary#data-binding)
  * [Pipe](https://angular.io/guide/glossary#pipe)
  * [Service](https://angular.io/guide/glossary#service)
  * [Router](https://angular.io/guide/glossary#router)

## Component Lifecycle

[Hooking into the component lifecycle](https://angular.io/guide/lifecycle-hooks)

## Getting Started

[Setting up the local environment and workspace](https://angular.io/guide/setup-local)

```bash
npm install -g @angular/cli
```

### New Project

```bash
ng create <proj-name>
cd proj-name
ng serve --open
```

[Open URL on Launch](https://stackoverflow.com/a/42943826/1366033)

```bash
ng serve -o
```

## Debug Tools

[johnpapa/**vscode-angular-essentials**](https://github.com/johnpapa/vscode-angular-essentials)

## State Management

* NgRX
* Subject Wrapping Services

## Angular Style Guide

[Angular Style Guide](https://angular.io/guide/styleguide)

## Tour Of Heroes App and Tutorial

[Tour of Heroes app and tutorial](https://angular.io/tutorial)

* [Tour of Heroes: Part 6 - StackBlitz](https://stackblitz.com/angular/pyrgjeodnnl)

![heroes wireframe](/assets/notes/angular/hero-wireframe.png)

### File Structure

`/src/styles.scss` - global styles
`/src/index.html` - `<app-root>`
`/src/app/<component>/` - component folders

### Basic Component

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Sheroes';
}
```

* Import `Component` class from angular core
* Add `@Component` [class decorator](https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators) to custom component
* `Component` class takes a `selector`, `templateUrl`, and array of `StyleUrls`
* Custom component exposes data members


### Generate Components

```bash
ng generate component heroes
```

#### Generated Spec

```ts
// import fixture and test bed from angular test
import { ComponentFixture, TestBed } from '@angular/core/testing';
// import component we created
import { HeroesComponent } from './heroes.component';

// describe test deck
describe('HeroesComponent', () => {
  // declare component as type HeroesComponent
  let component: HeroesComponent;
  // declare fixture as type Fixture of Heroes
  let fixture: ComponentFixture<HeroesComponent>;

  // setup before each test
  beforeEach(async () => {
    // setup test bed
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Lifecycle Hooks

```ts
ngOnInit() { this.logIt(`OnInit`); }
```
