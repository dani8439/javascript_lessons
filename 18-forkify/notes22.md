# Wrapping Up: Final Considerations

Standard way of writing documentation for JS functions, called JS Docs. (In View.js for render function) -- jsdoc.app

write it like:

` /** */`

```
  /**
   * Render the received object to the DOM.
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param (boolean) [render=true] If false, create markup string instead of rendering to the DOM
   */
```

Benefit is this standard way of writing it, other people should understand if they are familiar with jsdoc format. If everyone describes their function in same standard, easy to understand

VS code then takes that info, and when we hover, will show it.

```
 /**
   * Render the received object to the DOM.
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param (boolean) [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Dani Schuhman
   * @todo Finish implementation
   */

```

Can add this to the most important functions, so when you come back to them in 1, or 5 years, you'll understand what they do. Data they get in and output.

In package.json have build command to build project files with compression and tree shaking before deploying. For now call it finished.

### Improvement and Feature Ideas: Challenges 🤓

👉 Display number of pages between the pagination buttons.
👉 Ability to sort search results by duration or number of ingredients.
👉 Perform ingredient validation in view, before submitting the form. (While user is inputting ingredients)
👉 Improve recipe ingredient input: separate in multiple fields and allow more than 6 ingredients.

👉 Shopping list feature button on recipe to add ingredients to a list and display in UI like bookmarks.
👉 Weekly meal planning feature: assign recipes to the next 7 days ands how on a weekly calendar.
👉 Get nutrition data on each ingredient from spoonacular API (`https://spoonacular.com/food-api)`) and calculate total calories of a recipe.
