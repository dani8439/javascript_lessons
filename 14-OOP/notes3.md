# Constructor Functions and the new operator

Kind of already used OOP before but in a limited way. Used some simple object literals, for example in the Bankist App.

Can use Constructor Functions to build an object using a function. A constructor function is actually a completely normal function. Only difference between a regular function and a constructor function, is that we call the constructor function with the `new` operator.

In OOP convention that constructor functions always start with a capital letter.

Can use a function expression or declaration, but cannot use an arrow function because it needs it's own `this` keyword. This function is going to produce an object for person. Want person to have a name and a birth year. So specify those in the parameters being passed in.

```
const Person = function (firstName, birthYear) {};

new Person('Jonas', 1991);
```

`new` is a very special operator. Calls the `Person` function, but does a whole lot more than that.

Behind the scenes 4 things happen:

1.  A new empty object `{}` is created.
2.  Afterwards, a function is called, and the `this` keyword is set to the empty object.
3.  Newly created object is linked to a Prototype.
4.  Object that was created in the beginning, is automatically returned from the constructor function. But object no longer needs to be empty, this is the trick of making the constructor function work.

```
const Person = function (firstName, birthYear) {
  console.log(this);
};

new Person('Jonas', 1991);

// returns
Person {}
```

Brower console is already telling us the empty object is of the type `Person`

Using the `this` keyword, set what each attribute will be set to:

```
const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// Person {firstName: 'Jonas', birthYear: 1991}
```

What just happened? Called the constructor function with the new operator. A new empty object is created right away. Function is called, `this` keyword is the empty object. Then in that function, we start to create properties on that object, set to the parameters passed in. Doesn't have to be the same name of what's passed in, but it's easier that way. Then by the end of the function our `this` keyword has those two new properties. Then at the end, the object that was created at the beginning is automatically returned, and at that point it's the objec with the two properties. It's the result of the function call stored in the variable jonas.

Can use the constructor function to create as many different objects as we want. Unlimited. Each is now it's own object we've created programmatically using a function constructor.

Remember from a previous lecture about classical OOP, that an object created from a class is called an instance of the class. We didn't technically create a class here, because JS doesn't really have classes in the sense of traditional OOP. However, we did create an object from a constructor function, 3 to be precise. Constructor functions have been used to simulate creating classes. So can say jonas is an instance of the class `Person`.

There is an operator we can use to test this: `instanceof`

```
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false
```

Can also say that the properties (`birthYear` and `firstName`) will be the instance properties. They will be available on all the instances created through this constructor function. But what about methods? Well, just as we can create properties, we can also create methods.

```
const Person = function (firstName, birthYear) {
  //   console.log(this);
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
```

This method would work. But it's a really bad practice. Should never create a method inside of a constructor function. Because imagine if we'll create tens of thousands of objects of the Person function, each object will carry around that function. Have 1000 copies. Would be terrible for the performance of our code. Instead going to do Prototypes and Prototypal inheritance.

Function constructors aren't really a feature of the JS language, it's a pattern that's been developed by other developers and are used. Magic is the `new` operator, and the 4 steps.
