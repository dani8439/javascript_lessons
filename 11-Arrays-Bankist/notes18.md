# More Array Practice:

1. Get all the movements out of the account array, flatten it, filter it for positive values, and then add all together.
   `const bankDepostSum = accounts.map(acc => acc.movements).flat();`
   can become:

```
const bankDepostSum = accounts
 .flatMap(acc => acc.movements)
 .filter(mov => mov > 0)
 .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepostSum);
```

2.  Count how many deposits have been in the bank with at least $1000.
    One way of doing it:

```
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
```

```
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
```

reduce always has the snowball, accumulator as first arg. in other example, it's previous sum + current value.
In this case, our accumulator will be the number of movements that are > 1000. Start counting at 0. That initial value is like storing anything outside of a loop, where we keep storing a new value. That new value might very well be a counter where we update depending on position. What matters is that our reduce function here works. We can even use reduce to simply count something in an array. What's important to keep in mind, is we have this accumulator value outside (0), which we can use to reduce the array down to whatever we want. In this case it's a counter, but we can do anything. The count + 1, know there is an operator for simply adding 1. ++. But, it doesn't work. With the ++ operator

```
let a = 10;
console.log(a++);
// 10
```

Returns 10, not 12. Why? The `++` does increment the value, but it returns the previous value. When we use it like this, it still returns the old value. Same thing happens if you try to use it in reduce `reduce((count, cur) => (cur >= 1000 ? count++ : count), 0)`. It does incremement it, but returns the previous value, so doesn't work.

Can use the so called **prefix** plus plus operator. Write it before a instead.

3. Advanced case of `reduce` to create a new object.

`reduce` can be used to replace a lot of methods.

Have to return the accumulator because while it's implicitly returned in an arrow function, it's not once within a function body. Also, as we are creating an object with deposits and withdrawals, and it's all being called on the sums accumulator, it's just `sums.deposits` and `sums.withdrawals` that's getting the current element added on.

```
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);
// {deposits: 25180, withdrawals: -7340}
```

Can also change the logic a little, remove the duplication. Can actually use the `[]` to conditionally select `deposits` or `withdrawals` based on the condition. Using bracket notation instead of dot notation.

```
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); // {deposits: 25180, withdrawals: -7340}
```

Really helpful in many situations to create a brand new object using `reduce`.

4. Capitalizing

```
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
```

First we create a list of exceptions, words we don't want capitalized and store it in an array.
Then we convert the string to lowercase.
Then we split it on the spaces so it's an array of strings.
Then we map over that, because we want an array of the same exact length that we've passed in. We check to see if the exceptions include the word that's passed in. Using the ternary operator, if it is, we do nothing, if not, we capitalize the word.

Then we join the array back together on spaces.

We create a separate function called `capitalize` which takes the first character in the string, converts it to upperCase, then it slices and returns the rest of the string, regardless of length of characters, starting at the 1 index (technically the second character in the string).

At the end we pass our new titleCase constant into the capitalize function, so it converts the first word, so even if it is an exception, the title doesn't look funky.
