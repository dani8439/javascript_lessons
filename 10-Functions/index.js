'use strict';

//////////////////////////////////////
// Default Arguments
/*

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // can use short circuiting to our advantage as we know these are falsy values.
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

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

createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}
*/

//////////////////////////////////////
// How Passing Arguments Work
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24639479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24639479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //LH234
console.log(jonas); //{name: 'Mr. Jonas Schmedtmann', passport: 24639479284} Jonas object has been changed.

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// Real Life example of two functions manipulating same object, causing problems.
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPassport(jonas); // Check In
checkIn(flight, jonas); // Wrong Passport
*/

////////////////////////////////////////////////
// First-Class and Higher-Order Functions
/*
const oneWord = function (str) {
  // replaces any spaces
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  // destructuring, and the REST pattern
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const addSpaces = function (str) {
  return str.replace(/ /g, '  ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', addSpaces);

// JS uses callbacks all the time.
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
// get 3 elements wavings in the console, because forEach will be called for each element.
*/

///////////////////////////////
// Functions returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

// A function that we can immediately call
greet('Hello')('Jonas'); // Hello Jonas

/// Challenge rewrite function as an arrow function

const greetArr = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

// He rewrote as:
// It's a bit more confusing written as arrow functions.
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
*/

/////////////////////////////////
// The Call and Apply Methods

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

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work.
// book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings); // {airline: 'Eurowings', iataCode: 'EW', bookings: Array(1)}

book.call(lufthansa, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH239
console.log(lufthansa); //{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ}

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air lines flight LX583
console.log(swiss); // {airline: 'Swiss Air lines', iataCode: 'LX', bookings: Array(2)}

// better way: pass in the this, and then pass in the spread operator to take the data out of flightData.
book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams')
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Eurowings flight EW23

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  // add a new plane whenever we click on Buy New Plane button on page.
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane(); // 301

// Callback function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application (big use case for bind method)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
// same as writing:
// addVat = value => value + value * rate;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const newTax = function (tax) {
  return function (value) {
    return value + value * tax;
  };
};

const addVAT2 = newTax(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
