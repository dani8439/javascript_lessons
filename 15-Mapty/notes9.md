# Creating a new Workout

Want to implement new feature of creating a new workout from the UI.

Want to render workout on map, on the list. Going to leave the rendering for the next video.

Input validation is an important part of using any data that uses user inputs.

What we want to do:

1. Get data from form

2. Check if data is valid

3. If workout running, create running object.

4. If workout cycling, create a cycling object

5. Add new objec to the workout array.

6. Render workout on map as marker

7. Render workout on list

8. Hide the form and clear the input fields

```
    const type = inputType.value;
    // convert from string to a number
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
```

convert the strings to a number with the `+` in front of the `inputDuration.value`.

Then check once you have that for cycling and running. Have to check if the data is valid. In an if statement, no if/else, two separate if statements. To check if the data is valid for cycling and running, have to see if it's a number. Then a guard clause. A **guard clause** means we check for the opposite, and if the opposite is true, then we return the function immediately. A trait of more modern JS.

```
   if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (!Number.isFinite(distance))
        return alert('Inputs have to be positive numbers!');
    }
```

Initial code:

```
    if (
        !Number.isFinite(distance) ||
        !Number.isFinite(duration) ||
        !Number.isFinite(cadence)
      )
        return alert('Inputs have to be positive numbers!');
```

Needs to be refactored into separate function, a helper function. An arrow function. When you pass in REST parameters (`...inputs`) it becomes an array we can loop over.

```
  const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
```

Will loop over the array of inputs (distance, duration, cadence), and in every input it will check if the Number is finite or not. Then in the end the `every` method will only return true if `Number.isFinite` is true for all of them. Only if result is false, then every will return false. That will be the return value of the arrow function.

Refactored code looks like this:

```
   if (
        !validInputs(distance, duration, cadence)
      )
```

Whenever it's not `true`, will return the alert.

Now need another helper function to return only positive numbers for the inputs:

```
const allPositive = (...inputs) => inputs.every(inp => inp > 0);

     if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

```

Want that for all inputs save for elevation, because that can be negative if descending.

Now need to make an object. Use this string to get the latitude and longitude out of the `mapEvent` object: ` const { lat, lng } = this.#mapEvent.latlng;`

Copy it and move it up, and then as it's destructured, we can place it into an array to pass in to make a new object:

```
const workout = new Running([lat, lng], distance, duration, cadence);
```

Define `workouts` array as a private field at the top of the `App` class:

```
class App {
  #map;
  #mapEvent;
  #workouts = [];
```

And can then just push our `workout` object onto that array:

```
const workout = new Running([lat, lng], distance, duration, cadence);
this.#workouts.push(workout);
```

Problem is, we don't want the `this.#workouts.push(workout);` to be written twice. But if we move it outside the return statement, because of block scope, the workout itself will not be available. In order to get around that, declare `let workout` at the top of where `type`, `distance`, `duration`, and `{lat, lng}` are defined as well.

Next step is to render workout on map. But take a quick look at console to see if we can see our workout there.

```
_newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    // convert from string to a number
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object.
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create a cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        // only want first two as elevation can be negative
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new objec to the workout array.
    this.#workouts.push(workout);
    console.log(workout);
```

To switch the popup from green to orange for cycling:

`.running-popup` and `.cycling-popup` are the input type values. Can do a template literal, and put it in:

```
    .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
```

```
   this.renderWorkoutMarker(workout);

  renderWorkoutMarker(workout) {
    // adds the marker to the map
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
      .setPopupContent(workout.distance)
      .openPopup();
  }
```

Pass in the workout to `renderWorkoutMarker()`, so data comes directly from it, like the coordinates. See we use the `this` keyword in the `.addTo()` method it's not a problem. Because we're calling it in `this.renderWorkoutMarker(workout)` as a method of the `this` keyword, and we are also calling it oursevles. It's not a callback function. So the `this` keyword is the current object, and no need to use `bind` as we had in other places.

Have to fix the type variable, as it's no longer defined. Should get the info from the workout object. Doesn't make sense to pass it in. Know cycling will always be cycling, and running will always be running. Can add the type in the class, define it as a field.

```
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
```

`type = 'cycling'` same as doing `this.type = 'cycling'` in the constructor. Will not be on all instances. So can redefine as `workout.type`.

```
  renderWorkoutMarker(workout) {
    // adds the marker to the map
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent('workout')
      .openPopup();
  }
}
```
