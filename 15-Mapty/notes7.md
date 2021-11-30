# Refactoring for Project Architecture

App class, with private methods.

```
class App {
  constructor() {}

  _getPosition() {}

  _loadMap() {}

  _showForm() {}

  _toggleElevationField() {}

  _newWorkout() {}
}
```

Have this structure where we can put our existing code.

```
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude } = position.coords;
          const { longitude } = position.coords;
          console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

          const coords = [latitude, longitude];

          map = L.map('map').setView(coords, 13);
          //   console.log(map);

          L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);

          //Handling clicks on map
          map.on('click', function (mapE) {
            mapEvent = mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
          });
        },
        function () {
          alert('Could not get your position');
        }
      );
    }
  }
```

Now want to refactor. Callback function of `getCurrentPosition()` is going to become `_loadMap()`

```
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap, function () {
        alert('Could not get your position');
      });
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    map = L.map('map').setView(coords, 13);
    //   console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //Handling clicks on map
    map.on('click', function (mapE) {
      mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  }
```

to call `_loadMap()` because we're in a class, it becomes `this._loadMap()` . The event is not an event in the common sense, but where we receive the position and it's called. (`this._loadMap()` method is called)

None of this will work presently. Need to create an actual object out of this class. Have to create it.

```
const app = new App();
```

Right now don't need any inputs into our application.

In order to trigger the geoLocation API the `_getPosition()` method has to be called. Can do that by calling:

```
app._getPosition()
```

Inside of the App class also have a method that gets executed as soon as the `app` is created. That is the constructor method. It's called immediately when a new object is created from the class. This object that's created, is created when the page loads. So the constructor is also executed when the page loads. Can simply get the position in the constructor.

```
class App {
  constructor() {
    this._getPosition();
  }
```

Now going to define `map` and `mapEvent` as properties of the object. Use a private class field. Go back and change references of `map` to `this.#map` and `this.#mapEvent`

```
  #map;
  #mapEvent;
```

Getting an error. Because in the callback function of `this._loadMap`, there actually is no `this`. Can work around that by manually binding `this`.

```
 _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
 }
```

have to throw in a bunch of `bind(this)` so that the right context is shown for the functions.

Refactored code looks like this:

```
class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    console.log(this);
    this.#map = L.map('map').setView(coords, 13);
    //   console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    // closest method is like a reverse querySelector in that it selects the parent not the children.
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    // console.log(this);
    // Display the marker
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    const { lat, lng } = this.#mapEvent.latlng;
    // adds the marker to the map
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();
```
