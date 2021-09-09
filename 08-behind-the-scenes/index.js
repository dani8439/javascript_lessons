'use strict';

// defined in global scope. Here in top level code. Function creates it's own scope, equivalent to variable environment of it's execution context
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // can't find age in current scope. Goes up one, and finds it in the variable we created in teh parent scope. Same thing goes for birthYear.
    // does variable lookup for firstName too, to the global level.
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // JS always look for variable in current scope. So can define a variable that's already been defined in another scope. Won't throw an error. Won't look it up. Outside of the block scope, though it's still from the parent scope. In fact, they are completely different variables, that happen to have the same name. Also why you can have functions with the same parameter names.
      // creating NEW variable with same name as outer scope's variable.
      const firstName = 'Steven';

      // reassigning outer scope's variable.
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenail, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // error logging it outside of the block. const and let variables are block scoped. Only available inside block they are created. Not true with var. var variables don't care about blocks at all.
    // console.log(str);
    console.log(millenial);
    // functions are also block scoped. Get error when calling add function outside of the block. Only true for strict mode though.
    // console.log(add(2, 3));
    // can see it, because manipulated an existing variable within the child scope. If we had created it as a const, then it would be same situation as firstName. It would be a new output variable, that just happens to have the same name. The console.log below, would revert to the original output.
    console.log(output);
  }
  printAge();
  return age;
}

// global variable
const firstName = 'Jonas';
calcAge(1991);
// cannot access it outside of the function. Scope is one way, out in, not inner to outer. Same thing goes for printAge(). No access to variables defined in any other scope, in the global scope
// console.log(age);
// printAge();
*/

// const myName = 'Jonas';
// if (myName == 'Jonas') {
//   console.log(`Jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }

/*
// Hoisting with Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
// results in undefined. Var values are hoisted, but hoisted to undefined
let job = 'teacher';
// let, cannot access Uncaught ReferenceError. in the TDZ
// TDZ starts from beginning of the scope, until where it's defined. so from line 61 to line 67.
// Get the same error for const below.
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// we actually get the result of 5. Able to call the function declaration before it was defined in the code.
// console.log(addExpr(2, 3));
// Cannot access addExpr before it's initialized. With a function expression. As it's a const variable too, and in the TDZ. Simply assigning a function value to this variable. As the variable was defined with const, in a TDZ.
// console.log(addArrow(2, 3));
// Same happens with the arrow.
console.log(addArrow); // undefined

function addDecl(a, b) {
  return a + b;
}

// if change both from const to var, still get an error, but different error UncaughtType Error. Any variables declared with var will be hoisted and set to undefined. changing functions to var, you are then trying to call undefined(2,3) then get told, it's not a function. Have changed addExpr to an undefined variable essentially. Told it's not a function.
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// only function you can use before declaring is a function declaration.

// Example
// What should happen, is that as numProducts = 10, that's not a falsy value, so deleteShoppingCart() shouldn't be called. Except, because of hoisting, and defininig with var, var is initialized as undefined, which is a falsy value, so that then evaluates, triggers the execution of the if block, and calls the deleteShoppingCart() function.

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

/// conclusion as to a best practice, DON'T USE VAR to declare variables. Use CONST and let when necessary. Should declare variables at the top of each scope. Finally, always declare your functions first, and only use after the declarations. Use it this way for all types of functions. This way is cleaner, and best practices.

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
// testing if x is a property of the window object. And it is.
console.log(y === window.y); // false
console.log(z === window.z); // false

// window is the global object of JS in the browser
// when declare with var, we can then find our declared variable on the window object. Doesn't happen with let and const. 
*/

/*
// window object in the global scope
console.log(this);

// this is undefined. Because in strict mode. In sloppy mode, would be the global object - the window object
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

// this is window. Lexical this. Uses the this of it's parent function/parent scope
const calcAgeArr = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArr(1980);

// method call, this keyword inside of the method, will be the object calling the method. jonas is the owner of the method. Therefore inside of calcAge, this is jonass
// this is the jonas object
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

// this kewyord will point to the object calling the method. this keyword will not simply point at the object in which we wrote the method. this keyword will point to jonas, is because jonas was the object calling that method.

const matilda = {
  year: 2017,
};

// remember a function is just a value. Can do this:
// copy calcAge method from jonas to matilda. Called "Method borrowing" coped/borrowed method from one to the other

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
// this now points to matilda

// can take further by takiing function out of jonas object
// possible because a function is just a value

const f = jonas.calcAge;

// what implications does this have for the this keyword? Now this is undefined. Happens because f function is just a regular function call, not attached to any object. No owner of the f function. Therefore, just a regular function call, therefore this keyword is undefined. like in const calcAge(). Subtle difference in code.
f();
*/

// don't use var.
// also never ever use an arrow function as a method.
// var firstName = 'Matilda';

// const jonas = {
//   // this isn't a code block, it's an object literal
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   // hey undefined! Arrow function doesn't get a this. Parent scope is global scope.
//   // change it to a normal function and it would work.
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();

// all of this can become pretty dangerous in case we use var to declare variables, as var creates properties on the global object
// window object
// console.log(this);
// console.log(this.firstName); // when we try to acess a property on an object that doesn't exist, don't get an error but simply get back undefined.

// function inside of a method.

// const jonas = {
// this isn't a code block, it's an object literal
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

// Solution 1 Self

//     const self = this; // also can be called self or that.
//     const isMillenial = function () {
//       // this keyword is undefined
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     // is a regular function call, even though it happens inside of a method. Inside of a regular function call, this keyword must be undefined. Therefore it's undefined above. Just as if the function was outside the method. if copied code, and pasted outside, would get exact same result. It's not really a bug, just how the this keyword works. Clear rule of a function call being set to undefined. Two solutions to the problem, first solution is to use an extra variable called self set to this outside of the function.
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

/*
// more modern solution than self, is to use an arrow function.
// Solution 2, use an arrow function. Doesn't have it's own this keyword.
// works because this keyword uses from parent scope. Arrow function inherits this from parent scope.
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 2 An Arrow Function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// Arguments Keyword.
// Functions also get access to an arguments keyword. Just like the this keyword, arguments only available in regular functions

// Arguments keyword -> useful when have more arguments than specified. Makes an array.
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 17);

// arrow function doesn't get this arguments keyword.
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// get an error. arguments keyword exists only in regular functions (function declarations or function expressions, not in arrow functions)
addArrow(2, 5, 8);
*/

// Primitive Values example
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

// Reference Values example
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
