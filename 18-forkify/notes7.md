# Helpers and Configuration Files

Many real world applications have two special modules that are completely independent from the rest of the architecture. Module for configuration, and module for helper functions.

create a `config.js` and into it put all the variables that are constants and can be used across the project.

One example is the API URL: `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`

Imagine that the URL needs to change. Don't want to change it everywhere. Just have a variable that contains it and we can use.

Using upper case for a variable is common practice for one that won't change.

`export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes'`

```
import { API_URL } from './config.js';

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
```

Now want a helpers.js file. (in views.)

```
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
```

```
export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

```

```
import { getJSON } from './helpers.js';


export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    ....
```

Just like in the last lesson, we have one async function calling another async function. `data` is the resolved value that `getJSON()` returns. That's why we `await` the promis in model.js.

If we want the error from helpers to trickle to model, have to re-throw the error so it'll be displayed properly in the console.

Now want to add some timeOut to the function, in case the request fails. Had that code in controller already:

```
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
```

```
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url). timeout(0.5)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

```

They race, and if it fails against the timeout, then we get all the errors in the console. In real world would want to do something with the error.

Switch the value to 10 seconds instead as it's more realistic. 10 is a **magic value**. Perfect candidate for a configuration value.

```
export const TIMEOUT_SEC = 10;
.....


import { TIMEOUT_SEC } from './config.js';

 try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
```
