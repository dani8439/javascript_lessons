# The Nullish Coalescing Operator (??)

In last video, used OR operator to set a default value, in case first value was a false value.

```
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
```

when set number of guests to 0, JS will still take the default value of 10 and assign it to guests, as 0 is a falsy value, and goes to a second operand.

There is a solution to this, a new operator with the weird name of the nullish coalescing operator. It's an operater introduced in ES2020. Works almost the same way as the OR operator.

```
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
```

Why does this work? Because the nullish coalescing operator works with the idea of nullish values instead of falsy values. Nullish values are `null` and `undefined`. Doesn't include `0` or the empty string `''`. For nullish c.o. as if the 0 and '' were not falsy values, but instead truthy values as well.

Works with the principle of nullish values, and only nullish values will short circuit the evaluation here. So only if numGuests was null or undefined would it short circuit and return 10. So if `restaurant.numGuests = 0` was commented out, so that it was undefined, would it return 10 for both.

```
// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or ')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 10
```
