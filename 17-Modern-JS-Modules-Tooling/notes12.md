# Let's fix some bad code part 1

Objects `var budget` that contails an array of objects. Has a value, a description and a user. two users jonas and matilda

Object of spending limits.

Function to add a new entry for expenses. Not a descriptive function.

addExpense checks if new expense is above the limit.

Finally have one function that will log all the expenses.

```
const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  let lim;
  if (spendingLimits[user]) {
    lim = spendingLimits[user];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    budget.push({ value: -value, description: description, user: user });
  }
};
```

Checks to see if `spendingLimits[user]` exists. If it does not exist, limit will be 0. If it does exist, we return it.

becomes

```
const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  if (value <= limit) {
    budget.push({ value: -value, description: description, user: user });
  }
};
```

If we try to add a value that's greater than the limit, it's not added.

Works fine: `const limit = spendingLimits[user] ? spendingLimits[user] : 0;`
But we can make it even more clever! (If we understand it) Can use optional chaining. And nullish colaescing operator

`const limit = spendingLimits?.[user] ?? 0;`

```
  if (value <= limit) {
    budget.push({ value: -value, description: description, user: user });
  }
```

Can be improved with enhanced object literal syntax. Don't need to repeat user user, description, description.

```
  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
```

Next one:

```
const check = function () {
  for (const el of budget) {
    let lim;
    if (spendingLimits[el.user]) {
      lim = spendingLimits[el.user];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = 'limit';
    }
  }
};
check();
```

Function checks expenses, so changing name to checkExpenses to make it more descriptive is a good idea.

Code is similar to what we did above with optional chaining. First thing we do is change `el` to `entry` as it's more descriptive. Then update that it's `entry.user` so it's checking for the right thing in the logic statement.

```
const checkExpenses = function () {
  for (const entry of budget) {
    const limit = spendingLimits?.[entry.user] ?? 0;

    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  }
};
```

Now as code is essentially the same, should refactor so it's DRY.

```
const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  const limit = getLimit(user);

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};

...

const checkExpenses = function () {
  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
```

But we can also get rid of the block entirely in `checkExpenses`. Don't need the brackets.

```
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
```

Can do the same for above:

```
const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
```

for bigExpenses, change name to `logBigExpenses` as that's all it's doing. Then change `limit` that's passed in to `bigLimit`

```
const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const el of budget) {
    if (el.value <= -bigLimit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);
```

Change `el` to `entry`. Transform `entry.description.slice(-2) + '/'` can change into a template literal.
`output +=`${entry.description.slice(-2)} / `; // Emojis are 2 chars`

**Observation** getting the emoji out of the string by taking the last 2 characters. Emoji's count as 2 characters not one like a letter or number, etc. If you did only 1, would get a weird sign.

Can next get rid of the `if`

```
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

```
