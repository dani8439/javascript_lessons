# Math and Rounding

## With Integers

Have already been using lots of mathematical operations (+ - \* /, etc.)

`Math.sqrt` Square Root. Just like many other functions, it's part of the `Math` namespace.

Same can be done with exponentiation

```
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // cubic root - 2
```

Only way to do cubic root is as above.

`Math.max()`: returns the maximun value. Does type coercion. But it doesn't do parsing.

```
console.log(Math.max(5, 8, 23, 11, 2)); // 23
console.log(Math.max(5, 8, '23', 11, 2)); // 23
console.log(Math.max(5, 8, '23px', 11, 2)); // NaN
```

Also have `Math.min()`

```
console.log(Math.min(5, 8, 23, 11, 2)); // 2
```

`Math.PI`

How to calculate the area of a circle:

```
console.log(Math.PI * Number.parseFloat('10px') ** 2);
```

`Math.random()` to be able to generate good random numbers when we need them.

`Math.trunc()` removes the decimal part.

```
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
// 0.. 1 ->  0...(max - min) -> min... (max - min + min) -> min... max

console.log(randomInt(10, 20));
```

Rounding, start off by rounding integers

`Math.trunc()` removes the decimal parts.

`Math.round()` rounds to the nearest integers

`Math.ceil()` rounds up.
`Math.floor()` rounds down.

```
console.log(Math.trunc(23.3)); // 23
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); //
console.log(Math.floor(23.9)); //
```

All of these methods do type coercion. Doing say `Math.floor('23.9')` will work and produce 23. May think `trunc` and `floor` are very similar. Indeed they do the same when dealing with positive numbers. Both cut off the decimal part. But, for negative numbers, it doesn't work this way. It will just cut off the decimals in trunc, and go to the number, but with `.floor()` it works in reverse in terms of rounding, and is a little bit better, will round up. Works in all situations whether working in negative or positive situations.

```
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24
```

Alter the original function from `Math.trunc()` to `Math.floor()` so it will work in all situations. Positive or negative inputs.

## Floating Point Numbers

Works in a slightly different way. In decimals we have to specify the number, and then on that number we call `.toFixed()` method in parentheses. Converted to 3. But the 3 is white, not purple (in the console) means it's actually a string. `.toFixed()` always returns a string and not a number.

```
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)) // 2.35 NUMBER
```

With 3 passed in, adds zeroes until we have 3 decimals like specified. Can coerce using the `+` operator. The rounding decimals works kind of like string methods. 2.7 is a primitive. Primitives don't have methods. Behind the scenes, JS will do boxing, will transform it to a number object, call the method on the number object, then when it's done, it'll convert it back to a primitive.
