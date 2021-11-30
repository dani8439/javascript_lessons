# Rendering Workout Input Form

Want to render a form so a new workout can be added. Then on that form, add an event listener so whenever that form is submitted, only then is the marker rendered on the map.

It's the `<form class="form hidden>` or `form` in the script.js

Going to do DOM manipulation, to remove the hidden class.
First remove hidden class. Then call the `focus()` method on the input. When you press enter same thing as clicking a button to submit on a form.

```
     map.on('click', function (mapEvent) {
        form.classList.remove('hidden');
        inputDistance.focus();
     });
```

Problem with moving our code from the previous lesson into it's own function is that `map` and `mapEvent` are no longer within the scope.

```
form.addEventListener('submit', function () {
  // Display the marker
  console.log(mapEvent);
  //   destructure it
  const { lat, lng } = mapEvent.latlng;
  // adds the marker to the map
  L.marker([lat, lng])
    .addTo(map)
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
});

```

To solve this, declare `let map;` in the global scope. get access to `mapEvent` in the handling click on `map`. But don't really need it yet. So declare it as a global event as well. `let map, mapEvent;` And then have to change the name of `mapEvent` in the handle click function. So we copy it, assign it to a global variable, and then we can use it wherever we want.

```
    map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
```

```
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Display the marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  // adds the marker to the map
  L.marker([lat, lng])
    .addTo(map)
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
});
```

Now that the click is working, need to deal with `inputDistance, inputCadence, inputDuration, inputElevation` and clear them on submit.

` inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';`

Toggling back and forth between cycling and running, and switching between cadence and elevation.

That element is the `form__input--type` element. `inputType`

```

inputType.addEventListener('change', function () {
  // closest method is like a reverse querySelector in that it selects the parent not the children.
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
```

Toggle back and forth between `inputElevation` and `inputCadence` so that one is always on at all times.
