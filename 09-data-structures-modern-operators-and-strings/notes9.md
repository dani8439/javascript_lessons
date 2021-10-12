# Looping Objects: Object Keys, Values and Entries

Learned about for of loop to loop over arrays, which is an iterable.

Can loop over objects, which are not iterables, but in a different way.

Remember properties are called keys in an object. Have to use the for of loop ultimately in an indirect way. So not looping over object itself, loop over an array.

When looping over object for property values, to loop over the entire object need the entries - name, plus value. Works different only objects, not a method we call on the object itself, like we did with the array calling `.entries()`

All of the keys, values, and entries transform an object into an array. Can then use that to loop over the object.

**Important** In the array, use the `object.entries()` to get entries of the array. But when looping with an object, have to do `Object.entries()` and then pass into the function the object we are interested in, so becomes `Object.entries(game.odds)`
