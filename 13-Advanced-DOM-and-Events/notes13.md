# Implementing a Sticky Navigation: The Scroll Event

Effect is that the menu bar becomes attached to the top of the page when you scroll.

Make it sticky by adding a sticky class whenever the page reaches a certain position.

Going to use the scroll event now, but there is a better way to do it.

scroll Event is available on `window` not document. Fired each time we scroll on our page.

```
window.addEventListener('scroll', function (e) {
  console.log(e);
});
```

scroll event is not really efficient and should be avoided.

In the scroll event, the event object is pretty useless, don't even need it.

```
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
});
```

Navigation should become sticky as soon as we reach the first section/position.
