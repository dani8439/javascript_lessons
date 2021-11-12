# The new at method

```
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
```

Can replace the old way of bracket notation to array at position whatever we want with more modern at method.

What's the big deal? One particularlity of the `at()` method that makes it quite useful to use instead of the brackets notation.

Say wanted to get the last element of the array, say we don't know the length of the array, we would write:

```
console.log(arr[arr.length - 1]);
OR
console.log(arr.slice(-1)[0]);
```

the new `.at()` method makes this process even easier:

```
console.log(arr.at(-1))
```

Pass in the negative index like with `.slice()` to get the last element, the last two, etc, etc. Usually interested in the last element.

Should you use old methods or the new one? It depends. If you want to get the last element of the array, or start counting from the end of the array, should start using the `.at()` method. Or if you want to do method chaining, the `.at()` method is perfect for that.

On the other hand, if you just want to quickly get a value from the array, like the first element, using the brackets notation is fine.

The `.at()` method also works on strings.

```
console.log('jonas'.at(0)); // j
console.log('jonas'.at(-1)); // s
```
