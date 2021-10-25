# Functions Accepting Callback Functions

Functions that accept other functions as inputs.

A higher order function takes in another function as an argument.

Only pass in the function value, not calling it with `upperFirstWord()`, only written as `upperFirstWord` in example.

Will call the function inside of the higher order function.

EX:

```
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);


  console.log(`Transformed by: ${fn.name}`)
};

transformer('JavaScript is the best!', upperFirstWord);

// Returns
Original string: JavaScript is the best!
Transformed string: JAVASCRIPT is the best!
Transformed by upperFirstWord
```

Functions have properties that we can call on them, in the case of `${fn.name}`

Can call `.name` on any function in JavaScript.

Calling the `transformer()` function, into that function we are passing the callback function (`upperFirstWord` and `oneWord`). We don't call them ourselves, we tell JavaScript to call them later. The `transformer` function will call the callback functions.

It's the exact same idea of the `.addEventListener()` function. Callback function in the case of `addEventListener()` is called the event Handler or the event listener.

Conceptually, the `high5` is the callback function, and the `addEventListener()` is the higher order function.

There are many many other examples in the JS language. Callback functions are used all the time.
(say in the `forEach()` method.)

### Why are Callback functions used all the time in JS and why are they so helpful?

- They make it very easy to split up our code, into more reusable and interconnected parts. Rather than one big function, can separate them out.
- Callback functions allow us to create abstraction.

**What does that mean?**
What we did in our code example was to create a level of abstraction. Abstraction is something really important in programming. Basically, what it means is that we hide the detail of some code implementation as we don't really care about that detail. This allows us to think about problems at a higher, more abstract level. This is why it's called an abstraction.

Coming back to the `transformer()` function, all it wants to do is transform a string, but it doesn't care how it's done. So we could have taken the code for `upperFirstWord()` or `oneWord()` and put it directly into the function, but instead we abstracted them away from the function, into their own functions. So the `transformer()` is only concerned with transforming the string, and delegates the work to the lower level functions.
