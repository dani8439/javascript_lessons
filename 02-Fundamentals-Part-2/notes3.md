# Function Declarations vs Function Expressions

There are different ways of writing functions.

Functions shown in last lecture are function declarations. Use function keyword to declare a function.

Arguments and parameters aren't actually the same. Parameter is the placeholder. Argument is the actual value we use to fill in that placeholder parameter.

# Function Expression

Write a function without a name, but store it in a variable. It's a function without a name, also called an anonymous function. Called the same way you call a function declaration. Works the same way too.

Expressions produce values.

In JavaScript, functions are just values.

# Difference between Function Declaration and Function Expressions

Can call a function declaration before it's defined. Will get the same result. If we do it with a function expression, get an error of cannot access before initialization. Happens because of hoisting. Can call it before it's defined, if necessary.
