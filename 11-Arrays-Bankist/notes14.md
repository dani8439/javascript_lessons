# `flat` and `flatMap`

Say we have an array with arrays in it (a nested array)

What if we wanted to put it all into one big array?

`flat` and `flatMap` are pretty recent.

```
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// [1, 2, 3, 4, 5, 6, 7, 8]
```

`flat` is very simple and straightforward, no callback function. Just pass in the array and that's it. Very simple.

Say we have an array that's even deeper nested. `flat` method only goes one level deep when flattening an array. Can change that by passing in a depth argument.

```
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // (6) [Array(2), 3, 4, Array(2), 7, 8]
```

the default argument passed in is 1, but we can change that to say `arrDeep.flat(2)` to truly flatten the array. And get the same result as before.

```
console.log(arrDeep.flat(2)); // (8) [1, 2, 3, 4, 5, 6, 7, 8]
```

```
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements); // (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); // 17840
```

Can be rewritten using chaining as:

```
const overalBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
// 17840
```

Returns the same results.

Using a map first then flattening the result is a pretty common operation. First we `map`, then we `flat` that result. To solve this, there is another method, `flatMap` which does both at the same time. It combines a `map` and a `flat` method into one, which is better for performance.

`flatMap` only goes one level deep, and we cannot change it.

```
const overalBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance3); // 17840
```
