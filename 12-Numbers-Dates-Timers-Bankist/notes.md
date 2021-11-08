# Converting and Checking Numbers

The first thing to know about numbers, is that all numbers are representing internally as floating point numbers. (Always as decimals) even if we don't write them as decimals.

That's the reason why we have one data type for numbers. Numbers are represented internally in a 62 based format, Binary. Only composed of 0's and 1's. Very hard to represent some fractions in this form versus base 10.

Base 10 is 0 to 9. Binary is base 2 - 0 and 1.

One example is the fraction 0.1. Results in very weird results.

```
console.log(0.1 + 0.2)
// 0.30000000000000004
```

In binary, you get an infinite fraction. Which explains the odd response. JS does some rounding behind the scenes in some cases, to hide these problems. But some operations cannot mask that behind the scenes they cannot mask certain fractions. Other languages have the same system/problem (php/ruby). You can't do really precise or scientific operations in JS.

To convert from a string to a number, can use `Number()`

`console.log(Number('23'))`

Easier way is `console.log(+'23')`

This works, because when JS sees the `+` operator, it does type conversion. Converts all the operands.

After converting, we can also do parsing. We can parse a number from a string.
On the `Number` object (because remember all numbers are objects), can call some methods, such as `parseInt`. Can specify a string, and that string can even include some symbols. JS will automatically try to figure out the number that's in that string.

`console.log(Number.parseInt('30px'));` results in 30. 30 is a number and not a string.

In order to make this work, the string needs to start wtih a number, not a character.

`console.log(Number.parseInt('e23'))` results in NaN. Kind of like type coercion, but even more advanced tries to get rid of unecessary symbols that aren't numbers.

the `parseInt()` function accepts a second argument, which is the radix, the radix is the base of the numeral system we are using.

`console.log(Number.parseInt('30px', 10)); // 30`

If we were working with Binary, then we would write 2, and the result would be completely different.

`console.log(Number.parseInt('30px', 2)); // NaN`

`parseInt` stands for parse Integers. But there is also `parseFloat`

`parseFloat` reads the decimal from our string, a floating point number.

`console.log(Number.parseFloat('2.5rem'))` becomes 2.5.

Can even have some white space around it, won't effect it. Both functions are global functions. Don't have to call them with `Number`, but doing `Number.parseInt()` is the more traditional way to do it. Because using `Number` provides a namespace.

Another function of the Number namespace is `isNaN`. Can use to check if any value is a number.

```
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')) // true
console.log(Number.isNaN(20 / 0)); // false
```

Dividing by 0 leads to infinite. Is not allowed in mathematics, gives us infinity. infinity is not NaN. So gives false.

23 / 0 in the console results in Infinity

There is a better method called `.isFinite()`. Is the best way to check if a value is a real Number, because `isNaN` can be confusing. Best method, at least when working with floating point numbers. Can also us `.isInteger` as well.

```
console.log(Number.isFinite(20)); // true Not NaN
console.log(Number.isFinite('20')); // false NaN
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false because gives Infinity
```

`.isInteger()`

```
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // tre
console.log(Number.isInteger(23 / 0)); // false
```

`isFinite()` and `parseInt()` should be your go toos for checking if something is a number, or reading the value out of a string.
