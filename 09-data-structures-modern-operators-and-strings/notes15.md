# Working with Strings: Part 2

For changing the case of a string:

`.toLowerCase()` and `.toUpperCase()`

```
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
```

Method to get rid of excess whitespace: `.trim()`

Can fix case mistakes and excess white space in multiple steps, or a single step:

```
const loginEmail = '  Hello@Jonas.Io \n'; // backslash n is an enter character

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
```

One of the most important parts about strings is to replace parts of strings. Use the `.replace()` method, and pass in arguments of what you are replacing, and what with.

```
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
```

`.replace()` only replaces first occurrence. Is case sensitive.

Very soon JavaScript will have a method called `.replaceAll()` (works already)

```
console.log(announcement.replaceAll('door', 'gate'));
// All passengers come to boarding gate 23. Boarding gate 23!
```

Another expression is to use a RegEx, regular expression.
`/g` flag stands for global.

```
console.log(announcement.replace(/door/g, 'gate'));
// All passengers come to boarding gate 23. Boarding gate 23!
```

Three methods that return booleans: `includes()`, `.startsWith()`, and `.endsWith()`

```
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// true
// false
// true
// Part of the NEW Airbus family
```
