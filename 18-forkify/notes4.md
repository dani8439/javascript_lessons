# Listening for load and handleChange events

Can listen for the event of the hash in the url changing when switching between recipes. Then load the recipe based on that id.

```
window.addEventListener('hashchange', showRecipe);
```

Want to dynamically get the id from the hash. Pretty easy to do. Can do it inside or outside of the `try{}` block

```
  try {
    const id = window.location.hash;
    console.log(id);
```

returns the id + a hash. So we can do the slice method, of 1 to the end.

```
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    // 1. Loading recipe
    renderSpinner(recipeContainer);

    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
```

What happens if we take the url, copy it, and want to open in another tab? No recipe shows up. Because the hash didn't change. So we also want to listen for the `load` event. The event of the entire page loading:

```
window.addEventListener('hashchange', showRecipe);
window.addEventListener('load', showRecipe);
```

But we have some duplicate code. There is a nice way to do it all at once!

```
['hashchange', 'load'].forEach(ev => window.addEventListener(ev), showRecipe);
```

Make an array of both events, `hashchange` and `load`. Loop over it with `forEach()` pass in the `event` to `window.addEventListener()` and then the handler function of `showRecipe`

Now to put a guard clause in case there's no id. Because right now, if you remove the hash from the URL, spinner keeps spinning, and get an error message in the console. So put a guard clause of if no id, then return to prevent that from happening.

```
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
```
