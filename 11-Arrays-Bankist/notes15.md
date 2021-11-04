# Sorting Arrays

One feature missing in our application is the ability to sort our movements.

Sorting arrays. Sorting is a much discussed topic in CS. Countless methods to do so. For now, just going to use JS's built in sort method.

`sort` sorts things alphabetically. Mutates the original array. Have to be very careful with this method.

`sort` method does the sorting based on strings. So can't really sort numbers. So it converts numbers first to strings, and then it makes sense. But still weird (to me)

```
console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70];
```

Can fix this by passing in a compare callback function into the sort method. The callback method is called with two arguments.
Essentially the current value, and the next value if looping over the array. Can think of them as two consecutive numbers in the array.

Can use this logic to say, if we return a value that's less than 0, A is before B, and we keep the order. If the value is greater than, B is before A, and we switch the order. Want it in ascending order. From small to big.

The sort method keeps looping over the array until everything is in an ascending order according to the rules we established.

```
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]
```

To sort in descending order, just switch the logic:

```
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]
```

Also works for strings.

If we are working with numbers, we can simplify this a lot by using simple math.

Can simplify it even more:

```
movements.sort((a, b) => a - b);
```

Already know if `a > b, then a - b` will be a positive number. if `a < b, a - b` will be a negative number. If we return a 0 value, then position remains the same. Doesn't get switched. Like the same with returning a 1 or a -1.

```
movements.sort((a, b) => b - a);
```

Sort doesn't work with a mixed array that has two data types. No point in sorting an array with strings and numbers.
