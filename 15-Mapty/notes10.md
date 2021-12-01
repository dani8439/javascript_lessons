# Rendering Workouts

Let's render new workouts in the UI sidebar. Create a list item for each workout. Each workout contains a short description, then the date.

going to do some DOM manipulation for the `_renderWorkout()` method.

In HTML, can see greyed out list for workout--running and workout--cycling. Want to take what they both have in common, (distance in kms and the duration). Have to replace what's there with the real data:

```
  _renderWorkout(workout) {
    const html = `
        <li class="workout workout--running" data-id="1234567890">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">🏃‍♂️</span>
            <span class="workout__value">5.2</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">24</span>
            <span class="workout__unit">min</span>
          </div>
    `;
  }
```

Switch the attributes over the template literals. Do a ternary logic to show either the runner or cyclist emoji.

// prettier-ignore

Can add that line to tell prettier to ingore what's after. Doing that makes the array of month names only one line instead of 12 separate lines.

```
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
```

Remember that `this.date.getMonth()` will be a number between 0 and 11. Can use that to retrieve any value out of our months array. then all we need is the date `{this.date.getDate()}`.

`this._setDescription()` is put into the cycling and running classes. Wouldn't work in Workout. Can't call `_setDescription` on a workout object as it doesn't have a type.

```
  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    if (workout.type === 'running')
      html += `
         <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
    `;

    if (workout.type === 'cycling')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
    `;
  }
```

Here we have the HTML generated, but now need to inject it into the DOM.

Parent element in HTML is workouts. First child is the form. Can't simply attach new workout element to UL, either insert it as a first child or a last child. But don't want any of those options. Instead will insert close to the form, but as a sibling element.

`form.insertAdjacentHTML('afterend', html)`

Now need to hide the form after any input happens. There's a transition/animation happens over 1 second. After 1 second, need to set display back to grid so element doesn't slide into view.

To toggle on the tag between cycling and running;

go from:

```
  .setPopupContent('Workout')
      .openPopup();
```

To this, reusing code from HTML.

```
  .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
```
