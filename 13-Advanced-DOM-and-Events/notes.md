On a link, when we have a `#` as the hyperlink, that will make the page jump to the top. That's the default behavior for a hyperlink.

To prevent a default behavior, get the event `e`, and call `e.preventDefault()`.

Remember that `document.querySelectorAll` returns a node list.
A node list is not an array. But it does have the `.forEach()` method.
