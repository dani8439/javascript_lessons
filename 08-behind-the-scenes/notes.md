# Overview of the JS Language

JavaScript is a high-level, object-oriented, multi-paradigm programming language.

... interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model. 🤔 🤯 🤣

WHAT? Is this some kind of joke? Yes, in a way. Packed as much info as possible about JS into an unreadable sentence. But, gives opportunity to unpack.

## High Level

Every program needs hardware resources (memory, cpu) to do its work. There are low-level languages such as C, where you have to manually manage these resources. Other side, have high-level languages like JS or Python, where we do not have to manage resources at all. These langauges have abstractions that take that away from us. Downside is language is never as fast, or as optimized as low-level programs like C.

## Garbage-collected

An algorithm, that automatically removes old unused objects. Cleans the memory so we don't have to. Does the work for us in high level languages.

## Interpreted or just-in-time compiled

Computer's processor only understands 0's and 1's. (Machine code) Since that's not really practical to write, we write human readable JS code. Code eventually needs to be translated to machine code, through compiling, or interpreting. No one writes machine-code manually. This happens inside the JS engine.

## Multi-paradigm

In programming, a paradigm is an approach and mindset of structuring code, which will direct your coding style and technique.

Three popular paradigms are:

1. Procedural Programming - what we've been doing so far. Organizing the code in linear way.
2. Object-Oriented Programming (OOP)
3. Functional programming (FP)

Can classify paradigms as Imperative vs Declarative.

Many programming languages are only one thing, procedural, OOP, or FP. JavaScript does all of it. Can do whatever we want with it, our choice.

## Prototype-based object-oriented

Almost everything in JS is an object, except for primitive values. Prototypal inheritance, create arrays for ex, from a blueprint. From a prototype, that contains all array methods. Arrays we create in our code, inherit all these methods from the blueprint, so that we can then use them on the arrays. (Huge oversimplification)

## First-class functions

Functions are treated just as regular variables. You can pass them into other functions, and return them from functions.

Powerful. Allows us to use a lot of powerful techniques, and functional programming.

First class functions ex: Passing the closeModal function as an argument. Already have done this

```
const closeModal = () => {
    model.classList.add("hidden");
    overlay.classList.add("hidden);
}

overlay.addEventListener("click", closeModal)
```

## Dynamic

Dynamically-typed language.

In JS, we don't assign data-types to variables. Only became known when JS engine executes our code.

The type of variables can easily be changed as we reassign our variables.

Controversy over whether it's good or bad. Same isn't true for other languages, where we have to manually assign types. This prevents bugs.

## Single-threaded

Concurrency model: How the JS engine handles multiple tasks happening at the same time.

Why do we need that?
JS runs in one single thread. So it can only do one thing at a time. Therefore we need a way to handle multiple things happening at the same time.

A thread is like a set of instructions that is executed in the computers CPU. The thread is where our code is actually executed in the machine's processor.

So what if there is a long-running task? (ex fetching data from a remote server)
Sounds like it would block the single thread. However we want non-blocking behavior. How do we achieve that?

By using an event loop.

## Non-blocking event loop

An event loop takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.
