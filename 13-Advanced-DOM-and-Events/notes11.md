# Tabbed Component

Very popular, common nowadays. Have some kind of tab, and the area below changes. When clicked, reveals the associated content.

```
tabs.forEach(t =>
  t.addEventListener('click', () => {
    console.log('TAB');
  })
);
```

Bad practice. What if we had 200 tabs? Would slow down page.

Need to use event delegation. Need to attach event handler on common parent element of all the events we are interested in. In this case, it's the tabs container.

**Guard Clause**
`if (!clicked) return;`

If statement which will return early if some condition is matched. In this case, when nothing clicked, want to immediately finishe the function.

Could have written instead:

```
if (clicked) {
    clicked.classList.add('operations__tab--active');
}
```

Cleaner to return the function immediately if a certain condition is matched.

```
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // remove the tab from everything so they will move up and down when clicked. -- remove active classes for tab and content
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // add tab only on active tab clicked.
  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
```
