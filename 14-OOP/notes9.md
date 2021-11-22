# Static Methods

A good example of what a static method is actually is the built in `Array.from()` method. It converts any array like structure to a real array.

```
Array.from(document.querySelectorAll('h1'))
```

the `.from()` method is attached to the Array constrcutro. Cannot use the method on an array.

```
[1,2,3].from()
```

Won't work. `.from()` is attached to the Array constructor, and not to the prototype property of the constructor. Therefore all the arrays do not inherit this method. It's not on their prototype. It's simply attached to the constructor itself. `Array.from()` is a simple function, but a function that's attached to the Array constructor. Just so developers know it's related to arrays. Also say the `.from()` method is in the Array namespace. (Like `Number.parseFloat()` is in the Number namespace). The `parseFloat()` method is static on the Number constructor. Not available on numbers, but only on the very constructor.

Good examples to understand what a static method is. Usually use them as helpers that are related to a constructor. Pretty easy to implement them ourselves. Going back to the Person Constructor Function:

```
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

};

Person.hey = function() {
    console.log('Hey there 👋');
};

Person.hey(); // Hey there 👋
```

Method is not inherited. Just as cannot call `arr.from()` can't call `jonas.hey()`. It's not in the prototype of the `jonas` object. No way the `jonas` object can inherit it.

When looking at the `this` keyword inside of the static method, it's the entire constructor. Reason for that is because that is exactly the object that is calling the method. That is the rule. Whatever object is calling the method will be the `this` keyword inside of the function.

Even easier to do all of this isnide of the class. In order to do so, just add the static keyword.

```
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

PersonCl.hey(); // Hey there 👋
```

Static method, versus the other methods we've added which are instance methods.

When we look at `this` keyword here, returns the entire class.

Static methods are not available on instances, still useful to implement some kind of helper function about a class or a constructor function.
