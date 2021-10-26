# The `bind` method

Just like the `call` method, the `bind` method allows us to manually set the `this` method for any function call. Difference is that `bind` doesn't immediately call the function. It returns a new function where the `this` keyword is bound. It's set to whatever value we pass into `bind`.

Continuing with airline example for past lecture. Say we want to use the `book()`function for eurowings all the time. In last lecture, set `this` keyword to eurowings. But now can use the `bind` method to set the `this` keyword to eurowings.

```
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

// Steven Williams booked a seat on Eurowings flight EW23
```

the `bookEW` looks like a normal function call again, it already has the `this` keyword set in stone basically. So no longer need to specify `this` keyword. Parameters back to being flight number and name.

Works perfectly, returns `Steven Williams booked a seat on Eurowings flight EW23`

It's really, really useful. Can do the same for all airlines. Create a function for each airline.

```
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
```

It's GREAT, but we can take even further. In the `call` method we can pass multiple arguments beyond the `this` keyword, essentially all the arguments will be set in stone. Can do the same with `bind`.

Can create a function with `bind` for a specific airline and specific flight number.

```
const bookEW23 = book.bind(eurowings, 23);
```

When look at original `book()` function saw it needed a `this` and a flight number. Now it has both, and only have to pass in the `name`.

```
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Eurowings flight EW23
```

`bind` makes things even simpler. Could take it even further, and define the passenger name, so the function would only book a flight for that passenger on flight 23. But that would take it a little too far.

What we did here, specify parts of arguments beforehand is a common practical called **partial application**. Essentially a partial application means that a part of the arguments of the original function are already applied. Already set. That's exactly what the `bookEW23()` function is. It's the `book()` function but with 23 already defined.

There are also other situations where we can use the `bind` method and where it is very useful.

### Another example is using objects together with event Listeners.

```
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  // add a new plane whenever we click on Buy New Plane button on page.
  this.planes++;
  console.log(this.planes);
};

// Callback function
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // returns NaN
```

At the moment clicking on the button returns `NaN`. That is because `this.planes` is `NaN`, because the `this` keyword is the button element.

In an eventListener, the `this` keyword always points to the element that the handler is attached to. So `lufthansa.buyPlane` is the handler function, attached to `buy` button. Inside of the handler function/event listener, the `this` keyword points to the button element. Have yet another proof that the `this` keyword is set dynamically.

If called `lufthansa.buyPlane()` outside, the `this` would be lufthansa, and return 301.

In this handler function, we still need the this keyword to point to the lufthansa logic itself, otherwise logic wouldn't work. Means we need to manually define the `this` keyword. Should we use the `call` or the `bind`. Need to pass in a function, and not call it. `call` method, calls a function. Therefore, need `bind` as it will return a new function.

```
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
```

the `this` keyword is lufthansa.

And when click on it, should see the this object, and the number increasing.

### Partial Application (big use case for bind method)

A lot of the time with partial application, we're not even interested in the `this` keyword. But still use `bind` for it. Partial application means we can preset parameters.

Say this is the general function for adding tax:

```
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220
```

But now lets say, that there is one tax we use all the time. Let's create a function for that.

```
const addVAT = addTax.bind(null, 0.23)
```

pass in `null` because we don't care about the `this` keyword.

`const addVAT = addTax.bind(null, 0.23)` is the same as writing it out longer like: `addVat = value => value + value * rate;`

Order of arguments is important. Want things to match (whatever is supposed to be first is first). Could argue what we've done could have been done with default parameters, but this is different. Because this is greating a more specific function based on a more general function. Using `bind` really gives us a new function from the `addTax()` function.
