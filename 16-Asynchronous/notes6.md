# Consuming Promises

How to consume a promise

Calling the fetch function like this will immediately return a Promise. In beg, still pending. Async task of getting the data is still running in the background. At a certain point, Promise will be settled in a fulfilled or rejected state. Assume promise will be fulfilled and we'll have a value to work with. To handle the fulfilled state, use the `then()` method that's available on all promises.

Have to pass a callback function into the `then` method as soon as the promise is fulfilled/available. Will receive one argument. Argument is the resulting value of the fulfilled promise.

```
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`).then(function (
    response
  ) {
    console.log(response);
  });
};
getCountryData('portugal');
```

Data we're interested in, is in the response body. Data is a `ReadableStream`. In order to actually read this data from the body, need to call the `json` method to parse it. `json()` method is available on all resolved values with promises. Problem is the `json()` function is also an async function, it'll return a new promise. All a bit confusing. So what we need to do is to `return` the promise because it'll be a new promise, and handle that promise as well. Then call another `then` right afterwards, and another callback function.

```
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getCountryData('portugal');
```

It works, we get the same data we were getting before, but using two promises.

## Recap

`fetch` function returning a Promise, then handling that data using the `then` method. But then to read the data from the response, need to call the `json()` method on that response object. That method will return a promise, if we then return that promise from the method, all of it becomes a new promise itself. Since it's a promice, we call the `then()` method on that. Have a callback, and get access to that data.

Now, all we have to do is `renderCountry(data[0])`

```
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
getCountryData('portugal');
```

Simplified code (removing the `console.log()` and turning the callbacks into arrow functions):

```
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('portugal');
```

Code is easier to read than how we originally were making calls to the API.

To finish, well, we're still using callbacks here? That is true. Promises do NOT get rid of callbacks, but they do get rid of callback hell. Even if it doesn't look like a big change for now, it will once we dig deeper in.
