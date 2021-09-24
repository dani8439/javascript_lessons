'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // immediate destructuring. Can also set defaults if it cannot be destructured.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

// common in JS to pass in object of options to a function. Can also destructuring right in function arguments right away.
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

/*
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
*/

/* Object Destructuring */
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// can be useful to have default values.
// restaurant.menu; // undefined, as no property called menu. So can set default values.
// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables when destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// can't say const, or let, as already declared. Want to mutate the variables.
// writing as below will throw an error, because when you start with curly braces, JS expects a code block. Since we cannot assign anything to a code block, when it's assigned, get an Uncaught SyntaxError. Trick is to wrap everything in parentheses.
// {a, b} = obj
({ a, b } = obj);
console.log(a, b);

// Nested Object destructuring.
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// abstract it further
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
