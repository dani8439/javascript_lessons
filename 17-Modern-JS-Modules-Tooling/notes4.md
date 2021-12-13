# Top Level Await

There's been an important change in ES2022. Can now use the `await` keyword outside of async functions, within modules. We call it top-level await. Only works in modules.

```
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
```

`await` keyword now working outside an async function.

previously would have to write:

```
asynch function x() {

}
```

No longer necessary. What's important to understand. While it's all great and useful, this actually blocks the execution of the entire module. Not necessarily what we want!

```
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');
```

`await` keyword is blocking the entire execution of the module. Because the console.log('Something') isn't printed until it's done fetching.

This can be harmful, especially if it's a really long running task.

Real world example: Maybe have async function where we want to return data

```
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
```

Returns a Promise, not actual code. Workaround from previous videos was to return regular promises and call `then()` method on it.

But this isn't very clean : `lastPost.then(last => console.log(last));`

Can do top level await.

```
const lastPost2 = await getLastPost();
console.log(lastPost2);

// {title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}
```

Using top-level await implication. If one level imports another module that uses top-level await, then the importing module will wait for the imported module to finish the blocking code.

Code in script.js has to wait for code in shoppingCart.js to finish. blocks it all.

```
// Blocking code
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');
```

Using top level await (`await` out of any async function) will block the entire module in a way that we really couldn't block code execution before. Very helpful but needs to be used with great care.
