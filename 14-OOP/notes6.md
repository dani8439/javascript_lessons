# Prototypal Inheritance on Built-In Objects

```
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

/////
{species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
calcAge: ƒ ()
species: "Homo Sapiens"
constructor: ƒ (firstName, birthYear)
[[Prototype]]: Object

{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

null
```

Know this is the prototype of `jonas` which is exactly the prototype property of person (`Person.prototype`).

The `__proto__` of `jonas.__proto__` is the prototype property of `Object`. Can see constructor is the `Object()`. Can see `hasOwnProperty`, etc.

`hasOwnProperty` works because of the Prototype chain.

the prototype of the prototype of the prototype is `null`. Because `Object` is usually the top of the scope chain.

`Person.prototype.constructor` Person.prototype has a constructor property, which will point back to the person itself.

```
console.log(Person.prototype.constructor);

///

ƒ (firstName, birthYear) {
  //   console.log(this);
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //   …
```

If we wanted to inspect the function, would need to use `console.dir(Person.prototype.constructor)`, and can see the constructor property points back at person.

The Prototype of any function. Any is an object, so of course it has a prototype.

Want to look at the prototype (the `.__proto__`) of an Array first before moving onto functions.

```
const arr = [3, 4, 5, 6, 7, 1, 9, 3];
console.log(arr.__proto__);

//
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
[[Prototype]]: Object
```

The prototype of array has all of these methods that we already know. It's why the arrays gets access to all of these methods. They inherit it from its prototype. Can see that the prototype property of the constructor (`Array.prototype`) is going to be the prototype of all the objects created by the instructor.

```
const arr = [3, 4, 5, 6, 7, 1, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
```

Just like in objects using `new Array === []` using the `new` constructor syntax is the same as doing so with brackets `[]`

`arr.__proto__.__proto__` is back to being the constructor object. The prototype itself here is the object. Can see it all directly in the console. `__proto__` property is right there in the console when you click on an array. And if check documentation, name for methods on MDN is `Array.prototype.filter()` because the method lives within the prototype of the Array constructor.

Prototypal inheritance is a mechanism for reusing code. Can live one place, and all our arrays get access to it through prototype chain and prototypal inheritance.

Know any array inherits all its methods from it's prototype. Can use that knowledge the extend the functionality of arrays even further. We can add any method onto `Array.prototype` and then all arrays will get access to that method.

```
const arr = [3, 4, 5, 6, 7, 6, 9, 1, 9, 3]
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
// (7) [3, 4, 5, 6, 7, 9, 1]
```

Can call the method, on any array we want. **HOWEVER** extending the prototype of a built in object is generally not a good idea. If working on a small project on your own, could do it, but don't get in the habit for doing it for multiple reasons.

- Next version of JS might add a method with the same name, and might work in a different way. Your code will use that new method and probably break your code.

- When you work on a team of developers, this is going to be a bad idea. Multiple developers implement same method with different name, will create so many bugs.

For fun, behind the scenes know all DOM elements are objects.

```
const h1 = document.querySelector('h1');
console.dir(h1);
```

Cna see all the methods and properties on the object. All sorts of stuff. Even the prototype (`__proto__`) which is an HTMLHeading element with more stuff. Behind the scenes different elements are really different constructor functions, see prototype of HTMLElement, and go deeper until you find Element as the protoype, which is a child of Node.

HTMLElement child of Element which is a child of Node which is a child of EventTarget and that's a child of Object. Which is a huge prototype chain that's 6 or 7 levels deep!

```
console.dir(x => x + 1);
```

A function itself is also an object, and has a prototype. And the prototype will contain the methods that we have used previously on methods `apply()` `bind()` and `call()`. This is the reason why we can call methods on functions, because functions are objects, and objects have prototypes. In this case, this function prototype.
