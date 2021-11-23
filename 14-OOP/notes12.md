# Inheritance Between "Classes": ES6 Classes

As we know, already, the class syntax hides a lot of the details that are actually happening behind the scenes. Classes are just a layer of abstraction over constructor functions. But that's no problem because we already learned how inheritance between classes actually works behind the scenes. Now we know how it works, we can implement it with classes.

To implement inheritance between ES6 classes, we only need 2 ingredients.

- The `extends` keyword.
- The `super()` function.

`extends` links the prototype behind the scenes.

Don't need to manually call as we did before (`Person.call()`). Can just use `super()` function. `super()` is the constructo function of the parent class. All happens automatically. Just pass in the arguments for the constructor of the parent class.

```
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}
```

`super()` has to happen first, because it's resposnible for creating the `this` keyword for the subclass. Could have no other properties at all, don't need the `course` parameter. In this case, new `Student` class would have same properties, with different methods. Possibilities are endless. If we didn't want to have attributes like `course`, don't even need to do `super()` at all. It's automatically passed into the class.

Now looking into the prototype chain, is just the same as before when we created it manually.

See in prototype of martha have the `introduce()` method. In the prototype of the prototype we have the `calcAge()` the `greet()` and the `age` setters and getters. Prototype chain was setup automatically by the `extends` keyword.

Let's override one of the methods in the parent class. Just add a new one.

```
 calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
```

This new `calcAge()` method will override what's in the prototype chain, because it's what appears first in the prototype chain. Don't need to look up into the parent class to find it. The `calcAge()` method is shadowing the one that's in the parent class.
