# Promisifying the Geolocation API

Going to Promisify the Geolocation API. Will allow us to take the small app we built in the last coding challenge to the next level.

To review:

```
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);
console.log('Getting position');
```

Asks for our location, then it shows it eventually in console. This is asychnronous behavior we have been talking about. Code is not blocked.

`console.log('Getting position');` happens first, because it's loading the location in browser in background.

```
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};
```

success callback function receives the position. so when we have success, we resolve the promise - so change `console.log(position)` to `resolve(position)`. That's the fulfilled value we want to get from this promise if it's successful. That's the whole point of using this in the first place.

Do the same with `reject`. Will work just fine, but can make it even simpler. If `getCurrentPosition()` immediatelly calls the functions, and passes in the position, we can do something different:

```
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
```

Before we specified the callback manually, then took the position and passed it into resolve. Now we did it automatically. So resolve itself is the callback function which will get called with the position. Same thing goes with reject.

Now let's take it to the next level. In last challenge, we did reverse geocoding based on lat and long. But now, as we have the `getPosition()` function, don't even have to pass in the latitude and longitude coordinates. We can create a function that will tell us where we are in the world simply based on our device.
