# Basic Array Operations (Methods)

JS has some built in functions we can use on Arrays

## Add Elements

### push method

Adds elements to the end of an array.
It's a function `push()` call it attached to the array itself. `arrayName.push(elementWeWantToAdd)`
Mutates the array

Because it's a function, it can also return something (the new length of the array)

### unshift method

Adds elements to the beginning of an array

unshift also returns length.

## Remove elements

### pop method

will remove the last element of an array, don't have to pass in an argument

Doesn't return the length of the new array, but the removed element

### shift method

removes the first element from an array.
Doesn't need an argument, returns element that has been removed, and we can capture it.

### indexOf()

Method tells us where an element is. Returns index of where it is located.

Returns `-1` for an element that isn't there.

### Includes

Instead of returning the index of the element, will return true or false if it's there. It's an ES6 method

Uses strict equality.

Can use includes method to write conditions, makes it very handy
