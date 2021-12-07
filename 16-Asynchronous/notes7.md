# Chaining Promises

Chaining promises in order to render neighboring countries. Already have a small chain of promises because of the `json()` function. The two `then()` called in sequence, are already a small sequence.

But now we're going to chain together two AJAX calls. Just like before, first get data about the country, but also want to get the data about the neighboring country. Second AJAX call depends on the first, so must be done in sequences. It needs to happen in the second `then()` handler.

Need to return the new promise so that we can chain a new `then` method on the result of the first `then` method.

The `then()` method always returns a promise, no matter if we return anything or not. But if we do return a value, then that value will become the fulfillment value of the returned promise:

```
 fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      // Country 2
      // return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
      return 23;
    })
    .then(data => alert(data));
};
getCountryData('portugal');
```

Get a popup, because whatever we return from the promise will become the fulfilled value of that promise. The success value of that promise, is 23. Therefore in the next `then` method, data will be 23. The data we receive as the input to the function is the fulfilled value of the promise that we're handling (`then(data => alert(data))`)

fulfilled value of the promise has to have `json()` called on it. Then we can handle it in the second `then()` and render it.

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
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('portugal');
```

Right now, we have 4 steps, but we could extend it as much as we wanted. Could chain to do neighbor of neighbor for 10 countries. Instead of callback hell, we have a **Flat chain of promises**. Very easy to understand and to read.

Promises are a very powerful and elegant solution to handle asynchronous code.

A common mistake beginners tend to make is to chain the `then()` method directly onto a new nested promise.

```
fetch(`https://restcountries.com/v2/alpha/${neighbor}`).then(response => response.json());
```

Chain it right inside the `then` method. It works, but we're back to callback hell. One function defined inside of another one. Exactly what we're trying to avoid. Always return the promise, and then handle it outside, by handling the chain as shown.
