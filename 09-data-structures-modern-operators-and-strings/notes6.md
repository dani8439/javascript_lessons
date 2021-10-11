# Looping Arrays: The for-of Loop

A new way of looping over arrays that was introduced in ES6

New way works similar to the old way. Still have a variable, but instead of setting up a loop with conditions, `(let i = 0; i < array.length; i++)` can just write for `(const item of array) console.log(item)`

Called `for of`, because `for` and then item `of` what we're looping over. Will automatically loop over the entire array, and each iteration will give us access to current array element. Can call the item whatever we want (thing, piece, etc). The item variable is always the current element in each iteration.

Like with `if/else` don't need to create a code block when have one statement to execute.

Simple, but very nice level of extraction with the for loop. Don't have to worry about counters or conditions. Can still use the `continue` and `break` keywords.

What if wanted current index and not just current element. In the `for/of` loop, it's a bit of a pain. Really just meant to give the current element. Can get both, but have to do a specific way.

```
for (const item of menu.entries()) {
  console.log(item);
}
```

have to call the `.entries()` method on the item. To get the index and the array element itself.

`menu.entries()` will get Arary Iterator.
`console.log([...menu.entries()])` Will show that it's basically an array, and each position contains a new array which contains the element and index number int he original array. Also why we get the weird output. of `(2) [0, "Focaccia"]`

```
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
```

Above is the old school way. if `item` is now an array, can destructure it. Don't have to manually take element number and element value. Can destructure the item array within the loop. Have to use the destructuring assignment and variables we want. Can become:

```
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
  // Outputs 1: Focaccia, 2: Bruschetta etc etc
}
```

And the output is just the same. For/of loop makes it a lot easier to loop over arrays.
