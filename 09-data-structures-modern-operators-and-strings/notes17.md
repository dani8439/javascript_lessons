# Logical Assignment Operators

New in ES2021

```
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

// {name: 'Capri', numGuests: 20}
// {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}}
```

Works because of short circuiting. If the first value is true. Then it doesn't proceed. But if it doesn't and it's falsy, then it's assigned to 10.

## OR assignment operator. `||=`

Can be rewritten as:

```
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

```

This operator assigns a value to a variable if that variable is currently falsy.

It works beautifully save in one situation. When a value is set to `0`. Because `0` is a falsy value.

To get around that, have the **Logical Nullish Assignment Operator** `??=`

Nullish means Null or undefined.

Nullish will assign a value to a variable if that current variable is nullish.

## Logical And Assignment Operator

`rest2.owner = rest2.owner && '<ANONYMOUS>';`

short circuiting. If first value is falsy. But in this one it's truthy, so the second value is returns.

Can be written as the And assignment operator

```
rest1.owner &&= '<ANONYMOUS>';
```

Assigns a value to a variable if it is currently Truthy. If falsy, it won't. So it doesn't work in the one restaurant where there is no owner, it stays the same.
