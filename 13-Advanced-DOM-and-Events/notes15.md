# Revealing elements on Scroll

Implementing another feature using the IntersectionObserver API, revealing elements as we scroll close to them.

Move to make all sections hidden. Job is to remove each class of hidden as we approach each section. But a bad idea to do manually using HTML, better to use JavaScript to do it. Because some people disable JavaScript in the browser, and would have no way of removing the class.

We use `.forEach()` whenever we want to do something that does not involve creating a new array.

```
allSections.forEach(function (section) {
  // use the observer to observe section
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
```

Make it so that the section is revealed when 15% is in view:

```
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
```

Need a way of knowing what section intersected the viewport. When console logging the entry, can use `entry.target` and see.

Only want to trigger removing when the target is intersection.

Can do one more small improvement which is unobserve the sections. Already did the work we wanted.

```
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  // guard clause, if not intersecting, return right away. If it is, then code will be executed.
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // use the observer to observe section
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
```
