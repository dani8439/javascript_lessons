# `some` and `every`

revisit `includes`. Can see if an array includes a certain value. Can only really test equality. Returns a true or false. What if we wanted to test for a condition instead? That's where the `some` method comes into play.

```
console.log(movements);
console.log(movements.includes(-130));
// true
```

Say we want to know if there are any positive movements (numeber above 0) and deposits into the account?
`some` also has the callback function to search the array.

```
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// true
```

`some` is very similar to `includes`. But `includes` checks for equality, and `some` checkes for a condition.

```
// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some(mov => mov === -130));
```

Would have named the method `any` not `some`. Ha. If there is any method where it returns true, then the `some` method returns true.

Close cousin of `some` method is `every`.

`every` only returns true if all of the elements in the array satisfy the condition passed into the callback function.
That's why it's called `every`.

```
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true
```

Up until this point, we have always written the callback function directly as an argument into our array methods. However we could also write this function separately, and pass it as a callback.

No reason for the callbacks to be directly written.

```
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // 5) [200, 450, 3000, 70, 1300]
```

In practice, it's something we do sometimes as it's better for the DRY principle.
