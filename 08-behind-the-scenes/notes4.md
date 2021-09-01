# Scope and the Scope Chain

## What is Scoping?

**Scoping** Controls how our program's variables are **organized** and **accessed** by the JS engine. "Where do variables live?" or "Where can we access a certain variable, and where not?".

In JS have something called **Lexical Scoping**. Means that the way variables are organized and accessed is entirely controlled by the **placement** of functions and blocks in the code. For ex, a function written within another function, has access to the scope of parent function.

**Scope** is the space or environment in which a certain variable is **declared**. Variable environment in case of functions. There is **global** scope, **function** scope, and **block** scope.

**Scope of a variable** the entire region of our code where a certain variable can be **accessed**.

Scope is not the same as scope of a variable. There are subtle differences.

## The 3 different types of scope in JavaScript

**Global Scope**

```
const me = 'Jonas';
const job = 'teacher';
const year = 1989;
```

- For variables declared outside of **any** function or block.
- Variables declared in globals cope are accessible **everywhere**

**Function Scope**

```
function calcAge(birthYear){
    const now = 2037;
    const age = now - birthYear;
    return age;
}

console.log(now); // Reference Error
```

- Variables are accessible only **inside function, NOT** outside.
- Also called local scope.

Outside of the function, variables aren't accessible at all. So `now` is not available outside of the `calcAge()` function. Can't find it. So there's a ReferenceError.

**Block Scope (ES6)**

```
if (year >= 1981 && year <= 1996>) {
    const millenial = true;
    const food = 'Avocado Toast`'
}

console.log(millenial) // ReferenceError
```

- Variables are accessible only **inside block** (block scoped)

- **HOWEVER**, this only applies to **`let`** and **`const`** variables.

- Functions are **also block scoped** (only in strict mode)

Traditionally, only functions used to create scope in JS. But in ES6, blocks do as well. (Anything between curly braces). Only `let` and `const` are restricted to the block that they are created. If created variable using `var` in the block, that would still be accessible outside of the block, scoped to the current function, or the global scope. `Var` is function scoped. `Var` only cares about functions, ignores block.

This means functions defined inside a block, are only accessible inside that block.

## The Scope Chain

```
const myName = 'Jonas';

function first() {
  const age = 30;

  if (age >= 30) {
    // true
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';

    console.log(`${myName} is a ${age}-old ${job}`);
    // Jonas is a 30-year old teacher
  }
}
```

Global scope (Considering only variable declarations, no functions)
`myName = 'Jonas'`

Inside of that, have a scope for the `first()` scope.
`age = 30`
`var millenial = true`
`myName = 'Jonas'`

Inside of that, is the `second()` scope.
`job = 'teacher'`
`age = 30`
`millenial = true`
`myName = "Jonas"`

Nested structure of scopes, with one scope inside of another. Inside of the second function have line of code that need the `myName` variable and the `age` variable. Both are not declared inside the scope of second function. How?

Secret is every scope always has access to all the variables from all the outer scopes. All it's parent scopes.

So `age` can be accessed within the second() function. `first()` has access to the `myName` variable, which then makes it available to the `second()` function scope too.

(All this applies to function arguments too). This is essentially how the scope chain works. If one scope needs to use a certain variable, but can't find it in the current scope, it'll look up to the parent scope. If it can, it will use it. If it can't find it, will present an error. This is called **Variable lookup in scope chain**

These variables are not copied from one scope to another. Scopes just lookup in the chain, and if they find something, they use it. DOES NOT WORK IN REVERSE. A certain scope will never have access to the inner scope.

For ex `first()` scope doesn't have access to the `job` variable within the `second()` scope.

Once all this is in place, the sentence can be printed out to the console.

Still have one more scope left, that's within the `if` block. Not only functions have scopes, but block's. But it only works for `let` and `const` variables. `Millenial` variable is scoped to the `first()` function scope. It's declared with `var` so it's not block scoped, doesn't apply at all. Function scoped, not block scoped.

`if` block scope
`decade = 3`
`age = 30`
`millenial = true`
`myName = "Jonas"`

One of the fundamental things need to keep in mind about `let, const, var`.

If `millenial` variable is in the first function scope, second function scope has it too.

In the `if` block scope, get access to all outer scopes too. Variables in the global scope are accessible from everywhere, always at the top of the scope change. Call variables in the global scope, global variables.

The `if` block scope doesn't get access to any variables from the `second()` scope. Same other way around. Because of lexical scoping. `second()` is below the `first()` None is written inside one another, both child scopes of the `first()` function. Can even say they are siblings, so cannot have access to each others variables. (`decade` and `job` are not available to each other).

## Difference between the Scope Chain and the Call stack

```
const a = 'Jonas';
first();

function first() {
    const b = 'Hello!';
    second();

    function second(){
        const c = 'Hi!';
        third();
    }
}

function third() {
    const d = 'Hey!';
    console.log(d + c + b + a);
    // ReferenceError
}
```

Call stack for this example looks like this:

third() EC
`d = "Hey!"`

---

second() EC
`c = "Hi!"`

---

first() EC
`b = "Hello!"`
`second = <function>`

---

Global EC
`a = "Jonas"`
`first = <function>`
`third = <function>`

(Order in which functions were **called**)

**Scope Chain**

Global Scope
`a = "Jonas"`
`first = <function>`
`third = <function>`

first() scope
`b = "Hello!"`
`second = <function>`
`a = "Jonas"`
`first = <function>`
`third = <function>`

`first()` scope gets access to all the other variables and functions because of the Scope Chain. Scope chain has nothing to do with the order of the EC's in the call stack. Scope chain does get the variable environments from the call stack. But order of function calls is not relevant to the scope chain at all.

`second()` scope
`c = "Hi!"`
`b = "Hello!"`
`second = <function>`
`a = "Jonas"`
`first = <function>`
`third = <function>`

Scope chain in a certain scope is equal to adding together all the variable env's of all the parent scopes. This is how scope and the scope chain are built into the JS engine behind the scenes.

In the second() function, try to call the third() function. Why does that work? Because the third() function is in the scope chain of the second function scope. It's a function in the global scope. Therefore, it's accessible everywhere. Of course this creates a new scope along the scope chain.

`third()` scope
`d = "Hey!" `
`a = "Jonas"`
`first = <function>`
`second = <function>`

Trying to access variables d, c, b, and a. D is right there. Variable c is not there in the local scope, looks up in the scope chain, but it's not there. Because c is defined in the second function. No way the third function can access variables defined in the second function. This is true, even though the second function called the third. Order which things are called doesn't effect scope chain at all. Both b and c cannot be found in the third scope, or within the scope chain.

## Summary

👉 Scoping asks the question, "Where do variables live?" Or "Where can we access a certain variable, and where not?"

👉 There are 3 types of scope in JS: the global scope, scopes defined by functions, and scopes defined by blocks.

👉 Only `let` and `const` variables are block-scoped. Variables declared with `var` end up in the closest function scope.

👉 In JavaScript we have lexical scoping, so the rules of where we can acceses variables are based on exactly where in the code functions and blocks are written.

👉 Every scope always has access to all the variables from all its outer scopes. This is the scope chain!

👉 When a variable is not in the current scope, the engine looks up the scope chain until it fings the variables it's looking for. This is called variable lookip.

👉 The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.

👉 The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes.

👉 The scope chain has nothign to do with the order in which functions were called. It does not affect the scope chain at all!
