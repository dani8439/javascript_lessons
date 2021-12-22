# Implementing Bookmarks: Part 2

Only thing still missing is that when we bookmark, want that recipe to show up in the bookmarks panel. In html, have a list element with class of preview when there are bookmarks. Exact same code as search results. Can just copy code from results view.

Now just wante to render the bookmarks view with all the bookmarks (in controlAddBookmark())

```
const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  // console.log(model.state.recipe.bookmarked);
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  // console.log(model.state.recipe);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks)
};
```

Works. But have a bug so that each time we display a recipe, should update entire bookmarks panel so that it can select or highlight the current reicpe. Do that in the controlRecipe function()

```
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);
```

Now need to fix the fact that both bookmarksView and resultsView are exactly the same. Will implement a parent view of both. Called the preview view.

Can generate the markup.

```
import View from './view.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class Preview extends View {
  _parentElement = '';

  _generateMarkup(result) {
    const id = window.location.hash.slice(1);
    return `
        <li class="preview">
            <a class="preview__link ${
              result.id === id ? 'preview__link--active' : ''
            }" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
              </div>
            </a>
          </li>
    `;
  }
}

export default new PreviewView();

```

Will only generate markup for preview elements.

Don't need generateMarkupPreview in bookmarks view. Import previewView.

```
 _generateMarkup() {
    console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark)).join('');
  }
```

as render method is called, it will set the data on the bookmarks view, and then it will generate the markup (call that method in the bookmark view) gets access to `this.data`. Then we map over that data. For each of those bookmarks, we want to then render a previewView, but here we need to return a string from the generateMarkup method, so that then in the view it can insert that view into the DOM. By having render there, previewView.js will try and render some markup. So we'll change our render method in view and add a second parameter to it, called render which by default will be set to true.

```
 render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;
```

Add to render function that if `render` is false, we want to return the markup we just generated. Why don't we call generateMarkup itself without messing with the whole render method? Why do we call previewView.render with the whole markup? Because we still needed to set the data property to the data we passed in so that in the previewView we can use the this keyword.

Replace all the results with `this._data` in `generateMarkup` in previewView.js. And then in the `_generateMarkup()` in bookmarksView.js set the parameter to false.

```
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
  }
```

Then in results view, delete excess code, copy the `_generateMarkup` function from bookmarks view, import PreviewView. Update bookmark to result, and it works.
