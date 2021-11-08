# Working with `bigint`

One of the primitive data types we never spoke about before is bigint. Special type of integers introduced in ES2020.

Learned in first lecture, numbers are represented internally in 64-bits. 64 1s or 0s to represent any given number. Of these 64, only 53 are used for the number itself, rest is for the position of the decimal point and the sign.

If there are only 53 bits to store a number, there's a limit on how big a number can be.

```
console.log(2 ** 53 - 1); //  9007199254740991
```

9007199254740991 is essentially the largest number JS can represent. It's 2 because we're working with base 2. This number is so important it's even stored into the Number name space as `.MAX_SAFE_INTEGER`. Any integer larger than this is not safe, meaning it cannot be replicated accurately.

```
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
```

Can see if you add 1 or 0 within the parentheses, it's incorrect. So if we do calculations for numbers bigger than this, it loses it's precision. Some big numbers do work. But sometimes they don't, so we call these unsafe numbers.

Can be a problem because in some situations we might need much bigger numbers, like with databases, or interacting with real 64 bit numbers. No way of storing that in JS. At least, not until now.

Starting from ES2020, a new Primitive was added called `bigint`. It stands for Big Integer, and to store integers as large as you want, no matter how big.

```
console.log(4822384234824829349234923498294928343294); // 4.8223842348248294e+39
console.log(4822384234824829349234923498294928343294n); // 4822384234824829349234923498294928343294n
console.log(BigInt(4822384234824829349234923498294928343294)); // 4822384234824829355742065295432158806016n
```

By using the `n` at the end of the number, it will be a `BigInt`. It will transform the number from a regular number to a `BigInt`. Can also create BigInt's, by using the `BigInt()` function, but without the `n`. Not quite the same number produced. Should probably only use the constructor function with small numbers for more accuracy.

All the usual operators work the same on `BigInt`. What's not possible is to mix `BigInt`'s with regular numbers.

```
console.log(10000n + 10000n); // 20000n
console.log(3646488248288838483483484384891919n * 10000000n); // 36464882482888384834834843848919190000000n

const huge = 2030040040139392929293n;
const num = 23;
// console.log(huge * num); // UncaughtTypeError: Cannot mix BigInt and other types
console.log(huge * BigInt(num)); // 46690920923206037373739n
```

Have to convert between types to both bigint. There are two exceptions to this, which are the comparison operators and the plus operator when working with strings:

```
console.log(20n > 15); // true
console.log(20n === 20); // false
```

when using the `===` JS doesn't do type coercion. So in the === example, they have different types. One is a bigInt. One is a regular Number.

Another exception is string concatenations.

```
console.log(huge + ' is REALLY big!!!'); // 2030040040139392929293 is REALLY big!!!
```

In this case, the number isn't actually converted to a string. Even the bigint number.

Also, the Math operations are not going to work. Can't take the square root.

```
console.log(Math.sqrt(16n)); // UnCaught Type Error
```

With divisions, bigint is indeed an integer.

```
console.log(10n / 3n); // 3n
console.log(10 / 3);
```

It returns the closer bigint, and cuts the decimal part off.
