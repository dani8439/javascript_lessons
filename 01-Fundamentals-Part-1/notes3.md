# Declaring Variables

`let` and `const` were introduced in ES6. `var` keyword is the old way of declaring variables.

# `let` Keyword

Use the `let` keyword to declare variables that can change later.

It's totally okay to reassign a variable later on. We "mutate" the variable later on.
When we want to mutate a variable, a perfect use case is to use `let`. Can declare empty variables with `let`.

# `const` keyword

Use the `const` keyword to declare variables that are not supposed to change at any point in the future. The value in a `const` variable cannot be changed. It is an immutable variable.

Because `const` variables are immutable, we cannot declare empty `const` variables.

# When to use `let` and when to use `const`

Recommend using `const` always, and only use `let` when you are really sure it will change in the future. It's a good practice to have as little variable mutations or variable changes as possible. Introducing variable changes can get errors/bugs in your code.

# `var` keyword

Should be completely avoided, but need to know because of legacy reasons.

While it looks like on the surface `let` and `var` are the same, below the surface they are different. Will learn more about the differences later.

Basically should never use `var`

# Technically don't even have to declare a variable at all.

But it's a terrible practice. Doesn't create a variable in the current scope, creates it on the global object.

Should always properly declare variables.
