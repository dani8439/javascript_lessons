# Optional Chaining `?.`

Feature of objects and arrays.

Say wanted to get the opening hours for our restaurant on Monday.

Not a big deal to add logic of say, if `restaurant.openingHours.mon` exists, then `console.log(restaurant.openingHours.mon.open)`

It's fine for one property. But maybe want more. Quickly becomes convoluted. Can get out of hand with deeply nested objects very quickly with lots of optional properties.

ES2020 introduced optional chaining. With it, if a certain property doesn't exist, then undefined is returned immediately, so can avoid the other error.

becomes

`console.log(restaurant.openingHours.mon?.open);`

Only if property before the question mark exists, then the other property will be read. Otherwise, undefined will be returned. Exists is the nullish concept. It exists if it's not null, and not undefined.

Can have multiple optional chainings together.
Can help keep track of multiple bugs we might not expect.

## Optional Chaining on Methods

Can check if a method exists before calling it as well.

```
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
// returns Method does not exist
```

## Optional Chaining on Arrays

Can use it to check if an array is empty

```
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name) ?? 'User array empty';

// returns Jonas
```

```
console.log(users[0]?.name ?? 'User array empty');
```

Is a lot more concise and easier than writing:

```
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
```
