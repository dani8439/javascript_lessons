# Updating Recipe Servings

Starting in the controller.

```
const controlServings = function() {

}
```

calling them controllers, but could also be called handlers. Just handlers that run when some event happens. This controller is executed when a user clicks on a button to increase or decrease the servings. Increases or decreases the number of servings and the ingredients.

Very simple. All we have to do is update the recipe servings. (in the state). And then to update the view as well. (the recipe view). No servings view. Because the buttons, everything that happens is already in the recipe view.

Updating the servings has to do wtih the model. Have a method that does it for it. Not manipulate data in controller, but delegate it ot the model which is all about the data. (`updateServings()`)

```
export const updateServings = function(newServings) {

}
```

will reach into the state in this case, the recipe ingredients, and manipulate them.
Each ingredient in the state is an object, and we want to change that quantity. Don't want a new array, want to manipulate with side effects, so will use `forEach()`.

```
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity =
    // newQt = oldQt * newServings / oldServings
  })
};
```

Use the `newQt = oldQt * newServings / oldServings` formulat to calculate updated servings so say `2 * 8 / 4 = 4`

```
ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
```

Also need to update the servings in the state:

```
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
  });

  state.recipe.servings = newServings;
};

```

works because we already have the recipe in the state. Now just need to update recipeView. Will simply override the complete recipe. Render it again.

```
const controlServings = function () {
  // Update the recipe servings (in state)
  model.updateServings(6);

  // Update the recipe view
  recipeView.render(model.state.recipe);
};
```

Don't want to have to manually change everything, so just rerender it all.

Need to create a new event listener in the view to update when clicked. No need to create a new servings view.

```
addHandlerUpdateServings(handler) {

  }
```

The `handler()` function is the one we just wrote.
Best way again is event delegation. Have parent element, can listen for events on that one, and check if click target was the increase or decrease button (similiar to last video with pagination.)

```
  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');
    });
  }
```

if we click outside, won't have anything, so have to do a guard clause.

```
  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');
      if (!btn) return;
      console.log(btn);
      handler();
    });
  }
```

Now have to connect it with the controller.

```
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
```

It's all working. Can update to 8 servings.

Want to set the value dynamically of how many servings we want to update to. Could do it right in the controller. Could just take that and increase or decrease value by 1. However, should keep the controller as flexible and as robust as possible. Don't want controller responsible for telling what the servings are. Should come from the view and not the controller, as it's in the view user is updating the servings. Can simply pass in new servings into controller, and into updateServings().

```
const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.render(model.state.recipe);
};
```

But how will we determine new servings in the view? Need to connect the UI with the code. Use the special data properties.

```
  <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to="${
                  this._data.servings - 1
                }">
                  <svg>
                    <use href="${icons}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to="${
                  this._data.servings + 1
                }">
```

very similiar to pagination buttons

Switched the btn class from `btn-tiny` to `btn--update-servings`. Can now read that value

```
  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      console.log(btn);
      const updateTo = +btn.dataset.updateTo;
      // with destructuring to make it cleaner:
      // const { updateTo } = +btn.dataset;
      handler(updateTo);
    });
  }
```

then pass the value to the handler, and should be good to go.

Put in a clause so that it doesn't go to negative:

```
  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      console.log(btn);
      // const updateTo = btn.dataset.updateTo;
      // with destructuring to make it cleaner:
      const updateTo = +btn.dataset.updateTo;
      if(updateTo > 0) handler(updateTo);
    });
  }
```

Switched it up a little, went back to destructuring, and then do the conversion from string to number in the clause instead:

```
   const { updateTo } = btn.dataset;
   if (+updateTo > 0) handler(+updateTo);
```
