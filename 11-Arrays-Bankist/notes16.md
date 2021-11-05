# More ways of Creating and Filling Arrays

How to programmatically create and fill arrays.

So far created Arrays like this:

```
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array[(1, 2, 3, 4, 5, 6, 7)]());
```

In these cases, we already have our data. Could then manually create the arrays. But we can also generate arrays programatically, without having to define the items manually. There are a lot of situations where this is necessary.

Easiest way is to use the array constructor function.

```
const x = new Array(7);
console.log(x);
// (7) [empty × 7]
```

Creates an empty array with 7 spots.
This can lead to real errors. Can't use the `x` array for anything. Can't call on `map` to fill it up.

```
console.log(x.map(() => 5));
// (7) [empty × 7]
```

This method is only useful for one thing that we can call on it. That is the `fill` method. This will fill up the array. It mutates the underlying array.

```
x.fill(1);
console.log(x);
// (7) [1, 1, 1, 1, 1, 1, 1]
```

`fill` is a little bit similar to the `slice` method. We can also specify where we want it to start filling it, with a begin parameter as the second argument. It will fill it up to the end, unless we specify an end parameter like with `slice`. Just like in `slice`, final index will not be included.

```
x.fill(1, 3, 5);
console.log(x);
// (7) [empty × 3, 1, 1, empty × 2]
```

We can also use the `fill` method on other arrays. Doesn't have to be an empty array.

```
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.fill(23, 4, 6);
console.log(arr);
// (7) [1, 2, 3, 4, 23, 23, 7]
```

`fill` method can be very useful at times. What if we wanted to recreate the `arr` array programatically? Can use the `from` method.

Not using the `from` method on an array, using it on the array constructor. so it's `Array.from()` `Array` is a function, and on that function, we call that `from()` method.

First pass in an object with the length property, and the second arg is a mapping function. Exactly like the callback function that we pass into the `map` function.

```
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
// (7) [1, 1, 1, 1, 1, 1, 1]
```

Inside of the callback function, get access to the current element (as it is with all the other callback functions), and then the current index. Using the callback function like with the `map` method, calling it on an empty array. So doing say, `i + 1` (index plus one), will give us values from 1 to 7.

Remember `_` underscore throway value. Don't really need the `curr` value, what we need is the index. Can use an underscore when passed in rather than writing `curr`. As we're not really using the current parameter.

```
const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);
// (7) [1, 2, 3, 4, 5, 6, 7]

// Rewritten as:
const z = Array.from({ length: 7}, (_, i) => i + 1);
console.log(z)
// (7) [1, 2, 3, 4, 5, 6, 7]
```

All different kinds of use cases, can create an array with 100 random dice rolls.

`Array.from()` function was introduced into JS to create arrays from array like structures. Iterables (strings, maps, sets) are all iterables. Can be converted to real arrays using `Array.from` hence the name of the function. We can create arrays from other things.

Another great example of an array like structor, is using `querySelectorAll()` returns a node list. Something like an array with all the selected elements, but not a real array, because doesn't have array methods like `map` or `reduce`. If we wanted to use them on an array like that on a node list, would have to convert it first.

Say, don't have the movements from the Bankist app stored in an array. Say we only have the number values in the UI. Say we want to calculate their sum. Need to get them first from the UI, then do the calculation based on that.

Can attach event listeners to every object. Doesn't have to be a button. Can attach to the movements in the bankist app. And then call map on it because we can turn the elements into an array.

```
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(movementsUI.map(el => el.textContent.replace('€', '')));
});
```

If we've turned it into a proper array, can then move the callback in as the second argument with the `Array.from()` method, and can remove it from the `console.log()`

```
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
```

To recap, we used `Array.from()` to create an array from the results of the `querySelectorAll()` which is a node list, not an array, but an array like structure. Then converted that array like structure to an actual array using `Array.from()`. Then as a second step, included a mapping function, which transforms that initial array, to precisely the array we wanted. Converted the raw element and textContent, replacing the euro sign, to an array of our liking.

There is another way of converting it all to an array. Can spread the results into a new array.

```
const movementsUI2 = [...document.querySelectorAll('.movements__value')];
```

Also creates an array, but then we would have to do the mapping separately, so the other way is a little cleaner.
