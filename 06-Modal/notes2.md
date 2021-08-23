# How to manipulate Classes with JS.

First thing we have to do, is to react to a click on each button. Need to attach an event handler to each of the three buttons.

Finished last video by learning how to do something for all three buttons at same time, used a for loop that looped over the node list, an array holding all of the buttons.

`btnsOpenModal[i]` is the current element at each iteration.

In order to respond to a click event, need to attach an addEventListener. event handler and event listener are pretty much the same thing.

Attach the click event, and then an anonymous function/function expression.

Don't want to just console.log, want to display the modal that's already hidden in the html. Using JS, will remove the hidden class to display the modal.

Going to remove the class from the classList. Can remove multiple classes, using remove method (has multiple methods on it), do so by separating them by commas within arguments.

`modal.classList.remove('hidden', 'anotherClass');`

Dot is not used for the class name here. Dot is only for the selector.

Can also add classes, or check if an element contains a certain class or not.

Once click on modal, can see hidden class has been removed from html.

Need to remove the hidden class from behind as well (so that everything blurs out when you click on the modal)

Do that the same way with `overlay.remove('hidden')`

Define the function, and JS engine calls it when the click happens.

Usually when we click on area outside of the window, that closes the modal window too. Want the code to be executed when we click on the overlay as well. Do a separate addEventListener to do that.
