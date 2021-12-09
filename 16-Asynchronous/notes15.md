# Error Handling with Try/Catch

With async/await we can't use the `catch` method of before, because we can't really attach it anywhere. We have to attach a `try/catch` statement. This is used in regular JS as well. Been in the language as well. Has nothing to do with async/await. But can still use it to catch errors.

Can wrap our code in a `try{}/catch{}` block.

Here is how it works normally:

```
try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}

```

The error becomes a pop up window, and doesn't appear in the console.

Now let's try to use it to handle real errors in async/await.

```
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    // console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
  }
};
```

Not really rendering properly, so have to `throw new Error` to display what's up in a few places. Do it manually for both fetch calls.

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
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error(`Problem getting country`);

    // console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');
```
