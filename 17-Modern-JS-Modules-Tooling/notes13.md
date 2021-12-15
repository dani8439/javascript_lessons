# Declarative and Functional JavaScript Principles

Major trend and shift to declarative code and functional coding in JS.

**Imperative VS Declarative code**

Two fundamentally different ways of writing code (paradigms)

**IMPERATIVE**
👉 Programmer explains "HOW to do things"
👉 We explain the computer _every single step_ it has to follow to achieve a result.
👉 Example: Step-by-step recipe of a cake

```
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++)
    doubled[i] = arr[i] * 2;
```

Telling the computer step by step to create an empty array, a counter that starts at 0, increase the counter until it reaches the lenght of the original array, then how exactly to store the results of each position in the array.

**DECLARATIVE**
👉 Programmer tells "WHAT to do"
👉 We simply _describe_ the way the computer should achieve the result
👉 The HOW (step by step instructions) gets abstracted away
👉 Example: Description of the cake. Person has to come up with the recipe on their own.

```
const = [2, 4, 6, 8];
const doubled = arr.map(n => n * 2);
```

Declarative way, we have our array, we tell javascript to map the values in the array to this new array. Everything multiplied by 2. Describing how the computer should achieve the results. Telling it what to do, `map` the original array onto a new array and double all the elements. All the steps we had under imperative programming have been abstracted away.

Important to understand because more and more, htis is how modern JS is written. Declarative paradigm is a very big and popular paradigm, which has given way to as sub-type, **Functional Programming**

**FUNCTIONAL PROGRAMMING**
👉 Declarative programming paradigm.
👉 Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data.
Functional programming and writing declarative code has become the modern way of writing code in the JS world.

👉 Side effect: Modification (mutation) of any data outside of the function (mutating external variables, logging to the console, writing to DOM etc.)

👉 Pure Function: Function without side effects. Does not depend on external variables, doesn't mutate it. Given the same inputs always returns the same outputs. (Because it does not depend on external variables or manipulate them)

👉 Immutability: State (data) is never modified! Instead, state is copied and the copy is mutated and returned. Makes it so much easier to keep track of how the data flows through our entire application. Ultimately allows us to write better code with less bugs, and code that's more readable.

👉 Examples: React, Redux

Can actually mix imperative and declarative programming in our code. Don't have to go 100% in either direction.

**FUNCTIONAL PROGRAMMING TECHNIQUES**
👉 Try to avoid data mutations
👉 Use built-in methods that don't produce side effects.
👉 Do data transformations such as `.map(), .filter(), reduce()`
👉 Try to avoid side effects in functions: this is of course not always possible!

**DECLARATIVE SYNTAX**
👉 Use array and object destructuring
👉 User the spread operator (`...`)
👉 User the ternary (conditional) operator
👉 User template literals
