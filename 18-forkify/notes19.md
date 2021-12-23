# Uploading a New Recipe: Part 1

Create `addRecipeView.js` which will be the card to fill out a new recipe like in the demo.

Will be different from other views, because already have it in the HTML. Form we want to display is in class upload. element for the overlay hidden, and window. Showing the window and overlay will be as simple as removing hidden class from both. Main element we are interest in, is the upload element. Want to make it the parent element of add recipe view.

```
class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');

  _generateMarkup() {}
}

export default new AddRecipeView();

```

Need to select the button to open it - it's in the top navigation bar, and the one to close it.

```
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('btn--close-recipe');
```

Now lets listen for the events of clicking open and close button.

When we click the button to open, we want to remove the overlay for hidden. Can use `.remove()` or `.toggle` `.toggle` will add if not there, or remove if it is there.

```
  addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', function () {
      this._overlay.classList.toggle('hidden');
      this._window.classList.toggle('hidden');
    });
  }
```

Want it called as soon sa page loads. `addHandlerShowWindow()` has nothing to do with a controller. Nothing a controller has to tell us. All that happens is that it shows the window when clicked. Can run it as soon as the object is created.

So we can add a constructor method. Since it's a child class, need to start by calling super.

```
 constructor() {
    super();
    this._addHandlerShowWindow();
  }

```

In order to show the window, the controller doesn't interfere at all. But will have to import the object, because otherwise eventListener is never created or added. So have to import addRecipeView from addRecipeView.js in controller.

Error of having the `this` keyword inside of a handler. Pointing to the wrong object. So export to it's own function and call it there:

```
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
```

So we manually bind it to the `this` keyword we want it to be. Otherwise, `this` keyword other way, is on the btn itself.

No we have to close the form when we click the button or outside of it. Similar code, and why toggle is so useful:

```
 constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

......

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
```

Works now. Let's take care of handling upload button. Want to get all the data out of the form.

Create another method which will handle the click on that button. (The form submission)

```
  addHandlerUpload(){
      this._parentElement.addEventListener('submit', function(e) {
        e.preventDefault();
      })
  }
```

How do we get access to the values on the form? Could select them one by one and read the value property of all of them. But there is an easier way. Can use something called formData. A modern browswer API we can make use of.

Into the `FormData` constructor have to pass in an element that is a form. That form in this case is the `this` keyword. Because we are inside of a handler function, and this points to the `_parentElement` which is the upload form. Returns a weird object we can't use, but we can spread it into an array:

```
  addHandlerUpload() {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = [...new FormData(this)];
      console.log(data);
    });
  }
```

The data is what we eventually want to upload to the API. That action is just another API call. Where do API calls happen? In the model. Therefore we'll need a way of getting the data to the model. Now need to create a controller function which will be the handler of the event.

In controller:

```
const controlAddRecipe = function (newRecipe) {
  console.log(newRecipe);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
```

The publisher subscriber pattern again. Eventually we'll have some function to upload the new recipe data.

So back in addRecipeView.js, need to have `addHandlerUpload()` accept handler, and then call it.

```
 addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = [...new FormData(this)];
      handler(data);
    });
  }
```

For now, the handler function will console.log the data, because the handler function is controlAddRecipe.

Since we got the data, everything is set up correctly. Get an array of arrays. The entries of the form, where first element is name of field, second element is the value. Usually our recipe data is an object, and not an array of entries. In JS since ES2019, there's a method we can use to convert entries to an object:

```
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
```

`Object.fromEntries()` is basically the opposite of the `.entries()` method available on Arrays. It takes an array of entries and converts it to an object.
