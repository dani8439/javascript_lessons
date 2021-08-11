# Arrays

A data structure. An array is like a big container into which we can throw variables, and then later reference them.

Get data from somewhere, store and process it, and then give some data back. Data has to go somewhere, has to be stored someplace.

Two most important data structures in JS are arrays and objects.

Create an array between brackets `[]`, have values inside, separated by commas.

Arrays can hold as many values as we want, and values of any type

Two ways to create arrays.

### Literal Syntax

putting an array between brackets `[]`
`const friends = ['Michael', 'Steven', 'Peter'];

### Array() Function

Calling on the Array Function
`const years = new Array(1991, 1984, 2008, 2020)`

## How to get elements out of an array?

Use the square brackets syntax again. Arrays are 0 based, first element starts at 0, then next is 1, etc, etc. If we want element at first position would write `console.log(array[0])`

Can get the number of elements in the array by calling `arrayName.length`. It's not zero based.

To get the last element in an array, do `arrayName[arrayName.length -1]`

Can mutate the array, `arrayName[index] = 'New Element'`

Variables declared with `const` cannot be changed, but can still change elements of array. Only primitive values are immutable, arrays aren't primitive. Works this way because of how JS stores things in memory. Can mutate arrays even though declared with const. But cannot replace the entire array.

An array can hold different value types all at once. JavaScript expects an expression at each position.

Can place function calls into an array too. JS will start by running the function calls, and then placing it into an array.
