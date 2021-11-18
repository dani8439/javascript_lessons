# OOP in JavaScript

Classical OOP: Classes and Instances. A class is like a blueprint which is a theoretical plan we use to build many houses in the real world. In the same way, the theoretical class can be used to create actual objects, that are called **instances** that we use in our code. This is called **instantiation**. In JS, things work a bit differently in JS.

JS Syntax uses these terms. Important to understand it even if it's not quite the same.

## How does OOP work in JS?

In JS we have **Prototypes** All objects in JS are linked to a certain Prototype Object. Each Object has a Prototype.

- The Prototype object contains methods and properties that all the objects that are linked to that Prototype can access and use. This behavior is called **Prototypal Inheritance**.

- **Prototypal Inheritance**: The prototype contains methods (behavior) that are **accessible to all objects linked to that prototype**. Objects inherit methods and properties from the protoype. This inheritance is different from one from last lecture. In this case it's basically an instance inheriting from the class.

- Behavior is **delegated** to the linked prototype objects (methods). It's why we also call Prototypal Inheritance Delegation. And why in diagram, arrow is pointing upwards of object to the Prototype. Technically objects delegate their behavior to the Prototype. Whereas in the other OOP, behavior (methods) are copied from classes to all instances.

Already seen this mechanism many times before without realizing what's happening. For example, Using an Array method like `map`. When you go to MDN, will see that the methods are actually called `Array.prototype.map`.

`Array.prototype` is the **prototype** of all array objects we create in JavaScript. Therefore **all** arrays have access to the `map` method. In a sense, our array inherits the map method. Or the array delegated the behavior of mapping to its prototype. What matters is the `map` method is defined on the array itself, but on it's prototype.

### 3 Ways of Implementing Prototypal Inheritance in JavaScript

_How do we actually create prototypes? How do we link objects to Prototypes? How can we create new objects, without having classes? How do we implement OOP in JS in practice?_

In JS there are 3 different ways of doing this.

- Constructor Function Technique
  👉 Technique to create obejcts from a function.
  👉 This is how built-in objects like `Arrays, Maps or Sets` are actually implemented.
  👉 This is how OOP has been done in JS since the beginning.

- ES6 Classes
  👉 Modern alternative to constructor function syntax.
  👉 "Syntactic sugar": behind the scenes, ES6 classes work **exactly** like constructor functions.
  👉 ES6 classes do **NOT** behave like classes in "classical OOP" (last lecture).

- `Object.create()`
  👉 The easiest and most straightforward way of linking an object to a prototype object.
  👉 It's not as used as the other two methods.

👉 One important thing to keep in mind is that the **4 Pillars of OOP are still Valid!**

- 👉 Abstraction
- 👉 Encapsulation
- 👉 Inheritance
- 👉 Polymorphism

They're all valid and important with Prototypal Inheritance.
