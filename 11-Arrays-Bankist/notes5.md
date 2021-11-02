# Data Transformations: Map, filter, reduce

Three array methods we use all the time to perform data transformations. Use them to create new arrays based on transforming data from other arrays. They have become very popular. Will see them everywhere.

`Map`
Another method we can use to loop over arrays. Similar to `.forEach()` but with the difference that it creates a brand new array based on the original array.

Takes the array, loops over it, applies a callback function to the current array element.

- `map` returns a **new array** containing the results of applying an operation on all original array elements.

`[3, 1, 4, 3, 2]` `map current * 2` -> `[6, 2, 8, 6, 4]`

`Filter`

Used to filter for elements in the original array that satisfy a certain condition.

- `filter` returns a **new array** containing the array elements that passed a specified **test condition**

`[3, 1, 4, 3, 2]` `filter current > 2` -> `[3, 4, 3]`

`Reduce`

Use to boil down all original elements of the array into one single value.

- `reduce` boils ("reduces") all array elements down to one single value (e.g. adding all elements together)

`[3, 1, 4, 3, 2]` `reduce acc + current` -> `13`

Reduce is known as the snowball effect, like a snowball keeps getting bigger the more it rolls down a hill. This whole process has reduced the original array to one single value. Can be many other operations. That's the value that gets returned at the end, no new array, just a value.
