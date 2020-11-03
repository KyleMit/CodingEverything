# NestJS

> A progressive Node.js framework


## Docs

[NestJS Documentation](https://docs.nestjs.com/)

## Getting Started

### Installation

```bash
npm i -g @nestjs/cli
```

### Commands

```bash
nest new project-name
```

## Alternatives

* Express
* Fastify


## Talks

* [Building an Issue Tracker API with NestJs - JavaScript Marathon - YouTube](https://www.youtube.com/watch?v=DgoH4_n59Qg)
* [Building a platform: NestJS from the ground up](https://www.youtube.com/watch?v=f0qzBkAQ3mk)

## Philosophy

* High Testable
* Loosely Coupled
* Easily Maintainable
* Naming and Architecture from Angular


## Controllers

* Describes:
  * routing paths
  * arguments
  * responses
  * everything else related to HTTP request
* Doesn't
  * Care about what happens inbetween the request / response

[Docs > Controllers > Asynchronicity](https://docs.nestjs.com/controllers#asynchronicity)

* **Promises**
  * Every async function has to return a Promise
  * This means that you can return a deferred value that Nest will be able to resolve by itself

  ```ts
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }
  ```

* **Observables**
  * Nest route handlers are even more powerful by being able to return RxJS observable streams.
  * Nest will automatically subscribe to the source underneath and take the last emitted value (once the stream is completed)

    ```ts
    @Get()
    findAll(): Observable<any[]> {
      return of([]);
    }
    ```

## Services

Have `@Injectable` decorator

Contains: Domain / Business Logic

* Access Layer - Controllers
* Logic Layer - Services

```ts
@Injectable()
export class CatsService
```

## Dependency Injection

* [NestJS > Injection scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
* [Dependency injection in Angular](https://angular.io/guide/dependency-injection)

```ts
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

### File Structure

```
/Component/
 - component.module.ts
 - component.providers.ts
 - component.service.spc.ts
 - component.service.ts
 - component.controller.ts
 - component.interface.ts
 - component.class.ts
```

## Articles

[Take your Node backend to the next level with NestJS](https://blog.logrocket.com/node-back-end-next-level-nestjs/) by Maciej Cieślar
