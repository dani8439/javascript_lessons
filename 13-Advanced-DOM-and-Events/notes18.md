# Building a Slider Component: Part 2

Start by adding an event handler to a keyboard event so can also slide left or right when hitting left or right arrow keys.

Handle keyboard events right at the document.

```
document.addEventListener('keydown', function (e) {
  console.log(e);
});
```

See that when you hit ArrowLeft or ArrowRight, the event appears in the console.

```
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide(); // works because of short circuiting.
});
```

can reuse logic from the `prevSlide()` function, which is why we moved it out of the other function so it can be referenced easily. Can use short circuiting to do for the right key, if both conditions truthy, go right. Can chose which version you like most and decide which you want to use.

Now to do the dots. Have a div and empty container for the dots.

Start by creating all the dots in there. Creating new function to create the dots. Each dot will be one element with clsas of `dots__dot` and the number of the slide (data attribute) holds something we need to make it work.

Need to put index in, so we can click and then move to next slide. Also need to call the function so it'll work.

```
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();
```

Now need to make the dots work. Add another event handler/listener. Going to use event delegation, attach to common parent, not each dot.

```
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // console.log('DOT');
    const slide = e.target.dataset.slide;
  }
});
```

Can use destructuring so `const slide = e.target.dataset.slide` can become `const { slide } = e.target.dataset`

Now works, but now have to activate the dot so it changes color. All we have to do is give it a special class. Do it in another function.

How to do that? A bit similar to tbe buttons that shifted up. Active class. To do that, before we actived one, we first deactivated all. So select all of the dots each time we want to activate one, remove the active class, then only add it to the one we're interested in.

```
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
};
```

That's the first step. Now to add it only on one we're interested in. Can do that based on the data attribute. Want to select based on dataslide attribute.

```
document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
```

It works. Only problem is we refresh page, see no dots. So call the function `activateDot(0)` and pass in 0 to activate it with slide 0.

Code looks like this:

```
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

activateDot(0);

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
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  }
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide(); // works because of short circuiting.
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // console.log('DOT');
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
```

Now to refactor. Make an `init()` function. And then move all the logic we worked on into a single `slider()` function so we don't pollute the global namespace.

```
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  };

  const init = function () {
    // call it with 0 so that i is set to 0, and we start there.
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide(); // works because of short circuiting.
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('DOT');
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
```

Our slider is working, we could even pass in some values into it. Could pass in some options, to make the slider function accept some options like an object and work with that. It's a pretty common thing to do.
