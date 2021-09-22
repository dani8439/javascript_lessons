'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring can declare all three variables at same time
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// without destructuring, in order to switch categories order, would have to do it like this:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// with destructuring, this is how we rearrange things
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Can have a function return an array, and immediately destruct the results into variables.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// destructuring inside of descruturing in order to get to the nested array.
const [i, , [j, k]] = nested;
console.log(i, j, k);

// can set default values for variables when extracting them.
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
// returns undefined for position 2.
// but can set default values, set them all to 1. So if no element, default value of 1.
