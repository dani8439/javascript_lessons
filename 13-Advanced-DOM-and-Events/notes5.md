# Implementing Smooth Scrolling

Start by selecting the button and section we want to scroll to. Then add an eventListener to the button

```
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#second--1');
```

`window.scrollTo()` is a global function available on the window object.

```
btnScrollTo.addEventListener('click', function (e) {
  // get coordinates where we want to scroll to
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // top is relative to the viewport, not the document. Won't work more than once.
  <!-- window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  ); -->
<!--
    window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  }); -->

  section1.scrollIntoView({behavior: 'smooth'});
});
```

current position + current scroll works around bug.

Can use `scrollIntoView()` as the modern way so don't have to do the other steps. However that only works on newer browsers. Does the same thing.

```
section1.scrollIntoView({ behavior: 'smooth' });
```
