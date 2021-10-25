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
const oneWord = function (str) {
  // replaces any spaces
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  // destructuring, and the REST pattern
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time.
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
// get 3 elements wavings in the console, because forEach will be called for each element.
