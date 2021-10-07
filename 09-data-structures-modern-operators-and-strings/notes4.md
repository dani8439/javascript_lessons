# Short Circuiting && and ||

& and Or logical operators. Can use them to do something called short circuiting

Logical Operators. Can use ANY data type, can return ANY data type, they do something called short circuiting or short circuit evaluation.

ex `console.log(3 || 'Jonas')` returns 3. Not a boolean value

Short circuiting means if the first value is a truthy value, it will immediately return the first value. Hence, returns the 3 as it's a truthy value, not true or false. Other operands aren't even evaluated. That's what we mean with short circuiting

When it comes to logical evaluations, the And operator works in the exact opposite way of the Or operator
End operator short circuits when first operand is falsy, and immediately returns it. (versus what happens with the OR, which short circuits when first operand is true)

And operand is only true if all operands are true. If first one is false, means entire result will already be false anyway. No need to look at any other operands

## In Summary

Or operator will return first truthy value of all the operands, or simply the last vlaue if all are falsy.
