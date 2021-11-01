# Looping Arrays `.forEach()` with Maps and Sets

Learned about forEach on arrays. However, it's also available on Maps and Sets.

```
currencies.forEach(function(value, key, map) {

})
```

The three arguments passed into the callback function are the value, the key, and the map itself. Very similar to how it is for `.forEach()` with arrays.

With a `Set` the arguments passed in are pretty much the same, the key, value, and the map.

```
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
```

Key is exactly the same as the value in a Set, as a Set doesn't have keys, or indexes. Essentially the key doesn't make any sense at all, doesn't have to be there. Could have ommitted the second arg. But then it would be different from the others, therefore decided to keep the same signature. Same three parameters. Just set the second one to the first one.

And `_` in JS means a throwaway variable, a convention that's unnecessary. Can change the `key` arg to `_`.

`currenciesUnique.forEach(function (value, _, map)) `
