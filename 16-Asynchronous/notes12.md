# Building a simple Promise

Know all about consuming Promises, but never actually built our own promise. Let's go back to our lottery example from the slides, and simulate a lottery. Fulfilled mins you win the lottery, Rejected means you lose. Can build a promise with the Promise constructure `new Promise()` means that promises are essentially just a special kind of object.

Promise constructor takes one argument, the executor function:

```
new Promise (function() {

})
```

As soon as the promise runs, it will execute the executor function. The executor function takes two arguments, the resolve and reject functions. Kind of just like the `fetch` function which also creates a new promise. The executor function, is the function that will contain the asynchronous behavior we're trying to handle with the promise. Should eventually produce a resolved value. A value that is the future value of the promise.

```
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You WIN 💰');
  } else {
    reject('You lost your money 💩')
  }
});

```

If `Math.random()` draws a number that's above 0.5, then we call the `resolve()` function that's been passed in. That sets it as fulfilled. Calling the `resolve()` function will mark it as fulfilled. Into it, we pass the fulfilled value of the promise so it can later be consumed with the `then` method. Going to handle the result just like we would handle any other result. Whatever value we pass into the resolve function value, is going to be the result of the promise available in the `then` handler.

With `reject` we pass in the error message that we want to later handle in the `catch` method.

To recap, here we've created an executor function `lotteryPromise` which is going to be called by the `Promise` constructor as soon as it runs.

In order to try it out and consume the promise, `lotteryPromise` is a Promise Object, we can call the `then()` method on it. Needs a callback function that's called with teh resolved value of the promise.

```
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
```

If the promise is successful, it'll pass in the `res` message of `You WIN 💰`. If it fails, it'll be `You lost your money 💩`

Not really asychronous yet. Going to add a timer to simulate that. Move the code into there, and create an actual error rather than just console.logging it. (Creating an actual error object is better.)

```
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
```

This is how we encapsulate asynchronous behavior into a promise. Then we consume it.

In practice, most of the time we only consume promises. We usually only build promises to wrap old callback based functions into promises. This is a process called **Promisifying**. Promisifying means to convert callback based asynchronous behavior to Promise based.

Let's Promisify the `setTimeout()` function and create a `wait()` function

To do so, we're going to return a new Promise, then in the executor function, we don't actually need `reject` because it's impossible for the timer to fail. Will never mark this promise as rejected. Just need resolve. Just like Array methods with `map` that receive 3 arguments, but most of the time we need only one.

Don't have to pass anything into the `resolve()` function. Not always necessary to wait for a value. Just want to make our code wait. Need to run the timer for a certain amount of seconds, so multiply it by 1000 to do so.

```
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));
```

Don't need to pass anything into the `then` so can leave it empty as not receiving a resolved value. Can then run any code we want after 2 seconds.
Then want to wait 1 more second. Have to return a new promise , `return wait(1)`. Exactly what we did before when we wanted to chain 2 sequential ajax calls in the fetch method. In the result of the first fetch, we create a new fetch and return it. Then therefore all of it returns a new promise, and we can then, one more time handle that.

Once again have a nice chain of asynchronous behavior that all happens in sequence but without a callback hell.

Could rewrite callback hell with this.

```

 setTimeout(() => {
   console.log('1 second passed');
   setTimeout(() => {
     console.log('2 second passed');
     setTimeout(() => {
       console.log('3 second passed');
       setTimeout(() => {
         console.log('4 second passed');
       }, 1000);
     }, 1000);
   }, 1000);
 }, 1000);

```

Becomes:

```
wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => console.log('4 seconds passed'));

```

Finally if we wanted to create a fulfilled or rejected promise immediately:

`Promise.resolve('')` like a static constructor.

```
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
console.error(x);
```
