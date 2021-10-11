# Enhanced Object Literals

Restaurant Object is an object literal, wrote it literally in code using curly braces syntax `{}`

ES6 Introduced 3 ways that make it easier to write Object Literals.

1. Say have an object outside of the main object. Move openingHours out into it's own object. Before ES6, if we still wanted to have those hours in the main object, would have to write. openingHours (property name) and then set it equal to openingHours. `openingHours: openingHours,` `restaurant` object is then restored.

Problem, and this can become annoying, is that the property name is the same a the variable name from where we are getting this new object. With enhanced object literals, don't have to do this.

can just put:

`openingHours,` in the object, which will take the openingHours object and put it into the restaurant object, and create a property name with the exactly that variable name. Can change the name, but have to change everywhere.

2. About writing methods. In ES6 no longer have to create a property and then set it to a function expression as we have always been doing. Essentially create a property, then set it to a function expression is how we've done it. Can do it in an easier way. Get rid of function and semicolon.

```
order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
```

becomes

```order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
```

It's a personal preference to write function

3. Can now compute property names instead of having to write them out manually and literally. Compute means calculate.

Say, had an array with all the weekdays.

`const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];`
Wanted to take the property names out of the array. Can do that by using the square brackets syntax, and put any expression inside `[]`

```
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
   fri: {
    open: 11,
    close: 23,
  },
   sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}
```

Becomes:

```
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
    [weekdays[4]]: {
    open: 11,
    close: 23,
  },
   [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
```

or even:

```
 [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
```

Computed teh day as `day-6` this is sometimes extremely helpful to be able to do this.
