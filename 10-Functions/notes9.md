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

Now that we understand how the `booker()` function was created, let's call it and use it. It doesn't need any arguments, no list of parameters.

```
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
```

`booker()` function was able to update passenger count from 1 to 2 to 3. But how is it possible? This function has already finished it's execution. So it's EC is no longer on the stack (as we saw on the slide). But still the inner function is still able to access the passenger count variable that's inside of the function that no longer exists. What makes this possible is a closure. Appreciate how strange this actually is.

The `booker()` function exists in the global environment/scope. The environment in which it was created, is no longer active it's gone, but somehow, the function still has access to the variables present when it was created, in particular the `passengerCount` variable. That's what the closure does.

Can say a **closure** makes a function remember all of the variables that existed at the functions birth place essentially. `secureBooking()` is the birthplace of the `booker()` function. The function remembers everything there when it was created, including `passengerCount`.

Moving back to the slide, most important thing to note is that the Execution Context of `secureBooking()` is no longer on the call stack.

Now it's time to run the `booker()` function. Note that the booker function is located in the global scope.

First thing that's going to happen, is that a new EC is created and put on top of the call stack. The variable environment in that context is empty, because no variables declared inside the function.

What about the scope chain? Since `booker()` is in the global context, it's a child scope. But, how is it going to access the `passengerCount` variable? It's nowhere to be found in the scope chain? Where we start to unveil the secret of the closer. The secret is this. **Any function always has access to the variable environment of the execution context in which the function was created.** In the case of `booker()` it was born in the EC of `secureBooking()` which was popped off the stack. Therefore the `booker()` function will get access to that environment, which has access to the `passengerCount` variable.

👉 A function always access to the variable environment (VE) of the execution context in which it was created.
👉 **Closure** VE attached to the function, exactly as if was at the time and place the function was created.

What matters the most is that the `booker()` function has access to the `passengerCount` variable, because it's defined in the scope where it was created. The scope is preserved through the closure, even when the EC has been destroyed. Means it still lives in the engine.

Can say the `booker()` function closed over it's parent's scope, the variable environment, this closed over variable environment stays with the function forever. Will carry it around, and still with it forever. Thanks to the closure, a function does not lose connection to variables that existed at it's birthplace.

So the function attempts to increase the passengerCount variable, but it's not in the current scope. So JS immediately looks into the closure and see if it can find the variable there. It does this before looking at the scope chain. Even if there was a global variable set to 10, the one in the closure takes priority.

So the `booker()` runs, then the EC is popped off the stack, and then we move onto the next EC of the next call to `booker()`
and the closure is still there, still attached to the function, value is 1, and it executes, increases count to 2, then pops off again.

It's all quite complex.

### Closure Summary

Most formal definition of a closure, is the one we already saw.

👉 A closure is the closed-over **variable environment** of the execution context **in which a function was created**, even _after_ that execution is gone.

👉 (Less Formal) A closure gives a function access to all the variables **of its parent function** even _after_ that parent function has returned. The function keeps a **reference** to its outer scope, which _preserves_ thes cope chain throughout time.

👉 (Even less formal) A closure makes sure that a function doesn't lose connection to **variables that existed at the function's birth place**. Like a person who never loses connection to their birth town.

👉 (Even LESS formal) A closure is like a **backpack** that a function carries around wherever it goes. This backpack has all the **variables that were present in the environment when the function was created.**

All mean the same thing, represent the same idea.

👉 Finally need to understand that we do not have to create closures manually. It's something JS does automatically. We don't have to do anything. There is no way for us to access closed over variables. Closures are not like an object, not tangible. Can't just reach into a closure and take variables from it, that's impossible. A closure is an internal property of a function. Can observe that they happen, because functions keep magically having access to variables that should no longer access. Can **\*NOT** directly access these variables. But can take a look at this internal property (the backpack) in the console.

Can do this using `console.dir(booker)`

Returns:

```
ƒ anonymous()
length: 0
name: ""
prototype: {constructor: ƒ}
arguments: (...)
caller: (...)
[[FunctionLocation]]: index.js:353
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[3]
```

The internal scopes property is the variable environment of the booker function. Can see the closyre in there. See the passengerCount in there.

```
ƒ anonymous()
length: 0
name: ""
prototype: {constructor: ƒ}
arguments: (...)
caller: (...)
[[FunctionLocation]]: index.js:353
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[3]
0: Closure (secureBooking)
passengerCount: 3
[[Prototype]]: Object
1: Script {secureBooking: ƒ, booker: ƒ}
2: Global {window: Window, self: Window, document:
```

Whenever you see the `[[]]` means it's an internal property that cannot be accessed by the code.
