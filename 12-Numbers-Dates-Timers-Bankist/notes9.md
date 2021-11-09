# Timers: setTimeout and setInterval

Have two kinds of timers in JS. `setTimeout` and `setInterval`

`setTimeout` runs just once after a defined time. `setInterval` runs forever until we stop it.

### `setTimeout()`

Can use `setTimeout` to execute some code at some point in the future.

`setTimeout` receives a callback function like arrays or event handlers as the first arg, we don't call it ourselves, we pass it in as an argument to the setTimeout, which will call it in the future. When does that future arrive? That's what we specify in the second argument. Pass in the amount of milliseconds that will pass until the function is called.

Delayed the function call for 3 seconds, or scheduled function call for 3 seconds.

What's important to know is that the execution of the code doesn't stop at this point. When the execution of our code reaches this point, it calls the setTimeout function, then it registers the callback function to be called later, and then the code execution continues.

```
setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
console.log('Waiting...');

// Waiting...
// 3 seconds later....
// Here is your pizza 🍕
```

Once it hits first line, it keeps counting in the background, registers the callback function to be called after time has elapsed, then it will move on immediately to the next line. This is called **asynchronous javascript**.

What if we needed to pass some arguments into the callback function? Not that simple because we're not calling it ourselves. Can't pass any args into the function. However, the setTimeout function has a solution. All the arguments that we pass after the delay, will be arguments to the function:

```
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  'olives',
  'spinach'
);
console.log('Waiting...');

// Waiting...
// 3 seconds later
// Here is your pizza with olives and spinach 🍕
```

Can pass in more args, etc. Can actually cancel the timer at least until the delay has passed (before however many seconds you passed in passed.)

```
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  // spread the ingredients args in
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
```

Use `.clearTimeout` and as the array contains spinach, don't see it printed to the console.

### `setInterval()`

`setTimeout()` schedules a function to run after a set time, but the callback function is executed only once. What if we wanted to run a function over and over again? Every 5 seconds? Every 10 minutes? Have the `setInterval()` function.

```
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
```

callback function is executing every second, and then logged to the console. Can say every 3 seconds and so on and so on.
