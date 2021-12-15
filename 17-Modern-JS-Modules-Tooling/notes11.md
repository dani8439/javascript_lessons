# Review: Writing clean and modern JavaScript

**READABLE CODE**
👉 Write code so that **others** can understand it
👉 Write code so that **you** can understand it in 1 year
👉 Avoid too "clever" and overcomplicated solutions
👉 Use descriptive variable names: **what they contain**
👉 Use descriptive function names: **what they do**

**GENERAL**
👉 Use DRY principle (refactor your code)
👉 Don't pollute global namespace, encapsulate data instead
👉 Don't use `var`
👉 Use strong type checks (`===` and `!==`)

**FUNCTIONS**
👉 Generally, functions should do **only one thing**
👉 Don't use more than 3 function parameters
👉 Use default parameters whenever possible
👉 Generally, return same data type as received
👉 Use arrow functions when they make code more readable (Some people disagree on this)

**OOP**
👉 Use ES6 Classes
👉 Encapsulate data and **don't mutate** it from outside the class
👉 Implement method chaining
👉 Do **not** use arrow functions in methods (in regular objects) - because you won't have access to the `this` keyword.

**AVOID NESTED CODE**
👉 Use early **return** (guard clauses)
👉 User ternary (conditional) or logical operators instead of `if`
👉 User multiple `if` instead of `if/else-if`
👉 Avoid `for` loops, use array methods instead (`map` `filter` `reduce`)
👉 Avoid callback-basked asynchronous APIs

**ASYNCHRONOUS CODE**
👉 Consume promises with async/await for best readability (because `then` requires callback functions and lead to even more nested code)
👉 Whenever possible, run promises in **parallel** (`Promise.all`)
👉 Handle errors and promise rejections
