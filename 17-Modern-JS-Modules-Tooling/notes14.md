# Let's fix some bad code: Part 2

Going to focus on 3 big areas of functional JS.

1. Immutability
2. Side effects and pure functions
3. Making data transformations using pure functions (map, filter and reduce)

## Immutability

In JS there is a way of making a structure immutable. Can call the function `Object.freeze()`

```
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
```

Can't pass in any new values to `spendingLimits`

`Object.freeze()` only freezes first level. Not deep freeze. Can still change things deeper inside the object.

Can do this with our `budget` object:

`budget[0].value = 10000;` and it'll work fine

Now need to fix the `addExpense()` function. Causing an error, because it's trying to mutate the outside object and has a side effect, can't do that! Anything that causes side effects is called an impure function.

First of all, should always pass in all the data the function depends on, into the function, so it doesn't have to reach into the outer scope. The function should not change any of these values.

First going to pass in state, then limits.

```
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
```

Then we are manipulating user by putting it to lowercase(), so should make a new const.

```
  const cleanUser = user.toLowerCase();

  if (value <= getLimit(cleanUser)) {
    budget.push({ value: -value, description, user: cleanUser });
  }
```

want to replace the manipulating of the object based on the new object of the state.

```
 return [...state, { value: -value, description, user: cleanUser }];
```

spread in old state, and add the new obj on.

what happens though if the if value is false? It returns undefined. That's not good. So we need to do it that if the if statement returns false, we just return the original array. Otherwise, we do the logic, using a ternary operator.

```
  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
```

Now our `addExpense()` function no longer produces side effects and is a Pure function!

Changed things to intermediate variables so they will work. In real world use something called currying to chain things together. Use composing to perform all things at once. Whole big world on itself.

```
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(newBudget1);
// console.log(newBudget2);
console.log(newBudget3);
```

## Data Transformations

```
const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();
```

Have this loop that loops over the array. Then updates each of the objects to contain the flag/attribute whenever the value is over the limit. But it's an impure function because it manipulates the object itself.

Want to not mutate the state, create a new state. Have to pass in limit and state in a few places, going back in previous function (watch video, not writing this down around 20 minute mark)

```
const checkExpenses = function (state, limits) {
  state.map(entry => {});
  // for (const entry of budget)
  //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
};
```

```
const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // for (const entry of budget)
  //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
};
```

Can simplify it into an arrow function if you want to:

```
const checkExpenses = (state, limits) => {
  state.map(entry => {
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};
```

Have now transformed the function into a pure function, which does not mutate anything, because the map method returns a new array. Created a new by mapping over the old. In each position of the array, either return a copy of the original entry plus the flag property, or return the original entry as it was. It's nice and pure, no side effects, doesn't manipulate anything.

```
const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
```

Have a for loop, and constantly manipulating/mutating. Goes against the spirit of Immutability. In functional code, you'll probably never see the `let` variable.

```
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);
};
```
