# ES6 Class

Time to turn our attention to ES6 classes, which allow us to do exact same thing as prototypal inheritance with constructor functions, and manually setting functions on the constructor functions prototype property, but in a much more modern syntax.

Classes in JS do not work like traditional classes in other languages. Instead, classes in JS are just syntactic sugar. Still implement prototypal inheritance behind the scenes, but with a syntax that makes more sense to people coming from other languages.

write a class and the name of the class.

Just like in functions have class declarations and class expressions.

```
// class expression
const PersonCL = class {

}

// class declaration
class PersonCL {

}
```

Classes are just a special type of function. Behind the scenes classes are still functions. Inside class, first thing need is a `constructor()` method. Works in a pretty similar way as a constructor function. Is actually a method of the class. Needs to be called constructor. Just like in constructor functions, pass in arguments for the properties we want the object to have.

Act of creating a new object works in exactly the same way as before. Using the `new` operator. Whenever we create a new object using the `new` operator, the constructor will automatically be called.

```
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const jessica = new PersonCl('Jessica', 1996);
```

We create a new instance using `new` keyword. Exactly the same as before, looks like a regular function call. Then inside the constructor, `this` keyword is set to the newly created empty object. Just like before, set properties of the object `this.property = property`.

When we create a new instance, it's the constructor that's called, and will return a new object.

For methods can add them in the class itself:

```
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
```

What's important to understand is all of the methods we write in the class are outside of the constructor, and are on the prototype of the object, not on the object itself. So is really just like prototypal inheritance. When you inspect the object in console, can see the `__proto__`, and can see the function in there.

```
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); // true

```

`jessica.__proto__` (jessica.prototype) is equal to `PersonCl.prototype`. Only difference is that class syntax looks a little nicer. Don't have to manually mess with the prototype property. Methods are automatically added to the prototype class.

Can also add a method manually to the prototype.

```
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet(); // Hey Jessica
```

Proof that the class really just hides the true nature of Prototypal inheritance in JS. Could do the same in the class itself. (No commas between methods). And it'll work the exact same way.

```
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
```

Great for people coming from other languages, as easier to write Object Oriented code as you do in those languages.

### Important things to keep in mind about classes

- Classes are NOT hoisted. Even if they are class declarations. Function declarations ARE hoisted, which means we can use them before they are declared in the code. But with classes that doesn't work.
- Classes are also first class citizens like with functions. We can pass them into functions and also return them from functions. That is because classes are really just a special kind of function behind the scenes.
- The body of a class is always executed in strict mode. Even if we didn't activate it or our entire script, all the code in the class will be executed in strict mode.

### Should you use constructor functions or classes?

- Constructor functions are not like old or deprecated syntax. 100% fine to keep using them. Just a question of personal preference. Should you use classes without understanding prototypal inheritance? No. Some people say classes are really bad in general and no one should be using them as they hide true nature of JS. But, Jonas thinks it's okay, so long as you understand the Prototype and Prototypal inheritance. Can't skip that part. Want to become an expert. So need to understand what your code does.

Likes that classes visually put all the code that belong to a certain class all into one nice code block. With function constructors, it all looks like a big mess. Just a personal opinion.
