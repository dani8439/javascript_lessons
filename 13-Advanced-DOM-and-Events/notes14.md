# A Better Way: The Intersection Observer API

What is the Intersection Observer API? This API allows our code to observe changes to the way a certain target element intersects another element, or the way it intersects the viewport.

Need to start by creating a new IntersectionObserver. Pass in a callback function, and an object of functions.

Have to user the observer to observer a certain targer.

```
const obsCallback = function () {};

const obsOptions = {};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
```

For the options, first need the root element, which is the target we want to intersect.
Then you need a threshold, basically the percentage of intersection where the observer callback will be called.

```
const obsOptions = {
  root: null,
  threshold: 0.1
};
```

The callback function will be called each time the observed element (our target element) is intersecting the root element at the threshold we defined. In current example, whenever first section (our target) is intersecting the viewport at 10% then the obsCallback function will be called no matter if scrolling up or down. Function is called with two arguments, `entries` and the `observer` object itself.

Can have multiple thresholds (an array). The entries are actually an array of the threshold entries.

```
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
```

IntersectionObserverEntry, should be close to 10%. And the IntersectioRatio inside is very interesting. It's interesting, because we only get the entry when we get the event we're interested in, in this case the threshold of 10%.

```
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  // root element is the target that we want to intersect
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
```

Passing in 0 to the threshold means that callback will trigger when target element moves completely out of view, and as soon as it enters into view. Callback function is called when moving in and out. Unlike specifyin say 1, which means it's only called when 100% of the target is in the viewport, which is impossible. .2 means when 20% is visible, it's called.

Let's use this to implement the sticky navigation. When do we want the navigation to become sticky? When the header moves completely out of view.

So this time going to observe the header element.

```
const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries; // same as writing entries[0]
  console.log(entry);

  // isIntersecting is false - add sticky. This property is from the IntersectionObserverEntry
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // when 0percent of header is visible, we want something to happen.
  rootMargin: '-90px',
});
headerObserver.observe(header);
```

`isIntersecting` is false - add sticky. This property is from the IntersectionObserverEntry

`rootMargin` is a for example a box of 90px that's applied outside of our header element.
As if the header stops outside and went way passed. Need to specify the unit, which has to be pixels. Percentage and rem don't work. It's just a visual margin that gets applied.

rootMargin is important to specify it correctly. Need it in a lot of places.

Let's calculate height correctly, by using `getBoundingClientRec()` instead of hardcoding 90px.

```
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries; // same as writing entries[0]
  console.log(entry);

  // isIntersecting is false - add sticky. This property is from the IntersectionObserverEntry
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // when 0percent of header is visible, we want something to happen.
  rootMargin: `-${navHeight}`,
});
headerObserver.observe(header);
```
