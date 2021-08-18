# Handling Click Events

An event is something that happens on the page, for example a mouse moving, click, keypress, etc.

With an event listener can wait for a certain event to happen, and then react to it.

In order to listen to events, need to select the event where it should happen.

Need to pass into the event listener the type of event we're looking for, and then need to tell it what to do (the reaction) do that by definiing a function. That function is called the event handler, it'll contain the code that should be executed whenever the click event happens.

`.addEventListener()` is a special kind of function. As a second argument, it expects a function value. Specify what happens inside of the function.

That function is an expression, similar to

```
const x = function() {
    console.log(23)
}
```

We've done the exact same thing. Just did not assign it to any variable, passed it directly into the `addEventListener` method.

First argument was name of event, and second was a function value. Do not call the function anywhere, only define it and pass it into the event handler. JavaScript engine will call the function as soon as the event happens.

Usually whenever we get from the user interface (user input field), it's usually a string. Have to change it to do a comparison.

If we want to convert numbers to numbers, have to convert the string to a number.
