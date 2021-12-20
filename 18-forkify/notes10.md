# Implementing Search Results: Part 1

Need to implement model, view, controller that binds it all together. Easiest to start with the data, the model. To make some API calls that load some search results.

Going to create a function that can be exported and used by the controller. `loadSearchResults()`. Will be performing ajax calls and an async function. Will be controlled by the controller, so the controller will tell it what it has to search for.

```
export const loadSearchResults = async function (query) {
  try {
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
```

Same pattern for the catch block of throwing the error again so we can display it in the controller.

Can use the `getJSON()` method to get the data again.

```

export const loadSearchResults = async function (query) {
  try {
    const data = await getJSON(`${API_URL}search?q=${query}`);
    console.log(data);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

```

What's returned is data.data.recipes which is an array.
Now want to take that data and store it in our state. And create some new objects based on the data we receive.

```
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
```

Will store that in our state:

```
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  }
};
```

Becomes:

```
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

loadSearchResults('pizza');
```

Get rid of `loadSearchResults('pizza')` Because we want to call it in our controller.

```
const controlSearchResults = async function () {
  try {
    await model.loadSearchResults('pizza');
    console.log(state.search.results);
  } catch (err) {
    console.log(err);
  }
};
```

Now that it's hooked up, want to make a view just for search bar, and then render the results in a separate view.
Search bar view won't render anything, but will give us the content of the input field. Getting the input data has to do with the DOM. Should be in the view and not in the controller.

```
class SearchView {

}

export default new SearchView();
```

export an instance of the class.

Class won't render anything, just get the query and eventually listen for the click event on the button. Create a method which we'll call from the controller called `getQuery` which will return the parent element, and from there we'll select the `search__field` in put field.

```
class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl.querySelector('.search__field').value;
  }
}

export default new SearchView();

```

Could have written exact same code in controller, but wouldn't have made any sense because the DOM is not part of the controller.

```
const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults();
```

Put in a guard clause so if no query, return.

In order to make this work, now have to listen to the event of clicking the search button or submitting the form, and on that event call the controlSearchResults function on it. Again using the publisher-subscriber pattern. Will listen for the event in the view, then pass the controller function/the handler, into the view here.

```
class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl.querySelector('.search__field').value;
  }

  // Publisher
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
```

the handler() function should be the control search results function.

controller.js:

```
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
```

Should probably clear out field after we search. Add small method of `clearInput()`
