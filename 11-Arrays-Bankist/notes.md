# Simple Array Methods

## Why do Arrays have methods?

Methods are simply functions that we can call on objects. They are functions attached to objects. If we have array methods, means that arrays themselves are objects. These array methods are simply functions that are attached to all arrays that we create in JavaScript.

Will learn later why arrays have access to these methods when we learn about Prototypal Inheritance. Now understand that arrays are objects and get access to special built in methods that we can see as tools to arrays.

### `.slice()` method

Very similar to `.slice` method on strings. With the `.slice` method, can extract any part of a string, but without changing the original array. Can take a slice of the array.

first parameter is the begin parameter where we'll begin extracting.

slice method will return a new array. Returns a copy of the array but only with the extracted parts.

```
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));

// Returns
(3) ['c', 'd', 'e']
```

Can also define the end parameter.

```
console.log(arr.slice(2, 4));

// Returns
(2) ['c', 'd']
```

Just like in strings, the end parameter is not included in the output.

Just like in strings, can define a negative begin parameter, and then it will start to copy from the end of the array.

-1 will take the last element of the array, -2 the last 2., and so on.

```
console.log(arr.slice(-2));
console.log(arr.slice(-1));
// returns
(2) ['d', 'e']
['e']
```

Can also use a negative index as the end parameter.

```
console.log(arr.slice(1, -2));
(2) ['b', 'c']
```

Can also use the slice method to create a shallow copy of any array. Simply call it without any arguments at all. Did the same in another section, using the spread operator `console.log([...arr])`. Question is, should you use the spread operator or the slice method to create a shallow copy of an array? That's entirely up to you. Just a matter of personal preference. Only time you really need to use the slice method, is when you want to chain multiple methods together, calling one after the other.

## `splice()` Method

Works in almost the same exact way as the `.slice()` method, except the fundamental difference is that it does mutate/change the original array.

```
console.log(arr.splice(2));
console.log(arr)

// Returns
(3) ['c', 'd', 'e']
(2) ['a', 'b']
```

Original array loses the part that's extracted. In practice, most of the time the values that the splice method returns doesn't even interest us. All we're usually interested in is to delete one or more elements from splice. Most common use case is to remove the final element from an array.

```
arr.splice(-1);
// Returns
['a', 'b', 'c', 'd']
```

**MDN documentation** is great to learn more about any method.

Can pass in negative value like with `.slice()`

## `.reverse()`

`.reverse()`method does actually mutate the original array.

```
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Returns
['f', 'g', 'h', 'i', 'j']
['f', 'g', 'h', 'i', 'j']
```

Very important characteristic which methods mutates and which don't.

## `.concat()` method

Used to concat two arrays together. Have to specify the second array. Doesn't mutate the original array.

First arg is array on which the method is called, second is the array passing into the method

Also did the same with the spread operator. Gives exact same results, also doesn't mutate any of the involved arrays.

```
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Returns
// (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
```

Again it's a matter of personal preference to use the spread operator or the concat method.

## .join()

Same as with strings. Result is a string with the separator we've specified.

```
console.log(letters.join(' - '));

// Returns
a - b - c - d - e - f - g - h - i - j
```

Already know `.push()`, `.shift()`, `.unshift()`, `.pop()`, `.indexOf()`, `.includes()` from the index section. Can always go to the docs on MDN. No developer knows all of this by heart.
