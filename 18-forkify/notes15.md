# Developing a DOM Updating Algorithm

We will develop an algorithm that will only update the DOM where it's changed. Necessary because right now we're having a flickering re-render of entire recipe view whenever we update the servings.

So let's create an update method we can use in this situation.

```
const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
```

No longer calling `.render()` but this new `update()` method. In view.js because want available to all:

```
  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();
  }
```

Borrowing code from other `render()` method. Want to compare newMarkup to oldMarkup. Just going to generate the newMarkup to the current. Only change text and attributes that have changed from old to new.

Can use trick of converting markup string to a DOM object that's living in the memory, and we can then use to compare to actual DOM on the page.

```
const newMarkup = this._generateMarkup();

const newDOM = document.createRange().createContextualFragment(newMarkup);
const newElements = newDOM.querySelectorAll('*');
console.log(newElements);
```

Will convert and change to a DOM that lives in memory. Will create a Node list we can see in console. And can see number updating when digging deep enough from 4 servings to 5. One of the things that will change. Everything else is the same.

Convert from Node List to Arrays. And have curElements to compare.

```

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    console.log(newElements);
    console.log(curElements);
  }
```

Need to loop over both arrays at once (need index for that):

```
  newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
    });
```

How to compare? Very handy method available on nodes called `isEqualNode()`

```
   newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      console.log(curEl, newEl.isEqualNode(curEl));
    });
```

prints out `true` and `false` along with a nodelist of what's changed and what hasn't.

```
    if (!newEl.isEqualNode(curEl)) {
        curEl.textContent = newEl.textContent;
    }
```

If newEl is different to the current element, then we want to update the textContent.

Doesn't quite work though, looks ugly, and doesn't it properly. Need to determine if element only contains text, because that's all we want to replace. How can we do that? Another method or property available on all nodes, it's called `nodeValue`. The value of `nodeValue` is `null` if it's an element, but if it's text, then we get the context of the textNode.

```
   if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }
    });
```

Right around 17 minute mark about taking the child node for whatever reason, then calling `nodeValue` on that, and then trimming the white space.

Add some optional chaining because first child may not exist.

Right now, only option to go to 5 servings or 3. Because we're not updating the attributes on the buttons. Need to change those too.

For the updated attributes have to do separately, and can use the `attributes` property:

```
  if (!newEl.isEqualNode(curEl)) console.log(newEl.attributes);

```

returns an object of all the attributes that have changed. Let's convert the object to an array, over which we can loop and check what's altered and update it.

```
  // Update changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        console.log(Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
```

Now we're simply replacing old attributes in the element by those in the new element.Can go as far as we want now.

Want to use the update algorithm, to update search results view whenever we click on one of the results.

Need resultsView. Get's a special class of `preview__link_active`

```
  const id = window.location.hash.slice(1);
    return `
        <li class="preview">
            <a class="preview__link ${
              result.id === id ? 'preview__link--active' : ''
            }"
```

And in controller:

```
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
```

Doing the same we're doing with render, but in this case it's with update.

Happens because as the hash changes, recipe is loaded, the entire search results view is rendered again. This time the id as the result as the same as the displayed recipe, so gets the active class. But with `render()` all the images flicker because it's re-rendering. So we use the `update()` method instead. Eliminates that issue, because only the element that's been changed, updates.

removed:

```
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
```

From top of update method, because causing error to render in app which we don't want.
