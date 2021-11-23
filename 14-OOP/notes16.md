# Encapsulation: Private Class Fields and Methods

Let's implement truly private class fields and methods.

Private class fields are part of a bigger proposal for improving and changing JS classes, called class fields.
Class fields proposal not yet part of JS language, it's at Stage 3. Very likely to move forward at some point, and will become a part of the language.

Why is it called class fields? In traditional OOP langauges, properties are usually called fields. With this new proposal, JS is moving away from idea that classes are just syntactic sugar over constructor functions. With these new class features, classes actually start to have abiltiies we didn't previously have with constructor functions.

4 different kinds of fields and methods (actually 8)

- Public fields
- Private fields
- Public methods
- Private methods

## Fields

Public Fields

Can think of a fields as a property that will be on all instances. That's why we can call it a public instance field. In our example, two fields could be the `movements` and the `locale`. Both properties will be on all objects we create in this class. We do not pass any of the values in to the constructor. Array and language will always be set for the instances.

to make a public field:

```
locale = navigator.language;
_movements = [];
```

When reload, see account works exactly the same, but now public fields (locale and \_movements). Present on all instances when we create through the class, but **NOT** on the prototype. Important to understand. All the methods are on the prototype, but these fields are on the instances.

Public fields are also referencable by the `this` keyword.

Private fields we can now make it so that properties are really truly, not accesible from the outside.

Hash symbol makes a field private:

```
#movements = [];
```

Finally see can't access it because:

```
console.log(acc1.#movements);
```

returns an error. Private field #movements must be declared in an enclosing class. Cannot access the variable outside anymore.

movements are now really private. Still have the `getMovements()` method which is public, which was the whole point.

Want to make the pin private, but situation is different, because setting it based on input to constructor, but can't define a field in the constructor. Have to be outside a method. Create it with a hash, then don't set it to anything. Then it can be redefined in the constructor:

```
 #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
  }

```

That's truly private class fields, and available on the instances, not on the prototype. Some people don't like the syntax with the hash symbol. Might still change.

## Public Methods

All the methods we have been using are public methods. Not a lot to talk about.

## Private methods

Very useful to hide the implementation details from the outside.
Originally we had things protected with the underscore. To make a private method, it's exactly the same as with private fields, with the hash (`#`)

Big problem is that right now, no browser actually supports this. Can't show it in google chrome.

Besides these 4, there is also the static version of the same 4. It's why we have 8 new features. We already used the static public method before. Worked by putting static public word in front of it. Usually use this for helper functions. BEcause won't be available on all the instances, only on the class itself.
