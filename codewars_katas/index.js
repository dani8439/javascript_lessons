"use strict";

/// Stop gninnipS My sdroW!
function spinWords(str) {
  // splits the string on spaces
  let strArr = str.split(" ");
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    // when the stringArrays are 5 characters or more, split on the spaces, reverse the characters, and then join back together
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split("").reverse().join("");
    console.log(strArr);
  }
  return strArr.join(" ");
}

/// area or perimeter
const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l === w) {
    return l * l;
  } else {
    return (l + w) * 2;
  }
};

// squaring an argument
function square(arg) {
  return arg * arg;
}

// Multiples of 3 or 5 // solution 1
function solution(number) {
  let arr = [];
  let multiple = [];

  // turn the number into an array, [0, 1, 2, 3, 4...etc]
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }

  // check to see if the number is a multiple of 3 or 5 using modulo operator, then push it onto multiple array
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i);
    }
  }

  // sum the total of the multiple array
  const sumTotal = multiple.reduce((sum, num) => sum + num, 0);

  return sumTotal;
}
