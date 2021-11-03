# The magic of chaining methods.

Up until now, we've been using `map`, `filter`, and `reduce` separately. But we can use them all together.

Taking the movements array, we can filter over it to take only the positive values. Will result in a new array. Which we can then map over, to convert it to USD. Can then take it even further, and call reduce. Or more filters, or more maps.

```
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
  console.log(totalDepositsUSD);
  // returns 5522.000000000001
```

Three data transformations all in one go.

Can keep chaining so long as things return a new array, `filter`, and `map` do. `reduce` however does not. So can't chain after that. Can only chain the first one so long as first one returns an array. Imagine it as a pipeline that processes data, data goes through all these steps. In the end our input data comes out processed on the other side of the pipeline.

When we chain, can be a little hard to debug if something comes back that we don't expect. So it's a good idea to check back results after each step. Can do that by using the array parameter that's available when we call each callback function.

One of the great use cases of having access to this current array. As we can see, the current array has to be the result of the previous operation. Not the initial movements array. `map` wasn't called on that, was called on the result of `filter`

```
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); // 5522.000000000001
```

### Closing comments

1. Should not overuse chaining. Should try to optimize it, chaining tons of methods one after the other can cause performance issues when you have huge arrays. Should try and compress into as little methods as possible. When chaining methods, keep looking for opportunities to maximize code performance.
2. Bad practice to chain methods in JS that mutate the underlying array. (example is the `.splice()` or `reverse()` method. In a large scale application, usually always good practice to avoid mutating arrays.)
