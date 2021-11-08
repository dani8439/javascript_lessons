# The Remainder Operator

Has some special use cases. Returns the remainder of a division.

5 % 2 = 1.

```
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666 // 8 = 2 * 3 + 2
```

Very useful to check if a number is even or odd in programming. When is a number even, if it's divisible by 2. Means the remainder is 0.

```
console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5
```

Can use that knowledge to check if a number is even or not.

```
const isEven = n => n % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // false
```

This works to check if any number is divisible by any other number. Whenever the result of the remainder is 0, then that means the first number is completely divisible by the second. This is sometimes very important to know in programming.

Whenever you need to do something every Nth time, the remainder operator is a good way to check for that.

```
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

```
