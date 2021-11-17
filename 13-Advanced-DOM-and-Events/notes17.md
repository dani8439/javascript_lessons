# Building a Slider Component: Part 1

We have all the slides on top of each right now. Need to establish that they are side by side, and the transform property on them shifts so things move.

Position 0%, 100%, 200%, 300% for each slide so they will shift back and forth. Can calculate these values by multiplying 100 perceny by the current index.

```
const slides = document.querySelectorAll('.slide');

// loop through and set style on each of them
slides.forEach((s, i) => (s.style.transform = `translateX(${100} * i)`));
// 0%, 100%, 200%, 300%
```

Mess with the scale, and translateX so all 4 slides are visible, then set overflow to visible, for now to see all slides.

```
const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';

// loop through and set style on each of them
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// 0%, 100%, 200%, 300%
```

Find the left button and right button.

Now, going to place an event listener on the right button to listen for the click so slides will slide. Going to the next slide, is changing the value in teh transform property. Change the percentage so slide we want to move to is 0% (-100, 0, 100)

Outside place new variable for current slide. It's a `let` because we update it.

To go from -100, 0, 100, 200%. How do we do that? We take the current index and subtract the current slide from it.

```
btnRight.addEventListener('click', function () {
  curSlide++;

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
```

As we loop over slide, in first iteration, it'll be 0. Then 0 -1 is -1 then times 100 is -100. Then next slide index is 1. 1-1 is 0, that becomes 0. Active slide is the one we want to be 0%.

Need to set a maxSlide so that it doesn't keep scrolling. Do that by placing logic of an if/else statement.

Before refactoring:

```
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';

// loop through and set style on each of them
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// 0%, 100%, 200%, 300%

btnRight.addEventListener('click', function () {
  // max slide so it doesn't keep scrolling beyond size of slides. -1 to make it 0 based.
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
// curSlide -1: -100, 0, 100, 200%
```

After refactoring:

```
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// call it with 0 so that i is set to 0, and we start there.
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
```

To create logic to go back:

```
const prevSlide = function () {
  curSlide--;
  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
```

Create function of `prevSlide` in this case, current slide will be decreased. Reuse same function of before, with same slide. It's the same if going forward or backwards. Just update the transform property on all of the slides. Main diff between prev and next slide, is main way we determine current slide. To go previous slide, we decrease, to go forward, we increase.

Have same problem of before of keep decreasing current slide. So in which situation does decreasing the current slide not work? Doesn't work when curSlide is already 0.

```
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
    goToSlide(curSlide);
  }
};
```
