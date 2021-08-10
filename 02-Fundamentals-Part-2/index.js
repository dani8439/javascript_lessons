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

/*
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
*/

/*
// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Say want to calculate how many years person has left until retirement.
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/*

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // calling one function inside of another function
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*

// parameter is like a local variable to each function. birthYear in both functions is not the same.
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    // code is not reached as it's after the return statement have to move it before for it to print to console.
    // option + up arrow moves line up. ∂∂∂∂∂∂
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

*/
