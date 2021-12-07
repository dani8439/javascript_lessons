# Handling Rejected Promises

An important part of web development is to handle errors. Common errors happen in applications.

Remember a promise in which an error happens, is a rejected promises.

Only way the fetch promise rejects, is when the user loses their internet connection. To simulate that, can go to network tab and change speed to offline. But when we reload page, everything will disappear. Not really what we want. Want to simulate the page was first still loadad, but then as the user does the request without internet, want to see the error happening.

Want to only call the function whenever a user clicks on a button, makes it easier for us to simulate losing the internet connection. Comment out where am I? html button.

In the network tab, switch ourselves to offline. When we click the button again, we get two errors. A failed get request, and an Uncaught in promise error.

```
script.js:156 GET https://restcountries.com/v2/name/portugal net::ERR_INTERNET_DISCONNECTED
getCountryData @ script.js:156
(anonymous) @ script.js:173
script.js:156  Uncaught (in promise) TypeError: Failed to fetch
    at getCountryData (script.js:156)
    at HTMLButtonElement.<anonymous> (script.js:173)
```

Because we've failed to fetch. Promise that's returned from teh `fetch` function is rejected.

## Two ways of handling rejections.

1. To pass a second callback function into the `then()` method. So the first callback function will be called for the fulfilled/successful promise. But can also pass a second callback for when the callback is rejected. It'll be called with an argument that is basically the error itself.

Handling the error is called catching the error.

```
 fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => response.json(),
      err => alert(err)
    )
```

Caught the error, chain stops when it's handled at the top.

What if there was no error in that fetch promise? But the second one was rejected? Would also have to catch an error there.

```
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => renderCountry(data, 'neighbour'));
};
```

But that's a bit annoying, and there is a better way of handling all the errors globally. Can handle all the errors that appear in the chain, by having a `catch()` method at the end. Can use the same callback function (`err => alert(err)`) because the callback function here will also be called with the error object that occurred so we can handle it in some way.

```
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => alert(err));
};
```

the `catch()` method will catch errors wherever they happen. Errors propogate down the chain, until they are caught. Only when they are not caught anywhere do we get the uncaught error we saw earlier.

Switch the `catch` from a alert to a `console.log()`. Can also style it with `console.error`. Usually, simply logging the error to the console is not enough in a real application with a real UI. Instead of logging to a console, let's also display an error message for the user to see. A real use case of the catch block:

```
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};


.....
    .catch(err => {
      console.error(`${err} 💥 💥 💥`);
      renderError(`Something went wrong 💥 💥 💥 ${err.message}. Try again!`);
    });
};
```

The `err` that's returned is a real JS object. We can create errors in JS with a constructor just like a map or a set. Any error created like this contains the message property. Can use this to print the message of the error and not the whole object itself.

### Besides `then()` and `catch()` there's also the `finally()` method.

`.finally()` callback function we define in it, will always be called with the promise. No matter if it's rejected or fulfilled, it's always called. That's the difference between `finally` and `catch` and `then`.

`then()` method is always called when it's fulfilled.
`catch()` is only called when the promise is rejected.

Use the `finally()` method for something that needs to happen no matter the result of the promise. Sometimes used to hide the loading spinner on webpage.

In our case, what we always need to do, is to fade in the container. Happens if we render in the country or the error. Always need to do it.

```
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    // .catch(err => alert(err));
    .catch(err => {
      console.error(`${err} 💥 💥 💥`);
      renderError(`Something went wrong 💥 💥 💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
```

`finally` works because `catch` itself also returns a promise.

404 Error - not a real error, but kind of is. 404 error if put in country name that doesn't exist.
