# The JavaScript Engine and Runtime

## What is a JavaScript Engine?

A JS Engine is a program that executes JavaScript code. Executing JS code is what an engine does. Every browswer has it's own JS engine. Most well known is Google V8, powers Google chrome, and node JS.

## JS Engine

Contains a Call Stack and Heap.

### Call Stack

Where our code is executed, using execution context

### Heap

An unstructured memory pool that stores all the objects our application needs.

How is it compiled to machine code?

### Computer Science Sidenote: Compilation VS. Interpretation

Computers processor only understands 0s or 1s.

**👉 Compilation:** entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

Source code -> Compilation (STEP 1) -> Portable File: Machine Code -> Execution (STEP 2) -> Program Running

Execution can happen long after compilation. For example, any program you're running on your computer right now has been compiled before. Now executing it way after it's compulation.

**👉 Interpretation:**
Interpreter runs through the source code and executes it line by line. Code is read and executed all at the same time. Of course, source code has to be converted into machine code, but happens just before it's executed and not ahead of time.

Source Code -> Execution Line By Line (STEP 1) -> Program Running

JavaScript used to be a purely interpreted language. Problem is that they are much, much slower than compiled languages. This used to be okay. But now with modern JS and fully fleshed web applications, low performance is no longer acceptable.

Instead of simple interpretation modern JavaScript uses a combination of interpretation and compilation. Called JIT.

**👉 Just-in-time (JIT) Compilation**
Entire code is converted into machine code at once, then executed immediately.
Still have the two steps of regular compilation, but no regular file to execute. Execution happens immediately after compilation.

Source Code -> Compilation (STEP 1) -> Machine Code (NOT a portable file) -> Execution (STEP 2) Happens immediately -> Program Running

## Just-In-Time Compilation of JavaScript

As a piece of code enters the engine, first step is to **Parse** (read) the code. During the parsing process, code is abstracted into a data structure called the AST (Abstract Syntax Tree).

Splits up the code into meaninful lines. Then saving all the pieces to the tree in a structured way. Also checks if there are any syntax errors. Resulting tree will be used to generate the machine code.

AST tree has nothing to do with the DOM. Not related in any way. Just a representation of our entire code inside of the engine.

Next step is **Compilation** Takes the generated AST and compiles it into Machine Code.

Machine code then gets **Executed** right away, because modern JS uses JIT compilation. This happens in the Call Stack.

Modern JS Engines have some pretty clever **optimization** strategies. Create a very unoptimized version in the beginning, just so it can execute as fast as possible. Then, in the background as **Compilation** -> **Execution** is happening, **Optimization** is happening in the background going back and forth between the two, recompiling. Can happen multiple times. As the code is recompiled in a better way, the previous optimized code is swapt for the newer more optimized code.

This is what makes modern V8 engines so fast.

A lot of this stuff (Parsing, Compilation, Optimization) happens in special threads we can't access from our code. Happens completely separately from the main thread that's executing our code in the call stack.

(Great slide in lesson showing flow chart of how it works)

## JavaScript Runtime in the Browser

A JS runtime is like a big box, or a big container that includes all the things that we need to use JS (in this case, in the browser). At the heart of runtime, is a JS engine. Without an engine, there is no runtime, and no JS at all.

But the engine alone is not enough. In order to work properly, need access to the web API's. That's everything related to the DOM, Timers, Fetch API, even console.log(). Web API's are functionalities provided to the engine, but not part of the JS language itself. JS simply gets access to these API's through the global window object. But makes sense that these WEB API's are also part of the runtime, because a runtime is just a box that contains all the JS related stuff that we need.

Next, a typical JS runtime, includes a **Callback Que**. A Callback Que is a data structure that includes all the callback functions that are ready to be executed. For example, we attach event handler functions to DOM elements (like a button) to react to certain events. These event handler functions are also called Callback functions.

As the event happens (A click), the callback function is called.

First thing that happens after the event, is the callback function is put into the callback que, then when the callstack is empty, the callback function is passed to the stack so that it can be executed. This happens by the **Event Loop** The Event Loop takes callback functions from the callback que, and puts them in the callstack so they can be executed.

The Event Loop is how JS's nonblocking concurrency model is implemented.

Also important to remember, JS can exist outside of browsers. In ex, nodeJS. Runtime looks pretty similar, but no WEB API's, as the browswer provides these. Instead have multiple C++ bindings & a Thread Pool.

Different JS runtimes do exist.
