# Implementing Pagination: Part 1

Currently have all results on one page at once. Want to break it up so it's more user friendly. Only have 10 results in demo.

Harder to solve than it seems.

The `controlSearchResults()` function is responsible for rendering the results. But we only want to render 10 in the first page and not all. Then want to render the second ten on page one, and so on, and so on. Need to create a function in our model which will take in the page we want to render.

Want to reach into the state and get the data for the page requested

```
export const getSearchResultsPage = function() {

  return state.search.results.slice(0, 9)
}
```

Can calc values based on page.

```
export const getSearchResultsPage = function () {
  // 0 based
  const start = // 0;
  const end = // 9;

  return state.search.results.slice(start, end);
};
```

Dynamically:

```
export const getSearchResultsPage = function () {
  // 0 based
  const start = (page - 1) * 10; // 0;
   ---> 2-1 is 1, *10 is 10. (for page 2, etc, etc)
  const end = page * 10; // 9;

  return state.search.results.slice(start, end);
};
```

Change the state to add `resultsPerPage`:

```
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: 10,
  },
};

.....

export const getSearchResultsPage = function (page) {
  // 0 based
  const start = (page - 1) * state.search.resultsPerPage; // 0; ---> 2-1 is 1, *10 is 10. (for page 2, etc, etc)
  const end = page * state.search.resultsPerPage; // 9;

  return state.search.results.slice(start, end);
};
```

The `10` looks a bit like a magic number. Going to move it into Config as a constant.

```
export const RES_PER_PAGE = 10;

```

In controller previously did this:

```
   resultsView.render(model.state.search.results);
```

going to now do this:

```
     resultsView.render(model.getSearchResultsPage(1));
```

Here in our control, we should store the number that's coming in, in the `state`. Will be important because later when we display the page number on bottom, need to know what page we're on.

```
 state: {
     ....
    results: [],
    page: 1,
 }

export const getSearchResultsPage = function (page) {
  state.search.page = page;
```

And can also pass in page as set to default in the `getSearchResultsPage = function (page = state.search.page)`
