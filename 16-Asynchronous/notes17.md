# Running Promises in Parallel

Imagine we wanted to get some data about 3 countries at same time, but order in which it arrives doesn't matter at all.

```
const get3Countries = async function (c1, c2, c3) {
  try {
    // destructuring as we know it's going to be an array, so to take the first element
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');
```

Works fine using the `getJSON()` function we wrote earlier. Prints out the capitals of 3 places in an array. But, if we think about it, what we're doing doesn't make that much sense. Because what we did was to run all these AJAX calls one after the other, even though the result of the 2nd doesn't depend on the 1st, and the result of the 3rd doesn't depend on the 1st or the 2nd.

Why should the 2nd AJAX call wait for the first? And so on? They go in order that they are call. Doesn't make any sense. Instead of running the promises in sequence, can run them in parallel and save valuable loading time. Each takes half a second, by doing it at once, save a second, which is a lot of time in terms of loading a webpage.

To do all three at once, use the `Promise.all()` helper function on the Promise Constructor (Static method). (**Combinator function**). It takes in an array of promises and it will return a new promise which will then run all promises in the array at once.

```

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');
```

Now all run in parallel rather than sequentially. Returns an array of arrays. So have to loop over the data to take out what we want.

```
const get3Countries = async function (c1, c2, c3) {
  try {

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    // In video he does console.log(data.map(d => d[0].capital)) .... but that works for the older api (v2) not v3
    console.log(data.flatMap(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');

```

Important to note that if one of the promises rejects, then the whole `Promise.all` rejects as well. `Promise.all` shortcircuits when one promise rejects. One is enough for the entire thing to reject as well.
