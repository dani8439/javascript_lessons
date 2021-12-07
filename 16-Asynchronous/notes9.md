# Throwing Errors Manually

Problem with last video, during the `fetch` there was a 404 error, because API couldn't find any country with that name.

can utilize the ok: false in the returned response by creating our own error.

`if(!response.ok)` if no response ok, or if response.ok is false, then...

```
 fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
```

Create new error by using the `Error` constructor function, with our customized message. Then we use the `throw` keyword which will immediately terminate the current function just like `return` does. The effect of creating and throwing an error in any of these `then()` is that the Promise will immediately reject. So basically the promise returned by the `then()` handler will be a rejection, which will propogate down to the `catch` we've already created.

Any error that happens in any then handler/callback function, will terminate that then handler, and propogate down to the catch. The `error.message` is exactly what's passed in in `response.status`

Why should we bother handling all these errors?

1. Handling the errors is the only wawy we can display a custom error message on the screen.
2. Bad practice to leave the rejected promises hanging around. Always use `catch` and `finally` if necessary.

Say everything goes well in first fetch request, but have a bad one in the neighboring country bit. What to do? How to handle the error?
