# Event Propogation in Practice

If you put an event in both the child and the parent, it happens twice.
It's as if the click event has also happened on the parent. (demonstrated in the navlinks in HTML)

```
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
```

`e.target` the target is essentially is where the event originated, where it first happened. Not the element on which the handler is attached, just where the click happens.

```
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target);
});
```

target is the same on all clicks. Appears in all of them, because its handling the exact same event, because of event bubbling. Event originates at the bottom, then bubbles up to it's parent element and so on until reaching the top of the DOM tree.

Besides the target, there's also the `currentTarget` That is the element on which the handler is attached.

`e.currentTarget` is equal to the `this` are exactly the same in any event handler.

We can actually stop event propogation, using `e.stopPropogation()`. Makes sure events never reach or bubble up through the chain. Usually not a good idea in practice, but can be done:

```
  e.stopPropagation();
```

event handler functions are listening for click events that happen on the element itself. And they are also listening for events that keep bubbling up from their child elements.

Two phases are phase 2 and phase 3 from the last video.

But what about Phase 1, the Capture Phase? Events are captured when they come down from the document root all the way to the target. But our event handlers are not picking up events on the capture phase. addEventListener is only listening during the bubbling phase, and not the capturing phase. That's the default behavior of it. Reason for it, is because the capturing phase is usually irrelevant, and not very useful. The bubbling phase on other hand, is very useful for event delegation.

We can capture events during event capturing phase. Define a third argument to `true` or `false`. Means event handler will no longer listen for bubbling events, but capturing events.

```
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
```

What this will do, is see to it that the first element order has reversed. It passed through navigation first. Because it's listening for the event as it travels down, rather than when they travel back up.

Only reason why capturing and bubbling exists, is because of historical reasons and different versions in older browsers.
