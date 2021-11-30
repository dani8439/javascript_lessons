# Displaying a Map Marker

Going to display a marker wherever we click on the map. Going to use the leaflet library.

Need to add the event handler to the map, so we can handle any incoming clicks. How? Should we attach it to the entire map? No. No way of knowing GPS coordinates of where they clicked.

Where the `map` variable comes into play. It's onto this `map` object where we can add an event listener. Similiar to what we do with addEventListener. Can do (the `on()` method comes from the leaflet library). They use the underscore conventions for methods you shouldn't use, and the `on()` method is far up the prototype chain.

```
   map.on('click', function (mapEvent) {
        console.log(mapEvent);
        // destructure it
        const { lat, lng } = mapEvent.latlng;
        // adds the marker to the map
        L.marker([lat, lng]).addTo(map).bindPopup('Workout').openPopup();
      });
```

`L.marker()` adds the marker to the map. Pass in our destructured `lat, lng` so it knows where to place it. `.addTo()` adds the marker to the map. A method in the leaflet library. Similiar to the first selecting the tileLayer, then addTo. `bindPopup()` creates a popup and binds it to the marker, then we pass in the string `'Workout'` that appears when we click it.

But we want to pass in some options. Don't want it to just be 'Workout'

`bindPopup(L.popup({}))`

Go to leaflet docs, look up popup and see what's passed in. Want the maxWidth and the minWidth. Will create an object with these two properties.

To change behavior of one pop up closing when we make another one, that's `autoClose` by default it's true, want to set to false. Also `closeOnClick` which will prevent pop up from closing. Set to false. Also have the `className` can assign any css className we want to the popup. Already have a class for popups in the CSS, `.running-popup`, and `.cycling-popup`. Want to be able add a custom class as well so can customize with green or orange. Later we'll define it dynamically, for now we'll just put the class as `running-popup`. Also need to set the text back. That's on the marker itself. `setPopupContent` Can then specify a string or HTML element to give the popup some content. All these methods always return `this`. The current object. Which makes all of these methods chainable.

```
      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        // destructure it
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
