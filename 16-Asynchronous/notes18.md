# Other Promise Combinators: `race`, `allSettled` and `any`

`Promise.race` Just like all other combinators, receives an array of promises, and also returns a promise.

The promise returned by it, is settled as soon as one of the input promises settles (means value is available. Doesn't matter if it's been rejected or fulfilled.) In `Promise.race()` first promise that settles wins the race.

```
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();
```

`Promise.race()` only returns one result and not an array of all three. A promise that gets rejected can also win the race. `Promise.race()` shortcircuits when one of the promises gets settled. No matter if fulfilled or rejected. In the real world, `Promise.race()` is very useful to prevent against neverending promises, or long promises.

Can create a special timeout promise that rejects after a certain amount of time has passed, is useful for when someone has slow internet connection.

```
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec);
  });
};
```

Can have the AJAX call race against this timeout:

```
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));
```

`Promise.race()` and `Promise.all()` are by far the two most important Promise Combinators.

`Promise.allSettled()` pretty new, from ES2020. Takes in an array of Promises, and simply returns an array of all the settled promises (no matter if they are rejected are not)

`Promise.all()` will short circuit when one is rejected. Whereas `Promise.allSettled()` never short circuits.

```
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// (3) [{…}, {…}, {…}]
```

VS

```
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// ERROR
```

Only get error with `Promise.all()` because it short circuits if there's one rejected promise.

`Promise.any()` - ES2021. Much more modern.

As always, it takes in an array of multiple promises, and it will return the first fulfilled promise, and reject the rest. It's very similar to `Promise.any()` and `Promise.race()` with the difference that rejected promises are ignored. The result with `Promise.any()` is that the result is going to be a fulfilled promise, unless all of them reject.

```
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
```
