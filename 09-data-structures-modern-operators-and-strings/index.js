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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  /// other ingredients are optional, rest parameters are perfect. Work a little like destructuring, the ... will collect all the rest of the arguments into an array
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////
// Looping Arrays the For-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
  // Outputs 1: Focaccia, 2: Bruschetta etc etc
}

// console.log([...menu.entries()]);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
// Destructuring original array
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
// REST syntax, left of operator not the right... duh.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
// SPREAD operator to extend both player arrays
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
// Nested destructuring
// Destructure odds object.
// const { odds } = game;
// console.log(odds);
const {
  // x:draw because want to take out x, and rename as draw
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
// REST parameters will help specify that the number of arguments being sent in, doesn't matter. Will aggregate all incoming arguments into one array
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich'); // 4
printGoals('Davis', 'Muller'); // 2
printGoals(...game.scored);

//7.
// Use a logical operator
// will not short circuit on true with && operator, will keep evaluating, unlike with OR that short circuits on true
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');
*/

/////////////////////////////////////
/// Nullish Coalescing Operator
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or ')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
*/

////////////////////////////////////////////////////////////////////////////
/// Short Circuiting (&& and ||)
/*
// Logical Operators. Can use ANY data type, can return ANY data type, they do something called short circuiting or short circuit evaluation.
console.log('--------- OR ---------');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas as '' is falsy
console.log(true || 0); // true
console.log(undefined || null); // null as undefined is falsy, though null is a falsy value too

console.log(undefined || 0 || '' || 'Hello' || 23 || null); /// Hello, because Hello is first truthy value in this chain of evaluations. Or operation, result is true if at least one operand is true. JS doesn't even have to look at other values. Result will be true anyway. So will short circuit and return the first result.

// both will not work if number of guests is 0, because 0 is falsy
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------- AND ---------');
console.log(0 && 'Jonas'); // 0 because 0 is falsy
console.log(7 && 'Jonas'); // Jonas -- as both are true

console.log('Hello' && 23 && null && 'jonas'); // null as it short circuits at null as it's falsy

// Practical example
// Pretending that we don't know if orderPizza exists, if it exists, then we execute it. But can do in a simpler way with knowledge we've gained about the AND operand
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// if restaurant.orderPizza is undefined and doesn't exist, it will short circuit and return nothing. If it does exists, and is a truthy value, then the second part will be evaluated, so can then call the function.
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
///////////////////////////////////////////////////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring
///// Rest Pattern
// Use case of building arrays.
// SPREAD because on RIGHT side of =.
const arr = [1, 2, ...[3, 4]];

// However can use on left side of operator for destructuring. The REST Syntax
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// can use three dots on both sides of assignment operator
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // creates object containing only friday and thursday, already took saturday into its own variable before.

// 2) Functions
// How can we add as many arguments as we want without specifying number of arguments? Can use the REST parameters/syntax
// The Rest syntax is taking multiple values, and packing into one array
// Can now accept any number of parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// to take all the numbers and add them and pass in as arguments, can pass in with spread operator, they will then enter add function, and be immediately collected by the rest parameters. Unpack the values with spread, then pack back into with an array in the REST patern.
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach'); // all the remaining ingredients will be packed into an array.
restaurant.orderPizza('mushrooms'); // remaining arguments stored into an empty array
// Rest parameters serves to collect all the remaining/unused parameters
*/

/////////////////////////////////////////////////////////////////////////////
// common in JS to pass in object of options to a function. Can also destructuring right in function arguments right away.
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

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
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // can be useful to have default values.
// // restaurant.menu; // undefined, as no property called menu. So can set default values.
// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables when destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // can't say const, or let, as already declared. Want to mutate the variables.
// // writing as below will throw an error, because when you start with curly braces, JS expects a code block. Since we cannot assign anything to a code block, when it's assigned, get an Uncaught SyntaxError. Trick is to wrap everything in parentheses.
// // {a, b} = obj
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Object destructuring.
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// abstract it further
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////////////////////////
/*
// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// creating a completely new array.
console.log(newMenu);

// Two use cases of spread operators, creating shallow copies of arrays, and to merge arrays together.
// Copy array == shallow copy, similar to Object.assign()
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str);
// console.log(`${...str} Schmedtmann`) throws an error, not a place that expects multiple values separated by a comma

// real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);
// old way to write it.
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// will write 3 elements of the array separated by commas
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// can do shallow copies of objects too, like with arrays.
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
