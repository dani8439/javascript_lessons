# Implementing Error and Success Messages

Let's implement real world error handling in our app rather than logigng to the console.

Real world way is to display message in UI. So handle error in the view.

```
 renderError(message) {
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
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }
```

Now have to handle it in the controller. For now it's this:

```
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
```

```
} catch (err) {
    recipeView.renderError();
  }
};
```

But what's the error going to look like? Where will it come from? Had to rethrow the error in earlier example, mark the entire promise as rejected so it would get into the catch block. Now we have the same problem.

Essentially will have to do the same thing, of throw the error so that it will propogate down.

```
model:
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥 💥 💥 💥`);
    throw err;
  }

controller:
.........
   recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(`${err} 💥 💥 💥 💥`);
  }
```

Instead of logging it to console, now have a way to render it to the UI.

But want to render a more meaningful message.

Make #errorMessage a private field in the recipeView.js. So the view itself already knows the message it want to display

```
class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;
  #errorMessage = 'We could not find that recipe. Please try another one!';
```

But make in `renderError()` that there is a default message passed in:

```
  renderError(message = this.#errorMessage) {
```
