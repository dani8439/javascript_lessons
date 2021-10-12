# Sets

In the past, JS has had very little built in data structures, only had objects and arrays. But in ES6 two more were introduced, sets and maps. Pretty common data structures that exist in other languages, and now exist in JS.

A Set is basically just a collection of unique values. Can never have any duplicates. Makes them useful in certain situations.

Need to pass in an iterable, most common iterable is an array.

Ex:

```
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
//returns  Set(3) {'Pasta', 'Pizza', 'Risotto'}
```

A set can hold mixed data types, that's not a problem at all.

Removes the duplicates. A set looks kind of like an array. Just a bunch of values grouped together into a set. Just like arrays, sets are iterable. But very different from an array.

- Because it's elements are unique
- Because the order of elements in the set is irrelevant

Keep in mind that strings are also iterables.

Ex:
`console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}`

Sets can also be empty: `console.log(new Set())`

## How to work with Sets

Can get the order of a set. `console.log(orderSet.size) // returns 3`

Called `size` and not `length` like arrays.

Can see if a set has something in it, using the method `.has()`

```
console.log(ordersSet.has('Pizza')); // returns true
console.log(ordersSet.has('Bread')); // returns false
```

`.has()` method is similar to the `.includes()` method in arrays.

Can also add new elements to a set using `.add()`
But if add something twice, second one will be ignored as everything in the set has to be unique

Can also delete elements using `.delete()`
`ordersSet.delete('Risotto');`

Very simple, in arrays no method as simple as `.delete()`

But how do we retrieve values out of a set? Can we maybe use an index like arrays, like `console.log(ordersSet[0])` returns `undefined`. Can't do it. Because in sets, there are no indexes. There are no ways to get values out of a set. No need to get data out of a set. Because, if all values are unique, and order doesn't matter, then no point of retrieving order out of a set. Just need to know that it's in the set by calling the `.has()` method. Instead, if your goal is to store values in a set and retrieve it, then the best use case is to just use an array. Wouldn't use a set for that.

One more method, not that important. Can call `.clear()` to delete all of the elements of the set.

Sets are also iterable, so can loop over them.

Ex:
`for (const order of ordersSet) console.log(order);`

Main Use Case for sets in a big code base is to remove duplicate values of arrays.

Conversion of a set to an array is very easy. Spread operator works on all iterables, which includes sets.

EX:

```
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const stuffUnique = [...new Set(staff)];
console.log(stuffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

console.log(new Set('jonasschmedtmann').size); // 11
```

Can also use sets to count size.

Sets are not intended to replace arrays at all. Whenever need to store things in order, and might have duplicates, always use arrays. Also true when need to manipulate data, as arrays have lots of great methods.

Sets have useful property of being unique, and very easy to interact with them using their very straightforward methods. However, they are not nearly as important as arrays. Keep them in mind when you need to work with unique values.
