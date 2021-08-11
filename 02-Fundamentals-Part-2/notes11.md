# Object Methods

Objects, just like arrays, can hold different types of data. Can even hold arrays, as well as other objects.

If a function is just a value, can create a key value pair, where value is a function, and add to an object

To add:

Specify the function as an expression, because that produces the value.

Difference is just in syntax, using a colon vs an equals sign.

```{
    calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
}
```

VS:.

```
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
```

Any function attached to an object, is called a method. Cannot use a function declaration in an object, only an expression, trying to attach:

```function calcAge(birthYear) {
    return 2037 - birthYear
}
```

Inside of a function would result in error, unexpected token 'function'.

Think of functions as simply being values, then can see a method is also a property. It just happens to be a property that holds a function value. Objects can hold string values, boolean values, array values, function values, etc.

JavaScript gives us special access in every method, to something called `this`.
So we don't have to hardcode what we're passing into our functions. `this` keyword is equal to object calling the method.

`this` is pointing to the object of jonas. So can call `this.birthYear` which calls on `jonas.birthYear`

jonas object is the object calling this function of `calcAge()`

`this` keyword is very useful and powerful.

calling `jonas.birthYear` would violate Don't repeat yourself principle.

### Arrays are also objects

Just a different type of object. Can call `shift(), unshift(), push() and pop()` on them.
