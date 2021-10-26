# Functions Returning Functions

Create a greet function that we can pass in a greeting of Hi, Hello, etc, and this function returns a new function value. This new function that we return will have a parameter so it will be able to receive arguments. It will simply log to the console the greeting and the name passed into that function.

Then store the result of the function call into a `greeterHey`, that value is now actually a function. Can then call the `greeterHey()` function as anything we've defined ourselves. Can call it with `greeterHey('Jonas')` and `greeterHey('Steven')` works because the `greeterHey()` is essentially the `greet` function.

It works because of something called a closure. Closures are complex and difficult to understand mechanism in JavaScript. One of the most misunderstood topics.

```
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven
```

The `greeterHey()` function works because of closures. `greeterHey()` returns a new function. It doesn't matter right now, what matters is that our first function `greet()` returns a new function that we stored into the `greeterHey` variable. And the `greeterHey` variable is now a function we can call.

Can also do it all in one go. So using the `greet()` function we can immediately call it as well. So: `greet('Hello')('Jonas')`

Might look weird and unnecessary. What's the point of functions returning other functions? Becomes very important in certain situations, and expecially important when using functional programming paradigm.
