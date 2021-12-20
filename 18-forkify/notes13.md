# Implementing Pagination: Part 2

Buttons we want to render on the bottom are not always the same.

Want a new view to implement pagination. Can copy top code from resultsView.js.

```
import View from './view.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
}
```

Just as we did in other views, going to need a generateMarkup method. Because that's the method the render method will call to generate the markup for the view we're working on. Every view that render something to the UI, needs a generate markup method.

4 scenarios:
Page 1, and there are other pages
Page 1, and there are NO other pages
Last page
Other page

Going to need the state data from the model to do this.

Want to display pagination when displaying the search results, so will do it after displaying results. Have to export a new instance of PaginationView in it, and then import it in the controller so that we can call:

```
// 4 Render initial pagination buttons
paginationView.render(model.state.search);
```

get access to it through `this._data` in the view itself.

In order to figure out what page we're on, need to know how many there are. Have to calculate it. Number of results divided by num of results per page.

```
  _generateMarkup() {
    const numPages = this._data.results / this._data.resultsPerPage;
    console.log(numPages);
```

get `undefined` because not returning anything from the function.

should be:

```
 const numPages = this._data.results.length / this._data.resultsPerPage;
```

And then round it up:

```
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages)
```

Then first check if we're on page 1:

```
   console.log(numPages);
    // Page 1, and there are other pages
    if(this._data.page === 1 && numPages > 1)
```

then for last page, have to see if `this._data.page` is equal to `numPages`

```
   // Page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1, others';
    }

    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return 'last page';
    }

    // Other page
    if (this._data.page < numPages) {
      return 'other page';
    }

     // Page 1, and there are NO other pages
    return 'only 1 page';
  }
```

Now all we need to do is create the markup as everything is working.

made `this._data.page` it's own constant. Then fiddled with the markup to return the buttons:

```
_generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
        </button>
          `;
    }

    // Other page
    if (curPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
        </button>
          `;
    }
```

and when on page 1, return nothing.

```
/ Page 1, and there are NO other pages
    return '';
```

Now need to add an event listener to the buttons so can go back and display another page.

Pagination markup code could be refactored. Not going to do it now. Leave as challenge: generateMarkupButton and refactor code in that method.

But now going to use publisher/subscriber pattern to do eventListener. Works by creating a publisher, waiting for the event, that listens for the event in the view. ... 19 minute mark, didn't get it down properly what he's saying.

Using event delegation, because 2 buttons. Selecting the closest button clicked. `closest()` is like querySelector. Searches up in the tree.

```
addHandlerClick(handler){
      this._parentElement.addEventListener('click', function(e) {
          const btn = e.target.closest('.btn--inline')
      })
  }
```

```
const controlPagination = function () {
  console.log('Pag conroller');
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination)
};
```

It's working. Why did we select the button? Need a way of knowing which is the way we need to go now. How will js know how to display results of page 5. Need to establish a connection between the DOM and our code. Can do that using custom data attributes. Will create a data attribute on each of the buttons, which will contain the page we want to go to. Through that code, we can read it, and make our app go to that page.

```
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      const goToPage = btn.dataset.goto;
      console.log(goToPage);

      handler();
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
        </button>
          `;
    }

    // Other page
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
          `;
```

Need to convert the button to a number. Put in guard clause first, if no button, nothing. What to do now though?

```
this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
```

We can pass the number back to the controller, and then use that number to render the results on the page we want with the `getSearchResultsPage()` method.

Want to pass our page into the handler. And then our handler needs to accept that value:

```
 const goToPage = btn.dataset.goto;

handler(goToPage);


      ....
  const controlPagination = function (goToPage) {
  console.log(goToPage);
};
```

Want to render the results and render the pagination buttons. Already have that in step 3 and 4 in function above (controlSearchResults()).

```
const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2 Render NEW pagination buttons
  paginationView.render(model.state.search);
};
```
