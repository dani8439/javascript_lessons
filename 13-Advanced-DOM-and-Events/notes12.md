# Passing Arguments to Event Handlers

All of this works because events bubble up from their target.

`mouseover `is similar to `mouseenter`, with the difference that `mouseenter` does not bubble. We need the event to bubble so it can reach the navigation element. There are also opposite events of `mouseover` and `mouseenter`, and we use these to do the opposite of what they do, to undo it on the hover.

Opposite of `mouseenter` is `mouseleave` and opposite is `mouseover` is `mouseout`

No `closest` method this time with tabs, because no children element we could click accidentally in the navbar. So a simple check of ` if (e.target.classList.contains('nav__link'))` is enough.

Then need to select sibling elements and all the other links. Can do that by going to the parent and selecting children.

Use `closest` because each link has `nav__link` class.

Code is very repetitive having same information hovering in and out and just switching the opacity.

```
nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});
```

To DRY it up, put code in separate function, `handleHover()`

```
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', handleHover);

nav.addEventListener('mouseout', handleHover);
```

We've passed in a second function as an argument before. But, we want our opacity as the argument, and how to pass it in as an argument as we've done in `nav.addEventListener('mouseover', handleHover)` ? of `0.5` and `1`.

JS expects a function and not just some other regular value, which would be the result of say, calling `handleHover(e, 0.5)`. This will throw an error.

Solution would be to still have a callback function that JS will call for us, with our arguments could do:

```
nav.addEventListener('mouseover`, function(e) {
    handleHover(e, 0.5);
})
```

This works because still calling the function manually. Will only be executed as soon as JS executes the function value.

```
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
```

This is the second version of our code working, but we can actually do even better and remove the anonymous callback functions altogether. Looks a little ugly having a function that calls another function.

By using the `bind` method. `bind` method creates a copy of the function that it's called on. It will set the `this` keyword that it's called on in the function call to whatever value we pass into `bind`.

```
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
```

Works because `bind` returns a new function. In this function, the `this` variable will be set to the value passed in 0.5 or 1.

Usually the `this` keyword is set to `currentTarget`. Can use the `this` keyword and move it to opacity, because that's what we're passing in. The `this` keyword is now our opacity. Essentially we used the `bind` method to pass an argument into a handler function.

```
const handleHover = function (e) {
  // console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
```

Use "" that it's an "argument" because it's not really an argument. Don't even need it in the handleHover. It's impossible to pass another argument into an eventHandler function. Any handler function can only have one real parameter and that is the event. But if we want to pass additional values in, need to use the `this` keyword. If want multiple values, could pass in an array, or object instead of one value in the `nav.addEventListener('mouseover', handleHover.bind(0.5))`
