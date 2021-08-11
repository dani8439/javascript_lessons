# Dot vs Bracket Notation

when we see the properties of an object in the console, it's ordered alphabetically. That's why the order of properties does not matter, as you use property name itself to access it.

## Dot Notation

Easiest way to access the properties
`object.propertyName`

`.` is an operator, that will go to the object and access the property.
Can do the same thing with the bracket notation, but have to specify a string inside the brackets.

Big difference, in bracket notation can put any expression we would like. Don't have to explicitly write the string, can compute it from some operation, as an operation is an expression.

ex:

```
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
```

Wouldn't work with the dot operator/notation at all. Can't write jonas."last" + nameKey
Have to use the real property name

## When to use which?

When we need to first compute the property name, we use the bracket notation.

In any other case, use the dot notation, as it's cleaner and easier to use

`undefined` is what we get when we try to access a property that doesn't exist

## How to use dot and bracket notation to add new elements to an object

With dot notation, just do like so:

`jonas.location = "Portugal";`
object.newKey = new value

With bracket location, like so:

`jonas['twitter'] = '@jonasschmedtman`;`
object['newKey'] = new value
