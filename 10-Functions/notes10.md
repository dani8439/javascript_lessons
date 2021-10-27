# More Closure Examples

Both examples will demonstrate that you don't need to return a function from another function to create a closure.

```
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // 46
```

Proves that the `f()` closes over any variables of the execution context where it was defined. True, even when the variable itself (`f`) wasn't defined inside the variable environment. Still closed over the variable environment of the `g()` function. Closes over the `a` variable, even after `g()` has finished execution. So it can access the `a` variable, and then multiply it by 2, to return 46.

```
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// Re-assigning f function
h();
f(); // 1554

```

Proves that the `f()` that was reassigned closed over the variable environment of `h`. That's how it can access the variable environment of `b` which is set to 777.

Old closure disappears when we reassign things.

Closure never loses connection to variables that existed in their birth place.
It was born again in `g()`, and then reborn in `h()`

Second example.

`setTimeout()` takes two arguments, first is a function that will be executed, second is the time after which it will be in milliseconds.

```
// A callback function, called later (after a second)
setTimeout(function () {
  console.log('TIMER');
}, 1000);
```

```
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
```

Callback function had access to all the variables. Only way that happens is because of the closure. It's how we got access to `perGroup`, and the `n`.

Prove the closure has priority over the scope chain.

Put `const perGroup = 1000;` in global scope. But the function executes the same, uses the variables inside of it, not in the global scope. Only uses it if you remove the `perGroup` variable inside of the closure.
