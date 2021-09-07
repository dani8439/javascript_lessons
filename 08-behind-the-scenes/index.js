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

const myName = 'Jonas';
if (myName == 'Jonas') {
  console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = 'teacher';
  console.log(x);
}
