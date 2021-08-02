## Values

What is a value? A value is a piece of data.
Most fundamental unit of information we have in programming.

One extremely useful things we can do with values is to store them into variables that can be reused.

Imagine a variable like being a box. In the real world, a box can hold some objects (like a book). Can put a label on the box to describe it. Can then find the box later when we need it, by using that label. Variables work in the exact same way.

Variables let you change in one place, where it's declared. Will automatically change everywhere else it is referenced.

## Conventions and Rules for Naming Variables

1. CamelCase. Whenever you have multiple words in a variable name, first word is in lowercase, any following words first letter is in uppercase.

2. Can not write something like `3years` and set it to a value. It's an illegal name, cannot start with numbers. Will throw a `SyntaxError` in the console.

3. Variable names can only contain letters, numbers, underscores or the $ sign.

4. Cannot declare a variable with the word `new`. It is a reserved keyword, same thing goes for `function`. Can name something as `_function` or `$function`. Only way it is allowed.

5. `name` is reserved, but still technically allowed. But in some cases can create problems. Never call variables just `name.

6. Another convention is to not start a variable name with an uppercase letter.

7. Variables written in all uppercase are reserved for constants, that we know will never change. ex: `let PI = 3.14159`

8. Should make sure that variables names are descriptive. Helps create cleaner cold. When reading the name, should be clear what value the variable is holding.
