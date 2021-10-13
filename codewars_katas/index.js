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
