# Working with Strings: Part 1

Reading a character on a string.

This works the same

```
const plane = 'A320'

console.log(plane[2]); // 2
console.log('B737'[0]); // B
```

Can read the `length` property either indirectly or directly on the string.

```
console.log(airline.length); // 16
console.log('B737'.length); // 4
```

## Methods

Strings have similar methods to arrays. Some are quite similiar to the array methods.

`indexOf()` - Can get the position that a certain letter is in the string.

```
console.log(airline.indexOf('r')); // 6
```

Strings are also 0 based. `.indexOf()` gives only the first occurrence. If we want the last occurrence, use `.lastIndexOf()`

Can search for entire words. But it is case sensitive, wouldn't work with `'portugal'` passed in as the argument. Would return `-1` as the answer as could not be found in airline string.

```
console.log(airline.indexOf('Portugal')); // 8
```

## `.slice()` Method

indexes are useful, because can extract part of the string using the `.slice()` method. `.slice()` needs indexes as arguments.

First arg is the begin parameter, where the extraction will start. So `console.log(airline.slice(4))` returns `Air Portugal`. It returns the `subString`. It's just a part of the original string. Doesn't change the underlying strings. That's because `Strings` are primitives, and impossible to mutate them. If wanted to do that, would have to store it and mutate it that way.

Can also specify an end parameter.

`console.log(airline.slice(4, 7))` returns `Air`

It stops extracting before it reaches the index of the second arg. **Very important** to keep in mind. The length of the extracted string is always going to be end minus beginning. (7-4)

Many times don't even know the string until we receive it. Don't have to hardcode the values. Ex:

```
console.log(airline.slice(0, airline.indexOf(' ')));

// Returns
// TAP

console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// Returns
// Portugal
```

Can even define a negative argument beginning. Which will print out the last characters of the string.

```
console.log(airline.slice(-2));

// Returns
// al

console.log(airline.slice(1, -1));

// Returns
// AP Air Portuga
```

### Why does all of this work?

Know that strings are just primitives. Why do they have methods? Shouldn't methods only be available on objects such as arrays? Well, that's actually true. But JavaScript is very smart. Whenever we call a method on a string, JS will automatically convert that string primitive to a string object, and it's on that object that the methods are called. Called 'boxing'. Puts it into the box that is the object.

Basically does this:

```
console.log(new String('jonas')); // String {"jonas"}
console.log(typeof new String('jonas')); // object
```

When the operation is done, object is turned back into a string primitive.

EX:

```
console.log(typeof new String('jonas').slice(1)); // string
```
