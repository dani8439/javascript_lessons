# Handling an ESC key press event

Esc key is another way to click out of a modal.
In order to listen for keyboard events, still need to use `addEventListener()`
Keyboard events are global, do not happen on one specific element, and we usually listen on the whole document for them.

Three types of events for the keyboard.
`keydown`, `keypress`, or `keyup`.

`Keyup` is when we lift our finger up off of the key.

`keypress` is fired continuously as we keep our finger on a certain key.

`keydown` is fired as soon as we press down a certain key. This is the one we usually use.

Need to give the function a parameter to see what key is pressed, in this case, our `esc` key. Pass the function an event. (e) JS will call the function with the event as the argument.

When we print the e to the console, we get info about the event, and see which key was pressed.

Once we know what key was pressed, we can use it to close the modal when that key is pressed.
