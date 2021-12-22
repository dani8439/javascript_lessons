# Implementing Bookmarks: Part 1

Going to add a handler to the recipe so that then the user can bookmark the recipe. Then that will re-render or update the recipe with the bookmark button updated. A lot of stuff we need to implement to do that.

Have to fix a bug first for the page forward and back buttons. Because never reset page to 1 in state. Have to do it in `loadSearchResults()`

```
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    // console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    state.search.page = 1;
```

So whenever we do a new search, page will reset to 1.

Bookmarks are all about data. Will start with working again in the model. Will add a new function/method that we'll export and use from the controller. (`addBookmark()`) will receive a recipe, then set that recipe as a bookmark. Also update state to have an empty array of `bookmarks` that we'll push new ones onto.

```
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks : [],
};

....

export const addBookmark = function (recipe) {

}

```

Want to add the bookmark, and then mark the current recipe as bookmarked - because it will allow us to display the current recipe as bookmarked in recipe view.

If the id of the recipe is equal to the recipe id in the state, then we set this new property of `state.recipe.bookmarked` to true.

```
export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};
```

And now need new controller for adding a new bookmark:

```
const controlAddBookmark = function () {
  model.addBookmark(model.state.recipe);
  console.log(model.state.recipe);
};

```

Want to listen for clicks on `button--bookmark` element. But will do event delegation to keep it simple:

```
addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function(e) {

    })
  }
```

But when the page starts, can't add an event listener because it doesn't exist. So another great case of using event delegation, listening for the event on the parent element, and wait to see if the click happened on the element we want:

```
 this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
```

If there's no btn, return. If there is, then handler. So just left to hook it up to the controller:

```
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
```

Can now click and see in console that it's set to true (bookmarked).

So now want to render the icon as filled. So in view, if bookmarked = true, render icon filled in RecipeView:

```
  <use href="${icons}#icon-bookmark${
                  this._data.bookmarked ? '-fill' : ''
                }"></use>
```

If bookmark is true, switch to filled, if not, leave empty.

Now in controller going to update recipe view. Update method comes in handy again:

```
const controlAddBookmark = function () {
  model.addBookmark(model.state.recipe);
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
};
```

For now, the bookmark works, but is gone when we click away. Because as we load each recipe, it's loaded from scratch - loaded from the API. Not loaded from the bookmarks. But now going to use the data from the array in state to load it if it's already in the bookmarks array. As we get data from the state in `loadRecipe()` can check if there is already a recipe with the same id in the bookmark state. if it is, then we'll mark the current recipe we loaded from teh API as bookmarked set to true.

```
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
```

Now want to remove the bookmarks if we click it. Need another method or function in the model which will remove it.

`deleteBookmark()` will receive an id. Common pattern for when adding get entire data, when want to delete, get the id.

```
export const deleteBookmark = function (id) {};
```

use `splice()` method to delete something. Need index of where it's located, and then how many items we want to delete which is only 1.

```
export const deleteBookmark = function (id) {
  // find the index
  const index = state.bookmarks.findIndex(el => el.id === id);
  // delete it from the bookmarks array.
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked.
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = false;
};
```

Now need to use the function somwhere (in the controller)

controlAddBookmarked function, we want to only add a bookmark if it's not bookmarked already:

```
const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else (model.state.recipe.bookmarked)
    model.deleteBookmark(model.state.recipe.id);
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
};
```

It's possible to read the bookmark property at the start because we added it in the state.

Bug of having them both as if statements. Need it as an if/else.
