# Working with localStorage

Use the localStorage API in order to make the workout data persist across multiple page loads.

localStorage is a place in the browser that will store data.

Have to get started in the newWorkout method.

Doesn't need any arguments, because will get the workouts from the workout property:

```
_setLocalStorage() {

  }
```

`localStorage` is an API the browser supplies to use and we can just use. It's a simple key-value store. Going to stringify the workouts themselves. localStorage is meant for only small amounts of data. It's blocking (something that's very bad). Shouldn't use it to store large amounts of data. Will slow down your application.

```
 _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
```

Can see it appear in the application tab in console, and see localStorage, with the value appearing. It's stored as a string. Then all we need to do is to show the data on the map when we reload the page. To read it, creating a `_getLocalStorage()` method. Do the opposite. `getItem` pass in a string of `'workout'`

It's a big string. Want to convert it back to objects. Need to use the opposite of `JSON.stringify()` which is `JSON.parse()`

```
 _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);
  }
```

First should check if there's actually some data. Another guard clause, if no data, then just return.

But if there is data, want to restore our old workouts array. `this.#workouts` should be equal to the `data` we just read. Restoring the data through multiple loads of the page.

```
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);

    if (!data) return;

    this.#workouts = data;
  }
```

Next want to take that data and render it out in the list. Can loop over the `this.#workouts` array. Call `.forEach()` on it, and then just `_renderWorkout(work)` for each workout. Very helpful we have all the logic rendered out into it's own method.

```
  this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
```

Now also need to render them on the map. Using our renderWorkoutMarker method. (Although not going to work just yet) Why not? Remember the method (getLocalStorage) is executed right at the beginning. However, at this point the map hasn't been loaded. So trying to add a marker to the map, which isn't yet defined at this point. ASYNCHRONOUS javascript. Can't load markers when map isn't there yet. First need to get the person's position using geolocation, then can load the markers. Lots of stuff has to happen in between. So instead of rendering markers right at the beginning, should only render the markers after the map has been loaded, so can put the logic in the `loadMap` method.

```
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    console.log(this);
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    //   console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    // render the markers on map as map has been loaded.
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }
```

Now we have an error with clicking to shift view. Problem is because of localStorage. Entire prototype chain we had before is gone. When we converted our objects to a string and then back again to objects, we lost the prototype chain. These objects are not just regular objects. No longer objects created by the running or cycling class. So can't inherit any of their methods. So `workout.click()` is not a function anymore, doesn't have it in it's prototype.

Can be a big problem when working with local storage and object oriented program. COULD restore the object in our `_getLocalStorage()` could loop over the objects, and create a new object based on the class. But that's a bit of work. Will just disable functionality of counting the clicks.

To finish, want to create quick and easy way to delete all the info from local storage. Make a public `reset()` method which we can use outside or in the console. Want to remove the 'workouts' item from local storage. Besides setting and getting items, can also remove items with local storage. Then can reload the page programmatically, so the page will look completely empty. `location.reload()` `location` is a big object in the browser with lots of properties.

```
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
```
