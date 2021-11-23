# Types of Events and Event Handlers

An event is basically a signal that's generated by a DOM node. A signal means something has happened, for ex a click, mouse moving, anything of importance really generates an event. Can then listen for these events in our code using event listeners so that we can then handle them. No matter if we handle them or not, that event will always happen when a user clicks for example.

`mouseenter` event

Kind of like mouseehover in CSS, fires whenever a mouse enters a certain element.

Mouse and keyboard events are usually the most important events. But there are loads of others.

```
const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
});
```

Can also create an event by:

```
h1.onmouseenter = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};
```

On MDN there is a table with a list of properties. `.onmouseenter`, there is an `.on` event for everything. `onclick`, etc. This is kind of old school. Not really used nowadays.

`.addEventListener` is better because it allows us to add more than one event. Can't do that `onmouseenter`.

Second advantage, is we can even remove an event handler in case we don't need it anymore. Very simple and very useful.

To do that, first we need to export the function into a named function. Then need `removeEventListener`:

```
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  h1.removeEventListener('mouseenter', alertH1);
};
```

Doesn't have to be inside of the function. Could remove it anywhere else in our code. Could remove it after a certain amount of time has passed:

```
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
```

Third way of handling events is by using an HTML attribute. Should actually not be used.

```
  <h1 onClick="alert('HTML alert')">
```

do on