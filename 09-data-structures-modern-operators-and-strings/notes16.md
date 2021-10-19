# Working with Strings: Part 3

One of the most powerful methods for strings is `.split()`

`.split()` allows us to split a string into multiple parts based on a divider string.

```
console.log('a+very+nice+string'.split('+'));
// Returns
(4) ['a', 'very', 'nice', 'string']
```

Returns an `Array`. Everything is split up by the divider string.

Can use the power of destructuring to create variables directly. Will create an array with two elements.

```
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
```

Could have done the same thing with the `.slice()` method but would have been more complicated, and for longer sentences somewhat impossible.

`.join()` method is essentially the opposite of `.split()`. Also pass in a divider string.

```
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Jonas SCHMEDTMANN
```

Anything works in the divider string, but a space makes the most sense. Combination of `.split()` and `.join()` is very powerful.

To say, capitalize first letter in a string:

```
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
```

Can also replace code with:

```
    // take the word, replace the first character - position 0, with character to Upper Case. Gives same result.
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
```

Padding a string: means to add a number of characters to a string until the string has a certain desired length.

Using `.padStart(arg1, arg2)` can add characters to a string. First argument passed in is the length we want for the string, second arg is the character we want to pad the string with.

Also `.padEnd()` and pad the end of the string.

```
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
// +++++++++++Go to gate 23!+++++
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));
// ++++++++++++++++++++Jonas+++++
```

More real world example of padding. Credit Card Number on Internet, never see the entire number. Only see last 4 digits, the rest is masked.

Now to convert a number to a string, can do the `String()` method. But another easy was is to take the number, and just add an empty string to it. Ex: `const str = number + ''`; It works because when one of the operands is a plus sign of a string, it will convert it all to a string.

Need to take out last 4 numbers, and use `padStart()` with other characters, with a symbol in it's place.

```
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836)); //****7836
console.log(maskCreditCard(433784638646447384)); //**************7360
console.log(maskCreditCard('334859493847755774747')); //*****************4747

```

Last simple method is the `.repeat()` method. Simply allows us to repeat the same string multiple times.

```
console.log(message.repeat(5));
/// Returns
Bad weather... All Departures Delayed Bad weather... All Departures Delayed Bad weather... All Departures Delayed Bad weather... All Departures Delayed Bad weather... All Departures Delayed
```

Didn't talk about all string methods. Can search on MDN.
