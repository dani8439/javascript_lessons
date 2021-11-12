# Numeric separators

Starting from ES2021 can use a format called numeric separators that's easier for us to represent and understand.

```
const diameter = 287460000000;
```

Is very hard to read as a separator. Usually use a comma as the thousand separator, becomes 287,460,000,000. Fortunately, can now do the same in JS. Numeric separators are underscores `_` to separate numbers making them easier to parse.

```
const diameter = 287460000000
BECOMES
const diameter = 287_460_000_000
console.log(diameter)
//
287460000000
```

The JS engine ignores the underscores and just prints the numbers as if without them. Because it doesn't matter where we place them, can put them anywhere.

```
const priceCents = 345_99;
console.log(priceCents); // 34599
```

Can use the underscores to give meanings to parts of our numbers.

```
const transferFee1 = 15_00;
const transferFee2 = 1_500;
```

Both are the exact same number, but the underscore in different places gives different meanings.

There are some restrictions as to where we can place the underscore. Can only place underscores between numbers, can't with decimals. Or at the beginning of a number.

```
const PI = 3.1415;
console.log(PI);
```

Can't do `3_.1415` or `_3.1415`, or `3.1415_` it's illegal. Also can't place two in a row.

When we try to convert strings that contain underscores to a number, that won't work as expected:

```
console.log(Number('230_000'));
// NaN
```

Returns `NaN`. Means you should only use the numeric separator when you are writing down numbers in the code. If you need to store the number in a string in an API, you should not use underscores in there, then JS will not be able to parse the number correctly out of the string. Will then introduce bugs. Same is true with the `parseInt()` function. It will ignore everything after the underscore.

```
console.log(parseInt(230_000)); // 230
```
