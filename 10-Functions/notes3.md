# First-Class and Higher-Order Functions

Fundamental property of JavaScript is that it has First Class Functions. Enables us to write Higher-Order functions.

## First-Class Functions

- JavaScript treats functions as **first-class citizens**
- This means that functions are **simply values**
- Functions are just another **"type" of object**

Why does JS work this way? Because functions are just another type of object in JS. Since objects are values, functions are values too. Since functions are values, there are a bunch of interesting things we can do with them.

EX:
**Store functions in variables or properties:**

```
const add = (a, b) => a + b;

const counter = {
    value = 23
    inc: function() { this.value++;}
}
```

`(a, b) => a + b` and `function() { this.value++;}` are function values.

- **Pass functions as arguments to OTHER functions:**

```
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet)
```

- **Return functions FROM functions**

Remember that functions are objects. Many types of objects in JS have methods, like Array methods. There are also function methods, methods we can call on functions. Sounds a bit crazy. (`bind()`) method is an example of that.

- **Call methods on functions**

```
counter.inc.bind(someOtherObject);
```

## Higher-Order Functions

- A function that **receives** another function as an argument, that **returns** a new function, or **both**
- This is only possible because of first-class functions

1. **Function that receives another function**

```
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);
```

`.addEventListener()` is the higher order function, because it receives another function `greet()` as a function. Call the function that is passed in a **callback function.** That is because the function will be called later by the higher order function. In this case, `addEventListener()` will call the `greet()` function once clicked, and once it's ready.

2. **Function that returns new function**

```
function count() { // Higher Order function
    let counter = 0;
    return function() { // returned function
        counter++;
    }
}
```

First Class Functions and Higher Order Functions are not the same thing.
F.C. functions is just a feature that a programming language has, or doesn't have. All it means is that all functions are values. There are no F.C. functions in practice, just a concept. There are however, Higher-order functions in practice, which are possible because the language supports First Class Functions. Subtle difference but worth noting if you want to talk JS like a JS master.
