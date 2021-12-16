# Loading a Recipe from an API

Sass is a better way of writing css that has some additional features which makes writing css in a large scale app much easier. Browsers don't understand sass, so it has to be converted to css. Parcel will convert it.

Module bundler took our raw source code, and compiled it into the nice package/folder that's ready to ship.

Making our first API call.

He made his own API: `https://forkify-api.herokuapp.com/v2`

```
const showRecipe = async function () {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    const data = await res.json();

    console.log(res, data);
  } catch (err) {
    alert(err);
  }
};
showRecipe();
```

switched the alert up. So if res is false, then we render errors properly:

```
   const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
```

Want to create a new object on this object, with better variable names. Want to reformat the object we get. Get rid of the underscores that are there.

```
    let recipe = data.data.recipe;
```

As we have recipe on both sides, can use destructuring:

```
    let {recipe} = data.data;
```

Called it with `let` so we can create a new recipe object based on it:

```
   console.log(res, data);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
```

Successful fetch call!

```
const showRecipe = async function () {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc13`
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(res, data);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};
showRecipe();
```
