# Data Types

Everything in JavaScript is either an object, or a primitive. A value is only a primitive when it's not an object.

## Seven Primitive Data Types

1. Number: floating point numbers, always have decimals even if you don't see or define them. `let age = 23;`
2. String: Sequence of characters. Used for text. Always put them in quotes. `let firstName = "Jonas";`
3. Boolean: Logical type taht can only be `true` or `false`. Used for taking decisions with code. `let fullAge = true;`
4. Undefined: Value taken by a variable that is not yet defined ('empty value') `let children;`
5. Null: Also means 'empty value'
6. Symbol (ES2015) Value that is unique and cannot be changed **_(Not useful for now)_**
7. BigInt (ES2020) Larger integers than the Number can hold.

**JavaScript has dynamic typing:** We do **_not_** have to manually define the data type of the value stored in a variable. Instead, data types are determined **automatically.** It's the value that has the type, not the variable.

With Dynamic typing, first time we declare a variable, we declare with `let`. Next time we want to change it, do not need to write let again, just the variable name and the new value.

Bug in `console.log(typeof null)`. Says it's an object, but that's wrong. Should return null, just as `typeof undefined` returns `undefined`. Leftover bug from legacy code.
