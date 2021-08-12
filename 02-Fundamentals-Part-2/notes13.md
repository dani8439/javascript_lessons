# Looping Arrays, Breaking and Continuing

One of the most used applications for for loops, is to loop through arrays.
traditional to use i as the counter.
hardest bit is how long to loop for. Want to compute the value, get it from JS itself. Can replace hard coded value with a calculated one, like the array length, `i < jonasArray.length`

To create a new array, create an empty array, with the brackets, `[]`

To add to the new empty array, could set say:

`newArray[i] = otherArrayWeAreLoopingThrough[i]`

or can `.push` on:
`newArray.push(otherArrayWeAreLoopingThrough[i])`

push is a little bit cleaner.

## Continue and Break Statements

continue is to exit the current iteration of the loop, and continue to the next one.

break is used to completely terminate the whole loop.

example, want to only log strings to the console:

```for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
```

if typeof current element is not a string, then continue on with the loop.
other types were skipped, so only strings are printed out to the console.

continue immediately exits the current iteration if the boolean is false.

### Break

Completely exits the loop after criteria is found.

```
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
```

So after the number is found, the loop is terminated completely, and prints this to console, doesn't go past 46 'number'

```
--- BREAK WITH NUMBER ---
index.js:493 Jonas string
index.js:493 Schmedtmann string
```
