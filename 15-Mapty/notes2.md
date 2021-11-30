# Using the Geolocation API

Geolocation API is a browswer API just like Internationalization, or timers, or anything the browsers give us. A very modern API. There are many other API's like that. (Camera, or to make users phone's vibrate for example).

Geolocation is very easy to use. All you need to do is `navigator.geolocation.getCurrentPosition()` function takes as an input two callback functions, first one is called onSuccess, so whenever the browswer succesfully gets the coordinates of the user. Second is the error callback called when there's an error getting the coordinates.

First function is called with a position parameter.

```
navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
  },
  function () {
    alert('Could not get your position');
  }
);

```

Get back a `geolocationPosition` object. We're interested in the coordinates.

```
GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1638283635909}
```

GeolocationCoordinates has latitude and longitude in it. Inside of the coords object. Child object of the parent object.

Let's very quickly create a link on google maps to the coordinates. Way url works, we have the url, then the latitude, and then the longitude. Very simple to build a url like it.

```
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //   console.log(position);
      // destructuring
      const { latitude } = position.coords;
      //   const latitude = position.coords.latitude;
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your position');
    }
  );
}

```
