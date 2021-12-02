# Moving the Marker On Click

Move the map to the position of the workout that's been clicked in the sidebard.

But, what to do when there are no workouts there? Where should we attach the event handler to? The situation in which we don't have the element in which we want to attach teh event listener as it hasn't been created yet. Have to do event delegation. Have to add the event handler to the parent element. Element with the class of `workouts` (`containerWorkouts`) Do that in the constructor so the event listener is added right in the beginner.

```
  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup);
  }
```

`.closest()` is essentially the opposite of a `querySelector()`. The element we're looking for is with the class `workout` Wherever the click happens, even if it's in the div or span, it will all end up in the li element with the workout class. From the element we'll move up to the exact element using the `closest` method.

Gives you the id when you click on it. Will now use the id to find the workout in the workouts array. We put this here, because with this we can build a bridge between the UI and the data we have in our application. If we didn't have the id stored, how would we know which is the objects in the workout array we need to scroll to? Need it so we can read it, then select the element out of the workouts array using the id.

Need to `bind` the `this` keyword to the event listener so no error and it's the correct `this`

```
containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);
  }
```

Now we have the correct id, can take the coordinates and move to that position. There's a method in leaflet that does that, can access it using the map object:

first arg needed is the coordinates, second is the zoom level.

`this.#map.setView(workout.coords, 13)`

As we've used the zoom level of 13 before somewhere else, bad practice to repeat it so going to set a `#mapZoomLevel` at top of the class, and then reference it in other places

```
Class App {
    #mapZoomLevel = 13
    .....

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    .....


     this.#map.setView(workout.coords, this.#mapZoomLevel);
}
```

Can pass in an object of options, set animate to true, also set duration of the animation by saying pan should be equal to another obj, with a duration of 1.

```
   this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
```
