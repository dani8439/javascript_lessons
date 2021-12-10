# Returning Values from Async Functions

One important thing missing right now with async/await.

```
console.log('1: Will get location');
whereAmI();
console.log('3: Finished getting location');

// Will return:
1: Will get location
3: Finished getting location
actual info of location
```

If there was a `console.log()` in the async/await function, that would return second, and then the information would come later.

Say we wanted to return some data from the function.

```
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error(`Problem getting country`);

    // console.log(res);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};

console.log('1: Will get location');
const city = whereAmI();
console.log(city);
console.log('3: Finished getting location');
```

Switching things up, adding a return statement, and then assigning the `whereAmI()` to a const and then console logging it, what happens?

```
1: Will get location
Promise {<pending>}
3: Finished getting location
```

We get a `Promise {<pending>}` because an async function always returns a promise. It makes sense here we get a promise and not the value we would like to get of the string. Reason for that is that at this point in the code (`const city = whereAmI()`) JS has no way of knowing what we want. Because the function is still running, but it is not logging the code out there. JS has no way of knowing what will return from the function.

The value we return from an async function (the string) will become the fulfilled value of the promise that is returned by the function. Important to understand. The promise - the fulfilled value of that promise is the string, because that's the value we've returned from the async function, so long as there's no error happening.

As we know `const city = whereAmI()` will return a promise, we also know how to get the data we want. Use the `then()` method. the value passed into the callback function will be the resolved value of the promise (which is the return value)

```
console.log('1: Will get location');


whereAmI().then(city => console.log(city));
console.log('3: Finished getting location');
```

If any error occurs in the try block, the return will never be reached, because the code will immediately jump to the catch block.

What's interesting when you get an error, the `console.log()` still works. Returns `undefined` rather than the info. It's still running. Which means the callback function is still running. Which means the `then()` method was called. Which means the promise was fulfilled and not rejected.

Even though there was an error, the promise was still fulfilled and not rejected.

If we add in some console.logs:

```
console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2:${err.message} 💥 `));
console.log('3: Finished getting location');
```

The code that's executed is the `then(city => console.log(...))` with the city, and not the catch block.
What that means is that even though there was an error in the async function, the promise that it returns is still fulfilled. If we wanted to fix that (to be able to catch the error as well), we would have to rethrow the error up in the `renderError()` statement within the function.

To **rethrow** an error means to basically throw the error again so that we can then propogate it down. With that we would manually reject the promise that's returned from the async function.

```
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};
```

Sometimes it's important to do it so we can see the errors.

Finally if we wanted to fix it so that the 3 isn't printed before the 2. Can add a `finally` onto the end. Because finally will always be executed:

```
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2:${err.message} 💥 `))
  .finally(() => console.log('3: Finished getting location'));



  /////
  1: Will get location
  2: You are in HILLSDALE, United States of America
  3: Finished getting location
```

This works just fine, but still a problem. Problem is that doing all of it mixes the philosophy of async/await with catch. Mixing old and new. Personal bugbear. Prefer to use just async functions. Can go ahead and convert it to async/await as well, because can treat the promise that's returned just like any other promise, and can use async/await. Would be great if you could use await without the async function, but that won't work for now.

Don't really want a complete new function, so, we can use an IFFY.

```
(async function() {

})();
```

```
 const city = whereAmI();
 console.log(city);
 whereAmI()
   .then(city => console.log(`2: ${city}`))
   .catch(err => console.error(`2:${err.message} 💥 `))
   .finally(() => console.log('3: Finished getting location'));
```

Can be rewritten as:

```
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();
```
