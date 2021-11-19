# Prototypal Inheritance and The Prototype Chain

Everything starts with the `Person()` constructor function we've been developing. This `Person()` has a `.prototype` property that is an object, and inside that object we defined a `calcAge()` function.

`Person.prototype.constructor` is going to point back to `Person itself` (the constructor property). `Person.prototype` is NOT the prototype of Person, but all the objects created through the `Person()`.

When we call a function any function with the `new` operator, an empty object is created. (those 4 steps from the other video). Then the `this` keyword is set to the newly created object. That's why in the functions code, we set the name and birthYear properties on the `this` keyword. Doing so, ultimately sets them on the new object. Then the new object is linked to the constructor functions `__proto__` property. (The magic) So `Person.prototype` is now the new objects prototype. `__proto__` always points to an objects prototype. Finally, the new object is automatically returned from the function, unless we explicitly return something else.

Result of the `new` operator and `Person()` construction function, is a new object we've created programmatically and is now stored in the `jonas` variable. This whole process is how it works with function constructors and ES6 classes.

Why does this work this way? And why is this technique so useful and powerful?

`jonas.calcAge()`. Attempting to call it on the jonas object, but JS can't find the `calcAge()` function directly on the jonas object. What happens now? If a property or method cannot be found in a certain object, JS will look into it's prototype, and there it is! So JS will simply use that one. It's how the function can run correctly and return a result. The behavior we just described is called **prototypal inheritance** or **delegation** The `jonas` object inherited the `calcAge()` function from it's prototype. Or it delegated the `calcAge()` functionality to it's prototype.

The beauty is we can create as many objects as we want, and they will all inherit this method. So we can call the `calcAge()` method on all objects without the method being directly attached to the objects themselves. This is essential for code performance. They can all use the same function from their common prototype.

The fact that `jonas` is connected to a prototype, and the ability of looking up methods and properties is what we call the **prototype chain**. The `jonas` object and it's prototype form a chain. But the chain doesn't end here.

### The Prototype Chain

Original diagram with the `Person()` constructor function - Prototype property (`Person.prototype`) - jonas object (`__proto__: Person.prototype`)

The `Person.prototype` is also an OBJECT. All objects in JS have a prototype. Therefore `Person.prototype` must also have a prototype. And the prototype of it is `Object.prototype`. `Person.prototype` is a simple object, built by the built in constructor function. This is what's created whenever we create an object literal `{}`. They are a shortcut to writing a new object. What matters is that `Person.prototype` itself needs to have a prototype. Since created by the Object constructor function, it's prototype is going to be `Object.prototype`. Same logic as with the `jonas` object. Since `jonas` has been built by `Person()` `Person.prototype` is the prototype of `jonas`.

This entire sequence is called the **Prototype Chain**. `Object.prototype` is usually at the top of the prototype chain. It's prototype is `null`. Similar to the scope chain but with prototypes.

In the scope chain, whenever JS cannot find a certain variable in a scope, it looks up into the next scope in the scope chain and tries to find the variable there. On the other hand with the Prototype chain, whenever JS cant find a certain property or a method in a certain object, it's going to look up into the next prototype chain and see if it can find it there.

Another example of a method lookup, `jonas.hasOwnProperty('name')`. Will try it on itself. Then if can't find it there, will look up. But it's not there on `Person.prototype` so will move up even further in the chain and look into `Object.prototype`. `Object.prototype` has a bunch of built in methods, which includes `hasOwnProperty()` and there we go! JS can then take it and run it on the `jonas` object, as if it has been defined directly on it. The method has not been copied to the `jonas` object, just inherited from `Object.prototype` through the prototype chain.
