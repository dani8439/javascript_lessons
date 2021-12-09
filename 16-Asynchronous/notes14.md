# Consuming Promises with Async/Await

Let's turn our attention to consuming promises. Since ES2017, there's an even better and easier way to consume promises called ASYNC/AWAIT.

Start by creating a special kind of function, an async function.

Need to make this a special kind of function, do that by placing keyword `async` in front of the function so that it's now an asynchronous function. A function that will keep running in the background while performing the code that's inside of it. Then, when it's done, it automatically returns a promise. For now, what's important is, inside an async function we can have one or more `await` statements.

```
const whereAmI = async function(country) {

}
```

In an async function, we can use the `await` keyword to basically await for the result of this promise. `await` will stop the code execution at this point in execution until the promise is fulfilled. Or in this case, until it fetches the data from the API.

```
const whereAmI = async function (country) {
  await fetch(`https://restcountries.com/v3.1/name/${country}`);
};
```

Isn't stopping the code blocking the execution? Actually no. Stopping execution in an async function is not a problem. Because this problem is running asynchronously in the background. Therefore it's not blocking the main thread of execution (the callstack). That's what's so special about async/await. The fact that it makes our code look like regular synchronous code, while behind the scenes it's asychronous.

As soon as the promise is resolved, then the value of the whole `await` expression is going to be the resolved value of the promise. Can simply store that into a variable.

```
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);
};

whereAmI('portugal');
console.log('FIRST');
```

Got our response in a really elegant way. By using `async/await` our code really looks and feels like synchronous code. Can simply await until the value of the promise is resturned, and then assign that value to a variable. Couldn't do that before. Had to mess with callback functions, and consuming promises with `then()` method. But now that's all gone.

Async/await simply syntactic sugar over the `then()` method in promises. Behind the scenes still using promises. Just consuming them a bit differently.

This is exactly the same as this: (`const res = await fetch...`) is the same as `fetch(`https...`).then(res => console.log(res));`

```
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);

  fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));
};

whereAmI('portugal');
console.log('FIRST');

```

Now that we know how async/await works, time to recreate the `whereAmI()` function.

First off, we need to get the `json()` out of the response. Remember on the response we need to call `res.json()` that itself returns a new promise. Previously we'd have to `return` that promise, and chain a `then()` handler on it. But now it becomes so much easier. All we have to do is `await` it and store it directly into the data variable we've been using before.

```
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
};
```

Then just have to render the data. So call `renderCountry()`

```
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  // console.log(res);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI('portugal');
console.log('FIRST');
```

Now our data can be rendered to the page, all without having to chain promises like before. It's very elegant, being able to essentially store the fulfilled promise value into a variable without having to mess with callback functions.

Now let's finish the function with all our other functionality as well, geolocation and reverse geolocation coding.
Async/await is only about consuming promises. The way that we build them is not influenced in any way.

Rewritten it looks like this:

```
const whereAmI = async function () {
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
};

whereAmI();
console.log('FIRST');

```

The data flow is beautiful. Have it all in one nice function. Awaiting 5 promises in a very easy way in code that looks and feels like synchronous code. Async/Await was a huge addition to the JS language. Keep in mind async/await is syntactic sugar over consuming promises. Bit like classes in JS, which hides the true nature of how things work behind the scenes. It's no problem so long as you already know how promises and asynchronous JS works behind the scenes.

Async/await is used a lot with the traditional `then()` method to consume promises.

Only problem with our example, is that we have no error handling! Will fix in next lecture.
