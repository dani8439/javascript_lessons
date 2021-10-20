# Functions: Default Parameters

Sometimes it's useful to have functions where some parameters are set by default, so don't have to pass them in manually in case we don't want to change the default.

Can use short circuiting to our advantage as we know things that are not passed in and undefined are falsy:

```
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  // can use short circuiting to our advantage as we know these are falsy values.
  numPassengers = numPassengers || 1;
  price = price || 199;

  const booking = {
    // flightNum: flightNum
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
// {flightNum: 'LH123', numPassengers: 1, price: 199}
```

But the above is ugly. And the ES5 way of doing it.

This is the ES6 way of writing default arguments, passing them in directly with the arguments.

```
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    // code block here
}
```

Can override the defaults as well.

```
createBooking('LH123', 2, 800);
// Returns
// {flightNum: 'LH123', numPassengers: 2, price: 800}
```

What's cool about default values, they can contain any expression EX: `price = 199 * 1.2`
What's even more useful is that we can use the values of other parametners set before it. So say, price can be calculated in our booking function, based on the number of passengers. So that the value is now dynamically set, based on other value. Only works for parameters defined in the list **BEFORE** it.

```

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {

  const booking = {
    // flightNum: flightNum
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};


createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking('LH123', 2); // {flightNum: 'LH123', numPassengers: 2, price: 398}
createBooking('LH123', 5); // {flightNum: 'LH123', numPassengers: 5, price: 995}
```

Cannot skip arguments when we want to perform the function. Can't do:

```
createBooking('LH123', 1000)
// {flightNum: 'LH123', numPassengers: 1000, price: 199000}
```

It will map the default number of passengers to 1000, not the price. Can do a trick however if you want to skip an argument. Can set it to `undefined`. Is the same as not even setting it.

```
createBooking('LH123', undefined, 1000)
// {flightNum: 'LH123', numPassengers: 1, price: 1000}
```
