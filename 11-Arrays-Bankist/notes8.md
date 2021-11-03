# The `.reduce` method

Use the `.reduce()` method to boil down all elements in an array to one single value.

Also gets a callback function, but it's a bit different from `map` or `.forEach()`. In the other ones it's always the current element, index, and then the entire array. In `.reduce()` first parameter is the accumulator, it's essentially like a snowball that keeps accumulating the value that we ultimately want to return. In case of adding all elements together, that would be the sum.

Reduce loops over the array and calls the callback in each iteration.

Accumulator plus current value (in code example). Works because acc is current sum of all previous values, and keep adding to it. Finally, have to `return` the value from the callback. That's so it can be used in next iteration of the loop.

`.reduce()` also has a second parameter, the initial value of the accumulator. The value we specify at end is the value of the accumulator at end of first loop iteration. Say if we want it to be zero, written as:

```
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);
```

```
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

Iteration 0: 0
Iteration 1: 200
Iteration 2: 650
Iteration 3: 250
Iteration 4: 3250
Iteration 5: 2600
Iteration 6: 2470
Iteration 7: 2540
```

Reduce doesn't have to be a sum. Could be a multiplication, or a string, or an object.
