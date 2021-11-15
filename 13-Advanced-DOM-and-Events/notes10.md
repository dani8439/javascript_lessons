# DOM Traversing

Traversing is basically walking through the DOM. Which means that we can select elements based on another element. Important because sometimes need to select element relative to a certain element (parent or child etc). Or sometimes we don't know the structure of the DOM at runtime, so we need DOM traversing.

## Going Down: Children

First way to go down is to use `.querySelector()` because it works on elements as well as the document.

Returns a NodeList. `.querySelectorAll()` selects everything of the child class that has whatever attribute we sent in. Will work no matter how deep the child element is. In this case, they are direct children. If there were other `.highlight` class children that were not children of `h1` they wouldn't be selected. Imported to note.

Sometimes we want direct children, so do `h1.childNodes`

`console.log(h1.children);` gives an HTMLCollection, which gives a live collection (gets updated), and only gives what's within the actual h1. Only works for direct children.

Also first and lastElementChild:

```
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
```

## Going Up: Parents

For direct parents it's very straightforward:

```
console.log(h1.parentNode);
console.log(h1.parentElement);
```

Sometimes actually need a parent that's far away.

`.closest()` method receives a query string like with `querySelector` and `querySelectorAll`

```
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';
```

`.closest()` is basically the opposite of `.querySelector()` both receive a query string as an input. But `.querySelector()` finds children, and `.closest()` finds parents.

## Selecting Siblings

Can only access direct siblings. Only previous and the next.

```
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
```

have same methods like with Nodes (`.previousSibling` and `.nextSibling`)

If we need all the siblings and not just the previous or next, then we can use the trick of moving up to the parent, and reading all the children from there:

```
console.log(h1.parentElement.children);
```

It's an HTML collection, not an array, but still an iterable we can spread into an array and we can do stuff with it:

```
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
```
