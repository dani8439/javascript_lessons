# Lazy Loading Images

The most important things when building any website, is performance. Images have the biggest impact by far on page loading. Important images are optimized on any page. Can use a strategy called lazy loading.

Blurred and then focuses. Have a very low resolution image that's loaded in the beginning. Dimensions are tiny. (200x200) While the real one is much bigger. Reference the big image in the data-src attribute. It's not a standard HTML attribute, but one we can create ourselves.

Idea is as we scroll, replace low res image with the one specified with data-src attribute, and then remove the class that makes the image blurred.

Really impacts how your site works if you have slow data, slow computer, slow phone, etc.

Select all images with property of `data-scr`. Don't want all images, just those. Do that by selecting img, and then between brackets the attribute.

```
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);
```

Then use the imgObserve to observe each image.

Functionality is always within the callback function within `loadImg`

```
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace the src attribute with data-src -- Main functionality
  entry.target.src = entry.target.dataset.src;
};

```

load Event is like any other event, have to listen to it and it will do things.

```
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace the src attribute with data-src -- Main functionality
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));
```
