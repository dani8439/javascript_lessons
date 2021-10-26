# The Call and Apply Methods

Learn how to set the `this` keyword manually, and why we would do that.

```
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // writing the method this way (enhanced syntax) instead of writing book: function()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

// Jonas Schmedtmann booked a seat on Lufthansa flight LH239
// John Smith booked a seat on Lufthansa flight LH635
// {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), book: ƒ}
```

`this` keyword points to the `lufthansa` object, because that's the object where the `book()` method was called.

When making a second object `eurowings`, it's a bad practice to just copy over the `book()` method into the object. Better to take the method and store it in an external function, and then reuse it for all the different airlines. Create a new function called book.

`const book = lufthansa.book` works because JavaScript has first class functions. Can take the function value and store it into a new variable which will then also be the `book()` function. Could have also written it literally, but not necessary, have it already written.

```
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
```

Try to use the new `book()` function to create a new booking. Will cause an error. Cannot read property of `undefined` of airline. Because, book function is just a regular function call, and in a regular function the `this` keyword points to `undefined` at least in strict mode. So the `book()` function is no longer the original method. It's now a separate function, a copy of the original function, but it's not a method, just a function. Therefore the `this` keyword inside of it points to `undefined`. How do we fix it? How do we tell JS we want to create a new booking on the Eurowings airline or lufthansa? Have to tell JS explicitly what the `this` keyword should point to.

3 function methods to do that. `Call()`, `Apply()` and `Bind()`.

`book(23, 'Sarah Williams')` does NOT work.

Instead use `book.call()` because a function is just an object, and objects have methods, therefore functions can have methods too. The `call` method is one of them. In the `call` method, the first argument is where we want the `this` object to point to.

```
book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings); // {airline: 'Eurowings', iataCode: 'EW', bookings: Array(1)}
```

have the bookings array. Inside of there we have the EW23, which comes from the eurowings object, as well as the name. It's inside hte bookings Array of the eurowings object.

This time, we didn't call the `book()` function ourselves, instead we called the `call` method, which called the `book()` function, with the `this` keyword set to eurowings. This allows us to manually and explicitly set the `this` keyword of any function we want to call. All the arguments after the first one, are the original arguments for the function.

Can do the same for lufthansa.

```
book.call(lufthansa, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH239
console.log(lufthansa); //{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ}
```

All the info is completely correct in the lufthansa object. Happens because we set the `this` keyword inside of the function call to lufthansa. Where before in the eurowings, it was point to eurowings.

Have a wall now of manually manipulating using the `call` method. Can keep creating bookings.

There is a similar method to the `call` method, called the `apply` method. Only difference is that the `apply` method doesn't receive arguments after the `this` keyword, it will take an array of arguments. Take those elements of the array and pass it into the function.

Ex:

```
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// George Cooper booked a seat on Swiss Air lines flight LX583
// {airline: 'Swiss Air lines', iataCode: 'LX', bookings: Array(2)}
```

Apply method isn't used that much in JS. Now have a better way to do the same thing.

better way: pass in the this, and then pass in the spread operator to take the data out of flightData.
`book.call(swiss, ...flightData);`

is the same as the previous `book.apply(swiss, flightData)`.

### Summary

Yet another tool in our toolbox. One that allows us to explicitly define the `this` keyword in any function that we want. There is also yet another method which allows us to do the same thing, and that's the `bind` method. It's more important than the `call` and `apply` methods.
