## What is Object-Oriented Programming?

👉 OOP is a programming paradigm that's based on the concept of objects. Paradigm means the style of code. "How" we write and organize code.

👉 We use objects to **model** (describe) real-world or abstract features. Like a user or a to-do list item, or an HTML component or data structure.

👉 Objects may contain data (properties) and code (methods). By using objects we pack **data and corresponding behavior** into one block. Makes it super easy to act directly on the data. Blocks are exactly what objects are supposed to be.

👉 In OOP, objects are **self-contained** pieces/blocks of code.

👉 Objects are **building blocks** of applications and **interact** with one another.

👉 Interactions happen through a **public interface** (API): methods that the code **outside** of the object can access and use to communicate with the object.

👉 OOP was developed with the goal of **organizing** code, to make it **more flexible and easier to maintain** (avoid "spaghetti code").

OOP is not the only way of writing and organizing maintainable code. Other paradigms that are popular, like functional programming, which allows us to achieve the same code of avoiding spaghetti code.

## Classes and Instances

In OOP we need a way to generate new objects from our code. To do that, in traditional OOP, we use classes to create new objects. It's like a blueprint from which we can create new objects. With classes, many objects can be built from it. JS doesn't actually support real classes.

Class has a plan, data associated with it/behavior (in example). Not real JS code. Use the class to create a new instance of the class. Not just a description like we have in a class. Call all objects created from a class, an instance of the class. It's an object we can use in our code. The class itself is not an object.

The instance is like a real house created from the abstract blueprint from the architect. Beauty is we can use the class to create as many instances as we need in the application. All of the instances/objects can have different data, but share same functionality which is to log in and send messages.

## The 4 Fundamental OOP Principles.

How do we actually design classes? How do we model real-world data into classes?

There is not a single way of designing classes, but there are 4 fundamental principles that will help guide us toward a good class implementation:

- Abstraction

- Encapsulation

- Inheritance

- Polymorphism

### Abstraction

To ignore or hide details that **don't matter**, allowing us to get an **overview** perspective of the _thing_ we're implementing instead of messing with details that don't really matter to our implementation.

Say we're implementing a phone for the user to use, without abstraction we could design our class to design and include everything there is to know about the phone. As a user interacting with a phone, we don't need all low level details. When we interact with a real phone, all those details have been abstracted away form us as a user. We just use the things we need to get the phone to function. Phone kind of operates a black box without us seeing what's happening inside. We can hide the other details from the user. That's exactly what abstraction needs. Just ignore the details.

Abstraction is very important in Programming in general. We create and use them all the time. Ex, `addEventListener()` function. Do we know how it works behind the scenes? No. Do we care? Not really. Don't have to. Low level details have been abstracted away from us in terms of how they work.

### Encapsulation

Keep some methods and properties **private** inside the class, so that they are **not accessible from outside the class**. Some methods can be **exposed** as a public intervace (API).

Private properties can't be accessed outside the class, but accessible inside the class. This is important because it prevents external code from accidentally manipulating internal properties/state. State just means data.

Don't make private methods part of the public interface, public interface is all the methosd that have been encapsulated.

Allows us to change internal implementation without the risk of breaking external code. Helps avoid bugs and spaghetti code.

Should always have the goal to nicely encapsulate most of our state and our methods, and only leaving essential methods public.

### Inheritance

Duplicate code is bad. When we have two classes that are closely related, can have one class inherit from the other. One parent class, and one child class. Child class extends parent class.

What does that mean?

Child class inherits all the properties and methods of its parent class.

👉 **Inheritance** Makes all properties and methods of a certain class **available to a child class**, forming a hierarchical relationship between classes. This allows us to **reuse common logic** and to model real-world relationships.

A child class can then have it's own methods and properties.

### Polymorphism

A child class can **overwrite** a method it inherited from a parent class (it's more complex than that, but good enough for our purpose).

Say you want the Admin and Author classes to have different login methods. How polymorphism works, is, you just overwrite that method in each class. Write a new method with the same name inherited from User, with whatever you need to do differently. And that's it.
