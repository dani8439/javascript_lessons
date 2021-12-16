# Rendering the Recipe

After loading the recipe data from our API, lets render that data in the application

Recipe class is a whole container the grey one, which contains the rendered recipe.

Big string, changed the elements we want to display, then `insertAdjacentHTML` on the class to display the recipe in the browser. Except for the ingredients.

```
const showRecipe = async function () {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc13`
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(res, data);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);

    // 2. Rendering recipe
    const markup = `
      <figure class="recipe__fig">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${recipe.title}</span>
            </h1>
          </figure>
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="src/img/icons.svg#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="src/img/icons.svg#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
              <span class="recipe__info-text">servings</span>
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="src/img/icons.svg#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="src/img/icons.svg#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="recipe__user-generated">
              <svg>
                <use href="src/img/icons.svg#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round">
              <svg class="">
                <use href="src/img/icons.svg#icon-bookmark-fill"></use>
              </svg>
            </button>
          </div>
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="src/img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">1000</div>
                <div class="recipe__description">
                  <span class="recipe__unit">g</span>
                  pasta
                </div>
              </li>
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="src/img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">0.5</div>
                <div class="recipe__description">
                  <span class="recipe__unit">cup</span>
                  ricotta cheese
                </div>
              </li>
            </ul>
          </div>
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${recipe.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="src/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
    `;
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
};
showRecipe();

```

Problem is we have a message displaying on the bottom. No icons, and no ingredients. Before we insert new markup, have to get rid of what's there.

```
recipeContainer.innerHTML = '';
recipeContainer.insertAdjacentHTML('afterbegin', markup);
```

Now onto the ingredients. Need to loop over the ingredients array, and create a markup for each element.
Want to return something (a string), so need to use `.map()` not `forEach()`. Switch the attributes to display. And then at the end, want to display it properly, so call `.join('')` so it's joined together in a string. One big string containing all the ingredients.

```
  <ul class="recipe__ingredient-list">
              ${recipe.ingredients
                .map(ing => {
                  return `
                  <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="src/img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${ing.quantity}</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${ing.unit}</span>
                      ${ing.description}
                    </div>
                  </li>
                `;
                })
                .join('')}
```

Icons are missing. Page displayed in the browser is the `index.html` in the dist folder. All the images and assets are coming from there. But in our template literal, we're still writing the old path to the icons. So right now JS can't find it. There's no src folder in our dist. Need a way of telling our js that the icon file is no longer what it says in index.html, but the new one. Can do that with parcel.

```
// import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../img/icons.svg'; // Parcel 2
console.log(icons);
```

Parcel helps us. And shows the link in the console:

```
http://localhost:1234/icons.f134c689.svg
```

Now we'll use that. Everywhere it says icons and old path (`src/img/icons.svg`), replace it with `icons`

`<use href="${icons}#icon-users"></use>`

Now want to do the spinning wheel - Loading spinner before the recipe arrives.

```
const renderSpinner = function (parentEl) {
  const markup = `
      <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
      </div>
  `;
  parent.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
```

Spinner animation is in the css file. Infinite rotation.

```
const showRecipe = async function () {
  try {
    // 1. Loading recipe
    renderSpinner(recipeContainer);
```

To finish up, want to add polyfill to codebase for ES6

Do `npm i core-js regenerator-runtime` to install the dependencies. Then import into our controller.js file.

```
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

regenerator/runtime is for polyfilling async/await. core-js is for polyfilling everything else. Could cherrypick features, but let's polyfill everything.
