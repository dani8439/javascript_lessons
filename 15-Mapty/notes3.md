# Displaying a map using Leaflet Library

Leaflet. CDN (Content Delivery Network)

Put the link in before our script for now (will do NPM later). Want to specify defer attribute as well. Code from leaflet:

```
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
```

`L` is like the namespace, like `Intl` was for the internationalization API. Leaflet gives us the `L` namespace, with a few mehtods, like `map`, and `tileLayer`, `marker`.

`L` is available in the console, it's a global variable that we can then access from all the other scripts.

script.js has access to everything that appears before it. But whatever .js files don't have access to what's after it because it's not been loaded yet.

Other number is the zoom level of the map. (the 13)

`tileLayer` is the map that we see on the page is made up of tiles coming from the URL, openstreetmap. It's basically an opensource map you can use for free. Can use the url to change the appearance of our map.

Want to change:

```
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
```

`tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',` to change the style.

`marker` is for the marker and the pop up.
