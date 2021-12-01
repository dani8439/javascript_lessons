# Managing workout Data: Creating Classes

Going to implement classes to manage the workouts coming from the user database.

Both running and cycling have a distance and a duration. Both have a type, but don't need to be encoded. For running we have cadence, for cycling, elevation gain. Both workout types have coordinates. Coming from the click on the map.

Want to implement the parent class for both workout types (`Workout`) Will take in the data common to both workouts.

in constructor have common attributes.

Also want the date. So set date, need an id. A unique identifier. Remember in bankist app, an array of objects. sometimes we need to find an object in it, used the `find` or `findIndex` methods. But that only works when there is a unique identifier. In Bankist it was the account owner. But that's not a good practice. Every object should have a unique identifier, so can later identify it with that id. (using id and date as classfields.) Usually should never create id's on our own, should let a library do it. Not including that now. Going to just se current date to create an id, and take the last 10 numbers, so it'll be unique enough

```
 date = new Date();
 id = (Date.now() + '').slice(-10);
```

We will never directly create a workout, instead we will always create a running or cycling object.
