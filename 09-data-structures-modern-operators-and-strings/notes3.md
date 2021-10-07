# Rest Patterns and Parameters.

Rest pattern looks just like the spread operator. Has the same syntax of three dots, but does the opposite of the spread operator.

Used the spread operator to build new arrays, or pass multiple values into a function. In both cases, we used teh spread operator to expand an array into individual elements.

Rest pattern uses exact same syntax, to collect multiple elements and to put them into an array.

Spread pattern is to unpack an array. The rest pattern is to pack elements into an array.

Know it is the spread syntax, as using it on the righthand side of the operator. (the equals sign)
`const arr = [1, 2, ...[3, 4]];`

Rest syntax is on the left side of the equals sign.
`const [a, b, ...others] = [1, 2, 3, 4, 5];`

first and second elements become first and second variables. Then comes the REST pattern, takes the rest of the elements, the remaining elements, and place into a new array. REST pattern basically collects the elements that are unused in the destructuring assignment.

The REST syntax collects all of the elements after the last variable. Doesn't include any skipped elements. REST pattern always must be the last in the destructuring assignment, otherwise how will JS know when it should collect the rest of the array. Can't put another element after the array, will through an error.

This is fine ex:

```
const [pizza, , risotto, ...otherFood,] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
```

Throws an error, says Rest element must be last element

```
const [pizza, , risotto, ...otherFood, bread] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
```

Spread operator and Rest operator work in opposite ways, but it depends on where they are used.

The Spread operator is used where we would otehrwise write values separated by a comma.

The REST pattern is used where we would otherwise write variable names separated by commas. Subtle distinction, but this is how you know when and where to use spread and REST.
