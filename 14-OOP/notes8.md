# Setters and Getters

Common to all objects in JS. Getters and setters.

Every object in JS can have getter and setter properties. Called these special properties accessor properties. Normal properties are called data properties.

Getters and setters are basically functions that get and set a value. Just as name says. But on the outside they still look like regular properties. Let's look at getters and setters in an object literal.

To write a getter, start by writing a normal method. Then prepend keyword `get`

```
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

   set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
```

To use it, call `account.latest`. Use it like a property. Don't call the method, write it as if it was just a property. Very useful when we want to read something as a property but still need to do some calculations before. Can do the same thing as a setter, using the `set` keyword. Any setter method needs to have exactly 1 parameter.

Not mandatory to specify a setter, when we have a getter for the same property. Just the getter or the setter would be enough.

How do we use the setter now? If just a regular method have to do this:

```
account.latest(50)
```

Now it's like a property and not a method, so can simply set it like we set any property.

```
account.latest = 50;
console.log(account.movements); // (5) [200, 530, 120, 300, 50]
```

In a nutshell, this is how getters and setters work for any regular object in JS.

Classes also have getters and setters, and they do indeed work in the exact same way.

Adding a getter method to the previous lectures class example:

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

  get age() {
    return 2037 - this.birthYear;
  }
}

console.log(jessica.age); // 41
```

Can see it's same value as calcAge function. Getter is just like any other regular method that we set on the prototype.
If we look at the prototype of jessica, can see the property there. Has dots as only calculated once we click it in the console.
Already looks as if it would be a property and not a method. Still have get age method down below. Still added as a kind of property.

Setters and getters can be very useful for data validation.

```
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

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

  set fullName(name) {
    if (name.includes(' ')) this.fullName = name;
    else alert(`${name} is not a full name!`);
  }


  get fullName() {
    return this._fullName;
  }
}
```

We have the setter set to a property name, so each time we runt he code in the constructor, set the fullName on the `this` keyword, the setter is going to be executed. It will then become what's validated.

Get a massive callstack error. Because there is a conflict. Both the setter function and constructor function are trying to set the exact same property name. Gives origin to the error. So need to create a new property name in the setter method. Convention is we add an underscore before it `_`. But when we do that, we're setting a new `_fullName` variable. So can't call `jessica.fullName`. Doesn't exist. Need to create a getter for the fullName property.

Property is still `_fullName` inside of the jessica object because that's what we do in teh setter. But can compute the `fullName` just as we compute the age. This pattern is important to understand whenever we try to set a property that already exists

Nice feature of classes. Don't need to use getters and setters. Some people don't.
