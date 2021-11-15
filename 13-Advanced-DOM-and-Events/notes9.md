# Event Delegation: Implementing Page Navigation

`#section--2` called anchors, hash and then id. Will automatically scroll the page to that element when clicked.

Need to prevent that default behavior.

`this` is always the current element.

```
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoVie({ behavior: 'smooth' });
  });
});
```

Very common practice to do `document.querySelector()` then to pass in the id of the html element we want, and then call `scrollIntoView()` on it to have the page scroll down to that section

Works fine, just not efficient really. Adding exact same callback function, adding it once to each of the three elements. Exact same function attached to all three elements. It's fine for only three elements, but what if we had 10,000 elements? If we did the same thing, then we would be creating 10,000 copies of the same function. Would impact the performance. Not a clean solution. Better solution is to use event delegation.

In event delegation, we use the fact that events bubble up. We use that by putting an event listener on a common parent of all the elements that we are interested in. In our example, it's the container around the links. Then when our user clicks one of the links, event is created, bubbled up, then we can catch the event in the parent element and use it there as we know where it originated. Can figure that out by looking at the `event.target property.`

Need 2 steps in event delegation

- Add the eventListener to a common parent element of all the elements we are interested in.
- Determine what element originated the event.

Remember `event.target` because very important to show where the event happens.

Need a matching strategy to get only the elements we are interested in. Easiest way is to check if the target has the nav\_\_link class.

```
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
  }
});
```

Final code looks like this:

```
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
```

Added one big event handler function to the parent element for all elements we are interested in, then find where the clicj event came from. Added matching strategy to ignore clicks not on the links. Coming up with the matching strategy is the hardest part of event delegation.

There's actually an even more important use case of event delegation, which is when we are working with elements not yet on the page on runtime. Great example are buttons added dynamically when the application is used.
