# Implementing Search Results: Part 2

Going to render the search results by creating a new view (a resultsView) which will contain a render we can call with the search results. Similar to the recipeView.

Will be similar to recipeView. So probably better to refactor the code for both, and create a parent class through all the view Classes.

```
class ResultsView {}
```

```
export default class View {}
```

exporting the class itself as not using any instances of the view. Only use as a parent class of the other views.

Need to copy everything that's shared to the view. But, because of parcel and babel, inheritance doesn't work the same way. Cannot use private methods anymore. (Remove `#`'s and replace with `_`)

Need to abstract from recipe class everything for view.

```
import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
      </div>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
          <div>
            <svg>
              <use href="s${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
          <div>
            <svg>
              <use href="s${icons}#icon-smile"></use>
            </svg>
          </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

```

And then just have to extend the class in Recipe view so it becomes: `class RecipeView extends View`

Successfully extracted the view class from Recipe View. And what's left is only what's necessary. So now can add a spinner to the search results.

```
import View from './view.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
}

export default new ResultsView();
```

One results view which we can import.

Now time to create `_generateMarkup()` view in the results view.
Needs to exist in order for the render method to create the markup and insert it into the DOM.

Where is that data we want to pass in?
In controller, `resultsView.render()` resultsview inherits render. Into that, we pass whatever we want rendered, which is our search.

```
 resultsView.render(model.state.search.results);
```

In the render, it takes the data that's passed into the function, puts it into `this._data`. So if we go to the results view and `console.log(this._data)` should be our search results.

```
class ResultsView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    console.log(this._data);
    return `
        <li class="preview">
            <a class="preview__link preview__link--active" href="#23456">
              <figure class="preview__fig">
                <img src="src/img/test-1.jpg" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
                <p class="preview__publisher">The Pioneer Woman</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }
}
```

Can then see our info printed out twice to the console when we search pizza, etc.

The `_data passed` in as an array. So we want to loop over the array. Want to return a whole string that contains an element for each search results in the array:

```
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview() {
    return `
        <li class="preview">
            <a class="preview__link preview__link--active" href="#23456">
              <figure class="preview__fig">
                <img src="src/img/test-1.jpg" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
                <p class="preview__publisher">The Pioneer Woman</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }

```

Now we need to fill it with the real data. The id, publisher, and the title, and image:

```
  _generateMarkupPreview(result) {
    return `
        <li class="preview">
            <a class="preview__link preview__link--active" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }

```

Now it works! Beautiful. And can click on them and the recipe is loaded!

Now just need to fix the icons that are showing. And everything shouldn't be highlighed. Have to take away the active class from `_generateMarkupPreview()`

After fixing, see state is gone. So let's activate the hot module loading. Put this in top of controller.js: (it's coming from parcel)

```
if (module.hot) {
  module.hot.accept();
}
```

Removed some icon code so it wouldn't mess things up.

Now want to render an error message if there's no result from a query. Start by creating error message property to results view:

```
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';
```

Now how to display this message on the parentElement? Could do that in generate markup and cheeck if the array is empty, and if so, render the error message. But, we can also do it directly in the render method, right as we receive the data.

Can immediately check when render method receives data for the first time, we can check.

```
  render(data) {
    if (!data) return this.renderError();
```

Don't have to pass in a message, as it's being sent in the renderError method. But the check is not enough, do get data, but it's an empty array. This only works for undefined or null. Need to check if received data is an array and empty.

```
   if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
```

Use the Array helper method `isArray()` check if it's an array, and if the length of it is 0.

if (!data || (Array.isArray(data) && data.length === 0))
return this.renderError();
