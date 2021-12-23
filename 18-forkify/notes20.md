# Uploading a New Recipe: Part 2

Model:

```
export const uploadRecipe = async function (newRecipe) {

};
```

It's going to make a request to the API, and receive the newRecipe. First task is to take the raw input data and transform it into the same data we get out of the API. Format is an object. Some different property names. Ingredients are stored in an array of objects. But the data right now has pairs. 6 ingredient properties, separated in commas in one string. Need to put all the data into one array, and separate the strings into the quantity unit and description. Could have created 3 different fields in the form for unit, quantity and description, but a little too much work. Need to take the data, take it out, and put it into an object.

Good idea to use the `map` method to create a new array. Only want to filter the entries where the array starts with `ing`. Not interested in empty ones.

```
 const ingredients = Object.entries(newRecipe).filter(
    entry => entry[0].startsWith('ingredient') && entry[1] !== ''
  );
```

Want to filter the entries so if it .startsWith ingredient, and then, so long as the value is not an empty string.

Then we take the data out of the string to put into the array. So finally use the `map` method:

```
  const ingredients = Object.entries(newRecipe)
    .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map(ing => {
      // replace all spaces with an empty string. Then split on the comma. Will return an array of t elements
      ing.replaceAll(' ', '').split(',');
    });
  console.log(ingredients);
```

replace all spaces with an empty string. Then split on the comma. Will return an array of the elements. So we should destructure them (the quantity, the unit, and the description):

```
   .map(ing => {
      // replace all spaces with an empty string. Then split on the comma. Will return an array
      const [quantity, unit, description] = ing[1].replaceAll(' ', '').split(',');
    });
  console.log(ingredients);
```

Then want to return an object with it:

```
  const [quantity, unit, description] = ing.replaceAll(' ', '').split(',');
  return { quantity, unit, description };
```

Works. But we want when quantity not to exist to be null. Currently we have strings. quantity if it exists, should convert to a number, if it doesn't, we want it to be null.

```
      return { quantity: quantity ? +quantity : null, unit, description };
```

But if we just put a number, we get a bunch of undefines. If we don't have something, it should be `5,,` instead of just `5`. When we split the string, we want it to have 3 parts. So need to conver tthat to our code.

Split the `ingArr` into it's own constant. Then check that if the array has length of 3 if it should. If it doesn't throw an error and immediately exit the function.

```
   const ingArr = ing[1].replaceAll(' ', '').split(',');
      // can test if the array has a length of 3. If it doesn't, function will immediately exit.
      if (ingArr.length !== 3)
        throw new Error(
          'Wrong ingredient format! Please use the correct format :)'
        );
```

Then we want to render the error for the user to see. Can use `try{} catch{}` in the `controlAddRecipe()` function.

```
const controlAddRecipe = async function (newRecipe) {
  try {
    // Function to upload new recipe data.
    await model.uploadRecipe(newRecipe);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};
```

Then update the function as it's an async function:

```
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        // can test if the array has a length of 3. If it doesn't, function will immediately exit.
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format :)'
          );
        // replace all spaces with an empty string. Then split on the comma. Will return an array
        const [quantity, unit, description] = ingArr;
        // quantity if it exists, should convert to a number, if it doesn't, we want it to be null.
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    console.log(ingredients);
  } catch (err) {
    throw err;
  }
};

```

Now it's working as we've turned things into an async function that will catch the error properly. All that's left is to create the object.

```
  const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    console.log(recipe);
```

Looks good, now needs to be sent to the API. We have a method to getJSON(). now need a method to sendJSON() in our helper.

How can we send data using the `fetch` function? All we've done until now is to pass data to do our GET request. Now we need to do our POST request, and we need to pass in an object with some options.

```
export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(uploadData)
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
```

Once we change with the object sending method, headers, and stringifying the body/data, everything else is the same.
So need to import `sendJSON` in model.

Need to get our API key from Forkify API, click on button on v2 to get one. (`4726c463-825e-4edd-80ca-f82f771d9945`).
Set the KEY to a const in the config file. Then import it in the model so we can do:

```
      ingredients,
    };
    // console.log(recipe);
    sendJSON(`${API_URL}?key=${KEY}`);
```

Store it as a `const data` and then `await` it:

```
  const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);
   console.log(data);
```

And it works!

Need to convert data property names back to the original ones so our app understands the data.

Refactor:

```
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    state.recipe = createRecipeObject(data);
```

Can reuse the `createRecipeObject(data)` function:

```
    const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
```

Now it looks like data, but it's missing the bookmarked attribute, and we need our key.

Have the function to bookmark it in the model (`addBookmark()`) can just call that with our recipe.

```
   const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
```

**TRICK TO CONDITIONALLY ADD PROPERTIES TO AN OBJECT**

And have to add our key. Use a trick where the object is created. Only want to add the key if it exists. Can use the `&` operator which will do shortcircuiting:

```
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
   ...( recipe.key && {key: recipe.key})
  };
};
```

`&&` operator to short circuit. And then can spread it. The && short circuits. If recipe.key is falsy, nothing will happen. Destructuring does nothing. But if it is some value, then the second part of the operator is executed and returned. In that case, it's hte object `{ key: recipe.key}` that's returned and in that case, that whole object can be spread in to put the values there. Will be teh same as if the values outside were like this:

`key: recipe.key` like the other attributes.

Now we just need to render the recipe in the recipeView: (controller)

```
    await model.uploadRecipe(newRecipe);
 console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
```

Also so a setTimeout to do so after 2.5 seconds. But no magic number, so make it a constant in config.js which we then import. And we close the window automatically using the toggleFunction. And render a success messages for our recipe when it's uplodade properly!

Now add one final thing. Which is to render a loading spinner in the addRecipe view before we upload the data.

```
const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Function to upload new recipe data.
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};
```
