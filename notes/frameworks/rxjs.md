# RXJS

[RxJS](https://rxjs-dev.firebaseapp.com/)



## Links

* [Learn RxJS](https://www.learnrxjs.io/)

## Docs

* [RxJS - Introduction](https://rxjs-dev.firebaseapp.com/guide/overview)

### Overview

#### Observable

> An observable represents a stream, or source of data that can arrive over time.
> You can create an observable from nearly anything, but the most common use case in RxJS is from events

```js
// import the fromEvent operator
import { fromEvent } from 'rxjs';

// grab button reference
const button = document.getElementById('myButton');

// create an observable of button clicks
const myObservable = fromEvent(button, 'click');
```

#### Subscription

> Subscriptions are what set everything in motion.
> You can think of this like a faucet, you have a stream of water ready to be tapped (observable)


```js
// for now, let's just log the event on each click
const subscription = myObservable.subscribe(event => console.log(event));
```

> The subscribe method also accepts an object map to handle the case of error or completion

```js
// instead of a function, we will pass an object with next, error, and complete methods
const subscription = myObservable.subscribe({
  // on successful emissions
  next: event => console.log(event),
  // on errors
  error: error => console.log(error),
  // called once on completion
  complete: () => console.log('complete!')
});
```

* **Unicasting** - one on one, one-sided conversation
* **Multicasting** - one observable, many observers
* **Push-based model** - Observable emits data to observers - doesn't know or care what it does with that info

#### Operators

> Operators offer a way to manipulate values from a source, returning an observable of the transformed values.
> Often similar to JavaScript's `Array` methods


```js
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
const dataSource = of(1, 2, 3, 4, 5);

// subscribe to our source observable
const subscription = dataSource
  .pipe(
    // add 1 to each emitted value
    map(value => value + 1)
  )
  // log: 2, 3, 4, 5, 6
  .subscribe(value => console.log(value));
```

#### Pipe

> Operators exist within a **Pipe**
> The pipe function is the assembly line from your observable data source through your operators

#### Operator Categories

* Creation
* Combination
* Error handling
* Filtering
* Multicasting
* Transformation

### Operators

* [Combination](https://www.learnrxjs.io/learn-rxjs/operators/combination)
  * [concat](https://www.learnrxjs.io/learn-rxjs/operators/combination/concat) ⭐
  * [combineLatest](https://www.learnrxjs.io/learn-rxjs/operators/combination/combinelatest) ⭐
  * [merge](https://www.learnrxjs.io/learn-rxjs/operators/combination/merge) ⭐
  * [startWith](https://www.learnrxjs.io/learn-rxjs/operators/combination/startwith) ⭐
  * [withLatestFrom](https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom) ⭐
  * [combineAll](https://www.learnrxjs.io/learn-rxjs/operators/combination/combineall)
  * [concatAll](https://www.learnrxjs.io/learn-rxjs/operators/combination/concatall)
  * [endWith](https://www.learnrxjs.io/learn-rxjs/operators/combination/endwith)
  * [forkJoin](https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin)
  * [mergeAll](https://www.learnrxjs.io/learn-rxjs/operators/combination/mergeall)
  * [pairwise](https://www.learnrxjs.io/learn-rxjs/operators/combination/pairwise)
  * [race](https://www.learnrxjs.io/learn-rxjs/operators/combination/race)
  * [zip](https://www.learnrxjs.io/learn-rxjs/operators/combination/zip)
* [Conditional](https://www.learnrxjs.io/learn-rxjs/operators/conditional)
  * [defaultIfEmpty](https://www.learnrxjs.io/learn-rxjs/operators/conditional/defaultifempty)
  * [every](https://www.learnrxjs.io/learn-rxjs/operators/conditional/every)
  * [iif](https://www.learnrxjs.io/learn-rxjs/operators/conditional/iif)
  * [sequenceequal](https://www.learnrxjs.io/learn-rxjs/operators/conditional/sequenceequal)
* [Creation](https://www.learnrxjs.io/learn-rxjs/operators/creation)
  * [from](https://www.learnrxjs.io/learn-rxjs/operators/creation/from) ⭐
  * [fromEvent](https://www.learnrxjs.io/learn-rxjs/operators/creation/fromevent) ⭐
  * [of](https://www.learnrxjs.io/learn-rxjs/operators/creation/of) ⭐
  * [ajax](https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax) ⭐
  * [create](https://www.learnrxjs.io/learn-rxjs/operators/creation/create)
  * [defer](https://www.learnrxjs.io/learn-rxjs/operators/creation/defer)
  * [empty](https://www.learnrxjs.io/learn-rxjs/operators/creation/empty)
  * [generate](https://www.learnrxjs.io/learn-rxjs/operators/creation/generate)
  * [interval](https://www.learnrxjs.io/learn-rxjs/operators/creation/interval)
  * [range](https://www.learnrxjs.io/learn-rxjs/operators/creation/range)
  * [throw](https://www.learnrxjs.io/learn-rxjs/operators/creation/throw)
  * [timer](https://www.learnrxjs.io/learn-rxjs/operators/creation/timer)
* [Error Handling](https://www.learnrxjs.io/learn-rxjs/operators/error_handling)
  * [catch / catchError](https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch) ⭐
  * [retry](https://www.learnrxjs.io/learn-rxjs/operators/error_handling/retry)
  * [retryWhen](https://www.learnrxjs.io/learn-rxjs/operators/error_handling/retrywhen)
* [Filtering](https://www.learnrxjs.io/learn-rxjs/operators/filtering)
  * [filter](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter) ⭐
  * [debounceTime](https://www.learnrxjs.io/learn-rxjs/operators/filtering/debouncetime) ⭐
  * [distinctUntilChanged](https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged) ⭐
  * [take](https://www.learnrxjs.io/learn-rxjs/operators/filtering/take) ⭐
  * [takeUntil](https://www.learnrxjs.io/learn-rxjs/operators/filtering/takeuntil) ⭐
  * [audit](https://www.learnrxjs.io/learn-rxjs/operators/filtering/audit)
  * [auditTime](https://www.learnrxjs.io/learn-rxjs/operators/filtering/audittime)
  * [debounce](https://www.learnrxjs.io/learn-rxjs/operators/filtering/debounce)
  * [distinct](https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinct)
  * [distinctUntilKeyChanged](https://github.com/btroncone/learn-rxjs/tree/a395b6202c4b985e760736a3dc96103b5495d427/operators/distinctuntilkeychanged.md)
  * [find](https://www.learnrxjs.io/learn-rxjs/operators/filtering/find)
  * [first](https://www.learnrxjs.io/learn-rxjs/operators/filtering/first)
  * [ignoreElements](https://www.learnrxjs.io/learn-rxjs/operators/filtering/ignoreelements)
  * [last](https://www.learnrxjs.io/learn-rxjs/operators/filtering/last)
  * [sample](https://www.learnrxjs.io/learn-rxjs/operators/filtering/sample)
  * [single](https://www.learnrxjs.io/learn-rxjs/operators/filtering/single)
  * [skip](https://www.learnrxjs.io/learn-rxjs/operators/filtering/skip)
  * [skipUntil](https://www.learnrxjs.io/learn-rxjs/operators/filtering/skipuntil)
  * [skipWhile](https://www.learnrxjs.io/learn-rxjs/operators/filtering/skipwhile)
  * [takeLast](https://www.learnrxjs.io/learn-rxjs/operators/filtering/takelast)
  * [takeWhile](https://www.learnrxjs.io/learn-rxjs/operators/filtering/takewhile)
  * [throttle](https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttle)
  * [throttleTime](https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttletime)
* [Multicasting](https://www.learnrxjs.io/learn-rxjs/operators/multicasting)
  * [shareReplay](https://www.learnrxjs.io/learn-rxjs/operators/multicasting/sharereplay) ⭐
  * [share](https://www.learnrxjs.io/learn-rxjs/operators/multicasting/share) ⭐
  * [multicast](https://www.learnrxjs.io/learn-rxjs/operators/multicasting/multicast)
  * [publish](https://www.learnrxjs.io/learn-rxjs/operators/multicasting/publish)
* [Transformation](https://www.learnrxjs.io/learn-rxjs/operators/transformation)
  * [map](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map) ⭐
  * [concatMap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmap) ⭐
  * [bufferTime](https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffertime) ⭐
  * [mergeMap / flatMap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap) ⭐
  * [scan](https://www.learnrxjs.io/learn-rxjs/operators/transformation/scan) ⭐
  * [switchMap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap) ⭐
  * [buffer](https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffer)
  * [bufferCount](https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffercount)
  * [bufferToggle](https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffertoggle)
  * [bufferWhen](https://www.learnrxjs.io/learn-rxjs/operators/transformation/bufferwhen)
  * [concatMapTo](https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmapto)
  * [expand](https://www.learnrxjs.io/learn-rxjs/operators/transformation/expand)
  * [exhaustMap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/exhaustmap)
  * [groupBy](https://www.learnrxjs.io/learn-rxjs/operators/transformation/groupby)
  * [mapTo](https://www.learnrxjs.io/learn-rxjs/operators/transformation/mapto)
  * [mergeScan](https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergescan)
  * [partition](https://www.learnrxjs.io/learn-rxjs/operators/transformation/partition)
  * [pluck](https://www.learnrxjs.io/learn-rxjs/operators/transformation/pluck)
  * [reduce](https://www.learnrxjs.io/learn-rxjs/operators/transformation/reduce)
  * [switchMapTo](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmapto)
  * [toArray](https://www.learnrxjs.io/learn-rxjs/operators/transformation/toarray)
  * [window](https://www.learnrxjs.io/learn-rxjs/operators/transformation/window)
  * [windowCount](https://www.learnrxjs.io/learn-rxjs/operators/transformation/windowcount)
  * [windowTime](https://www.learnrxjs.io/learn-rxjs/operators/transformation/windowtime)
  * [windowToggle](https://www.learnrxjs.io/learn-rxjs/operators/transformation/windowtoggle)
  * [windowWhen](https://www.learnrxjs.io/learn-rxjs/operators/transformation/windowwhen)
* [Utility](https://www.learnrxjs.io/learn-rxjs/operators/utility)
  * [tap / do](https://www.learnrxjs.io/learn-rxjs/operators/utility/do) ⭐
  * [delay](https://www.learnrxjs.io/learn-rxjs/operators/utility/delay)
  * [delayWhen](https://www.learnrxjs.io/learn-rxjs/operators/utility/delaywhen)
  * [dematerialize](https://github.com/btroncone/learn-rxjs/tree/a395b6202c4b985e760736a3dc96103b5495d427/operators/utility/dematerialize.md)
  * [finalize / finally](https://www.learnrxjs.io/learn-rxjs/operators/utility/finalize)
  * [let](https://www.learnrxjs.io/learn-rxjs/operators/utility/let)
  * [repeat](https://www.learnrxjs.io/learn-rxjs/operators/utility/repeat)
  * [repeatWhen](https://github.com/btroncone/learn-rxjs/tree/a395b6202c4b985e760736a3dc96103b5495d427/operators/utility/repeatwhen.md)
  * [timeInterval](https://www.learnrxjs.io/learn-rxjs/operators/utility/timeinterval)
  * [timeout](https://www.learnrxjs.io/learn-rxjs/operators/utility/timeout)
  * [timeoutWith](https://www.learnrxjs.io/learn-rxjs/operators/utility/timeoutwith)
  * [toPromise](https://www.learnrxjs.io/learn-rxjs/operators/utility/topromise)


## Trainings

### RXJS Training

RxJS Training with [Jay Phelps](https://twitter.com/_jayphelps). Sept 28-29, 2020

[dmamaril/rxjs-workshop-ngconf-2019](https://github.com/dmamaril/rxjs-workshop-ngconf-2019)

* [Part 1](https://thisdot.wistia.com/medias/lyvkw0wzq5)
* [Part 2](https://thisdot.wistia.com/medias/ig6z4yt2jq)

* Observable - Stream of Values
* Stream - Between 0 to infinite number of values
* Push based stream - producer of value pushes values
* Convention - variable name ends in dollar sign `$` -> "variable holds reference to observable"
* TypeScript problems - just delete the `.tsconfig`
* Observable `.subscribe()` function
  * similar to `.addEventListener()` in JS
