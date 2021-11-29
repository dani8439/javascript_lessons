# ES6 Classes Summary

Review all the terminology around classes

Define a child class it's `class Student extends Person` `extends` sets up inheritance between classes, and automatically sets up prototype.

`university` is a public field. Very similar to a property defined in the constructor. Available on every instance of the class.

`#studyHours` is a private field. Not accessible outside the class.

`static numSubjects` available only on the class.

`constructor` method called by the `new` operator. Mandatory in regular class, might be omitted in a child class.
Inside the constructor, there's the call to the parent class `super`. Only necessary when writing a child class (`extend` keyword). Needs to happen before we access `this` keyword.

`this.startYear` is an instance property. Available on each created object. Difference between this and public field is that we set instance properties based on input to constructor. More personalized and unique to each obejct.

`this.#course = course`; is redefining a private field, to the value that's coming into the constructor.

`introduce()` is a normal public method.

`this.#makeCoffee` - referencing a private field and method. Private method - might not yet work in your browswer. "Fake" alternative use `_` instead of `#`.

`get testScore()` is a getter method. Basically so we can get a value out of an object by simply writing a property instead of a method. `student.testScore()` would run the getter method.

`set testScore()` Setter method (use `_` to set property with same name as method, and also add getter.) If you have a setter that's already defined in the constructor, need to create a new property with the underscore in front of it. Then need to return the new property in the setter.

`static printCurriculum()` static method, availalble only on the class. Can't access instance properties or methods. Only static ones. That static public field will be accessible in the static method. Usually use the static methods as helper methods for the class.

finally at the bottom is how you create a new object with the `new` operator `const student = new Student('Jonas', 2020, 2037, 'Medicine)`.

```
class Student extends Person {
    university = 'university of Lisbon';
    #studeyHours = 0;
    #course;
    static numSubjects = 10;

    constructor(fullName, birthYear, startYear, course) {
        super(fullName, birthYear);

        this.startYear = startYear;

        this.#course = course;
    }

    introduce(){
        console.log(`I study ${this.#course} at ${this.university}`);
    }

    study(h) {
        this.#makeCoffee();
        this.#studyHours += h;
    }

    #makeCoffee(){
        return 'Here is a cofee for you 🤓';
    }

    get testScore() {
        return this._testScore;
    }

    set testScore(score) {
        this._testScore = score <= 28 ? score : 0;
    }

    static printCurriculum() {
        console.log(`There are ${this.numSubjects} subjects`);
    }
}

const student = new Student('Jonas', 2020, 2037, 'Medicine');
```

👉 Classes are just **syntactic sugar** over constructor functions.
👉 Classes are **not** hoisted
👉 Classes are **first-class** citizens
👉 Class body is always executed in **strict mode**
