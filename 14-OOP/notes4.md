# Prototypes

Talked about Prototypes, Prototypal Inheritance and Delegation earlier. But how do they work?

Each and every function in JS automatically has a property called Prototype, that includes constructor functions. Every object created by a certain constructor function, will get access to all the methods that we define on a constructors prototype property. In this case ours is `Person.prototype` and we can just define methods on there.

```
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
```

Each Object created by the constructor function, will now get access to all the methods on the prototype property. So can just call any method that's been defined on it.

```
jonas.calcAge()
// 46
```

Can now use the method `calcAge()` on the `jonas` object, even though it's not defined on the object itself. We have access to it because of Prototypal inheritance.

This effectively solves the problem we had before when we defined the method directly onto the object. Now there exists only one copy of this function, on the prototype. But all objects created using the constructor function, can reuse it on themselves. It's also why the `this` keyword is set to the object calling the method.

the `jonas` and `matilda` objects are somehow connected to the `Person`. It's how they can have access to the methods. But how and why does this actually work?

Works because any object always has access to the methods and properties from its Prototype. Prototype of `jonas` and `matilda` is `Person.prototype`. Can prove this, because each object has a special property called `.__proto__`. It's the prototype of `jonas`. It's essentially the prototype of `jonas`. The prototype of the `jonas` object is essentially the prototype property of the constructor function.

```
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true
```

Shouldn't `Person.prototype` not be the prototype of `Person`? No. This is the confusing part. `Person.prototype` is actually not the prototype of Person, but what's going to be used as the prototype of all the objects created from the Person constructor function. There are other built in methods we can use to prove this.

```
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
```

Probably shouldn't be called Prototype but .prototypeOfLinkedObjects or whatever. Would be a more honest name.

Where does this `__proto__` property on the `jonas` object come from? The `new` operator. Comes from step 3. Which links the empty new object to the prototype. So step 3 creates the `__proto__` property on the object and sets its value to the prototype property of the function that is being called (the constructor function). This is how internally JS knows that the `jonas` object is connected to `Person.prototype`. Can even see it when looking at `jonas` object in console, can see the `__proto__` property.

Can also set properties on the prototype, not just methods.

```
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
```

Won't see it when you click on `jonas` directly in console. But will see it in the Prototype Object. And can call `jonas.species` and `matilda.species` and see it's set to `Homo Sapiens`. Both objects inherit, get access to the property from the prototype.

When we take a look at these objects, this property isn't directly in the object, it's not it's own property. Own properties are defined directly on the object itself. There's a way of checking for that:

`hasOwnProperty()`

```
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false
```

species is false because it's not really inside of the `jonas` object, it has access to it because of it's prototype. It's in the prototype property of person. (`Person.prototype`)
