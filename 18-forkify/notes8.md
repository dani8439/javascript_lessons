# Event Handlers in MVC: Publisher-Subscriber Pattern

How to listen and handle events in our MVC architecture using the publisher-subscribe pattern.

Right now we're listening for the hashchange and load events in the controller. Doesn't really make sense. Everything that's related to the DOM, the view, should be inside the view.

```
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
```

The handler on this function is in the controller. Have a problem.

How can we solve this problem?

👉 Events should be handled in the controller (otherwise we would have application logic in the view)
👉 Events should be listened for in the view (otherwise we would need DOM elements in the controller)

In the publisher-subscriber pattern we have a publisher - the code that knowns when to react (`addHandlerRender()`) On the other hand we have a subscriber (code that wants to react) (`controlRecipes()`). Publisher does not know yet that the subscriber exists. Subscriber is the controller that hte view can't access.

Solution is we can now subscribe to the publisher, by passing in the subscriber function as an argument. As soon as program loads `init()` function is called, which calls the `addHandlerRender()` function from the view.

As we call `addHandlerRender()` we pass in `controlRecipes()` as an argument. So the two functions are finally connected. `addHandlerRender()` listens for events `addEventListener()`, and uses the `controlRecipes()` as a callback. (publisher-subscriber.png file displays flow chart.)

the handler subscribes to the publisher (the listener in this case). As the publisher publishes the event, the subscriber is executed.

```
  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }
```

Not a private method because it needs to be public so we can call it in the controller:

```
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();

```
