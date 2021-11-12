# Styles, Attributes and Classes

To set style on element get the element, then the style, and then the property name (in camelCase). Have to remember to use CSS syntax (the px, em, ex)

These styles are called in line styles. Styles set directly in the DOM.

Cannot get a style that is hidden in class or doesn't exist, only of the stuff we've set ourselves inline.

Say, color is set in the style sheet, if you try to console.log it, get an empty space. But we can use the `getComputedStyle()` function. Pass the element in to get it. But get a huge object. That has all of the properties and all of the values, then in practice we take a certain property from it.

```
console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 50px
```

```
message.style.height = getComputedStyle(message).height + 40 + 'px';
```

Problem is it's a string. Numbers won't add up. Nothing happens. So have to call `Number.parseInt()` or `Number.parseFloat()` to make it a number so it will work. Neet to specify number 10 in the function.

```
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
```

## CSS Custom properties. CSS custom variables

Called custom properties, but more like custom variables. Very similar to idea of variables in JS. Can change a value in many places but just changing it once. If we can change it in the CSS file, can also change it using JS. They are defined in the document root, which is the equivalent of the `document.documentElement`.

Need to use `.setProperty()` pass in the name, and the value. Could use it for all properties.

```
document.documentElement.style.setProperty('--color-primary', 'orangered');
```

## Attributes

In HTML just to remember, all of the src, alt, class, id, are attributes of the element. In JS can access them and change them.

```
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://127.0.0.1:8080/img/logo.png
```

If we specify it in the HTML, JS will automatically make it. But if we specify something that's not a standard, JS doesn't do the same. Say tried to make a designer element in the CSS, it's not a standard property that's expected, and will read as undefined.

Of course there is a way to read it in a non traditional manner.

```
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas
```

As we can read the values for the attributes, we can also set them.

Also the opposite of `getAttribute()` which is `setAttribute()`

```
logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas
logo.setAttribute('company', 'Bankist');
```

the url/src is different than what we have in the HTML. the url that pops up in the console is the absolute URL. What's in the HTML is the relative URL. (relative to the folder) If we literally want the URL (the relative one), then we also have to use `.getAttribute()`.

```
console.log(logo.src); // http://127.0.0.1:8080/img/logo.png
console.log(logo.getAttribute('src')); //img/logo.png
```

Same is true for href on links,

```
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:8080/#
console.log(link.getAttribute('href')); // #
```

## Data Attributes

Also special types of Attributes, Data Attributes.
Data attributes are a special kind of attributes that start with the word data.

`data-version-number="3.0"`

What's special is that the attribute is now at \_\_.dataset.

```
console.log(logo.dataset.versionNumber);
```

They're always stored in the `dataset` object. Then camelCase the attributes name after that to find it.

## Classes

```
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');
```

Don't use `logo.className = 'jonas';` because it will override everything that's already there. Other methods don't interfere with other classes that are already there.
