# Selecting, Creating and Deleting Elements

## Selecting Elements

Selecting elements, start at the top of any document. `document.documentElement`

`.querySelector()` will select first element.

`.querySelectorAll()` will select all of those elements.

`.querySelectorAll` returns a NodeList.

all these methods are available not just on the document, but on the elements. We use this a lot when we want to select child elements.

`document.getElementById('id-name')` you pass in the element ID without the selector. Only need the selector for the `.querySelector` methods.

`document.getElementsByTagName('name')` --> this method returns an **HTMLCollection**, not a NodeList It is a so called live collection. Meaning, if anything is updated, the HTMLCollection is updated immediately. Can delete elements from the DOM manually rather than programmatically.

The same doesn't happen with a NodeList. Everything remains. Because the variable doesn't update itself. Was created at the time that everything existed.

`document.getElementsByClassName()` similar to `getElementsByTagName` and `getElementById`. Don't need the selector. Will also return a live, `HTMLCollection`.

## Creating Elements and Inserting elements

We can create HTML elements using the `.insertAdjacentHTML` function we used in the Bankist App. It's a quick and easy way of creating elements.

`document.createElement()` pass in a string of the tag name. Creates a DOM element. Not yet in the DOM. If we want it on the page, need to manually insert it into the page.

Stored it in message constant, so it's just an object we can call methods on it now.

```
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
massage.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';


header.prepend(message);

```

`.prepend()` adds the elements as the first element.

Can also add as the last child, which is `.append()`

Message is only added once, at the end. Because message is now a live element in the DOM. Can't be inserted in two places simultaneously. First prepended it, then we appended it. Append moved it from being the first child to being the last child. It moved it, it didn't insert it, because it was already there by prepend.

Can use the `.prepend` and `.append` methods to move elements as well as inserting them.

What if we wanted to insert multiple copies of the same element? First would have to copy the element.

Have to clone it first with `.cloneNode` pass in `true`.

`header.append(message.cloneNode(true));`

```
header.before(message);
header.after(message);
```

`.before()` method will insert the element before as a sibling.
`.after()` method will insert the element after the element as a sibling.

## Delete elements

`.remove()` method is very recent. Before could only remove child elements, had to select parent element and remove the child from there. Now can just select the element and delete it directly on clicking through the callback mesage.

```
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message)
  });

```

DOM Traversing is when you move up and down by selecting parent or child etc.
