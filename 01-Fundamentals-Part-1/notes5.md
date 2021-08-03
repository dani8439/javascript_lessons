# Operator Precedence

JavaScript has a well defined order of operator precendence. Order in which operators are executed.

Precedence table on MDN.

In right to left operation:
`x = y = 25 - 10 - 5;`
Will start with the `-` as it has a higher precedence.

`x = y = 10;` then only two operators left. Which is executed right to left, we have `y = 10`, `x = 10` then only left with `x = 10` so then `x` and `y` are equal to `10`

Has to be that way, otherway around, it wouldn't work. It would equal `undefined` because declared as empty variables.

# Operations within Parentheses

Executed first.
