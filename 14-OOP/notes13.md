# Inheritance Between Classes: Object.create

```
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthyear) {
    this.firstName = firstName;
    this.birthYear = birthyear;
  },
};

const steven = Object.create(PersonProto);
```

New person object using `Object.create()` `PersonProto` will be the parent class. Shouldn't be hard to createa a hierarchy between `Person` and `Student`.

Here, `PersonProto` used to be the prototype of all the new Person objects. But we basically want to add another prototype in the middle of the chain. So bewtween Person proto and the Object. Make `student` inherit directly from `Person`:

```
const StudentProto = Object.create(PersonProto);
```

That's it. Cna use the new `StudentProto` to create new Students.

```
const jay = Object.create(StudentProto);
```

`jay` will inherit from `StudentProto`. And the `StudentProto` object we created earlier is the prototype of the `jay` object. The `PersonProto` object is in turn the prototype of the `StudentProto` therefore `PersonProto` is the parent proto of `jay` therefore in it's prototype chain.

Diagram (inheritance between classes: Object.create)

It all starts with the `PersonProto` object which used to be the prototype of all Person objects. But now using `Object.create` `PersonProto` actually becomes the prototype of `StudentProto`. Now, `Student` inherits form `person`. Already established the parent child relationship we were looking for. Then to finish, all we need to do is use `Object.create` again, but this time to create a student object. (`jay`) make the student inherit from `StudentProto` which is now `jay`'s prototype. And have created a nice prototype chain. Therefore, `jay` object can use all the methods that are contained on `StudentProto` and `PersonProto`

With the scope chain correctly established, let's add an `init()` method to the StudentProto like we did with PersonProto, so we don't have to manually set any properties.

```
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
```

```
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthyear) {
    this.firstName = firstName;
    this.birthYear = birthyear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce(); // My name is Jay and I study Computer Science
jay.calcAge(); // 27
```

Can call `calcAge()` as it's in the prototype chain.

Looking at hte prototype chain, in the `jay` object, there is the `init()` and `introduce()` methods in the prototype. What we just created. This prototype in turn has it's own prototype, which is the one that contains the `calcAge()` method. That's `PersonProto`

In this version don't even worry about constructors anymore, or Prototype properties, or the `new` operator. Just objects linked to other objects, very simple and beautiful. Some people think this pattern is a lot better than trying to fake classes in JS.

We're not faking classes, simply linking objects together using `Object.create`. Important and valuable to know all 3 techniques. Allows you to think about this on your own, and choose the style you like bset. In the real world, will mostly see ES6 classes being used now.
