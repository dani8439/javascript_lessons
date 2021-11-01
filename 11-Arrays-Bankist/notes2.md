# Looping Arrays: forEach

Looping over an array using the `.forEach()` method. Have already learned using a forOf loop.

`Math.abs()` gives the absolute value of a number.

```
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
```

Can loop using the `forEach()` method. (believes it's simpler.)

`.forEach()` requires a callback function passed in. It's a higher order function that requires a callback function to tell it what to do. It's the `.forEach()` method that will call the call back function, we're not calling it ourselves. Important to keep in mind.

When will `.forEach()` call the call back function? It will loop over teh array, and in each execution call the call back function. As it calls it in each iteration, it will pass in each element of the array as an arguement. Can call it whatever we want. Can the do precisely what we did in the other loop.

```
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

```

behind the scenes in iteration 0 calls an anonymous function without a name function(200)
1: function(450)
2: function(400)
until it reaches the end of the array. Especially important that it passes in the current element of the array.

We tell forEach in each iteration it should log one of these two strings to the console. Give it instructions by giving it a call back functions that contains the instructions.

Which of the two versions is cleaner to write, cleaner/easier to read? The `.forEach()` method. Might not agree with that. Using the forEach method and understanding the logic with the callback function is very important for all the methods we'll learn later.

What if we needed access to a counter variable?

To access the index in the for/of loop, use `.entries()` and then pass in the destructured index along with the element name:

```
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
```

To do so in `.forEach()` it's a lot easier. forEach calls the callback function in each iteration, and as it does it, it passes in current element of the array, and the index, and the entire array we are looping. Therefore we can specify in the parameter list.

Names don't really matter, but the order does. The first parameter needs to be the current element, second is the current index, third one, always the entire array we're looping over. That's the order the arguments are passed into our callback function.

```
console.log('---- FOREACH -----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement: ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement: ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
```

When we use the `.entries()` in the for/of loop, first element is the index, second is the element in the array (in arguments destructured). Order is different than with the `.forEach()` method.

When should you use one or the other?

You cannot break out of a `.forEach()` loop, can't use continue or break. Will always loop over the entire array, nothing you can do to change that. If you need to break out, use the for/of loop. But comes down to personal preference.
