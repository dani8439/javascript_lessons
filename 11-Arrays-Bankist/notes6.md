# The `map` method

Yet another way we can use to loop over arrays. Unlike `.forEach()` it'll give us a brand new array.

In each position will contain result of calling the callback function on each element.

Just like in `.forEach()`, we need to pass in a callback function first, and that receives the argument (the current element).

Can rewrite the original `movementsUSD` function to become an arrow function.

```
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSD = movements.map(mov => mov * eurToUsd);
```

Personal preference of using arrow functions vs functions. Main thing to keep in mind is that there is a return technically after the arrow.

`map` method has access to exact same 3 parameters like the `.forEach()` method.

Gets access to element, index, and whole array.

Completely acceptable to have more than one return statement in a function, as long as only one is executed at a time.

The `map` method calls the callback function for each element in the move array. That passes in the current element, the index, and the array.

Big difference between `.forEach()` and `map`. Before, we printed each line to the console, when looping with the array. `.forEach()` method creates side effects. With `map` all we did was return the strings from the callback, and then logged that in its entirety to the console. Did not create a side effect in each iteration. All we did was build a brand new array.
