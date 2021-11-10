# How the DOM really works

## What is the DOM?

It's the interface between the JS code and our browser (the html doc's that are rendered in the browser).

👉 Allows us to make JavaScript interact with the browser.

👉 We can write JavaScript to create, modify, and delete HTML elements; set styles, classes and attributes, and listen and respond to event.

👉 DOM tree is generated from an HTML document, which we can then interact with.

👉 DOM is a very complex API (Application Programming Intervace) that contains lots of methods and properties to interact with the DOM tree. (In practice that means that the DOM contains a ton of methods and properties that we use to interact with the DOM trees (`.querySelector(), .addEventListener(), .createElement(), .innerHTML, .textContent, .children, etc`)).

In the DOM there are many "Types" of nodes. For ex, some are HTML elements, others are just text. All these DOM methods and properties are organized into these different types of objects.

### How the DOM API is organized behind the scenes.

Every single node in the DOM tree is of the type `Node`. Such as everything else in JS, each node is represented in JS by an Object. This object gets access to special methods and properties (`.textContent, .childNodes, .parentNode, .cloneNode()` etc. ) How should they be represented? This `Node` type has a couple of different child types:

`Element`, `Text`, `Comment` and `Document` Type.

`Text`: ex. paragraph. Whenever text inside any element.
`Comment`: Comment. Same thing happens for HTML comments. Everything that's in teh HTML has to go into the DOM as well.
`Element` there is the element as well, each element gives access to a bunch of useful properties like `innerHTML, .classList, .children, .parentElement`, and methods like: `.append(), .remove(), .insertAdjacentHTML(), .querySelector(), .closest(), .matches(), .scrollIntoView(), .setAttribute()`. Each element will be represented internally as an object. The element type has internally an `HTMLElement` child type. That element type itself has exactly 1 child type for each `HTMLElement` that exists in html. Special type for buttons, links, so on and so forth. That's important, because each of these `HTMLElements` can have different and unique properties. `img` has a `src` attribute which no other element has. `anchor` element has an `href` element which no other elements have.

### Inheritance

What makes all of this work, is something called Inheritance.
What is inheritance? Inheritance means that all the child types will get access to the methods and properties of their parent node types.

For EX: an `HTMLElement` will have access to everything from the `Element` type, `innerHTML, .classList` etc. And then will get access to everything from the `Node` type. `.addEventListener(), .cloneNode()` or `.closest()` methods. Can think of this as if the `HTMLElement` is also an `Element` and also a `Node`.

May seem weird and confusing, but don't worry. For now understand, the DOM API is broken up into these different types of nodes. Each of these nodes has access to different types of methods and properties, and some inherit more than others.

`Document` Node type, just another type of Node. Contains important methods like `.querySelector(), .createElement(), and `.getElementbyId()`.

**`.querySelector()`** is available on both the `Element` type and the `Document` type.

Final missing piece, is that the DOM API needs a way to let the node types listen to different events. Remember we listen for events by calling `.addEventListener()` on an element or document. Why does that work? Because there's a special node type called `EventTarget` which is a parent of both the `Node` type and the `Window` Node type. Thanks to this and inheritence, we can call an eventListener on any node within the DOM API. All elements will inherit this method. Therefore we'll be able to use `addEventListener()` on anything.

Never manually create an `EventTarget` object, it's just an abstract type. All happens behind the scenes to make the functionality work as we expect it to work.

This is how the DOM API works in a nutshell behind the scenes.

Tons of material in MDN documentation if you want to dig deeper.
