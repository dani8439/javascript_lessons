# Equality Operators `==` VS `===`

Just like the comparison operators, `===` returns a true or false value. But true is only true if both sides are exactly the same with triple equals sign. This is the strict equality operator, doesn't perform type coercion.

But with a double equals `==` the loose equality operator. That one actually does type coercion.

` '18' === 18` returns false, but `'18' == 18` returns true.

General rule for clean code, is to avoid the loose equality operator and only use the strict. Think it's better to convert the value manually before performing comparison.

# Different operator !==

Bang operator of `!=` or `!==` also loose and strict like with double and triple equality.
