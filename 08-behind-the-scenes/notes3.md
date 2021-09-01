# Execution Contexts and the Call Stack

How is JS code executed?

Say our code just finished compiling. Ready to be executed. What happens is the creation of **global execution context** is created for top-level code.

Top-level code is code that's not inside any function. In the beginning, only the code that is outside of functions will be executed.

Makes sense as functions should only be executed when they are called.

Ex:

```
const name = 'Jonas';

const first = () => {
    let a = 1;
    const b = second();
    a = a + b;
    return a;
}

function second() {
    var c = 2;
    return c;
}
```

`name` is top-level code. Will be executed in the global execution context.

Next we have two functions, one expression, and one declaration. Both declared so can be called later. Code inside functions will only be executed when called.

Know a global execution context is created for top level code. But what is it?

## Execution Context

An abstract concept. An environment in which a piece of JavaScript is executed. Like a box that stores all the necessary information for some code to be executed, such as local variables, and arguments passed into a function.

JS code always runs inside an execution context.

EX: Imagine you order a pizza at a takeaway. Pizza comes in a box. Also might come with other stuff to eat the pizza (cutlery, receipt). Pizza is the JS code to be executed. Box is execution context for our pizza. Because eating the pizza happens inside the box, then the environment for eating pizza. Box contains receipt, and cutlery necessary for eating the pizza.

In any JS project, no matter how large it is, only one global execution context (EC). It's where top-level code will execute.

Now that we have a top-level environment where the code will be executed, it finally is executed. Not a lot to say about the execution itself, just the computers CPU processing the machine code it's received.

COMPILATION -> Creation of Global Execution Context (for top-level code) -> Execution of top-level code (inside Global EC) -> Execution of functions and waiting for callbacks.

Once top-level code is received functions are executed as well. A new EC is created, containing all info necessary to run that function. Same thing goes for methods as well. (They are functions attached to objects). All these things together, make up the callstack.

Once everything is done executing, engine will keep waiting for callback functions to arrive, so it can execute these. For ex: Callback function associated with a click event.

## What's inside execution context?

**Variable environment**

- `let`, `const` and `var` declarations
- Functions
- `arguments` object (all the arguments that were passed into the functions that the current EC belongs to. Each function gets its own EC as soon as it's called)

**Scope Chain**
Scope chain consists of references to variables that are located outside of the current function. To keep track of it, it's stored in each EC. Each context gets a special variable the `this` keyword.

**`this` keyword**

Variable Environment, scope chain, and `this` keyword are generated during the "creation phase", right before execution.

**NOTE** EC's belonging to arrow functions, do not get their own `arguments` object, or `this` keyword. Instead they can use the arguments object and this keyword from closest regular function parent.

## Example

```
const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();
```

Global
name = 'Jonas'
first = <function>
second = <function>
x = <unknown>
(need to run `first()` first for x to be "known")

first()
a = 1
b = <unknown>
(need to run `second()` first.)

second()
c = 2
arguments = [7, 9]
(Array of passed arguments. Available in all "regular" functions, but not arrow).

But how will the engine keep track of the order where functions were called? And how will it currently know where it is in the execution?

## Call stack

Call stack with the memory heap makes up the JS engine.

But what is the Callstack?

It's basically the "place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution. The EC at the top of the stack, is the one currently running. When it's done, it'll be removed. Then we'll go back to the previous EC.

It's as if you've bought some pizza with some friends. Each one has a box. Put them in a pile of boxes, to keep track of each pizza is which.

Once the code is compiled, top level code will begin execution. Global EC will be created. Then put in the callstack at the top of the stack.

When a function is called, it gets it's own EC, so it can run the code that's inside it's body. So then it's put into the callstack in it's own context, on top of the current context, and is now the new current EC.

Variables defined inside of the new EC, are defined in there. Not in global.

If another function is called, another EC is created immediately, and pushed on top of the stack. And the Execution of the first function has been paused, to run the next function that was called inside of it. It will only continue, after second function finishes running. Because JS has one thread of execution, and can only do one thing at a time.

After second function will finish it's execution, what it means for the call stack, it will be popped off once the function gets to it's return statement, and will be gone from memory.

Then the previous EC will back to being the active EC.

Analogy of the call stack being like a map for the JS engine. It never gets lost, so long as you use it correctly.

Returned from the second function, move back into the first function, which then has a return statement and finishes running. So it gets popped off the stack, and return to the Global EC, then the line of code where the function was first called. Program will stay in this stage forever, until it's eventually finished (when the program is closed). Global only pops off when we close the browser tab or close the terminal window.

Code runs inside of execution contexts that are within the call stack. Code runs within the call stack.
