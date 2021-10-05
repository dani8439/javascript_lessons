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
