# Spread Operator

Used to expand an array into all its elements. Basically unpacking all of the array elements at one.

Spread operators takes all values out of old, then writes them individually as if we'd written them manually.

EX:

```
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
```

It's like taking all the elements out of the array, and writing them manually.

Can use the spread operator when otherwise we would write multiple values separated by a comma. First situation where it's very useful.

Second situation is when we pass multiple values into functions.

Spread operator builds a completely new array, doesn't mutate the original one. Is not destructive.

Spread operator is a bit similar to destructuring, helps us gets elements out of the array. Big diff is that spread operator takes all the elements from the array, and also doesn't create new variables. Can only use it in places where we would write values otherwise separated by commas.

Spread operators works on all so called iterables. Arrays, strings, maps, sets, but not objects. Most of the built in data structures of JS. Just not objects.

Since ES2018 - Spread operator works on objects, even if they aren't iterable.
