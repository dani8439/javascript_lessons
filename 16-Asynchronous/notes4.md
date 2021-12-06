# Welcome to Callback Hell

Second AJAX call isn't possible without the first. Depends on it.

We have a callback function inside of another one.

If you wanted all the neighbors, would have callbacks inside of callbacks. Special name, callback hell. When you have a lot of nested callbacks to execute ASYNCHRONOUS tasks in sequences. Happens within callbacks, not just AJAX calls.

Say, setTimeout function...

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

callback hell is easy to identify by the triangular shape. Problem is it makes our code look very messy. Even more important, makes our code hard to maintain and hard to understand and reason about. Code like that will have more bugs and is worse code.

Rule is code that's hard to understand is bad code, because it will have more bugs. Harder it is to understand code and reason it, harder it is to add new features and functionality.

Need a way to solve callback hell. There is a way of escaping it, by using something called Promises.
