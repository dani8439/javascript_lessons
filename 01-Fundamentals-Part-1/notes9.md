# Truthy and Falsy Values

Falsy values are values that are not exactly false, but will become false when converted into a boolean.

Only five falsy values:
`0, '', undefined, null, NaN`

False is already false, doesn't need to be converted into a boolean.

Everything else is Truthy, or true.

Can use the `Boolean()` function to convert to true or false.

In practice, conversion to Boolean is implicit, not explicit. It's always type coercion that JavaScript does automatically behind the scenes.

But when?

In two scenarios, when using logical operators, or in a logical context, such as in the condition of an if/else statement.
