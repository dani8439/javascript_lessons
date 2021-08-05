# Type Conversion and Coercion

Converting between types is something we do in every programming language.

# Type Conversion

When we manually convert from one type to another. Explicit.

When we have a string and add something to a string, JavaScript automatically concatenates it. So `'1991' + 18` becomes `199118` not, `2009`.

Way we convert a string to a number is to use the built in `Number()` function. So can do: `console.log(Number(inputYear))` to get `1991`

When you try to convert something to a number, that's not a number, JavaScript will give you the value `NaN` or Not a Number actually means Not a Valid number, showing that it's failed in the conversion to produce a new number. Type of `NaN` is actually `number`.

Can use the `String()` function to convert something to a string.

When in the JavaScript console in dev tools, the types and numbers will be different colors when outputted to the console to show the difference. Easier to see in dark mode.

JavaScript can convert to one more type, a boolean. Cannot convert something to undefined or null. Rarely have to do it manually though, as JS does type coercion.

# Type Coercion

When javascript automatically converts the types behind the scenes for us. Happens when an operator is dealing with two values that have different types. JS will convert one value to match the other value so the operation can be executed.

Whenever there is an operation between a string and a number, the number will be converted to a string. Same thing happens in template literals.

Not all the operators do type conversion to string.

With the minus operator, strings are converted to numbers, and not the opposite way around, and same thing goes with the multiplier, and dividing, and logical operators (>, <, >=, <=)

Type Coercion can introduce unexpected bugs into our programs, if you don't know about what happens automatically.
