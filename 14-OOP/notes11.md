# Inheritance between "classes": Constructor Functions

Over last couple of lectures we explored how prototypal inheritance works in JS. Used constructor functions, ES6 classes, and object.create. All of these techniques allow objects to inherit methods from its prototype. So to delegate their behavior to their prototype.

Time to turn our attention to real inheritance.

Real inheritance between classes, and not just prototypal inheritance between instances and a prototye property as we've done so far. Using class terminology as it makes it easier to understand what we'll do. Already know, real Classes don't exist in JS.

Going to create a Student class that inherits from the Person class we've been working with.

How to do so.

Already have the Person function constructor, and the calcAge method we set up on the prototype property of person.

Usually we want a child class to have the same functionality of the parent class with some additional functionality. Usually pass in same args, and some additional ones.

```
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
```

See the `Student` class has kind of the same data as the `Person` and an additional property which is the `course`. Create a student named `mike`. To quickly add a method, take the prototype property and declare it on that.

```
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
```

So far so good, but something we should improve in our `Student` constructor function. It's the same code pretty much as the `Person` function constructor. Having duplicate code is never a good idea. Violates DRY, and even worse, imagine implementation of Person changes in the future, that change will not be reflected in the Student. So instead, lets call the person constructor function. `Person(firstName, birthYear)` Won't work. Calling it as a regular function call. No `new`. `this` keyword is set to `undefined`. Can't be called that way. Need to manually set the `this` keyword as well.

Using the `call()` method we will set the `this` keyword:

```
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
```

Much better and more robust solution.

So far, what we've built is simply that the Student Constructor function and its prototype property. Then the `mike` object linked to it's prototype (that's the constructor functions prototype property.) Now this link bewteen instance and prototype has been made automatically by creating `mike` with the `new` operator. Nothing new at this point.

A student is also a person, want student and person to be connected. Really want the student to be connected to the Person class, and to inherit from the Person class, so that all instances of Student can inherit and get access methods from the Person's prototype property through the prototype chain.

Looking at the diagram (inheritance between "classes"), what we want to do is to make `Person.prototype` the prototype of `Student.prototype` or in other words, want to set the underscore proto property of prototype, to `Person.prototype`.

Going to have to create this connection manually, to link these two prototype objects, going to use `Object.create`. It's exactly what it does.

```
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
```

By adding in the line of code: `Student.prototype = Object.create(Person.prototype);` the Student.prototype object is now an object that inherits from Person.prototype. Have to create this connection precisely here in the code before we add any other methods to the prototype object of student, that's because Object.create will return an empty object. At this point, `Student.prototype` is empty. If we did it after, `Object.create` would overwrite any methods we've written.

Why didn't we just do `Student.prototype = Person.prototype`? Doesn't work at all. Will not end up with prototype chain we need. End up with a mess. (Inheritance between classes bad example diagram).

What we do want is for the Person's prototype object to be the Prototype of `Student.prototype`. Want to inherit from it, but it should not be the exact same object. It's why we needed `Object.create`

Now that it's done, can now call `calcAge()` on mike, as it's been inherited through the prototype.

```
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

```

Works because of the prototype chain. But how? When we do `mike.calcAge()` effectively doing a property or method look up. The `calcAge()` is not directly on the mike object. Or in its prototype. Whenever we try to access a method not on the objects prototype, JS will look further up the chain into the parent and their prototype. So JS finds `calcAge()` in the `Person.prototype`. Whole reason why we set it up like this. In summary, now able to call method that's on the `Person.prototype` property on the `Student` object and it still works. that's the power of inheritance.

`Object.prototype` sits all the way at the top of the prototype chain (Inheritance bewteen classes prototype chain diagram)

Need to fix mistake of pointing to right object. Student not person. Can fix it by saying `Student.prototype.constructor = Student`
