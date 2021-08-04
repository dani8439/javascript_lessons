# Template Literals

Single quotes `''` do not work when trying to write strings. Must be double quotes. `""`.

JavaScript will convert a number to a string, so it can concatenate, join them with the rest of the strings. (Type Coersion)

Template literals let us write a string in a more normal way, and insert variables directly into the string, they will be interpreted and replaced. Have to use backticks to write them. ``Then a`${}` to interpret things within.

`I'm ${firstName}, a ${year - birthYear} year old ${job}`

Can also use backticks to write all strings.
`console.log(`Just a regular string...`)`

Also can use backticks to write multi-line string. Can just hit return, to space things out and it will interpret it as a mutiline element.

`console.log(`String
multiple
lines`);`
