"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
// with strict mode, aboved mispelled error will generate a Uncaught ReferenceError: hasDriverLicense is not defined to the console.
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// JS is reserving this word for something they may use later as a feature.

const private = 534;
