# Uploading a Recipe: Part 3

Need to re-render the bookmarks view. Also need to change the ID in the url.

```
    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);
```

Also want to change the URL. Can use the history API:

```

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
```

`pushState()` takes 3 arguments, state, title, and then url. Can pass in blank for both.

Now want to refactor `getJSON` and `sendJSON` as they are too similar. Can put them together in one function called `AJAX()`

`uploadData` passed in as undefined. Test conditionally, because if uploadData exists, then we should sendJSON. If it doesn't, we getJSON.

```
export const AJAX = async function(url, uploadData = undefined) {

}
```

```
export const AJAX = async function (url, uploadData = undefined) {
  const fetchPro = uploadData
    ? fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      })
    : fetch(url);
};
```

Becomes after copying code from getJSON of the try/catch block and deleting unnecessary code:

```
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
```

Now need to add the KEY to the url:

```
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    .....

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
```

By adding the key in our search results it will load all the recipe that contain our own key. So our own recipes will be shown at the top in our search. Now want to mark this as our own recipe in search results and with the icon on the recipe itself.

Go to recipeView and previewView and add logic to display the small icon.

Add this back in:

```
    <div class="recipe__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
```

And we want to toggle the class if it's visible.

If there is a Key, no class, if there is no key, then it's hidden.

```
    <div class="recipe__user-generated ${
              this._data.key ? '' : 'hidden'
            }">
```

Still missing in preview, because we never added the key to our search data. So lets go back to the model. Copy code from spread the key in if it exists:

```
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    // console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
```
