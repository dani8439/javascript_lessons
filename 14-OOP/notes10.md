# `Object.create`

Learned about constructor functions, and ES6 classes, but there is a third way of implementing prototypal inheritance, or delegation. That third way is to use the function `Object.create` which works in a different way than constructor functions and classes.

With `Object.create` there is still the idea of prototypal inheritance, but there are no prototype properties involved.
And also no constructor functions, and no `new`. Can use `Object.create` to manually set the prototype of an object to any object that we want.

Let's recreate the `Person` class from earlier. Do a simple object literal. But what do we put in there?

```
const PersonProto = {

};
```

Put what we put into the prototype property.

```
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
```

To create a new object we do `Object.create()` and pass in the object we want to be the prototype of the new object. That's `PersonProto`. Will return a brand new object linked to the Prototype we've passed in. `steven` is linked to the `PersonProto` object.

No properties yet, but have the `calcAge()` method.

For now manually passing in the variables, but we want a programmatic way to do it:

```
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35
```

Just like before, implemented prototypal inheritance but in a completely different way.

Diagram of how it works with constructor functions and how we've been doing it up until now. When we use the `new` operator in constructor functions or classes, it automatically sets the prototypes of the instances to the constructor's prototype property. This happens automatically. Nothing new.

### How Object.create works

We can set the prototype of Objects manually to any object we want. In this case, manually set prototype of the steven object to the `PersonProto` object. That's it. Now the two objects are linked through the prototype property just like before. So looking up methods through prototype chain, works exactly same as before. Big difference is we didn't need any constructor function. Also no prototype property at all to achieve the exact same thing. A bit more straightfoward and a bit more natural.

This is actually the least used way of implementing prototypal inheritance.

Setting properties in a different way than before. If we're serious about using `Object.create` should implement a function that basically does it for us.

```
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // looks a bit like constructor function from earlier. But has nothing to do with it. Not using new to call it.
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYearh = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge;
```

`this` keyword points to the `sarah` object. But does so because we explicitly called `init` on sarah. Has nothing to do with the constructor functions we saw earlier, or the constructor method in ES6 classes. Just a manual way of initializing objects.

Big takeaway, is that `Object.create` creates a new object, and the prototype of that object will be the object that we pass in.
