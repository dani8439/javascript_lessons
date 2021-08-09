"use strict";

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
// with strict mode, aboved mispelled error will generate a Uncaught ReferenceError: hasDriverLicense is not defined to the console.
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// JS is reserving this word for something they may use later as a feature.

const private = 534;
*/

/*
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking a function.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
  // return the value of the function.
}

// need to save or capture the value of the string, into this variable.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// haven't captured the value in a variable.
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

// function declaration

const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  //   const age = 2037 - birthYear;
  return 2037 - birthYear;
}
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);
