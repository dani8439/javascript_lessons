# Arrow Functions

Third type of function, added in ES6

A special form of function expression, that is shorter and faster to write.

Composed of what we want, then an arrow, then write what we want to return. Ex:

`birthYear => 2037 - birthYear;`

Want to store it in a variable so we can use it. So:

`const calcAge3 = birthYear => 2037 - birthYear`

It's a value we assign to a variable.

Don't need the curly braces, and the return happens implicitly. Value will automatically be returned without us needing to write a return keyword.

This is the simplest form when only one parameter, and one line of code. Gets more complex with more parameters and more code.

Need curly braces, and to write the return word explicitly.

```const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
```

If we have multiple parameters, then need to wrap parameters in parentheses.

Should I use arrow functions for everything? No. But, it's also complicated. There's another fundamental difference between arrow function, and other functions. Arrow functions do not get a `this` keyword. (Topic for much later)
