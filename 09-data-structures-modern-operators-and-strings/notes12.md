# Maps Iteration

Another way of populating a new Map without having to use the `.set` method.

Can create one like so:

```
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);
```

Array of Arrays should look similar, as it's the same array structure that's returned from calling
`Object.entries(openingHours)`

Means that there is an easy way to convert from objects to maps.

```
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// returns
// (3) [Array(2), Array(2), Array(2)]
// returns
// Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}
```

Iteration is possible on maps, because Maps are also iterables. So the `for/of` loop is available for them.
Looping over a Map is the same as looping over an object, only difference is we needed the `Object.entries()` in order to do so. Converted it to an iterable using `Object.entries()`

```
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// Returns
What is the best programming language in the world?
Answer 1: C
Answer 2: Java
Answer 3: JavaScript
```

**Side Note** sometimes need to convert a map back to an array.
Do that by building a new array, and then unpacking using the spread operator

`console.log([...question]);`
returns an Array of Arrays
