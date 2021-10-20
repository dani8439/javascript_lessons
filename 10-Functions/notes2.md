# Functions: How Passing Arguments Works: Value VS. Reference

Goes back to video of Primitives VS. Objects (Primitive Types VS. Reference Types)

Important to understand how Primitives and Objects work within context of functions.

Usually bad practice to change the parameters of a function, just doing so for the checkIn() function example.

```
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24639479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24639479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //LH234
console.log(jonas); //{name: 'Mr. Jonas Schmedtmann', passport: 24639479284} Jonas object has been changed.
```

`flight` is a primitive type, a string. When it's passed in as `flightNum` it's a copy, not the original. The same as writing:

`flightNum = flight`

Copies one value to the other. Therefore as it was changed inside in `flightNum` it wasn't changed in `flight`. Same thing in primitives VS. reference types lectures.

What about the `jonas` object?
Called `passenger` when passed in? When we pass a reference type to the function, what is copied is the reference object to the memory heap. Same as doing: `const passenger = jonas` When we copy an object in this way, just copying the reference to the memory heap, both point to the same object in memory. So as we manipulate it in the function, it's the same as manipulating the object itself, as they both point to the same object in the memory heap.

Passing a primitive type to a function is the same as creating a copy outside of the function, the value is simply copied. On the other hand, when we pass an object to a function, it's the same as passing the object itself. Need to be careful with this behavior and keep it in mind, because it can have unforeseeable consequences in large code bases.

In programming two terms used in regard to functions:

- Passing by Value
- Passing by Reference

JavaScript **does not** have passing by reference, only passing by value, even if it looks like it's passing by reference. Other languages like C++ where you can pass a reference to any value, instead of the value itself. Works even with primitives.

Confusing because as we do with objects, we do pass by reference, although that reference is still a value. Just a value that contains a memory address. **We pass a reference to a function, but we do not pass VIA a reference.**
