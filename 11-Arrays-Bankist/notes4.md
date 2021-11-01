# Creating DOM Elements

Always best to manipulate within a function, and not do things in the global context. Pass the data a function needs actually into that function.

`.insertAdjacentHTML()` accepts two strings. First is position in which we want to attach the html **MDN** documentation explains it.

The second arg, is the string containing the html we want to insert.

`.innerHTML` vs `.textContent`

`.textContent` simply returns the text itself. `.innerHTML` returns everything, including the HTML.
