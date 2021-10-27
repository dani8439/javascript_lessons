# Closures

Very hard JS concept to understand for some people. Closures bring execution context, scope, and scope chain together.

What is a closure? It's not a feature we explicitly use. We don't create them manually like we do a new array or function. It simply happens automatically in certain situations. Just have to recognize certain situations.

```
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
```

Before we run the `booker` function, our code `secureBooking()` is running in the Global Execution Context. That's the only thing in there. The Global Scope only contains `secureBooking()`

Then when `secureBooking()` is called, a new execution context is put on top of it on the execution stack. Remember each execution context has a variable environment, which contains all it's local variables. In this case, it only contains the `passengerCount = 0`. This variable environment is also the scope of the function. So the **scope chain**'s of this execution context has passengerCount in local scope, but also has access to the parent scope.

In the next line of `secureBooking()` a new function is returned, and will be stored in the `booker` variable, so the global context now contains the `booker` variable.

What happens when the `secureBooking()` returns? It's EC pops off the call stack and disappears. The `secureBooking()` has done it's job, and has finished execution.

For now that's all we did. All we did was analyze call stack and scope chain as we call the `secureBooking()` function. Didn't see the closure yet.
