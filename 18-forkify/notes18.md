# Storing Bookmarks with localStorage

Will now make the bookmarks persist across page loads. Storing data in local storage is all about data. Implemented in the model

When should the bookmarks be stored to localstorage? Whenever a user bookmarks a recipe, or unbookmarks it.

```
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
```

Now just need to call the function in two places:

```
export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // find the index
  const index = state.bookmarks.findIndex(el => el.id === id);
  // delete it from the bookmarks array.
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked.
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};
```

Now data is in local storage, but not back in bookmarks bar. Need to write that code. Want to run a method when page is loaded that will render the bookmarks. First step is to get the bookmarks out of the localstorage and back into our code.

have code for persisting in local storage. Now need code for taking them out.

```
const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

```

Want it to be that set storage to a const, and get the item out using `getItem()` method, and search for bookmarks. And then `if storage` set state.bookmarks to `JSON.parse(storage)` constant, which parses it back into an object.

Bunch of error handling in video and explanation which I didn't write down. Starting around 8 minutes. About how information is loaded through the page and why error is being caused with bookmarks.
