# Immediately Invoked Function Expressions (IIFE)

Sometimes in JS we need a function that's only executes once, and then never again. Basically a function that disappears right after it's called once. Need this later with async/await.

Could do it by creating a function and only executing it once. But, we can run it again if we want to, there's nothing stopping us from calling it again. Not what we want to do.

We want to run a function immediately and not have to save it anywhere. To do that, write the function expression itself, without assigning it to any variable. If we try to run it, we'll get an error. Can trick JS into thinking it's just an expression, by wrapping everything in parentheses. Transform the statement into an expression.

```
(function () {
  console.log('This will never run again');
});
```

Also the function didn't execute, we didn't call it. To call it, we have to have parentheses after the first set.

```
(function () {
  console.log('This will never run again');
})();
```

It's really just a function expression we call. It's why it's called an IIFE. Immediately invoked function expression.

Same would work for an arrow function as well.

```
(() => console.log('This will ALSO never run again'))();
```

Why was this pattern invented? Already know functions create scopes. One scope does not have access to variables in an inner scope. Ex, in the global scope, have no access to what's defined in the scope of any of the functions.

Scope works in --> out, not out in.

EX:

```
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

console.log(isPrivate);

// Uncaught ReferenceError: isPrivate is not defined
```

All data defined inside a scope is private. It is **encapsulated** inside of the function scope where it's created. Data encapsulation and data privacy are very important. A lot of times we need to protect our variables from being overwritten in other places.

It's important to write variables, and scopes are a good way to do it. This is why IIFE's were invented, and then adapted by other developers.

What also creates a scope in ES6, variables created with `let` or `const` inside of a block. Not available outside. But those created with `var` are. Created with `var` ignores the block.

```
{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(isPrivate); // error
console.log(notPrivate); // 46
```

This is why now in modern JS, IIFE's aren't used that much anymore. If you want to create a scope for data privacy, can just create a block. On the other hand, if you need to execute a function just once, an IIFE is the way to go.
