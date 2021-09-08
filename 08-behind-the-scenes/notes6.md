# The `this` keyword

Very important concept to understand in JS.

## How the `this` keyword works.

👉 **`this` keyword/variable** Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the `this` keyword is used.

It's one of the three components of any Execution Context:

✅ Variable environment
✅ Scope chain
👉 `this` keyword/variable

In general terms, the `this` keyword, always takes the value of the owner in which it's used.

☝️ `this` is **NOT** static. It depeneds on **how** the function is called, and its value is only assigned when the function **is actually called**.

It's very different from a normal value in this regard. If we set x = 5, x will always be equal to 5. `this` depends on the way a function is called.

**Method** 👉 `this` = <Object that is calling the method>

**Simple function call** 👉 `this = undefined`

**Arrow functions** 👉 `this` = <`this` of surrounding function (lexical `this`)>

**Event listener** 👉 `this` = <DOM element that the handler is attached to>

**new, call, apply, bind** 👉 <Later in the course...>

👉 Method Example:

```
const jonas = {
    name: 'Jonas';
    year: 1989;
    calcAge: function(){
        return 2037 - this.year;
    }
};
jonas.calcAge(); // 48
```

Inside the method, use the `this` keyword. Value of the `this` keyword is jonas, because that is the object that's called the method in the last line. And in jonas. we can access everything. `jonas.year` has same effect as writing `this.year`. But writing as `this.year` is a way better solution.

Another way we call functions, is by simply calling them as a simple function. Not as a method, not attached to any object. In this case, the `this` keyword will simply be `undefined`. However, that's only valid for Strict mode. Otherwise, `this` will point to global object, in the browser is the window object.

Arrow functions aren't exactly a way of calling functions, it's an important function to consider. They don't get their own `this` keyword. If you use the `this` keyword in an arrow function, it'll be the `this` of the surrounding function, the parent function. (the lexical `this` keyword) Gets picked up from the outer lexical scope of the arrow function. Never forget this very important property of arrow functions.

Finally if a function is called as an event listener, then `this` will always point to the DOM element that the handler function is attached to. Pretty straightforward.

`this` keyword is usually a source of confusion for beginniners, if you know the rules to make it simpler.

Also important to know what the `this` keyword is not.

☝️ `this` does **NOT** point to the function itself, and also **NOT** to its variable environment.
