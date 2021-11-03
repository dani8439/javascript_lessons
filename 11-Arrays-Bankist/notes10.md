# The `.find` method

Can use the `find` method to retrieve one element of an array based on a condition.
Also accepts a condition. Like the other array methods we've been talking about, accepts a callback function that then loops over the array. `find` is another method that loops over the array, but does something different.

Unlike the `filter` method, it won't return a new array, but will return the first element in the array that satisfies the condition.

It's a bit similar to the `filter` method. Two fundamental differences.

- `filter` returns all the elements that satisfy the condition. `find` only returns the first element.
- `filter` method returns a new array. `find` only returns the element itself, and **NOT** an array.

Usually the goal of the `find` method is to find just one element. So we usually set up the condition so only one element can satisfy that condition.
